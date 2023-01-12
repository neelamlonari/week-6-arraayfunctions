// React 6.2 Homework
//Valid Anagram

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Replace Method - syntax: replace(pattern, replacement)
// The pattern can be a string or a RegExp

// NOTE! Object.keys() method returns an array of an object's enumerable string-keyed property names
/*  Example:  const object1 = {
                a: "somestring",
                b: 42,
                c: false
                };
              console.log(Object.keys(object1)); // Output: ["a", "b", "c"]
*/
const validAnagram = ((str1, str2)=>{
    let charFrequency1 ={};
    let charFrequency2 = {};
    

  str1 = str1.toLowerCase().replace(/[^a-z]/g, "");
    
  str2 = str2.toLowerCase().replace(/[^a-z]/g, "");

  // Iterate through each string, and add the frequency of each character
  for (let char of str1) {
    charFrequency1[char] = (charFrequency1[char] || 0) + 1;
  }
  for (let char of str2) {
    charFrequency2[char] = (charFrequency2[char] || 0) + 1;
  }

   // Compare objects for identical keys and values
   return (
    Object.keys(charFrequency1).every(
      (key) => charFrequency1[key] === charFrequency2[key]
    ) &&
    Object.keys(charFrequency2).every(
      (key) => charFrequency1[key] === charFrequency2[key]
    )
  );
    }
)



    
     console.log( validAnagram('rail safety', 'fairy tales') );//--> True
     console.log( validAnagram('RAIL! SAFETY!', 'fairy tales'))// --> True
     console.log(validAnagram('Hi there', 'Bye there'))// --> False