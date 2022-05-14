function succes(res,data,message){
    res.status(200).send({
        code:200,
        data:data,
        message:message
    })
}

function test(res,data,message){
    res.status(200).send(
        data
    )
}

function error(res,message){
    res.status(200).send({
        code:400,
        message:message
    })
}

module.exports={
    succes,
    error,
    test
}