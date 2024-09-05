let hs=0;
let cs=0;
const buttons=document.querySelectorAll('input');
function getComputerChoice(){
   let x=Math.floor(Math.random()*3);
   if(x==0){
    return "Rock";
   }
   else if(x==1){
    return "Paper";
   }
   else{
    return "Scissors"
   }
}
function disableButtons(){
  buttons.forEach(button=>{
    button.disabled=true;
  })
}
function playRound(hc){
    let cc=getComputerChoice();
    let result=""
    if(hc===cc){
        result=("<br><br>It's a tie! You both chose "+hc);
    }
    else if(hc==="Rock" && cc==="Scissors" || hc==="Paper" && cc==="Rock" || hc==="Scissors" && cc==="Paper"){
        hs++;
        result=('<br><br>You Win! You selected '+hc+" which beats "+cc+"<br><br> PlayerScore:"+hs+"Computer Score:"+cs)
        if(hs==5){
          result+='<br><br>You won! Please refresh the page to play again'
          disableButtons()
        }
    }
    else{
      cs++;
      result=('<br><br>I Win! I selected '+cc+" which beats "+hc+"<br><br> PlayerScore:"+hs+"Computer Score:"+cs)
      if(cs==5){
        result+='<br><br>I won! You are dumb! Please refresh the page to become dumb again'
        disableButtons()
      }
    }
    document.getElementById("result").innerHTML=result
    return
}
buttons.forEach(button=>{
  button.addEventListener('click',function(){
    playRound(button.value);
  })
})



// buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll("button");

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//   // and for each one we add a 'click' listener
//   button.addEventListener("click", () => {
//     alert(button.id);
//   });
// });


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
