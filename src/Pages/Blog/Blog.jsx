import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();
import './Blog.css'
const Blog = () => {

    return (
        <div  className='blogm' >
            <Pdf targetRef={ref} filename="Blog.pdf">
                {({ toPdf }) => <button className='mt-3 btn btn-outline-dark' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>

            <div className='blog' ref={ref}>
                <h3 className='mx-5  mt-5'>Information</h3>
                <p className='mx-5' >In This Blog Page, there are four question. <br />
                    Answer are given below of each Question.
                </p>
            </div>

            <div className=' text-center'><h1>My Blog</h1></div>
            <div className='my-4 mx-2'>
                <h3>Ques: Tell us the differences between uncontrolled and controlled components?</h3>
                <p>Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</p>
                <h3>Ques: How to validate React props using PropTypes?</h3>
                <p>Ans: Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components. <br />
                    App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.</p>
                <h3>Ques: Tell us the difference between nodejs and express js?</h3>
                <p>Ans: NodeJS is an open-source server-side runtime environment built around the NodeJS language. Using a single-threaded approach for web loading and asynchronous programming, the framework has achieved great success in being highly-performant and scalable. <br />
                    ExpressJS is a framework for developing web applications with NodeJS. Among the two options, it is the most significant difference. The ExpressJS development services framework provides several exceptional features that make developing web apps easy and fast. By contrast, using the latter alone makes developing web apps more complex
                </p>
                <h3>Ques: What is a custom hook, and why will you create a custom hook?</h3>
                <p>Ans: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. <br />
                    Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                </p>
            </div>
        </div>


    );
};

export default Blog;