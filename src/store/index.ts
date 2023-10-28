import { configureStore } from '@reduxjs/toolkit'
import headerRed from './HeaderSlice';
import contactRed from './ContactSlice'
import contentRed from './ContentSlice'
const store = configureStore({
    reducer: {
        headerLinks: headerRed,
        contactData: contactRed,
        contentData: contentRed,
    },
})

export default store;