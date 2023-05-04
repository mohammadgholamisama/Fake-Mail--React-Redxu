import { configureStore } from "@reduxjs/toolkit";
import getMailReducer from './reducers/fakeMailReducer'
import getInboxReducer from './reducers/inboxMailReducer'

const store = configureStore({
    reducer: {
        mail: getMailReducer,
        inbox: getInboxReducer
    }
})

export default store