import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

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
				console.log(`QuertList<KeyboadManagedItensDirective> = ${this.items}`)
				console.log('Up!');
				break;

			case 'ArrowDown':
				console.log('Down!');
				break;

			case 'ArrowLeft':
				console.log('Left!');
				break;

			case 'ArrowRight':
				console.log('Right!');
				break;

		}
	}
}
