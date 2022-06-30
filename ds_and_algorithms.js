
// The practice of Udemy course 資料結構與演算法(JavaScript)

let testArr = []
for (let i = 0; i < 10; i++) {
    testArr.push(Math.floor(Math.random() * 100))
}

/* #28 Subsequence */
function isSubsequence(s1, s2) {
    if (s1.length === 0 || s2.length === 0) return false;

    let s1Idx = 0, s2Idx = 0;
    while (s2Idx < s2.length) {
        let ch1 = s1[s1Idx], ch2 = s2[s2Idx];

        if (ch1 === ch2) {
            s1Idx++;
            console.log('find matching character "' + ch1 + '" at ' + s2 + '[' + s2Idx + ']')
        }

        if (s1Idx >= s1.length) {
            return true
        }

        s2Idx++;
    }

    return false;
}
// console.log("\n#28 Subsequence");
// console.log(`isSubsequence("book", "brooklyn"): ${isSubsequence("book", "brooklyn") }`);

/* #31 Min Sub Array */
function minSubArray(arr, n) {
    let l = r = sum = 0, res = [l, r, arr.length]; // call by value
    while (r < arr.length) {
        sum += arr[r];
        while (sum >= n) {
            console.log(sum);
            let len = r - l + 1;
            if (len < res[2]) res = [l, r, len];
            l++;
            sum -= arr[l];
        }
        r++;
    }
    return res;
}
// console.log("\n#31 Min Sub Array");
// console.log(`minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 70): ${minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 70) }`);

/* #32 Unique Letter Substring */
function uniqueLetterString(str) {
    let l = r = sum = 0, dic = {};

    // while (r < str.length) {
    //     let currLetter = str[r];

    //     // current letter is unique: update dic and check whether dic.len > sum then update
    //     if (!dic[currLetter]) {
    //         dic[currLetter] = r;

    //         let tempSum = r - l + 1;
    //         if (tempSum > sum) {
    //             sum = tempSum;
    //         }
    //     }
    //     // current letter is repeat: update l and refill dic
    //     else {
    //         l = dic[currLetter] + 1;
    //         console.log(`l: ${l}`);

    //         dic = {};
    //         for (let refillIdx = l; refillIdx <= r; refillIdx++){
    //             dic[str[refillIdx]] = refillIdx;
    //             console.log(`refillIdx: ${refillIdx}, insert letter: : ${str[refillIdx]}`);
    //         }
    //     }

    //     dic[currLetter] = r;
    //     r++;
    //     console.log(dic);
    //     console.log("\n");
    // }

    while (r < str.length) {
        // current letter is unique: set dic[currLetter] = 1 and update r
        // also check whether r - l > sum then update sum
        if (!dic[str[r]]) {
            dic[str[r]] = 1;
            r++;
            console.log(`r: ${r}`);

            let tempSum = r - l;
            if (tempSum > sum) {
                sum = tempSum;
                console.log(`update sum: ${sum}`);
            }
        }
        // current letter is repeat: set dic[currLetter] = 0 and update l
        else {
            dic[str[l]] = 0;
            l++;
            console.log(`l: ${l}`);
        }
        console.log(dic);
        console.log("\n");
    }
    return sum;
}
// console.log("\n#32 Unique Letter Substring");
// console.log(`uniqueLetterString("thisishowwedoit"): ${uniqueLetterString("thisishowwedoit") }`);

/* #33 Largest Product */
let thousandDigits = [
    7,
    3,
    1,
    6,
    7,
    1,
    7,
    6,
    5,
    3,
    1,
    3,
    3,
    0,
    6,
    2,
    4,
    9,
    1,
    9,
    2,
    2,
    5,
    1,
    1,
    9,
    6,
    7,
    4,
    4,
    2,
    6,
    5,
    7,
    4,
    7,
    4,
    2,
    3,
    5,
    5,
    3,
    4,
    9,
    1,
    9,
    4,
    9,
    3,
    4,
    9,
    6,
    9,
    8,
    3,
    5,
    2,
    0,
    3,
    1,
    2,
    7,
    7,
    4,
    5,
    0,
    6,
    3,
    2,
    6,
    2,
    3,
    9,
    5,
    7,
    8,
    3,
    1,
    8,
    0,
    1,
    6,
    9,
    8,
    4,
    8,
    0,
    1,
    8,
    6,
    9,
    4,
    7,
    8,
    8,
    5,
    1,
    8,
    4,
    3,
    8,
    5,
    8,
    6,
    1,
    5,
    6,
    0,
    7,
    8,
    9,
    1,
    1,
    2,
    9,
    4,
    9,
    4,
    9,
    5,
    4,
    5,
    9,
    5,
    0,
    1,
    7,
    3,
    7,
    9,
    5,
    8,
    3,
    3,
    1,
    9,
    5,
    2,
    8,
    5,
    3,
    2,
    0,
    8,
    8,
    0,
    5,
    5,
    1,
    1,
    1,
    2,
    5,
    4,
    0,
    6,
    9,
    8,
    7,
    4,
    7,
    1,
    5,
    8,
    5,
    2,
    3,
    8,
    6,
    3,
    0,
    5,
    0,
    7,
    1,
    5,
    6,
    9,
    3,
    2,
    9,
    0,
    9,
    6,
    3,
    2,
    9,
    5,
    2,
    2,
    7,
    4,
    4,
    3,
    0,
    4,
    3,
    5,
    5,
    7,
    6,
    6,
    8,
    9,
    6,
    6,
    4,
    8,
    9,
    5,
    0,
    4,
    4,
    5,
    2,
    4,
    4,
    5,
    2,
    3,
    1,
    6,
    1,
    7,
    3,
    1,
    8,
    5,
    6,
    4,
    0,
    3,
    0,
    9,
    8,
    7,
    1,
    1,
    1,
    2,
    1,
    7,
    2,
    2,
    3,
    8,
    3,
    1,
    1,
    3,
    6,
    2,
    2,
    2,
    9,
    8,
    9,
    3,
    4,
    2,
    3,
    3,
    8,
    0,
    3,
    0,
    8,
    1,
    3,
    5,
    3,
    3,
    6,
    2,
    7,
    6,
    6,
    1,
    4,
    2,
    8,
    2,
    8,
    0,
    6,
    4,
    4,
    4,
    4,
    8,
    6,
    6,
    4,
    5,
    2,
    3,
    8,
    7,
    4,
    9,
    3,
    0,
    3,
    5,
    8,
    9,
    0,
    7,
    2,
    9,
    6,
    2,
    9,
    0,
    4,
    9,
    1,
    5,
    6,
    0,
    4,
    4,
    0,
    7,
    7,
    2,
    3,
    9,
    0,
    7,
    1,
    3,
    8,
    1,
    0,
    5,
    1,
    5,
    8,
    5,
    9,
    3,
    0,
    7,
    9,
    6,
    0,
    8,
    6,
    6,
    7,
    0,
    1,
    7,
    2,
    4,
    2,
    7,
    1,
    2,
    1,
    8,
    8,
    3,
    9,
    9,
    8,
    7,
    9,
    7,
    9,
    0,
    8,
    7,
    9,
    2,
    2,
    7,
    4,
    9,
    2,
    1,
    9,
    0,
    1,
    6,
    9,
    9,
    7,
    2,
    0,
    8,
    8,
    8,
    0,
    9,
    3,
    7,
    7,
    6,
    6,
    5,
    7,
    2,
    7,
    3,
    3,
    3,
    0,
    0,
    1,
    0,
    5,
    3,
    3,
    6,
    7,
    8,
    8,
    1,
    2,
    2,
    0,
    2,
    3,
    5,
    4,
    2,
    1,
    8,
    0,
    9,
    7,
    5,
    1,
    2,
    5,
    4,
    5,
    4,
    0,
    5,
    9,
    4,
    7,
    5,
    2,
    2,
    4,
    3,
    5,
    2,
    5,
    8,
    4,
    9,
    0,
    7,
    7,
    1,
    1,
    6,
    7,
    0,
    5,
    5,
    6,
    0,
    1,
    3,
    6,
    0,
    4,
    8,
    3,
    9,
    5,
    8,
    6,
    4,
    4,
    6,
    7,
    0,
    6,
    3,
    2,
    4,
    4,
    1,
    5,
    7,
    2,
    2,
    1,
    5,
    5,
    3,
    9,
    7,
    5,
    3,
    6,
    9,
    7,
    8,
    1,
    7,
    9,
    7,
    7,
    8,
    4,
    6,
    1,
    7,
    4,
    0,
    6,
    4,
    9,
    5,
    5,
    1,
    4,
    9,
    2,
    9,
    0,
    8,
    6,
    2,
    5,
    6,
    9,
    3,
    2,
    1,
    9,
    7,
    8,
    4,
    6,
    8,
    6,
    2,
    2,
    4,
    8,
    2,
    8,
    3,
    9,
    7,
    2,
    2,
    4,
    1,
    3,
    7,
    5,
    6,
    5,
    7,
    0,
    5,
    6,
    0,
    5,
    7,
    4,
    9,
    0,
    2,
    6,
    1,
    4,
    0,
    7,
    9,
    7,
    2,
    9,
    6,
    8,
    6,
    5,
    2,
    4,
    1,
    4,
    5,
    3,
    5,
    1,
    0,
    0,
    4,
    7,
    4,
    8,
    2,
    1,
    6,
    6,
    3,
    7,
    0,
    4,
    8,
    4,
    4,
    0,
    3,
    1,
    9,
    9,
    8,
    9,
    0,
    0,
    0,
    8,
    8,
    9,
    5,
    2,
    4,
    3,
    4,
    5,
    0,
    6,
    5,
    8,
    5,
    4,
    1,
    2,
    2,
    7,
    5,
    8,
    8,
    6,
    6,
    6,
    8,
    8,
    1,
    1,
    6,
    4,
    2,
    7,
    1,
    7,
    1,
    4,
    7,
    9,
    9,
    2,
    4,
    4,
    4,
    2,
    9,
    2,
    8,
    2,
    3,
    0,
    8,
    6,
    3,
    4,
    6,
    5,
    6,
    7,
    4,
    8,
    1,
    3,
    9,
    1,
    9,
    1,
    2,
    3,
    1,
    6,
    2,
    8,
    2,
    4,
    5,
    8,
    6,
    1,
    7,
    8,
    6,
    6,
    4,
    5,
    8,
    3,
    5,
    9,
    1,
    2,
    4,
    5,
    6,
    6,
    5,
    2,
    9,
    4,
    7,
    6,
    5,
    4,
    5,
    6,
    8,
    2,
    8,
    4,
    8,
    9,
    1,
    2,
    8,
    8,
    3,
    1,
    4,
    2,
    6,
    0,
    7,
    6,
    9,
    0,
    0,
    4,
    2,
    2,
    4,
    2,
    1,
    9,
    0,
    2,
    2,
    6,
    7,
    1,
    0,
    5,
    5,
    6,
    2,
    6,
    3,
    2,
    1,
    1,
    1,
    1,
    1,
    0,
    9,
    3,
    7,
    0,
    5,
    4,
    4,
    2,
    1,
    7,
    5,
    0,
    6,
    9,
    4,
    1,
    6,
    5,
    8,
    9,
    6,
    0,
    4,
    0,
    8,
    0,
    7,
    1,
    9,
    8,
    4,
    0,
    3,
    8,
    5,
    0,
    9,
    6,
    2,
    4,
    5,
    5,
    4,
    4,
    4,
    3,
    6,
    2,
    9,
    8,
    1,
    2,
    3,
    0,
    9,
    8,
    7,
    8,
    7,
    9,
    9,
    2,
    7,
    2,
    4,
    4,
    2,
    8,
    4,
    9,
    0,
    9,
    1,
    8,
    8,
    8,
    4,
    5,
    8,
    0,
    1,
    5,
    6,
    1,
    6,
    6,
    0,
    9,
    7,
    9,
    1,
    9,
    1,
    3,
    3,
    8,
    7,
    5,
    4,
    9,
    9,
    2,
    0,
    0,
    5,
    2,
    4,
    0,
    6,
    3,
    6,
    8,
    9,
    9,
    1,
    2,
    5,
    6,
    0,
    7,
    1,
    7,
    6,
    0,
    6,
    0,
    5,
    8,
    8,
    6,
    1,
    1,
    6,
    4,
    6,
    7,
    1,
    0,
    9,
    4,
    0,
    5,
    0,
    7,
    7,
    5,
    4,
    1,
    0,
    0,
    2,
    2,
    5,
    6,
    9,
    8,
    3,
    1,
    5,
    5,
    2,
    0,
    0,
    0,
    5,
    5,
    9,
    3,
    5,
    7,
    2,
    9,
    7,
    2,
    5,
    7,
    1,
    6,
    3,
    6,
    2,
    6,
    9,
    5,
    6,
    1,
    8,
    8,
    2,
    6,
    7,
    0,
    4,
    2,
    8,
    2,
    5,
    2,
    4,
    8,
    3,
    6,
    0,
    0,
    8,
    2,
    3,
    2,
    5,
    7,
    5,
    3,
    0,
    4,
    2,
    0,
    7,
    5,
    2,
    9,
    6,
    3,
    4,
    5,
    0,
];
function largestProduct(n) {
    // let curProd = 1;
    // for (let i = 0; i < n; i++){
    //     curProd *= thousandDigits[i];
    // }
    // lef = 1, rig = n, maxProd = curProd;

    // while (rig < thousandDigits.length) {
    //     curProd *= thousandDigits[rig];
    //     if (thousandDigits[lef] == 0) curProd /= thousandDigits[lef];

    //     if (curProd > maxProd) {
    //         maxProd = curProd;
    //         console.log(`update maxProd: ${maxProd}`);
    //     }
    //     lef++;
    //     rig++;
    // }

    let lef = 0, rig = n - 1, maxProd = -Infinity, curProd;
    while (rig < thousandDigits.length) {
        curProd = 1;
        for (let i = lef; i <= rig; i++){
            curProd *= thousandDigits[i];
        }
        if (curProd > maxProd) {
            maxProd = curProd;
            console.log(`update maxProd: ${maxProd}`);
        }
        lef++;
        rig++;
    }

    return maxProd;
}
// console.log("\n#33 Largest Product");
// console.log(`largestProduct(13): ${largestProduct(13)}`);

/* #35 Fibonacci Sequence */
function fs(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return fs(n - 1) + fs(n - 2);
    }
}
// console.log("\n#35 Fibonacci Sequence")
// for (let i = 0; i < 10; i++){
//     console.log(fs(i));
// }

/* #36 Array of Arrays */
function arrayOfArrays(arr) {
    let res = [];

    for (i = 0; i < arr.length; i++){
        item = arr[i];
        if (Array.isArray(item)) {
            return arrayOfArrays(item);
        }
        else {
            res.push(item);
        }
    }
    return res
}
// console.log("\n#36 Array of Arrays");
// console.log(`arrayOfArrays([1, [2, [3, 4], 5, [6, 7, [8, 9]]]]): ${arrayOfArrays([1, [2, [3, 4], 5, [6, 7, [8, 9]]]]) }`);

/* #40 Bubble Sort  */
function bubbleSort(arr) {
    // my result, descent sort
    // for (let i = 1; i <= arr.length - 1; i++){
    //     let isSort = true;
    //     for (let j = 0; j <= arr.length - 1 - i; j++){ // my result
    //         if (arr[j] < arr[j+1]) { // my result
    //             console.log(`i: ${i}, j: ${j}, swap ${arr[j]} and ${arr[j+1]}`);
    //             let temp;
    //             temp = arr[j];
    //             arr[j] = arr[j+1]; // my result
    //             arr[j+1] = temp; // my result
    //             isSort = false;
    //         }
    //     }
    //     if (isSort) {
    //         console.log(`sorted at i = ${i}`)
    //         break;
    //     }
    // }

    // tutor's result, ascent sort
    for (let i = 0; i <= arr.length - 2; i++) { // the meaning of i = sorted element
        let isSort = true;
        for (let j = arr.length - 1; j >= i + 1; j--) { // the meaning of j = adjacent element refers to i
            if (arr[j] < arr[j-1]) {
                console.log(`i: ${i}, j: ${j}, swap ${arr[j]} and ${arr[j-1]}`);
                let temp;
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                isSort = false;
            }
        }
        if (isSort) {
            console.log(`sorted at i = ${i}`)
            break;
        }
    }

    return arr;
}
// console.log("\n#40 Bubble Sort");
// console.log(`bubbleSort([4, 7, 1, 2, 5, 3]): ${bubbleSort([4, 7, 1, 2, 5, 3])}`);
// todo: CHECK AGAIN THE TUTOR's CODE which loop logic is different to mine!!

/* #44 Insertion Sort */
function insertionSort(arr) {
    for (let j = 1; j < arr.length; j++) {
        let key = arr[j];
        let i = j - 1;
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            // arr[i] = key; // move to the end of while loop
            i--;
        }
        arr[i + 1] = key;
    }

    return arr;
}
// console.log("\n#44 Insertion Sort");
// console.log(`insertionSort([4, 7, 1, 2, 5, 3]): ${insertionSort([4, 7, 1, 2, 5, 3]) }`);
// console.log(`insertionSort: ${insertionSort(testArr)}`);

/* #51 Merge Sort */
function merge_sort(arr) {
    if (arr.length <= 1) return arr;

    // divide
    let mid = Math.floor(arr.length / 2);
    let arr_l = arr.slice(0, mid);
    let arr_r = arr.slice(mid, arr.length);

    // conquer
    return merge(merge_sort(arr_l), merge_sort(arr_r));
}

function merge(arr_l, arr_r) {
    let [idx_l, idx_r] = [0, 0];
    let arr_m = [];

    // add the smaller item to arr_m
    while (idx_l < arr_l.length && idx_r < arr_r.length) {
        if (arr_l[idx_l] < arr_r[idx_r]) {
            arr_m.push(arr_l[idx_l]);
            idx_l++;
        }
        else {
            arr_m.push(arr_r[idx_r]);
            idx_r++;
        }
    }

    // add the rest arr_l items to arr_m
    while (idx_l < arr_l.length) {
        arr_m.push(arr_l[idx_l]);
        idx_l++;
    }

    // add the rest arr_r items to arr_m
    while (idx_r < arr_r.length) {
        arr_m.push(arr_r[idx_r]);
        idx_r++;
    }

    return arr_m;
}

// console.log("\n#51 Merge Sort");
// console.log(`merge_sort([4, 7, 1, 2, 5, 3, 1]): ${merge_sort([4, 7, 1, 2, 5, 3, 1]) }`);

/* #56 Heap Sort */
function maxHeapify(arr, parentIdx, heapSize) {
    let leftIdx = parentIdx * 2 + 1;
    let rightIdx = leftIdx + 1;
    let largestIdx = parentIdx;

    if (leftIdx <= heapSize && arr[leftIdx] > arr[largestIdx]) largestIdx = leftIdx;
    if (rightIdx <= heapSize && arr[rightIdx] > arr[largestIdx]) largestIdx = rightIdx;
    if (largestIdx != parentIdx) {
        let temp = arr[parentIdx];
        arr[parentIdx] = arr[largestIdx];
        arr[largestIdx] = temp;
        maxHeapify(arr, largestIdx, heapSize);
    }
}

function heapSort(arr) {
    let heapSize = arr.length - 1

    // first time to build max heap: from the right-bottom parent to the root
    for (let parentIdx = Math.floor(heapSize / 2); parentIdx >= 0; parentIdx--) {
        maxHeapify(arr, parentIdx, heapSize)
    }

    // sorting
    for (let i = heapSize; i >= 0; i--) {
        // 1. sort: move the max value to the end and set heapSize -= 1
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        // 2. maxHeapify: move the root to the right position to keep a max heap
        maxHeapify(arr, 0, i - 1);
    }

    return arr
}

// console.log("\n#56 Heap Sort");
// console.log("original arr: " + testArr);
// console.log("heap sort result: " + heapSort(testArr));
// console.log("heap sort result: " + heapSort([15, 3, 17, 18, 20, 2, 1, 666]));

/* #60 Quick Sort */
function partition(arr, p, r) {
    let pivot = arr[r];
    let i = p - 1;
    for (let j = p; j < r; j++){
        if (arr[j] < pivot) {
            i += 1;

            // swap i, j
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }

    // swap i+1, r
    let temp = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = temp;

    return i + 1;
}

function quickSort(arr, p, r) {
    if (p < r) {
        let pivotIdx = partition(arr, p, r);
        quickSort(arr, p, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, r);
    }

    return arr
}

// console.log("\n#60 Quick Sort");
// console.log("original arr: " + testArr);
// console.log("quick sort result: " + quickSort(testArr, 0, testArr.length - 1));

/* #74 Linked List Push */
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.head === null && this.length === 0) { // actually only need to satisfy one condition
            this.head = newNode;
            console.log(`Push first node: ${value}`);
        }
        else {
            let currentNode = this.head;
            while (currentNode.next) { // keep find until the last node
                console.log(`Find next node: ${currentNode.next.value}`);
                currentNode = currentNode.next;
            }
            console.log(`Link new node ${value} to the last node: ${currentNode.value}`);
            currentNode.next = newNode;
        }
        this.length += 1;
    }

    count() {
        return this.length;
    }
}

let linkedList = new LinkedList();
function testPushLinkedList() {
    console.log("\n#74 Linked List");
    linkedList.push("Eric");
    linkedList.push("Tutu");
    linkedList.push("Abo");
    linkedList.push("Bubu");
    console.log(`len of linkedList: ${linkedList.count()}`);
}
// testPushLinkedList()

/* #111 Binary Search Tree */

class BSTNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
        this.preOrderPath = "";
        this.inOrderPath = "";
        this.postOrderPath = "";
        this.breadthFirstOrderPath = "";
        this.queue = [];
    }

    treeInsert(node) {
        let x = this.root;
        let y = null;

        while (x !== null) {
            y = x;
            // if (node.key < x.key) {
            //     x = x.lefy
            // }
            x = x.key < node.key
                ? x.right
                : x.left;
        }

        if (y === null)
            this.root = node;
        else if (y.key < node.key)
            y.right = node;
        else
            y.left = node;
    }

    preOrder(node) {
        if (node !== null) {
            this.preOrderPath += (this.preOrderPath ? " " : "") + node.key;
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            this.inOrderPath += (this.inOrderPath ? " " : "") + node.key;
            this.inOrder(node.right);
        }
    }

    postOrder(node) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            this.postOrderPath += (this.postOrderPath ? " " : "") + node.key;
        }
    }

    breadthFirstOrder(node) {
        if (node) {
            this.queue.push(node);
            for (let i = 0; i < this.queue.length; i++){
                let item = this.queue[i];
                this.breadthFirstOrderPath += (this.breadthFirstOrderPath ? " " : "") + item.key;
                if (item.left) this.queue.push(item.left);
                if (item.right) this.queue.push(item.right);
            }
        }
    }
}

function testBST() {
    let bst = new BinarySearchTree();
    bst.treeInsert(new BSTNode(15));
    bst.treeInsert(new BSTNode(6));
    bst.treeInsert(new BSTNode(5));
    bst.treeInsert(new BSTNode(1));
    bst.treeInsert(new BSTNode(13));
    bst.treeInsert(new BSTNode(-7));
    bst.treeInsert(new BSTNode(3));

    console.log("\n#111 Binary Search Tree");
    console.log(bst);

    bst.preOrder(bst.root);
    console.log(`\nPre-order path: \n${bst.preOrderPath}`);

    bst.inOrder(bst.root);
    console.log(`\nIn-order path: \n${bst.inOrderPath}`);

    bst.postOrder(bst.root);
    console.log(`\nPost-order path: \n${bst.postOrderPath}`);

    bst.breadthFirstOrder(bst.root);
    console.log(`\nBreadth-first-order path: \n${bst.breadthFirstOrderPath}`);
    console.log(bst.queue);
}
testBST();