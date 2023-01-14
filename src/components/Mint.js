import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import { keccak256 } from "ethers/lib/utils";
import MerkleTree from "merkletreejs";
import abi from "./abi/abi.json";

const contractAddress = "0x4f4E56D7a52685551149D07649Fb696b8eF4C21F";
const API_KEY = "VRRW7A39QJDDVF698UJFWU1R9V5FABRMQJ";

export const addresses = [
  "0x9A41426ae9C88110188276bAF8046dC420005249",
  "0x2F6e6Cf9f8ace6C9bb3bDE1D991c844e20B1F1d2",
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
  "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
  "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
  "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
  "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
  "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  "0xB9277bb50FA9bD8Da38085622f5B782D47a64339",
  "0xD028780dDCBBD7930a9C27da65D3ca6f440E5127",
];

function MintButton() {
  const [mintAmount, setMintAmount] = useState(1);
  const [currentAccount, setCurrentAccount] = useState(null);
  let [totalSupply, setSupply] = useState("");

  const [proof, setProof] = useState([""]);

  let leaf = "";

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exist! We are ready to go!");
      const accounts = await ethereum.request({ method: "eth_accounts" });

      const leaves = addresses.map((x) => keccak256(x));
      const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
      const buf2hex = (x) => "0x" + x.toString("hex");

      console.log("root", buf2hex(tree.getRoot()));

      leaf = keccak256(accounts[0]); // accounts from accounts using accountsconnect/metamask
      setProof(tree.getProof(leaf).map((x) => buf2hex(x.data)));

      console.log("proof", proof);
      console.log(accounts);

      if (accounts.lenght !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account: ", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    }
  };
  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        let amount = mintAmount;

        console.log("Initialize payment");
        let cost = 0.002 * amount;
        // let nftTxn = await nftContract.mint(amount, { value: ethers.utils.parseEther(cost.toString()) });
        console.log("proof", proof);

        let nftTxn = await nftContract.WLmint(proof, amount, {
          value: ethers.utils.parseEther(cost.toString()),
        });
        console.log("Minting... please wait!");
        await nftTxn.wait();

        console.log(
          `Minted, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return <Button1 onClick={connectWalletHandler}>Connect Wallet</Button1>;
  };

  const mintNftButton = () => {
    return <Button2 onClick={mintNftHandler}>Mint NFT</Button2>;
  };

  useEffect(() => {
    checkWalletIsConnected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    const response = await fetch(
      `https://api-goerli.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${API_KEY}`
    );
    const mintedTokens = await response.json();
    setSupply(mintedTokens.result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setMintAmount(function (prevCount) {
      if (prevCount < 3) {
        return (prevCount += 1);
      } else {
        return (prevCount = 3);
      }
    });
  }

  function decrement() {
    setMintAmount(function (prevCount) {
      if (prevCount === 1) {
        return (prevCount = 1);
      } else {
        return prevCount - 1;
      }
    });
  }

  return (
    <Container>
      <Door>
        <Button>
          {currentAccount ? mintNftButton() : connectWalletButton()}
        </Button>
        <PlusMoins>
          <ButtonPlus onClick={increment}>
            <div>+</div>
          </ButtonPlus>
          <ButtonMoins onClick={decrement}>
            <div>-</div>
          </ButtonMoins>
        </PlusMoins>
        <MintAmount>Minting: {mintAmount}</MintAmount>
        <TotalSupply>Total Minted: {totalSupply}</TotalSupply>
      </Door>
    </Container>
  );
}

export default MintButton;

const Container = styled.div`
  text-align: center;
  height: 586px;
`;

const Door = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 600px;
  background-image: url("https://static.wixstatic.com/media/a67ef4_6805d7716e864acc9dc32ec420c87f29~mv2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 900px;

  @media (max-width: 475px) {
    background-size: 800px;
  }

  @media (max-width: 440px) {
    background-size: 700px;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button1 = styled.div`
  padding: 15px;
  border: none;
  border-radius: 12px;
  width: 240px;
  color: white;
  font-size: 17px;
  font-family: Kongtext;
  cursor: pointer;
  background: rgb(32, 129, 226);
  box-shadow: 1px 1px 30px;

  &:hover {
    background: rgb(60, 150, 240);
  }

  @media (max-width: 475px) {
    width: 220px;
    font-size: 15px;
  }

  @media (max-width: 440px) {
    width: 200px;
    font-size: 13px;
  }
`;

const Button2 = styled.div`
  padding: 15px;
  border: none;
  border-radius: 12px;
  width: 240px;
  color: white;
  font-size: 17px;
  cursor: pointer;
  background: rgb(32, 32, 32);

  &:hover {
    background: rgb(64, 64, 64);
  }

  @media (max-width: 475px) {
    width: 220px;
    font-size: 15px;
  }

  @media (max-width: 440px) {
    width: 200px;
    font-size: 13px;
  }
`;

const PlusMoins = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 475px) {
    margin-top: 30px;
  }
`;

const ButtonPlus = styled.div`
  margin-right: 40px;
  cursor: pointer;
    font-size: 30px;
    color: white;
    height: auto;
    margin: 10px;
    font-family: 'VT323';
    
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-transform: uppercase;
    
    cursor: pointer;

    line-height: 0;
  
    image-rendering: optimizeSpeed;
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
    
    border-style: solid;
    border-width: 20px;
    -moz-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
    -webkit-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
    -o-border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
    border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
  }

  div {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: auto;
    text-align: center;
    margin: -20px -20px;
    line-height: 20px;
    padding: 15px 25px;
    
    background: #000000;
    background:
      linear-gradient(135deg, transparent 10px, #000000 0) top left,
      linear-gradient(225deg, transparent 10px, #000000 0) top right,
      linear-gradient(315deg, transparent 10px, #000000 0) bottom right,
      linear-gradient(45deg,  transparent 10px, #000000 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    background-image:
      radial-gradient(circle at 0 0, rgba(204,0,0,0) 14px, #000000 15px),
      radial-gradient(circle at 100% 0, rgba(204,0,0,0) 14px, #000000 15px),
      radial-gradient(circle at 100% 100%, rgba(204,0,0,0) 14px, #000000 15px),
      radial-gradient(circle at 0 100%, rgba(204,0,0,0) 14px, #000000 15px);
  }

  &:active {
    top: 4px;
  }
  }

  @media (max-width: 475px) {
    div {
      padding: 12px 22px;
    }
  }
`;

const ButtonMoins = styled(ButtonPlus)`
  margin-left: 50px;
  margin-right: 15px;
`;

const MintAmount = styled.div`
  display: block;
  font-size: 18px;
  font-family: Kongtext;
  font-weight: bold;
  margin-top: 60px;

  @media (max-width: 440px) {
    font-size: 16px;
    margin-top: 50px;
  }
`;

const TotalSupply = styled.div`
  display: block;
  font-size: 18px;
  font-family: Kongtext;
  font-weight: bold;
  margin-top: 75px;

  @media (max-width: 440px) {
    font-size: 16px;
    margin-top: 50px;
  }
`;
