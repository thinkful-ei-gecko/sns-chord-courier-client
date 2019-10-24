/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import ChordKeyDisplay from './ChordKeyDisplay';
import testArrays from '../../testHelpers';

describe('ChordDisplay component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ChordKeyDisplay chords={testArrays.fullCMaj} />
      </BrowserRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the display correctly', () => {
    const wrapper = shallow(<ChordKeyDisplay chords={testArrays.fullCMaj} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
