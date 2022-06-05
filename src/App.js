import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import QnAPage from "./Components/QnAPage/QnAPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import TeamsPage from "./Components/TeamsPage/TeamsPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Innerpage_theory from "./Components/QnAPage/Innerpage_theory";
import Innerpage_lab from "./Components/QnAPage/Innerpage_lab";
import Initialbasics from "./Components/QnAPage/LabProbs/Initialbasics";
import Loops from "./Components/QnAPage/LabProbs/loops";
import ArrayandSrings from "./Components/QnAPage/LabProbs/1darrayandstrings";
import FunctionsRecursions from "./Components/QnAPage/LabProbs/functionsandrecursions";
import StructuresAndPointers from "./Components/QnAPage/LabProbs/structurespointers";
import SortingArrays from "./Components/QnAPage/LabProbs/sortingarrays";
import Linkedlists from "./Components/QnAPage/LabProbs/linkedlist";
import LTcombined from "./Components/QnAPage/LabProbs/LTcombined";
import Theory from "./Components/QnAPage/TheoryProbs/theorycombined";

function App() {
  return (
    <div>
      <Router>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/OurTeam" element={<TeamsPage />} />
            <Route
              path="/QnA"
              element={
                <div style={{ maxWidth: "70%", margin: "auto" }}>
                  <QnAPage />
                </div>
              }
            />
            <Route path="/ContactUs" element={<ContactPage />} />
            <Route path="/QnA/TheoryQuestions" element={<Innerpage_theory />} />
            <Route
              path="/QnA/TheoryQuestions/TheoryTests"
              element={<Theory />}
            />
            <Route path="/QnA/LabQuestions" element={<Innerpage_lab />} />
            <Route
              path="/QnA/LabProblems/InitialBasics"
              element={<Initialbasics />}
            />
            <Route path="/QnA/LabProblems/Loops" element={<Loops />} />
            <Route
              path="/QnA/LabProblems/ArrStr"
              element={<ArrayandSrings />}
            />
            <Route
              path="/QnA/LabProblems/FuncRec"
              element={<FunctionsRecursions />}
            />
            <Route
              path="/QnA/LabProblems/StrucPoint"
              element={<StructuresAndPointers />}
            />
            <Route
              path="/QnA/LabProblems/SortArr2D"
              element={<SortingArrays />}
            />
            <Route
              path="/QnA/LabProblems/LinkedList"
              element={<Linkedlists />}
            />
            <Route path="/QnA/LabProblems/LabTests" element={<LTcombined />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
