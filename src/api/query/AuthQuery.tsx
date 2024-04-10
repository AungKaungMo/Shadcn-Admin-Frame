import { signinAccount } from "../axios-call/AuthAxios";
import { useMutation } from '@tanstack/react-query';

export const useSignInAccount = () => {
    return useMutation({
        mutationKey: ['users'],
        mutationFn: signinAccount
    })
};

