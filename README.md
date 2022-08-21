## Project: Memory card game 
The game is simple. Don't select the same card twice. The cards will shuffle each time you select one. Increase your score by selecting a different card each time. 

###### View this app live [here](https://bshowen.github.io/harry-potter-memory-cards/)
## 🙌 Project goal: Learn react hooks   
Hooks are becoming more and more popular. I created this app to familiarize myself with how react hooks work. I this app I used useState, useEffect, and a few of my own custom hooks. 

# 🧠 What I learned in this project
- I learned how to use the useState() hook. 
- I learned how to use the useEffect() hook. 
  - `useEffect(callback) //This will run on every render`
  - `useEffect(callback, []) //This will run on first render and unmount`
  - `useEffect(callback, [dependency1, dependency2, ..., dependencyN]) //This will run when any of the dependencies change`
  - Return a callback from `useEffect()` and react will call it each time the component unmounts. This is useful for component cleanup and preventing memory leaks by removing timers, unsubscribing from feeds, etc. 
- I (think I) learned how to use the useCallback() hook 😬
- I learned how to create my own hooks. 

# 📝 Notes for myself
Learning hooks was very difficult. I am used to coding and thinking in an object oriented fashion with classes and methods. For me to use react hooks I had to move away from thinking about components as objects. I had to thinki about how I want my application to display data and respond to data changes. Think about **what** you want your component to do when the data changes. 

This video was a great help in understanding React Hooks. [React Conf 2018 ](https://youtu.be/dpw9EHDh2bM?t=1069)