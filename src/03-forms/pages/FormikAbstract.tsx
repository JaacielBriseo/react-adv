import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';

export const FormikAbstract = () => {
	return (
		<div>
			<h1>Formik Abstract</h1>

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, 'Should have 15 characters or less').required('Required'),
					lastName: Yup.string().max(15, 'Should have 15 characters or less').required('Required'),
					email: Yup.string().email('Should be a valid email').required('Required'),
					terms: Yup.boolean().oneOf([true], 'Should accept conditions'),
					jobType: Yup.string()
						.notOneOf(['it-junior'], 'This option is unavailable at the moment')
						.required('Required'),
				})}
			>
				{(formik) => (
					<Form>
						<MyTextInput label='First Name' name='firstName' placeholder='Jaaciel' />
						<MyTextInput label='Last Name' name='lastName' placeholder='Briseño' />
						<MyTextInput label='Email address' name='email' placeholder='email@google.com' type='email' />

						<MySelect label='Job Type' name='jobType'>
							<option value=''>Pick something</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='it-senior'>IT Senior</option>
							<option value='it-junior'>IT Jr.</option>
						</MySelect>
						<MyCheckbox label='Terms & conditions' name='terms' />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
