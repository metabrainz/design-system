## Table of content

1. [Syntax](#syntax)
2. [Formatting](#formatting)
3. [Component Structure](#component-structure)
4. [Eslint](#eslint)


## Syntax

1. #### Naming Style **[⬆](#table-of-content)**

   * Always use `.jsx` | `.tsx` extensions.
   * Use UpperCamelCase as a components name.
   * Use lowerCamelCase for prop names.
   * It's recommended to use suffixes `Component` or `Container` for explicit definition of "dumb" and "smart" components: `UserProfileComponent` and `UserProfileContainer`.
   * Component name should be the same as the file name. This means that the use of `index` files is forbidden for components. It's easier to find components by filename rather than by folder name.
   * Component filenames should be in UpperCamelCase. It's allowed to use dots (`.`) to explicitly mention type of component: `Dashboard.component.tsx`, `UserProfile.container.tsx`.
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

1. #### Naming of component members **[⬆](#table-of-content)**

   * Methods that return React Node must start with `render` prefix: `renderTableFooter()`.
   * Event handlers must start with `on` prefix: `onSettingsPress()`.

1. #### Component members ordering **[⬆](#table-of-content)**

   * Members of class component should be in following order:
     1. `static` fields and methods
     1. `constructor`
     1. component lifecycle methods (`componentDidMount`, `shouldComponentUpdate`, etc)
     1. utility methods (not event handlers, nor render methods)
     1. event handlers
     1. render methods like `renderProfilePicture()`
     1. render


## ESLint

   * To enforce code consistency & avoid potential bugs, the usage of [ESLint](https://github.com/eslint/eslint) is strongly recommended.
   * It is recommended to use [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) package in order for ESLint to recognize React semantics.
   * When using TypeScript, using [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) is a necessity for ESLint and TypeScript working together.
