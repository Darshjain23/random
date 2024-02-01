$(document).ready(function(){



$(".random").prop('disabled', false);
$(".random1").prop('disabled', true);

$(".random").click(function(){
    i=Math.random()
    x = parseInt(i*3+1)
    $(".start").text(x)
    $(".random").prop('disabled', true);
    $(".random1").prop('disabled', false);
})

sum=0
$(".random1").click(function(){
    sum++
    $(".click").text(sum)
    i=Math.random()
    y = parseInt(i*3+1)
    $(".second").text(y)

    if(x==y){
        $(".random1").prop('disabled' , true);
        $(".random2").prop('disabled' , false);
    }
})
})