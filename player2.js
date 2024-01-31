// document.getElementsByClassName("random2")[0].disabled=true;
$(".random2").prop('disabled' , true);
// document.getElementsByClassName("random3")[0].disabled=true;
$(".random3").prop('disabled' , true)

$(".random2").click(function(){
    i=Math.random()
    x = parseInt(i*3+1)
    $(".start1").text(x)
    $(".random2").prop('disabled' , true);
    $(".random3").prop('disabled' , false);
})
// document.getElementsByClassName("random2")[0].onclick=function(){
//     i=Math.random()
//     x = parseInt(i*3+1)
//     document.getElementsByClassName("start1")[0].textContent= x
//     document.getElementsByClassName("random2")[0].disabled=true;
//     document.getElementsByClassName("random3")[0].disabled=false;
// } 


count=0
$(".random3").click(function(){
    count++
    $(".click1").text(count);
    i=Math.random()
    y = parseInt(i*3+1)
    $(".second1").text(y);

// document.getElementsByClassName("random3")[0].onclick=function(){
//     count++
//     document.getElementsByClassName("click1")[0].textContent=count
//     i=Math.random()
//     y = parseInt(i*3+1)
//     document.getElementsByClassName("second1")[0].textContent=y

    if(x==y){
        $(".random3").prop('disabled' , true);
        // document.getElementsByClassName("random3")[0].disabled=true;

        
        
        a=parseInt($(".click").text);
        b=parseInt($(".click1").text);
        console.log(a)
        console.log(b)
    
        if(a>b){
            $(".ply1").text("Winner");
            $(".ply2").text("Looser");
            // document.getElementsByClassName("ply1")[0].textContent="looser"
            // document.getElementsByClassName("ply2")[0].textContent="winner"
        }

        else if(a==b){
            $(".ply1").text("Tie");
            $(".ply2").text("Tie");
            // document.getElementsByClassName("ply1")[0].textContent="Tie"
            // document.getElementsByClassName("ply2")[0].textContent="Tie"
        }
    
        else{
            $(".ply1").text("Looser");
            $(".ply2").text("Winner");
            // document.getElementsByClassName("ply1")[0].textContent="winner"
            // document.getElementsByClassName("ply2")[0].textContent="looser"
        }

    }
})


