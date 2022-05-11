import { useState } from "react";
import { toast } from "react-toastify";
import contract from "../../utils/contract";

const usePrice = () => {
  const [loading, setLoading] = useState(false);
  const [packagePrices, setPackagePrices] = useState([]);
  const [latestPrice, setLatestPrice] = useState(0);

  const getLatestPrice = () => {
    setLoading(true);
    contract.methods
      .getLatestPrice()
      .call()
      .then((res) => {
        setLoading(false);
        res =
          res.substring(0, res.length - 8) +
          "." +
          res.substring(res.length - 8, res.length);
        setLatestPrice(parseFloat(res));
        [30, 90, 180].map((pr) => {
          return setPackagePrices((prices) => [
            ...prices,
            (pr / parseFloat(res)) * 1.1,
          ]);
        });
      })
      .catch((e) => {
        toast(e.message, { type: "error" });
        setLoading(false);
      });
  };

  return { loading, getLatestPrice, latestPrice, packagePrices };
};

export default usePrice;
