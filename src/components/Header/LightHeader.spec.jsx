/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import LightHeader from './LightHeader';

describe('LightHeader component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <LightHeader />
      </BrowserRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the header correctly', () => {
    const wrapper = shallow(<LightHeader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
