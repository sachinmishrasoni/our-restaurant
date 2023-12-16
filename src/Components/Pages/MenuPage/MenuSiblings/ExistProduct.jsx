import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import VegItem from '../../../../Data/VegItem.json'

const ExistProduct = (props) => {
  const { showallproduct } = useParams();
  // send the copmo
  let itemData = VegItem.filter((item) => item.dishname === showallproduct);
  // for check purpose
  let item = VegItem.map((item) => item.dishname);
  return (
    <>
      {
        item.includes(showallproduct)
          ? <props.compo showproductdata={itemData} />
          : <Navigate to={'/menu/pagenotfound'} />
      }
    </>
  )
}

export default ExistProduct