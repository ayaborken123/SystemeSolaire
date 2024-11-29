
document.querySelector(".sign-up-button").addEventListener("click", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("fName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

 
    if (name === "" || email === "" || password === "") {
        alert("Veuillez remplir tous les champs pour créer un compte.");
        return;
    }

    
    if (!validateEmail(email)) {
        alert("Veuillez entrer un email valide.");
        return;
    }

    alert(`Compte créé avec succès pour ${name}!`);
    
});


document.querySelector(".sign-in-button").addEventListener("click", function (event) {
    event.preventDefault(); 

    const email = document.querySelector(".form-container:nth-child(2) #email").value.trim();
    const password = document.querySelector(".form-container:nth-child(2) #password").value;

    if (email === "" || password === "") {
        alert("Veuillez remplir tous les champs pour vous connecter.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Veuillez entrer un email valide.");
        return;
    }

    alert("Connexion réussie!");
    


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


document.querySelector(".forgot-password").addEventListener("click", function (event) {
    event.preventDefault(); 

    alert("Fonctionnalité 'Mot de passe oublié' à implémenter.");
    
});

})
