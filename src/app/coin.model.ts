export interface coin{
    id:string,
    name:string,
    symbol:string,
    market_data: {
        current_price: {
            usd:number
        }},
         image: {
            thumb: string,
            small: string,
            large: string
        }
}