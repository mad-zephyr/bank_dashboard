type IssuingNetwork = "VISA" | "MASTERCARD";

type CardData = {
  IssuingNetwork: IssuingNetwork;
  CardNumber: number;
  Bank: string;
  Name: string;
  Address: string;
  Country: string;
  MoneyRange: string;
  CVV: number;
  Expiry: string;
  Pin: number;
};

type CardProps = Pick<CardData, "IssuingNetwork" | "CardNumber" | "MoneyRange">;

export type { IssuingNetwork, CardData, CardProps };
