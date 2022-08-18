import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	selector: '[appDisableControl]',
})
export class DisableControlDirective implements OnChanges {

	@Input()
	appDisableControl = false;

	constructor(
		private ngControl:	NgControl
	) {}

	public ngOnChanges(pChanges: SimpleChanges): void {
		const ENABLE = 'enable';
		const DISABLE = 'disable';

		if ( pChanges.appDisableControl ) {
			const action = this.appDisableControl ? DISABLE : ENABLE;

			this.ngControl.control[action]();
		}
	}

}
