Pong-Game is a onepage fullstack website where you can play pong with players among other things such as 2FA Google, a Direct messaging, friends list, rooms, Dashboard, a Matchmaking system, a watch system and modifications to the pong game such as different gamemodes.

# Installed Libraries:
* `Material UI: `to use some components
* `Joy UI: `
* `Mui Style`
* `Redux: `to manage stats in the app
* `Formik: `to handle forms
* `Yup: `is a schema builder for runtime value parsing and validation.
* `Axios: `
* `socket.io-client: `
* `react-cookie: `
* `react-toastify: `
* `react-router-dom:`
* 
# CSS Styles && Tailwindcss:

`* flex justify-between`
    to justify items along the container’s main axis such that there is an equal amount of space between each item

`* @apply`
    This `directive` is useful when you need to write custom CSS (like to override the styles in a third-party library).

# CSS Styles && Material UI:

`* aria-label="logo" `
`*  sx={{flexGrow: 1}}`
    This property specifies how much of the remaining space in the flex container should be assigned to the item

`* <Stack> Component:`
    Stack is concerned with one-dimensional layouts, while Grid handles two-dimensional layouts. The default direction is column which stacks children vertically.


# TypeScript:
`* Spread syntax (...)`
Spread syntax (...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.



# React:
`* Reducer:`
Reducer function. The reducer is a pure function that accepts 2 parameters: the current state and an action object. Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.

# References:
* MUI :
    - https://mui.com/
* Making Http GET requests with Axios in TypeScript:
    - https://bobbyhadz.com/blog/typescript-http-request-axios
* redux: 
    - https://bluelight.co/blog/redux-toolkit-with-typescript
  
* Context:
    - https://blog.logrocket.com/how-to-use-react-context-typescript/
    - https://spencerpauly.com/tech/how-to-type-react-context-with-typescript/\

# Install Socket and Express project for SetupServer test:
```
npm init
npm i express socket.io
//  "rootDir": "./src", 
// "outDir": "./dist",      
npm i -D nodemon typescript ts-node @types/express @types/socket.io
// package json :
 "scripts": {
    "start": "node dist/server.js",
    "dev" : "nodemon src/server.ts",
    "build" : "tsc -p ."
  },
```

```
npm i --save @types/socket.io
```

# Generate Key of list:
npm install --save @types/shortid


