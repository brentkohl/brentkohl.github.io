function map(x, a, b, c, d) {
    return (x - a) * (d - c) / (b - a) + c;
}

let name = document.getElementById("name");
let school = document.getElementById("school");
let about = document.getElementById("about");

let _name = name.innerHTML;
let _school = school.innerHTML;
let _about = about.innerHTML;


let nameList = _name.split("");
let schoolList = _school.split("");
let aboutList = _about.split("");

let fullTime = 200;
let currentTime = 0;

let revisedNameList = [];

for (let i = 0; i < nameList.length; i++) {
    revisedNameList.push([nameList[i], parseInt(map(Math.random(), 0, 1, parseInt(fullTime / 10), fullTime))]);
}

let revisedSchoolList = [];

for (let i = 0; i < schoolList.length; i++) {
    revisedSchoolList.push([schoolList[i], parseInt(map(Math.random(), 0, 1, parseInt(fullTime / 10), fullTime))]);
}

let revisedAboutList = [];

for (let i = 0; i < aboutList.length; i++) {
    revisedAboutList.push([aboutList[i], parseInt(map(Math.random(), 0, 1, parseInt(fullTime / 10), fullTime))]);
}

console.log(revisedNameList);
console.log(revisedSchoolList);
console.log(revisedAboutList);


function randomLetter() {
    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?\"}{:><,./';[]1234567890!@#$%^&*()_+-=|";
    return letter[Math.floor(Math.random() * letter.length)];
}

function setup() {
    update();
}



function update() {

    let currentName = "";
    let currentSchool = "";
    let currentAbout = "";
    let continueUpdate = false;


    for (let i = 0; i < revisedNameList.length; i++) {
        if (revisedNameList[i][0] != " ") {
            if (currentTime < revisedNameList[i][1]) {
                currentName += randomLetter();
                continueUpdate = true;
            } else {
                currentName += revisedNameList[i][0];
            }
        } else {
            currentName += " ";
        }
    }

    for (let i = 0; i < revisedSchoolList.length; i++) {
        if (revisedSchoolList[i][0] != " ") {
            if (currentTime < revisedSchoolList[i][1]) {
                currentSchool += randomLetter();
                continueUpdate = true;
            } else {
                currentSchool += revisedSchoolList[i][0];
            }
        } else {
            currentSchool += " ";
        }
    }

    // for(let i = 0; i < revisedAboutList.length; i++){
    //     if(revisedAboutList[i][0] != " "){
    //         if(currentTime < revisedAboutList[i][1]){
    //             currentAbout += randomLetter();
    //             continueUpdate = true;
    //         } else {
    //             currentAbout += revisedAboutList[i][0];
    //         }
    //     } else {
    //         currentAbout += " ";
    //     }
    // }




    name.innerHTML = currentName;
    school.innerHTML = currentSchool;
    about.innerHTML = currentAbout;


    currentTime++;
    console.log(currentTime);
    if (continueUpdate) {
        setTimeout(update, 600 / 60);
    }


}



setup();




