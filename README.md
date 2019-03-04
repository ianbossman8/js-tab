# Clientside Tabs Challenge

Thanks for your interest in applying for the Client Side Developer role at the Guardian. 

We’d like you to complete a coding task to demonstrate your coding approach, how you structure a solution and what you can do when you are allowed to be creative.

We’ve set the deadline for this exercise at **two hours**. We’re interested in how you would start building a production-ready feature. Two hours may not be long enough to finish. 

After submitting your code, you will be invited to our offices to review your choices, what you prioritised and the next steps you’d take. Your code will be **the starting point for a conversation**, and it will be helpful if you could briefly highlight reasons for  your architectural choices in a README in your repo.

## The rules

When completing this challenge, we encourage you to use vanilla JavaScript, HTML and CSS. You are free to use appropriate modern JavaScript libraries, build tooling and boilerplates if you prefer. 

However, please don't use:

- the Angular framework
- any CSS framework such as Bootstrap or Material Design

These frameworks make it difficult for us to assess your code fairly.

## The exercise

Inside this repo is an incomplete **tabbed component**. We'd like you to update it to meet the requirements listed below. 

You should implement a **tabbed component** that looks similar to the Guardian’s most recent content widget. You’ve no doubt seen one before, but just to be clear, here’s something similar to what you're aiming for:

![Screenshot of a tabbed component](/tabbed-component.png)

The component will be a numbered listing of the most recent Guardian content chosen from three sections of the site: UK news, Football and Travel. Each of these sections should be represented by a tab.

You should fetch this data asynchronously from our [Content API](https://open-platform.theguardian.com/explore/). **Please do this on the client-side.** Your solution should run in the browser alone with no runtime server-side requirements (excluding any tooling needed to build your code).

## Considerations

At the Guardian we try to build things to be lightweight, accessible, and usable across browsers, devices and network conditions. 

During implemetation, please choose 2 or 3 of the below considerations to focus on. Let us know which ones you have chosen in your repo's README. We will discuss all 5 considerations at the review stage.

### Accessibility

A great deal of web content can be made accessible simply by using semantically correct HTML elements and role attributes. We'd like you to ensure the component is accessible for our readers that rely on screen reading technology or keyboard navigation to access our content.

### Browser support

Our site uses modern web standards to provide the best possible reading experience for our visitors. Although we aim to be readable on all possible devices and browsers, not all are capable of running the full set of features. We'd like you to make sure your application works on older browsers as well as the latest browsers. Our [recommended browser list](https://www.theguardian.com/help/recommended-browsers) states the browsers we currently support.

### No JavaScript

We can't assume our JavaScript will run for all our readers, for example some may not run Javascript for accessibility reasons and others may be accessing our site in constrained environments in which our JavaScript cannot run. We'd like you to make sure your application offers a meaningful experience when JavaScript is unavailable.

### Test coverage

A good suite of tests for your code can give you and your colleagues confidence that no bugs have been introduced when refactoring or adding new features. We'd like you to write tests for your code that can be easily run by anyone working on it.

### Reusability

We'd like you to consider how your code could be recomposable into new solutions whilst retaining its internal implementation details.
