import React, { useState } from "react";
import { addresses } from "./Mint";
import styled from "styled-components";

function WalletChecker() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState("");

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleCheckAddress() {
    const isInArray = addresses.includes(address);

    if (isInArray) {
      setResult("The address is whitelisted");
    } else {
      setResult("The address is not whitelisted");
    }
  }

  return (
    <Container>
      <input
        type="text"
        id="address"
        value={address}
        placeholder="Write wallet here..."
        onChange={handleAddressChange}
      />
      <button type="button" onClick={handleCheckAddress}>
        Check address
      </button>
      <Text>
        <p>{result}</p>
      </Text>
    </Container>
  );
}

export default WalletChecker;

const Container = styled.div`
  button {
    background-color: rgb(0, 80, 149);
    color: white;
    padding: 20px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: rgb(41, 119, 209);
    }
  }

  input {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border: none;
    padding: 20px;
    background-color: lightblue;
  }

  @media (max-width: 1500px) {
    input {
      padding: 10px;
    }

    button {
      padding: 10px;
    }
  }

  @media (max-width: 1100px) {
    margin-left: -10px;
    input {
      padding-left: 5px;
    }

    button {
      padding-right: 5px;
    }
  }
`;

const Text = styled.div`
  margin-top: 10px;
  width: 300px;

  p {
    font-size: 15px;
    font-family: Kongtext;
  }

  @media (max-width: 1500px) {
    p {
      font-size: 14px;
    }

    @media (max-width: 1100px) {
      p {
        font-size: 14px;
      }
`;
