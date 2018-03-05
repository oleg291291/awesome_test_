// DO WHATEVER YOU WANT HERE
//for incr
var incX = 0;
//

const createEnumerableProperty = (propertyName) => {
    // Object.prototype.createEnumerableProperty(propertyName);
    // Object.prototype.propertyName = "undefined";
    // console.log(Object.keys(Object))
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
return incrementor


};

const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
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