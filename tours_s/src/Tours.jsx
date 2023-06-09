import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removedTour}) => {
  // console.log(tours);

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"> </div>
      </div>
      <div className="tours">
        {tours.map((tour)=> {
         return <Tour 
         {...tour} 
         key={tour.id}
         removedTour={removedTour}
         />
        })}
      </div>
    </section>
  )
}

export default Tours