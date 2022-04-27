const collectionsStyle = {
	transferBox: {
		position: "fixed",
		bottom: 0,
		height: "100px",
		width: "100vw",
		background: "#303339",
		borderTop: "1px solid rgb(21, 27, 34)",
		padding: "0 24px",
		display: "flex",

		'& .cart-container': {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			width: "100%",
			fontSize: "19px",

			'& .cart-box': {
				height: "80px",
				flex: 1,

				'& p': {
					color: "white",
					margin: 0,
				},

				'& .cart-item': {
					width: "80px",
					padding: "10px"
				},

				'& .cart-img': {
					width: "60px",
					height: "60px",
					borderRadius: "15px",
					overflow: "hidden"
				}
			},

			'& .transfer-btn': {
				height: "48px",
				width: "130px",
				fontSize: "19px",
			},

			'& .transfer-cancel-btn': {
				height: "48px",
				width: "130px",
				fontSize: "19px",
				marginLeft: "4px"
			}
		}
	},
	partTitle: {
		textAlign: 'center',

		'& .top': {
			textAlign: 'center',
			color: '#ced4da',
			marginBottom: '16px',
			paddingTop: '32px',
			fontSize: '32px',
			fontWeight: 'bold'
		},

		'& .stats': {
			flexWrap: 'wrap',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '8px',
			margin: '0 5px 32px',
			display: 'flex',
			listStyle: 'none',
			padding: '0',

			'& li': {
				textAlign: 'center',
				background: '#212529',
				borderRadius: '8px',
				padding: '8px 24px',

				'& .name': {
					textTransform: 'uppercase',
					color: '#868e96',
					marginBottom: '4px',
					fontSize: '10px'
				},

				'& .value': {
					color: 'white'
				}
			}
		}
	}
};

export default collectionsStyle;
