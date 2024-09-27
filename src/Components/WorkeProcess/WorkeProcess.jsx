import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "4",
    info: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    list: [
      "Office locations spread across",
      "the Bay Area, New York, and",
      "Puerto Rico",
    ],
  },
  {
    id: 2,
    title: "$390 million",
    info: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    list: [
      "Array Venture Funds",
      "have realized $390 million on",
      "$127 million of invested capital",
    ],
  },
  {
    id: 3,
    title: "210",
    info: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
    list: [
      "Array has led about half of",
      "110 investments since 2013",
      // "Refining the design",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="We bring in the 2nd wave of customers"
          sortTitle="Our Twist"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
