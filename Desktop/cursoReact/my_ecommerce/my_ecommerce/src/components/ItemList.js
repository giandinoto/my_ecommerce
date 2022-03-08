/* // Componente PRESENTACIONAL 
. Mapeo del array que viene por props de ILC
. Y por cada vuelta retorna un item.
*/
import React from 'react'
import Item from './Item'


export const ItemList = ({ items }) => {
    return (

        <section>
        <div class="card-deck">

            {items.map(item => {

                return (
                    <Item
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        stock={item.stock}
                    />
                   
                )
            })
            }
        </div>
           </section> 
    )
}

export default ItemList