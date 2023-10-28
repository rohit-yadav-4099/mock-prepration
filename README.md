 #  .....  Day-1  .....
 ## Q.- What is SPA?
 Ans-
 A Single Page Application (SPA) is a web application that is designed to be displayed as a single, static page.
 This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring.
 ## Q.- What is Virtual DOM?
 Ans-
 React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document. 

 ## Q.- What is difference between class and functional component.
 Ans-
 |functional Component|class Component|
 |----|----|
 |functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX)|class component requires you to extend from React. Component and create a render function that returns a React element.|
 |in functional Component no used render method.|in class Component used render() method.|
 |it is run from top to bottom and once the function is returned it can't be kept alive.|The class component is instantiated and different life cycle method is kept alive and is run and invoked depending on the phase of the class component.|
 |Functional Component is also known as Stateless component as they simply accept data and display them in some from, they are mainly responsible for rendering UI.|Also known as Stateful components because they implement logic and state.|
 |React lifecycle methods (for example, componentDidMount) cannot be used in functional components|React lifecycle methods can be used inside class components (for example, componentDidMount).|
 |Hooks can be easily used in functional components to make them Stateful.

Example:

const [name,SetName]= React.useState(' ')|It requires different syntax inside a class component to implement hooks.

Example:

constructor(props) {
   super(props);
   this.state = {name: ' '}
}|
|Constructors are not used.|Constructor is used as it needs to store state.|

## Q.- What is package.json?
Ans-
package.json is used to store the metadata associated with the project as well as to store the list of dependency packages. In order to add dependency packages to your projects, you need to create package.json file. The file makes it easy for others to manage and install the packages associated with the project.

A package.json file:

-lists the packages your project depends on
-specifies versions of a package that your project can use.
-makes your build reproducible, and therefore easier to share with other developers.

## Q.- What does mean by state and its use in react?
Ans-
The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.
-A state can be modified based on user action or network changes
-Every time the state of an object changes, React re-renders the component to the browser
-The state object is initialized in the constructor
-The state object can store multiple properties
-this.setState() is used to change the value of the state object
-setState() function performs a shallow merge between the new and the previous state.

## Q.- What is JSX and why do we use it instead of js?
Ans-
JS is simply a scripting language, adding functionality into your website. JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript. Both JS and JSX are interchangeable but JSX makes the code easier to understand for users.

JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
JSX converts HTML tags into react elements.

## Q.- What is the Difference between react and react native? Which one is library or framework?
Ans-
|react|react native|
|----|----|
|React is known as ReactJs, which is a JavaScript library to build single-page web applications.| React Native is a React JS-based framework to design mobile apps|
|It is used for developing web applications.|It is used for developing mobile applications.|
|	It can be executed on all platforms.|It is not platform independent. It takes more effort to be executed on all platforms.|
|	It uses a JavaScript library and CSS for animations.|It comes with built-in animation libraries.|
|	It uses React-router for navigating web pages.|It has built-in Navigator library for navigating mobile applications.|
|It uses HTML tags.|	It does not use HTML tags.|
|It provides high security.|It provides low security in comparison to ReactJS.|
|In this, the Virtual DOM renders the browser code|In this, Native uses its API to render code for mobile applications.|

## Q.- Difference b/w Stateful and stateless Component?
Ans-
|Stateful|stateless|
|----|----|
|A component that manages the state in class-based with state or functional with useState.|A component that has no internal state management in it.|
|In some component, the data keeps changing, for example, watching the cricket score etc.|In some component, the data remains the same, for example, showing the static data.|
|In most of the cases, the class-based components extend react component.|Function components are simply functions that receive the props and return the JSX code.|
|Stateful components can use react life cycle hooks|Stateless components can not use the react life cycle hooks|
|In stateful components it good to use the this instance|Here need not to use this instance, they just receive the props as an argument|

## Q.- What do you know about NPM?
Ans-
The name npm (Node Package Manager) stems from when npm first was created as a package manager for Node.js.
All npm packages are defined in files called package.json.
npm can manage dependencies.
npm can (in one command line) install all the dependencies of a project.
Dependencies are also defined in package.json.
Open-source developers use npm to share software.
npm is the world's largest Software Registry.
The registry contains over 800,000 code packages.

## Q.- Do you prefer function-based or class component and why ?
Ans-
I do prefer the function-based component because -
-Simplicity: Functional components are simpler and easier to understand than class components.
-Performance: Functional components are more performant than class components.
-Easier to test: Functional components are easier to test than class components.
-Easier to reuse: Functional components are easier to reuse than class components.
-Easier to reason about Functional components are easier to reason about than class components.
-Hooks: Functional components can use the React hooks.

 ## Q.=>  H/W-  Difference b/w Props and State? 
    Ans -  
| Props | State|
|----|----|
|Props is used to send the Data is one component to another component | State is used to Data is Passed within the component on |
|Props is Immutable (can't be modified).| State is mutable (can be modified).|
|Props are read-only|State is the both read and write|


#     .....  Day-2  .....

## Q. - What is an event in react?
Ans - 
Event is an action that could be triggered as a result of the user action or system generated event. 
React can perform actions based on user events. React has the same events as HTML: click, change, mouseover etc.


-Some common events in React:
- onClick: when the user clicks an element
- onChange: when user changes the value of input field.
- onSubmit: when the user submit the Form.
- onKeyPress: When the user press the any key on the mouse.
- onMouseOver: when the user moves the mouse curser over an element
- onMouseOut: when the user moves curser away from element.

## Q. - How do you pass data from parent to child.
Ans- 
Using Class Components
When users pass the data from parent to child using the class components, they can access inside the child component using ‘this.props.property_name‘.

#### Steps - 
-Embed the child component to the parent component.
-Pass the data variable (props) with an assigned value to the child component as an argument while embedding it to the parent component.
-If a user wants to pass multiple data variables (props), all variable names should be unique.
-In the child component, access the data variable value using ‘this.props.variable_name’.

## Q. - What is the package name you are using for routing
Ans-
Package name React-Router-dom for using routing.

 

## Q. - What is Lazy loading in react?
    Ans -  Lazy loading is a technique for waiting to load certain parts of a webpage — especially images — until they are needed.
    Lazy Loading in React can be implemented with the help of the built-in function `React. lazy()`. This is also known as code splitting,.
####   Component used in lazy loading-
-Suspense
-lazy
  import{Suspense,lazy} from 'react'

## Q.- Difference between Axios and fetch.
Ans-
|Axios|fetch|
|----|----|
|Axios is a third party library|featch is totally Java Script method|
|Axios Automatically transfer data.|Have to manually transform data|
|Has to be compiled|can be read directly by browsers|
|Need to install externally|No need to install|

# ..... Day-3 .....

## Q.- What is Props Drilling Concept ?What is State Uplifting ?
Ans-
#### Props Drilling-
Prop drilling occurs when a parent component passes data down to its children and then those children pass the same data down to their own children. This process can continue indefinitely.
Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.
Prop drilling is also known as "props passing" .is a common issue in React application.
#### State Uplifting-
Normaly send the data parent to child if any way send the data child to parent then concept of state Uplifting for send the data child to parent.

## Q.- What is Context api?
Ans-
The Context API is a React structure that allows you to share specific data from all levels of your application and aids in solving prop-drilling. React Hooks are functions that serve as a modular replacement for state and lifecycle methods written in functional components.

## Q.- What is UseState Hook ?(Implementation)
Ans-
The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component.
State generally refers to data or properties that need to be tracking in an application.
#### Syntax-
const [state, setState] = useState(initialstate)

## Q.- What is useEffect Hook ?(Implementation)
Ans-
-The useEffect hook in React is use to handle the side effects in React such as fetching data, and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering
-The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
By using this Hook, you tell React that your component needs to do something after render.

## Q.- clean up in useEffect?
Ans-
React’s useEffect cleanup function saves applications from unwanted behaviors like memory leaks by cleaning up effects. In doing so, we can optimize our application’s performance.

## Q.- Do you know about SEO ? Is it true that react js supports SEO support
Ans-
Search Engine Optimization (SEO) helps in improving the rank of a website in search engines. The search engines have algorithms designed for them to get the most desirable results from the World Wide Web (WWW).





