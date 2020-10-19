import React, { Fragment } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import { Badge } from "reactstrap";

import styled from "styled-components";

const Styles = styled.div`
  .overlay {
    color: black;
  }
  .jumbo {
    background-color: white;
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
                <Badge href="#" color="primary">
                  # Primary
                </Badge>
                <Badge href="#" color="secondary">
                  # Secondary
                </Badge>
                <Badge href="#" color="success">
                  # Success
                </Badge>
                <Badge href="#" color="danger">
                  # Danger
                </Badge>
                <Badge href="#" color="warning">
                  # Warning
                </Badge>
                <Badge href="#" color="info">
                  # Info
                </Badge>
                <Badge href="#" color="light">
                  # Light
                </Badge>
                <Badge href="#" color="dark">
                  # Dark
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
