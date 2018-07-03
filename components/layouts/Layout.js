import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import Container from "../ui/Container";
import config from "../../services/publicConfig";

const Layout = ({ children }) => (
  <div>
    <Header>
      <Container>
        <h1>{config.siteInformations.name}</h1>
        <h2>{config.siteInformations.slogan}</h2>
      </Container>
    </Header>
    <Container>
      <Navigation links={config.mainMenuLinks} />
      <div>{children}</div>
    </Container>
  </div>
);

export default Layout;
