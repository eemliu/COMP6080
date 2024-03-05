const nameValid = () => {
  const val = document.getElementById('firstName').value;
  return RegExp('^[a-zA-Z]{2,20}$').test(val);
};
const emailValid = () => {
  const val = document.getElementById('email').value;
  return RegExp('^.+\@.+\..+$').test(val);
};
const checkSubmit = () => {
  document.getElementById('submit').disabled = true;
  if (nameValid() && emailValid()) {
      document.getElementById('submit').disabled = false;
  }
};

document.getElementById('firstName').addEventListener('keyup', checkSubmit);
document.getElementById('firstName').addEventListener('blur', () => {
  if (!nameValid()) {
      document.getElementById('firstName').style.background = 'red';
  }
});
document.getElementById('firstName').addEventListener('focus', () => {
  document.getElementById('firstName').style.background = 'none';
});
document.getElementById('email').addEventListener('keyup', checkSubmit);
document.getElementById('email').addEventListener('blur', () => {
  if (!emailValid()) {
      document.getElementById('email').style.background = 'red';
  }
});
document.getElementById('email').addEventListener('focus', () => {
  document.getElementById('email').style.background = 'none';
});