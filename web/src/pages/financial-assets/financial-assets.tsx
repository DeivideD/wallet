import { useContext, useEffect, useState } from "react";
import { GenericTable } from "../../components/table/table";
import { PageContext } from "../../contexts/page_context/page";
import { MonetaryFund } from "../../model/monetary-fund";
import { getMonetaryFund } from "../../service/monetary_fund/service-monetary-fund";
import { Container } from "./style";
import { ButonModalFooter } from "../buttom-modal/buttom-modal";
import { ModalAssets } from "./modal/assets-modal"
import InfoIcon from '@mui/icons-material/Info';

export function FinancialAssets() {
  const { setPage } = useContext(PageContext);
  const [monetaryFunds, setMonetaryFunds] = useState<MonetaryFund[]>([] as MonetaryFund[])
  const [actionModal, setActionModal] = useState('insert');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [currentMonetaryFund, setCurrentMonetaryFund] = useState({} as MonetaryFund);


  const loadMonetaryFund = async () => setMonetaryFunds(await getMonetaryFund());

  useEffect(() => {
    loadMonetaryFund();
    setPage("Fundos Monetarios")
    setTitle("Novo Ativo")
  }, [setPage]);
 
  const openModalInfo = (data: MonetaryFund) => {
    setCurrentMonetaryFund(data);
  }

  const columns = [
    { name: "id", label: "id", options: { filter: true, sort: true } },
    { name: "fund", label: "fundo", options: { filter: true, sort: true } },
    { name: "quantity", label: "quantidade", options: { filter: false, sort: false } },
    { name: "entrancePrice", label: "preço de entrada", options: { filter: false, sort: false } },
    { name: "data", label: "Data de Entrada", options: { filter: true, sort: true } },
    { name: "icon", label: "#", options: { filter: false, sort: false } },
  ];

  const data = monetaryFunds.map(data => {
    return {
      id: data.id,
      fund: data.name,
      quantity: data.quantity,
      entrancePrice: data.entrancePrice,
      data: data.createdAt,
      icon: <InfoIcon onClick={() => openModalInfo(data)} />
    };
  });

  const options = {
    filterType: 'checkbox',
  };

  const attTable = (fund: MonetaryFund) => {
    setMonetaryFunds([...monetaryFunds, fund]);
  }

  return (
    <Container>
      <Container>
        <GenericTable title={"Ativos"} data={data} columns={columns} options={options} />
        
        <ButonModalFooter openModal={setIsOpen} modalAction={setActionModal} />
        <ModalAssets
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          title={title}
          monetaryFund={currentMonetaryFund}
          action={actionModal}
          attTable={attTable}
        />
      </Container>
    </Container>
  )
}
