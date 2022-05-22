function succes(res,data,message){
    res.status(200).send({
        code:200,
        data:data,
        message:message
    })
}

function data(res,data){
    res.status(200).send(data);
}

function test(res,data,message){
    res.status(200).send(
        data
    )
}

function throwError(){
    res.writeHead(404, {"Content-Type": "text/plain" });
        res.end("404 Not Found");
        return;
}

function error(res,message){
    res.status(200).send({
        code:400,
        message:message
    });
    return;
}

module.exports={
    succes,
    error,
    test,
    throwError,
    data
}