/* eslint-disable prettier/prettier */
import React from 'react';
import Component from '../Testing/component';
import {render, cleanup} from 'react-native-testing-library';

afterEach(cleanup);

describe('<Component/>', () => {
  it('should match snapshot', () => {
    const rendered = render(<component value={'abacaba'} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it('should properly render the text', () => {
    const rendered = render(<component value={'abacaba'} />);
    const textComponent = rendered.getByTestId('text');

    expect(textComponent.props.children).toEqual('abacaba');
  });

  it('should render red text', () => {
    const rendered = render(<component value={'abacaba'} />);
    const textComponent = rendered.getByTestId('text');

    expect(textComponent.props.style).toMatchObject({color: 'red'});
  });

  it('should wrap text with a flexible wrapper', () => {
    const rendered = render(<Component value={'abacaba'} />);
    const wrapperComponent = rendered.getByTestId('wrapper');

    expect(wrapperComponent.props.style).toMatchObject({flex: 1});
  });
});