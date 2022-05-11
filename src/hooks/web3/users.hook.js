import { useState } from "react";
import { toast } from "react-toastify";
import contract from "../../utils/contract";

const useUsers = () => {
  const [loading, setLoading] = useState(false);

  const getUsersInfo = async (id) =>
    await new Promise((resolve) =>
      contract.methods
        .users(id)
        .call()
        .then((res) => {
          resolve(res);
          setLoading(false);
        })
        .catch((e) => {
          toast(e.message, { type: "error" });
          setLoading(false);
        })
    );

  return { loading, getUsersInfo };
};

export default useUsers;
