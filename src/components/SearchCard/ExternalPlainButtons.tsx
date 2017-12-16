import * as React from 'react';
import { ButtonGroup, Button } from '@shopify/polaris';
import { SearchResult } from '../../types';
import TOpticonButton from './TOpticonButton';
import { previewBaseUrl } from '../../constants/urls';
import { generateAcceptUrl } from '../../utils/urls';

export interface Props {
  readonly hit: SearchResult;
}

class MiscActionsPopOver extends React.PureComponent<Props, never> {
  public render() {
    const { hit: { groupId, requester } } = this.props;

    return (
      <ButtonGroup>
        <Button plain external url={generateAcceptUrl(groupId)}>
          Accept
        </Button>
        <Button plain external url={previewBaseUrl + groupId}>
          Preview
        </Button>
        <TOpticonButton
          requesterId={requester.id}
          turkopticon={requester.turkopticon}
        />
      </ButtonGroup>
    );
  }
}

export default MiscActionsPopOver;
