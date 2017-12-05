import { READ_PERSISTED_STATE, WRITE_PERSISTED_STATE } from '../constants';
import { PersistedStateKeys } from '../types';

export interface ReadPersistedState {
  readonly type: READ_PERSISTED_STATE;
}

export interface WritePersistedState {
  readonly type: WRITE_PERSISTED_STATE;
  readonly whiteList: PersistedStateKeys[];
}

export const readPersistedState = (): ReadPersistedState => ({
  type: READ_PERSISTED_STATE
});

export const writePersistedState = (
  whiteList: PersistedStateKeys[]
): WritePersistedState => ({
  type: WRITE_PERSISTED_STATE,
  whiteList
});
