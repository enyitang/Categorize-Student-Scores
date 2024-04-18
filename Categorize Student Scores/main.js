function StudentScore(){
    let score = 100
    score = prompt("Enter your Score")
    if(score <= 100 && score > 90){
    alert("Excellent")
    }else if(score > 79 && score <= 89){
        alert("Very Good")
    }else if(score >69 && score <= 79){
        alert("Pass")
    }else if(score <= 69){
        alert("Fail")
    }
      
}
StudentScore()