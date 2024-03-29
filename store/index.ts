import {
    TypedUseSelectorHook,
    useSelector as useReduxSelector,
} from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import restorePage from './restorePage'

const rootReducer = combineReducers({
    restorePage: restorePage.reducer
})

export type RootState = ReturnType<typeof rootReducer>; 

let initialRootState: RootState;

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        if (state === initialRootState) {
            return {
                ...state,
                ...action.payload,
            };
        }
        return state;
    }
    return rootReducer(state, action);
};

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const initStore: MakeStore = () => {
    const store = configureStore({
      reducer,
      devTools: true,
    });
    initialRootState = store.getState();
    return store;
  };
  
  export const wrapper = createWrapper(initStore);