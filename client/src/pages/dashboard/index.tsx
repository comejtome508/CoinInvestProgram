import React from 'react';

import MyAccounts from 'components/MyAccounts';
import RealtimeChart from 'components/Charts';
import Gnb from 'components/Gnb/gnb';
import TradingTable from 'components/TradingTable';

const index = () => {
  return (
      <>
        <MyAccounts />
        <RealtimeChart />
        <TradingTable />
      </>
  )
}

export default index;