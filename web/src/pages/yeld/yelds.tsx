import { useContext, useEffect, useState } from "react";
import { GenericTable } from "../../components/table/table";
import { PageContext } from "../../contexts/page_context/page";
import { Yeld } from "../../model/yeld";
import { getYelds } from "../../service/yeld/service-yeld";
import { Container } from "./style";
import { ButonModalFooter } from "../buttom-modal/buttom-modal";
import { ModalAssets } from "./modal/assets-modal"
import InfoIcon from '@mui/icons-material/Info';

export function Yelds() {
  const { setPage } = useContext(PageContext);
  const [yelds, setYelds] = useState<Yeld[]>([] as Yeld[])
  const [actionModal, setActionModal] = useState('insert');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  // const [currentMonetaryFund, setCurrentMonetaryFund] = useState({} as MonetaryFund);


  const loadMonetaryFund = async () => setYelds(await getYelds()); 

  useEffect(() => {
    loadMonetaryFund();
    setPage("Rendimentos")
    setTitle("Novo Ativo")
  }, [setPage]);
 
  // const openModalInfo = (data: MonetaryFund) => {
  //   setCurrentMonetaryFund(data);
  // }

  const columns = [
    { name: "id", label: "id", options: { filter: true, sort: true } },
    { name: "fund", label: "fundo", options: { filter: true, sort: true } },
    { name: "yeld", label: "rendimento", options: { filter: false, sort: false } },
    { name: "data", label: "data", options: { filter: true, sort: true } },
    { name: "icon", label: "#", options: { filter: false, sort: false } },
  ];

  const data = yelds.map(data => {
    return {
      id: data.id,
      fund: data.monetaryFund.name,
      yeld: data.total,
      data: data.createdAt,
      icon: <InfoIcon />
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
        <ModalAssets
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          title={title}
          // monetaryFund={currentMonetaryFund}
          action={actionModal}
        />
      </Container>
    </Container>
  )
}
