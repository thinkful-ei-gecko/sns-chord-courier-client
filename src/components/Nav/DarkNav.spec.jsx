/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import DarkNav from './DarkNav';

describe('DarkNav component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <DarkNav />
      </BrowserRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the header correctly', () => {
    const wrapper = shallow(<DarkNav />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
