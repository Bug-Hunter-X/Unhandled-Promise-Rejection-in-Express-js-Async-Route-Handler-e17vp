# Unhandled Promise Rejection in Express.js Async Route Handler

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.

## Problem
The `bug.js` file contains an Express.js route handler that performs an asynchronous operation.  If the asynchronous operation throws an error, the error is not caught, leading to a silent failure or a crash in production.

## Solution
The `bugSolution.js` file shows the correct way to handle errors in asynchronous route handlers using `.catch()` or async/await with try...catch.