document.getElementsByClassName("random")[0].onclick=function(){
    i=Math.random()
    x = parseInt(i*6+1)
    document.getElementsByClassName("start")[0].textContent= x
    document.getElementsByClassName("random")[0].disabled=true;
    
count=0
document.getElementsByClassName("random1")[0].onclick=function(){
    count++
    document.getElementsByClassName("click")[0].textContent=count
    i=Math.random()
    y = parseInt(i*6+1)
    document.getElementsByClassName("second")[0].textContent=y

    if(x==y){
        document.getElementsByClassName("random1")[0].disabled=true;
    }
}
}