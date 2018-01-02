import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { addTodo,
         copyTodo
} from '../src/actions'
import todoApp from '../src/reducers'
import App from '../src/components/App'
import renderer from 'react-test-renderer';

test('When a ToDo is copied three times, there are four ToDo items.', () =>{

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
  var container = document.createElement('div')
  let component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
    container
  );

  let tree = component.toJSON()
  /*global.document = jest.fn(() => { return {
    getElementById: () => {
      return tree.children[1].children[0].children[3].props
    }
  }})
*/
  expect(tree.children[1].children.length).toBe(1)
  expect(tree).toMatchSnapshot()

//  tree.children[1].children[0].children[3].props.value = 3
//  tree.children[1].children[0].children[4].props.onClick()
  store.dispatch(copyTodo(0, 3))
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree.children[1].children.length).toBe(4)
  for(let i = 0; i < 4; i++){
    expect(tree.children[1].children[i].children[2].children[0]).toMatch(/^Test  -/)
  }
})
