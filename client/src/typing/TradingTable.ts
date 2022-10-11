export interface Trading {
    key:string;
    side: string ;
    price: string ;
    created_at: string ;
    executed_volume: string ;
    paid_fee: string ;
}

export type TradingDetail = Exclude<Trading, 'key'> & {no: number, debt: number}
export type TradingCreation = Pick<Trading, 'price' | 'paid_fee'>

export interface Account {
    avg_buy_price: string,
    avg_buy_price_modified: boolean,
    balance: string,
    currency: string,
    locked: string,
    unit_currency: string,
}