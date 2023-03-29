const passwordInput = document.getElementById('password');
const submitButton = document.getElementById("submit");

console.log(passwordInput);

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Validate the password input here
  const password = passwordInput.value;
  // Get the email from localStorage or cookie
  const email = localStorage.getItem('email');

  console.log(email);
  //console.log(password);
  // Send the email and password to the REST API for authentication
  fetch("http://jd-project-api.us-east-1.elasticbeanstalk.com/api/v1/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the authentication response here
    
    console.log(data);
  })
  .catch(error => {
    // Handle the authentication error here
    //console.error(error);
  });
});