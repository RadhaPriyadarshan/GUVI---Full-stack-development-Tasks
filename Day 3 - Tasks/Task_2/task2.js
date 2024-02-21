// Fetch data from the provided URL
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    const flagsContainer = document.getElementById("flags-container");
    data.forEach(country => {
      const flag = country.flags.svg;
      console.log(`Country: ${country.name.common}, Flag: ${flag}`);
      const imgElement = document.createElement("img");
      imgElement.src = flag;
      const flagContainer = document.createElement("div");
      flagContainer.appendChild(imgElement);
      flagsContainer.appendChild(flagContainer);
    });
  })
  .catch(error => console.error("Error fetching data:", error));
