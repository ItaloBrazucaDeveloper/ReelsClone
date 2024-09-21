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

/**
 * @param resizeble boolean
 * @param props Any HTMLDialogElement attributes
 * @return Dialog HTML Element
 * @requires ref type of modalHandles
 */

const Modal = forwardRef<modalHandles, modalProps>(
	({ children, resizeble, className = "", ...props }, ref) => {
		const modalRef = useRef<ElementRef<"dialog">>(null);

		const escCloseModal = (e) => {
			if (e.key === "Escape") {
				modalRef.current?.close();
			}
		};

		const closeModal = () => {
			if (modalRef.current) {
				modalRef.current.close();
				modalRef.current.style.height = "fit-content";
				document.removeEventListener("keydown", escCloseModal);
			}
		};

		const openModal = (): void => {
			modalRef.current?.show();
			document.addEventListener("keydown", escCloseModal);
		};

		useImperativeHandle(ref, () => ({ openModal }));

		// Resizeble Modal functions
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
				<div className="grid place-items-center">
					{resizeble && (
						<div onMouseDown={dragStart} className="flex justify-center w-full">
							<Minus className="text-zinc-400 h-9 scale-y-[1.25] scale-x-[2]" />
						</div>
					)}
					{children}
				</div>
			</dialog>
		);
	},
);

export default Modal;
