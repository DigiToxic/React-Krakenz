import React from "react";
import styled from "styled-components";
import WalletChecker from "./walletChecker";

function Soon() {
  return (
    <Container>
      <Door>
        <div>
          <WalletChecker />
        </div>
        <span>
          <p>Mint soon...</p>
        </span>
      </Door>
    </Container>
  );
}

export default Soon;

const Container = styled.div`
  text-align: center;
  height: 586px;

  span {
    font-size: 20px;
    font-family: Kongtext;
  }

  @media (max-width: 2200px) {
    height: 909px;
  }

  @media (max-width: 1880px) {
    height: 715px;
  }
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

  div {
    margin-bottom: 100px;
  }

  @media (max-width: 1100px) {
    div {
      margin-bottom: 100px;
    }
  }

  @media (max-width: 2200px) {
    background-size: 1200px;
    height: 900px;
  }

  @media (max-width: 1881px) {
    background-size: 1000px;
    height: 700px;
  }

  @media (max-width: 1720px) {
    background-size: 1000px;
  }

  @media (max-width: 1101px) {
    background-size: 900px;
    height: 700px;
  }

  @media (max-width: 921px) {
    background-size: 900px;
  }

  @media (max-width: 475px) {
    background-size: 700px;
  }
`;
