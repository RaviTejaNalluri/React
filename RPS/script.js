// function getComputerChoice(){
//    let x=Math.floor(Math.random()*3);
//    if(x==0){
//     return "rock";
//    }
//    else if(x==1){
//     return "paper";
//    }
//    else{
//     return "scissor"
//    }
// }

// function getHumanChoice(){
//     while(true){
//         const status=prompt("rock,paper,scissors").toLowerCase();
//         if(status==="rock" || status==="paper" || status==="scissors"){
//             return status;
//         }
//         else{
//             console.log("Invalid Human choice");
//         }
//      }
// }

// function playGame(){
//     console.log("Starting the game");
//     let hs=0;
//     let cs=0;
//     function playRound(hc,cc){
//         if(hc===cc){
//             alert("It's a tie");
//         }
//         else if(hc==="rock" && cc==="scissors" || hc==="paper" && cc==="rock" || hc==="scissors" && cc==="paper"){
//             alert("Humans win");
//             hs++;
//         }
//         else{
//             alert("Computer win");
//             cs++;
//         }
//     }
//     while(hs<5 && cs<5){
//         const human=getHumanChoice();
//         const computer=getComputerChoice();

//         playRound(human,computer);
//         console.log(`Current Score - Human: ${hs}, Computer: ${cs}`);
//     }
//     if(hs===5){
//         console.log("You Win");
//     }
//     else{
//         console.log("You lost! You are dumb");
//     }
// }

// playGame();


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});


//THis is for DOM exercise
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// const redpara=document.createElement("p");
// redpara.textContent="Hey! I am red";
// redpara.style.color="red";
// container.appendChild(redpara);

// const heading3=document.createElement("h3");
// heading3.textContent="I am blue h3!";
// heading3.style.color="blue";
// container.appendChild(heading3);

// const div2=document.createElement("div");
// div2.style.border="black";
// div2.style.backgroundColor="pink";

// const heading1=document.createElement("h1");
// heading1.textContent="I am in a div";
// div2.appendChild(heading1);

// const para=document.createElement("p");
// para.textContent="ME TOO!";
// div2.appendChild(para);

// container.appendChild(div2);
