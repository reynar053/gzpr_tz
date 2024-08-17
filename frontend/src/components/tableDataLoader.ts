export interface TableRow {
  data: [
    {
      articleid: string;
      subarticleid: string;
      articlename: string;
      external_str_id: string;
      ecrlongname: string;
    }
  ];
  next: boolean;
  previous: boolean;
}

export async function loadData(page: number = 0): Promise<TableRow> {
  const res = await fetch("http://localhost:3000/table?page=" + page);
  return await res.json();
}
