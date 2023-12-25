const authService = require('../service/authService');

exports.register = async (req, res) => {
    try { 
        const user = req.body;
        console.log("register logic here"); 
        const savedUser = await authService.register(user);
        res.status(201).send(savedUser);
    } catch (error) {
        console.error(error.message); // Log des erreurs
        res.status(500).send(error.message);
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("login logic here, jwt token generation"); 
        const token = await authService.login(email, password);
        res.status(200).send({ token });
    } catch (error) {
        console.error(error.message); 
        res.status(401).send(error.message);
    }
};