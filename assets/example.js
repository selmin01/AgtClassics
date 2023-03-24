//Author: Rajeev Lochan Pandey

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
    giveInput();
}

function giveInput(){
    for(i=0;i<valueInput.length;i++){
        console.log(i);
        sortedArray.push(valueInput[i]);
        sortFunction(i);
    }
    concatenate();
}

function sortFunction(i){
    if(i!=0){
        while(i!=0 && sortedArray[i-1]>sortedArray[i]){
            var dummy=sortedArray[i-1];
            sortedArray[i-1]=sortedArray[i];
            sortedArray[i]=dummy;
            i--;
        }
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