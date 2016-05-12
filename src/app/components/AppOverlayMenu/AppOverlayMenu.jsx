import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as overlayMenuUrlsAndActions from '../../actions/overlayMenuUrlsAndActions';

import SettingsOverlayMenu from '../SettingsOverlayMenu/SettingsOverlayMenu';

export const AppOverlayMenu = (props) => {
  const overlayMenu = props.pageData.queryParams[overlayMenuUrlsAndActions.OVERLAY_MENU_PARAMETER];
    switch (overlayMenu) {
    case overlayMenuUrlsAndActions.SETTINGS_MENU:
      return <SettingsOverlayMenu />;

    default: return null;
  }
};

const selector = createSelector(
  (state) => state.platform.currentPage,
  (pageData) => ({ pageData }),
);

export default connect(selector)(AppOverlayMenu);
