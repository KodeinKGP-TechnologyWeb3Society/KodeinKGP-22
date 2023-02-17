import React, { useState } from "react";

import {
  BsCalendar2EventFill,
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsStars,
} from "react-icons/bs";

import "./FresherSelection.css";

import {
  IoMail,
  IoMdGitBranch,
  IoMdGitCommit,
  IoMdHome,
  IoMdMail,
  IoMdMailUnread,
} from "react-icons/io";

import {
  MdAccessTimeFilled,
  MdContactPage,
  MdEngineering,
} from "react-icons/md";

import axios from "axios";

import { toast, ToastContainer } from "react-toastify";

import FormModal from "./FormModal";


function FresherSelection() {
  let [count, setCount] = useState(5);

  let initial = {
    name: "",

    rollNo: "",

    personalEmail: "",

    instituteEmail: "",

    phone: "",

    otherInvolvements: "",

    hall: "",

    skills: "",
  };

  const [input, setInput] = useState(initial);

  const [loading, setLoading] = useState(false);

  const openLoading = () => setLoading(true);

  const closeLoading = () => setLoading(false);

  let checkBoxes = {
    position: ["Core Team", "Web Team", "Design Team"],

    prefDay: ["30 Jan, Monday", "31 Jan, Tuesday"],

    prefTimeSlot: ["6PM - 8PM", "8PM - 10PM", "10PM - 12AM"],
  };

  const [checkPosition, setCheckPosition] = useState(
    new Array(checkBoxes.position.length).fill(false)
  );

  const [checkPrefDay, setCheckPrefDay] = useState(
    new Array(checkBoxes.prefDay.length).fill(false)
  );

  const [checkPrefTimeSlot, setCheckPrefTimeSlot] = useState(
    new Array(checkBoxes.prefTimeSlot.length).fill(false)
  );


  const validateData = (body) => {
    return (
      body.name !== "" &&
      body.rollNo !== "" &&
      body.personalEmail !== "" &&
      body.instituteEmail !== "" &&
      body.phone !== "" &&
      body.otherInvolvements !== "" &&
      body.hall !== "" &&
      body.position !== "" &&
      body.prefDay !== "" &&
      body.prefTimeSlot !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    openLoading();

    let position = checkBoxes.position

      .filter((d, ind) => checkPosition[ind])

      .join(", ");

    let prefDay = checkBoxes.prefDay

      .filter((d, ind) => checkPrefDay[ind])

      .join(", ");

    let prefTimeSlot = checkBoxes.prefTimeSlot

      .filter((d, ind) => checkPrefTimeSlot[ind])

      .join(", ");

    let body = { ...input, position, prefDay, prefTimeSlot };

    let pattern = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;

    let result =
      pattern.test(input.personalEmail) && pattern.test(input.instituteEmail);

    if (!result) {
      closeLoading();

      toast.error("Please enter a valid email address");

      return;
    }

    if (validateData(body)) {

      axios

        .post("https://kode-in-kgp.onrender.com/api/register", body)

        .then((res) => {
          if (res.data) {
            setInput(initial);

            setCheckPosition(new Array(checkBoxes.position.length).fill(false));

            setCheckPrefDay(new Array(checkBoxes.prefDay.length).fill(false));

            setCheckPrefTimeSlot(
              new Array(checkBoxes.prefTimeSlot.length).fill(false)
            );
          }
        });
    } else {
      closeLoading();

      toast.error("Fill the Form Completely");
    }
  };

  return (
    <main id="fresher-selection">
      <div className="wrapper">
        <div className="r_form_wrap">
          <div className="title">
            <p>Registration Form</p>
          </div>

          <div className="r_form">
            <form>
              <div className="input_wrap">
                <label htmlFor="yourname">
                  <span className="icon">
                    <BsFillPersonFill />
                  </span>{" "}
                  Name{" "}
                </label>

                <div className="input_item">
                  <input
                    value={input.name}
                    onChange={(e) => {
                      setInput((prev) => {
                        return { ...prev, name: e.target.value };
                      });
                    }}
                    type="text"
                    name="your name"
                    className="input"
                    id="yourname"
                  />
                </div>
              </div>

              <div className="input_wrap">
                <label htmlFor="yourname">
                  {" "}
                  <MdContactPage /> Roll Number
                </label>

                <div className="input_item">
                  <input
                    value={input.rollNo}
                    onChange={(e) => {
                      setInput((prev) => {
                        return { ...prev, rollNo: e.target.value };
                      });
                    }}
                    type="text"
                    name="your name"
                    className="input"
                    id="yourname"
                  />
                </div>
              </div>

              <div className="input_wrap">
                <label htmlFor="emailaddress">
                  {" "}
                  <IoMdMail /> Personal Email Address
                </label>

                <div className="input_item">
                  <input
                    value={input.personalEmail}
                    onChange={(e) => {
                      setInput((prev) => {
                        return { ...prev, personalEmail: e.target.value };
                      });
                    }}
                    type="email"
                    name="email address"
                    className="input"
                    id="emailaddress"
                    pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                    required
                  />
                </div>
              </div>

              <div className="input_wrap">
                <label htmlFor="emailaddress">
                  {" "}
                  <IoMdMailUnread /> Institute Email Address
                </label>

                <div className="input_item">
                  <input
                    value={input.instituteEmail}
                    onChange={(e) => {
                      setInput((prev) => {
                        return { ...prev, instituteEmail: e.target.value };
                      });
                    }}
                    type="email"
                    name="email address"
                    className="input"
                    id="emailaddress"
                    pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                    required
                  />
                </div>
              </div>

              <div className="input_wrap">
                <label htmlFor="phone">
                  {" "}
                  <BsFillTelephoneFill /> Phone
                </label>

                <div className="input_item">
                  <input
                    value={input.phone}
                    onChange={(e) => {
                      setInput((prev) => {
                        return { ...prev, phone: e.target.value };
                      });
                    }}
                    type="number"
                    name="phone"
                    className="input"
                    id="phone"
                  />
                </div>
              </div>

              <div className="input_wrap">
                <label>
                  <MdEngineering /> Which position(s) are you interested in?
                </label>

                <div className="input_radio">
                  {checkBoxes.position.map((x, i) => {
                    return (
                      <div key={i} className="input_radio_item">
                        <input
                          type="checkbox"
                          id={`team-${i}`}
                          name={`team-${i}`}
                          className="radio"
                          value={x}
                          checked={checkPosition[i]}
                          onChange={() => {
                            setCheckPosition((prev) => {
                              let update = [...prev];

                              update[i] = !update[i];

                              return update;
                            });
                          }}
                        />

                        <label htmlFor={`team-${i}`} className="radio_mark">
                          {x}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="input_wrap">
                <label>
                  <BsCalendar2EventFill /> Preferred Day
                </label>

                <div className="input_radio">
                  {checkBoxes.prefDay.map((x, i) => {
                    return (
                      <div key={i} className="input_radio_item">
                        <input
                          type="checkbox"
                          id={`day-${i}`}
                          name={`day-${i}`}
                          className="radio"
                          value={x}
                          checked={checkPrefDay[i]}
                          onChange={() => {
                            setCheckPrefDay((prev) => {
                              let update = [...prev];

                              update[i] = !update[i];

                              return update;
                            });
                          }}
                        />

                        <label htmlFor={`day-${i}`} className="radio_mark">
                          {x}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="input_wrap">
                <label>
                  {" "}
                  <MdAccessTimeFilled />
                  {"  "} Preferred Slot
                </label>

                <div className="input_radio">
                  {checkBoxes.prefTimeSlot.map((x, i) => {
                    return (
                      <div key={i} className="input_radio_item">
                        <input
                          type="checkbox"
                          id={`slot-${i}`}
                          name={`slot-${i}`}
                          className="radio"
                          value={x}
                          checked={checkPrefTimeSlot[i]}
                          onChange={() => {
                            setCheckPrefTimeSlot((prev) => {
                              let update = [...prev];

                              update[i] = !update[i];

                              return update;
                            });
                          }}
                        />

                        <label htmlFor={`slot-${i}`} className="radio_mark">
                          {x}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="input_wrap">
                <label htmlFor="yourname">
                  {" "}
                  <IoMdGitBranch /> Other Involvements in KGP
                </label>

                <div className="input_item">
                  <input
                    value={input.otherInvolvements}
                    onChange={(e) => {
                      setInput((prev) => {
                        return { ...prev, otherInvolvements: e.target.value };
                      });
                    }}
                    type="text"
                    name="your name"
                    className="input"
                    id="yourname"
                  />
                </div>
              </div>

              <div className="input_wrap">
                <label htmlFor="yourname">
                  <IoMdHome /> Hall of Residence
                </label>

                <div className="input_item">
                  <input
                    value={input.hall}
                    onChange={(e) => {
                      setInput((prev) => {
                        return { ...prev, hall: e.target.value };
                      });
                    }}
                    type="text"
                    name="your name"
                    className="input"
                    id="yourname"
                  />
                </div>
              </div>

              <div className="input_wrap">
                <label htmlFor="yourname">
                  {" "}
                  <BsStars /> Other Relevant Skills(optional)
                </label>

                <div className="input_item">
                  <input
                    value={input.skills}
                    onChange={(e) => {
                      setInput((prev) => {
                        return { ...prev, skills: e.target.value };
                      });
                    }}
                    type="text"
                    name="your name"
                    className="input"
                    id="yourname"
                  />
                </div>
              </div>

              <button className="button" onClick={handleSubmit}>
                {"Register Now"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        className="toast"
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {loading && <FormModal />}
    </main>
  );
}

export default FresherSelection;
