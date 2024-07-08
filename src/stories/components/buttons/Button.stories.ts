import type {Meta, StoryObj} from '@storybook/react';
import {Button} from '../../../scripts/components/buttons/Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {control: {type: 'select', options: ['primary', 'secondary', 'outline', 'link']}},
        size: {control: {type: 'select', options: ['small', 'medium', 'large']}},
        disabled: {control: 'boolean'}
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

export const Outline: Story = {
    args: {
        children: 'Button',
        variant: 'outline',
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

