# About(*Under Construction*)

An ongoing [Trello](http://trello.com) client *thinked in* [React](https://facebook.github.io/).

I started this project to make some practice with React. At the moment it is partially imitating the Trello web client, but it could evolve in something else.

[Demo (0.2)](http://mgiulio.github.io/trello-react/dist) *BROKEN*

# v0.3: Flux Architecture

* HTML5 History API based routing, built on top of Flux actions.
* New Home page design, with public boards Flexbox grid.

# v0.2: In search of an architecture...

![sshot-02](sshots/sshot-02.jpg)

Now there is a welcome screen/page where it is possible to load some public boards.

But the main aim of this iteration was to introduce some application architecture on top of the React components.

In particular I made some experiments with app states and routing, using some great libraries like React Router, Router.js and Page.js.
So now the url showed in the browser location bar is different form the one showed in a board page, with support of the browser history navigation buttons.

However, this will change in 0.3, where I'm trying the Flux architecture.

![sshot-01](sshots/sshot-01.jpg)

# v0.1: Hello World!

![sshot-00](sshots/sshot-00.jpg)

# Description and Usage

In this first iteration the app just fetches and displays the data from an hardcoded (public)bord id, the 'Trello Development' board.

The full card view is not implemented yet, clicking on a card opens a new tab with the card page displayed by Trello.

No editing is allowed on the board.

# Current Supported User Agents

* Tested on Google Chrome 44
* Don't work on IE

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
