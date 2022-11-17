import { Meta, Story } from '@storybook/react';
import { IListProps, List } from './List';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {}
} as Meta;

export const Default: Story<IListProps> = args => <List {...args} />;

Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3']
};
