import { axios } from '@/service/axios'
import { LoginDataType } from '@/types'

export const signinAccount = async (
    user: LoginDataType,
) => {
    try {
        const response = await axios.post("/v1/auth/login", user);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};