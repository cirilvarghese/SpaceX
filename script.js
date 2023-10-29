

$("#btn-text").mouseenter(function(){
 
  $(".text1").css({"color":"black","transition": "0.4s all"})
  $(".button").css({"border-radius":"30px", "transition": "0.4s all"})
})

$("#btn-text").mouseleave(function(){
  $(".text1").css("color", "white ")
  $(".button").css("border-radius", "0px")
  
})

$("#btn-text-2").mouseenter(function(){
  $(".text2").css({"color":"black","trasition" : "0.4s all"})
  $(".button").css({"border-radius":"30px", "transition": "0.4s all"})
})

$("#btn-text-2").mouseleave(function(){
  $(".text2").css({"color":"white","trasition" : "0.4s all"})
  $(".button").css("border-radius", "0px")
})

$(document).ready(function(){
  $(".main-title").fadeIn(10000);
})