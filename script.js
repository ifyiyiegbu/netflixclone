const signinLink = document.querySelector('.signin');
const signUpLink = document.querySelector('.start');
const loginLink = document.querySelector('.login')
const profileChoice = document.querySelector('.profile_pics')
const signinPage = document.querySelector('.signin_page');
const landingPage = document.querySelector('.landing_page')
const profilesPage = document.querySelector('.profiles_page');
const homePage = document.querySelector('.home_page')

signinLink.addEventListener('click', e => {
    landingPage.classList.add('hidden')
    signinPage.classList.remove('hidden');
  });

signUpLink.addEventListener('click', e => {
    landingPage.classList.add('hidden')
    signinPage.classList.remove('hidden');
  });

loginLink.addEventListener('click', e => {
    if (areRequiredFieldsFilled()){
        signinPage.classList.add('hidden')
        landingPage.classList.add('hidden')
        profilesPage.classList.remove('hidden');
    }else{
       alert("Please fill in all required fields.");
    }
   
  });

function areRequiredFieldsFilled() {
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');

    return usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '';
  }

profileChoice.addEventListener('click', e => {
    profilesPage.classList.add('hidden')
    homePage.classList.remove('hidden');
  });