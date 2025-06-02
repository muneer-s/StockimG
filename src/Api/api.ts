import userRoutes from "../Service/endPoints.ts";
import Api from "../Service/axios.ts";
import type { UserData } from "../Interfaces/Interfaces.ts";

const signup = async (userData: UserData) => {
    try {
        console.log(99, userData)
        const result = await Api.post(userRoutes.signup, userData)
        console.log('result : ', result)
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
        throw error
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

const uploadImage = async (formData: FormData) => {
    try {
        const response = await Api.post(userRoutes.addImage, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Upload failed:", error);
        throw error;
    }
};

const getImages = async (email: string) => {
    try {
        const response = await Api.get(`${userRoutes.viewImages}?email=${email}`);
        return response.data;
    } catch (error) {
        console.log(1111,error);
        throw error;
    }
};


const editImage = async (imageId: string | undefined, formData: FormData) => {
    try {
        const response = await Api.put(userRoutes.editImage, formData, {
            params: { imageId },
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        console.log('edit image nte respinse : ',response)
        return response.data
    } catch (error) {
        throw error;
    }
}

const deleteImage = async (imageId: string) => {
    try {
        const response = await Api.delete(userRoutes.deleteImage, { params: { imageId } })
        return response.data
    } catch (error) {
        throw error
    }
}

const updateImageOrder = async (images: { _id: string, position: number }[]) => {
  try {
      return await Api.put(userRoutes.reorder, { images });

  } catch (error) {
    throw error
  }
};



export {
    verifyOtp,
    resendOtp,
    signup,
    login,
    logout,
    uploadImage,
    getImages,
    editImage,
    deleteImage,
    updateImageOrder
}