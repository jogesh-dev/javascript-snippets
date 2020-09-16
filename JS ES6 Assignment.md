# Javascript 5 ES6 and Asynchronous: Exercises

1. Exercise 
Create a list of restricted words and whenever you find any restricted word in your blog using a script, change them like following example.
shit = s**t;
Shit = S**t;

From the document
find all text nodes (node.nodeType==3) from document using for loop and recursion.
function findAllTextNodes(node = document.body){
  var allTextNodes = [];

   // use for loop and recursion to add text node to allTextNodes array 

  return allTextNodes;
}

check for text content of each node and replace the blacklisted word with masked word.

Helpful links:
Replacing a regex matche on string : 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

To repeat * n times :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

2. Exercise : Modify myMath library to use spread operator and array methods.
instead of taking two arguments it should be able to take multiple arguments for add and multiply methods.

3. Transform following api response for x and y coordinates of a graph to the required format
`const data = [ [6,7] , [9, 12] , [78, 90]] `
`const desiredFormatData = [{x : 6, y: 7}, {x: 9, y: 12}, {x: 78, y: 90}]`

use map and destructuring 

