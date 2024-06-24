import type {Meta, StoryObj} from '@storybook/react';
import {Button} from '../scripts/components/Button';

const meta = {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        variant: 'primary',
        size: 'medium',
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
    }
};

