import { Minus } from "lucide-react";
import {
	type ElementRef,
	type HTMLAttributes,
	type MouseEvent,
	forwardRef,
	useImperativeHandle,
	useRef,
} from "react";

type modalProps = HTMLAttributes<HTMLDialogElement> & {
	resizeble?: boolean;
	popover?: boolean;
};

export interface modalHandles {
	openModal: () => void;
}

export const Modal = forwardRef<modalHandles, modalProps>(
	({ children, resizeble, popover, ...props }, ref) => {
		const popoverStyle = "m-3 mt-14 bg-zinc-800 rounded-2xl bg-opacity-95";
		const defaultModalStyle =
			"bottom-0 right-1/2 rounded-t-2xl min-h-[65%] w-full bg-zinc-800";

		const modalRef = useRef<ElementRef<"dialog">>(null);

		const closeModal = () => {
			modalRef.current?.close();
			if (modalRef.current) modalRef.current.style.height = "fit-content";
		};

		useImperativeHandle(ref, () => {
			return {
				openModal() {
					modalRef.current?.show();
				},
			};
		});

		let isDragStart: boolean;
		let prevPosition: number;
		let prevModalHeight: number;

		const dragStart = (e: MouseEvent<HTMLDivElement>) => {
			isDragStart = true;
			prevPosition = e.clientY;
			prevModalHeight = modalRef.current?.clientHeight || 0;
		};

		const dragging = (e: MouseEvent<HTMLDialogElement>) => {
			if (!isDragStart) return;
			const positionDiff = e.pageY - prevPosition;
			const newModalHeight = prevModalHeight - positionDiff;
			e.currentTarget.style.height = `${newModalHeight}px`;
		};

		const dragEnd = () => {
			isDragStart = false;
		};

		return (
			<dialog
				ref={modalRef}
				onMouseMove={dragging}
				onMouseUp={dragEnd}
				className={`absolute z-10 outline-none border-none ${popover ? popoverStyle : defaultModalStyle}`}
				{...props}
			>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className="fixed top-0 left-0 h-svh w-lvw -z-10"
					onClick={closeModal}
				/>
				<form method="dialog" className="grid place-items-center">
					{resizeble && (
						<div onMouseDown={dragStart} className="flex justify-center w-full">
							<Minus className="text-zinc-400 h-9 scale-y-[1.25] scale-x-[2]" />
						</div>
					)}
					{children ?? ""}
				</form>
			</dialog>
		);
	},
);
