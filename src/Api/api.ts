import userRoutes from "../Service/endPoints.ts";
import Api from "../Service/axios.ts";
import type { UserData } from "../Interfaces/Interfaces.ts";

const signup = async (userData: UserData) => {
    try {
        console.log(99,userData)
        const result = await Api.post(userRoutes.signup, userData)
        console.log('result : ',result)
        return result.data;
    } catch (error) {
        throw error
    }
}

const verifyOtp = async (data: { otp: string, userId: string | null }) => {
    try {
        const otp = parseInt(data.otp);
        const result = await Api.post(userRoutes.verifyOtp, { otp, userId: data.userId });
        return result.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const resendOtp = async ({ email }: { email: string }) => {
    try {
        const response = await Api.post(userRoutes.resendOtp, { email });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}



const login = async (credentials: { email: string; password: string }) => {
    try {
        const result = await Api.post(userRoutes.singIn, credentials);
        return result.data
    } catch (error: any) {
        console.log(error);
        if (error.response && error.response.data) {
            throw error.response.data;
        } else {
            throw { message: 'Network error or server unavailable' };
        }
    }
}

const logout = async (Credential: { email: string }) => {
    try {
        const result = await Api.put(userRoutes.logout, Credential)
        return result.data
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {
    verifyOtp,
    resendOtp,
    signup,
    login,
    logout,
}