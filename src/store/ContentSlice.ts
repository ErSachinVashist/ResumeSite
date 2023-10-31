
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import useContentful from "../services/contentul";

export const getContent = createAsyncThunk(
    'contentSlice/getContent',
    async (reqObj) => {
        const { getData } = useContentful();
        const data = await getData(reqObj.type, { ...reqObj })
        return { data, type: reqObj.type }
    }
)

const contentSlice = createSlice({
    name: 'contentSlice',
    initialState: {},
    reducers: {},
    extraReducers: {
        [getContent.pending]: (state) => {
            // state.loading = true
        },
        [getContent.fulfilled]: (state, { payload }) => {
            let data = payload.data
            if (payload.type === 'aboutMe') data = payload.data[0]
            state[payload.type] = data
        },
        [getContent.rejected]: (state) => {
            // state.loading = false
        }
    },
})

export default contentSlice.reducer
