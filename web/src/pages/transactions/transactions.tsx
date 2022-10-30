import { useContext, useEffect, useState } from "react";
import { GenericTable } from "../../components/table/table";
import { PageContext } from "../../contexts/page_context/page";
import { TrasactionContext } from "../../contexts/transaction_context/transaction";
import { ButonModalFooter } from "../buttom-modal/buttom-modal";
import { Container } from "./style";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { ModalTrasaction } from "./modal/transaction-modal";
import { Transaction } from "../../model/transaction";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

import DomainIcon from '@mui/icons-material/Domain';

export function Transactions() {
  const { setPage } = useContext(PageContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('Nova Transação');
  const [actionModal, setActionModal] = useState('insert');
  const [currentTransaction, setCurrenteTransaction] = useState<Transaction>({} as Transaction);
  const { transactions } = useContext(TrasactionContext);

  const columns = [
    { name: "id", label: "id", options: { filter: true, sort: true } },
    { name: "fund", label: "fundo", options: { filter: true, sort: true } },
    { name: "quantity", label: "quantidade", options: { filter: true, sort: true } },
    { name: "price", label: "preço", options: { filter: true, sort: true } },
    { name: "total", label: "total", options: { filter: false, sort: true } },
    { name: "data", label: "Data", options: { filter: true, sort: true } },
    { name: "type", label: "TIPO", options: { filter: false, sort: false } },
    { name: "icon", label: "#", options: { filter: false, sort: false } }
  ];
  const iconFund = (type: string) => ( type === 'FII' ? <DomainIcon /> : <AutoGraphIcon />);

  useEffect(() => {
    setPage("transaction")
  }, [setPage])

  const data = transactions.map(data => {
    return {
      id: data.id,
      fund: data.monetaryFund?.name,
      quantity: data.quantity,
      price: data.price,
      total: data.quantity * data.price,
      data: data.createdAt,
      type: iconFund(data.monetaryFund?.typeFund?.initials ?? ''),
      icon: <DriveFileRenameOutlineIcon onClick={() => openModalToEdit(data)} />
    };
  });


  const options = {
    filterType: 'multiselect',
    // download: 'disabled',
    viewColumns: true,
  };

  const openModalToEdit = (data: Transaction) => {
    setTitle("Editar Trasação");
    setActionModal('edit')
    setIsOpen(true);
    setCurrenteTransaction(data);
  }


  return (
    <Container>
      <GenericTable title={"Transações"} data={data} columns={columns} options={options} />
      <ButonModalFooter openModal={setIsOpen} modalAction={setActionModal} />
      <ModalTrasaction
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        title={title}
        transaction={currentTransaction}
        action={actionModal}
      />
    </Container>
  )
}