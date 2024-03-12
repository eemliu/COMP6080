const url = 'https://catfact.ninja/facts?limit=5';
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const ul =  document.querySelector('.fact-list');
    ul.innerHTML = ''; // Clear content
    data.data.map((catFact) => {
      const li = document.createElement('li');
      li.textContent = catFact.fact;
      ul.appendChild(li);
    })
  });