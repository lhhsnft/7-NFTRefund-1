import { ethers } from "ethers"
import MainnetContractABI from '../abi/mainnet.json'
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from 'web3modal';
import styled from "styled-components"
import React,{ useEffect,useState } from "react";
import {set,get,subscribe} from './store'
import { normalizeLocalePath } from "next/dist/shared/lib/i18n/normalize-locale-path";
import Chip from '@mui/material/Chip'
import { formatAddress } from "./utils";
import showMessage from "./showMessage";

const CHAIN_ID = 1;
const NETWORK = 'mainnet';
const contractABI = MainnetContractABI;

const infuraID = 'df4d267c05fb4f42addf8810a5dcee0b'
const contractAddress = '0x8514eF77f7B808DE634A559a2c1fCe3A311aDb1c'


const providerOptions = {
    walletconnect:{
        package: WalletConnectProvider,
        options:{
            infuraID:infuraID,
        }
    }
}

let web3ModelInstance
if(typeof window!=='undefined'){
    web3ModelInstance = new Web3Modal({
        network: NETWORK,
        cacheProvider: true,
        providerOptions
    });
}



let provider;
let signer;
let instance;
let contract;

export async function connectWallet() {
    if (!instance) {
      instance = await web3ModelInstance.connect();
      provider = new ethers.providers.Web3Provider(instance);
      signer = provider.getSigner();
  
      contract = new ethers.Contract(contractAddress,
        contractABI.abi,
        provider
      );
    }
    return {provider,signer,web3Instance:instance,contract};
}

async function disconnectWallet(){
    provider = undefined;
    signer = undefined;
    instance = undefined;
    contract = undefined;
    await web3ModelInstance.clearCachedProvider(); 
}

  
  function ConnectWallet(props) {
    const [address, setAddress] = useState(null);
    const [loading, setLoading] = useState(false);

    // it is not work
    // useEffect(() => {
    //     const addressInStore = get("address") || null;
    //     if (addressInStore) {
    //        setAddress(addressInStore);
    //     }
    //     subscribe("address", () => {
    //         const addressInstore = get("address") || null;
    //         setAddress(addressInStore);
    //     });
    // },[]);


    useEffect(() => {
      const addressInStore = get("address") || null;
      if (addressInStore) {
          setAddress(addressInStore);
      }
      subscribe("address", () => {
          const addressInStore = get("address") || null;
          setAddress(addressInStore);
      });
    },[]);


  
    if(address && !loading){
        return (
            <Chip 
                label={address}
                color='primary'
                onDelete={async () => {
                    await disconnectWallet();
                    setAddress(null);
                    set('address',"");
                    set('fullAddress',"")
                }} 
            />
        )
    }
      return (
        <div style={{position:'relative'}} >
            <Chip 
                style={{fontSize:16}}
                label={loading? '正在连接':'连接钱包'} 
                color='primary'
                onClick={async ()=>{
                    setLoading(true);
                    try{
                        const { provider, signer, web3Instance } = await connectWallet();
                        const address = await signer.getAddress();
                        setAddress(formatAddress(address));
                        set("address", formatAddress(address));
                        set("fullAddress", address);
                        web3Instance.on("accountsChanged", async (accounts) => {
                            if (accounts.length === 0) {
                              await disconnectWallet();
                              set("address", "");
                              set("fullAddress", "");
                              setAddress(null);
                            } else {
                              const address = accounts[0];
                              setAddress(formatAddress(address));
                              set("address", formatAddress(address));
                              set("fullAddress", address);
                            }
                          });
                    }catch(err){
                        await disconnectWallet();
                        set("address", "");
                        set("fullAddress", "");
                        setAddress(null);
                        showMessage({
                          type: "error",
                          title: "链接钱包失败",
                          body: err.message,
                        });
                    }
                    setLoading(false);
                }} 
                />
        </div>
    );
};


export default ConnectWallet;
