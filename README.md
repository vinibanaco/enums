# Enums

Enums are just sets of possible values for something (usually an internal variable). They're
commonly written in a key-value format, so you can reference to the value by the name set by you.

## Why use enums?

The main reason why enums exists is to remove "random" values from code, values that hasn't a clear
explanation for why they are there.

At this point you could think "OK, it's just comment what is the meaning of this value and boom!
Problem solved", and you are right... but there are better and versatile ways to do that, ways that
you can reuse those values, for example, to check if the provided value is valid, or even take
advantage of your code editor intellisense.

Not convinced? Using enums you can **avoid redundances** and code repetition. Besides that, it's
really simple to implement and it has lots of benefits.

## Example

Do you know what key have to be pressed to call `doSomething()`?

```jsx
const onClick = (event) => {
  if (event.keyCode === 119) {
    doSomething();
  }
};
```

Well, if you know, congrats. Talking serious, some people may even know, but come on, you've better
things to do instead of memorize all key codes.

```jsx
// enums.js
export default {
  KEY_CODES: {
    F8: 119,
  },
};

// my-file.js
const onClick = (event) => {
  if (event.keyCode === KEY_CODES.F8) {
    doSomething();
  }
};
```

I think we all agree that the second example is way easier to understand than the first one.

Thanks for reading!

Found an error or have a suggestion? Submit a PR or talk to me on my socials:

LinkedIn: [/vinibanaco](https://www.linkedin.com/in/vinibanaco/)

Twitter: [@vinibanaco](https://twitter.com/vinibanaco)

Instagram: [@vinibanaco](https://www.instagram.com/vinibanaco)
