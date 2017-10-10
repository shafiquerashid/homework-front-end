import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  search: {
    lineHeight: '1.5em',
    fontSize: '.8em',
    padding: '.5em',
    paddingRight: 0,
    flexGrow: 3,
    border: 'none',
  },

  sortGif: {
    position: 'absolute',
    right: '10px,',
  },

  sortButton: {
    cursor: 'pointer',
    fontSize: '.8em',
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, .3)',
    textAlign: 'right',
    lineHeight: '45px',
    flexGrow: 1,
    paddingRight: '10px',
  },

  inputWrapper: {
    display: 'flex',
  },
}


class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  handleInput(e) {
    // dispach action which will update filteredList attribute of state
    this.props.searchGifs(e.target.value)
  }

  handleSort() {
    this.props.sortGifs()
  }

  render() {
    return (
      <div className={this.props.classes.inputWrapper}>
        <input
          onChange={this.handleInput}
          className={this.props.classes.search}
          placeholder="Search for your fav"
        />
        <div className={this.props.classes.sortButton} onClick={this.handleSort} role="button">
          Time <i className={`arrow arrow-${this.props.isSortedAscending ? 'down' : 'up'}`} />
        </div>
      </div>

    )
  }
}

SearchInput.propTypes = {
  searchGifs: PropTypes.func.isRequired,
  sortGifs: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isSortedAscending: PropTypes.bool.isRequired,
}

export default injectSheet(styles)(SearchInput)
