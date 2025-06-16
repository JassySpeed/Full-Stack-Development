// Primitive Data type vs Non-primitive Data type
// primitive data type : Immutable
// Non-primitive data type : Mutable
// Immutable means can't be changed.
// Mutable means can be changed.

let obj1={
    username: "jamseet",
    id: 20
}

let obj2=obj1;

obj2.id=30;

console.log(obj1);
console.log(obj2);



// Primitive data type will store in Stack.
// Non-Primitive data type will store in Heap.
