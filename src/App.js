import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import HeaderMint from "./components/HeaderMint";
import Body from "./components/Body";
import Captainz from "./components/Captainz";
//  import Mint from "./components/Mint";
import Soon from "./components/Soon";
import Footer from "./components/Footer";
import FooterMint from "./components/FooterMint";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainContainer = styled.div`
  background-image: url("https://static.wixstatic.com/media/a67ef4_b614ad3156014c058f5c77f386c79371~mv2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

const RouterContainer = styled.div`
  background-image: url("https://static.wixstatic.com/media/a67ef4_14b179013a5544d193f27e100ca0afbd~mv2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/mint">
            <RouterContainer>
              <HeaderMint />
              <Soon />
              <FooterMint />
            </RouterContainer>
          </Route>

          <Route path="/captainz">
            <RouterContainer>
              <HeaderMint />
              <Captainz />
              <Footer />
            </RouterContainer>
          </Route>

          <Route path="/">
            <MainContainer>
              <Header />
              <Body />
              <FooterMint />
            </MainContainer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
