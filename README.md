# About(*Under Construction*)

An ongoing [Trello](http://trello.com) (partial)clone written in React.

![sshot-00](sshot-00.jpg)

# Description and Usage

In this first iteration the app just loads and displays the 'Trello Development' board.

The full card view is not implemented yet, clicking on a card opens a new tab with the card page displayed by Trello.

No editing is allowed on the board.

# Supported User Agents

Modern browsers

# Implementation Notes

## JavaScript

### Trello API

Trello provides a Js wrapper for its API but at the moment I have not used it yet, to make some practice with the raw API.
The trelloAPI object implements its loadBoard() method with the Fetch API.

### React

Components:

### ES6 Features

**Promises**
Promises are returned by the trelloAPI object asynchronous methods.

**Arrow functions**
Used in some promise handlers and mainly to easily bind methods in React components.

## Design

It's a almost a copy of original trello layout, but more visual weight is given to the card titles.

In this early phase I adopted a neutral grayscale skin.

The code to load and display the board background image is implemented but currently disabled to avoid visual distractions.

Temporary icons are from the Genericons package.

## CSS

Use of Flexbox...

About the implementation of the scrolling lists
   The js hack

Spinner

## svg

SVG is used to implement the icon system, with the inline sprite techinque.
No ajax load

## Build

The build process is under development.

Currently Browserify with the Reactify transform is used to transpile JSX and ES6 features and to concat all the modules in bundle.js

CSS is (post)processed with PostCSS and its plugins.

A custom Node.js script somewhat glues all together.

# What's Next

More o less, in approximate order:

* Simple homemade routing
* Loading of a board provided by the User
* Routing with React Router
* ...
