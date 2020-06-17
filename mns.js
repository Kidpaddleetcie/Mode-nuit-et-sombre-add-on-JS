document.getElementById("mns_n").addEventListener("click",nuit);
document.getElementById("mns_s").addEventListener("click",assombrissement);
let noct=0;
let asso=0;

function nuit(){
    if(noct===0){
document.body.style.backgroundColor = "black";
document.body.style.color = "yellow";
noct++;
    }else{
        ouille()
    }
}

function assombrissement(){
    if(asso===0){
    document.body.style.backgroundColor = "rgb(31, 31, 31)";
    document.body.style.color = "rgb(192, 192, 192)";
    asso++;
        }else{
        ouille()
    }
}

function ouille(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    noct=0; 
    asso=0;
}