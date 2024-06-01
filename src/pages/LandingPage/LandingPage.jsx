import Header from "../../components/Header/Header";
import "./LandingPage.Styles.css";

const LandingPage = ({ toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
    </>
  )
}

export default LandingPage;