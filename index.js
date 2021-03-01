
var squad = {
    "person1": "Tom",
    "person2": "Linh",
    "person3": "Khoa",
    "person4": "Viveak",
    "person5": "Daniel",
    "person6": "Clara"
}

function tributeSelector(n) { // n is the number of people available to draw passed from the onclick in html
    var number = Math.floor((Math.random()*n)+1);
    var fieldName = "person"+number;
    document.querySelector(".answer"+n).textContent = "The tribute is "+squad[fieldName];
}

// function randomNumber(n) {   
//     var number = Math.floor((Math.random()*n)+1); // generate a number between 1 and the number of people
//     return number;
// }