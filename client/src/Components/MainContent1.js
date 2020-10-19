import React, { Fragment, useState, useEffect } from "react";
// import { Row, Col, Card, Progress } from "reactstrap";
import { Button, Card, Image } from "semantic-ui-react";

import CountUp from "react-countup";

import { getAllSummary } from "../utils/get";

const MainContent1 = ({ data }) => {
  const [mainData, setMainData] = useState("");

  useEffect(() => {
    getAllSummary((responses) => {
      setMainData(responses);
    });
  }, []);

  useEffect(() => {
    return console.log("right bro ", mainData);
  }, [mainData]);

  return (
    <Fragment>
      <Card.Group>
        <Card>
          <Card.Content>
            <div className="d-flex justify-content-center ">
              <Card.Header>Cases</Card.Header>
            </div>
            <Card.Meta>
              <span className="d-flex justify-content-center">
                Number of cases :
                <div className="text-danger">
                  <CountUp
                    start={mainData.cases - 1000}
                    end={mainData.cases}
                    duration={2}
                    separator=","
                  />
                </div>
              </span>
            </Card.Meta>
            <Card.Description>
              {/* Steve wants to add you to the group <strong>best friends</strong> */}
            </Card.Description>
          </Card.Content>
          <Card.Content extra></Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <div className="d-flex justify-content-center">
              <Card.Header>Recovered</Card.Header>
            </div>
            <Card.Meta>
              <span className="d-flex justify-content-center">
                Number of Recovered :
                <div className="text-danger">
                  <CountUp
                    start={mainData.recovered - 1000}
                    end={mainData.recovered}
                    duration={2}
                    separator=","
                  />
                </div>
              </span>
            </Card.Meta>
            <Card.Description>
              {/* Steve wants to add you to the group <strong>best friends</strong> */}
            </Card.Description>
          </Card.Content>
          <Card.Content extra></Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <div className="d-flex justify-content-center">
              <Card.Header>Deaths</Card.Header>
            </div>
            <Card.Meta>
              <span className="d-flex justify-content-center">
                Number of Deaths :
                <div className="text-danger">
                  <CountUp
                    start={mainData.deaths - 1000}
                    end={mainData.deaths}
                    duration={2}
                    separator=","
                  />
                </div>
              </span>
            </Card.Meta>
            <Card.Description>
              {/* Steve wants to add you to the group <strong>best friends</strong> */}
            </Card.Description>
          </Card.Content>
          <Card.Content extra></Card.Content>
        </Card>
      </Card.Group>
    </Fragment>
  );
};

export default MainContent1;
