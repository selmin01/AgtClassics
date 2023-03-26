//Variables
var input=document.getElementById("input");
var output=document.getElementById("output");
var submit=document.getElementById("submit");
var valueInput;
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
    // sortedArray = insSort(valueInput);
    // sortedArray = bubleShort(valueInput);
    sortedArray = quickSort(valueInput);
    concatenate();
    //giveInput();
}

function insSort(arr){
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

function bubleShort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
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


// function giveInput(){
//     for(i=0;i<valueInput.length;i++){
//         console.log(i);
//         sortedArray.push(valueInput[i]);
//         sortFunction(i);
//     }
//     concatenate();
// }

// function sortFunction(i){
//     if(i!=0){
//         while(i!=0 && sortedArray[i-1]>sortedArray[i]){
//             var dummy=sortedArray[i-1];
//             sortedArray[i-1]=sortedArray[i];
//             sortedArray[i]=dummy;
//             i--;
//         }
//     }
// }

function concatenate(){
    for(i=0;i<sortedArray.length;i++){
        result=result+sortedArray[i]+',';
    }
    setValue();
}

function setValue(){
    document.getElementById("output").value=result;
}