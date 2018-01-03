import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { addTodo, appendTimestamp } from '../src/actions'
import todoApp from '../src/reducers'
import App from '../src/components/App'
import renderer from 'react-test-renderer';

test('Timestamp is appended properly when the button is clicked.', () =>{

  //Mocking Date for the sake of testing
  global.Date = jest.fn(() => {return {
    toLocaleDateString: () => {
      return "test date"
    },
    toLocaleTimeString: () => {
      return "test time"
    }
  }})

  let store = createStore(todoApp)
  store.dispatch(addTodo("Test"))

  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );

  let tree = component.toJSON()
  expect(tree.children[1].children[0].children[2].children[0]).toMatch(/Created test time test date$/)
  expect(tree).toMatchSnapshot()

  //Append timestamp - This click event works fine, but using dispatch instead
  //tree.children[1].children[0].children[1].props.onClick()
  store.dispatch(appendTimestamp(0))

  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree.children[1].children[0].children[2].children[0]).toMatch(/Appended test time test date$/)
})
