var selectElementsStartingWithA = function(array) {
  var selected = [];
  for(var i=0; i < array.length; i++) {
    var word = array[i].split('');
    if (word[0] == 'a') {
      selected.push(array[i]);
    }
  }
  return selected;
}

var selectElementsStartingWithVowel = function(array) {
  var selected = [];
  var vowels = ['a','e','i','o','u'];
  for(var i=0; i < array.length; i++) {
    var word = array[i].split('');
    for(var j=0; j < vowels.length; j++) {
      if (word[0] === vowels[j]) {
        selected.push(array[i]);
      }
    }
  }
  return selected;
}

var removeNullElements = function(array) {
  var selected = [];
  for(var i = 0; i < array.length; i++) {
    if (array[i] != null) {
      selected.push(array[i]);
    }
  }
  return selected;
}

var removeNullAndFalseElements = function(array) {
  var selected = [];
  for(var i = 0; i < array.length; i++) {
    if (array[i] != null) {
      if (array[i] !== false) {
        selected.push(array[i]);
      }
    }
  }
  return selected;
}

var reverseWordsInArray = function(array) {
  var reversed = [];
  for (var i = 0; i < array.length ; i++) {
    reversed.push(array[i].split('').reverse().join(''));
  }
  return reversed;
}

var everyPossiblePair = function(array) {
  var pairs = [];
  for(var i = 0; i < array.length; i++) {
    for(var j = i + 1; j < array.length; j++) {
      pairs.push([array[i], array[j]]);
    }
  }
  return pairs;
}

var allElementsExceptFirstThree = function(array) {
  var selected = [];
  for(var i=3; i < array.length; i++) {
    selected.push(array[i]);
  }
  return selected;
}

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  var reversed = reverseWordsInArray(array);
  var sorted = reverseWordsInArray(reversed.sort());
  return sorted;
}

var getFirstHalf = function(string) {
  var halfLength = Math.round(string.length / 2);
  return string.substr(0,halfLength);
}

var makeNegative = function(number) {
  return number > 0 ? number * -1: number;
}

var numberOfPalindromes = function(array) {
  var reversed = reverseWordsInArray(array);
  var count = 0;
  for(i = 0; i < array.length; i++) {
    if (array[i] === reversed[i]) {
      count += 1;
    }
  }
  return count;
}

var shortestWord = function(array) {
  var shortestWord = array[0];
  for(i = 0; i < array.length; i++) {
    if (array[i].length < shortestWord.length) {
      shortestWord = array[i];
    }
  }
  return shortestWord;
}

var longestWord = function(array) {
  var longestWord = array[0];
  for(i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}

var sumNumbers = function(array) {
  var sum = 0;
  for(i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

var repeatElements = function(array) {
  var repeat = [];
  for(var i = 0; i < array.length; i++) {
    repeat.push(array[i]);
  }
  for(var i = 0; i < array.length; i++) {
    repeat.push(array[i]);
  }
  return repeat;
}

var stringToNumber = function(string) {
  return string * 1;
}

var calculateAverage = function(array) {
  var sum = 0;
  for(i = 0; i < array.length; i++) {
    sum +=array[i]
  }
  return sum / array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
  var elementsUntilGreaterThanFive = [];
  for(i = 0; i < array.length; i++) {
    if (array[i] < 6) {
      elementsUntilGreaterThanFive.push(array[i])
    } else {
      break
    }
  }
  return elementsUntilGreaterThanFive;
}

var convertArrayToObject = function(array) {
  var objects = {};
  for(var i =0; i < array.length; i += 2) {
    objects[array[i]] = array[i+1];
  }
  return objects;
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
