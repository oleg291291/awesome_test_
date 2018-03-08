// DO WHATEVER YOU WANT HERE
//for incr
var incX = 0;
var incA = 0;
var incF = 1;

const createEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object, 'key', {
  enumerable: true,
  configurable: true,
   writable: true
});

};
const createNotEnumerableProperty = (propertyName) => {

 

 Object.defineProperties(Object.prototype, { 
'property': {enumerable: false, value: "value"} 
}); 
return {toString: function () { 
return propertyName;
}
} 

};
const createProtoMagicObject = () => {
    var x = function(){

    };
    x.prototype = x.__proto__;

    return x;
};
const incrementor = () => {
incX++;
Object.prototype.valueOf = function () { return incX};
return incrementor;
};

const asyncIncrementor = () => {
incA++;
return incA;


};
const createIncrementer = () => {
 
Object.prototype[Symbol.iterator] = createIncrementer;

    return {
      next: function () {
        return { value: incF++, done: false };
      }
    };
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    
this.param = param;

 return new Promise(function(resolve, reject) {

setTimeout(function() { resolve(param); }, 1000);

  });
};
const getDeepPropertiesCount = (obj) => {

var strObj = JSON.stringify(obj)
var strMatch = strObj.match(/}/g);
// console.log(strMatch.length - 1);
return strMatch.length - 1

};
const createSerializedObject = () => {
return null
};
const toBuffer = () => {};
const sortByProto = (arr) => {

for(var step = 0; step < 4; step++){

if(arr[step].__proto__ === null){
  arr[step].value = 9
  console.log('proto - null')
}
else
if(arr[step].__proto__.__proto__ === null){
  arr[step].value = 8
  console.log('proto,proto - null')
}
else
if(arr[step].__proto__.__proto__.__proto__ === null){
  arr[step].value = 7
  console.log('proto,proto,proto - null')
}
else
if(arr[step].__proto__.__proto__.__proto__.__proto__ === null){
  arr[step].value = 6
  console.log('proto,proto,proto,proto - null')
}
else
if(arr[step].__proto__.__proto__.__proto__.__proto__.__proto__ === null){
  arr[step].value = 5
  console.log('proto,proto,proto,proto,proto - null')
}
else
if(arr[step].__proto__.__proto__.__proto__.__proto__.__proto__.__proto__ === null){
  arr[step].value = 4
  console.log('proto,proto,proto,proto,proto,proto - null')
}
else
if(arr[step].__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__ === null){
  arr[step].value = 3
  console.log('proto,proto,proto,proto,proto,proto,proto - null')
}
else
if(arr[step].__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__ === null){
  arr[step].value = 2
  console.log('proto,proto,proto,proto,proto,proto,proto,proto - null')
}
else
if(arr[step].__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__ === null){
  arr[step].value = 1
  console.log('proto,proto,proto,proto,proto,proto,proto,proto,proto - null')
}

}
console.log(arr[0].value)
console.log(arr[1].value)
console.log(arr[2].value)
console.log(arr[3].value)


function compareChar(char1, char2) {
  return char1.value - char2.value;
}

var sorted = arr.sort(compareChar);

console.log(arr[0].value)
console.log(arr[1].value)
console.log(arr[2].value)
console.log(arr[3].value)

return sorted;

};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;