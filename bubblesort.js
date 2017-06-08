function bubbleSort(array) {
    if (array.length < 2){
        return array;
    }
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (array[i] > array[i +1]) {
                swapping(array, i, i+1)
            }
        }
    }
    return array;
}

function swapping(array, index1, index2) {
    var temp;
    temp = array[index2];
    array[index2] = array[index1]
    array[index1] = temp;
}
