"use strict";
/*
$('#years').on('input',function() {
    var year = parseInt($('#years').val());
    var months = 12;
    $('#months').val((year * months ? year * months : 0).toFixed(0)).append("Months");
});*/
/*Calculations for Mortgage calculations*/
var $years = $("input[name='years']").on("input", calculatemonths),
    $months   = $("input[name='months']").on("input", calculateyears),
    $homeprice      = $("input[name='homeprice']"),
    $percentage = $("input[name='downpayment']").on("input", calculatePrice),
    $downpayment   = $("input[name='downprice']").on("input", calculatePerc),
    $apr      = $("input[name='apr']"),
    $checkingbal = $("#checkingbal").text(),
    $savingsbal = $("#savingsbal").text();
    console.log($checkingbal +" "+ $savingsbal);

$( "#years" ).keyup(function(){
    $('#months').text($('#years').val() * 12).append(" Months");
});

$("#calculate").click(function (e) {
    e.preventDefault();
    var $downmoneyholder = $("input[name='downprice']").val();
    var $n = $months.val();
    var $a = $homeprice.val();
    //console.log($a);
    var $b = $a-$downmoneyholder;
    //console.log($b);
    var $i = ($apr.val()/100)/12;
    var $prefirst = 1 + $i;
    var $first_part = (Math.pow($prefirst,$n))-1;
    var $presecond = (Math.pow($prefirst,$n));
    var $second_part = $i*$presecond;
        //alert($first_part +" and "+ $second_part );
    var $d = $first_part / $second_part;
    var $p = $b/$d;
    $("#ammount").text($p.toFixed(2)).css({"font-size": "200%","font-family": "fantasy"});
    });
function calculatePrice() {
    var percentage = $(this).val();
    var price      = $homeprice.val();
    var calcPrice  = ( price * percentage / 100 );
    $downpayment.val( calcPrice );
}
function calculatePerc() {
    var discount = $(this).val();
    var price    = $homeprice.val();
    var calcPerc = (discount * 100 / price);
    $percentage.val( calcPerc );
}
function calculatemonths() {
    var years = $(this).val();
    var calcmonths  = ( years*12 );
    $months.val( calcmonths );
}
function calculateyears() {
    var months = $(this).val();
    var calcyears  = ( months/12 );
    $years.val( calcyears );
}

/*Checking Password Match*/
function checkPasswordMatch() {
    var password = $("#password").val();
    var confirmPassword = $("#confassword").val();

    if (password != confirmPassword)
        $("#CheckPasswordMatch").html("Passwords do not match!").css("color","red");
    else
        $("#CheckPasswordMatch").html("Passwords match.").css("color","green");
}

$(document).ready(function () {
    $("#confassword").keyup(checkPasswordMatch);
});

/*Getting date to display Last login*/
var today = new Date();
var dd = today.getDate() - 3;
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
}
if(mm<10){
    mm='0'+mm;
}
var today = mm+'/'+dd+'/'+yyyy;
document.getElementById("datetoday").innerHTML = today;

$("#transfermoney").click(function (e) {
   e.preventDefault();
    var abc = $('#fromacc option:selected').text();
    console.log(abc);
});