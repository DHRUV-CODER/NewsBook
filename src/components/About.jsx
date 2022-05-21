import React from "react";

export default function About() {
  return (
    <div className="container">
      <h1 id="newsbook">NewsBook</h1>
      <p>
        This App is made using <a target="_blank"  href="https://reactjs.org/">React</a> and{" "}
        <a target="_blank"  href="https://vitejs.dev/guide/">Vite cli</a>.
      </p>
      <h2 id="about">About</h2>
      <p>
        Originally made this app with class based components to get the idea of
        it , later shifted back to function based components. Main reasons of
        making this app were to get the gist of class based components and get
        to play with other feaures like <strong>Infinite Scroll Bar</strong> and{" "}
        <strong>Top loading Bar</strong> which are simple but adds flavour to
        the application. I aslo wanted to get Expirence of{" "}
        <a target="_blank"  href="https://mantine.dev/">Mantine component Based library</a> ,
        Similary to MUI , it provides lot of features and helps making the app
        presentable.The whole expirence was fun to work with.
      </p>
      <h3 id="__steps-to-run-the-application__">
        <strong>Steps to run the Application</strong>
      </h3>
      <ol>
        <li>
          <code>cd ./newsbook</code>
        </li>
        <li>
          <code>yarn</code>
        </li>
        <li>
          <code>yarn dev</code>
        </li>
      </ol>
      <blockquote>
        <ul>
          <li>
            <strong>
              Before Jumping to Step 3 You need to have an Api key from{" "}
              <a target="_blank"  href="https://newsapi.org/">News Api </a>
            </strong>{" "}
            , This app can only run on localhost as News Api has restrictions.
          </li>
          <li>
            After getting the <strong>api key</strong> , Create a new file{" "}
            <strong>
              <code>.env</code>
            </strong>{" "}
            in the root directory .
          </li>
          <li>
            In <code>.env</code> file , Create a Variable Named{" "}
            <code>VITE_NEWS_API_KEY</code> and put your key there.
            <code>.env</code> should look something like this :{" "}
            <code>VITE_NEWS_API_KEY=&quot;key&quot;</code> ,{" "}
            <strong>
              If you decide to change the name , Always put <code>VITE</code>{" "}
              infront of the variable so the frontend can access it.
            </strong>
          </li>
        </ul>
      </blockquote>
      <h1 id="to-do">To-do</h1>
      <ul>
        <li>
          Refactor the code in <code>./src/App.jsx</code> , Making an endpoint
          to avoid passing a lot of unnecessary components with different props
        </li>
        <li>Adding Exceptions </li>
      </ul>
    </div>
  );
}
