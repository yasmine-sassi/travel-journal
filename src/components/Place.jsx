import React from 'react'


export default function Place(props) {
  return (
    <div className='place'>
      <div>
        <img className="place-img" src={props.imageUrl} alt={props.title} />
      </div>
      <div className="place-infos">
        <h2 className="place-location">{props.location}</h2>
        <a target='_blank'className="place-location-url" href={props.googleMapsUrl}>
          View on Google Maps
        </a>
        <h3 className="place-title">{props.title}</h3>
        <p className="place-description">{props.description}</p>
        <hr />
      </div>
    </div>
  )
}