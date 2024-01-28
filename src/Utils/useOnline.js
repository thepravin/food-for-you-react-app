import { useEffect, useState } from "react";


const useOnline = ()=>{
    const [isOnline , setIsOnline]= useState(true); // default , online

    // check online ones when page render
    useEffect(()=>{

        const handelOnline = ()=>{
            setIsOnline(true);
        }
        const handelOffline = ()=>{
            setIsOnline(false);
        }

        window.addEventListener("online",handelOnline)

        window.addEventListener("offline", handelOffline)

        // clean up the code
        return ()=>{
            window.removeEventListener("online",handelOnline);
            window.removeEventListener("offline",handelOffline)
        }
    },[])



    // return - true or false
    return isOnline;
}

export default useOnline;