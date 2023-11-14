function changeColor()
{
    console.log("kleur veranderen");
    let kleur = prompt("Choose your font color", "");
    document.getElementById("kop1").style.color = kleur ;
}

function changeText()
{
    document.getElementById('kop1').innerHTML = "Welcome !" ;
}

function changeText1()
{
    document.getElementById('kop1').innerHTML = "SOD1C" ;
}

function multiplyByFive()
{
    let inputNumber = prompt("multiply by five?", "");
    var result = inputNumber * 5;
    console.log(result);
    alert(result)
}

function calculateMinutes()
{
    let inputSecond = prompt("Second to Minute");
    var awnser = inputSecond / 60;
    var slash = "/"
    var is = "="
    var number = "60"
    var minutes = "Minutes"
    console.log(inputSecond,slash,number,is,awnser,minutes);
    alert(awnser,minutes);
}