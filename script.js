function binarySearch(a, item, low, high)
{
   
    if (high <= low)
        return (item > a[low]) ? (low + 1) : low;
   
    mid = Math.floor((low + high) / 2);
   
    if(item == a[mid])
        return mid + 1;
   q
    if(item > a[mid])
        return binarySearch(a, item, mid + 1, high);
           
    return binarySearch(a, item, low, mid - 1);
}
  
function insertionBinarySort(array)
{
    console.time('BinaryinsertionSort');
    for (let i = 1; i < array.length; i++)
        {
            let j = i - 1;
            let x = array[i];
   
            // Find location to insert
            // using binary search
            let loc = Math.abs(
                binarySearch(array, x,
                                    0, j));
   
            // Shifting array to one
            // location right
              
            while (j >= loc)
            {
                array[j + 1] = array[j];
                j--;
            }
   
            // Placing element at its
            // correct location
            array[j+1] = x;
        }
        console.timeEnd('BinaryinsertionSort');
}


//insertionSort

function insertionSort(arr, n)  
{  
    console.time('insertionSort');
    let i, key, j;  
    for (i = 1; i < n; i++) 
    {  
        key = arr[i];  
        j = i - 1;  
    
        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && arr[j] > key) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }  
    console.timeEnd('insertionSort');
    return arr
}  
    
 //Gerar numeros aleatorios
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



let lista = new Array(1323)
for (let index = 0; index < lista.length; index++) {
        lista[index]= randomNumber(-2*lista.length, 2*lista.length)    
}
let listaIS = lista
let listaBIS = lista.slice()


insertionSort(lista,lista.length)
insertionBinarySort(listaBIS)
console.log(lista)
console.log(listaBIS)



  
/*
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function randomArray(){
    const tamanhosArray = new Array (10) 
    for (let index = 0; index < 10; index++) {
    tamanhosArray[index]=randomNumber(10,10000)
    }
    return tamanhosArray
}
console.log(randomArray())
*/

