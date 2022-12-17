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