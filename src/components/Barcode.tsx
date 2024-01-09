import QRCode from "react-qr-code";
import { Tab } from "../utils/types";
import { useAppContext } from "../contexts/AppContext";

const Barcode = ({ tab, current = false }: { tab: Tab; current?: boolean }) => {
  const { onSave, onRemove, history } = useAppContext();

  const urlExists: boolean =
    current && !!history.find((item) => item.url === tab.url)!;

  return (
    <div
      style={{
        width: "100%",
        boxShadow: "0 1px 2px rgba(225, 225, 225, 0.25)",
        paddingBottom: "0.5rem",
      }}
    >
      <div className="">
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: current ? 150 : 120,
            width: "100%",
          }}
        >
          <QRCode
            size={current ? 220 : 200}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={tab.url}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "1rem 0.75rem",
        }}
      >
        <img
          src={tab.favIcon}
          alt={tab.title}
          style={{ width: 24, height: 24 }}
        />
        <p style={{ fontWeight: current ? "bold" : "normal", flexGrow: 1 }}>
          {tab.title?.length > 60 ? `${tab.title?.slice(0, 60)}...` : tab.title}
        </p>
      </div>
      <button
        onClick={() => (!current || urlExists ? onRemove(tab) : onSave(tab))}
        style={{ padding: "0.25rem 0.5rem" }}
      >
        {!current || urlExists ? "Remove" : "Save"}
      </button>
    </div>
  );
};

export default Barcode;
