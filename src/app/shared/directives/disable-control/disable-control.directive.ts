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
		const ENABLED = 'enabled';
		const DISABLED = 'disabled';

		if ( pChanges.appDisableControl ) {
			const action = this.appDisableControl ? DISABLED : ENABLED;

			if ( action === DISABLED ) {
				this.ngControl.control.disable();
			} else if ( action === ENABLED ) {
				this.ngControl.control.enable();
			}
		}
	}

}
