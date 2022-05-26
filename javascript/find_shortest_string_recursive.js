function findShortestStringRecursive(arr) {
  let mid = arr.length / 2;
  let end = arr.length;
  if(arr.length == 1){
    return arr[0]
  }

  return findShortestStringRecursive(arr.slice(0, mid)).length <=  findShortestStringRecursive(arr.slice(mid, end)).length ? findShortestStringRecursive(arr.slice(0, mid)) : findShortestStringRecursive(arr.slice(mid, end))
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
