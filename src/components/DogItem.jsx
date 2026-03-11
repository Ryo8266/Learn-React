import React from 'react'

export default function DogItem({ name, description }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    )
}
