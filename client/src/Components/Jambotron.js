import React, { Fragment } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import { Badge } from "reactstrap";

import styled from "styled-components";

const Styles = styled.div`
  .overlay {
    color: black;
  }
  .jumbo {
    background-color: #f0f8ff;
    height: 150px;
  }
`;

const Jambotron = () => {
  return (
    <Fragment>
      <Styles>
        <Jumbo fluid className="jumbo">
          <div className="overlay">
            <Container>
              <h1>COVID-19 Resources</h1>
              <div>
                <Badge
                  href="https://www.doineedacovid19test.com/"
                  color="primary"
                >
                  # Get Tested
                </Badge>
                <Badge
                  href="https://landing.google.com/screener/covid19?source=google"
                  color="secondary"
                >
                  # Self-Assessment
                </Badge>
                <Badge
                  href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
                  color="success"
                >
                  # Covid-19 Symptoms
                </Badge>
              </div>
            </Container>
          </div>
        </Jumbo>
      </Styles>
    </Fragment>
  );
};

export default Jambotron;
