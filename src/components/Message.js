import React from 'react'

export const Message = ({ msg }) => {
    return (
        <>
            {msg && <div className="notification"><p>{msg}</p></div>}
        </>
    )
}