function randomNumber1(){
    // let num = Math.floor(Math.random()+6);
    let num=Math.floor(Math.random()*6+1);
    console.log("r1:" + num)
    return num;
}

function randomNumber2(){
    // let num = Math.floor(Math.random()+6);
    let num=Math.floor(Math.random()*6+1);
    console.log("r2:" + num)
    return num;
}
let r1=randomNumber1();
let r2=randomNumber2();

function result(){ // writes the result to header section

let ans;

if(r1>r2){
    // alert("r1 is greater");
    ans="Player 1 Wins!";
    document.getElementById("title").innerText=ans;
}
else if(r2>r1){
    // alert("r2 is greater")
    ans="Player 2 Wins!";
    document.getElementById("title").innerText=ans  ;
}
else {
    // alert("draw");
    ans="It's a Draw";
    document.getElementById("title").innerText=ans;
}

}

function setResult(){
    // let imgNumber1=randomNumber1();
    // let imgNumber2=randomNumber2();

        switch(r1){
            case 1:
                document.getElementById("dice-1").setAttribute("src","../images/dice1.png");
                  break;
            case 2:
                document.getElementById("dice-1").setAttribute("src","../images/dice2.png");
                    break;   
            case 3:
                document.getElementById("dice-1").setAttribute("src","../images/dice3.png");
                    break;   
            case 4:
                document.getElementById("dice-1").setAttribute("src","../images/dice4.png");
                    break;   
            case 5:
                document.getElementById("dice-1").setAttribute("src","../images/dice5.png");
                    break;   
            case 6:
                document.getElementById("dice-1").setAttribute("src","../images/dice6.png");
                    break;    
                

        }


        switch(r2){
            case 1:
                document.getElementById("dice-2").setAttribute("src","../images/dice1.png");
                  break;
            case 2:
                document.getElementById("dice-2").setAttribute("src","../images/dice2.png");
                    break;   
            case 3:
                document.getElementById("dice-2").setAttribute("src","../images/dice3.png");
                    break;   
            case 4:
                document.getElementById("dice-2").setAttribute("src","../images/dice4.png");
                    break;   
            case 5:
                document.getElementById("dice-2").setAttribute("src","../images/dice5.png");
                    break;   
            case 6:
                document.getElementById("dice-2").setAttribute("src","../images/dice6.png");
                    break;    
                

        }

}