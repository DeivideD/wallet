import { Container, TrasactionTypeContainer, ButtonBox, TwoColumnsContainer } from './style';
import Modal from 'react-modal';
import closeImg from '../../../assets/close.svg'
import incomeImg from '../../../assets/income.svg'
import outmeImg from '../../../assets/outcome.svg'
import { FormEvent, useCallback, useContext, useEffect, useState } from 'react';
import { TrasactionContext } from '../../../contexts/transaction_context/transaction';
import Select, { SingleValue } from 'react-select'
import { getMonetaryFundByTypeFund } from '../../../service/monetary_fund/service-monetary-fund';
import { MonetaryFund } from '../../../model/monetary-fund';
import { toast } from 'react-toastify';
import { Transaction } from '../../../model/transaction';
import { editTransaction, saveTransaction } from '../../../service/trasactions/service-transaction';
import { TypeFund } from '../../../model/type-fund';
import { typeFundService } from '../../../service/type_found/service-type-fund';


Modal.setAppElement('#root');
interface Props {
  modalIsOpen: boolean;
  setIsOpen: (modalOpen: boolean) => void;
  title: string;
  action?: string;
  transaction?: Transaction;
}

interface MonetaryFundIntensSelect {
  value: MonetaryFund | undefined;
  label: string;
}

interface TypeFundIntensSelect {
  value: string;
  label: string;
}

export function ModalTrasaction({ title, transaction, setIsOpen, modalIsOpen, action = "insert" }: Props) {
  const defaultValueOptionMonetaryFund = { value: {} as MonetaryFund, label: 'selecione...' }
  const defaultValueOptionTypeFund = { value: '', label: 'selecione...' }
  const [transactionType, setTransactionType] = useState('in');
  const [monetaryFunds, setMonetaryFunds] = useState<MonetaryFund[]>([]);
  const [typeFunds, setTypeFunds] = useState<TypeFund[]>([])
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [monetaryFundSelected, setMonetaryFundSelected] = useState<SingleValue<MonetaryFundIntensSelect>>(defaultValueOptionMonetaryFund);
  const [typeFundSelected, setTypeFundSelected] = useState<SingleValue<TypeFundIntensSelect>>(defaultValueOptionTypeFund);


  const { transactions, setTransactions } = useContext(TrasactionContext);

  const getMyMonetaryFunds = useCallback(async () => {
    setMonetaryFunds(await getMonetaryFundByTypeFund(typeFundSelected?.value ?? ''));
  }, [typeFundSelected]);

  const getMyTypeFunds = useCallback(async () => {
    setTypeFunds(await typeFundService());
  }, [typeFundSelected]);

  useEffect(() => {
    getMyMonetaryFunds();
    getMyTypeFunds();
    if (transaction !== undefined) {
      if (action === 'insert') {
        setMonetaryFundSelected(defaultValueOptionMonetaryFund);
        setQuantity(0);
        setPrice(0);
        setTransactionType("in")
      } else {
        setMonetaryFundSelected({ value: transaction.monetaryFund, label: transaction.monetaryFund?.name ?? '' });
        setQuantity(transaction.quantity);
        setPrice(transaction.price);
        setTransactionType(transaction.transactionType)
      }
    }

  }, [getMyMonetaryFunds, transaction, action])

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
      transactionType,
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

    } else {
      if (transaction?.id !== undefined) {
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

  const monetaryOptions = monetaryFunds.map(data => ({ value: data, label: data.name }))

  const typeFundOptions = typeFunds.map(data => ({ value: data.initials, label: data.name }))

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
        <label>Tipo</label>
        <Select
          options={typeFundOptions}
          onChange={e => setTypeFundSelected(e)}
          value={typeFundSelected}
        // isDisabled={true} 
        /><br />

        <label>Ativo</label>
        <Select
          options={monetaryOptions}
          onChange={e => setMonetaryFundSelected(e)}
          value={monetaryFundSelected}
        // isDisabled={true} +
        /><br />
        <TwoColumnsContainer>
          <div>
            <label>Quantidade</label>
            <input
              type="number"
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              placeholder="Quantidade"
            /><br />
          </div>
          <div>
            <label>Valor</label>
            <input
              type="number"
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              placeholder="valor"
            /><br />
          </div>
        </TwoColumnsContainer>
        <TrasactionTypeContainer>
          <ButtonBox
            type="button"
            isActive={transactionType === 'in'}
            onClick={() => setTransactionType('in')}
            activeColor="#33CC95"
          >
            <img src={incomeImg} alt="Compra" />
            <span>Compra</span>
          </ButtonBox>
          <ButtonBox
            type="button"
            isActive={transactionType === 'out'}
            onClick={() => setTransactionType("out")}
            activeColor="#F00"
          >
            <img src={outmeImg} alt="Venda" />
            <span>Venda</span>
          </ButtonBox>
        </TrasactionTypeContainer>
        <button type="submit">Salvar</button>
      </Container>
    </Modal>
  )
}
