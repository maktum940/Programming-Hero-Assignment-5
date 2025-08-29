## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Both methods are used for manipulating the HTML elements. Like if I want to take some value for my HTML or CSS file or like want change some attributes.

But main difference between **getElementById, ElementById** are:

**getElementById** : Is used like if you don't want change a big portion but a specific change.
**getElementsByClassName** : Is used if there are many tag that you want change in a same way in single code.

**querySelector** : Select single tag at a time.
**querySelectorAll** : But querySelectorAll select all tag containing the same class.

<br>

## How do you create and insert a new element into the DOM?
To create we use ` document.createElement("element-name") ` method and for insert if we want to insert to a specific place we can use id like ` document.getElementById("ID-name").appendChild(created-element); ` or we can use `document.body.appendChild(created-element);`.

<br>

## What is Event Bubbling and how does it work?
Event Bubbling is like tree meaning when an event happens in a child element and it transmitted it's parents element that is called Event Bubbling. Like a button was clicked in a span element so the button is the child of the span in the same way the span might a child of a div. It continues until it reaches to the root.

<br>

## What is Event Delegation in JavaScript? Why is it useful?
Delegation is an idea that I "delegate" the handling of an event to a different element instead of the actual element that received the event. meaning from the previous answer we know Event Bubbling child receive an event but it bubble up to it's parents. Like event is received from the child but it is delegated to it's parents.

<br>

## What is the difference between preventDefault() and stopPropagation() methods?
**preventDefault()** : This method prevents the browser from executing the default behavior of the selected element.Meaning if the browser has an event that can be cancelable the method can prevent the event to happen.

**stopPropagation()** : It prevents the parent element from accessing any event from it's child. Meaning it prevents Event Bubbling to happen.