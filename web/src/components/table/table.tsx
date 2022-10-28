import { Container } from "./style";
import MUIDataTable, { MUIDataTableColumnDef } from "mui-datatables";


interface Props {
  title: string;
  columns: MUIDataTableColumnDef[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  data: Array<object>;
  // eslint-disable-next-line @typescript-eslint/ban-types
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
