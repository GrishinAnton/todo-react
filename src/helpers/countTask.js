export function countTask(arr) {
    var count = 0
    if (arr){
        
        arr.forEach(item => {
            if (item.complited !== true) count++
        });

        return count
    }    
}