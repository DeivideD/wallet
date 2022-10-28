import { Container } from "./style";
import MUIDataTable, { MUIDataTableColumnDef } from "mui-datatables";


interface Props {
  title: string;
  columns: MUIDataTableColumnDef[];
  data: Array<object>;
  options?:Partial<object>;
}

export function GenericTable({title, columns, data, options}:Props) {

  return (
    <Container>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    </Container>
  );
}
