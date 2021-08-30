const noOfActiveCases = document.getElementById("activeCases");
const noOfConfirmedCases = document.getElementById("confirmedCases");
const noOfDeceasedCases = document.getElementById("deceasedCases");
const noOfRecoveredCases = document.getElementById("recoveredCases");
const countryDetail = document.getElementById("country-detail");
const select = document.getElementById("myDropdown");

const countryArr = {
  AF: "Afghanistan",
  AX: "Aland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua And Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia And Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Congo, Democratic Republic",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Cote D'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island & Mcdonald Islands",
  VA: "Holy See (Vatican City State)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran, Islamic Republic Of",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle Of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KR: "Korea",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libyan Arab Jamahiriya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Macedonia",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia, Federated States Of",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  AN: "Netherlands Antilles",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestinian Territory, Occupied",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "Reunion",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  BL: "Saint Barthelemy",
  SH: "Saint Helena",
  KN: "Saint Kitts And Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin",
  PM: "Saint Pierre And Miquelon",
  VC: "Saint Vincent And Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome And Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia And Sandwich Isl.",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard And Jan Mayen",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad And Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks And Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UM: "United States Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.S.",
  WF: "Wallis And Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

for (var prop in countryArr) {
  var el = document.createElement("a");
  el.text = `${prop} - ${countryArr[prop]}`;
  el.onclick = function () {
    countrySelected(this);
  };
  select.appendChild(el);
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

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
    // console.log(response_1);
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
  //   console.log("lastSearch", lastSearch);
  //   console.log(countryArr);
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

async function countrySelected(param) {
  console.log(param.innerText);
  let myArr = param.innerText.split(" - ")[0];
  let temporaryData = await getLatestCountryDataByCode(myArr);
  if (temporaryData && temporaryData.length > 0) {
    setCases(temporaryData);
    select.classList.toggle("show");
  } else {
    fallBackOnIndia();
  }
}
