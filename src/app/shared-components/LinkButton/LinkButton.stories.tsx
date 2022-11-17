import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ILinkIButtonProps, LinkButton } from './LinkButton';

export default {
  title: 'Components/V2/LinkButton',
  component: LinkButton,
  argTypes: {}
} as Meta;

export const Default: Story<ILinkIButtonProps> = args => (
  <BrowserRouter>
    <LinkButton {...args} />
  </BrowserRouter>
);
Default.args = {
  text: 'Get Started',
  href: '/get-started',
  classes: 'bg-orange text-white'
};
