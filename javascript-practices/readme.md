# JavaScript and other coding concepts

### (1) What is a Callback Function? How it is different from a Normal Function?

So a callback function in just like a normal function having some executable code inside it but the only difference here is that if a function is passed into another function, then it is called a Callback Function.

### (2) Consequences of placing Script Tag inside head

so every browser or complier will go from up to down while rendering or executing the code. so, if we put script tag inside the head tag, then it will be above all the body elements and when the browser will render the HTML, it will obviously run the scripts first and elements later. Now, there are two consequences to it. One being : the webpage will load slower as it will wait for the script to load first. Second being : before browser can ACCESS the DOM elements, we are already MANIPULATING it, so many times it will give errors.


### (3) What happens when you pass an argument to the function parameter in the Event Listener function?

addEventListerner methods do not require any additional parameter to be attached in the function that is passed as 2nd parameter otherwise that function gets called there itself on the spot instead of executing the function on the event. We can solve by using arrow Function and then passing the (function with argument) within that arrow function.