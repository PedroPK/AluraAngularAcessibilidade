import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
	selector: '[appKeyboardManagedItem]',
})
export class KeyboardManagedItemDirective {

	@Output()
	public focused = new EventEmitter<void>();

	constructor(
		private elementReference: ElementRef<HTMLElement>
	) {}

	public focus(): void {
		this.elementReference.nativeElement.focus();
		this.focused.emit();
	}

	public isFocused(): boolean {
														// The Active Element in the DOM
		return this.elementReference.nativeElement === document.activeElement;
	}

}
