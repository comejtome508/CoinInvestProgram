import RealtimeChart from '../../components/Charts/RealtimeChart';
import React from 'react';


import Gnb from '../../components/Gnb/gnb';
import TradingTable from '../../components/TradingTable/tradingTable'; 

const index = () => {
  return (
      <>
        <RealtimeChart />
        <TradingTable />
      </>

  )
}

export default index;