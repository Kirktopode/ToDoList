import { connect } from 'react-redux'
import { toggleDisplayTime } from '../actions'
import Check from '../components/Check'

const mapStateToProps = state => {
  return {
    active: state.displayTime
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (event) => {
      dispatch(toggleDisplayTime())
    }
  }
}

const DisplayTime = connect(
  mapStateToProps,
  mapDispatchToProps
)(Check)

export default DisplayTime
