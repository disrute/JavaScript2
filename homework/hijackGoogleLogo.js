function hijackGoogleLogo() {
  let googleLogo = document.getElementById('hplogo');
  googleLogo.setAttribute('src', 'https://www.hackyourfuture.dk/static/logo-dark.svg');
  googleLogo.setAttribute('srcset', 'https://www.hackyourfuture.dk/static/logo-dark.svg');
}

// Modify the source and sourceset of the logo so that it's replaced by the HackYourFuture logo instead