import React, { } from "react";


const Blogs = () => {
  // const ref = useRef();
  // const option = {
  //   orientation: "landscape",
  //   unit: "in",
  //   format: [1, 1],
  // };
  return (
    <div>
      <div >
        <div className="p-4 mb-5 rounded-md bg-gradient-to-r from-orange-500 to-purple-400 ">
          <h1 className="font-semibold text-2xl">
            1.Tell us the difference between nodejs and express js.?
          </h1>
          <p>
            Ans. Node. js is an open-source and cross-platform tool used to run
            JavaScript code outside of the browser. to express. js is used to
            develop complete web applications such as single-page, multi-page
            and hybrid web applications and APIs.
          </p>
        </div>
        <div className="p-4 mb-5 rounded-md bg-gradient-to-r from-orange-500 to-purple-400 ">
          <h1 className="font-semibold text-2xl">
            What is a custom hook, and why will you create a custom hook?
          </h1>
          <p>
            Ans. A custom hook is a JavaScript function whose name starts with
            "using" and can call another hook. Custom React JS hooks offer
            reusability When a custom hook is created, it can be easily reused,
            which cleans up the code and reduces code writing time. It also
            speeds up code rendering because a custom hook doesn't need to be
            rendered repeatedly while rendering the entire code.
          </p>
        </div>
        <div className="p-4 mb-5 rounded-md bg-gradient-to-r from-orange-500 to-purple-400 ">
          <h1 className="font-semibold text-2xl">
            3.How to validate React props using PropTypes?
          </h1>
          <p>
            Ans. are some used PropTypes validators: string: Validates that the
            prop is a string number: Validates that the prop is a number
            boolean: Validates that the prop is a boolean array: Validates that
            the prop is an array object: Validates that the prop is an object
            func: Validates that the prop is a function oneOfType: Validates
            that the prop matches one of the given PropTypes validators
          </p>
        </div>
        <div className="p-4 rounded-md bg-gradient-to-r from-orange-500 to-purple-400 ">
          <h1 className="font-semibold text-2xl">
            4.Tell us the differences between uncontrolled and controlled
            components.
          </h1>
          <p>
            Ans. Controlled components refer to components whose state and
            behavior are controlled by the parent component. Components rely on
            props sent from the parent component to update their state and
            behavior. Uncontrolled components refer to components that
            internally manage their own state
          </p>
        </div>
      </div>
      {/* <div className="text-center my-4">
        <ReactToPd
          targetRef={ref}
          filename="code-example.pdf"
          // option={option}
          scale={0.6}>
          {({ toPdf }) => (
            <button className="btn btn-primary p-4" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </ReactToPd>
      </div> */}
    </div>
  );
};

export default Blogs;