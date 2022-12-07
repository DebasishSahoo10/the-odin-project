# CSS Conecpts and Basics

### (1) What are the ways of linking stylesheet to HTML file? and which one will take effect over another? 
so there are three ways : Inline - Internal - External. in Inline method, we can just go inside the tag of the element you want to style and then declare a style property there. In Internal method, we go to the head section of HTML and then there, we declare all our style properties using classes, IDs, tags etc. In external method, we create a different file of .CSS and then link it inside the head of HTML using Link tag. but if all this methods are applied all at once, then in execution Inline will precede over Internal which will precede over External.

### (2) What is CSS Box Model?
Box Model in CSS is a way of wrapping every HTML element around for better viewing reasons. whenever we put an element in CSS, it put a layout around that element, in which our HTML element sits first, then an empty space around it called Padding, then a line around it called Border, and finally another blank space around it called Margin. all of it together looks like a box, hence this system is called box model.

### (3) Difference between Inline and Block elements

Inline items take only the height and width required for the element while Block element takes the full width of the page.  so, while our items are inline we can stack them in a horizontal way but block element’s will always take a new space.

### (4) What is the difference between inline and inline-block?

Inline puts the element only till the space it needs, hence stacking multiple elements in a horizontal way. inline-block do exact the same thing, but it also allows us to play with width and height of those elements. and also inline-block allows us add margin and padding on all four sides of the element while inline allows only for left and right.