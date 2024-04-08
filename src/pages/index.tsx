import Homepage from "src/components/Homepage";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className=" overflow-hidden">
        <Homepage />
      </div>
    </Provider>
  );
}
