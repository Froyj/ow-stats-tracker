/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';

const SearchName = ({ battleTag, handleChange, handleSubmit }) => (
  <Fragment>
    <form onSubmit={handleSubmit}>
      <label>
        BattleTag:
        <input type="text" value={battleTag} placeholder="Enter your Battle Tag here" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </Fragment>
);

export default SearchName;
