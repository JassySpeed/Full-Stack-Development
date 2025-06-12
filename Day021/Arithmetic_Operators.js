// Arithmetic Operators
// +,-,*,/,%,++,--

// Assignment operators
// =,+=,-=,*=,/=,%=

// Comparision operator
// ==,===,!=,<,>,>=,<=

// Logical Operators
// &&,||,!

// Bitwise Operator
// &,|,^,~,<<,>>, isNaN(NaN)


//////////////////////////////////////////////////////////////

// Arithmetic Operators

// divide multiply left to right
// add sub left to right 

// console.log(4+4);


// modulous(%) gives you remainder
// console.log(20%3);

// ++ increment operator, a++ post increment, ++a pre increment
// let a=2;
// a++;
// console.log(a);

// -- decrement operator, b++ post decrement, --b pre decrement
// let b=2;
// b--;
// console.log(b);


//////////////////////////////////////////////////////////////

// Assignment operators

// let x=20;
// x%=10;
// console.log(x);

//////////////////////////////////////////////////////////////

// Comparision Operators

// let ab=1;
// let ac=2;
// console.log(ab!=ac);
// console.log(ab==ac);

// let bn=10;
// let str="10";
// console.log(bn==str);
// type conversion hoga string to number

// in triple equal to it will first check type and then compare the values.
// console.log(bn===str);


// NULL COMPARISON
// If one fo the operands is NULL or UNDEFINED, the other must also be the null or undefined to return true. Otherwise return false.

// null == undefined : true 
// null === undefined : false
// console.log(null==undefined);

// null can only be equivalent to be undefined
// console.log(null==0);

// type converion happen and null will converted into number which is 0;
// console.log(null>0);
// console.log(null<0);
// console.log(null>=0);
// console.log(null<=0);


// UNDEFINED COMPARISON
// console.log(undefined==0);
// console.log(undefined<0);
// console.log(undefined>0);
// console.log(undefined<=0);
// console.log(undefined>=0);
// console.log(NaN==NaN);


// let abc1=123;
// let abc2="123";
// let abc3=123;
// console.log(abc1==abc2==abc3);

//////////////////////////////////////////////////////////////

// LOGICAL OPERATORS

// let age=18;
// let money=500;
// console.log(age>=18 && money>250);
// console.log(age>18 || money>250);
// console.log(!(age>10));



/////////////////////////////////////////////////////////////////

// Bitwise Operator
// &,|,^,~,<<,>>, isNaN(NaN)

// console.log(4&5);
// console.log(4|5);

// XOR operator(^)
// if the input is same it return zero(0) else one(1).
// 0 0 0 
// 0 1 1
// 1 0 1
// 1 1 0
// console.log(4^5);


// left shift and right shift
// shift the bits wth respect to decimal.

// console.log(5<<3);
// it means 5 multiply by 2 power 3

// console.log(5>>1);  
// it means 5 divided by 2 power 1.


// NOT operator(~)
// 0 1
// 1 0
// console.log(~5);


