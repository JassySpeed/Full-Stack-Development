// string in js
// let s="jasmeet";
// let s1='singh';

// let year=2025;

// let s2=`rohit sir`;
// console.log(`we are living in ${year}`);
// console.log("jasmeet ${year}");

////////////////////////////////////////////////////

// let x="jasmeet";
// let y="singh";
// console.log(`${x} ${y}`);
// console.log(y.length);
// console.log(`"hello coder army"`);
// console.log(`jasmeet bohut bada badmash hai. \nWoh bohut ganda insaan hai.`);
// console.log(`jasmeet bohut bada badmash hai. \\nWoh bohut ganda insaan hai.`);

////////////////////////////////////////////////////////////////////
// You can access each element of string
// two ways to do it.
// let string="javascript";
// console.log(string[0]);
// console.log(string.charAt(9));


////////////////////////////////////////////////////////////////////
// uppercase and lowercase
// original string never changes
// let one="jasmeet";
// console.log(one.toUpperCase());
// let two="SINGH";
// console.log(two.toLowerCase());

/////////////////////////////////////////////////////////////////////
// Searching in string
// indexOf meaning it will return the first occurence of the substring otherwise -1.
// lastIndexOf meaning it will return the last occurence of the substring otherwise -1.
// includes meaning it will check if substring present in it or not. Return type is true and false.

// let hero="Hello Coder Army Coder";
// console.log(hero.indexOf("Coder"));
// console.log(hero.lastIndexOf("Coder"));
// console.log(hero.includes("Army"));

//////////////////////////////////////////////////////////////////////////
// Extracting Substrings
// slice can take negative index also
// substring 
// substr this method is old.
// only starting index is gonna be inclusive
// let villian="HelloVillian";
// console.log(villian.slice(0,5));
// console.log(villian.slice(-7,-1));
// console.log(villian.substring(5,12));
// console.log(villian.substr(0,5));

//////////////////////////////////////////////////////////////////////
// Replacing Content
// let str10="hello ji, kaise ho ji";
// console.log(str10.replace("ji","raju"));
// console.log(str10.replaceAll("ji","raju"));

////////////////////////////////////////////////////////////////////
// Splitting Strings
// split(delimiter)=split a string into an array based on a delimiter.
// let str11="honey! money! funny! sunny";
// console.log(str11.split("! "));

///////////////////////////////////////////////////////////////////
// Trimming
// trim = remove both the start and end spaces.
// trimStart and trimEnd = you already know that.
// let str12=" hello ji ";
// console.log(str12.trim());

//////////////////////////////////////////////////////////////////
// New Way to create a string
// memory will be allocated in heap by using new keyword.
// let lateststring=new String("hello coder army");
// console.log(lateststring);
// console.log(typeof lateststring);
