/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import DarkHeader from './DarkHeader';

describe('DarkHeader component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <DarkHeader />
      </BrowserRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the header correctly', () => {
    const wrapper = shallow(<DarkHeader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
