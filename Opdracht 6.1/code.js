function changeColor()
{
    console.log("kleur veranderen")
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