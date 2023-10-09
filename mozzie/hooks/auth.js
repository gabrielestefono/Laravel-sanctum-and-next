import axios from "../lib/axios";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";


export const useAuth = () => {
    const router = useRouter();
    // Loading
    const [isLoading, setIsLoading] = useState(true);

    // User
    const {data: user, error, mutate} = useSWR("/api/v1/user",
        () => axios.get("/api/v1/user")
        .then(response => response.data.data)
        .catch(error => {
            if(error.response.status !== 409){
                throw error;
            }
        }),
    );

    // CSRF
    const csrf = () => axios.get("/sanctum/csrf-cookie");

    // Login

    //Logout
    return{
        user,
        csrf,
        isLoading,
        login,
        logout
    }
}
