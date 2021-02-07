import React from 'react'

export const Skeleton = () => {
    return (
        <div className="skeleton">
            <div className="image"></div>
            <p className="line temp"></p>
            <p className="line description"></p>
            <p className="line location"></p>
            <p className="line btn-switch"></p>
            <div className="row">
                <p className="line"></p>
                <p className="line"></p>
                <p className="line"></p>
            </div>
        </div>
    )
}
