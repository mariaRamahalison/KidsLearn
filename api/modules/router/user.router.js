const UserService = require('../../services/UserService');
var jwtHelper = require('../../Helper/jwtHelper');
var resultHelper = require('../../Helper/resultHepler');
const fs = require("fs");
const path = require("path");
const url = require("url");
const parse= require ('url');

const UserRouter = (url, app) => {

    app.post("/user/login", (req, res) => {
        log=JSON.parse(JSON.stringify(req.body));
        UserService.login(log)
            .then(user => {
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
        console.log("nitiditra" );
        console.log(req.body );
        UserService.update(req.body)
            .then(user => {
                if (user) {
                    resultHelper.data(res,user)
                }
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    
}

module.exports = UserRouter