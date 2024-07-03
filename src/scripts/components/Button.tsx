import React from "react";
import {ComponentProps} from "react";
import clsx from "clsx";

const styles = {
    default: 'button',
    variant: {
        primary: 'primary',
        secondary: 'secondary',
        destructive: 'destructive',
    },
    size: {
        small: 'small',
        medium: 'medium',
        large: 'large',
    }
}

export type ButtonProps = ComponentProps<'button'> & {
    variant?: 'primary' | 'secondary' | 'destructive';
    size?: 'small' | 'medium' | 'large';
};

export const Button = ({variant = 'primary', size = 'medium', className, ...props}: ButtonProps) => {
    let classes = clsx(styles.default, styles.variant[variant], styles.size[size], className);
    return <button {...props} className={classes}/>;
}
