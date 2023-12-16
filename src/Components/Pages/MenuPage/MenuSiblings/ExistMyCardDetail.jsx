import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import VegItem from '../../../../Data/VegItem.json'

const ExistMyCardDetail = (props) => {
    const { showallproduct } = useParams();
    const { singleproduct } = useParams();
    let VegDishName = VegItem.map((item) => item.dishname)
    let SingleItem = VegItem.filter((item) => item.dishname === showallproduct)
    let Alldishname = SingleItem.map((item) => item.varieties.map((allname) => allname.name))

    // Find Single Item
    function CheckSingleItem(arr,snglitm){
      let myarr = [];
      arr.map((items) => items.varieties.filter((fnditm) => fnditm.name === snglitm && (myarr.push(fnditm)) ))
      return myarr[0];
    }
    // console.log(CheckSingleItem(VegItem, singleproduct))
    
  return (
    <>
        {
            VegDishName.includes(showallproduct) && Alldishname[0].includes(singleproduct)
            ? <props.compo singledata={CheckSingleItem(VegItem, singleproduct)} className={'myCardDetail-Box active'} />
            : <Navigate to={'/menu/pagenotfound'} />
        }
        
    </>
  )
}

export default ExistMyCardDetail