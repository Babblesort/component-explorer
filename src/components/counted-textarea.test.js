import React from 'react';
import { shallow, mount } from 'enzyme';
import CountedTextarea from './counted-textarea';

test('renders', () => {
  const countedTextarea = shallow(<CountedTextarea />);

  expect(countedTextarea.find('span')).not.toBe(undefined);
  expect(countedTextarea.find('textarea')).not.toBe(undefined);
});

test('defaults initial state set', () => {
  const countedTextarea = mount(<CountedTextarea />);
  console.info(countedTextarea.find('textarea').text());
  expect(countedTextarea.find('span').text()).toEqual('5000');
  expect(countedTextarea.find('textarea').text()).toEqual('');
});

test('can override maxChars default', () => {
  const countedTextarea = mount(<CountedTextarea maxChars="100" />);

  expect(countedTextarea.find('span').text()).toEqual('100');
});

test('can override textarea default', () => {
  const textProp = 'i haz text';
  const charsRemaining = `${5000 - textProp.length}`;
  const countedTextarea = mount(<CountedTextarea value={textProp} />);

  expect(countedTextarea.find('textarea').text()).toEqual(textProp);
  expect(countedTextarea.find('span').text()).toEqual(charsRemaining);
});

test('override textarea and maxChars combined', () => {
  const text = 'i haz text';
  const maxChars = 5;
  const charsRemaining = `${maxChars - text.length}`;
  const countedTextarea = mount(<CountedTextarea maxChars={maxChars} value={text} />);

  expect(countedTextarea.find('textarea').text()).toEqual(text);
  expect(countedTextarea.find('span').text()).toEqual(charsRemaining);
});

test('handles text changes in textarea', () => {
  const countedTextarea = mount(<CountedTextarea />);

  expect(countedTextarea.find('textarea').text()).toEqual('');
  expect(countedTextarea.find('span').text()).toEqual('5000');
  
  countedTextarea.find('textarea')
    .simulate('change', { target: { value: 'new text' } });

  expect(countedTextarea.find('textarea').text()).toEqual('new text');
  expect(countedTextarea.find('span').text()).toEqual('4992');
});
