import React from 'react'

const Tour = ({name,id, image, info, price, removedTour}) => {
  return (
    <article className='single-tour'>
        <img 
        src={image}
        alt={name}
        className='img'
        />
        <span className='tour-price'>${price}</span>
        <div className="tour-info">
          <h5>{name}</h5>
          <p>{info}</p>
          <button
          onClick={()=> removedTour(id)}
          >
            delete

          </button>
        </div>
        
    </article>
  )
}

export default Tour