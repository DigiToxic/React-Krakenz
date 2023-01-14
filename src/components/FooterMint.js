import React from "react";
import styled from "styled-components";

function FooterMint() {
  return (
    <Container>
      <Logo>
        <img src="/images/pixel-opensea.png" alt="" className="Opensea" />
        <a
          href="https://twitter.com/captainznotes"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/images/pixel-twitter.png" alt="" className="Twitter" />
        </a>
        <img src="/images/pixel-etherscan.png" alt="" className="etherscan" />
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
