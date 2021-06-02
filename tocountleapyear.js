function isLeap(year) {
    if(year%4==0&&year%100!==0&&year%400==0){
        return "leap year.";
    }
     else{
         return "not Leap year.";
     }   

    
}
isLeap(2001)