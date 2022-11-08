import { ReactNode } from "react";
export declare type ButtonProps = {
    children: ReactNode;
    variant: "priamry" | "secondary";
};
/**
 * This is a button component
 *
 * @param {ReactNode} children - The content of the button
 * @param {string} variant - The variant of the button
 *
 */
declare const Button: ({ children, ...props }: ButtonProps) => JSX.Element;
export default Button;
