import React, { Fragment } from "react";
import Nav1 from "../Components/Nav1";
import Jambotron from "../Components/Jambotron";
import MainContent1 from "../Components/MainContent1";
import Table_Map from "../Components/Table";
import MainGraph from "../Components/MianGraph";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";

const MainPage = () => {
  return (
    <Fragment>
      <div
        style={{
          background: "rgb(2,0,36)",
          background:
            "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
        }}
      >
        <div className="sticky-top">
          <Nav1 />
        </div>
        <Container
        //  style={{ backgroundColor: "Silver" }}
        >
          <Jambotron />
          <div className="flex-column">
            <div className="d-flex justify-content-center p-2">
              <MainContent1 />
            </div>
            <div
              // style={{ backgroundColor: "blue" }}
              className="d-flex justify-content-center p-2"
            >
              <Table_Map />
            </div>

            <div
              // style={{ backgroundColor: "blue" }}
              className="d-flex justify-content-center p-2"
            >
              <MainGraph />
            </div>
          </div>
        </Container>
        {/* <Footer /> */}
      </div>
    </Fragment>
  );
};

export default MainPage;
