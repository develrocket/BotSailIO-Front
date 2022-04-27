const pageStyle = {
	sellStyle: {
		color: "white",

		'& .price-box': {
			display: "flex",
			flexDirection: "row"
		},

		'& .flex-1': {
			flex: 1,
		},

		'& .flex-3': {
			flex: 3,
		},

		'& .header': {
			fontWeight: 700,
		},

		'& .display-flex': {
			display: "flex",
		},

		'& .flex-between': {
			justifyContent: "space-between",
		},

		'& .bordered-input': {
			width: "100%",
			height: "48px",
			fontSize: "20px",
			background: "#353840",
			border: "1px solid #212529",
			borderRadius: "8px",
			padding: "10px",
			color: "white",
		},

		'& .select-gray': {
			'&>div:first-of-type': {
				background: '#353840',
				'& div' :{
					color: '#ffffff !important'
				}
			}
		},

		'& .text-label': {
			marginTop: "20px",
			fontSize: "18px",
			fontWeight: 700,
		}
	}
};

export default pageStyle;
