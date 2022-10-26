
import { Container, TrasactionTypeContainer, ButtonBox } from './style';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import { FormEvent, useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../../service/api';
import { TrasactionContext } from '../../contexts/transaction-context';
import { Transaction } from '../../model/transaction';
import Select, { SingleValue } from 'react-select'
import { monetaryFundService } from '../../service/monetary_fund/monetary_fund';
import { MonetaryFund } from '../../model/monetary_fund';


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
  const [type, setType] = useState('acao');
  const [monetaryFund, setMonetaryFund] = useState<MonetaryFund[]>([])
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [monetaryFundId, setMonetaryFundId] = useState(0);


  const { transactions, setTransactions } = useContext(TrasactionContext);

  const getMonetaryFund = useCallback(async () => setMonetaryFund(await monetaryFundService()), []);

  useEffect(() => {
    getMonetaryFund();
  }, [getMonetaryFund])

  function onCloseModal() {
    props.setIsOpen(false);
  }

  const getItemSelected = useCallback((event: SingleValue<IntensSelct>) => {
    if (event?.value) {
      setMonetaryFundId(event.value);
    }
  }, [])

  async function hadleCreateNewTrasaction(e: FormEvent) {
    e.preventDefault();
    const data = {
      monetary_fund_id: monetaryFundId,
      quantity,
      price,
    }

    const dataPersist = await api.post('transactions', data)
    const transaction: Transaction = {...dataPersist.data, MonetaryFund: dataPersist.data.monetary_fund};
    console.log(transaction)
    console.log(transactions)
    setTransactions([
      ...transactions,
      transaction
    ]
    );
    onCloseModal();
  }

  const monetaryOptions = monetaryFund.map(data => ({ value: data.id, label: data.name }))
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

        <Select
          options={monetaryOptions}
          placeholder="Selecione..."
          onChange={e => getItemSelected(e)}
        /><br />

        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          placeholder="Quantidade"
        /><br />

        <input
          type="number"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          placeholder="valor"
        /><br />
        <TrasactionTypeContainer>
          <ButtonBox
            type="button"
            isActive={type === 'entrada'}
            onClick={() => setType("entrada")}
            activeColor="#33CC95"
          >
            <img src={incomeImg} alt="Fundos" />
            <span>Fundos</span>
          </ButtonBox>
          <ButtonBox
            type="button"
            isActive={type === 'saida'}
            onClick={() => setType("saida")}
            activeColor="#33CC95"
          >
            <img src={incomeImg} alt="Ações" />
            <span>Ações</span>
          </ButtonBox>
        </TrasactionTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
