import { rootReducer } from './store';

export type ExtraArguments = {
    api: object;
  };
  
export type RootState = ReturnType<typeof rootReducer>;