# Nathi JavaScript Library

A lightweight custom JavaScript library to create and manipulate HTML elements.

## Installation

Download the `nathiLib.js` (or `nathiLib.min.js` for the minified version) file and include it in your HTML file:

```html
<!-- Development version -->
<script src="path/to/nathiLib.js"></script>

<!-- Minified version -->
<script src="path/to/nathiLib.min.js"></script>
```

## Usage

Create an instance of the library:

```javascript
const nathiLib = new NathiLib();
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
