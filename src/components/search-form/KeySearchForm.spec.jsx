/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import KeySearchForm from './KeySearchForm';

describe('KeySearchForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <KeySearchForm />
      </BrowserRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders no chords initially', () => {
    const wrapper = shallow(<KeySearchForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders the chord galleries when search is clicked', () => {
    const wrapper = shallow(<KeySearchForm />);
    wrapper.find('button').simulate('submit');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
