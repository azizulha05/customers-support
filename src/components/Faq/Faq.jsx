import React from "react";

const Faq = () => {
  return (
    <div>
      <details
        className="collapse bg-base-100 border border-base-300"
        name="my-accordion-det-1"
        open
      >
        <summary className="collapse-title font-semibold">What is JSX, and why is it used?</summary>
        <div className="collapse-content text-sm">
          JSX (JavaScript XML) is a syntax used in React that lets you write HTML-like code inside
          JavaScript. It is used because it: Makes UI code easier to read Allows JavaScript inside
          HTML Makes building components simpler JSX is converted into regular JavaScript by tools
          like Babel.
        </div>
      </details>
      <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
        <summary className="collapse-title font-semibold">
          What is the difference between State and Props?
        </summary>
        <div className="collapse-content text-sm">
          Props = external data (read-only) State = internal data (changeable)
        </div>
      </details>
      <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
        <summary className="collapse-title font-semibold">
          What is the useState hook, and how does it work?
        </summary>
        <div className="collapse-content text-sm">
          useState is a Hook in React that lets you add state to functional components. It returns:
          A state value A function to update it When the state updates, the component re-renders
          automatically.
        </div>
      </details>
      <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
        <summary className="collapse-title font-semibold">
          How can you share state between components in React?
        </summary>
        <div className="collapse-content text-sm">
          Move state to a common parent and pass it via props.
        </div>
      </details>
      <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
        <summary className="collapse-title font-semibold">
          How is event handling done in React?
        </summary>
        <div className="collapse-content text-sm">
          Use camelCase events (like onClick) and pass a function to handle the event.
        </div>
      </details>
    </div>
  );
};

export default Faq;
