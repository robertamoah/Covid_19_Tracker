import React, { Fragment, useEffect, useState } from "react";
import { Header, Image, Table, Icon, Dropdown } from "semantic-ui-react";
import { getAllContinents } from "../utils/get";
import MapMain from "../Components/MapMain";

const Table1 = () => {
  const [countries, setCountries] = useState("");
  const [mapContents, setMapContents] = useState("null");
  const [mapselect, setMapSelect] = useState([
    { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  ]);

  useEffect(() => {
    getAllContinents((data) => {
      setCountries(data);
      setCountries(data);
    });
  }, []);

  useEffect(() => {
    if (countries !== "") {
      let result = [];

      //   const convertToLowerCase = (param) => {
      //     let result = "";
      //     const split = param == null ? "" : param.split("");
      //     for (const char of split) {
      //       result = result.toLocaleLowerCase() + char.toLocaleLowerCase();
      //     }
      //     return result;
      //   };

      countries.forEach((element) => {
        result.push({
          key:
            element.countryInfo._id +
            Math.floor(Math.random() * 100) +
            element.country,
          value: element.countryInfo.iso2,
          text: element.country,
        });
      });

      return setMapSelect(result);
    }
  }, [countries]);

  const handleCountryPress = (param) => {
    // console.log("main parent", param);

    setMapContents(param);
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-center t-3rem">
        {/* <Dropdown
          placeholder="Select Country"
          fluid
          search
          selection
          options={mapselect}
        /> */}

        <div
          style={{
            overflow: "scroll",
            height: "400px",
            width: "600px",
            // marginLeft: "-0px",
          }}
        >
          <Table celled>
            <Table.Header>
              <div />
              <Table.Row>
                <Table.HeaderCell>Countries</Table.HeaderCell>
                <Table.HeaderCell>Deaths</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {countries !== ""
                ? countries.map((element) => {
                    return (
                      <Fragment
                        key={
                          element.countryInfo.iso3 +
                          Math.floor(Math.random() * 10)
                        }
                      >
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h2" image>
                              <Image
                                onClick={() => handleCountryPress(element)}
                                src={element.countryInfo.flag}
                                rounded
                                size="tiny"
                              />

                              <Header.Content>
                                {element.country}
                                <Header.Subheader>
                                  RECOVERED:
                                  <span className="text-success p-3">
                                    {element.recovered}{" "}
                                  </span>
                                </Header.Subheader>
                              </Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>
                            <Icon name="checkmark" />

                            <span className="text-danger p-2">
                              {element.deaths}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                      </Fragment>
                    );
                  })
                : null}
            </Table.Body>
          </Table>
        </div>
        <div className="">
          <MapMain mapProps={mapContents} mapMaker={countries} />
        </div>
      </div>
    </Fragment>
  );
};

export default Table1;
