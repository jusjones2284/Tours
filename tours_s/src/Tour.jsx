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
          type='button'
          className='btn btn-block 
          delete-btn'
          onClick={()=> removedTour(id)}
          >
            not interested

          </button>
        </div>
        
    </article>
  )
}

export default Tour