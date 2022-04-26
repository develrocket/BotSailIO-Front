const propertyModalStyle = {
	propertyModal: {
		'& .properties-list': {
			'& .properties-row': {
				margin: "3px 0",
				display: "flex",
				justifyContent: "start",
				alignItems: "center",

				'& .properties-close': {
					width: "40px",
					padding: "8px",
					cursor: "pointer"
				},

				'& .properties-type': {
					flex: 1,

					'& .header': {
						fontWeight: "bold",
					}
				},

				'& .properties-name': {
					flex: 1,
				}
			}
		},

		'& .bordered-input': {
			width: "100%",
			height: "48px",
			fontSize: "20px",
			background: "transparent",
			border: "1px solid darkgray",
			borderRadius: "8px",
			padding: "10px",
			color: "black",
		},

		'& .progress-box': {
			width: "100%",
			height: "48px",
			fontSize: "20px",
			background: "transparent",
			color: "black",
			display: "flex",
			flexDirection: "row",

			'& *': {
				border: "1px solid darkgray",
				borderRadius: "8px",
			},

			'& div': {
				borderRadius: "0px"
			},

			'& input': {
				flex: 1,

				'&.first': {
					borderRadius: "8px 0 0 8px"
				},

				'&.last': {
					borderRadius: "0 8px 8px 0"
				}
			}
		},

		'& .header': {
			fontWeight: "bold",
		}
	}
};

export default propertyModalStyle;
