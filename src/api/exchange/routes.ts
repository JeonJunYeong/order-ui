import APIBuilder from "@/lib/utils/API/APIBuilder";

export const exchangeOrderApi = {
    exchangeSaveOrder: async(params:{exchange:string,price:number,count:number}) => {
        APIBuilder.post("/order/exchange/save/order",params).params({}).build().call()
    },
    getMasterData:async () => {
        return APIBuilder.get("/order/exchange/master/list").params({}).build().call<>();
    },
    getDetailData:async (exchange:string) => {
        return APIBuilder.get("/order/exchange/detail/list").params({exchange}).build().call<>();
    }
}
