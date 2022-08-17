import React from 'react'
import OverallEarningStats from '../AdminDashboard.js/OverallEarningStats'
import SalesStats from './SalesStats'

const EarningStats = () => {
  return (
    <div className='ms-3 me-4  mb-3' style={{height:"75vh"}}>
      <OverallEarningStats/>
      <SalesStats/> 
    </div>

  )
}

export default EarningStats