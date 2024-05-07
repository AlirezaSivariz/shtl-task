import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/lib/theme/theme";
import { ToastContainer } from "react-toastify";
import useAuthValidation from "@/hooks/useAuthValidation";
import Login from "./register/login";
import Layout from "@/layouts";
import { Provider } from "react-redux";
import store from "@/redux/store";
export default function App({ Component, pageProps }) {
  const { token, isLoading } = useAuthValidation();

  if (isLoading) {
    // Render loading
    return <div>Loading...</div>;
  }

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {token === "admin" ? (
          getLayout(<Component {...pageProps} />)
        ) : (
          <Login />
        )}
        <ToastContainer
          position="top-left"
          autoClose={1000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          progress={undefined}
          theme="light"
        />
      </ThemeProvider>
    </Provider>
  );
}
