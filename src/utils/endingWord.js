export default function endingWord(number, one, endI, many){

    if ((number < 5 || (number > 20 && (number % 10 < 5 && number % 10 !==0))) && number !== 0) {     
        var del = number % 10;  
        return del > 1 ? endI : one
    } else {
        return many
    }
}