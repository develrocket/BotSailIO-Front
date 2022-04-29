const style = {
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
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			fontSize: "19px",

			'& .cart-box': {
				height: "80px",
				flex: 1,
				display: "flex",

				"@media (max-width: 768px)": {
					display: "none"
				},

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
				textTransform: "none",
				display:" inlineFlex",
				flexDirection: "row",
				webkitBoxAlign: "center",
				alignItems: "center",
				borderRadius: "10px",
				webkitBoxPack: "center",
				justifyContent: "center",
				fontSize: "16px",
				fontWeight: 600,
				padding: "12px 20px",
				backgroundColor: "rgb(32, 129, 226)",
				border: "1px solid rgb(32, 129, 226)",
				color: "rgb(255, 255, 255)",
			},

			'& .transfer-cancel-btn': {
				height: "48px",
				width: "130px",
				marginLeft: "4px",
				textTransform: "none",
				display:" inlineFlex",
				flexDirection: "row",
				webkitBoxAlign: "center",
				alignItems: "center",
				borderRadius: "10px",
				webkitBoxPack: "center",
				justifyContent: "center",
				fontSize: "16px",
				fontWeight: 600,
				padding: "12px 20px",
				backgroundColor: "rgb(32, 34, 37)",
				border: "1px solid rgb(112, 122, 131)",
				color: "rgb(229, 232, 235)",
			}
		}
	},

	container: {
		width: "100%",
		display: "flex",
		flexDirection: "row",

		'& .left-filter-bar': {
			width: "60px",
			borderRight: "1px solid #fd562a",

			'&.active': {
				width: "340px"
			},

			'& .toggle-box': {
				cursor: "pointer",
				color: "#8a939b",
				width: "60px",
				height: "60px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",

				'&:hover': {
					boxShadow: "rgb(4 17 29 / 25%) 0px 0px 8px 0px",
					color: "white"
				}
			}
		},

		'& .flex-1': {
			flex: 1,
		},

		'& .m-r-5': {
			marginRight: "5px",
		},

		'& .m-l-5': {
			marginLeft: "5px",
		},

		'& .select-gray': {
			'&>div:first-of-type': {
				background: '#353840',
				'& div' :{
					color: '#ffffff !important'
				}
			}
		},

		'& .content-box': {
			flex: 4,
			display: "flex",
			flexDirection: "column",
			padding: "24px",

			'& .search-box': {
				display: "flex",
				flexDirection: "row",

				'& .sort-box': {
					marginLeft: "5px",
					display: "flex",
					flexDirection: "row"
				}
			}
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

			'&.height-3x': {
				height: '144px',
			},
		},
	},
};

export default style;
