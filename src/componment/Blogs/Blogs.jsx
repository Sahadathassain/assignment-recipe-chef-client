import React from "react";

const Blogs = () => {
  const blogs = [
    {
      number: "01",
      question: "Tell us the difference between Node.js and Express.js.",
      answer:
        "Node.js is an open-source and cross-platform tool used to run JavaScript code outside of the browser. Express.js is used to develop complete web applications such as single-page, multi-page and hybrid web applications and APIs.",
    },
    {
      number: "02",
      question: "What is a custom hook, and why will you create a custom hook?",
      answer:
        'A custom hook is a JavaScript function whose name starts with "using" and can call another hook. Custom React JS hooks offer reusability. When a custom hook is created, it can be easily reused, which cleans up the code and reduces code writing time. It also speeds up code rendering because a custom hook doesn\'t need to be rendered repeatedly while rendering the entire code.',
    },
    {
      number: "03",
      question: "How to validate React props using PropTypes?",
      answer:
        "There are some commonly used PropTypes validators: string validates that the prop is a string, number validates that the prop is a number, boolean validates that the prop is a boolean, array validates that the prop is an array, object validates that the prop is an object, func validates that the prop is a function, and oneOfType validates that the prop matches one of the given PropTypes validators.",
    },
    {
      number: "04",
      question:
        "Tell us the differences between uncontrolled and controlled components.",
      answer:
        "Controlled components refer to components whose state and behavior are controlled by the parent component. Components rely on props sent from the parent component to update their state and behavior. Uncontrolled components refer to components that internally manage their own state.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F7F2] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C2412D]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#14532D]">
              Knowledge & Insights
            </span>

            <span className="h-px w-10 bg-[#C2412D]" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#17201A] sm:text-5xl">
            Developer Blog
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#17201A]/60 sm:text-base">
            Simple explanations and useful concepts from the world of
            JavaScript and React.
          </p>
        </div>

        {/* Blog Articles */}
        <div className="space-y-5">
          {blogs.map((blog) => (
            <article
              key={blog.number}
              className="group rounded-2xl border border-[#14532D]/10 bg-white p-6 transition-all duration-300 hover:border-[#14532D]/20 hover:shadow-lg sm:p-8"
            >
              <div className="flex gap-5 sm:gap-8">

                {/* Number */}
                <div className="hidden shrink-0 sm:block">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#14532D] text-sm font-bold text-white">
                    {blog.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">

                  {/* Mobile Number */}
                  <div className="mb-4 sm:hidden">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#14532D] text-xs font-bold text-white">
                      {blog.number}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold leading-snug text-[#17201A] transition-colors duration-200 group-hover:text-[#14532D] sm:text-2xl">
                    {blog.question}
                  </h2>

                  <div className="mt-5 flex items-start gap-3">
                    <span className="mt-1 text-xs font-bold uppercase tracking-wider text-[#C2412D]">
                      Answer
                    </span>

                    <p className="flex-1 text-sm leading-7 text-[#17201A]/65 sm:text-base">
                      {blog.answer}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Blogs;