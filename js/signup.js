const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});
const signupBtn = document.getElementById('signup-btn');
const userType = document.querySelector('select[name="userType"]');

signupBtn.addEventListener('click', function () {
  if (userType.value === 'serviceProvider') {
    window.location.href = 'service_provider_profile.html';
  } else {
    // perform normal signup process for pet owners
  }
});
