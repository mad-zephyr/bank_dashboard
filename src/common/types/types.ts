type IssuingNetwork = "VISA" | "MASTERCARD";

type CardData = {
  IssuingNetwork: string;
  CardNumber: string;
  Bank: string;
  Name: string;
  Address: string;
  Country: string;
  MoneyRange: string;
  CVV: number;
  Expiry: string;
  Pin: number;
  active: boolean;
  favorite: boolean;
};

type CardProps = Pick<
  CardData,
  "IssuingNetwork" | "CardNumber" | "MoneyRange" | "active" | "favorite"
>;

export type { IssuingNetwork, CardData, CardProps };
