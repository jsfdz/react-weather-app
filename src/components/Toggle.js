import React from 'react'

export const Toggle = ({ onClick }) => {
    return (
        <div className="checkbox-form">
            <div className="toggle">
                <input type="checkbox" className="toggle-input" id="toggle" defaultValue={1} onChange={onClick} />
                <label className="toggle-label" htmlFor="toggle">
                    <span className="toggle-content">
                        <span className="toggle-text">C°</span>
                        <span className="toggle-switch"><span className="toggle-handle" /></span>
                        <span className="toggle-text">F°</span>
                    </span>
                </label>
            </div>
        </div>
    )
}