import { type ElementType, type InputHTMLAttributes, forwardRef } from "react";

type inputProps = {
	icon?: ElementType;
	inputStyle?: string;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * @param icon ElementType
 * @param inputStyle string
 * @return Input Component
 * 
 * !Important: If you need add styles use 'className', but if you need a new style or restart default style use 'inputStyle'
 */

const Input = forwardRef<HTMLInputElement, inputProps>(
	({ className = "", icon: Icon, inputStyle, ...props }, ref) => {
		return (
			<div className={`relative ${className}`}>
				{Icon && (
					<div className="absolute top-1/2 -translate-y-1/2 grid place-items-center pl-3 h-5 w-5">
						<Icon size={15} className="text-zinc-500" />
					</div>
				)}
				<input
					ref={ref}
					placeholder=" "
					className={
						inputStyle ??
						`rounded-lg border-none outline-none bg-inherit text-zinc-300 py-1.5 px-3 ${Icon && "pl-10"} h-full w-full placeholder:text-sm placeholder:text-zinc-500`
					}
					{...props}
				/>
			</div>
		);
	},
);

export default Input;
