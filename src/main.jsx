import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProgressProvider } from "./context/ProgressContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { getTotal } from "./slices/cartSlice";

store.dispatch(getTotal());
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </Provider>
);
