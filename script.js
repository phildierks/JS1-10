/**
 * Created by h205p3 on 10/3/17.
 */
//write first method
function sleep_in(weekday, vacation) {
    if(weekday===true && vacation===false){
        return false;
    }
    if(weekday===false && vacation===false){
        return true;
    }
    if(weekday===false && vacation=== true){
        return true;
    }
    if(weekday===true && vacation=== true){
        return true;
    }
}

function tester() {
    document.getElementById("output").innerHTML = sleep_in(false, false);
    document.getElementById("output2").innerHTML = sleep_in(true, false);
    document.getElementById("output3").innerHTML = sleep_in(false, true);
    document.getElementById("output4").innerHTML = sleep_in(true, true);

    document.getElementById("output").innerHTML = monkey_trouble(false, false);
    document.getElementById("output2").innerHTML = monkey_trouble(true, false);
    document.getElementById("output3").innerHTML = monkey_trouble(false, true);
    document.getElementById("output4").innerHTML = monkey_trouble(true, true);

}
function monkey_trouble(smile_a,smile_b){
    if(smile_a===true && smile_b===true){
        return true;
    }
    if(smile_a===true && smile_b===false){
        return false;
    }
    if(smile_a===false && smile_b===true){
        return false;
    }

    if(smile_a===false && smile_b===false){
        return true;
    }
}
string_times(hi,4);
function string_times(word,num){
var string = "";
    for(var i=0;i<num;i++) {
        string += word;
    }
    return string;
}


function front_times(wort,numb){
    var wor = "";
    for(var i=0;i< numb;i++){
        wor += wort.substring(0,3);
    }
    return wor;
}

function string_bits(string) {
    var life = "";
    for (var i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            life += string[i];
        }
    }
    return life;
}

function caughtSpeeding(speed,birthday){
if(birthday === true){
    speed-= 5;
}

    if(speed <= 60){
        return 0;
    }
    if(speed >= 61 && speed <= 80){
        return 1;
    }
    if(speed>81){
        return 2;
    }
}

function fizz_buzz(int){
    if(int % 3 === 0 && int % 5 === 0) {
        return "FizzBuzz";
    }
    if (int % 3 === 0) {
        return "Fizz";
    }
    if(int % 5 === 0) {
        return "Buzz";
    }
    if (0 !== int % 3 && 0 !== int % 5) {
        return int + "!";
    }

}


function teaParty(tea,candy){
    if(tea<5 || candy<5){
        return 0;
    }
    if(tea >= candy*2 || candy >= tea*2){
        return 2;
    }
    if(tea>=5 && candy>=5){
        return 1;
    }
}

function blackjack(num1,num2){
    if(num1> 21 && num2 <=21){
        return num2;
    }
    if(num1 > 21 && num2 > 21){
        return 0;
    }
    if(num2> 21 && num1 <=21){
        return num1;
    }
    if(num1>num2){
        return num1;
    }
    if(num2>num1){
        return num2;
    }
}

function loneSum(a,b,c){
    if(a!==b && b!==c && c!== a){
        sum= a+b+c;
        return sum;
    }else{
        if(a===b && b===c && b===a){
            return 0;
        }
        if(a===b){
            return c;
        }
        if(b===c){
            return a;
        }
        if(a===c){
            return b;
        }
    }
}



    







