fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countriesData => {
    // Problem 1: Get all the countries from Asia continent/region using Filter function
    const asiaCountries = countriesData.filter(country => country.region === 'Asia');
    console.log("Countries in Asia:", JSON.stringify(asiaCountries, null, 2), typeof asiaCountries);

    // Problem 2: Get all the countries with a population of less than 2 lakhs using Filter function
    const smallPopulationCountries = countriesData.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", JSON.stringify(smallPopulationCountries, null, 2), typeof smallPopulationCountries);

    // Problem 3: Print the details name, capital, flag, using forEach function
    countriesData.forEach(country => {
      console.log("Country Details:");
      console.log(JSON.stringify(country, null, 2), typeof country);
      console.log("------------------------");
    });

    // Problem 4: Print the total population of countries using reduce function
    const totalPopulation = countriesData.reduce((sum, country) => sum + (country.population || 0), 0);
    console.log("Total Population of Countries:", totalPopulation);

    // Problem 5: Print the country that uses US dollars as currency.
    const usDollarCountries = countriesData.filter(country =>
      country.currencies && country.currencies.hasOwnProperty('USD')
    );
    console.log("Countries using US Dollars:", JSON.stringify(usDollarCountries, null, 2), typeof usDollarCountries);
  })
  .catch(error => console.error("Error fetching data:", error));
