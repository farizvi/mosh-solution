import { Meta, Story } from '@storybook/react';
import { Button, IButtonProps } from './Button';

export default {
  title: 'Components/Buttons',
  component: Button,
  argTypes: {}
} as Meta;

export const Default: Story<IButtonProps> = args => <Button {...args} />;

Default.args = {
  text: 'Get Started',
  className: 'bg-dark-blue text-white',
  size: 'x-large'
};
