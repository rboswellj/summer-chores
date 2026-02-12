# summer-chores
Robert B Johnson
https://github.com/rboswellj
Practice for callbacks in JS

When ran the function doSummerChores is called.
This initiates the sequence that performs the chores with a timeout for the time it takes to do the chores.

Checks are done before each chore to check if the person is too exhausted to continue. The exhaustion threshold becomes lower with each chore to mimic increasing exhaustion throughout the day.

As the user completes chores the likelihood that they will be too tired to continue and will fall asleep increases.

At the end there is an announcement when all chores are completed.

Callback Version (callbackVersion.js)
Uses a series of callback functions to achieve the asynchornus operations.

Promise Version (promiseVersion.js)
Achieves the same thing, but with promises instead of callbacks.
