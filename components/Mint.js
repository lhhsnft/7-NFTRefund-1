import { useState, useEffect } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import Typography from "@mui/material/Typography";
import { get, subscribe } from "./store";

import ConnectWallet,{connectWallet} from './ConnectWallet.js'
import showMessage from './showMessage'

const ETHERSCAN_DOMAIN = "etherscan.io"

const Content = styled.div`
  max-width: 840px;
  margin: 0 auto 5% auto;
  strong {
    color: red;
  }
`;

const StyledMintButton = styled.div`
  display: inline-block;
  width: 140px;
  text-align: center;
  padding: 10px 10px;
  border: 4px solid #000;
  border-radius: 20px;
  color: #000;
  background: #dde4b6;
  cursor: ${(props) => {
    return props.minting || props.disabled ? "not-allowed" : "pointer";
  }};
  opacity: ${(props) => {
    return props.minting || props.disabled ? 0.6 : 1;
  }};
`;


function MintButton(props){
    const [minting, setMinting] = useState(false);
    return (
        <StyledMintButton
          disabled={!!props.disabled}
          minting={minting}
          onClick={async () => {
            if (minting || props.disabled) {
              return;
            }
            setMinting(true);
            try {
              const { signer, contract } = await connectWallet();
              const contractWithSigner = contract.connect(signer);
              const value = ethers.utils.parseEther(
                props.mintAmount === 1 ? "0.01" : "0.02"
              );
              const tx = await contractWithSigner.mint(props.mintAmount, {
                value,
              });
              const response = await tx.wait();
              showMessage({
                type: "success",
                title: "铸造成功",
                body: (
                  <div>
                    <a
                      href={`https://${ETHERSCAN_DOMAIN}/tx/${response.transactionHash}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      点击查看交易详情
                    </a>{" "}
                    或者到{" "}
                    <a
                      href="https://opensea.io/account"
                      target="_blank"
                      rel="noreferrer"
                    >
                      OpenSea 查看
                    </a>
                    。
                  </div>
                ),
              });
            } catch (err) {
              showMessage({
                type: "error",
                title: "铸造失败",
                body: err.message,
              });
            }
            props.onMinted && props.onMinted();
            setMinting(false);
          }}
          style={{
            background: "#dde4b6",
            ...props.style,
          }}
        >
          铸造 {props.mintAmount} 个{minting ? "中..." : ""}
        </StyledMintButton>
      );
}

function MintSection() {
    const [status, setStatus] = useState("0");
    const [progress, setProgress] = useState(null);
    const [fullAddress, setFullAddress] = useState(null);
    const [numberMinted, setNumberMinted] = useState(0);
  
    async function updateStatus() {
      const { contract } = await connectWallet();
      const status = await contract.paused();
      const progress = parseInt(await contract.totalSupply());
      setStatus(status);
      setProgress(progress);
    }
  
    useEffect(() => {
      (async () => {
        const fullAddressInStore = get("fullAddress") || null;
        if (fullAddressInStore) {
          const { contract } = await connectWallet();
          const numberMinted = await contract.numberMinted(fullAddressInStore);
          setNumberMinted(parseInt(numberMinted));
          setFullAddress(fullAddressInStore);
        }
        subscribe("fullAddress", async () => {
          const fullAddressInStore = get("fullAddress") || null;
          setFullAddress(fullAddressInStore);
          if (fullAddressInStore) {
            const { contract } = await connectWallet();
            const numberMinted = await contract.numberMinted(fullAddressInStore);
            setNumberMinted(parseInt(numberMinted));
            updateStatus();
          }
        });
      })();
    }, []);
    useEffect(() => {
      try {
        const fullAddressInStore = get("fullAddress") || null;
        if (fullAddressInStore) {
          updateStatus();
        }
      } catch (err) {
        showMessage({
          type: "error",
          title: "获取合约状态失败",
          body: err.message,
        });
      }
    }, []);
  
    async function refreshStatus() {
      const { contract } = await connectWallet();
      const numberMinted = await contract.numberMinted(fullAddress);
      setNumberMinted(parseInt(numberMinted));
    }
      let mintButton = (
        <div
          style={{
            display: "flex",
          }}
        >
          <MintButton
            onMinted={refreshStatus}
            mintAmount={1}
            style={{ marginRight: "20px" }}
          />
          <MintButton
            onMinted={refreshStatus}
            mintAmount={2}
            disabled={numberMinted === 1}
          />
        </div>
      );
  
    if (progress >= 1024 || status == true) {
      mintButton = (
        <StyledMintButton
          style={{
            background: "#eee",
            color: "#999",
            cursor: "not-allowed",
          }}
        >
          售罄
        </StyledMintButton>
      );
    }
  
    if (numberMinted === 2) {
      mintButton = (
        <StyledMintButton
          style={{
            background: "#eee",
            color: "#999",
            cursor: "not-allowed",
          }}
        >
          铸造已达上限
        </StyledMintButton>
      );
    }
  
    if (!fullAddress) {
      mintButton = (
        <StyledMintButton
          style={{
            background: "#eee",
            color: "#999",
            cursor: "not-allowed",
          }}
        >
          请先连接钱包
        </StyledMintButton>
      );
    }
  
  
    return (
       
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: 20, display: "flex", alignItems: "center" }}>
          您的钱包： <ConnectWallet />{" "}
          {fullAddress && (
            <span style={{ marginLeft: 10 }}>
              可以铸造 {2 - numberMinted} 个。
            </span>
          )}
        </div>
        {mintButton}
        <div style={{ marginTop: 20, fontSize: 20, textAlign: "center" }}>
          铸造进度：{progress === null ? "请先连接钱包✔" : progress} / 1024 
        </div>
      </div>
    );
}

function Mint() {
    return (
      <div>  
        <Content>
          <div
            style={{
              marginTop: 60,
              border: "4px dashed #6C0404",
              padding: "40px",
              borderRadius: 20,
            }}
          >
            <MintSection />
          </div>
        </Content>
      </div>
    );
}


export default Mint;
  

