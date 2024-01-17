document.getElementsByClassName("random")[0].onclick=function(){
    i=Math.random()
    document.getElementsByClassName("start")[0].textContent=parseInt(i*6+1)
    
};
document.getElementsByClassName("random1")[0].onclick=function(){
    i=Math.random()
    document.getElementsByClassName("second")[0].textContent=parseInt(i*6+1)
}