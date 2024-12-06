// Gestion des bascules entre connexion et inscription
const loginToggle = document.getElementById("login-toggle");
const signupToggle = document.getElementById("signup-toggle");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

loginToggle.addEventListener("click", () => {
  loginToggle.classList.add("active");
  signupToggle.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

signupToggle.addEventListener("click", () => {
  signupToggle.classList.add("active");
  loginToggle.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});

// Validation fictive pour la connexion et l'inscription
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  if (username === "planete" && password === "galaxy123") {
    alert("Connexion réussie ! Bienvenue dans le système solaire.");
  } else {
    const error = document.getElementById("login-error-message");
    error.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
    error.style.display = "block";
  }
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (username && email && password) {
    alert(`Inscription réussie ! Bienvenue ${username}.`);
  } else {
    const error = document.getElementById("signup-error-message");
    error.textContent = "Veuillez remplir tous les champs.";
    error.style.display = "block";
  }
});
