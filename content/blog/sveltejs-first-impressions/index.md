---
title: "Svelte: First Impressions"
slug: "svelte-first-impressions"
---
# Svelte: First Impressions
Svelte is a relatively new framework for writing dynamic user interfaces in JavaScript, HTML, and CSS. I first found out about Svelte from the [State of Javascript](https://stateofjs.com/) survey of JavaScript developers. It had received a surprisingly large share of JavaScript developers' interest and activity between the 2018 survey and the 2019 survey. I have been using Svelte for the last six months or so on personal and professional development projects, and it is by far my go-to choice now for JavaScript frontend development instead of React or Angular.

## What is Svelte?
Svelte is a JavaScript user interface framework like React, Angular, and Vue. It is designed to allow JavaScript developers to build modern, high-performance, dynamic web application interfaces more rapidly and easily than with React, Angular, Vue, or other we'll say first-generation JavaScript user interface frameworks and libraries. Svelte uses reusable components written with JavaScript, HTML, and CSS to build modular interfaces. Svelte uses a small bit of markup in HTML to add state management or event listeners to HTML elements; this is similar to React's JSX or Angular's own markup for component templates.

## Why use Svelte?
I was sold on Svelte when I was on a tight deadline for building a prototype interface for [OpenStack Horizon](https://docs.openstack.org/horizon/latest/). Horizon is the web UI for [OpenStack](https://openstack.org), the open source, enterprise private cloud project. I was able to build the same interface in Svelte in about one-fifth (1/5) the time I needed with Angular despite being new to Svelte and experienced with Angular, and the resulting interface was significantly fewer code overall.

### Ease of use

I started out building the interface using Angular 9. I have used Angular before in production to build the interface for an SaaS product to provide website performance testing as a service, and I have done work before with using Angular to build the interfaces inside of WordPress plugins. I did about 10 hours of work to get to a basic proof of concept when I ran into issues embedding the Angular application into an OpenStack Horizon plugin. I had issues getting [Django](https://www.djangoproject.com/), on which Horizon is built, to properly load all of the static files for the Angular application. Routing and navigation through Angular was also proving difficult to manage well with Horizon and Django.

I admit some of those issues probably were due to my unfamiliarity with Django and the special customizations Horizon makes to Django to enable easier development of interfaces using Horizon's standard components or Angular 1.x.

During this time I had been learning Svelte in my spare time since it seemed like a new noteworthy trend in JavaScript. Having struggled so much with Angular and Horizon, I decided to rebuild the interface again in Svelte because Svelte should be able to more easily integrate with Horizon. Each Horizon page would have its own Svelte application, and routing would be handled by Horizon's native navigation.

After a couple hours I had a fully working proof-of-concept with the same degree of functionality as the Angular application without having to build out all the rest of the Angular framework's requirements. I did not have to worry about implementing routing, services, separate components and controllers, modules for managing imports, HTTP requests, RxJS, observables and other pieces that are required to use Angular at a minimum. Most of these things either are not necessary or are provided by JavaScript or the browser's native built-in functionality. The resulting code was much shorter and more compact.

There are some caveats I admit for here. Angular could have proven to be the better tool for a larger, more complex application than a small custom dashboard in OpenStack Horizon. I also had figured out the basic logic and feel for the interface by the time I started using Svelte, which saves me time there. I also had some blockers that were making Angular more difficult to use than it would have been as a standalone application instead of an embedded interface.

### Svelte and React
Svelte's state management and variable binding is much simpler than React's. It was really nice not having to manually write updates to the component state and letting Svelte handle that for me. Svelte's component syntax and HTML markup are also simpler than React's. Writing plain HTML and CSS with a little bit of markup for dynamic values was much simpler than trying to write JSX templates. Svelte's syntax for iterating and for conditionally showing DOM elements are easier to use than the same kind of logic with React. Svelte's syntax is closer to Angular's in this case, except you do not need a special element like ng-container.

## Summing it all up
I am a big fan of the ease of development with Svelte and the performance of the resulting JavaScript user interfaces. It has required a bit of a shift in architecting code and applications coming from a single-page application architecture with React or Angular. Svelte does not have, for example, a router built in, but there are 3rd-party libraries to provide routing. Svelte also has a growing ecosystem of tools for things like Material UI components, server-side rendering, code bundling, and other things provided by the React or Angular ecosystems.

I look forward to continuing to use Svelte and other tools (like Sapper) for my personal development projects, and I will certainly advocate for its adoption on professional development projects. Have you tried out Svelte or another newer or less common JavaScript framework? Leave a comment and share your story!
