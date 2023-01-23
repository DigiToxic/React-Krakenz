import React from "react";
import styled from "styled-components";

function FooterMint() {
  return (
    <Container>
      <Logo>
        <a
          href="https://opensea.io/fr/collection/thekrakenz"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/images/pixel-opensea.png" alt="" className="Opensea" />
        </a>
        <a
          href="https://twitter.com/TheKrakenzNFT"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/images/pixel-twitter.png" alt="" className="Twitter" />
        </a>
        <a
          href="https://etherscan.io/address/0x6f5e46abfc5c4bd49c4c2cfec15bfc79c84e1d6a"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/images/pixel-etherscan.png" alt="" className="etherscan" />
        </a>
      </Logo>
    </Container>
  );
}

export default FooterMint;

const Container = styled.div`
  display: flex;
  justify-content: start;
`;

const Logo = styled.div``;
