const labelDate = document.querySelector("#age");
const ageBtn = document.querySelector(".btn");
const showResult = document.querySelector(".result");

function calculateAge(){
    let birthday = labelDate.value;
    if(birthday === ""){
        alert("Please enter your birth day")
    }else{
        let age = getAge(birthday);
        showResult.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthday){
    let currentDate = new Date();

    let birthDayDate = new Date(birthday);

    let age = currentDate.getFullYear() - birthDayDate.getFullYear(); // 24 - 1 = 23
    // console.log(currentDate.getFullYear()+" "+birthDayDate.getFullYear());

    let month = currentDate.getMonth() - birthDayDate.getMonth(); // 04 - 10 = -6
    // console.log(currentDate.getMonth()+" "+birthDayDate.getMonth());
   
    if((month < 0) || (month === 0 && currentDate.getDate() < birthDayDate.getDate())){
        age--; // 22
    }
   
    return age;
}
ageBtn.addEventListener("click",calculateAge);