# react-babel-jest
project for testing ES6, redux, react


This a lightweightp project for testing ES6, redux, react
without create-react-app

There are steps to install the project:

1. install babel enviroument

yarn init

yarn add @babel/core --dev
yarn add @babel/cli --dev
yarn add @babel/node --dev
yarn add @babel/preset-env --dev
yarn add @babel/preset-react --dev

Some scripts are from book "ES6 for Humans " 
Deepak Grover Hanu Prateek Kunduru
in directory src/ES6/

yarn babel-node src/ES6/h01_Variable_Declarations.js

2. install jest enviroument

yarn add jest --dev
yarn add babel-jest --dev

Some scripts are from site
https://jestjs.io/docs/en/getting-started
in src/Test/__tests__

yarn test Arrays.test
yarn test sum.test

to run jest from command linr you can install it globally

yarn global add jest

jest sum.test

3. add JS React Redux tests

yarn add react-test-renderer --dev
yarn add regenerator-runtime --dev

yarn add react
yarn add react-redux
yarn add react-router-dom

you should change file
.babelrc :
{
  "presets": [
    "@babel/preset-env",
	"@babel/preset-react"
  ]
}

code for testing I borrow from book
 "Redux Quick Start Guide" 
by James Lee Tao Wei Suresh Kumar Mukhiya
in /app

yarn test Header-test

Every step is commit in git


