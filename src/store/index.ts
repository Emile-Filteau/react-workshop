import { createStore, combineReducers } from "redux";

import * as reducers from "./reducers";

export interface StoreState {
  user: any;
}

interface CreateStoreOptions {
  initialState: any;
}

export default function createEnhancedStore({
  initialState
}: CreateStoreOptions) {
  return createStore(combineReducers(reducers), initialState);
}
