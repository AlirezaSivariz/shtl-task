import { useEffect, useState } from "react";

const useAuthValidation = () => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthToken = () => {
      const storedValue = localStorage.getItem("username");
      setToken(storedValue);
      setIsLoading(false); // Set isLoading to false once the token is retrieved
    };

    checkAuthToken();
  }, []);

  return { token, isLoading };
};

export default useAuthValidation;
