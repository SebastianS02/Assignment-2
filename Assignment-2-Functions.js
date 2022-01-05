//Sebastian Stec

let arr1 = [1, 2, 3, 4, 5];

printValue = x => console.log(x);
function myEach(arr, cb){
    for(let i = 0; i < arr.length; i++){
        cb(arr[i]);
    }
}

//-----------------------------------------------------------
multiplyTwo = x => x * 2;
function myMap(arr, cb){
    let arr2 = [arr];
    for(i = 0; i < arr.length; i++){
        arr2[i] = cb(arr1[i]);
    }
    console.log(arr2);
}

//-----------------------------------------------------------
function multipleOfTwo(x){
    if(x % 2 == 0){
        console.log(x);
    }
}
function myFilter(arr, cb){
    let arr3 = [arr];
    for(i = 0; i < arr.length; i++){
        cb(arr[i]);
    }
}

//-----------------------------------------------------------
function isOdd(x){
    return x % 2 == 1;
}
function mySome(arr, cb){
    let arr4 = [arr];
    for(i = 0; i < arr.length; i++){
        if(cb(arr4[i]) == true){
            return true;
        }
    }
    return false;
}

//-----------------------------------------------------------
function isEven(x){
    return x % 2 == 0;
}
function myEvery(arr, cb){
    let arr5 = [arr];
    for(i = 0; i < arr.length; i++){
        if(cb(arr5[i]) == false){
            return false;
        }
    }
    return true;
}
//----------------------------------------------------------
getEverything = (x, y) => x + y;
function myReduce(arr, cb){
    let result = 0;
    for(i = 0; i < arr.length; i++){
        result = cb(arr[i], result);
    }
    console.log(result);
}

//----------------------------------------------------------
function myIncludes(arr, target){
    for(let i = 0; i <arr.length; i++){
        if(arr[i] == target){
            return true;
        }
    }
    return false;
}

//----------------------------------------------------------
function myIndexOf(arr, target){
    for(i = 0; i < arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

//----------------------------------------------------------
function myPush(arr, element)
{
    arr[arr.length] = element;
    return arr.length;
}

//----------------------------------------------------------
function myLastIndexOf(arr, target){
    let index = -1;
    for(let i = 0; i<arr.length;i++){
        if(arr[i] == target){
            index = i;
        }
    }
    return index;
}

//----------------------------------------------------------
Object.prototype.grabKeys = function(){
    let keyArr = [];
    for (element in this){
      if (this.hasOwnProperty(element)){
        keyArr.push(element);
      }
    }
    return keyArr;
  };
  
let Object1 = {
    5: 10,
    6: 20,
    7: 30,
};
  
//-------------------------------------------------------------
Object.prototype.grabValues = function () {
    let newArr = [];
    for (element in this) {
      if (this.hasOwnProperty(element)) {
        newArr.push(this[element]);
      }
    }
    return newArr;
  };

let Object2 = {
    1: "A",
    2: "B",
    3: "C"
}

myEach(arr1, printValue);
myMap(arr1, multiplyTwo);
myFilter(arr1, multipleOfTwo);
mySome(arr1, isOdd);
myEvery(arr1, isEven);
myReduce(arr1, getEverything);
myIncludes(arr1, 3);
myIndexOf(arr1, 6);
myPush(arr1, 6);
myLastIndexOf(arr1, 4);
console.log(Object1.grabKeys());
console.log(Object2.grabValues());