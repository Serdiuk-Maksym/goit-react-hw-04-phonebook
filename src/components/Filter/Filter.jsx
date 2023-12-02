import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <div className={css.filter}>
        <label className={css.label}>
          Find contact by Name
          <input
            className={css.input}
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
          ></input>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
