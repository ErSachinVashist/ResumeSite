import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { toast, Slide } from 'react-toastify';

const reqUrl = "process.env.REACT_APP_HOSTURL"

export const sendMsg = createAsyncThunk(
    'contactData/sendMsg',
    async (data) => {
        const resp = await axios.post(reqUrl + '/feedbacks', data)
        return resp.data
    }
)

const contactSlice = createSlice({
    name: 'contactData',
    initialState: {
        sending: false,
    },
    reducers: {},
    extraReducers: {
        [sendMsg.pending]: (state) => {
            state.sending = true
        },
        [sendMsg.fulfilled]: (state, { payload }) => {
            state.sending = false
            toast.warn(`Thanks ${payload.name} for your feedback... :)`, { transition: Slide })
        },
        [sendMsg.rejected]: (state) => {
            state.sending = false
        }
    },
})

export default contactSlice.reducer