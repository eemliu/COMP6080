const userName = document.getElementById('firstName')
const userEmail = document.getElementById('email')

const nameValid = () => {
  const val = userName.value;
  return RegExp('^[a-zA-Z]{2,20}$').test(val);
};
const emailValid = () => {
  const val = userEmail.value;
  return RegExp('^.+\@.+\..+$').test(val);
};
const checkSubmit = () => {
  document.getElementById('submit').disabled = true;
  if (nameValid() && emailValid()) {
      document.getElementById('submit').disabled = false;
  }
};

// Name field
userName.addEventListener('keyup', checkSubmit);
userName.addEventListener('blur', () => {
  if (!nameValid()) {
      userName.style.background = 'red';
  }
});
userName.addEventListener('focus', () => {
  userName.style.background = 'none';
});

// Email field
userEmail.addEventListener('keyup', checkSubmit);
userEmail.addEventListener('blur', () => {
  if (!emailValid()) {
      userEmail.style.background = 'red';
  }
});
userEmail.addEventListener('focus', () => {
  userEmail.style.background = 'none';
});