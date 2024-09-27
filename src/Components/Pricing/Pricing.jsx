import React from "react";
import basic from "../../assets/img/project/basic.png";
import warranty from "../../assets/img/project/warranty.png";
import premium from "../../assets/img/project/premium-quality.png";
import Price from "./Price";
import Title from "../Shared/Title/Title";

const planData = [
  {
    id: 1,
    planName: "Seed Stage Investment",
    price: "$100k",
    time: "Pre Seed",
    fetcher: [
      "Early Product Development",
      "Go-To-Market Strategy",
      "Mentorship",
      "Network Access",
      "Advisory Services",
    ],
    image: basic,
  },
  {
    id: 2,
    planName: "Growth Stage Investment",
    price: "$500k",
    time: "Seed",
    fetcher: [
      "Scaling Operations",
      "Partnerships & Alliances",
      "Advanced Mentorship",
      "Series A Preparation",
      "Market Expansion",
    ],
    image: warranty,
  },
  {
    id: 3,
    planName: "Late Stage Investment",
    price: "$5M+",
    time: "Invested",
    fetcher: [
      "Growth Optimization",
      "IPO Readiness",
      "Strategic Partnerships",
      "Mergers & Acquisitions",
      "Global Market Penetration",
    ],
    image: premium,
  },
];

const Pricing = () => {
  return (
    <section className="pricing__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle={"Funding stages tailored to support your growth"}
          sortTitle={"Array at Every Stage"}
        />
        <div className="row g-4 justify-content-center">
          {planData.map(({ id, image, planName, fetcher, price, time }) => (
            <Price
              key={id}
              image={image}
              planName={planName}
              price={price}
              time={time}
              fetcher={fetcher}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
