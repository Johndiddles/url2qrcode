import { useAppContext } from "../contexts/AppContext";
import Barcode from "./Barcode";

const History = () => {
  const { history } = useAppContext();

  return (
    <div
      style={{
        paddingBottom: "1rem",
        overflowY: "scroll",
        flexGrow: 1,
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          textAlign: "left",
          fontSize: "1.25rem",
          padding: "0 1rem 1rem 0.5rem",
        }}
      >
        History ({history?.length})
      </p>

      <div className="historyListContainer">
        {history?.length > 0 &&
          history?.map((tab, index) => <Barcode key={index} tab={tab} />)}
      </div>
    </div>
  );
};

export default History;
