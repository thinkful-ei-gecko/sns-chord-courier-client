/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import ChordDisplay from './ChordDisplay';
import testArrays from '../../testHelpers';

const testProgression = 'i-v-vi-v';

describe('ChordDisplay component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ChordDisplay chords={testArrays.progCMaj} progression={testProgression} />
      </BrowserRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the display correctly', () => {
    const wrapper = shallow(<ChordDisplay
      chords={testArrays.progCMaj}
      progression={testProgression}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
