//Variables
var input=document.getElementById("input");
var output=document.getElementById("output");
var submit=document.getElementById("submit");
var valueInput=[];
var sortedArray=[];
var result='';

//Events
input.onfocus=function(){
    output.value="";
}

submit.onclick=function(){
    result="";
    sortedArray.length=0;
    grabInput();
}

//Functions
function grabInput(){
    valueInput=document.getElementById("input").value;
    valueInput=valueInput.split(",");

    for (let item = 0; item < valueInput.length; item++) {
        number = parseInt(valueInput[item]);
        valueInput[item] = number;
    }
    // console.log(valueInput);
    console.time('runtime');
    // sortedArray = insertionSort(valueInput);
    // sortedArray = bubleSort(valueInput);
    // sortedArray = quickSort(valueInput);
    // sortedArray = mergeSort(valueInput);
    sortedArray = heapSort(valueInput);
    console.timeEnd('runtime');
    
    concatenate();
}

function insertionSort(arr){
    let position,value;

    for (let i=0;i<arr.length;i++){
        value=arr[i]; 
        position=i;   
        while(position>0 && arr[position-1]>value){ 
            arr[position]=arr[position-1]; 
            position=position-1;           
        }
        arr[position]=value; 
    }
    
    console.log('insertionSort');
  return arr;
}

function bubleSort(arr){
    var n = arr.length;

    for(let i=n-1; i>0; i--){
        for(let j=0; j<i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    console.log('bubleSort');
    return arr;
}

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    console.log('quickSort');
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    console.log('mergeSort');
    return merge(mergeSort(left), mergeSort(right));
}
  
function merge(left, right) {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return [...result, ...left, ...right];
}

function heapSort(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapify(arr, arr.length, i);
    }
    for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }

    console.log('heapSort');
    return arr;
}

function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // left = 2*i + 1
    let right = 2 * i + 2; // right = 2*i + 2

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];

      heapify(arr, n, largest);
    }
}

function concatenate(){
    for(i=0;i<sortedArray.length;i++){
        result=result+sortedArray[i]+',';
    }
    setValue();
}

function setValue(){
    document.getElementById("output").value=result;
}