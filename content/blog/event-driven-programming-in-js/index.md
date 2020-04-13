---
title: Event-driven Programming in JavaScript
slug: event-driven-programming-in-js
---
# Event-driven Programming in JavaScript

## Introduction
JavaScript is primarily an event-driven language. It was originally developed to add reactivity and dynamic functionality to static HTML websites. JavaScript accomplishes this reactivity by using event listeners.
## What is an event listener?
An event listener is generally a bit of code that receives events. The event listener is associated with one or more types of events, and when the associated event is observed the event listener runs its code.
## What is an event?
An event is a signal that an HTML element or other piece of code generates. Events are generally generated when something happens, like the user clicks on a button, an asynchronous HTTP request completes in the background, or a script running in the background finishes running.

An event often contains some additional data about the event itself, like the HTML element that was clicked or some data that was returned when the event happened.

### Types of events

There are many kinds of events - as many as developers want to develop! JavaScript uses a variety of events to enable developers to fine tune when their code should run. Each type of event is a point that code can use to do whatever work needs to be done in response to anything that happens in the application.

## Event-driven and asynchronous programming
Event-driven programming and asynchronous programming are different aspects of the same programming paradigm. Callbacks, promises, and async/await syntax are all ways to structure you code to be event-driven; in this case, the event is other code finishing. Event listeners, however, are a specific type of asynchronous programming for hooking up your JavaScript code to run when events outside of your code run.

## Examples
### Listening for HTTP events
The example snippet below creates a new XMLHttpRequest to make a GET HTTP request and do something with the response.
```
var request = new XMLHttpRequest();
request.open('GET', 'https://somedomain.com');
request.addEventListener("load", function(response){
    //Do things with the response when it finishes loading
});
request.send();
```
*XMLHttpRequest is admittedly an old-fashioned way of doing HTTP requests. It is better to use the new Fetch API in browsers or to use a third-party library to manage HTTP requests. However, XMLHttpRequest is an excellent example of a specific event listener setup.*
### Listening for a button click
The example snippet below uses an event listener to take an action when the user clicks on an HTML button.
```
const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = `Click count: ${event.detail}`;
});
```
*Credit to https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event for the example. That guide is a good resource for more information about the specific browser click event.*

#### Button clicks and frameworks

Many frameworks, like React, Angular, Vue, and Svelte, implement their own style of button click handling. These frameworks essentially integrate the event listener into the HTML element, and all that the framework needs is the function or code that should be called when the user clicks on the HTML element.