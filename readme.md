
# NewsBook

This App is made using [React](https://reactjs.org/) and [Vite cli](https://vitejs.dev/guide/).

![Capture](https://user-images.githubusercontent.com/60794694/169644304-c475a9f9-4c9c-4769-9e86-4c19babbdad4.JPG)

## About

Originally made this app with class based components to get the idea of it , later shifted back to function based components. Main reasons of making this app were to get the gist of class based components and get to play with other feaures like **Infinite Scroll Bar** and **Top loading Bar** which are simple but adds flavour to the application. I aslo wanted to get Expirence of [Mantine component Based library](https://mantine.dev/) , Similary to MUI , it provides lot of features and helps making the app presentable.The whole expirence was fun to work with.

### __Steps to run the Application__

 1. `git clone https://github.com/DHRUV-CODER/NewsBook.git` ; `cd ./NewsBook`
 2. `yarn`
 3. `yarn dev`

> -  **Before Jumping to Step 3 You need to have an Api key from [News Api ](https://newsapi.org/)**  , This app can only run on localhost as News Api has restrictions.
> - After getting the **api key** , Create a new file **`.env`** in the root directory .
> - In `.env` file , Create a Variable Named  `VITE_NEWS_API_KEY` and put your key there.
> `.env` should look something like this : `VITE_NEWS_API_KEY="key"` , **If you decide to change the name , Always put `VITE` infront of the variable so the frontend can access it.**

# To-do
- Refactor the code in `./src/App.jsx` , Making an endpoint to avoid passing a lot of unnecessary components with different props
- Adding Exceptions 
