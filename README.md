# Frontend Coding Challenge
Build a simple React application (preferably using TypeScript) with a home page including the hero section as below and following the best practices in regards to the code structure, CSS, API integration and setting the application up for scale.

## Solution
This solution is developed using React, Typescript and Tailwind CSS. To implement the solution I have chosen tailwind css because it is a utility-first framework so it doesn't require the developer to to write custom CSS to style the application. It allows to define styles in a config file and to use them as css classes. If anything related to design has to be changed or added, it can be easily done in the `tailwind.config.js` file.

To document the components, I have used Storybook. Using storybook the components can be viewed and altered in isolation from the whole application.
### Steps to run the app

Run the following command to install the dependencies
```
npm install
```

Run the following command to build the styles
```
npm run build:styles
```

Run the following command to run the application
```
npm start
```

Run the following command to view components using storybook
```
npm run storybook
```

Run the following command to check for linting errors
```
npm run lint
```

Run the following command to fix linting errors
```
npm run lint:fix
```