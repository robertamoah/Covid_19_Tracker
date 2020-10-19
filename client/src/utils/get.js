import axios from "axios";

// Get COVID-19 totals for all continents
export const getAllContinents = (callback) => {
  axios
    .get("https://disease.sh/v3/covid-19/countries", {})
    .then(function (response) {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getAllSummary = (callback) => {
  axios
    .get(" https://disease.sh/v3/covid-19/all", {})
    .then(function (response) {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
