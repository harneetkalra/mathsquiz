var myanswer
function add(){
    var number1=document.getElementById("first").value;
    var number2=document.getElementById("second").value;
    myanswer=Number(number1)+ Number(number2)
    document.getElementById("qu").style.display="block"
    document.getElementById("ques").innerHTML=number1 + " + " +number2 
    document.getElementById("butt").style.display="none"
    document.getElementById("quiz").style.display="none"
}
function sub(){
    var number1=document.getElementById("first").value;
    var number2=document.getElementById("second").value;
    myanswer=Number(number1)- Number(number2)
    document.getElementById("qu").style.display="block"
    document.getElementById("ques").innerHTML=number1 + " - " +number2 
    document.getElementById("butt").style.display="none"
    document.getElementById("quiz").style.display="none"
}
function multiply(){
    var number1=document.getElementById("first").value;
    var number2=document.getElementById("second").value;
    myanswer=Number(number1)* Number(number2)
    document.getElementById("qu").style.display="block"
    document.getElementById("ques").innerHTML=number1 + " X " +number2 
    document.getElementById("butt").style.display="none"
    document.getElementById("quiz").style.display="none"
}
function division(){
    var number1=document.getElementById("first").value;
    var number2=document.getElementById("second").value;
    myanswer=Number(number1)/ Number(number2)
    document.getElementById("qu").style.display="block"
    document.getElementById("ques").innerHTML=number1 + " / " +number2 
    document.getElementById("butt").style.display="none"
    document.getElementById("quiz").style.display="none"
}
function Check(){
    var ans=document.getElementById("answer").value;
    if (myanswer==ans){
        document.getElementById("correct").innerHTML= "You are correct"
    }
    else{
        document.getElementById("correct").innerHTML= "Try again"
    }
}
