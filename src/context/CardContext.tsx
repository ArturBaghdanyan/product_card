'use client';

import { useRouter } from 'next/router';
import { 
  FC,
  ReactNode, 
  createContext, 
  useState,
  useEffect 
} from 'react';
import { CardType } from '@/types/cardType';

type CardProviderProps = {
    children: ReactNode;
  };

interface CardContextType {
  card: CardType[];
  setCard: React.Dispatch<React.SetStateAction<CardType[]>>;
  addItemToCard: ({
    product,
    name,
    price,
    image,
    stock,
    seller,
    quantity
  }: any
  ) => void;
}
const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider:FC<CardProviderProps> = ({children}) => {
  const [card, setCard] = useState<any>([]);

  const router = useRouter;

  const setCardToState = () => {
    const storedCard = localStorage.getItem('card');
    if (storedCard) {
      setCard(JSON.parse(storedCard) as CardType[]);
    }
  };

  useEffect(() => {
    setCardToState()
  }, [])

  const addItemToCard = async ({ 
    product,
    name,
    price,
    image,
    stock,
    seller,
    quantity = 1
    }: any) => {
    const item = {
      product,
      name,
      price,
      image,
      stock,
      seller,
      quantity
    };

    const isItemExist = card?.cardItems.find(
      (i: any) => i.product === item.product
    )

    let newCardItems;

    if(isItemExist) {
      newCardItems = card?.cardItems?.map((i: any) => (
        i.product === isItemExist.product ? item : i
      ))
    } else {
      newCardItems = [...(card?.cardItems) || [], item] as any
    }

    localStorage.setItem("card", JSON.stringify({ cardItems: newCardItems }))
    setCardToState();
  }

  return (
  <CardContext.Provider
    value={{
        card,
        setCard,
        addItemToCard
    }}
    >
      {children}
  </CardContext.Provider>
  )
}
