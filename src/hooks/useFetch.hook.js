import { useCallback, useContext, useState } from "react";
import AuthContext from "../context/auth.context";

const useFetch = () => {
  const { setToken } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      try {
        setLoading(true);

        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }

        const response = await fetch(`https://api.smart-profit.info${url}`, {
          method,
          body,
          headers,
        });

        const result = await response.json();
        if (response.status === 401) {
          localStorage.removeItem("token");
          setToken(null);
        }
        if (!response.ok || "error" in result) throw new Error(result.error);

        setLoading(false);

        return result;
      } catch (e) {
        setLoading(false);
        console.error(e);
        setError(e);
      }
    },
    [setToken]
  );

  const clearError = () => setError(null);

  return { request, loading, error, clearError };
};

export default useFetch;
