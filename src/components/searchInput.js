import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  search: {
    lineHeight: '1.5em',
    fontSize: '.8em',
    width: '100%',
    padding: '.5em',
  },
}


class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    // dispach action which will update filteredList attribute of state
    this.props.searchGifs(e.target.value)
  }

  render() {
    return (
      <input onChange={this.handleInput}
        className={this.props.classes.search}
        placeholder="Search for your fav"
      />
    )
  }
}

SearchInput.propTypes = {
  searchGifs: PropTypes.PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default injectSheet(styles)(SearchInput)
