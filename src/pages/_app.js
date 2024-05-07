import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/lib/theme/theme";
import { ToastContainer } from "react-toastify";
import useAuthValidation from "@/hooks/useAuthValidation";
import Login from "./register/login";

export default function App({ Component, pageProps }) {
  const { token, isLoading } = useAuthValidation();

  if (isLoading) {
    // Render loading
    return <div>Loading...</div>;
  }
  return (
    <ThemeProvider theme={theme}>
      {token === "admin" ? <Component {...pageProps} /> : <Login />}
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
  );
}
