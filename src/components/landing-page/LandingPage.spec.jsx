/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import LandingPage from './LandingPage';

describe('LandingPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
