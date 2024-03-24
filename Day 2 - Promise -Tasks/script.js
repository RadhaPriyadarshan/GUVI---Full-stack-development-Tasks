document.addEventListener("DOMContentLoaded", function() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        // https://api.openweathermap.org/data/2.5/weather?lat=${countries[countryCode].latlng[0]}&lon=${countries[countryCode].latlng[1]}&appid={e311e18a815d72b4f0def45d80f3fd92}
        .then(data => {
            const countriesContainer = document.getElementById('countries-container');
            let row = document.createElement('div');
            row.className = 'row';
            data.forEach(country => {
                const card = `
                    <div class="col-md-3 mt-4 d-flex">
                        <div class="card "> 
                            <div class="card-header text-center">
                                ${country.name.common}
                            </div>
                            <img src="${country.flags.png}" class="card-img-top"  alt="Flag">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Capital : ${country.capital}</li>
                                    <li class="list-group-item">Region : ${country.region}</li>
                                    <li class="list-group-item">Country Code : ${country.cca3}</li>
                                    <li class="list-group-item">Population : ${country.population}</li>
                                 <a href="https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=e311e18a815d72b4f0def45d80f3fd92" class="btn btn-outline-primary mt-4 ">Weather</a>
                            </div>
                        </div>
                    </div>
                `;
                row.innerHTML += card;
                if (row.children.length === 4) {
                    countriesContainer.appendChild(row);
                    row = document.createElement('div');
                    row.className = 'row';
                }
            });
            // Append the last row if it's not fully filled
            if (row.children.length > 0) {
                countriesContainer.appendChild(row);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
