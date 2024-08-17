import { TableRow } from "./tableDataLoader";
import "./Table.css";

interface Boop {
  tableData: TableRow;
}

export function Table({ tableData }: Boop) {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(tableData.data[0]).map((v) => (
            <th key={v}>{v}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.data.map((row, idx) => (
          <tr key={row.articleid + " " + idx}>
            {Object.values(row).map((v, idx) => (
              <td key={v + " " + idx}>
                <span>{v}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
