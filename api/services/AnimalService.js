
const Animal = require('../Schema/Animal');


AnimalModel = Animal.Animal;
async function find(query) {
    return await Animal.Animal.find(query).exec();
}

// async function create(us) {
//     return await new User.User(us).save();
// }


// function verifyEmail(us) {
//     return userBool = find({ email: us.email })
//         .then(result => {
//             if (result.length == 0) return true;
//             return false;
//         })
//         .catch(error => { throw error });
//     }


// async function inscription(us) {
//     if (!await verifyEmail(us)) throw new Error("Email déja existant");
//     us.mdp = await jwtHelper.encryptPassword(us.mdp);
//     return create(us);
// }


// async function login(log) {
    
//     console.log("haha");
//     log.mdp = await jwtHelper.encryptPassword(log.mdp);
//     console.log("hehe");
//     let email=log.email;
//     let mdp=log.mdp;
//     return await find({ "email": log.email, "mdp": log.mdp });
// }

// async function update(item) {
//     return await UserModel
//         .findOneAndUpdate({ _id: item._id }, item, { new: true })
//         .exec();
// }

module.exports = {
    find
};
