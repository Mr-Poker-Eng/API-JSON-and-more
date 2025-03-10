const person = {
    name: "munim",
    age: 10,
    friends: ["nibir", "tawseef", "apurbo"],
    status: false,
}

const newPerson = JSON.stringify(person);
// console.log(typeof newPerson)
// console.log(newPerson)

const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2)
// console.log(person)