
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import useContentful from "../services/contentul";

export const getData = createAsyncThunk(
    'contentSlice/getData',
    async (type) => {
        const { getData } = useContentful();
        const data = await getData(type)
        return { data, type }
    }
)

const contentSlice = createSlice({
    name: 'contentSlice',
    initialState: {},
    reducers: {},
    extraReducers: {
        [getData.pending]: (state) => {
            // state.loading = true
        },
        [getData.fulfilled]: (state, { payload }) => {
            let data = payload.data
            if (payload.type === 'aboutMe') data = payload.data[0]
            state[payload.type] = data
        },
        [getData.rejected]: (state) => {
            // state.loading = false
        }
    },
})

export default contentSlice.reducer
