import { Meta, Story } from '@storybook/react';
import React from 'react';
import { IImageProps, Image } from './Image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {}
} as Meta;

export const Default: Story<IImageProps> = args => <Image {...args} />;
Default.args = {
  src: ''
};
