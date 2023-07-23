// / // SLICE: impportant point are:
// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

// Syntax
// array.slice(start, end)
 const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(3));        ['duck', 'elephant']
console.log(animals);               ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(1,2));        ('bison')
 

number=[ '3','5','8','7','9','6','2',];
console.log(number.slice(4));   ['9','6','2',]
console.log(number.slice(2,5));    ('8','7','9')
console.log(number.slice(1,-3));    {'5','8','7'}
console.log(number.slice(3,-5));     []
console.log(number.slice(-3,-5));    []



// SPLICE:
// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.
// Syntax
// array.splice(index, howmany, item1, ....., itemX)

cartoon=['ben10','dragon ball Z','bheem' ,'doremon','tom and jerry','powergirls','sinchan',];
console.log(cartoon.splice (3,1,"boom","toom"));                  'doremon'
console.log(cartoon);                                                 ['ben10', 'dragon ball Z', 'bheem', 'boom', 'toom', 'tom and jerry', 'powergirls', 'sinchan']  
console.log(cartoon.splice (2,3,"mrbean","hellonfire"));                 ['bheem', 'boom', 'toom']
console.log(cartoon);                                                   ['ben10', 'dragon ball Z', 'mrbean', 'hellonfire', 'tom and jerry', 'powergirls', 'sinchan'] 
