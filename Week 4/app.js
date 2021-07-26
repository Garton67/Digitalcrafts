// Create a Palindrome app in Javascript which will print whether a string is a palindrome or not
function palin(word) {
  thingToCheck = word.toLowerCase()
  forward = word
  reverse = ""
  for(i = 1; i <= word.length; i++) {
      reverse = reverse + word[word.length - i]
  }
  if(forward === reverse) {
      return true
  }
  else {
      return false
  }
}

console.log(palin("dad"))

// Create an app which removes duplicates from an array
function dupRemove(list) {
  newList = []
  for(i = 0; i < list.length; i++) {
      inList = false
      checkValue = list[i]
      for(index = 0; index < newList.length; index++) {
          if(checkValue == newList[index]) {
              inList = true
          }
      }
      if (inList == false) {
          newList.push(checkValue)
      }
  }
  return newList
}

console.log(dupRemove(["John","Mary", "Alex", "Steve", "Mary", "John"]))

// Create an app which returns true/false depending on if the item is in the array
function isInArray(item, array) {
  itemin = false
  for(i = 0; i < array.length; i++) {
      if(array[i] == item) {
          itemin = true
      }
  }
  return itemin
}

console.log(isInArray("Jack", ["John","Mary", "Alex", "Steve", "Mary", "John"]))


// Create an app which finds the largest number in an array
function findLargest(array) {
  larget = array[0]
  for(i = 1; i < array.length; i++) {
      if(array[i] > larget) {
          larget = array[i]
      }
  }
  return larget
}

console.log(findLargest([2, 12, 14, 15, 1, 33, 99, 3, 5, 7]))


// Create an app which finds the smallest number in an array
function findSmallest(array) {
  smallest = array[0]
  for(i = 1; i < array.length; i++) {
      if(array[i] < smallest) {
          smallest = array[i]
      }
  }
  return smallest
}

console.log(findSmallest([2, 12, 14, 15, 1, 33, 99, 3, 5, 7]))

// Create FizzBuzz app
function fizzBuzz(number) {
  if((number % 3 == 0) && (number % 5 == 0)) {
      return "FizzBuzz"
  }
  else if(number % 5 == 0) {
      return "Fizz"
  }
  else if(number % 3 == 0) {
      return "Buzz"
  }
}

console.log(fizzBuzz(10))

// Create an app which determines whether the number is even or odd.
function oddEven(numb) {
  if(numb % 2 == 0) {
      return "Even"
  }
  else {
      return "Odd"
  }
}

console.log(oddEven(8))

//Take the array [3,4,56,7,8,1] and sort them in ascending and descending order.
function sortIt(zzarray) {
  newArray = zzarray
  for(i = 0; i < newArray.length; i++) {
          for(index = 0; index < newArray.length; index++) {
          if(newArray[index] > newArray[index + 1]) {
          first = newArray[index]
          second = newArray[index + 1]
          newArray[index] = second
          newArray[index + 1] = first
          }
      }
  }
  

  return newArray
}

console.log(sortIt([53,4,77,62,28,11]))