function generateCard() {
    var text = document.getElementById('textInput').value.trim();
    if (text === '') {
      alert('Please enter some text!');
      return;
    }
    var url = `https://cataas.com/cat/gif/says/${text}?filter=mono&fontColor=orange&fontSize=20&type=square`;
    var card = `
      <div class="card">
        <img src="${url}" class="card-img-top" alt="Cat Gif">
        <div class="card-body">
          <p class="card-text">${text}</p>
        </div>
      </div>
    `;
    document.getElementById('cardContainer').innerHTML = card;
  }