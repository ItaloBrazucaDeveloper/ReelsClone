import type { HTMLAttributes } from 'react';

interface VideoProps extends HTMLAttributes<HTMLDivElement> {}

/**
 *  @param ...props - this param recieve any attribute of a HTML div element
 *  @description provide a custom container for semantic React component.
 */
const CustomContainer = ({ children, ...props }: VideoProps) => {
	return <div {...props}>{children}</div>;
};

export default CustomContainer;
