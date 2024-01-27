document.getElementsByClassName("random")[0].disabled=false;
document.getElementsByClassName("random1")[0].disabled=true;
document.getElementsByClassName("random")[0].onclick=function(){
    i=Math.random()
    x = parseInt(i*3+1)
    document.getElementsByClassName("start")[0].textContent= x
    document.getElementsByClassName("random")[0].disabled=true;
    document.getElementsByClassName("random1")[0].disabled=false;
}
sum=0
document.getElementsByClassName("random1")[0].onclick=function(){
    sum++
    document.getElementsByClassName("click")[0].textContent=sum
    i=Math.random()
    y = parseInt(i*3+1)
    document.getElementsByClassName("second")[0].textContent=y

    if(x==y){
        document.getElementsByClassName("random1")[0].disabled=true;
        document.getElementsByClassName("random2")[0].disabled=false;
    }
}
