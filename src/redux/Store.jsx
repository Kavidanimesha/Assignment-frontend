import {configureStore} from '@reduxjs/toolkit'
import productReducer from './productSlicer'

export const Store = configureStore ({
    product: productReducer
})