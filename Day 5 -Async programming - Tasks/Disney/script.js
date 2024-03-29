async function getCharacters() {
    const response = await fetch('https://api.disneyapi.dev/character');
    const data = await response.json();
    return data.data; 
  }
  
  async function createCharacterCards() {
    const charactersContainer = document.getElementById('character-cards');
    const charactersData = await getCharacters();
    let row = document.createElement('div');
    row.className = 'row';
    
    charactersData.forEach(character => {
      const card = `
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="${character.imageUrl}" class="card-img-top" alt="${character.name} Image">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">This character appears in:</p>
              <ul>
                ${character.films.length > 0 ? `<li>Films: ${character.films.join(', ')}</li>` : ''}
                ${character.tvShows.length > 0 ? `<li>TV Shows: ${character.tvShows.join(', ')}</li>` : ''}
                ${character.videoGames.length > 0 ? `<li>Video Games: ${character.videoGames.join(', ')}</li>` : ''}
              </ul>
              <a href="${character.sourceUrl}" class="ms-4">Learn More</a>
            </div>
          </div>
        </div>
      `;
      row.innerHTML += card;
      if (row.children.length === 3) { 
        charactersContainer.appendChild(row);
        row = document.createElement('div');
        row.className = 'row';
      }
    });
    
    if (row.children.length > 0) {
      charactersContainer.appendChild(row);
    }
  }

  createCharacterCards(); 