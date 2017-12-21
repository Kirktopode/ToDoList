import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../src/reducers'
import App from '../src/components/App'
import renderer from 'react-test-renderer';

test('App renders without crashing.', () =>{

  let store = createStore(todoApp)

  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
