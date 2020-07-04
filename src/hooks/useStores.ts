import React from 'react';
import storesContext from '../contexts/index';
import { IStores } from '../interfaces/IStores';

const useStores = (): IStores => React.useContext(storesContext);

export default useStores;
