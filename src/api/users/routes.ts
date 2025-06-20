import APIBuilder from "@/lib/utils/API/APIBuilder";
import {OrderInfoInterface} from "@/components/layout/modal/AddOrderModal";


export const twoWayOrderAPi = {
   getUserTwoWayOrderRList: async () => {
      return APIBuilder.get("user/twoWayOrder/list").params({}).build().call<{groupId:string,groupName:string}[]>();

   },
   getTwoWayOrderNameList: async (groupId:string) => {
      return APIBuilder.get("order/to/name/list").params({groupId}).build().call();
   },
   getTwoWaySymbolInfo: async(groupId:string,name:string) => {
      return APIBuilder.get("order/symbol/list").params({groupId,name}).build().call();
   },
   closeSingleOrder: async (id:string,userId:string,  name:string,side: string,count: number) => {
      const sideResult = side === 'buy' ? 'sell' : 'buy';
      return APIBuilder.get("order/close/single/order").params({id,userId,name,sideResult,count}).build().call();
   },
   openOrder: async (id:string,userId:string,  name:string,side: string) => {
      // const sideResult = side === 'buy' ? 'sell' : 'buy';
      return APIBuilder.get("order/open/twoWayOrder").params({id,userId,name,side}).build().call();
   },
   reverseOpenOrderApi: async (id:string,userId:string,groupId,  name:string,side: string) => {
      // const sideResult = side === 'buy' ? 'sell' : 'buy';
      return APIBuilder.get("order/open/reverse/twoWayOrder").params({id,userId,groupId,name,side}).build().call();
   }
}
