# CSS Conecpts and Basics

### (1) What are the ways of linking stylesheet to HTML file? and which one will take effect over another? 
so there are three ways : Inline - Internal - External. in Inline method, we can just go inside the tag of the element you want to style and then declare a style property there. In Internal method, we go to the head section of HTML and then there, we declare all our style properties using classes, IDs, tags etc. In external method, we create a different file of .CSS and then link it inside the head of HTML using Link tag. but if all this methods are applied all at once, then in execution Inline will precede over Internal which will precede over External.

### (2) What is CSS Box Model?
Box Model in CSS is a way of wrapping every HTML element around for better viewing reasons. whenever we put an element in CSS, it put a layout around that element, in which our HTML element sits first, then an empty space around it called Padding, then a line around it called Border, and finally another blank space around it called Margin. all of it together looks like a box, hence this system is called box model.

### (3) Difference between Inline and Block elements

Inline items take only the height and width required for the element while Block element takes the full width of the page.  so, while our items are inline we can stack them in a horizontal way but block element’s will always take a new space.

### (4) What is the difference between inline and inline-block?

Inline puts the element only till the space it needs, hence stacking multiple elements in a horizontal way. inline-block do exact the same thing, but it also allows us to play with width and height of those elements. and also inline-block allows us add margin and padding on all four sides of the element while inline allows only for left and right.

### (5) Importance of CSS Variables. Demonstration with code was also asked.

Suppose in my web page I am using a single color as a theme color which is used in most of my elements. now, If I use the color code directly in the class properties, then if I want to change that color, I have to go to each class it is used and change it there which will be a tedious process. with CSS variables, I can assign a variable to that color code and use that variable in each and any class I need it in, so when I change the color in future, it will automatically be changed everywhere it is used.

### (6) Distinguish between `display:none` and `visibility:hidden`

`display:none` means that the tag in question will not appear on the page at all (although you can still interact with it through the DOM). There will be no space allocated for it between the other tags. `visibility:hidden` means that unlike `display:none`, the tag is not visible, but space is allocated for it on the page.

### (7) What are the different Position Properties in CSS ?

Default Position value is Static which goes with the document flow. Then comes Relative it is just like Static and still have it’s own space in Document Flow, but here it has access to its own left, right, top, bottom properties. then comes absolute, in which element looses its space from document flow and to get its own area it has access to all its rest of the positional properties and then comes Fixed which will be all the time at a fixed position irrespective scroll behavior and lastly comes Sticky, which is there in its space but when its space goes out of the view it sticks itself to the top of viewport.

### (8) What is the difference between REM and EM ?

EM is relative to the font-size of its direct or nearest parent. REM is relative to the HTML (root) font-size.

### (9) Difference between CLASS and ID

both are CSS selectors but a we can assign one class to multiple items to make things easy sometimes but ID has to be unique to each element.

### (10) What happens if a HTML element is styled using tag, ID and also class?

Here style from CSS will be applied in this manner : first ID, then Class and then Tag.