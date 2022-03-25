## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

# Sign up / sign in page

## HTML setup

-   Sign up
    -   form: username input, password input and button
-   Sign in
    -   form: username input, password input and button

## Events

### Login / sign in

-   Once the user hits submit on the form . . .
-   get the username and password from the form (`new FormData(form)`)
-   "log in the user"
    -   consult the supabase docs to find:

```js
const response = await client.auth.signIn({
    email: 'example@email.com',
    password: 'example-password',
});
```

-   redirect the user to the protected page with their data

### Sign up

-   Once the user hits submit on the form . . .
-   get the username and password from the form (`new FormData(form)`)
-   "log in the user"
    -   consult the supabase docs to find:

```js
const response = await client.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
});
```

-   redirect the user to the protected page with their data

## Polls Page

### HTML Setup

-   Form for our new poll
-   Buttons to add and subtract votes
-   A div to inject current poll into
-   A div to inject past polls into

### Event

-   on load,
    -   go fetch all this user's past polls
    -   display them
-   On click vote
    -   increment the state of the vote for that option,
    -   then display the change
-   On submit add question and options button
    -   grab the DOM for the current poll, then inject the question and options into those DOM elements
-   On click of Finish Poll
    -   Take the current poll state and add it to past polls IN SUPABASE!!!
    -   Re-fetch the polls from supabase and redisplay the list (clear the list in the DOM, render, and append)

![](./assets/supa-rls-1.png)
![](./assets/supa-rls-2.png)
