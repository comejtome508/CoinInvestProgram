import React,{useEffect} from 'react'
import { QuoationService } from "node-upbit";

import { useGetAllMarketCode } from '../../queries/upbitQueries';


const RealtimeChart = () => {

  const { isLoading, data, isError, error, isFetching} = useGetAllMarketCode();

  return (
      <>
        <div>실시간 차트</div>
         <div style={{height : '300px', width: '100%', margin: '30px 0px' ,backgroundColor:'grey'}}>
            { data?data:'' }
           </div>
      </>
  )
}

export default RealtimeChart