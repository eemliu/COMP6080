///// How to use local storage
// // Define a key and value
// const key = "username";
// const value = "John Doe";

// // Store the key-value pair in local storage
// localStorage.setItem(key, value);

// // Show a message (optional)
// console.log("Value stored:", localStorage.getItem(key));


const tabs = ['Home', 'About', 'News', 'Articles'];
    const setTab = name => {
      document.getElementById(`tab${name}`).addEventListener('click', e => {
        tabs.map(tab => document.getElementById(`page${tab}`).style.display = 'none');
        document.getElementById(`page${name}`).style.display = 'block';
      });
    }
    tabs.map(setTab);
    document.getElementById('contactUs').addEventListener('click', e => {
      document.getElementById('header').style.display = 'none';
      document.getElementById('page').style.display = 'none';
      document.getElementById('footer').style.display = 'none';
      document.getElementById('popup').style.display = 'block';
      document.getElementById('popup').style.display = 'block';
    });
    document.getElementById('closePopup').addEventListener('click', e => {
      document.getElementById('header').style.display = 'block';
      document.getElementById('page').style.display = 'block';
      document.getElementById('footer').style.display = 'block';
      document.getElementById('popup').style.display = 'none';
    });