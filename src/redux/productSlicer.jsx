import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchProduct = createAsyncThunk("fetchProduct", async()=> {
    const data = await fetch( 'http://localhost:5000/api/products')
    return data.json()
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state,action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProduct.fulfilled, (state,action)=> {
            state.isLoading = false
            state.data= action.payload
        })
        builder.addCase(fetchProduct.rejected, (state,action) => {
            state.error = true
        })
    }
})

export default productSlice.reducer