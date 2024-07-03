import type {Meta, StoryObj} from '@storybook/react';
import {Button} from '../scripts/components/Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        variant: 'primary',
        size: 'medium',
    },
    argTypes: {
        disabled: {control: 'boolean'},
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
        disabled: false
    }
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        variant: 'secondary',
        disabled: false
    }
};

export const Destructive: Story = {
    args: {
        children: 'Button',
        variant: 'destructive',
        disabled: false
    }
};

export const Dark: Story = {
    parameters: {
        themes: {
            themeOverride: 'dark'
        }
    },
    args: {
        children: 'Button',
        variant: 'primary',
        disabled: false
    }
};

