// #1

var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
    first: 'First Name',
    last: 'Last Name'
};

console.log('myNum:', myNum);
console.log('строка:', myStr);
console.log('Bool:', myBool);
console.log('Array:', myArr);
console.log('Object:', myObj);

// #2

var decimal2 = (myNum.toFixed(2));
console.log('decimal2:', decimal2);

// #3

var i = 5;
console.log('Префиксный инк. :', ++i);
console.log('Постфиксный инк. :', i++);
console.log('Префиксный декр. :', --i);
console.log('Постфиксный декр. :', i--);

// #4

var myTest = 20;
console.log(myTest += myNum);
console.log(myTest -= myNum);
console.log(myTest *= myNum);
console.log(myTest /= myNum);
console.log(myTest %= myNum);

// #5

var myPi = Math.PI;
console.log(myPi);

var myRound = Math.round(89.279);
console.log('myRound:', myRound);

var myRandom = Math.random() * 10;
console.log('myRandom:', myRandom);

var myPow = Math.pow(3,5);
console.log('myPow:', myPow);

// #6

var strObj = {
    str: 'Мама мыла раму, рама мыла маму'
}
strObj.length = strObj.str.length;
console.log('strObj:', strObj);

// #7

var isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos:', isRamaPos);

// #8

 var strReplace = strObj.str.replace('мыла', 'моет');

 strReplace = strReplace.replace('рама', 'Рама');
 strReplace = strReplace.replace('мыла', 'держит');
 console.log('strReplace:', strReplace);

//  #9

console.log(strObj.str.toUpperCase());
console.log(strReplace.toLowerCase());

