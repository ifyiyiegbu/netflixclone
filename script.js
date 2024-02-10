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
    signinPage.classList.add('hidden')
    profilesPage.classList.remove('hidden');
  });

  profileChoice.addEventListener('click', e => {
    profilesPage.classList.add('hidden')
    homePage.classList.remove('hidden');
  });