
 let head=document.querySelector(".head");



 
let type ="X";

function clic(id)
{
    let m =document.getElementById(id)
if(type==="X" && m.innerHTML==="")
{
     m.innerHTML ="X";
     type="O";
     head.innerHTML="O";

}else if(type==="O" && m.innerHTML==="")
{

    m.innerHTML ="O";
    type="X";
    head.innerHTML="X";

}

clic2();

}









function end(num1,num2,num3)
{

    
head.innerHTML=`${arrayy[num1]} weneer`;
document.getElementById("title"+num1).style.background="#000";
document.getElementById("title"+num2).style.background="#000";
document.getElementById("title"+num3).style.background="#000";

setTimeout(function(){ head.innerHTML += "."},1000);
setInterval(function(){location.reload()},4000)




}







arrayy=[];

function clic2()
{

for( i=1 ; i<10 ; i++)
{

    arrayy[i]=document.getElementById("title"+[i]).innerHTML;

}
    
if(arrayy[1]==arrayy[2] && arrayy[2]== arrayy[3] && arrayy[3]!="")
{
    end(1,2,3)
}
else if (arrayy[4]==arrayy[5] && arrayy[5]== arrayy[6] && arrayy[6]!="")
{

    end(4,5,6)
}
else if (arrayy[7]==arrayy[8] && arrayy[8]== arrayy[9] && arrayy[9]!="")
{
    end(7,8,9)
}
else if (arrayy[1]==arrayy[4] && arrayy[4]== arrayy[7] && arrayy[7]!="")
{
    end(1,4,7)
}
else if (arrayy[2]==arrayy[5] && arrayy[5]== arrayy[8] && arrayy[8]!="")
{
    end(2,5,8)

}
else if (arrayy[3]==arrayy[6] && arrayy[9]== arrayy[3] && arrayy[9]!="")
{
    end(3,6,9)

}
else if (arrayy[1]==arrayy[5] && arrayy[5]== arrayy[9] && arrayy[9]!="")
{
    end(1,5,9)

}
else if (arrayy[3]==arrayy[5] && arrayy[5]== arrayy[7] && arrayy[7]!="")
{

    end(3,5,7)
}



}






