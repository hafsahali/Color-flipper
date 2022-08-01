function Totalscore(entry){
    if (entry >=70 && entry <=100){
        result= "A"
    }
    else if(entry >=60 && entry <=69){
        result = "B"
    }
    else if(entry >=50 && entry <=59){
        result = "C"
    }
    else if(entry >=45 && entry <=49){
        result = "D"
    }
    else if(entry >=40 && entry <=35){
        result = "E"
    }
    else if(entry >= 0 && entry <=39){
        result = "F"
    }
    else{
        result = "your entry score"+Invalid 
    }
    console.log(result)
}
function score()


function roundscore(score){
    if(score>=70 || score<43)
    return score
}
   elseif(score%10>=8){
       const addedMark=10-(score%10)
       return score+addedMark
   }
    else{
       return score
   }

