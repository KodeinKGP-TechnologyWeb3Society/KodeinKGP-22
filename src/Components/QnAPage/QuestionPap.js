import Animation from "./Animation";
import { Link } from "react-router-dom";
import Innerpage from "./Innerpage_lab";
import "./QuestionPap.css";

const QuestionPap = () => {
  return (
    <div className="Question_page">
      <div className="title">
        Welcome to<span>KodeinKgp</span>
      </div>
      <div className="lab">
        <div id="lab_desc">
          <p>
            This block consists of PDS lab problems as well as their detailed
            solutions in the "Code" button that appears below the Questions from
            all the topics. Click on the button below and get started!{" "}
          </p>
          <Link to="/QnA/LabQuestions">
            <button className="btn" style={{background: '#e1e1e1'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="logo"
              >
                <path d="M128 96h384v256h64v-272c0-26.38-21.62-48-48-48h-416c-26.38 0-48 21.62-48 48V352h64V96zM624 383.1h-608c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.2 632.8 383.1 624 383.1z" />
              </svg>
              Lab
            </button>
          </Link>
        </div>
        <img src="src/vector#1.png" alt="" />
      </div>
      <div className="theory">
        <img
          className="img_theoryprob aspect-square"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojzHuiEgNv-RpnY7pdRWVFO-IN3rbiJiaNw&usqp=CAU"
          alt=""
        />
        <div id="theory_desc">
          <p>
            This block-section consists of PDS theory problemsas well as their
            detailed solutions in the "Code" button that appears below the
            Questions from all the topics. Click on the button below and get
            started!{" "}
          </p>
          <Link to="/QnA/TheoryQuestions" style={{textDecoration: 'none'}}>
            <button className="btn" style = {{background: '#e1e1e1'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-book"
                viewBox="0 0 16 16"
                className="logo"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
              Theory Questions
            </button>
          </Link>
        </div>
      </div>
      <div className="slider">
        <Animation />
      </div>
    </div>
  );
};

export default QuestionPap;
