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
// setTimeout(function() { return param }, 1000);
// var returnedValue = param;
// const startT = Date.now();


    

 return new Promise(function(resolve, reject) {
     
// const currentT = Date.now();
// const deltaT = currentT - startT;
// console.log(currentT);
setTimeout(function() { resolve(param); }, 1000);
// resolve(param);


 
 //reject(console.log('reject!'))

    
  });

};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

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