import { Container } from './style';
import Modal from 'react-modal';
import closeImg from '../../../assets/close.svg';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { api } from '../../../service/api';
import Select, { SingleValue } from 'react-select'
import { toast } from 'react-toastify';
import { typeFundService } from '../../../service/type_found/service-type-fund';
import { TypeFund } from '../../../model/type-fund';
import { MonetaryFund } from '../../../model/monetary-fund';


Modal.setAppElement('#root');
interface Props {
  modalIsOpen: boolean;
  setIsOpen: (modalOpen: boolean) => void;
  title: string;
  action?: string;
  monetaryFund?: MonetaryFund;
}

interface IntensSelct {
  value: number | undefined;
  label: string;
}

export function ModalAssets({ title, monetaryFund, setIsOpen, modalIsOpen, action = "insert" }: Props) {
  const defaultValueOption = { value: undefined, label: 'selecione...' }
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [entrancePrice, setEntrancePrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [typeFunds, setTypeFunds] = useState<TypeFund[]>([]);
  const [tipyFundSelected, setTypeFundSelected] = useState<SingleValue<IntensSelct>>(defaultValueOption);


  const getTypeFund = useCallback(async () => setTypeFunds(await typeFundService()), []);

  useEffect(() => {
    getTypeFund();
  }, [getTypeFund, monetaryFund, action])

  function onCloseModal() {
    setIsOpen(false);
  }

  async function hadleCreateNewTrasaction(e: FormEvent) {
    e.preventDefault();
    if (tipyFundSelected?.value === undefined) {
      toast.warn("Selecione um tipo!!", { theme: "dark" })
      return;
    }
    const data = {
      name,
      category,
      quantity,
      // eslint-disable-next-line camelcase
      entrance_price: entrancePrice,
      // eslint-disable-next-line camelcase
      type_fund_id: tipyFundSelected.value,
    }
    const dataPersist = await api.post('monetary_funds', data)
    toast.success(`${(dataPersist) } adicionada!!!` , { theme: "dark" })
    
    onCloseModal();
  }

  const monetaryOptions = typeFunds.map(data => ({ value: data.id, label: data.name }))
  return (

    <Modal
      overlayClassName='react-modal-overlay'
      className="react-modal-content"
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      contentLabel="Transaction Modal"
    >
      <button
        type="button"
        onClick={onCloseModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={hadleCreateNewTrasaction}>
        <h2>{title}</h2>
        <label>Ativo</label>
        <input
          type="text"
          value={name}
          onChange={e => setName((e.target.value.toUpperCase()))}
          placeholder="Fundo"
        /><br />

        <label>Tipo</label>
        <Select
          options={monetaryOptions}
          onChange={e => setTypeFundSelected(e)}
          value={tipyFundSelected}
        /><br />
        <label>Categoria</label>
        <input
          type="text"
          value={category}
          onChange={e => setCategory((e.target.value))}
          placeholder="Apenas para fundos imobiliario"
        /><br />
        <label>Quantidade</label>
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          placeholder="Quantidade"
        /><br />
        <label>Valor de Entrada</label>
        <input
          type="number"
          value={entrancePrice}
          onChange={e => setEntrancePrice(Number(e.target.value))}
          placeholder="valor"
        /><br />
        <button type="submit">Salvar</button>
      </Container>
    </Modal>
  )
}
