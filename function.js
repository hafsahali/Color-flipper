function Totalscore(grade){
    if (grade >=70 && grade <=100){
        result= "A"
    }
    else if(grade >=60 && grade <=69){
        result = "B"
    }
    else if(grade >=50 && grade <=59){
        result = "C"
    }
    else if(grade >=45 && grade <=49){
        result = "D"
    }
    else if(grade >=40 && grade <=35){
        result = "E"
    }
    else if(grade >= 0 && grade <=39){
        result = "F"
    }
    else{
        result = "Invalid Score"
    }
    console.log(result)

function score(CA1,CA2,exam){
    if (CA1,CA2 >=0 && CA1,CA2 <=20){
        return CA1+CA2+exam
    }
    else if(exam>=0 && exam <=60){
        return CA1+CA2+exam
    }
    else{
    console.log("invalid score")
   }

}

Totalscore(score(13,12,50))
}
