import {createTypedHooks} from "easy-peasy"
import { StoreModel } from "./type";

const typeHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typeHooks.useStoreActions;
export const useStoreState = typeHooks.useStoreState;
export const useStoreDispatch = typeHooks.useStoreDispatch;