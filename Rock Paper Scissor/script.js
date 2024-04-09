
//  Solve  by Function

// function countVowels(str){
    // let count = 0;

    // for(const char of str){

    //     if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
    //         count++;
    //     }
    // }
    // console.log(count);
// }

// constVowels("suraj");



//  Solve by Arrow Funtion
// const countVow = (str) => {

//     let count = 0;
//     for(const char of str){
//         if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
//             count++;
//         }
//     }
//     console.log(count);
//     }


//     countVow("srivastav");

    // let arr=[1,2,3,4,5];
    // arr.forEach(function printVal(val) {
    //     console.log(val);
    // });

    // let a = [1,2,3,4];
    // let b = [4,5,6,7];
    
    // console.log(a);

    // alert("Suraj Kumar Srivastav");

    // let suraj = document.querySelector("#tag");
    // suraj.innerText = "This is a new JavaScript page which is developed by SKS";

    // let modeBtn = document.querySelector("#mode");
    // let currMode = "light";

    // modeBtn.addEventListener("click",() =>{
    //     if(currMode === "light"){
    //         currMode = "dark";
    //         document.querySelector("body").style.backgroundColor = "yellow";
    //     } else{
    //         currMode ="light";
    //         document.querySelector("body").style.backgroundColor = "red";
    //     }
    //     console.log(currMode);
    // })


    let userScore = 0;
    let compScore = 0;


    const choices = document.querySelectorAll (".choice");
    const msg = document.querySelector("#msg");

    const userScorePara = document.querySelector("#user-score");
    const compScorePara = document.querySelector("#comp-score");

    const genComChoice = () => {
        const options = ["rock","paper","scissors"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];

        //rock,paper,scissors
    }

    const drawGame = ()=>{
        
        msg.innerText = "Game was draw. Play again.";
        msg.style.backgroundColor = "#081b31";
    }

    const showWinner = (userWin , userChoice, compChoice) => {
        if (userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice} `;
            msg.style.backgroundColor = "green";
            
        } else{
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `You lose. ${compChoice} beats your ${userChoice} `;
            msg.style.backgroundColor = "red";
        }
    }

    const playGame = (userChoice) =>{
        
        //Generate computer choice;
        const compChoice = genComChoice();
        

        if (userChoice === compChoice){
            drawGame();
        } else {
            let userWin = true;
            if(userChoice ==="rock"){
                userWin = compChoice === "paper" ? false :true;
            } else if(userChoice === "paper") {
                userWin = compChoice === "scissors" ? false : true;
            } else {
                userWin = compChoice === "rock" ? false : true
            }
            showWinner(userWin , userChoice ,compChoice);
        }

    }



    choices.forEach((choice) =>{
        
        choice.addEventListener("click", () =>{
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });
    });





//     class Person{
//         constructor(){
//             this.species="homo sapiens";
//         }
    

//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("do nothing");
//     }

// }

// class Engineer extends Person{
//     work (){
//         console.log("Solve Problem");
//     }
// }

// let surajobj = new Engineer;
// let p1 = new Person();
// console.log(p1);

// let e1 = new Engineer();
// console.log(e1);


//  PRACTICE QUESTIONS
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//     viewDATA(){
//         console.log("Website Data");
//     }
// }

// let student1 = new User("Suraj", "abc@email.com");
// console.log(student1);
// let student2 = new User("Satyam", "def@email.com");
// console.log(student2);

// student1.viewDATA();

