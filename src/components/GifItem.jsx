import React, { useState } from 'react'


const GifItem = ({title, url, id}) => {
    const [expanded, setExpanded] = useState(false)

    const toggleExpanded = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={expanded ? 'modal' : 'card' } onClick={toggleExpanded}>
            <img src={url} alt={title} />
            {expanded && (
                <button className='close-button' onClick={toggleExpanded}>
                    X
                </button>
                )
            }
            { expanded ? null : <p>{title}</p> }

        </div>
    )
}

export default GifItem