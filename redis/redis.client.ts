import { createClient } from "redis";

let client=createClient();
export const redfun=()=>{
   client.connect().then(()=>{
    console.log("redis connected")
   })

}
export default client