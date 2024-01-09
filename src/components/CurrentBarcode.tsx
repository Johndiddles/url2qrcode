import { useEffect, useState } from "react";
import Barcode from "./Barcode";
import { Tab, TabSchema } from "../utils/types";

const CurrentBarcode = () => {
  const [currentTab, setTab] = useState<Tab>(TabSchema);
  useEffect(() => {
    const generateBarcode = async () => {
      const [tab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
      });

      console.log({ tab });

      if (tab)
        setTab(() => ({
          url: tab.url!,
          title: tab.title!,
          favIcon: tab.favIconUrl!,
        }));
    };

    generateBarcode();
  }, []);
  return (
    <div style={{ paddingBottom: "1rem", width: "100%" }}>
      <Barcode tab={currentTab!} current />
    </div>
  );
};

export default CurrentBarcode;
