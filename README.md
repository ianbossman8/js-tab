# Clientside Tabs Challenge

## Setup

### Node

Before you get going make sure you have installed Node.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of Node on one machine.

### http-server

To run the challenge on your localhost you'll need to install the dependency `http-server` globally:

`npm install -g http-server`

Once you've installed this you can run the command `npm run start` and open `http://localhost:8000` in your browser.

## Instructions

Thanks for your interest in applying for the role. We’d like you to complete a coding task to see your coding approach, learn how you structure a solution and see what kind of things you can do when allowed to be creative.

We’ve set the deadline at two hours: we’re interested in how you would build a production-ready feature. Two hours may not be long enough to finish. Your code will be the starting point for a conversation about your choices, what you prioritised and any next-steps you’d take. Feel free to use comments or add a readme.

## The exercise

Inside this repo is an incomplete **tabbed component**. We'd like you to pick up this piece of work and update it so it meets the requirements listed below.

## Requirements

The requirements have been split into manadatory and optional groups. Please take time to read the requirements carefully. We'd like you to have a go at achieving the mandatory requirements and if you have the time you can then choose 2 optional requirements to focus on.

### Mandatory requirements

You should implement a **tabbed component** that looks similar to the Guardian’s most recent content widget. The component will be a numbered listing of the most recent Guardian content chosen from three sections of the site: UK news, Football and Travel. Each of these sections should be represented by a tab.

We’d like you to fetch this data asynchronously from our [Content API](https://open-platform.theguardian.com/explore/). Please do this on the client-side, your solution should run in the browser alone with no server-side requirements.

At the Guardian we try to build things to be lightweight, accessible, and usable across browsers, devices and network conditions. When working on your application you should therefore focus on:

- Keeping the application as lightweight as possible.
- Making it work across a range of device sizes.
- Using semantically correct HTML.

### Optional requirements

#### Accessibility

A great deal of web content can be made accessible just by making sure the correct HTML elements are used for the correct purpose at all times. We'd like you consider how the HTML can be used to ensure maximum accessibility for ours user's that rely on screen reading technology and/or keyboard navigation to access our content.

#### Browser support

Our site uses modern web standards to give the best possible reading experience for our visitors. Although we aim to be readable on all possible devices and browsers, not all are capable of running the full set of features. We'd like you to make sure the application works on older browsers as well as the latest browsers. Our [reccommended browser list](https://www.theguardian.com/help/recommended-browsers) states the browsers we currently support.

#### No JavaScript

We can't assume our JavaScript will run for all our users, for example some may  not run Javascript for accessibility reasons, others may be accessing our site in constrained environments in which our JavaScript cannot run. We'd like you to make sure your application offers a meaningful experience when JavaScript is unavailable.

#### Test coverage

A good suite of tests for your code can give you and your colleagues confidence that no bugs have been introduced when refactoring or adding new features. We'd like you to write tests for your code that can be easily run by anyone working on it.

#### Reusability

We'd like you to consider how your code code be recomposable into new solutions whilst retaining it's internal implementation details.