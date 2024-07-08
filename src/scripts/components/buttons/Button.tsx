import React from "react";
import clsx from "clsx";
import {cva, type VariantProps} from 'class-variance-authority';
import {ComponentProps} from "react";

const styles = {
    default: 'button',
    variant: {
        primary: 'primary',
        secondary: 'secondary',
        outline: 'outline',
        link: 'link'
    },
    size: {
        small: 'small',
        medium: 'medium',
        large: 'large',
    }
}

const button = cva(['button'], {
        variants: {
            variant: {
                primary: ['primary'],
                secondary:
                    ['secondary'],
                outline:
                    ['outline'],
                link:
                    ['link']
            },
            size: {
                small: ['small'],
                medium: ['medium'],
                large: ['large']
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "medium",
        }
    }
)

type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({variant = 'primary', size = 'medium', className, ...props}: ButtonProps) => {
    let classes = clsx(styles.default, variant && styles.variant[variant], size && styles.size[size], className);
    return <button {...props} className={classes}/>;
}
