
import Anthony from "../../assets/img/advisors/anthony.png"
import Dan from "../../assets/img/advisors/dan.png"
import Ellen from "../../assets/img/advisors/ellen.png"
import Henning from "../../assets/img/advisors/henning.png"
import Kimberly from "../../assets/img/advisors/kimberly.png"
import Lucas from "../../assets/img/advisors/lucas.png"
import Schmid from "../../assets/img/advisors/schmid.png"
import Title from "../Shared/Title/Title"
import Service from "./Service"

const serviceList = [
  {
    id: "01",
    heading: "Lucas Baker",
    subHeading: "Google Deepmind",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
    image: Lucas,
  },
  {
    id: "02",
    heading: "Anthony Wu",
    subHeading: "Apple",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
    image: Anthony,
  },
  {
    id: "03",
    heading: "Dan Janney",
    subHeading: "Alta Partners",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
    image: Dan,
  },
  {
    id: "04",
    heading: "Kimberly Ha",
    subHeading: "FTI Consulting",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
    image: Kimberly,
  },
  {
    id: "05",
    heading: "Ellen Rudnick",
    subHeading: "Liberty Mutual Board Director",
    para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit",
    image: Ellen,
  },
];

const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="Our Advisors"
            sortTitle="All | Tech | Health | Finance "
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para, image }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
