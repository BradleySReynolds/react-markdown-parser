This is a real time Markdown Parser made using react.

This project can be viewed at this url -->

The code is relatively simple this make this work. For one, I had to install 'Marked' using npm, which does most of the heavy lifting. My job is to make sure that the input value (a string) is formatted in a way to be parsed correctly.

To get the string I use a fuction called 'onChange' to set the state of the React component to the value of the text area on the left, thus allowing the user to see their changes real time.

Furthermore, to make the markdown look the way its suppose to I used css to style the specific elements; examples of this include: adding a border-bottom to the h1 element, indenting the quoteblock element, adding borders to the table elements.
