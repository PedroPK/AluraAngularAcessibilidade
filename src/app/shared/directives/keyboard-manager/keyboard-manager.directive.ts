import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

enum ArrowDirection {

	LEFT = -1,
	RIGHT = 1,

}

@Directive({
	selector: '[appKeyboardManager]',
})
export class KeyboardManagerDirective {

	@ContentChildren(KeyboardManagedItemDirective)
	public items: QueryList<KeyboardManagedItemDirective> = null;

	constructor() {}

	@HostListener('keyup', ['$event'])
	public manageKeys(event: KeyboardEvent): void {
		switch (event.key) {
			case 'ArrowUp':
				//console.log(`QuertList<KeyboadManagedItensDirective> = ${this.items}`)
				console.log('Up!');
				break;

			case 'ArrowDown':
				console.log('Down!');
				break;

			case 'ArrowLeft':
				this.moveFocus(ArrowDirection.LEFT).focus();
				console.log('Left!');
				break;

			case 'ArrowRight':
				this.moveFocus(ArrowDirection.RIGHT).focus();
				console.log('Right!');
				break;

		}
	}

	public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
		//console.log(`Keyboard Manager Directive >> moveFocus() >> direction = ${direction}`);

		const items = this.items.toArray();
		//console.log(`Keyboard Manager Directive >> moveFocus() >> this.items.toArray().length = ${items.length}`);

		const currentSelectedIndex = items.findIndex(item => item.isFocused());
		//console.log(`Keyboard Manager Directive >> moveFocus() >> currentSelectedIndex = ${currentSelectedIndex}`);

		let nextIndex = currentSelectedIndex + direction;
		if ( nextIndex >= items.length ) {
			nextIndex = 0;
		}

		//console.log(`Keyboard Manager Directive >> moveFocus() >> nextIndex = ${nextIndex}`);
		const targetElementFocus = items[nextIndex];

		//console.log(`Keyboard Manager Directive >> moveFocus() >> targetElementFocus = ${targetElementFocus}`);

		//console.log(' ');
		if ( targetElementFocus ) {
			return targetElementFocus;
		} else {
			return direction === ArrowDirection.LEFT
				? items[items.length - 1]
				: items[0]
			;
		}

		//console.log(`Keyboard Manager Directive >> moveFocus() >> items.length = ${items.length}`);
		//console.log(`Keyboard Manager Directive >> moveFocus() >> items.length - 1 = ${items.length - 1}`);
		//console.log(`Keyboard Manager Directive >> moveFocus() >> targetElementFocus = ${targetElementFocus}`);

	}

}
