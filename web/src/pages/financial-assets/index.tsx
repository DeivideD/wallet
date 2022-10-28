import { useContext, useEffect, useState } from "react";
import { GenericTable } from "../../components/table";
import { PageContext } from "../../contexts/page-context";
import { MonetaryFund } from "../../model/monetary_fund";
import { getMonetaryFund } from "../../service/monetary_fund/monetary_fund";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Container } from "./style";
import { ButonModalFooter } from "../buttom-modal";

export function FinancialAssets() {
  const { setPage } = useContext(PageContext);
  const [monetaryFunds, setMonetaryFunds] = useState<MonetaryFund[]>([] as MonetaryFund[])
  const [actionModal, setActionModal] = useState('insert');
  const [modalIsOpen, setIsOpen] = useState(false);

  const loadMonetaryFund = async () => setMonetaryFunds(await getMonetaryFund());

  useEffect(() => {
    loadMonetaryFund();
    setPage("Fundos Monetarios")
  }, [setPage]);
 
  const openModalToEdit = (data: MonetaryFund) => {
    console.log(data);
  }

  const columns = [
    { name: "id", label: "id", options: { filter: true, sort: true } },
    { name: "fund", label: "fundo", options: { filter: true, sort: true } },
    { name: "quantity", label: "quantidade", options: { filter: false, sort: false } },
    { name: "entrancePrice", label: "preço de entrada", options: { filter: false, sort: false } },
    { name: "icon", label: "#", options: { filter: false, sort: false } },
  ];

  const data = monetaryFunds.map(data => {
    return {
      id: data.id,
      fund: data.name,
      quantity: data.quantity,
      entrancePrice: data.entrancePrice,
      icon: <DriveFileRenameOutlineIcon onClick={() => openModalToEdit(data)} />
    };
  });

  const options = {
    filterType: 'checkbox',
  };


  return (
    <Container>
      <Container>
        <GenericTable title={"Ativos"} data={data} columns={columns} options={options} />
        
        <ButonModalFooter openModal={setIsOpen} modalAction={setActionModal} />
        {/* <ModalTrasaction
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          title={title}
          transaction={currentTransaction}
          action={actionModal}
        /> */}
      </Container>
    </Container>
  )
}
