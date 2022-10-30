import { Container, TrasactionTypeContainer, ButtonBox } from './style';
import Modal from 'react-modal';
import closeImg from '../../../assets/close.svg'
import incomeImg from '../../../assets/income.svg'
import { FormEvent, useCallback, useContext, useEffect, useState } from 'react';
import { TrasactionContext } from '../../../contexts/transaction_context/transaction';
import Select, { SingleValue } from 'react-select'
import { getMonetaryFundByTypeFund } from '../../../service/monetary_fund/service-monetary-fund';
import { MonetaryFund } from '../../../model/monetary-fund';
import { toast } from 'react-toastify';
import { Transaction } from '../../../model/transaction';
import { editTransaction, saveTransaction } from '../../../service/trasactions/service-transaction';


Modal.setAppElement('#root');
interface Props {
  modalIsOpen: boolean;
  setIsOpen: (modalOpen: boolean) => void;
  title: string;
  action?: string;
  transaction?: Transaction;
}

interface IntensSelct {
  value: MonetaryFund | undefined;
  label: string;
}

export function ModalTrasaction({ title, transaction, setIsOpen, modalIsOpen, action = "insert" }: Props) {
  const defaultValueOption = { value: {} as MonetaryFund, label: 'selecione...' }
  const [type, setType] = useState('FII');
  const [monetaryFunds, setMonetaryFunds] = useState<MonetaryFund[]>([])
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [monetaryFundSelected, setMonetaryFundSelected] = useState<SingleValue<IntensSelct>>(defaultValueOption);


  const { transactions, setTransactions } = useContext(TrasactionContext);

  const getFund = useCallback(async () => setMonetaryFunds(await getMonetaryFundByTypeFund(type)), [type]);

  useEffect(() => {
    getFund();
    if (transaction !== undefined) {
      if (action === 'insert') {
        setMonetaryFundSelected(defaultValueOption);
        setQuantity(0);
        setPrice(0);
        setType("FII")
      } else {
        setMonetaryFundSelected({ value: transaction.monetaryFund, label: transaction.monetaryFund?.name ?? '' });
        setQuantity(transaction.quantity);
        setPrice(transaction.price);
        setType(transaction.monetaryFund?.typeFund?.initials ?? '')
      }
    }

  }, [getFund, transaction, action])

  function onCloseModal() {
    setIsOpen(false);
  }

  async function hadleCreateNewTrasaction(e: FormEvent) {
    e.preventDefault();
    if (monetaryFundSelected?.value === undefined) {
      toast.warn("Selecione um ativo!!", { theme: "dark" })
      return;
    }

    const data: Transaction = {
      monetaryFund: monetaryFundSelected?.value,
      quantity,
      price,
    }


    if (action === 'insert') {
      saveTransaction(data).then(dataTransaction => {
        setTransactions([
          ...transactions,
          dataTransaction
        ]
        );
        toast.success("Trasação adicionada!!!", { theme: "dark" })
      }).catch((e: Error) => {
        toast.error(e.message, { theme: "dark" })
      });

    }else{
      if (transaction?.id !== undefined){
        editTransaction(transaction.id, data).then(dataTransaction => {
          toast.success(`Transação de id: ${dataTransaction.id} atualizada`, { theme: "dark" });
        }).catch((error: Error) => {
          toast.error(error.message, { theme: "dark" });
        });

        const updatedTrasactions = transactions.filter(item => item.id !== transaction.id)
        setTransactions([
          ...updatedTrasactions,
          data
        ]
        );
      }
    }
    onCloseModal();
  }

  const updateSelection = (type: string) => {
    setMonetaryFundSelected(defaultValueOption);
    setType(type);
  }

  const monetaryOptions = monetaryFunds.map(data => ({ value: data, label: data.name }))
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
        <Select
          options={monetaryOptions}
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
        <button type="submit">Salvar</button>
      </Container>
    </Modal>
  )
}
