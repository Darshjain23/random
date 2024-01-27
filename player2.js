document.getElementsByClassName("random2")[0].disabled=true;
document.getElementsByClassName("random3")[0].disabled=true;
document.getElementsByClassName("random2")[0].onclick=function(){
    i=Math.random()
    x = parseInt(i*3+1)
    document.getElementsByClassName("start1")[0].textContent= x
    document.getElementsByClassName("random2")[0].disabled=true;
    document.getElementsByClassName("random3")[0].disabled=false;
} 
count=0
document.getElementsByClassName("random3")[0].onclick=function(){
    count++
    document.getElementsByClassName("click1")[0].textContent=count
    i=Math.random()
    y = parseInt(i*3+1)
    document.getElementsByClassName("second1")[0].textContent=y

    if(x==y){
        document.getElementsByClassName("random3")[0].disabled=true;

        a=parseInt(document.getElementsByClassName("click")[0].textContent)
        b=parseInt(document.getElementsByClassName("click1")[0].textContent)
        console.log(a)
        console.log(b)
    
        if(a>b){
            document.getElementsByClassName("ply1")[0].textContent="You are looser"
            document.getElementsByClassName("ply2")[0].textContent="You are winner"
        }

        else if(a==b){
            document.getElementsByClassName("ply1")[0].textContent="Tie"
            document.getElementsByClassName("ply2")[0].textContent="Tie"
        }
    
        else{
            document.getElementsByClassName("ply1")[0].textContent="You are winner"
            document.getElementsByClassName("ply2")[0].textContent="You are looser"
        }

    }
}


