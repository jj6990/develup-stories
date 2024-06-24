import React from "react";
import {ComponentProps} from "react";
import clsx from "clsx";

const styles = {
    default: 'button',
    variant: {
        primary: 'button--primary',
        secondary: 'button--secondary',
        destructive: 'button--destructive',
    },
    size: {
        small: 'button--small',
        medium: 'button--medium',
        large: 'button--large',
    }
}

export type ButtonProps = ComponentProps<'button'> & {
    variant?: 'primary' | 'secondary' | 'destructive';
    size?: 'small' | 'medium' | 'large';
};

export const Button = ({variant, size, ...props}: ButtonProps) => {
    // let className = clsx(styles.default, styles[variant], styles[size]);
    let classes = clsx(styles.default);

    return <button className={classes} {...props} />;
}
