# prep-logic

# 1) `Function - youGetTaco`
```javascript
@param Datatype: String action
@return Datatype: String
```

Write a function that takes a single String parameter named `action`. If the value passed into the function is "eat", then the function will return a String with the value "EAT TACOS."

# 2) `Function - isNumberGreaterThan`
```javascript
@param Datatype: Number first
@param Datatype: Number second
@return Datatype: Boolean
```

Write a function that takes two parameters of type Number named `first` and `second` respectively. Return true if the first number is greater than the second.

#3) `Function - isTrue`
```javascript
@param Datatype: Boolean val
@return Datatype: Boolean
```

Write a function that takes in a Boolean value named `val` and have the function return whether the value is true.

#4) `Function - isFalse`
```javascript  
@param Datatype: Boolean val
@return Datatype: Boolean
```

Write a function that takes in a Boolean value named `val` and have the function return whether the value is false.

#5) `Function - isEqual`
```javascript
@param Datatype: String firstWord
@param Datatype: String secondWord
@return Datatype: String
```

Write a function that takes two variables of type String named `firstWord` and `secondWord` respectively. Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'. 

#6) `Function - isNotEqual`
```javascript
@param Datatype: String firstWord
@param Datatype: String secondWord
@return Datatype: String
```

Write a function that takes two variables of type String named `firstWord` and `secondWord` respectively. Return 'AWWWWRIGHT' if the two are **not** equal otherwise return 'Y U MATCH!'.

#7) `Function - doubleEquals`
```javascript
@param Datatype: Boolean first
@param Datatype: Boolean second
@return Datatype: Boolean
```

Write a function that takes two variables of type Boolean named `first` and `second` respectively. Return true if both values are true otherwise return false.

#8) `Function - totalOver30`
```javascript
@param Datatype: Number first
@param Datatype: Number second
@param Datatype: Number third
@return Datatype: Boolean
```

Write a function that takes three variables of type Number named `first`, `second`, and third. Return true if the sum of all values are greater than 30; otherwise, return false.

#9) `Function - totalUnderWhat`
```javascript
@param Datatype: Number first
@param Datatype: Number second
@param Datatype: Number third
@param Datatype: Number fourth
@return Datatype: Boolean
```

Write a function that takes four variables of type Number named `first`, `second`, `third`, and `fourth`. Return true if the sum of `first`, `second` and `third` are less than `fourth`; otherwise, return false.

#10) `Function - looptoNumber`
```javascript
@param Datatype: Number limit
```

Write a function that takes a single argument, a Number value named `limit`, and have the function write a for-loop that iterates a number of times equal to `limit` and logs the current value of `limit` on each iteration.

#11) `Function - showEachValue`
```javascript
@param Datatype: Array characters
```

Write a function that takes in a Array value named `characters`, which is a sequence of single character String values. The function should execute a for-loop that iterates over the array and prints each character. 

#12) `Function - createArrayFromString`
```javacript
@param Datatype: String word
@return Datatype: Array
```

Write a function that takes a single variable of type String named `word` and write a for loop that creates an Array made up of each character in `word` except for "A" or "a". We don't want no stinking "A" or "a" in our Array. Note: You will need to use the Array.push() method to complete this function.

#13) `Function - greatSummator`
```javascript
@param Datatype: Array
@return Datatype: Number
```

Write a function that takes an Array with sequence of Number values. The function should return the sum of the Array's Number values.

#14) `Function - totalUnderWhatFor`
```javascript
@param Datatype: Array 
@param Datatype: Number total 
@return Datatype: Boolean
```

Write a function that takes two arguments: (1) an Array with sequence of Number values, and (2) a Number named `total`. Return true if the sum of all values in the Array are less than `total`; otherwise, return false.

#15) `Function - checkTrueValues`
```javascript
@param Datatype: Array 
@return Datatype: Boolean
```

Write a function that takes an Array containing any number of type Boolean values. The function should execute a for-loop that invokes the `isTrue` function (defined earlier) with each value from the Array as input. The `checkTrueValues` function should return true if all values from the `isTrue` function return true.