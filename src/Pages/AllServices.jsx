import React from "react";
import { ScrollRestoration } from "react-router-dom";

import Services from "../Components/Services/Services";
import Metting from "../Components/Metting/Metting";
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
import Pricing from "../Components/Pricing/Pricing";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";

const AllServices = () => {
  return (
    <>
      <PageHeader heading={"Services All"} page={"Services All"} />
      <Metting />
      <Services isHeading={false} />
      <Pricing />
      <WorkeProcess />
      <ScrollRestoration />
    </>
  );
};

export default AllServices;
