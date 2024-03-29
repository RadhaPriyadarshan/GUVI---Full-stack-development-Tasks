function getJoke() {
  fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      return response.json();
    })
    .then(data => {
      var card = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Geek Joke</h5>
            <p class="card-text">${data.joke}</p>
          </div>
        </div>
      `;
      document.getElementById('jokeContainer').innerHTML = card;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      alert('Failed to fetch joke. Please check the console for details.');
    });
}