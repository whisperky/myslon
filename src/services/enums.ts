export enum Status {
  COMPLETED = 'Completed',
  IN_PROGRESS = 'In Progress',
}
export enum PaymentMethodEnum {
  'CGPT Token' = 1,
  'Crypto' = 2,
  'Credit / Debit Card' = 3,
  'Auto Plan' = 4,
}
export enum TransactionStatusEnum {
  'ONE TIME PAYMENT' = 1,
  'SUBSCRIBED' = 2,
  'SUCCESSFUL' = 3,
  'UNSUBSCRIBE' = 4,
  'FAILED' = 5,
}

export enum ChainIdsEnum {
  'Ethereum' = 1,
  'Binance' = 56,
  'Polygon' = 137,
  'Avalanche' = 43114,
  'Tron' = 0,
  'Ethereum_Testnet' = 11155111, // sypolia
  'Binance_Testnet' = 97,
  'Polygon_Testnet' = 80001, // Mumbai
}

export enum CreditsEnum {
  'USD' = 0.01,
}
