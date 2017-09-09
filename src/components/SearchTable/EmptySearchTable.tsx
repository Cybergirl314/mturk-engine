import * as React from 'react';
import { EmptyState } from '@shopify/polaris';

import { connect, Dispatch } from 'react-redux';
import { SearchAction, searchRequestSingular } from '../../actions/search';

const mapDispatch = (dispatch: Dispatch<SearchAction>): Handlers => ({
  onSearch: () => dispatch(searchRequestSingular())
});

export interface Handlers {
  onSearch: () => void;
}

const EmptySearchTable = ({ onSearch }: Handlers) => {
  return (
    <EmptyState
      heading="You search results are empty."
      action={{
        content: 'Search HITs',
        onAction: onSearch
      }}
      image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
    >
      <p>Search for HITs to get started.</p>
    </EmptyState>
  );
};

export default connect(null, mapDispatch)(EmptySearchTable);
