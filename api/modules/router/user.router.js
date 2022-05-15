const UserService = require('../../services/UserService');
var jwtHelper = require('../../Helper/jwtHelper');
var resultHelper = require('../../Helper/resultHepler');


const UserRouter = (url, app) => {

    app.post("/user/login", (req, res) => {
        // log = req.body
        log=JSON.parse(JSON.stringify(req.body));
        console.log(log);
        console.log(log.email);
        UserService.login(log)
            .then(user => {
                console.log("login ok");
                if(user.length==0) throw new Error("Email ou mot de passe incorrecte");
                token = jwtHelper.generateToken(user[0]);
                resultHelper.succes(res, { token: token, user: user[0]} ,"login ok");
                // res.status(200).send({token:token , user:user})
            })
            .catch(error => { resultHelper.error(res, error.message); });
    });

    app.post("/user/inscription", (req, res) => {
        us = req.body;
        UserService.inscription(us)
            .then(user => {
                if (user) {
                    resultHelper.succes(res,user,"Inscription faite avec succès");
                }
            })
            .catch(error => {  resultHelper.error(res, error.message); });
    });

    app.get("/api/user/livreur/all", (req, res) => {
        UserService.findLivreur()
            .then(user => {
                if (user) {
                    resultHelper.succes(res,user,"")
                }
            })
            .catch(error => {  resultHelper.error(res, error.message); });
    });

    app.put("/api/user/update", (req, res) => {
        UserService.update(req.body)
            .then(user => {
                if (user) {
                    resultHelper.succes(res,user,"")
                }
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    app.get("/test", (req, res) => {
        console.log("niditra");
        resultHelper.succes(res,"test MANDEHA","test MANDEHA MESSAGE");
    });
    
}

module.exports = UserRouter