import React from 'react'

export const Item = ({ id, title, description,stock }) => {

  return (


    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Unique id: {id}</h6>
        <p class="card-text">{description}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Stock disponible: {stock}</small>
      </div>
    </div>

  )
}

export default Item;