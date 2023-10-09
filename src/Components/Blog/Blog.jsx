import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <h2 className='font-bold text-2xl'>When should you use context API?</h2>
            <p> Use the Context API in React when you need to pass data to components without manually passing props through every level.</p>
            <h2 className='font-bold text-2xl'>What is a custom hook?</h2>
            <p>A custom hook in React is a JavaScript function that lets you use state and lifecycle features in functional components.</p>
            <h2 className='font-bold text-2xl'>What is useRef?</h2>
            <p>useRef is a React hook that returns a mutable object, allowing you to persist values across renders without causing re-renders.</p>
            <h2 className='font-bold text-2xl'>What is useMemo?</h2>
            <p>useMemo is a React hook that memoizes the result of a function, optimizing performance by preventing unnecessary recalculations in functional components.</p>
        </div>
    );
};

export default Blog;