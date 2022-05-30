import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import QnAPage from "./Components/QnAPage/QnAPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import TeamsPage from "./Components/TeamsPage/TeamsPage";
import ContactPage from "./Components/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <TeamsPage />
      <QnAPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
