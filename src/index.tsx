import { css } from "@emotion/css";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <h1
      className={css`
        color: blue;
      `}
    >
      Hello world!
    </h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app")!);
root.render(<App />);
