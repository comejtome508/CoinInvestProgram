import React from 'react';
import AccountStatus from "../../components/dashboard/AccountStatus";
import RealtimeChart from "../../components/dashboard/RealtimeChart";
import Gnb from 'components/common/Gnb';
import TradingTable from "../../components/dashboard/TradingTable";

const index = () => {
  return (
      <>
         <AccountStatus />
         <RealtimeChart />
         <TradingTable />
      </>
  )
}

export default index;