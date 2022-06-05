import "./Data.css";
import { BsSlash } from "react-icons/bs";

function Page6() {
  return (
    <div className="page6_maindiv">
      <div className="image_page6">
        <div className="numbers_page6">
          <h1 className="client_number">
            <span className="number1">260+</span>

            <h5
              style={{
                fontSize: "2.1rem",
                color: "white",
                marginTop: "6%",
                fontWeight: "200",
              }}
            >
              Problems
            </h5>
          </h1>
          <h1 className="projects_number">
            <span className="number2">260+</span>
            {/* <BsSlash className="liner_page6 liner_2" /> */}
            <h5
              style={{
                fontSize: "2.1rem",
                color: "white",
                textAlign: "center",
                marginTop: "6%",
                fontWeight: "200",
              }}
            >
              Detailed <br /> Solutions
            </h5>
          </h1>
          <h1 className="awards_number">
            <span className="number3">1</span>
            {/* <BsSlash className="liner_page6 liner_3" /> */}
            <h5
              style={{
                fontSize: "2.1rem",
                color: "white",
                textAlign: "center",
                marginTop: "6%",
                fontWeight: "200",
              }}
            >
              Platform
            </h5>
          </h1>
          <h1 className="experience_number">
            <span className="number4">1</span>
            <h5
              style={{
                fontSize: "2.1rem",
                color: "white",
                textAlign: "center",
                marginTop: "6%",
                fontWeight: "200",
              }}
            >
              Mission
            </h5>
          </h1>
        </div>
        <div className="numbers_page6_mobile">
          <h1 className="client_number">
            <span style={{ fontSize: "30px" }}>260+</span>
            <div className="slasher">
              <BsSlash className="liner_page6 liner_1" />
            </div>
            <h5 style={{ fontSize: "1rem", color: "white", fontWeight: "200" }}>
              Problems
            </h5>
          </h1>
          <h1 className="projects_number">
            <span style={{ fontSize: "30px" }}>260+</span>
            <div className="slasher">
              <BsSlash className="liner_page6 liner_2" />
            </div>
            <h5
              style={{
                fontSize: "1rem",
                color: "white",

                fontWeight: "200",
              }}
            >
              Detailed Solutions
            </h5>
          </h1>
          <h1 className="awards_number">
            <span style={{ fontSize: "30px" }}>1</span>
            <div className="slasher">
              <BsSlash className="liner_page6 liner_3" />
            </div>
            <h5
              style={{
                fontSize: "1rem",
                color: "white",

                fontWeight: "200",
              }}
            >
              {" "}
              Platform
            </h5>
          </h1>
          <h1 className="experience_number">
            <span style={{ fontSize: "30px" }}>1</span>
            <h5
              style={{
                fontSize: "1rem",
                color: "white",
                fontWeight: "200",
              }}
            >
              Mission
            </h5>
          </h1>
        </div>
        <div className="numbers_page6_tab">
          <div className="first_two">
            <h1 className="client_number">
              <span className="number1">260+</span>
              <BsSlash className="liner_page6 liner_1" />
              <h5 style={{ fontSize: "1rem", color: "white" }}>Problems</h5>
            </h1>
            <h1 className="projects_number">
              <span className="number2">260+</span>
              <BsSlash className="liner_page6 liner_2" />
              <h5 style={{ fontSize: "1rem", color: "white" }}>
                Detailed Solutions
              </h5>
            </h1>
          </div>
          <div className="last_two">
            {" "}
            <h1 className="awards_number">
              <span className="number3">1</span>
              <BsSlash className="liner_page6 liner_3" />
              <h5 style={{ fontSize: "1rem", color: "white" }}> Platform</h5>
            </h1>
            <h1 className="experience_number">
              <span className="number4">1</span>
              <h5
                style={{
                  fontSize: "1rem",
                  marginLeft: "-35px",
                  color: "white",
                }}
              >
                Mission
              </h5>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page6;
