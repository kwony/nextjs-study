import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState ={
    path: ''
}

const restorePage = createSlice( {
    name: 'restorePage',
    initialState,
    reducers: {
        setRestorePage(state, action) {
            state.path = action.payload;
        },
    }
})

export const restorePageActions = { ...restorePage.actions }

export default restorePage