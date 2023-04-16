/* eslint-disable jest/no-identical-title */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import unit from '../Testing/unit';
import renderer from 'react-test-renderer';

describe('<Component/>', () => {

  it('should match snapshot', () => {
    const snapshot = renderer.create(<unit/>).toJSON();
  expect(snapshot).toMatchSnapshot();
  });

  it('adds 19 + 11 to equal 30', () => {
    expect(unit(19, 11)).toBe(30);
  });

  it('ten subtract two', () => {
    const value = 10 - 2;
    expect(value).toBeGreaterThan(6);
  });

  it('eleven multiply two', () => {
    const value = 11 * 2;
    expect(value).toBeGreaterThanOrEqual(11.5);
  });

  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeLessThan(5);
  });

  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeLessThanOrEqual(4.5);
  });

  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toEqual(4);
  });

  it('There is no G in Ibrahim', () => {
    expect('Ibrahim').not.toMatch(/G/);
  });
  
  it('but there is a "a" in Ibrahim', () => {
    expect('Ibrahim').toMatch(/a/);
  });

})