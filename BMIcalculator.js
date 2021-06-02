function BMIcalculator(weight , height){
    var BMI = weight/Math.pow(height , 2);
    return Math.round(BMI);


}

var ath = BMIcalculator(12 , 1.19);
console.log(BMI);
