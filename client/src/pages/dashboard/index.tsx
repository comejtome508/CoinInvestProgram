import RealtimeChart from '../../components/Charts';
import React from 'react';


import Gnb from '../../components/Gnb/gnb';
import TradingTable from '../../components/TradingTable'; 

const index = () => {
  return (
      <>
        <RealtimeChart />
        <TradingTable />
      </>
  )
}

export default index;