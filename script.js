alert("Hello World")

var firstName = "Sydney";
var lastName = "Wait";
var age = 37;
var likesTravel = true;

console.log("Your first name is:", firstName);
console.log("Your last name is:", lastName);
console.log("Your age is:", age);
console.log("Do you like to travel?", likesTravel);

var movieArray = ["The Princess Bride", "The Little Mermaid", "True Grit"]

console.log("Your favorite movies are:", movieArray[0], movieArray[1], "and", movieArray[2])


var williamGrades = [62, 97, 99, 85, 73, 97];

console.log("William's first grade:", williamGrades[0]);
console.log("William's second grade:", williamGrades[5]);

var williamTotal = 0;
for(var i=0; i < williamGrades.length; i++){
    williamTotal +=williamGrades[i];
}
var williamAvg= williamTotal/williamGrades.length;
console.log("Williams total grades:", williamTotal);
console.log("Williams average grade:", williamAvg);


var amyObject ={
    firstname: "Amy",
    lastName: "Adams",
    age: 44,
    favoriteFood: "Pasta",
    amyHobbies: ["making movies", "dating famous people", "brushing her hair"]
   

} 
 console.log("Amy Adam's favorite food is", amyObject.favoriteFood);

fullName= `${amyObject.firstname} ${amyObject.lastName}`;
console.log("Amy Adam's full name is", fullName)

console.log("Amy Adams is", amyObject.age, "years old.  Her favorite food is", amyObject.favoriteFood,);

hobbiesSentence=`Amy has ${amyObject.amyHobbies.length} main hobbies: ${amyObject.amyHobbies[0]}, 
${amyObject.amyHobbies[1]}, and ${amyObject.amyHobbies[2]}.  Her favorite food is ${amyObject.favoriteFood}.`

console.log(hobbiesSentence);

