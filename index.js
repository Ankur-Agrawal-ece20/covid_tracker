const noOfActiveCases = document.getElementById("activeCases");
const noOfConfirmedCases = document.getElementById("confirmedCases");
const noOfDeceasedCases = document.getElementById("deceasedCases");
const noOfRecoveredCases = document.getElementById("recoveredCases");
const countryDetail = document.getElementById("country-detail");

async function getLatestCountryDataByCode(params) {
  try {
    const response = await fetch(
      `https://covid-19-data.p.rapidapi.com/country/code?code=${params}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key":
            "525304c516msh092b9e1cc2714f1p17d73fjsnf37d503c854b",
        },
      }
    );
    const response_1 = await response.json();
    console.log(response_1);
    return response_1;
  } catch (err) {
    console.error(err);
  }
}

function setCases(param) {
  let temporaryData = param;
  setActiveCases(temporaryData[0]["critical"]);
  setConfirmedCases(temporaryData[0]["confirmed"]);
  setDeceasedCases(temporaryData[0]["deaths"]);
  setRecoveredCases(temporaryData[0]["recovered"]);
  if (temporaryData[0]["code"]) {
    countryDetail.textContent = `${temporaryData[0]["code"]} - ${
      countryArr[temporaryData[0]["code"]]
    }`;
    localStorage.setItem("lastSearch", temporaryData[0]["code"]);
  }
}

function setActiveCases(params) {
  if (params) {
    noOfActiveCases.textContent = parseInt(params).toLocaleString("en-IN");
  } else {
    noOfActiveCases.textContent = "Unavailable";
  }
}
function setConfirmedCases(params) {
  if (params) {
    noOfConfirmedCases.textContent = parseInt(params).toLocaleString("en-IN");
  } else {
    noOfConfirmedCases.textContent = "Unavailable";
  }
}
function setDeceasedCases(params) {
  if (params) {
    noOfDeceasedCases.textContent = parseInt(params).toLocaleString("en-IN");
  } else {
    noOfDeceasedCases.textContent = "Unavailable";
  }
}
function setRecoveredCases(params) {
  if (params) {
    noOfRecoveredCases.textContent = parseInt(params).toLocaleString("en-IN");
  } else {
    noOfRecoveredCases.textContent = "Unavailable";
  }
}

async function fallBackOnIndia() {
  let temporaryData = await getLatestCountryDataByCode("IN");
  if (temporaryData) {
    setCases(temporaryData);
  } else {
    setCases([]);
  }
}

window.addEventListener("load", async () => {
  let lastSearch = localStorage.getItem("lastSearch");
  console.log("lastSearch", lastSearch);
  console.log(countryArr);
  if (lastSearch) {
    let temporaryData = await getLatestCountryDataByCode(lastSearch);
    if (temporaryData && temporaryData.length > 0) {
      setCases(temporaryData);
    } else {
      fallBackOnIndia();
    }
  } else {
    fallBackOnIndia();
  }
});
