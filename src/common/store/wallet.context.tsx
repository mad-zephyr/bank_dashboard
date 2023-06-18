import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import mockCardsData from "src/mock/cardsMock.json";
import { CardData } from "../types/types";
import { useLocalStorage } from "../service/useLocalStorage";

type CardsContextProps = {
  totalCards: number;
  cardsData: CardData[];
  onDeactivateCard: (cardNumber: string) => void;
};

const CardsContextDefault: CardsContextProps = {
  totalCards: 0,
  cardsData: [],
  onDeactivateCard: () => {},
};

const CardsContext = createContext(CardsContextDefault);
export const useCardsContext = () => useContext(CardsContext);

export const CardsContextProvider: FC<{
  children: ReactNode[] | ReactNode;
}> = ({ children }) => {
  const { localStorageGet, localStorageSet } = useLocalStorage();

  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const localCardsData = localStorageGet<CardData[]>("cardData");

    if (localCardsData) {
      setCards(localCardsData);
    } else {
      localStorageSet("cardData", mockCardsData);
      setCards(mockCardsData);
    }
  }, []);

  const totalCards = useMemo(() => cards.length, [cards]);

  const deactivateCardHandler = useCallback(
    (cardNumber: string) => {
      setCards((prevState) => {
        const updatedCards = prevState.map((card) =>
          card.CardNumber === cardNumber
            ? {
                ...card,
                active: !card.active,
              }
            : card
        );
        localStorageSet("cardData", updatedCards);
        return updatedCards;
      });
    },
    [localStorageSet]
  );

  return (
    <CardsContext.Provider
      value={{
        totalCards,
        cardsData: cards,
        onDeactivateCard: deactivateCardHandler,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
