
import { Container, TrasactionTypeContainer, ButtonBox } from './style';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import { FormEvent, useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../../service/api';
import { TrasactionContext } from '../../contexts/transaction-context';
import Select, { SingleValue } from 'react-select'
import { getMonetaryFundByTypeFund } from '../../service/monetary_fund/monetary_fund';
import { MonetaryFund } from '../../model/monetary_fund';
import { EntityToTrasaction } from '../../mapper/transaction';
import { toast } from 'react-toastify';


Modal.setAppElement('#root');
interface Props {
  modalIsOpen: boolean;
  setIsOpen: (modalOpen: boolean) => void
}

interface IntensSelct {
  value: number | undefined;
  label: string;
}

export function ModalTrasaction(props: Props) {
  const defaultValueOption = { value: undefined, label: 'selecione...' }
  const [type, setType] = useState('FII');
  const [monetaryFunds, setMonetaryFunds] = useState<MonetaryFund[]>([])
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [monetaryFundSelected, setMonetaryFundSelected] = useState<SingleValue<IntensSelct>>(defaultValueOption);


  const { transactions, setTransactions } = useContext(TrasactionContext);

  const getFund = useCallback(async () => setMonetaryFunds(await getMonetaryFundByTypeFund(type)), [type]);

  useEffect(() => {
    getFund();
  }, [getFund])

  function onCloseModal() {
    props.setIsOpen(false);
  }

  async function hadleCreateNewTrasaction(e: FormEvent) {
    e.preventDefault();

    if (monetaryFundSelected?.value === undefined) {
      toast.warn("Selecione um ativo!!", { theme: "dark" })
      return;
    }

    const data = {
      monetary_fund_id: monetaryFundSelected.value,
      quantity,
      price,
    }

    const dataPersist = await api.post('transactions', data)
    const transaction = EntityToTrasaction(dataPersist.data);
    setTransactions([
      ...transactions,
      transaction
    ]
    );
    onCloseModal();
  }

  const updateSelection = (type: string) => {
    setMonetaryFundSelected(defaultValueOption);
    setType(type);
  }

  const monetaryOptions = monetaryFunds.map(data => ({ value: data.id, label: data.name }))
  return (

    <Modal
      overlayClassName='react-modal-overlay'
      className="react-modal-content"
      isOpen={props.modalIsOpen}
      onRequestClose={onCloseModal}
      contentLabel="Example Modal"
    >
      <button
        type="button"
        onClick={onCloseModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={hadleCreateNewTrasaction}>
        <h2>Investir</h2>
        <label>Ativo</label>
        <Select
          options={monetaryOptions}
          placeholder="Selecione..."
          onChange={e => setMonetaryFundSelected(e)}
          value={monetaryFundSelected}
        /><br />
        <label>Quantidade</label>
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          placeholder="Quantidade"
        /><br />
        <label>Valor</label>
        <input
          type="number"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          placeholder="valor"
        /><br />
        <TrasactionTypeContainer>
          <ButtonBox
            type="button"
            isActive={type === 'FII'}
            onClick={() => updateSelection('FII')}
            activeColor="#33CC95"
          >
            <img src={incomeImg} alt="Fundos" />
            <span>Fundos Imobiliarios</span>
          </ButtonBox>
          <ButtonBox
            type="button"
            isActive={type === 'AC'}
            onClick={() => updateSelection("AC")}
            activeColor="#33CC95"
          >
            <img src={incomeImg} alt="Ações" />
            <span>Ações B3</span>
          </ButtonBox>
        </TrasactionTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
