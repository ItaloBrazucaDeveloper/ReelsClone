import { type ElementRef, useRef } from 'react';

export function Timeline() {
	const rangeRef = useRef<ElementRef<'input'>>(null);
	return (
		<input ref={rangeRef} type="range" className="absolute bottom-0 w-full" />
	);
}
