export function filterTasks(arr, params){

    var filterTasks = arr.filter(item => {
        if (params === 'all') {
            return item
        }

        if (params === 'active') {
            return item.complited === false
        }

        if (params === 'complited') {
            return item.complited === true
        }
    })  

    return filterTasks
}
