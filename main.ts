// task 42

// great magicians: start with a copy of your program from Exericse 39. write a function called make_great() that modifies
// the array of magicians by adding the phrase the great to each magician's name . call show_magicians() to see that the list
// has actually been modified.

// function make_great(magicians: string[]): void { 
//     for (let i = 0; i <magicians. length; i ++){  // i stand for index string
//     magicians[i] = magicians[i] + 'the great'

//     }
// }

// const magicians2: string[] = ["usman","haseeb","wajahar"];
// make_great(magicians2)
// console.log (magicians2)

// // task 43

//unchanged magicians:start with your work grom execise 41. call the function make_great()with a copy of the array of magicians"
// names. because the original array will be unchanged, return the new array and store it in a separate array.
// call show_magicians () with each array to show that  you have one array of the original na,es and one array with the great added
// to each magician's name

function make_great2(magicians: string[]): string[]{
    const greatmagicians: string [] = [];
for (let i=0; i < magicians.length; i++) {
    greatmagicians.push(magicians[i] + 'the great');
}
return greatmagicians;

}
const magicians3: string[] = ["usman","haseeb","wajahat"];
const greatmagicians2: string[]= make_great2(magicians3);
console.log(magicians3);
console.log(greatmagicians2);