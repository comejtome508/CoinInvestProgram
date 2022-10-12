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

export interface OrderInfo {
    created_at: string,
    executed_volume: string,
    locked: string,
    market: string,
    ord_type: string,
    paid_fee: string,
    price: string,
    remaining_fee: string,
    remaining_volume: string,
    reserved_fee: string,
    side: string,
    state: string,
    trades_count: number,
    uuid: string,
    volume: string,
}

export enum Currency {
    KRW = 'KRW',
    BTC = 'BTC',
}