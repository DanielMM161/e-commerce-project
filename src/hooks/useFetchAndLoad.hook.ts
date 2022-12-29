
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { AxiosCall } from '../models';

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    
    try {
      let result = {} as AxiosResponse<any>;
      result =  await axiosCall.call;
      if (result.status === 200) {
        setLoading(false);
        return result.data
      
      } else {
        setLoading(false);    
      
      }
    } catch (error) {     
      console.log("entro en error");
            
      setLoading(false);
      throw error
    }
  };

  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { loading, callEndpoint };
};

export default useFetchAndLoad;
