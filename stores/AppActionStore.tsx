import {AppAction} from "./type"
import {action} from "easy-peasy";

const AppActions : AppAction = {
    OnAuthPage:true,
    visiteAuthPage:action((state,payload)=>{
        state.OnAuthPage = payload 
    })
}

export {
    AppActions
}