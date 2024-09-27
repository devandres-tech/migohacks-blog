---
title: "On the Nomenclature of Variables"
author: Andres Alcocer  
pubDatetime: 2022-06-09T14:30:00.000Z
tags: 
	- Naming variables
description: How to effectively name variables
---

Being able to effectively give a descriptive name to a variable is probably one of the hardest decisions you'll make as a programmer (besides choosing tabs vs. spaces). You can’t name variables the way you might name your children—because it sounds good or holds a special meaning in your life. Unlike your children and their names, which represent distinct entities, a variable and its name are essentially the same thing.

Here’s an example of poor variable naming conventions:

```js
let x = q * p;
let t = x + slsTx(x) - d;
let c = getCB(id) - t;
saveCB(id, c);
```

What in the world is going on? what do `x`, `q`, `p` mean? what does `slsTx` or `getCB` do? If you wanted to print the total bill amount for a customer's purchase, which variable would you use? So many questions left unanswered.

Here is the same code but with good variable naming conventions:

```js
let amountTotal = quantity * price;
let billTotal = amountTotal + salesTax(amountTotal) - discount;
let currentBalance = getCurrentBalance(customerId) - billTotal;
saveCurrentBalance(customerId, currentBalance);
```

See how easy it is to decipher what is actually happening, we can clearly see what each variable represents and what each function does. It's memorable and descriptive.

## Considerations in Choosing Variable Names

### 1 - Most Important Consideration

To effectively name a variable, we must accurately describe the entity it represents. One way to do this is to state in words what the variable signifies, which is usually the best option. For example, if we want to name a variable that represents the total number of people a football stadium can hold, we can call it `stadiumCapacity`. A variable that represents the score of the away team would be `awayTeamScore`.  Similarly, a variable that holds the total number of teams in a league is better named `numberOfTeamsInLeague` rather than say, `y` or `x`.

Notice that there’s no need to decipher what these variables mean; we can simply read them to understand what they represent. Of course, there are some exceptions, such as very long variable names. We will also discuss optimal variable length. Let’s take a look at this table, which shows examples of good and bad variable names:

| Purpose of Variable           | Good Descriptors                          | Bad Descriptors                        |
| ----------------------------- | ----------------------------------------- | -------------------------------------- |
| Current date                  | _currentDate_, _todaysDate_               | _cd_, _current_, _d_, _dt_, _x1_, _x2_ |
| Velocity of a cheetah         | _cheetahVelocity_, _cheetahVelocityInMph_ | _tv_, _vlc_ _v1_ _cheetah_             |
| Molecules per drop of water   | _moleculesPerWaterDroplet_                | _m_, _p1_, _mpwd_, _molecules_, _y_    |
| Running total of goals scored | _totalGoalsScored_, _goalsScored_         | _total_, _x1_, _y2_, _goals_, _currGS_ |

The names `totalGoalsScored` and `goalsScored` are good choices because they accurately and descriptively capture the concept of "the running total of goals scored"; in fact, they use precisely these words. Generally, ordinary words are your best options. Names like `x1` and `y2` are poor choices because they are too short and don't represent anything. Similarly, `total` is inadequate because it doesn't specify what the total is. The name `goals` is also ambiguous, as it could refer to personal accomplishments in life. From this, we can conclude that good descriptors are specific as possible. Names like `x`, `i`, and `average` are too general and can be used for multiple purposes.

### 2 - Optimum Name Length

Studies have shown that the effort required to debug a program is minimized when a variable name is, on average, 10 to 16 characters long. Names that are too short, such as `x1` and `x2`, don’t convey any meaning. Conversely, names that are too long can lead to syntax errors and muddle the visual structure of a program. While not every variable will fit within the 10 to 16 character range, it suggests that if your variable names are too short, you should strive to be more descriptive, and if they are too long, you should consider trimming them (for example, by using commonly accepted abbreviations).

Let us take a look at the following table to illustrate the point:

| Too long                                                                                                                | Too Short                 | Just Right                                                                    |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------------------------------------------------------------------------- |
| _numberOfPlayersInFootballTeam_, _numberOfSetsInTheStadium_, _maximumNumberOfSubstitutes_, _statisticsForASinglePlayer_ | _npt_, _nst_, _ms_, _sfp_ | _numTeamMembers_, _stadiumSeatCapacity_, _substitutesMax_, _playerStatistics_ |

### 3 - Variable Scope

There are instances where naming a short variable `i` is helpful, particularly when it has a limited scope of operation. For example, it can be used for the current iteration in a loop or as an array index. By naming a variable `i`, the programmer conveys the message: “This variable is not used outside these few lines of code.”

Studies have found that longer names are better suited for global variables, while shorter names are more appropriate for local variables or loop variables. Global variables can clutter the global namespace and are prone to name collisions. One way to remedy this is by partitioning the global namespace using the _namespace_ keyword, which is supported by most programming languages, but not by JavaScript. To mimic namespaces in JavaScript, we can use objects.

```js
let DatabaseSubsystem = {
  getCustomer: () => {},
  // more local declarations...
};

let UserInterfaceSubsystem = {
  getCustomer: () => {},
  // more local declarations...
};
```

We have defined a function called `getCustomer` in both the `DatabaseSubsystem` and the `UserInterfaceSubsystem` objects. Now we can identify which function we want to refer to by saying `DatabaseSubsystem.getCustomer()` or `UserInterfaceSubsystem.getCustomer()`. This minimizes the risk of global-namespace collisions and makes your program more readable.

### 4 - Computer-Value Qualifiers

Most programs utilize variables containing computed values such as totals, maximums, minimums, and averages. A good convention is to place the modifier at the end of the variable name, for example, `distanceTotal` and `speedAverage`. This practice is beneficial because the part that conveys the variable's primary meaning is at the front, making it easy to read and locate. It also helps avoid confusion if both `speedAverage` and `averageSpeed` exist in the same program; while both are semantically equivalent, they are treated differently due to this naming convention.

Another advantage of this approach is the symmetry it provides. Using variable names like `speedTotal`, `distanceTotal`, `speedAverage`, and `distanceAverage` is visually appealing, while names such as `totalSpeed`, `distanceTotal`, `speedAverage`, and `averageDistance` do not invoke a sense of order. By maintaining consistency in naming conventions, we enhance the readability and maintainability of our programs.

### 5 - Common Opposites

Using symmetry also helps when using opposites. Naming conventions for opposites helps consistency, which improves readability and maintenance. Using pairs like _up/down_ are easy to read and remember. Using pairs that depart from the common language are hard to remember and can be confusing. Here are some common opposites:

- begin/end
- first/last
- locked/unlocked
- up/down
- min/max
- next/previous
- open/closed
- source/destination
- clean/dirty
- empty/full
- inner/outer

## Naming Data Types

This section provides insight into naming specific kinds of data, such as loop variables, temporary variables, boolean variables, and named constants.

### 1 - Loop Indexes

Loops are used frequently in programming that certain guidelines have emerged such as using `i`, `j`, or `k` for the counter:

```js
for (let i = 0; i < data.length; i++) {
  data[i] = 0;
}
```

When variables are used outside the loop, we should probably give them a more meaningful name than `i`, `j`, or `k`. For example, if we need to remember how many goals a team has scored, a name like `teamGoalCount` would be ideal:

```js
let teamGoalCount = 0;
while (moreScores()) {
  score[teamGoalCount] = getNextScore();
  teamGoalCount++;
}

/*
lines using teamGoalCount
...
*/
```

If your code inside your loop is longer than a few lines you are most likely to forget what `i`, `j`, or `k` is supposed to stand for. It would be wise to give that variable a meaningful name. Most of the time code changes, expands, or is copied into other programs. Giving the variable a descriptive name will make your code more readable.

One common scenario loops grow longers is due to being nested. If we have several nested loops, giving meaningful and descriptive names to loop variables will ease readability.

```jsx
for (let teamIndex = 0; teamIndex < teamCount; teamIndex++) {
  for (let matchIndex = 0; matchIndex < matchCount[teamIndex]; matchIndex++) {
    score[teamIndex][matchIndex] = 0;
  }
}
```

By applying this guideline we avoid confusing `i` with `j` or vice versa when trying to talk to other programmers. We also access the array elements in more clearer fashion `score[teamIndex][matchIndex]`, than something like this `score[i][j]`

### 2 - Temporary Variables

Temporary variables are used to hold intermediate results of calculations, often serving as placeholders or housekeeping values. In most programs, they are commonly named `temp`, `x`, or some other obscure name. This typically results from the programmer not fully understanding the problem. We must be cautious with temporary variables; labeling them as such might indicate uncertainty about their true purpose. Let’s consider the following example:

```js
// computes the volume of a cylinder by using the area of a circle
let temp = radius ** 2 * pie;
let cylinderVolume = temp * height;
```

It's ok to store the expression of `radius ** 2 * pie` in a variable since we might use it again. But by calling it _temp_ we don't know anything about it. A better approach would be to give git a descriptive name:

```js
// computes the volume of a cylinder by using the area of a circle
let area = radius ** 2 * pie;
let cylinderVolume = area * height;
```

It's the same code, but now it's more readable and we actually know the meaning of the variable.

### 2 - Boolean Variables

Booleans usually describe the status of your program, here are some basic guidelines to consider when naming them:

- `done`: Done typically indicates whether something is done. For example, it can indicate whether a loop is done (it could be any other operation). We can set _done_ to _false_ before something is completed and set it to _true_ when it is completed.
- `error`: indicates that an error has occurred. You can set the variable to _false_ when no error has occurred. Set it to _true_ when an error has occurred.
- `found`: You can use _found_ when search an array for a value, a player with an Id in a team, finding the greater amount in a calculation, and so on. Set _found_ to _false_ when the value has not been found and to _true_ when the value is found.
- `success` or `ok`: Use _success_ or _ok_ when an operation has been successful. Set the variable to _false_ when the operation failed and to _true_ when it succeeded.

### 3 - Constants

Usually when we name constants (values that never change in your program, ex: days of the week) we uppercase all letters and use snake case. We should try to name the entity it represents rather than the number the constant it refers to. For example _SEVEN_ is a bad name for a constant (yes, even if its value represents 7.0). A better name is _GOALS_NEEDED_, which can equal 5.0 or 7.0. `SEVEN = 5.0` would not be accurate. By the same manner, _APPLE_DOZEN_ is a poor constant name; _APPLE_MAX_ is a good constant name.

## Conclusion

I hope you found this blog post useful and start to incorporate some of the conventions mentioned into your programs. It will help you become a better programmer and minimize the occurrences of bugs, it will also make your programs more readable and maintainable. Software is always changing and we need to constantly make changes to the source code. We want to be able to understand the code we wrote 5 years ago and what better way to start by giving your variables a descriptive name!
