import { Link } from "react-router-dom";
import { FaRegLightbulb } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";

import Layout from "../../../components/Layout";

//----------------------------------------------------------

const ReactCodesandbox = () => {
  return (
    <Layout>
      <article className="font-outfit text-whisper-white">
        <div className="flex flex-col justify-end text-justify pb-8 lg:pb-10 ">
          <h1 className="font-oswald uppercase font-bold text-3xl lg:text-4xl">
            Learning react
          </h1>
          <p className="lg:text-xl pt-2 text-zinc-400">
            These are React Bootcamp exercises in Udemy. <br />
            Course Title: The Modern React Bootcamp (Hooks, Context, NextJS,
            Router) by Colt Steele
          </p>
        </div>

        <div className="h-full pt-7 text-md text-whisper-white">
          <Link to="/my-playground" className="btn btn-outline mb-6">
            <IoArrowBackOutline />
            <button className="pl-3">Back</button>
          </Link>
          <div className="lg:w-4/5">
            <h1 className="font-bold text-2xl lg:text-3xl">
              React bootcamp course exercises
            </h1>
            <p className="text-justify py-5 text-zinc-400">
              This ReactJS course by Colt Steele is good, but because it is
              outdated, I encountered a lot of problems along the way. There are
              exercises in the course that I didn't include here. The topics
              will progress from basic state management to more complex state
              management.Some major exercise projects are on a separate page,
              which you can browse{" "}
              <Link
                to="/my-playground/react-bootcamp-projects"
                className="font-medium underline"
              >
                here.
              </Link>
            </p>
            <p className="text-justify pt-4 text-zinc-400">
              All exercises and course projects are written as class-based
              components. Since I want and need to practice the current practice
              of using hooks, I converted all of these codes. If you see some
              incorrect implementation of concepts, feel free to comment below
              or send me a message. 😄
            </p>
            <div className="flex flex-row font-bold text-bunker-gray-800 border-l-8 border-bunker-gray-100 bg-riptide-accent opacity-80 my-8 p-3 lg:p-6 rounded-lg">
              <FaRegLightbulb className="w-6 h-6" />
              <span className="justify-start pl-5 lg:pl-3">
                View this page on desktop or larger screens for better
                experience
              </span>
            </div>

            {/* one div per codesandbox */}
            <div className="py-12">
              <h3 className="font-bold text-2xl pb-6">Simple state handling</h3>
              <p className="text-justify text-zinc-400">
                This app lets you generate a random number and count the number
                of your guesses until you get the lucky number 7. If you can't
                see the code, slide the window from left to right by clicking
                and dragging the white bar on the left portion of the window. I
                added a reset button, which you can see in the resetNumber
                function. The reset button will only appear once you win.
              </p>
              <div className="py-6 text-zinc-400">
                <h4 className="font-semibold text-lg pb-2">Learnings:</h4>
                <ul className="list-disc list-inside pl-3">
                  <li>Use of React Hook useState</li>
                  <li>Use of components</li>
                  <li>Reset state</li>
                </ul>
              </div>
              <div className="mockup-window border border-riptide-accent bg-bunker-gray-600">
                <iframe
                  src="https://codesandbox.io/embed/simple-state-practice-ucliw8?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
                  className="w-full h-[500px] border-0 rounded-md overflow-hidden"
                  title="simple-state-practice"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
              </div>
            </div>

            {/* one div per codesandbox */}
            <div className="py-12">
              <h3 className="font-bold text-2xl pb-6">Changing Color Boxes</h3>
              <p className="text-justify text-zinc-400">
                Each box in this app changes color with every click. You can
                play and make it better by adding more colors. That will improve
                the color generation, I think. 😅 This simple exercise allowed
                me to understand clearly how amazing it is to have reusable
                components, one of the amazing features of React. Other lessons
                here include the assignment of unique keys to each reusable
                component. In order for react to not be confused in each
                component, keys are required and must be distinct. As an
                additional discovery from the original course lecture, I used
                UUID dependency to generate a unique key. Last but not least,
                this exercise allows us to see the use of the
                <code className="text-riptide-accent"> map()</code> method,
                which is a built-in function in Javascript.
              </p>
              <br />
              <i className="text-zinc-400">
                Open preview in new window for better look over in the entire
                output
              </i>
              <div className="py-6 text-zinc-400">
                <h4 className="font-semibold text-lg pb-2">Learnings:</h4>
                <ul className="list-disc list-inside pl-3">
                  <li>Use of React Hook useState</li>
                  <li>Reusable component in React</li>
                  <li>
                    Array iteration using{" "}
                    <code className="text-riptide-accent"> map()</code>
                  </li>
                  <li>
                    Helper components (separation of pure Javascript code)
                  </li>
                  <li>
                    <code className="text-riptide-accent">uuid() </code> package
                    for unique react component key
                  </li>
                </ul>
              </div>
              <div className="mockup-window border border-riptide-accent bg-bunker-gray-600">
                <iframe
                  src="https://codesandbox.io/embed/color-boxes-hooks-w2dmy9?fontsize=14&hidenavigation=1&theme=dark"
                  className="w-full h-[500px] border-0 rounded-md overflow-hidden"
                  title="color-boxes-hooks"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
              </div>
            </div>

            {/* one div per codesandbox */}
            <div className="py-12">
              <h3 className="font-bold text-2xl pb-6">Lotto Draw</h3>
              <p className="text-justify text-zinc-400">
                This one is similar to the color boxes exercise. It shows how
                convenient a reusable component is. It also uses the Javascript{" "}
                <code className="text-riptide-accent"> map()</code> method to
                generate lotto balls. Another great lesson here is the use of
                props. It allows us to control how many lottery balls to
                generate for each type of lottery. The lottery component
                requires the <i className="text-riptide-accent">maxNum</i> and
                <i className="text-riptide-accent">numBalls</i> parameters, as
                shown in the code below. This can change the maximum number to
                draw in each lottery and how many balls it needs to draw. We
                achieve the concept of a lotto draw by using reusable components
                and props. Of course, you can improve this by having better
                names instead of maxNum and numBalls. 😄
              </p>
              <br />
              <i className="text-zinc-400">
                Open preview in new window for better look over in the entire
                output
              </i>
              <div className="py-6 text-zinc-400">
                <h4 className="font-semibold text-lg pb-2">Learnings:</h4>
                <ul className="list-disc list-inside pl-3">
                  <li>Use of React Hook useState</li>
                  <li>Reusable component in React</li>
                  <li>
                    Array iteration using{" "}
                    <code className="text-riptide-accent"> map()</code>
                  </li>
                  <li>Props for handling state</li>
                  <li>
                    <code className="text-riptide-accent">uuid() </code> package
                    for unique react component key
                  </li>
                </ul>
              </div>
              <div className="mockup-window border border-riptide-accent bg-bunker-gray-600">
                <iframe
                  src="https://codesandbox.io/embed/lotto-draw-hooks-pimdmm?fontsize=14&hidenavigation=1&theme=dark"
                  className="w-full h-[500px] border-0 rounded-md overflow-hidden"
                  title="lotto-draw-hooks"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
              </div>
            </div>

            {/* one div per codesandbox */}
            <div className="py-12">
              <h3 className="font-bold text-2xl pb-6">Color Box Maker</h3>
              <p className="text-justify text-zinc-400">
                This card dealer API exercise is written in the class-based
                component. Unlike other exercises, I haven't completely
                converted this to a function-based component that uses React
                hooks. I still haven't figured out how to make the cards stack
                up in piles. Class-based components use a different state
                management method than function-based components, and
                class-based components cannot use React hooks. So, I think it's
                nice if you can also do this for yourself. You can open this in
                CodeSandbox and fork your own copy. But the main lesson here is
                the use of APIs to fetch data and use it in your application.
                This activity introduces the use of ComponentDidMount, which is
                also equivalent to useEffect in React hooks. With the help of
                Axios, we can fetch and retrieve data from the API, and this
                exercise uses the deckofcardsapi.{" "}
              </p>
              <br />
              <i className="text-zinc-400">
                Open preview in new window for better look over in the entire
                output
              </i>
              <div className="py-6 text-zinc-400">
                <h4 className="font-semibold text-lg pb-2">Learnings:</h4>
                <ul className="list-disc list-inside pl-3">
                  <li>Object as initial value to the state</li>
                  <li>
                    Improve and practice creating reusable components in React
                  </li>
                  <li>Form submission handling</li>
                  <li>Changing of state based on user input</li>
                </ul>
              </div>
              <div className="mockup-window border border-riptide-accent bg-bunker-gray-600">
                <iframe
                  src="https://codesandbox.io/embed/color-box-maker-hooks-l9vtcn?fontsize=14&hidenavigation=1&theme=dark"
                  className="w-full h-[500px] border-0 rounded-md overflow-hidden"
                  title="color-box-maker-hooks"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
              </div>
            </div>

            {/* one div per codesandbox */}
            <div className="py-12">
              <h3 className="font-bold text-2xl pb-6">Card Dealer API</h3>
              <p className="text-justify text-zinc-400">
                This card dealer api exercise is still in class-based component.
                Unlike other exercises, I haven't completely converted this to
                function-based component that uses React Hooks. I still haven't
                figure it out how to make the cards stack up in piles.
                Class-based components have different state management method
                compare to function-based and we can't use React Hooks in
                class-based components. So, I think it's nice if you can do this
                also for yourself. You can open this in codesandbox and fork
                your own copy. But the main learning here is the use of API to
                fetch data and use it in your application. This activity
                introduce the use of ComponentDidMount which is also equivalent
                to useEffect in React Hooks. With the help of axios, it allow
                use to fetch and get data from the api which is in this
                exercise, we use the deckofcardsapi.{" "}
              </p>
              <br />
              <i className="text-zinc-400">
                Open preview in new window for better look over in the entire
                output
              </i>
              <div className="py-6 text-zinc-400">
                <h4 className="font-semibold text-lg pb-2">Learnings:</h4>
                <ul className="list-disc list-inside pl-3">
                  <li>Use of ComponentDidMount to fetch data from an api</li>
                  <li>
                    Use of useEffect hooks to fetch data from an api (I explored
                    this one)
                  </li>
                  <li>Use of axios module</li>
                  <li>Use of transform - translate to animate the UI</li>
                </ul>
              </div>
              <div className="mockup-window border border-riptide-accent bg-bunker-gray-600">
                <iframe
                  src="https://codesandbox.io/embed/card-dealer-api-2y73sy?fontsize=14&hidenavigation=1&theme=dark"
                  className="w-full h-[500px] border-0 rounded-md overflow-hidden"
                  title="card-dealer-api"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
              </div>
            </div>

            {/* one div per codesandbox */}
            <div className="py-12">
              <h3 className="font-bold text-2xl pb-6">Dice Roller</h3>
              <p className="text-justify text-zinc-400">
                This exercise is a bit similar to Color Box Maker except for the
                input state handling part. This also uses the object as the
                state's initial value. One big lesson we can get out of this is
                that, when we use an object as an initial state, we always need
                to include other states in the object whenever there are changes
                to the state as a whole. We can achieve this by manually
                retyping all the declared initial state values or by using the
                spread operator to tell Javascript to make a copy of all initial
                states and change only the one that needs to be changed. Thanks
                to those developers who created the spread operator. 😎 But in a
                class-based component, setState accepts the only key-value pair
                in the initial state that needs to be changed and automatically
                brings all other elements into the state. If we do this in React
                Hooks, the undeclared initial state will be gone.{" "}
              </p>
              <br />
              <i className="text-zinc-400">
                Open preview in new window for better look over in the entire
                output
              </i>
              <div className="py-6 text-zinc-400">
                <h4 className="font-semibold text-lg pb-2">Learnings:</h4>
                <ul className="list-disc list-inside pl-3">
                  <li>How to handle object as initial state value</li>
                  <li>
                    Dynamic classes using template literals for interactive UI
                  </li>
                  <li>
                    Conditional rendering using ternary operator in Javascript
                  </li>
                </ul>
              </div>
              <div className="mockup-window border border-riptide-accent bg-bunker-gray-600">
                <iframe
                  src="https://codesandbox.io/embed/roll-dice-4ns2q1?fontsize=14&hidenavigation=1&theme=dark"
                  className="w-full h-[500px] border-0 rounded-md overflow-hidden"
                  title="roll-dice"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="text-whisper-white py-20">
            <h3 className="text-3xl lg:text-4xl font-bold">That's it!</h3>
            <p className="text-xl pt-3 text-zinc-400">
              I hope you enjoy browsing this simple exercises in react.
            </p>
          </div>

          <Link to="/my-playground" className="btn btn-outline mb-6">
            <IoArrowBackOutline />
            <button className="pl-3">Back</button>
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default ReactCodesandbox;
