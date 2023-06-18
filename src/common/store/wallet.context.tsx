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
import { localStorageService } from "../service/useLocalStorage";

type CardsContextProps = {
  totalCards: number;
  cardsData: CardData[];
  onDeactivateCard: (cardNumber: string) => void;
  onSetFavoriteCard: (cardNumber: string) => void;
};

const CardsContextDefault: CardsContextProps = {
  totalCards: 0,
  cardsData: [],
  onDeactivateCard: () => {},
  onSetFavoriteCard: () => {},
};

const CardsContext = createContext(CardsContextDefault);
export const useCardsContext = () => useContext(CardsContext);

export const CardsContextProvider: FC<{
  children: ReactNode[] | ReactNode;
}> = ({ children }) => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const localCardsData = localStorage.getItem("cardData");

    const cardsData = localCardsData ? JSON.parse(localCardsData) : null;

    if (localCardsData) {
      setCards(cardsData);
    } else {
      localStorage.setItem("cardData", JSON.stringify(mockCardsData));
      setCards(mockCardsData);
    }
  }, []);

  const totalCards = useMemo(() => cards.length, [cards]);

  const deactivateCardHandler = useCallback((cardNumber: string) => {
    setCards((prevState) => {
      const updatedCards = prevState.map((card) =>
        card.CardNumber === cardNumber
          ? {
              ...card,
              active: !card.active,
            }
          : card
      );
      localStorage.setItem("cardData", JSON.stringify(updatedCards));
      return updatedCards;
    });
  }, []);

  const setFavoriteCardHandler = (cardNumber: string) => {
    setCards((prevState) => {
      const updatedCards = prevState.map((card) =>
        card.CardNumber === cardNumber
          ? {
              ...card,
              favorite: !card.favorite,
            }
          : card
      );
      localStorage.setItem("cardData", JSON.stringify(updatedCards));
      return updatedCards;
    });
  };

  return (
    <CardsContext.Provider
      value={{
        totalCards,
        cardsData: cards,
        onDeactivateCard: deactivateCardHandler,
        onSetFavoriteCard: setFavoriteCardHandler,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
