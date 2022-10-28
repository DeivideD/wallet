import { Content } from "./style";
interface Props {
  openModal: (openModal: boolean) => void;
  modalAction: (openModal: string) => void;
}
export function ButonModalFooter({openModal, modalAction}: Props){

  const setOpenModal = () => {
    openModal(true);
    modalAction('insert')
  }

  return (
    <Content>
      <button onClick={() => setOpenModal()}> Nova transação</button>
    </Content>
  );
}