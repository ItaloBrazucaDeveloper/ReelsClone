import { type ElementType, type InputHTMLAttributes, forwardRef } from "react";

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
	icon?: ElementType;
	inputStyle?: string;
};

export const Input = forwardRef<HTMLInputElement, inputProps>(
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
