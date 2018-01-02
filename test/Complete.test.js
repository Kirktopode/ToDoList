import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { addTodo } from '../src/actions'
import todoApp from '../src/reducers'
import App from '../src/components/App'
import renderer from 'react-test-renderer';

test('When a ToDo list item is completed, a line-through is added to the item\'s style.', () =>{

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
  expect(tree.children[1].children[0].props.style.textDecoration).toBe("none")
  expect(tree).toMatchSnapshot()

  tree.children[1].children[0].children[2].props.onClick()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree.children[1].children[0].props.style.textDecoration).toBe("line-through")

  //console.log(tree.children[1].children[0].props.style)
})
