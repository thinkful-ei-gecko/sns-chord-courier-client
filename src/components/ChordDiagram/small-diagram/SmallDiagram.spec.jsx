/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import SmallDiagram from './SmallDiagram';

describe('SmallDiagram component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SmallDiagram chordCode="0,x,2,1,o,0,o" />
      </BrowserRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders open position C maj chord when fed correct props', () => {
    const wrapper = shallow(<SmallDiagram chordCode="0,x,2,1,o,0,o" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
