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



