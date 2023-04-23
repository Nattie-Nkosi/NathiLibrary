# Nathi JavaScript Library

A lightweight custom JavaScript library to create and manipulate HTML elements.

## Installation

### Using npm

Install the package using npm:

```bash
npm install nathi
```

Include the library in your project:
Node.js

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

Download the `nathiLib.js` (or `nathiLib.min.js` for the minified version) file and include it in your HTML file:

```html
<!-- Development version -->
<script src="node_modules/nathi/dist/customLib.bundle.js"></script>

<!-- Minified version -->
<script src="path/to/nathiLib.min.js"></script>
```

## Usage

### In a Browser Environment

Include the nathiLib.bundle.js file from the dist folder in your HTML file:

```html
<script src="node_modules/nathi/dist/customLib.bundle.js"></script>
```

Create a new instance of the NathiLib class and start using its methods:

```javascript
const nathiLib = new NathiLib();

nathiLib.addClass(document.getElementById("example"), "example-class");
```

### In a Node.Js Environment

Import the CustomLib class and create a new instance:

```javascript
const NathiLib = require("nathi");

const nathiLib = new NathiLib();
```

Use the methods of the CustomLib class:

```javascript
nathiLib.addClass(document.getElementById("example"), "example-class");
```

## Functions

```javascript
createHTMLElement(tagName, attributes, textContent);
```

Create an HTML element with given attibutes and text content.

- `tagName` (string): The tag name of the element to create.
- `attributes` (object): An object containing the attributes and their values.
- `textContent` (string, optional): The text content for the element.

Returns the created HTML element.

Examle:

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

Example:

```javascript
  const list = document.getElementById("myList");
  const items = [
    nathiLib.createHTMLelement("li", {}, "Item 1")
    nathiLib.createHTMLelement("li", {}, "Item 2")
    nathiLib.createHTMLelement("li", {}, "Item 3")
  ];

  nathiLib.appendChildren(list, items);
```

## Example

Create a simple button that adds a new paragraph to a container:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NathiLib Example</title>
  </head>
  <body>
    <button id="addButton">Add paragraph</button>
    <div id="container"></div>
    <script src="path/to/nathiLib.js"></script>
    <script>
      const nathiLib = new NathiLib();

      const addButton = document.getElementById("addButton");
      const container = document.getElementById("container");

      addButton.addEventListener("click", () => {
        const paragraph = nathiLib.createHTMLElement("p", {}, "New paragraph");
        nathiLib.addClass(paragraph, "custom-class");
        container.appendChild(paragraph);
      });
    </script>
  </body>
</html>
```

This example creates a button that adds a new paragraph to a container element when clicked. The `nathiLib.createHTMLElement` function is used to create the paragraph element.

**This README provides a brief introduction to the library, installation instructions, usage examples, and a complete example using the library's functions. You can customize it further according to your needs.**
