# JavaScript and other coding concepts

### (1) What is a Callback Function? How it is different from a Normal Function?

So a callback function in just like a normal function having some executable code inside it but the only difference here is that if a function is passed into another function, then it is called a Callback Function.

### (2) Consequences of placing Script Tag inside head

so every browser or complier will go from up to down while rendering or executing the code. so, if we put script tag inside the head tag, then it will be above all the body elements and when the browser will render the HTML, it will obviously run the scripts first and elements later. Now, there are two consequences to it. One being : the webpage will load slower as it will wait for the script to load first. Second being : before browser can ACCESS the DOM elements, we are already MANIPULATING it, so many times it will give errors.


### (3) What happens when you pass an argument to the function parameter in the Event Listener function?

addEventListerner methods do not require any additional parameter to be attached in the function that is passed as 2nd parameter otherwise that function gets called there itself on the spot instead of executing the function on the event. We can solve by using arrow Function and then passing the (function with argument) within that arrow function.

### (4) What is DOM?

DOM stands for Document Object Model. It is a system that takes documents like HTML and give all its elements in a structured way to other languages like JS or CSS. and from there developers can manipulate those elements and also can put it back to the original document. there are basically two types of DOM : actual DOM and virtual DOM.

### (5) What are Promises?

Promises in JS is just like real world promises. It is syntax system through which our code takes some task from us and promises us to give some output on it, whenever the output is ready. now there are three states in a promise. while code is working on it, it mean Promise is Pending. when it gave the output, it means Promise is Fulfilled and if it rejects to give what is asked, it means the Promise is rejected. for every state we can have different syntaxes, like for fulfilled we can say (.then) and for rejected we can say (.catch). I also want to add that promises is a part asynchronous programming in JS. Why this is important? Because JS is a single threaded language and when we do something like a fetch call, a CODE BLOCKING happens, to avoid that and give users a smooth flow we need async programming like Promises.

### (6) What is the 2nd Parameter passed to the Event Listener and why it is not in curly braces?

2nd Param there is a Callback function which simply means that it will be executed only when a particular trigger happens. and the reason it is not in curly braces is that in JS we can pass a function inside another function just by calling its name and declaring it somewhere else in the same script file.

### (7) What is parseInt()

parsing : it is a process where we break something down into its parts to study them individually and to understand them better.

parseInt() : it is a function that takes a string which has numbers in it and returns only the numbers in an integer data type. and too add here, it will only give us the numbers from starting of the string to the point it encounters a letter or a symbol and if the string starts directly with a letter then it will output nothing.

### (8) Differences between Vanilla JS & React JS

- *Declarative vs. Imperative Programming* : In vanilla JS we have to all the task from execution to rendering. we have to handle both the WHAT and HOW. but in REACT, we can just care WHAT part and REACT with its superpowers like JSX can handle the HOW part.
- *Use of components in React* : In react we can have different components written on different files rather than like vanilla JS where every code will be at once place. so, we can say that, React’s components increase the clarity, efficiency and readability of our codes.
- *Actual DOM vs. Virtual DOM* : vanilla JS takes the whole DOM changes it, then pushes the whole DOM again for render. it is sort heavy for the browser, hence slow too. but React use Virtual DOM, which will change and push the only part we want changed and re-rendered.

### (9) Why is useState being used in React ?

useState is a hook in react which is used to hold a state or value of a component. the way it works is like this : every useState gives us a variable (which holds the value or the state) and a function which can be used to update the value inside the variable. so we can use the function before the component which’s state we want to hold. and use variable any where we want that state to be shown or used.

### (10) What do you think Javascript is synchronous or asynchronous?

Javascript at its base is synchronous, and that is why we need thing likes promises, async, await to give it a asynchronous nature.

### (11) What is replace() function in JS?

The Replace method searches for a string or a value or a regular expression and replaces it with given new characters. Now one thing to note here is that Replace function doesn’t change the original string, it produces a new one with replaced chars. It takes two params. first one is what is to search and replace in the string and the second param is the new chars.

### (12) Reason for using the key in the code for each different element?

there are two reasons basically, one is to give each element a unique identity through which browser can treat them as that. and second being it help in DOM manipulation, as browser won’t re render the element which key is already there with the browser.

### (13) Number of ways of using fetch.

at the end of the day fetch call is connecting our data and code to a given URL mostly an API but that connection can be various types like : GET which is used to get some data from API, POST is used to create something or push something on to the API and these list of syntax goes on further to things like PUT, PATCH and DELETE.

### (14) How to select element through their Attributes ?

document.querySelector(’[attribute name = “value”]’)