const createItemFormStyle = {
	createItemForm: {
		maxWidth: "1280px",
		textAlign: "left",
		color: "white",
		padding: "24px",

		'& .fileContainer': {
			border: '3px dashed rgb(204, 204, 204)',
			width: '350px',
			height: '260px',
			borderRadius: '10px',
			padding: "4px",

			'& .rbFileInput': {
				cursor: 'pointer',
				borderRadius: '10px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'relative',
				height: "100%",
				width: "100%",

				'&:hover': {
					background: '#212529'
				},

				'& .video-change': {
					height: "50px",
					lineHeight: "50px",
					textAlign: "center",
					color: "white",
					fontSize: "20px",

					'&:hover': {
						color: "#339af0 !important"
					},
				},

				'& .rbFileIcon': {
					fontSize: '4.5em',
					opacity: '0',
					transition: 'opacity 400ms ease 0s'
				},

				'& .fa:not(.rbFileIcon)': {
					opacity: '1',
					transition: 'opacity 400ms ease 0s'
				},

				'& .rbFile': {
					width: '100%',
					height: '100%',
					overflow: 'hidden',
					position: 'absolute',
					padding: '4px',

					'& img': {
						width: "100%",
						height: "100%",
						borderRadius: '10px',
						transition: 'opacity 400ms ease 0s',
						opacity: '1',
						objectFit: 'cover'
					}
				},

				'& .removeImg': {
					position: 'absolute',
					top: '12px',
					right: '12px',
					color: 'rgb(204, 204, 204)',
					lineHeight: '50%',
					fontSize: '38px'
				}
			},
		},

		'& .bordered-input': {
			width: "100%",
			height: "48px",
			fontSize: "20px",
			background: "transparent",
			border: "1px solid darkgray",
			borderRadius: "8px",
			padding: "10px",
			color: "white",

			'&.height-3x': {
				height: '144px',
			},

			'&.select-box': {

			}
		},

		'& .modal-box': {
			display: "flex",
			padding: "12px 10px 0px 10px",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			borderBottom: "1px solid darkgray",

			'& .round-border': {
				border: "1px solid gray",
				borderRadius: "10px",
				width: "40px",
				height: "40px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				color: "gray",

				'&:hover': {
					border: "1px solid darkgray",
					color: "darkgray"
				}
			},

			'& .content-box': {
				display: "flex",
				flexDirection: "row",
				alignItems: "center"
			}
		},

		'& .text-label': {
			marginTop: "15px",
			fontSize: "18px",
			fontWeight: "bold"
		},

		'& .m-t-4': {
			marginTop: "4px"
		},

		'& .m-t-15': {
			marginTop: "15px"
		},

		'& .text-danger': {
			color: "#eb5757",
			margin: "0px 3px"
		}
	}
};

export default createItemFormStyle;
