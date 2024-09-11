import { Minus } from "lucide-react";
import {
	type ElementRef,
	type HTMLAttributes,
	type MouseEvent,
	forwardRef,
	useImperativeHandle,
	useRef,
} from "react";

type modalProps = {
	resizeble?: boolean;
} & HTMLAttributes<HTMLDialogElement>;

export interface modalHandles {
	openModal: () => void;
}

export const Modal = forwardRef<modalHandles, modalProps>(
	({ children, resizeble, className = "", ...props }, ref) => {
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
				className={`absolute z-10 outline-none border-none overflow-y-hidden ${className}`}
				{...props}
			>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div // Backdrop
					className="fixed top-0 left-0 h-svh w-lvw -z-10"
					onClick={closeModal}
				/>
				<form
					method="dialog"
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="grid place-items-center"
				>
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
