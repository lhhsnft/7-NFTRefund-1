import { useState, useEffect } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import { get, subscribe } from "./store";
import ConnectWallet, { connectWallet } from "./ConnectWallet";
import showMessage from "./showMessage";


const ETHERSCAN_DOMAIN = "etherscan.io"

const Content = styled.div`
  max-width: 840px;
  margin: 0 auto 5% auto;
  strong {
    color: red;
  }
`;


const StyledRefundButton = styled.div`
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




function MintButton(props) {
    const [minting, setMinting] = useState(false);
    return (
      <StyledRefundButton
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
            const tx = await contractWithSigner.refund(props.mintAmount);
            const response = await tx.wait();
            showMessage({
              type: "success",
              title: "退款成功",
              body: (
                <div>
                  <a
                    href={`https://${ETHERSCAN_DOMAIN}/tx/${response.transactionHash}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    点击查看交易详情
                  </a>{" "}
                  。
                </div>
              ),
            });
          } catch (err) {
            showMessage({
              type: "error",
              title: "退款失败",
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
        退款
      </StyledRefundButton>
    );
  }


  
function RefundSection() {
    const [fullAddress, setFullAddress] = useState(null);
    const [id,setId] = useState(0);
  
    async function refreshStatus() {
      const { contract } = await connectWallet();
    }
    useEffect(() => {
      (async () => {
        const fullAddressInStore = get("fullAddress") || null;
        if (fullAddressInStore) {
          const { contract } = await connectWallet();
          setFullAddress(fullAddressInStore);
        }
        subscribe("fullAddress", async () => {
          const fullAddressInStore = get("fullAddress") || null;
          setFullAddress(fullAddressInStore);
          if (fullAddressInStore) {
            const { contract } = await connectWallet();
            refreshStatus();
          }
        });
      })();
    }, []);
  
    useEffect(() => {
      try {
        const fullAddressInStore = get("fullAddress") || null;
        if (fullAddressInStore) {
          refreshStatus();
        }
      } catch (err) {
        showMessage({
          type: "error",
          title: "获取合约状态失败",
          body: err.message,
        });
      }
    }, []);
  
  
  
      let mintButton = (
        <div
          style={{
            display: "flex",
          }}
        >
          <MintButton
            onMinted={refreshStatus}
            mintAmount={id}
            style={{ marginRight: "20px" }}
          />
        </div>
      );
  
  
    if (!fullAddress) {
      mintButton = (
        <StyledRefundButton
          style={{
            background: "#eee",
            color: "#999",
            cursor: "not-allowed",
          }}
        >
          请先连接钱包
        </StyledRefundButton>
      );
    }
    const handleChange = (e) => {
      setId(e.target.value);
    };
  
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
        </div>
        <Typography
            style={{
              marginTop: "1%",
              textAlign: "center",
            }}
            variant="body1"
            gutterBottom
          >输入你NFT的tokenID即可退款.
          </Typography>
        <TextField value={id} lable={"TokenID"} onChange={handleChange}/>
        <br/>
        <div>
          {mintButton}
        </div>
        
      </div>
    );
  }
  
  
  
  function Refund() {
    return ( 
        <Content>
          <div
            style={{
              marginTop: 60,
              border: "4px dashed #908C8C",
              padding: "10px",
              borderRadius: 20,
            }}
          >
            <RefundSection />
          </div>
        </Content>
    );
  }
  
  export default Refund;