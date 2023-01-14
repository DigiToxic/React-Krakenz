import React from "react";
import styled from "styled-components";

function HeaderMint() {
  return (
    <Container>
      <Button>
      <a href="/"><img src="/images/capitainz.png" alt="" className="Capitainz" /></a>
        <a href="/mint"><img src="/images/mint.png" alt="" className="mint" /></a>
      </Button>
    </Container>
  );
}

export default HeaderMint;

const Container = styled.div`
  display: flex;
  justify-content: end;
`;

const Button = styled.div`
  display: flex;
  justify-content: end;
`;
