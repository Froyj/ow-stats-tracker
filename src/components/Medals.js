/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';
import { GridRow, GridColumn, Header } from 'semantic-ui-react';


const Medals = ({ profileStats }) => (
  <Fragment>
    <GridRow centered>
      <Header as="h4">
        Medals
      </Header>
    </GridRow>
    <GridRow container centered textAlign="center">
      <GridColumn width={4}>
        <h4>Bronze Medals</h4>
        <span>{profileStats && profileStats.quickPlayStats.awards.medalsBronze}</span>
      </GridColumn>
      <GridColumn width={4}>
        <h4>Silver Medals</h4>
        <span>{profileStats && profileStats.quickPlayStats.awards.medalsSilver}</span>
      </GridColumn>
      <GridColumn width={4}>
        <h4>Gold Medals</h4>
        <span>{profileStats && profileStats.quickPlayStats.awards.medalsGold}</span>
      </GridColumn>
    </GridRow>
  </Fragment>
);

export default Medals;
