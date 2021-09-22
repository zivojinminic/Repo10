// Create school object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
// End of school object

function myFunction(newProperty, newValue) {
// Only change code below this line
    lion[newProperty] = newValue;
    return lion;
// Only change code above this line
}
console.log(myFunction("roar", "roar-roar")); //Change this line
module.exports = myFunction;