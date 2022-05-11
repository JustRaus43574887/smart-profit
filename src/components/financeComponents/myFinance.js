import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "../../assets/styles/finance.scoped.css";
import "../../assets/styles/general.scoped.css";
import AuthContext from "../../context/auth.context";

import useFetch from "../../hooks/useFetch.hook";
import usePrice from "../../hooks/web3/price.hook";
import { HASH_LINK } from "../../utils/contract";

function MyFinance({ skip, setLength }) {
  const { t } = useTranslation();

  const { token } = useContext(AuthContext);
  const { request, error, clearError } = useFetch();
  const { getLatestPrice, latestPrice } = usePrice();

  const [data, setData] = useState();

  useEffect(() => {
    getLatestPrice();
  }, []);

  useEffect(() => {
    (async () => {
      const result = await request(
        `/get-income?limit=25&skip=${skip}`,
        "GET",
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (result) {
        console.log(result);
        setLength(result.data.length);
        if (result.data.length < 25) {
          Array(25 - result.data.length)
            .fill()
            .map((item) => result.data.push(item));
          setData(result.data);
        } else setData(result.data);
      }
    })();
  }, [request, skip, token, setLength]);

  useEffect(() => {
    if (error) {
      toast(error.message, { type: "error" });
      clearError();
    }
  }, [error]);

  return (
    <>
      <div id="MyFinance" className="tabcontent">
        <table className="general_table">
          <tbody>
            <tr className="head_table">
              <td className="main_row">
                <p>{t("finance:TOP_DESCRIPTION_TRANSACTION")}</p>
              </td>
              <td className="main_row">
                <p>{t("finance:TOP_DESCRIPTION_FROMWHON")}</p>
              </td>
              <td className="main_row">
                <p>{t("finance:TOP_DESCRIPTION_LEVEL3")}</p>
              </td>
              <td className="main_row">
                <p>USD - {t("finance:TOP_DESCRIPTION_BNB2")}</p>
              </td>
              <td className="main_row">
                <p>{t("finance:TOP_DESCRIPTION_DATE3")}</p>
              </td>
            </tr>
            {data &&
              data.map((item, index) => (
                <TableItem
                  item={item}
                  latestPrice={latestPrice}
                  t={t}
                  key={index}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const TableItem = ({ item, latestPrice, t }) => (
  < tr className="child_one" >
    <td className="child_row">
      {item && (
        <a
          href={HASH_LINK + item.transaction_number}
          style={{ color: "white" }}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          {t("finance:TRANSACTION_HASH")}
        </a>
      )}
    </td>
    <td className="child_row">{item && <p>{item.from === "SMART PROFIT" ? item.from : `ID ${item.from}`}</p>}</td>
    <td className="child_row">
      {item && (
        <p>
          {item.level === "0"
            ? t("finance:TOP_DESCRIPTION_REFERRAL1")
            : item.level}
        </p>
      )}
    </td>
    <td className="child_row">
      {item && (
        <p>
          $ {(latestPrice * item.trx).toFixed(2)} - BNB {item.trx}
        </p>
      )}
    </td>
    <td className="child_row">
      {item && (
        <p className="date_text">
          {new Date(item.date * 1000).toLocaleDateString()}
        </p>
      )}
    </td>
  </tr >
);

export default MyFinance;
