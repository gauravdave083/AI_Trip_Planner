import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({trip}) {
  return (
    <div className='my-4'>
      <h2 className='font-bold text-xl'>Places to Visit</h2>
      <div>
        {trip?.tripData?.itinerary.map((item,index)=>(
            <div key={index}>
                <h2 className='font-medium text-l'>Day {item?.day}</h2>
                <div className='grid md:grid-cols-2 gap-4'>
                        {item.plan.map((place,index)=>(
                          <div>
                            <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
                            <PlaceCardItem place={place} />
                          </div>
                        ))}
                    </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit