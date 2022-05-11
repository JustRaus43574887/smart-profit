import { useState } from "react";
import { toast } from "react-toastify";
import contract from "../../utils/contract";

const useBonus = () => {
  const [maxiBonus, setMaxiBonus] = useState(0);
  const [loading, setLoading] = useState(false);

  const getMaxiBonus = () =>
    contract.methods
      .lotteryPool()
      .call()
      .then((res) => {
        setMaxiBonus(res);
        setLoading(false);
      })
      .catch((e) => {
        toast(e.message, { type: "error" });
        setLoading(false);
      });

  return { loading, getMaxiBonus, maxiBonus };
};

export default useBonus;
