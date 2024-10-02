import React, { useState } from "react";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import WorkeProcess from "../../Components/WorkeProcess/WorkeProcess";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { ScrollRestoration } from "react-router-dom";

const categoryList = [
  { id: 1, categoryName: "All", value: "all" },
  { id: 2, categoryName: "AI", value: "ai" },
  { id: 3, categoryName: "Fraud Management", value: "fraud_management" },
  { id: 4, categoryName: "Conversational", value: "conversational" },
  { id: 5, categoryName: "Media", value: "media" },
  { id: 6, categoryName: "Acquisitions", value: "acquisitions" },
  { id: 7, categoryName: "Automation", value: "automation" },
  { id: 8, categoryName: "Office Management", value: "office_management" },
  { id: 9, categoryName: "Event Planning", value: "event_planning" },
  { id: 10, categoryName: "Technology", value: "technology" },
  { id: 11, categoryName: "Monitoring", value: "monitoring" },
  { id: 12, categoryName: "UX", value: "ux" },
  { id: 13, categoryName: "Data-Driven", value: "data_driven" },
  { id: 14, categoryName: "Customer Success", value: "customer_success" },
  { id: 15, categoryName: "Laundry", value: "laundry" },
  { id: 16, categoryName: "Environment Management", value: "environment_management" },
  { id: 17, categoryName: "Sales", value: "sales" },
  { id: 18, categoryName: "Dashboard", value: "dashboard" },
  { id: 19, categoryName: "Cybersecurity", value: "cybersecurity" },
  { id: 20, categoryName: "Marketing", value: "marketing" },
  { id: 21, categoryName: "Machine Learning", value: "machine_learning" },
  { id: 22, categoryName: "Assistant", value: "assistant" },
  { id: 23, categoryName: "Authentication", value: "authentication" },
  { id: 24, categoryName: "Manufacturing", value: "manufacturing" },
  { id: 25, categoryName: "HR", value: "hr" },
  { id: 26, categoryName: "SaaS", value: "saas" },
  { id: 27, categoryName: "Management", value: "management" },
  { id: 28, categoryName: "Rental", value: "rental" },
  { id: 29, categoryName: "Subscription", value: "subscription" },
  { id: 30, categoryName: "Healthcare", value: "healthcare" },
  { id: 31, categoryName: "Employment", value: "employment" },
  { id: 32, categoryName: "Aviation", value: "aviation" },
  { id: 33, categoryName: "Cryptocurrency", value: "cryptocurrency" },
  { id: 34, categoryName: "Finance", value: "finance" },
  { id: 35, categoryName: "Environment", value: "environment" },
  { id: 36, categoryName: "Compliance", value: "compliance" },
  { id: 37, categoryName: "Workforce", value: "workforce" },
  { id: 38, categoryName: "Autonomous", value: "autonomous" },
  { id: 39, categoryName: "Data", value: "data" },
  { id: 40, categoryName: "Food Tech", value: "food_tech" },
  { id: 41, categoryName: "Robotics", value: "robotics" },
  { id: 42, categoryName: "Insurance", value: "insurance" },
  { id: 43, categoryName: "Revenue", value: "revenue" }
];

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); // New state for search

  // Filter projects by category and search term
  const filterProject = projectList.filter((project) => {
    const matchesCategory = currentCategory === "all" || project.category.includes(currentCategory);
    const matchesSearch = project.heading.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.subHeading.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHeader heading={"My Work & Portfolio"} page="Work" />
      <section className="project__section pb-120">
        <div className="container">
          <div className="dropdown">
            <button className="dropbtn">Filter by Category</button>
            <div className="dropdown-content">
              {/* Search bar within the dropdown */}
              {/* <div className="search-container">
                <input
                  type="text"
                  style={{width: "100%", color: "black"}}
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div> */}
              {/* List of categories */}
              {categoryList.map(({ id, categoryName, value }) => (
                <a style={{width: "100%"}}
                  key={id}
                  onClick={() => setCurrentCategory(value)}
                  className={currentCategory === value ? "active" : ""}
                >
                  {categoryName}
                </a>
              ))}
            </div>
          </div>

          <div className="project-wrap">
            <div className="project-grid">
              {filterProject.map(({ heading, id, image, subHeading }, index) => (
                <ProjectCard
                  key={id}
                  image={image}
                  heading={heading}
                  subHeading={subHeading}
                  openLightbox={openLightbox}
                  index={index}
                  navigate="/portfolio-details"
                />
              ))}
            </div>
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            images={imagesList}
            setLightboxOpen={setLightboxOpen}
            currentId={currentId}
          />
        )}
      </section>
      <WorkeProcess />
      <ScrollRestoration />
    </>
  );
};

export default Portfolio;
