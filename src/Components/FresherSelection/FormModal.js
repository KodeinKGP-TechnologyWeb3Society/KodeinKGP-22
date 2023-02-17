import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import s from "./FormModal.module.css";

export default function FormModal() {
  let [count, setCount] = useState(5);
  let navigate = useNavigate();
  useEffect(() => {
    let timer1 = setTimeout(() => setCount((prev) => prev - 1), 1000);

    if (count <= 0) {
      navigate("/");
    }
    return () => {
      clearTimeout(timer1);
    };
  });

  return (
    <div className={s.modal}>
      <div className={s.box}>
        <h2>Registration Successful!</h2>
        <p>
          All the best for your interview!! Details of which will be notified
          shortly via email
        </p>
        <p>
          In the meantime,
          <br /> Check out our website for more information about what we do
          throughout the year !
        </p>
        <p className={s.ps}>p.s.: It might help in your interview 😉</p>
        <p>You will be redirected in {count} seconds</p>
        <div className={s.loader}></div>
      </div>
    </div>
  );
}