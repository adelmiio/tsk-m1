/*
 Copyright (c) 2022 Skyflow, Inc.
*/
import React from 'react';
import useSkyflowContext from '../../components/SkyflowProvider/hook';
import CollectContainer from '../../core/CollectContainer';

const useCollectContainer = () => {
  const skyflowClient = useSkyflowContext(); // Skyflow | null

  return React.useMemo(() => {
    if (!skyflowClient) return null;
    return new CollectContainer(skyflowClient);
  }, [skyflowClient]);
};


export default useCollectContainer;
