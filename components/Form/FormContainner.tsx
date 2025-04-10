import { useToast } from "@/hooks/use-toast";
import { type } from "os";
import React, { use } from "react"
import { useActionState } from "react"
import { useEffect } from 'react'
import { Toaster, toast } from 'sonner'
import { actionFunction } from "@/utils/types";


const initialState = {
    message: ''
}

const FormContainner = ({ action, children }
    : { action: actionFunction, children: React.ReactNode }) => {

    /* const { toast } = useToast(); */
    const [state, formAction] = useActionState(action, initialState);

    useEffect(() => {
        if (state.message.length <= 21) {
            console.log("State : ", state)
            toast.success(state.message);
        } else {
            toast.error(state.message);
        }
    }, [state])

    return (
        <form action={formAction}>
            {children}
        </form>
    )
}
export default FormContainner
