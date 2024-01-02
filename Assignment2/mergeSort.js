export default function mergeSort(array) {
    if (array.length < 2) return array;

    let center = Math.floor(array.length / 2);

    // sort the left half
    const leftArray = array.slice(0, center)
    const rightArray = array.slice(center);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
    const sortedArray = [];

    while(leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) sortedArray.push(leftArray.shift())
        else sortedArray.push(rightArray.shift());
    }

    return [...sortedArray, ...leftArray, ...rightArray];
}
