const emailInput = document.getElementById('email');


const nextPageButton = document.getElementById("nextpage");
console.log(nextPageButton);

nextPageButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Validate the email input here
    const email = emailInput.value;
    // Show the second page of the login form
    //console.log(email);
    //sessionStorage.setItem('email', email);

    localStorage.setItem('email', email);

    console.log(localStorage.getItem('email'));

    window.location.href = 'password.html';

    //loginFormPage1.style.display = 'none';
    //const loginFormPage2 = document.querySelector('#login-form-page2');
    //loginFormPage2.style.display = 'block';
    // Save the email in localStorage or as a cookie to use it later
  });

//const loginFormPage2 = document.querySelector('#login-form-page2');
