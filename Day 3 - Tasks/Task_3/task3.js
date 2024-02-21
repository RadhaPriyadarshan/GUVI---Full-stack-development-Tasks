fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(`Country: ${country.name.common}`);
      console.log(`Region: ${country.region}`);
      console.log(`Sub-Region: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
      console.log("------------------------");
    });
  })
  .catch(error => console.error("Error fetching data:", error));