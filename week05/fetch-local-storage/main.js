const output = document.getElementById('output');

const storeData = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const userData = {
    name: name,
    email: email
  }

  const parsedUserData = JSON.stringify(userData);
  localStorage.setItem('userData', parsedUserData);

  output.innerText = 'Data stored!'
}

const retrieveData = () => {
  const parsedUserData = localStorage.getItem('userData');
  const userData = JSON.parse(parsedUserData);

  if (!userData) {
    output.textContent = 'No data found!';
    return;
  } else {
    const name = userData.name;
    const email = userData.email;
    output.textContent = `Retrieved data: Name: ${name}, Email: ${email}`;
  }
}

