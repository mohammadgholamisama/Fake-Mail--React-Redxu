import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getInbox = createAsyncThunk(
    'GET_INBOX',
    async (params, { dispatch }) => {
        const username = params.username;
        const domain = params.domain;
        const response = await fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${username}&domain=${domain}`)
        const data = await response.json()
        return data
    }
)


const initialState = {
    inbox: [],
    loading: false,
    error: null
}

const getInboxSlice = createSlice({
    name: 'inbox',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getInbox.pending, state => {
                state.loading = true
            })
            .addCase(getInbox.fulfilled, (state, action) => {
                state.loading = false
                state.inbox = action.payload
            })
            .addCase(getInbox.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default getInboxSlice.reducer