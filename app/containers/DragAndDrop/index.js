/**
 *
 * DragAndDrop
 *
 */

import React from 'react';

import { Helmet } from 'react-helmet';

// React DND
import Container from 'containers/Container';
import CustomDragLayer from 'components/CustomDragLayer';

/* eslint-disable react/prefer-stateless-function */
export class DragAndDrop extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>DragAndDrop</title>
          <meta name="description" content="Description of DragAndDrop" />
        </Helmet>
        <div />
        <Container />
        <CustomDragLayer />
      </div>
    );
  }
}

export default DragAndDrop;
