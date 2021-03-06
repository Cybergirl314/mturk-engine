import { SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_REQUEST } from '../constants';
import { SearchResults } from '../types';

export interface SearchSuccess {
  readonly type: SEARCH_SUCCESS;
  readonly data: SearchResults;
}

export interface SearchFailure {
  readonly type: SEARCH_FAILURE;
}

export interface SearchRequest {
  readonly type: SEARCH_REQUEST;
  readonly continuous: boolean;
}

export type SearchAction = SearchSuccess | SearchFailure | SearchRequest;

export const searchSuccess = (data: SearchResults): SearchSuccess => ({
  type: SEARCH_SUCCESS,
  data
});

export const searchFailure = (): SearchFailure => ({
  type: SEARCH_FAILURE
});

export const searchRequest = (continuous: boolean): SearchRequest => ({
  type: SEARCH_REQUEST,
  continuous
});

export const searchRequestContinuous = (): SearchRequest => ({
  type: SEARCH_REQUEST,
  continuous: true
});

export const searchRequestSingular = (): SearchRequest => ({
  type: SEARCH_REQUEST,
  continuous: false
});
