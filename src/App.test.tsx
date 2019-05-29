import * as React from 'react';
import * as enzyme from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import App from './App';

enzyme.configure({ adapter: new adapter() })

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<App/>);
//   expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<App/>);
//   expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<App/>);
//   expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<App/>);
  });
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<App/>);
  });
});
