import React from 'react'

export default function TravelCard  (props) {
  return (
    <div className='travel--card'>
        <div className='travel--img'>
        <img src={`../images/${props.item.photo}`} alt="destination-photo" ></img>
        </div>
        <div className='travel--info'>
            <div className='destination--loc'>
              <span className='logo'> 
            <ion-icon name="location-outline">

            </ion-icon>
            </span>
        
              <span className='country' >   {props.item.place}  </span>
            
            <a href={props.item.link} className='link-to-destination'>
                  View on Google Maps
                </a>
            
            </div>
            <div className='destination--name'>
                {props.item.title}

           </div>
           <div className='destination--date'>
            {props.item.stayduration}
           </div>
           <div className='destination-exp'>
            {props.item.experience}

           </div>
        </div>
     

    </div>
  )
}

