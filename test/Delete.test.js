import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { addTodo,
         deleteTodo
} from '../src/actions'
import todoApp from '../src/reducers'
import App from '../src/components/App'
import renderer from 'react-test-renderer';

test('When the second item from a list of ToDo items is deleted, all of the items remain except for the one that was deleted.', () =>{

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
    store.dispatch(addTodo("Test0"))
    store.dispatch(addTodo("Test1"))
    store.dispatch(addTodo("Test2"))
    store.dispatch(addTodo("Test3"))
    store.dispatch(addTodo("Test4"))
    store.dispatch(addTodo("Test5"))
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
    expect(tree.children[1].children.length).toBe(6)
    expect(tree).toMatchSnapshot()

    //This line works just fine, but replacing click event with dispatch
    //tree.children[1].children[1].children[0].props.onClick()
    store.dispatch(deleteTodo(1))

    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree.children[1].children[0].children[2].children[0]).toMatch(/^Test0  -/)
    expect(tree.children[1].children[1].children[2].children[0]).toMatch(/^Test2  -/)
    expect(tree.children[1].children[2].children[2].children[0]).toMatch(/^Test3  -/)
  })
