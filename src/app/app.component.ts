import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component }				from '@angular/core';
import { FormBuilder, FormGroup }	from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'a11y-p1';

	public form: FormGroup = null;

	constructor(formBuilder: FormBuilder) {
		// FormBuilder creates the Form
		this.form = formBuilder.group({
			// FormControl to represent a Field at Form
			yesNoAnswer: [
				{
					value: null,
					disabled: false
				}
			]
		});
	}

	public submit(): void {
		this.form.get('yesNoAnswer').disable();
		console.log(this.form.value);
	}

}
