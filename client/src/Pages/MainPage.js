import React, { Fragment } from "react";
import Nav1 from "../Components/Nav1";
import Jambotron from "../Components/Jambotron";
import MainContent1 from "../Components/MainContent1";
import Table_Map from "../Components/Table";
import MainGraph from "../Components/MianGraph";

const MainPage = () => {
  return (
    <Fragment>
      <div style={{ backgroundColor: "#F3F3F3" }}>
        <div className="sticky-top">
          <Nav1 />
        </div>
        <div className=" d-flex flex-column">
          <Jambotron />

          <div className="d-flex justify-content-center p-2">
            <MainContent1 />
          </div>
          <div className="d-flex justify-content-center ">
            <Table_Map />
          </div>

          <div className="d-flex justify-content-center ">
            <MainGraph />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;
