const AnimalService = require('../../services/AnimalService');
var resultHelper = require('../../Helper/resultHepler');
const fs = require("fs");
const path = require("path");
const url = require("url");
const parse= require ('url');

const AnimalRouter = (url, app) => {

    app.get("/animal/all", (req, res) => {
        AnimalService.find()
            .then(animal => {
                if (animal) {
                    resultHelper.data(res,animal)
                }
            })
            .catch(error => {  resultHelper.error(res, error.message); });
    });

    app.get("/getImage", (req, res) => {
        const image=req.query.image;
        filePath='api/public/'+image;
        console.log(filePath);
        fs.exists(filePath, (exists) => {
            if (!exists) {
                resultHelper.error(res,'"image inexistante')
            }else{
                try{
                    var ext = (path.extname(image)).split(".")[1];
                    var contentType = "text/plain";
                    if (ext === "png" || ext=== "jpg" || ext=== "jpeg" ) contentType = "image/"+ext;
                    res.writeHead(200, {"Content-Type": contentType });
                    fs.readFile(filePath,function (err, content) {
                            res.end(content);
                        });
                }catch(error){
                    resultHelper.error(res,error.message)
                }
            }
        });
    });  

}

module.exports = AnimalRouter