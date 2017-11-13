import React from 'react';//was parent of FilteredFruitList and Filter

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
    </div>
  )

}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}


export default FruitBasket;
