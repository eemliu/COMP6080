const output = document.getElementById("output");


const storeData = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const userData = {
    name: name,
    email: email,
  };

  const userDataJSON = JSON.stringify(userData);
  localStorage.setItem("userData", userDataJSON);
  output.textContent = "Data stored!";
}

const retrieveData = () => {
  const userDataJSON = localStorage.getItem("userData");
  const userData = JSON.parse(userDataJSON);

  if (!userData) {
    output.textContent = "No data found!";
    return
  } else {
    const name = userData.name;
    const email = userData.email;
    output.textContent = `Retrieved data: Name: ${name}, Email: ${email}`;
  }
}
