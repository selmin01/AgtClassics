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
    
    // sortedArray = insertionSort(valueInput);
    sortedArray = bubleSort(valueInput);
    // sortedArray = quickSort(valueInput);
    concatenate();
    //giveInput();
}

function insertionSort(arr){
    let position,value;

    for (let i=0;i<arr.length;i++){
        value=arr[i]; // pegando elementos[i] para comparar
        position=i;   
        while(position>0 && arr[position-1]>value){ // comparando
            arr[position]=arr[position-1]; // troca
            position=position-1;           // verifica se há elementos antes dele
        }
        arr[position]=value; // substitui valor
    }
    
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
  
    return [...quickSort(left), pivot, ...quickSort(right)];
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