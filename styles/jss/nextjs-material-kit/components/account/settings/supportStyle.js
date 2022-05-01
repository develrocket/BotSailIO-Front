const Style = {
	support: {
		'& *': {
			color: '#ffffff'
		},
		'& h2, h1, h3, h4, h5': {
			fontWeight: 'bold'
		}
	},
	helpItem: {
		border: '1px solid',
		borderBottomWidth: '0',
		'& button' : {
			background: 'none',
			boxShadow: 'none',
			'&:hover': {
				background: 'none',
				boxShadow: 'none'
			},
			'&:focus': {
				background: 'none',
				boxShadow: 'none'
			},
			'& .buttonText': {
				fontWeight: 'bold',
				fontSize: '140%'
			},
		},
		'& .itemDesc': {
			padding:'0 10px 10px 30px'
		}
	},
	textBox: {
		border: '1px solid',
		padding: '15px',
		background: 'rgb(150 191 150 / 30%)',
		margin: '0 30px 30px 30px',
		display: 'flex',
		'& svg': {
			margin: '10px 10px 10px 0',
			alignContent: 'center'
		}
	},
};

export default Style;
