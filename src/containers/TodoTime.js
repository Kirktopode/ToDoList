import { connect } from 'react-redux'
import Todo from '../components/Todo'

const mapStateToProps = state => {
  return {
    displayTime: state.displayTime
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const TodoTime = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default TodoTime
