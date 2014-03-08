A directive to delay the update of bound variable. E.g. update a variable
after an animation completes.

<br>
Usage:
<br><br>
`<div delayed-bind='myBoundVar'></div>`
<br>
The contents of the div will be set to the result of evaluating `myBoundVar`
in the current scope. When `myBoundVar` changes the contents of the div will
change after a short delay.
<br><br>
You can also specify the length of the time delay:
<br><br>
`<div delayed-bind='myBoundVar' delay='1000'></div>`
<br><br>
The delay value is in milliseconds, and will also be evaluated in the current
scope. If you don't specify the delay it defaults to 1000 milliseconds.
