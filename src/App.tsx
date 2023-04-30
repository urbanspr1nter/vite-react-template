import { createRoot } from "react-dom/client";
import "./App.css";
import sum from "./sum";

const App = () => {
    return (
        <div>
            <h1>Sample App</h1>
            <p>This is a sample app.</p>
            <p>4 + 5 = {sum(4, 5)}</p>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(<App />);
