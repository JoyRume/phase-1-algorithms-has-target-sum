function hasTargetSum(array, target) 
{
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  
  return false;

   }

/* 
  Write the Big O time complexity of your function here

  O(n^2)

*/

/* 
  Add your pseudocode here

  create an object to keep track of all the numbers we've seen
iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  check if any of the keys in our object is the complement to the current number
    if so, return true
  save the current number as the key on our object so we can check it later against other numbers
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
 all 
  It creates a new Set object called seenNumbers to store the elements that have already been processed.
It iterates over each element in the input array array.
For each element, it calculates the complement of the target by subtracting the element from the target.
It checks if the complement is already in the seenNumbers set using the has() method. If it is, the function returns true, indicating that there is a pair of elements that add up to the target.
If the complement is not in the set, it adds the element to the set using the add() method.
Finally, if no matching pair is found, the function returns false.
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
