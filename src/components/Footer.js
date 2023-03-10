import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

function Footer() {
  return (
    <Container>
      <Logo>
        <a
          href="https://opensea.io/collection/thekrakenz"
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

      <Link to="Head" spy={true} smooth={true}>
        <Button>
          <img src="/images/Arrow.png" alt="" />
        </Button>
      </Link>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div``;

const Button = styled.div`
  padding: 17px 20px;
  border: none;
  background-color: rgb(0, 65, 130);
  cursor: pointer;
  border-radius: 100px;
  transition: background-color 0.3s;
  margin-right: 60px;

  img {
    width: 50px;
    rotate: 180deg;
  }

  @media (max-width: 1101px) {
    margin-bottom: 10px;

    img {
      width: 35px;
    }
  }

  @media (max-width: 530px) {
    padding: 12px 15px;
    margin-right: 20px;

    img {
      width: 35px;
    }
  }
`;
