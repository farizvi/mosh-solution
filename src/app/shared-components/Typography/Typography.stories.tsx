import { Meta, Story } from '@storybook/react';
import { ITypographyProps, Typography } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {},
} as Meta;

export const Title: Story<ITypographyProps> = args => <Typography {...args} />;
Title.args = {
  text: 'Title text',
  variant: 'Title',
};

export const BodyText: Story<ITypographyProps> = args => <Typography {...args} />;
BodyText.args = {
  text: 'Body text',
  variant: 'BodyText',
};

export const ButtonCaption: Story<ITypographyProps> = args => <Typography {...args} />;
ButtonCaption.args = {
  text: 'Button caption',
  variant: 'ButtonCaption',
};
