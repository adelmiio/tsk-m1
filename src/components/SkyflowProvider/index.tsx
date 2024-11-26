/*
 Copyright (c) 2022 Skyflow, Inc.
*/
import React, {useMemo} from 'react';
import Skyflow from '../../core/Skyflow';
import { IConfig, SkyflowConfigIntialState } from '../../utils/constants';

export interface ISkyflowProvider {
    config: IConfig,
}

export const skyflowContext = React.createContext<Skyflow>(null);

const SkyflowProvider: React.FC<React.PropsWithChildren<ISkyflowProvider>> = ({children,config}): JSX.Element => {
  const instance = useMemo(() => {
    if (!config) return null;
    return new Skyflow(config);
  }, [config]);
  
  return <skyflowContext.Provider value={instance}>{children}</skyflowContext.Provider>
}

export default React.memo(SkyflowProvider)