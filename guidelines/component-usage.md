## Table of content

1. [Syntax](#syntax)
2. [Component Structure](#component-structure)

## Syntax

1. #### Naming Style **[⬆](#table-of-content)**

   * Always use the `.js` extension.
   * Use UpperCamelCase for component names.
   * Use lowerCamelCase for prop names.
   * The component name should be the same as the file name. This means that the use of `index` files is forbidden for components. It's easier to find components by filename rather than by folder name.
   * Props and state interface definitions shouldn't be prefixed with `I`. Use UpperCamelCase instead.
   * Exported props or state types should have a descriptive name and a `Props` or `State` suffix: `ProgressBarProps`, `EntityDialogState`. Non-exported types are recommended to be named `Props` and `State` respectively. If more than one non-exported set of props is needed, give all but the main one a name matching their component.

## Component Structure

The first and recommended component type in React is functional components. A functional component is basically a JavaScript/ES6 function that returns a React element (JSX). According to React's official docs, the function below is a valid functional component:

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
Alternatively, you can also create a functional component with the arrow function definition:

    const Welcome = (props) => { 
      return <h1>Hello, {props.name}</h1>; 
    }
