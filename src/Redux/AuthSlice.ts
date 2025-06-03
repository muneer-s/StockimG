import { createSlice } from '@reduxjs/toolkit'

const userInfoRaw = localStorage.getItem('userInfo');

const initialState = {
    userData:
        userInfoRaw && userInfoRaw !== 'undefined'
            ? JSON.parse(userInfoRaw)
            : null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserCredential: (state, action) => {
            state.userData = action.payload;
            if (action.payload) {
                localStorage.setItem('userInfo', JSON.stringify(action.payload));
            } else {
                localStorage.removeItem('userInfo');
            }
        },
        userLogout: (state) => {
            state.userData = null;
            localStorage.removeItem('userInfo');
        }

    },
})


export const {
    setUserCredential,
    userLogout,
} = authSlice.actions

export default authSlice.reducer;