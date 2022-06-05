import react from "react";
import Accordion from "./AccordionApp";

const FAQ = () => {
  return (
    <div className="main">
      <h1 className="faq_heading">FAQ</h1>
      <div className="accordion">
        <Accordion
          title="What is the KodeInKgp website for when there are other websites in the market?"
          text="Our website hosts a splendid platform for all problems related to PDS with inbuilt text display for code as well as interactive UI"
        />
        <Accordion
          title="Does one need to register or login for using the website?"
          text="Absolutely not!! Anyone can use it at anytime"
        />
        <Accordion
          title="Can one learn concepts from this website?"
          text="Why not? We provide videos related to each topic that helps students to learn a concept at the same time as coding"
        />
        <Accordion
          title="Can we view only PDS questions here?"
          text="Yes. Till now we support only PDS but in future we plan to expand our domains into other subjects"
        />
        <Accordion
          title="How to post doubts?"
          text="Feel free to contact us in the contact page"
        />
        <Accordion
          title="Do we get PDS lab as well as theory questions here?"
          text="Yeah. Absolutely!! This website will be a one-stop solution for all PDS related issues"
        />
        <Accordion
          title="Do we get latest questions of PDS here?"
          text="The website is maintained by a dozen of coders who will bring you an all time updated list of questions"
        />
        <Accordion
          title="Does this website provide reliable and correct solutions?"
          text="No doubt that our website provides not only correct but also elegant solutions to all problems"
        />
      </div>
    </div>
  );
};

export default FAQ;
