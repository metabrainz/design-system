## Table of content

1. [Syntax](#syntax)
2. [Formatting](#formatting)
3. [Component Structure](#component-structure)
4. [Eslint](#eslint)


## Syntax

1. #### Naming Style **[⬆](#table-of-content)**

   * Always use the `.js` extension.
   * Use UpperCamelCase as a components name.
   * Use lowerCamelCase for prop names.
   * Component name should be the same as the file name. This means that the use of `index` files is forbidden for components. It's easier to find components by filename rather than by folder name.
   * Component filenames should be in UpperCamelCase. It's allowed to use dots (`.`) to explicitly mention type of component: `Dashboard.component.js`.
   * Props and state interface definitions shouldn't be prefixed with `I`. Use UpperCamelCase instead.
   * Exported props types should have a suffix `Props`: `ProgressBarProps`. Not exported props and state interfaces recommended naming `Props` and `State` respectively.   

## Formatting

1. #### Horizontal spacing and indentation **[⬆](#table-of-content)**

   * Each nested component increases indentation by ** 2 ** spaces relative to the parent component.
   * There is no space after opening curly brace (`{`) and before closing curly brace (`}`) when wrapping JS expression in JSX:
   ```tsx
   <Component user={someUser} />
   
   {isLoading && <Loader />}
   ```
   * Before self-closing `/>` tag should be a single space.

1. #### Line breaks **[⬆](#table-of-content)**

   * Component with a single prop without children should take a single line.
   * Component with more than one prop or with children must be multiline
     * Each prop should start from the new line
     * Children should start from the new line
     * Closing bracket of the opening tag `>` & self-closing `/>` tag should be placed on the new line:
       ```tsx
       <Button
         size='small'
         onPress={onPress}
       >
         {buttonText}
       </Button>

       <UserProfile
         name='Boris'
         lastName='Blade' 
       />
       ```
   * Both single line & multiline JSX are wrapped in parentheses. After opening parenthesis `(` and before closing `)` should be a line break.
     ```tsx
     return (
       <CustomComponent 
         prop1={value1}
         prop2={value2}
       />
     );
     ```
     ```tsx
     const MyComponent = (props) => (
       <UserProfile {...props} />
     );
     ```

1. #### Props **[⬆](#table-of-content)**

   * Use single quotes `'` for jsx attributes.
   * Do not use braces `{}` for string literals unless it's JS expression.
   * Use explicit value for boolean props even if default value is `true`. 
     ```tsx
     <Component enabled={true} />
     ```
   * Do not inline object or array creation inside jsx. Prepare the data before `return` statement.
   * Inline styles are forbidden. Use `Stylesheet.create` or its analogue.
   * Destruct props and state before usage.
   

## Component Structure

The first and recommended component type in React is functional components. A functional component is basically a JavaScript/ES6 function that returns a React element (JSX). According to React's official docs, the function below is a valid functional component:

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
Alternatively, you can also create a functional component with the arrow function definition:

    const Welcome = (props) => { 
      return <h1>Hello, {props.name}</h1>; 
    }
