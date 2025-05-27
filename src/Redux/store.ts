import { configureStore } from '@reduxjs/toolkit'
import authReducer from './AuthSlice'
import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})

// Types for use with TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
