import React from 'react'

// setup allowing seamless use of Enzyme with React
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import sinon from 'sinon'; // optional

global.React = React;
global.shallow = shallow;
global.sinon = sinon;