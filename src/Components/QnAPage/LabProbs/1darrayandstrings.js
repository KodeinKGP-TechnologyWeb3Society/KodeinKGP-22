import data from "./data.json";
import "./styles.css";

const ArrayandSrings = () => {
  let num = 1;
  return (
    <>
      <div className="title"> Lab- Problems: Arrays and Strings</div>
      {data.ArrayAndStrings[0].Elements.map((data) => (
        <div className="datapreview" key={num}>
          <details>
            <summary># Question- {num++}</summary>
            <h3>
              <pre>{data.Question}</pre>
            </h3>
            <details>
              <summary>
                <div className="code">Code:</div>
              </summary>

              <div className="answer">
                <pre className="line-numbers">
                  <code className="language-cpp">{data.Answer}</code>
                </pre>
              </div>
            </details>
          </details>
          {/* <button onClick={() => func(data.id)}> Delete</button> */}
        </div>
      ))}
    </>
  );
};

export default ArrayandSrings;
