$(".random2").prop('disabled' , true);
$(".random3").prop('disabled' , true)

$(".random2").click(function(){
    i=Math.random()
    x = parseInt(i*3+1)
    $(".start1").text(x)
    $(".random2").prop('disabled' , true);
    $(".random3").prop('disabled' , false);
})

count=0
$(".random3").click(function(){
    count++
    $(".click1").text(count);
    i=Math.random()
    y = parseInt(i*3+1)
    $(".second1").text(y);

    if(x==y){
        $(".random3").prop('disabled' , true);

        a=parseInt($(".click").text());
        b=parseInt($(".click1").text());
        console.log(a)
        console.log(b)
    
        if(a>b){
            $(".ply1").text("Loser");
            $(".ply2").text("Winner");
        }

        else if(a==b){
            $(".ply1").text("Tie");
            $(".ply2").text("Tie");
        }
    
        else{
            $(".ply1").text("Winner");
            $(".ply2").text("Loser");
        }

    }
})


