import { useState } from "react"


export const useFetching = (callback: any) : [() => Promise<void>, boolean, string] => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const fetching = async () => {
        try{
            setIsLoading(true);
            await callback();
        } catch(e: any){
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}

