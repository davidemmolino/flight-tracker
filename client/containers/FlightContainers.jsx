//dumb component
import React from 'react'
//presentational component
//read data from props

export default function FlightContainers(props) {
    return (
        <div>
            <p>This is my presentational component, this is my props {props.testing} </p>
        </div>
    )
}
