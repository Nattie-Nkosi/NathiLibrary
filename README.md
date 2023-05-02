# Nathi JavaScript Library

Nathi is a simple custom JavaScript library that provides a collection of utility methods for DOM manipulation and event handling.

## Installation

Use the following command to install the library via npm:

### Using npm

Install the package using npm:

```bash
npm install nathi
```

To use the library, include it in your project and create a new instance:

```javascript
const NathiLib = require("nathi");
const nathiLib = new NathiLib();
```

ES6

```javascript
import NathiLib from "nathi";
const nathiLib = new NathiLib();
```

### Using script tag

For browser usage, include the bundled file in your HTML:

```html
<script src="node_modules/nathi/dist/nathiLib.bundle.js"></script>
<script>
  const nathiLib = new NathiLib();
</script>
```

## API Reference

```javascript
createHTMLElement(tagName, attributes, textContent);
```

Create an HTML element with given attibutes and text content.

- `tagName` (string): The tag name of the element to create.
- `attributes` (object): An object containing the attributes and their values.
- `textContent` (string, optional): The text content for the element.

Returns the created HTML element.

Example:

```javascript
const button = nathiLib.createHTMLElement(
  "button",
  { id: "myButton", class: "btn" },
  "Click me"
);
```

```javascript
appendChildren(parent, childrenArray);
```

Append an array of children to a parent element.

- `parent` (HTMLelement): The parent element to which the children will be appended.
- `childrenArray` (Array<HTMLelement>): An array of HTML elements to append to the parent.

```javascript
addClass(element, className);
```

Add a class to the specified element.

- `element` (HTMLElement): the element to which the class will be added.
- `className` (string): The name of the class to too.

```javascript
removeClass(element, className);
```

- `element` (HTMLElement): The element from which the class will be removed.
- `className` (string): The name of the class to remove.

```javascript
on(selectorOrElement, eventName, callback);
```

Adds an event listener to the specified element or element found by the provided CSS selector.

- `selectorOrElement` (string | HTMLElement): The CSS selector string or DOM element to which the event listener should be added.
- `eventName` (string): The name of the event to listen for.
- `callback` (Function): The function to be called when the event occurs.

```javascript
const nathiLib = new NathiLib();

// Using a CSS selector string
nathiLib.on("#example", "click", () => {
  console.log("Element clicked");
});

// Using a DOM element
nathiLib.on(document.getElementById("example"), "click", () => {
  console.log("Element clicked");
});
```

```js
off(selectorOrElement, eventName, callback);
```

Removes an event listener from an element or element found by the provided CSS selector.

- `selectorOrElement` (string | HTMLElement): The CSS selector string or DOM element from which the event listener should be removed.
- `eventName` (string): The name of the event to stop listening for.
- `callback` (Function): The same function that was used when the event listener was added using the on() method.

## Project Structure

The nathi library has been organized using a separation of concerns approach, with each method placed in its own file inside the src folder. The index.js file imports and exports these methods as part of the NathiLib class. This structure makes it easier to maintain and add new features.

## Contributing

**Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.**
