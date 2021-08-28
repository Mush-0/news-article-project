# Evaluate a new article

The web page simply takes in an URL and use "Meaning Sentiment Analysis" to evaluate the URL and return the results.

# How to start?

- You must sign in [Meaning Cloud](https://www.meaningcloud.com) and acquire API key.
- Put your key inside the .env folder in the form "API_KEY=<-your key is here->" without the quotation marks.
- Install all dependencies `npm install`.
- Run webpack in production mode using provided script `npm run build-prod` which will create the dist folder.
- Finally you can start the server `npm start`.

# Other available scripts

## Live express server (nodemon)

nodemon runs a live server that watch changes and restart the server when files change, which ends the need to restart the server after each change in code.<br>
You can run the nodemon server using the command `npm run server`.

## Live webpack server

Uses webpack-dev-server to make webpack watch changes in the files, the script also uses the --config webpack.dev.js flag to make the build more suitable for developing.<br>
You can run the webpack server using the command `npm run build-dev`

## Testing with Jest

Testing was done using Jest framework, adding additional tests if needed would be added inside `__test__` folder.
To start testing use `npm test` command.

# Service Worker

This webpage uses Workbox service worker to precache the files.

# Future todos:

- Add more tests with jest.

# Author

I`m enthusiastic rising web developer on my learning journey, i enjoy writing code, solving problems and eventually see my code working _perfectly_

# Found a bug/problem:

You can [add issue](https://github.com/Mush-0/news-article-project/issues) and i`ll be sure to fix as soon as possible

# Change log

29-Aug-2021: Modified README file to reflect the project in a better way.
