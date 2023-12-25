// services/authService.js
// Ici, vous implémentez la logique pour enregistrer et connecter les utilisateurs.
// Cela peut inclure la communication avec la base de données, le hashing de mot de passe, etc.

const { log } = require("console");

exports.register = async (user) => {
    // Implémentez la logique d'enregistrement
    console.log("register logic here");
    // Par exemple, hashage du mot de passe, sauvegarde dans la base de données, etc.
};

exports.login = async (email, password) => {
    // Implémentez la logique de connexion
    console.log("login logic here, jwt token generation");
    // Vérifiez l'utilisateur et créez un token JWT
};
