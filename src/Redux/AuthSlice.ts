import { createSlice } from '@reduxjs/toolkit'

const userInfoRaw = localStorage.getItem('userInfo');
const userAddressRaw = localStorage.getItem('userAddress');

const initialState = {
    userData:
        userInfoRaw && userInfoRaw !== 'undefined'
            ? JSON.parse(userInfoRaw)
            : null,
    user:
        userAddressRaw && userAddressRaw !== 'undefined'
            ? JSON.parse(userAddressRaw)
            : null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('userAddress', JSON.stringify(action.payload));
        },
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
            state.user = null;
            localStorage.removeItem('userInfo');
            localStorage.removeItem('userAddress');
        }

    },
})


export const {
    setUserCredential,
    userLogout,
    saveUser,

} = authSlice.actions

export default authSlice.reducer;