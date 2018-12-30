/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from "prop-types";

import {
  Grid, GridRow, Header, Image,
} from 'semantic-ui-react';
import Medals from './Medals';

const GeneralDataView = ({ profileStats }) => {
  return (
    <Grid columns={16} divided container>
      <GridRow>
        <Header as='h1'>General</Header>
      </GridRow>
      <GridRow>
        <Header as='h2'>{profileStats && profileStats.name}</Header>
      </GridRow>
      <GridRow>
        <Header as='h3'>Medals</Header>
      </GridRow>
      <GridRow>
        <Image src={profileStats && profileStats.icon} alt="player icon" />
        <Image src={profileStats && profileStats.levelIcon} alt="player icon" />
        <Image src={profileStats && profileStats.prestigeIcon} alt="player icon" />
      </GridRow>
      <Medals profileStats={profileStats} />
      
    </Grid>
  );
};

// GeneralDataView.defaultProps = {
//   profileStats: {},
// };

GeneralDataView.propTypes = {
  profileStats: PropTypes.object,
};

export default GeneralDataView;
