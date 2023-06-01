import { useEffect } from "react";
import { useState } from "react";

function UserApi(token) {
  const [islogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          await axios.get("/loadUser", {
            headers: { Authorization: token },
          });
          setIsLogged(true);
        } catch (err) {
          alert(err.response.data.message);
        }
      };
      getUser();
    }
  }, [token]);
  return {
    islogged: [islogged, setIsLogged],
  };
}
