import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEmail = createAsyncThunk(
    'FETCH_MAIL',
    async () => {
        const response = await fetch('https://www.1secmail.com/api/v1/?action=genRandomMailbox')
        const data = await response.json()
        return data
    }
)

const initialState = {
    mail: [],
    loading: false,
    error: null
}

const getMailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder
            .addCase(fetchEmail.pending, state => {
                state.loading = true
            })
            .addCase(fetchEmail.fulfilled, (state, action) => {
                state.loading = false
                state.mail = action.payload
            })
            .addCase(fetchEmail.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    })
})
export default getMailSlice.reducer