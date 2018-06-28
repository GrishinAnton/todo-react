export default function endingWord(number, one, endI, many){
    

    if ((number < 5 || (number % 10) < 5) && del !== 0) {     
        var del = number % 10;  
        return del > 1 ? endI : one
    } else {
        return many
    }
}