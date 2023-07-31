import "../styles/globals.css";
import "../styles/Home.module.css";
// import "../styles/bootstrap.min.css";
// import "../styles/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../styles/styles.css";
import "../styles/lightslider.css";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { Provider } from "react-redux";
import store from "../store/store";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </QueryClientProvider>
  );
}
