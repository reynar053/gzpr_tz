import { useEffect, useState } from "react";
import "./App.css";
import { loadData, TableRow } from "./components/tableDataLoader";
import { Table } from "./components/Table";

function App() {
  const [tableData, setTableData] = useState<TableRow>({} as TableRow);
  const [pageNumber, setPageNumber] = useState(0);
  useEffect(() => {
    const getData = async () => {
      setTableData(await loadData(pageNumber));
    };
    getData();
  }, [pageNumber]);

  return (
    <>
      {tableData.data && <Table tableData={tableData}></Table>}
      <div className="button-container">
        <button
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
          disabled={!tableData.previous}
        >
          &lt;
        </button>
        {pageNumber + 1}
        <button
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
          disabled={!tableData.next}
        >
          &gt;
        </button>
      </div>
    </>
  );
}

export default App;
