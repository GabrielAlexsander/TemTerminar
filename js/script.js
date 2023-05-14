let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () =>{
    let countryName = countryInp.ariaValue;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
});