const formStyle = {
	form: {
		'& *': {
			color: '#ced4da'
		},

		'& .logoHead::after': {
			content: ' *',
			color: 'red'
		},

		'& .logoImg': {
			cursor: 'pointer',
			borderRadius: '50%',
			border: '3px dashed rgb(204, 204, 204)',
			width: '160px',
			height: '160px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}
	}
};

export default formStyle;
