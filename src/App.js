import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          <img src={logo} className="App-logo" alt="logo" />{" "}
          <img src={logo} className="App-logo" alt="logo" />{" "}
        </span>
        <span class="textRot">
          <p class="hello">React</p>
          <p class="hello2">Angular</p>
        </span>
      </header>
      <div className="Content">
        <body class="grid-container">
          <section class="grid-item grid-item-1">
            <h1>React</h1>
            <br></br>
            <p class="reactIntro">
              React is developed and maintained by Facebook and used in their
              products, including Instagram and WhatsApp. It has been around for
              around since 2013, so it’s not exactly new. It’s also one of the
              most popular projects on GitHub, with more than 150,000 stars at
              the time of writing. Some of the other notable companies using
              React are Airbnb, Uber, Netflix, Dropbox, and Atlassian. Sounds
              good to me.
            </p>
            <p>
              React is a framework used in both web and mobile development.
              However, for mobile development, it needs to be incorporated with
              Cordova. Moreover, for mobile development, there is an additional
              framework – React Native. React can be used to build both
              single-page and multiple-page web applications.
            </p>
            <p>
              React is a framework for UI development, so apps written with
              React need additional libraries to be used. For instance, Redux,
              React Router, or Helmet optimize the processes of state
              management, routing, and interaction with the API. Such functions
              as data binding, component-based routing, project generation, form
              validation, or dependency injection require additional modules or
              libraries to be installed.
            </p>
            <p>
              React is minimalistic: no dependency injection, no classic
              templates, no overly complicated features. The framework will be
              quite simple to understand if you already know JavaScript well.
              However, it takes quite some time to learn how to set up a project
              because there is no predefined project structure. You also need to
              learn the Redux library, which is used in more than half of React
              applications for state management. Constant framework updates also
              require additional effort from the developer. Furthermore, there
              are quite a lot of best practices in React, which you will need to
              learn to do things right.
            </p>
            <h2>Performance :</h2>
            React’s performance is greatly improved with the introduction of the
            virtual DOM. Since all virtual DOM trees are lightweight and built
            on server, the load on browser is reduced. Furthermore, since the
            data-binding process is unidirectional, bindings are not assigned
            watchers as in the case of Angular. Respectively, no additional
            workload is created. React uses a virtual Document Object Model
            (DOM), which enables easily implementing minor data changes in one
            element without updating the structure of the entire tree. The
            framework creates an in-memory cache of data structure, computes the
            changes, and efficiently updates the DOM displayed in the browser.
            This way, the entire page seems to be rendered on each change,
            whereas actually, the libraries render changed subcomponents only.
            The React team is constantly improving Fiber – a mechanism aimed at
            boosting the productivity of change rendering.
          </section>
          <section class="grid-item grid-item-2">
            <h1>Angular</h1>
            <br></br>
            <p class="angularIntro">
              Angular has been around since 2016, making it slightly younger
              than React, but it’s also not a new kid on the block. It’s
              maintained by Google and, as mentioned by Igor Minar, even in 2018
              was used in more than 600 hundred applications in Google such as
              Firebase Console, Google Analytics, Google Express, Google Cloud
              Platform and more. Outside of Google, Angular is used by Forbes,
              Upwork, VMWare, and others.
            </p>
            <p>
              Angular is suitable for both web and mobile development. In mobile
              development, however, a great share of work is done by Ionic.
              Furthermore, similarly to React, Angular has an additional mobile
              development framework. The counterpart of React Native is
              NativeScript. Angular can also be used for both single- and
              multiple-page web apps.
            </p>
            <p>
              Angular is a full-fledged framework for software development,
              which usually does not require additional libraries. All the
              above-mentioned functions – data binding, component-based routing,
              project generation, form validation, and dependency injection –
              can be implemented with the means of Angular package.
            </p>
            <p>
              Angular itself is a huge library, and learning all the concepts
              associated with it will take much more time than in the case of
              React. Angular is more complex to understand, there is a lot of
              unnecessary syntax, and component management is intricate. Some
              complicated features are embedded into the framework core, which
              means that the developer cannot avoid learning and using them.
              Moreover, there are a lot of ways of solving a single issue.
              Although TypeScript closely resembles JavaScript, it also takes
              some time to learn. Since the framework is constantly updated, the
              developer needs to put some extra learning effort. Google provides
              the long-term support of the framework and constantly improves it.
              However, the updates are so fast that the documentation often
              falls behind. Angular is used by such companies as McDonald’s,
              Apple, Nike, and Microsoft.
            </p>
            <h2>Performance :</h2>
            Angular performs worse, especially in the case of complex and
            dynamic web apps. The performance of Angular apps is negatively
            affected by bidirectional data-binding. Each binding is assigned a
            watcher to track changes, and each loop continues until all the
            watchers and associated values are checked. Because of this, the
            more bindings you have, the more watchers are created, and the more
            cumbersome the process becomes. However, the most recent update of
            Angular has greatly improved its performance, and it does not lose
            to React anymore. Moreover, the size of an Angular application is
            slightly smaller than the size of a React app. Angular uses a real
            DOM, which updates the entire tree structure even when the changes
            have taken place in a single element. The real DOM is considered to
            be slower and less effective than the virtual DOM. To compensate for
            this disadvantage, Angular uses change detection to identify
            components that need to be altered.
          </section>
        </body>
      </div>

      <div className="survey">
        <footer>
          <h3>Which one do you prefer?!</h3>
          <p>Login to participate in our survey now !</p>
          <span>
            {" "}
            <img src={logo} className="App-logo-2" alt="logo" />{" "}
            <img src={logo} className="App-logo-2" alt="logo" />{" "}
          </span>
          <form class="form-inline">
            <div class="form-group mb-2">
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="myemail@exp.com"
              ></input>
            </div>
            <div class="form-group mx-sm-3 mb-2">
              <label for="inputPassword2" class="sr-only">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              ></input>
            </div>
            <button type="submit" class="btn btn-primary mb-2">
              Confirm identity
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
}

export default App;
