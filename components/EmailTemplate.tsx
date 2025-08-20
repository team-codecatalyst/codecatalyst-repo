import { Html } from '@react-email/html';

interface EmailTemplateProps {
	name: string;
	email: string;
	message: string;
}

const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
	return (
		<Html>
			<h1>
				Email from {name} ({email})
			</h1>
			<p>{message}</p>
		</Html>
	);
};

export default EmailTemplate;
