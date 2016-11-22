/*If statements
If statments are a way for our applications to take different paths through our code or make choices about what kind of behavior our application takes based on certain conditions or values in our variables. The variable or value that we are testing to be true is known as the condition.*/
/*In Human: If this condition is true, do something.*/

var isTurnedOn = true;
function flipSwitch(){
  if(isTurnedOn){
    isTurnedOn = false;
  }
}

/*If/Else Statements
If/Else statments have the same behavior as our if statement above but we can add a secondary condition in the case that our if statement is not true to take another action instead. What if our light is already turned off when we flip the switch?

In Human: If this condition is true, do something, else if it is false, do something else.*/

var isTurnedOn = false;
function flipSwitch(){
  if(isTurnedOn){
    isTurnedOn = false;
  }
  else{
    isTurnedOn = true;
  }
}

/*For loops
Sometimes we want to loop over a collection of data stored in an Arrayor inspect each character in a String. Or we just want to execute a block of code a set number of times before continuing on with the execution of our program. For loops allow us to execute a block of code and at the end of each iteration of our for loop we will evaluate a condition to determine if our loop should run again similar to our if statment.

Our for loop is made up of 3 parts: 1. Variable initialization 2. Termination condition 3. Afterthought

In Human: While our variable i is less than the size of our Array retrieve each element in the Array. At the end of each loop add 1 to the current value of i.*/

var lotteryNumbers = [0, 23, 12, 55, 2, 44, 65];
for(var i = 0; i < lotteryNumbers; i++){
  var currentLotteryNumber = lotteryNumbers[i];
  checkWinningNumber(currentLotteryNumber);
}

function makeCrazyLongString(string){
  var outputString = "";
  for(var i =0; i < 100; i++){
    outputString = outputString.concat(string);
  }
}

/* 
1) Function - youGetTaco

  @param Datatype: String `action`
  @return Datatype: String

Write a function that takes a single String parameter named `action`. If the value passed into the function is "eat", then the function will return a String with the value "EAT TACOS."
*/

// Step 1: define the function

// Step 2: invoke the function and store result to a variable

// Step 3: test your code with a console log


/*
2) Function - isNumberGreaterThan

  @param Datatype: Number `first`
  @param Datatype: Number `second`
  @return Datatype: Boolean

Write a function that takes two parameters of type Number called first and second respectively. Return true if the first number is greater than the second.*/


/* 3) Function - isTrue

  @param Datatype: Boolean `val`
  @return Datatype: Boolean

Write a function that takes in a Boolean value named val and have the function return whether the value is true.*/


/* 4) Function - isFalse
  
  @param Datatype: Boolean `val`
  @return Datatype: Boolean

Write a function that takes in a Boolean value named val and have the function return whether the value is false. */


/* 5) Function - isEqual

  @param Datatype: String `firstWord`
  @param Datatype: String `secondWord`
  @return Datatype: String

Write a function that takes two variables of type String called firstWord and secondWord respectively. Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'. */

 
/* 6) Function - isNotEqual

  @param Datatype: String `firstWord`
  @param Datatype: String `secondWord`
  @return Datatype: String

Write a function that takes two variables of type String called firstWord and secondWord respectively. Return 'AWWWWRIGHT' if the two are **not** equal otherwise return 'Y U MATCH!'. */


/* 7) Function - doubleEquals

  @param Datatype: Boolean `first`
  @param Datatype: Boolean `second`
  @return Datatype: Boolean

Write a function that takes two variables of type Boolean called first and second respectively. Return true if both values are true otherwise return false. */


/* 8) Function - totalOver30

  @param Datatype: Number `first`
  @param Datatype: Number `second`
  @param Datatype: Number `third`
  @return Datatype: Boolean

Write a function that takes three variables of type Number called first and second and third respectively. Return true if the sum of all values are greater than 30 otherwise return false. */



/* 9) Function - totalUnderWhat

  @param Datatype: Number `first`
  @param Datatype: Number `second`
  @param Datatype: Number `third`
  @param Datatype: Number `fourth`
  @return Datatype: Boolean

Write a function that takes four variables of type Number called `first` and `second` and `third` and `fourth` respectively. Return true if the sum of `first`, `second` and `third` are less than `fourth`; otherwise, return false. */



/* 10) Function - looptoNumber

  @param Datatype: Number `limit`

Write a function that takes a single argument, a Number value named `limit`, and have the function write a for-loop that iterates a number of times equal to `limit` and logs the current value of `limit` on each iteration. */



/* 11) Function - showEachValue

  @param Datatype: Array `characters`

Write a function that takes in a Array value named `characters`, which is a sequence of single character String values. The function should execute a for-loop that iterates over the array and prints each character. */



/* 12) Function - createArrayFromString

  @param Datatype: String `word`
  @return Datatype: Array

Write a function that takes a single variable of type String called `word` and write a for loop that creates an Array made up of each character in `word` except for "A" or "a". We don't want no stinking "A" or "a" in our Array. Note: You will need to use the Array.push() method to complete this function. */



/* 13) Function - greatSummator

  @param Datatype: Array 
  @return Datatype: Number

Write a function that takes an Array with sequence of Number values. The function should return the sum of the Array's Number values. */



/* 14) Function - totalUnderWhatFor

  @param Datatype: Array 
  @param Datatype: Number `total` 
  @return Datatype: Boolean

Write a function that takes two arguments: (1) an Array with sequence of Number values, and (2) a Number named `total`. Return true if the sum of all values in the Array are less than `total`; otherwise, return false. */



/* 15) Function - checkTrueValues

  @param Datatype: Array 
  @return Datatype: Boolean

Write a function that takes an Array containing any number of type Boolean values. The function should execute a for-loop that invokes the `isTrue` function (defined earlier) with each value from the Array as input. The `checkTrueValues` function should return true if all values from the `isTrue` function return true. */

