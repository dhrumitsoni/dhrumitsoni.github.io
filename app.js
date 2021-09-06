let num="";
let arith = "";
var fi;
let hasDot = false;

function display(id)
{
    var dis = document.getElementById(id).innerText;
    
    arith = arith + document.getElementById(id).value;

    num = num + dis;
    document.getElementById("input").innerHTML= num;

}
function clsall()
{
    num="";
    arith="";
    document.getElementById("input").innerHTML='0';
}

function clr()
{
    if(num.length>1)
    {
    num = num.slice(0,-1);
    arith = arith.slice(0,-1);
    document.getElementById("input").innerHTML= num;
    }
    else
    {
        clsall();
    }
    
}
function ans()
{   
    console.log(arith)
    var dis = eval(arith);
    document.getElementById("input").innerHTML=dis;
    num = dis;
    arith = dis;
    
}