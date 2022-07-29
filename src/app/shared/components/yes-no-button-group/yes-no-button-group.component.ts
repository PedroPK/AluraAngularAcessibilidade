import { Component, EventEmitter, forwardRef, Input, OnInit, Output }	from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR }			from '@angular/forms';

@Component({
	selector: 'app-yes-no-button-group',
	templateUrl: './yes-no-button-group.component.html',
	styleUrls: ['./yes-no-button-group.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: forwardRef( () => YesNoButtonGroupComponent)
		}
	]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

	@Input()
	public value: string = null;

	@Input()
	public label = '';

	@Output()
	public valueChange = new EventEmitter<string>();

	public options = YesNoButtonGroupOptions;
	public onChange = (pValue: string) => {};
	public onTouched = () => {};

	constructor() {}

	ngOnInit(): void {
		//
	}

	public activate(pValue: string): void {
		this.writeValue(pValue);
	}

	public writeValue(pValue: string): void {
		// Write on View when Model is changed
		this.value = pValue;
		this.onChange(this.value);
		this.valueChange.emit(this.value);
	}

	public registerOnChange(pFunction: (value: string) => void): void {
		// Allow us to receive in any moment in the future a Function to be invoked OnChange
		this.onChange = pFunction;
	}

	public registerOnTouched(pFunction: () => void): void {
		// Allow us to receive in any moment in the future a Function to be invoked OnTouched
		this.onTouched = pFunction;
	}

	public setDisabledState?(isDisabled: boolean): void {
		throw new Error('Method not implemented.');
	}

}

enum YesNoButtonGroupOptions {
	YES	= 'yes',
	NO	= 'no'
}
