## Table of content

1. [Syntax](#syntax)
2. [Component Structure](#component-structure)

## Syntax

1. #### Naming Style **[⬆](#table-of-content)**

   * Always use the `.js` extension.
   * Use UpperCamelCase as a components name.
   * Use lowerCamelCase for prop names.
   * Component name should be the same as the file name. This means that the use of `index` files is forbidden for components. It's easier to find components by filename rather than by folder name.
   * Component filenames should be in UpperCamelCase. It's allowed to use dots (`.`) to explicitly mention type of component: `Dashboard.component.js`.
   * Props and state interface definitions shouldn't be prefixed with `I`. Use UpperCamelCase instead.
   * Exported props types should have a suffix `Props`: `ProgressBarProps`. Not exported props and state interfaces recommended naming `Props` and `State` respectively.   

## Component Structure

The first and recommended component type in React is functional components. A functional component is basically a JavaScript/ES6 function that returns a React element (JSX). According to React's official docs, the function below is a valid functional component:

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
Alternatively, you can also create a functional component with the arrow function definition:

    const Welcome = (props) => { 
      return <h1>Hello, {props.name}</h1>; 
    }
