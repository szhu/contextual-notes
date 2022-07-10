import { css } from "@emotion/css";
import ExampleMessageComposer from "@szhu/example-message-composer";

export function App() {
  return (
    <>
      <h1
        className={css`
          color: blue;
        `}
      >
        Hello world!
      </h1>
      <ExampleMessageComposer
        to={
          <input
            className={css`
              box-sizing: border-box;
              display: block;
              width: 100%;
            `}
          />
        }
        body={
          <textarea
            className={css`
              box-sizing: border-box;
              width: 100%;
              min-height: 100px;
              resize: vertical;
            `}
          />
        }
      />
      <input />
    </>
  );
}
