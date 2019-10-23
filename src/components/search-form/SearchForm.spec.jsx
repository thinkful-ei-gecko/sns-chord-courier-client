/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import SearchForm from './SearchForm';

describe('SearchForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SearchForm />
      </BrowserRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders no chords initially', () => {
    const wrapper = shallow(<SearchForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
