const pageStyle = {
	transferStyle: {
		justifyContent: "center",

		'& .item-list': {
			display: "flex",
			flexDirection: "column",

			'& .item': {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				border: "1px solid white",
				borderRadius: "10px",
				marginTop: "8px",
				padding: "10px",
				cursor: "pointer",

				'& .item-img': {
					width: "100px",
					height: "100px",
					borderRadius: "15px",
				},

				'& .item-content': {
					flex: 1,
					marginLeft: "20px",
					display: "flex",
					flexDirection: "column",
					fontSize: "15px",

					'& .item-collection': {
						color: "rgb(138, 147, 155)",
						marginBottom: "20px",
					},

					'& .item-name': {
						color: "rgb(229, 232, 235)",
					}
				}
			}
		},

		'& .bordered-input': {
			width: "100%",
			height: "48px",
			fontSize: "20px",
			background: "white",
			border: "1px solid #212529",
			borderRadius: "8px",
			padding: "10px",
			color: "black",
		},

		'& .text-label': {
			marginTop: "15px",
			fontSize: "18px",
			fontWeight: "bold"
		},

		'& .send-box': {
			display: "flex",
			justifyContent: "center",
			marginTop: "20px"
		},

		'& .text-white': {
			color: "white"
		},
	}
};

export default pageStyle;
