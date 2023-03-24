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