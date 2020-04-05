import {Action} from "easy-peasy"

interface AppAction{
    OnAuthPage:boolean
    visiteAuthPage:Action<AppAction,boolean>
}

interface StoreModel {
    AppAction:AppAction
}

export {
    AppAction,
    StoreModel
}