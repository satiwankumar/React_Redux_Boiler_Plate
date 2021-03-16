import React from 'react'
import { toast } from 'react-toastify';
const notificationComponent = ({message}) => {
    return (
        <>
             { toast.success(`🦄 ${message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })}
        </>
    )
}

export default notificationComponent
