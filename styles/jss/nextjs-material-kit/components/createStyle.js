const formStyle = {
	form: {
		'& *': {
			color: '#ced4da'
		},

		'& .logoHead:after': {
			content: '" *"',
			color: 'red'
		},

		'& .logoImgInput': {
			cursor: 'pointer',
			borderRadius: '50%',
			border: '3px dashed rgb(204, 204, 204)',
			width: '160px',
			height: '160px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'relative',

			'& .imgIcon': {
				fontSize: '4.5em',
				opacity: '0',
				transition: 'opacity 400ms ease 0s'
			},

			'& .fa:not(.imgIcon)': {
				opacity: '1',
				transition: 'opacity 400ms ease 0s'
			},

			'& .logoImg': {
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				position: 'absolute',
				padding: '4px',

				'& img': {
					maxWidth: "100%",
					height: "100%",
					borderRadius: '50%',
					transition: 'opacity 400ms ease 0s',
					opacity: '1'
				}
			}
		},

		'& .logoImgInput:hover': {
			'& .imgIcon': {
				zIndex: '1',
				opacity: '1',
				color: 'rgb(179, 179, 179)'
			},

			'& img': {
				opacity: '0.7 !important'
			},

			'& .fa:not(.imgIcon)': {
				opacity: '0.7'
			},
		},

		'& .FeaturedImgInput': {
			cursor: 'pointer',
			borderRadius: '10px',
			border: '3px dashed rgb(204, 204, 204)',
			width: '300px',
			height: '200px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'relative',

			'& .FeaturedImgIcon': {
				fontSize: '4.5em',
				opacity: '0',
				transition: 'opacity 400ms ease 0s'
			},

			'& .fa:not(.FeaturedImgIcon)': {
				opacity: '1',
				transition: 'opacity 400ms ease 0s'
			},

			'& .FeaturedImg': {
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				position: 'absolute',
				padding: '4px',

				'& img': {
					maxWidth: "100%",
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

		'& .FeaturedImgInput:hover': {
			'& .FeaturedImgIcon': {
				zIndex: '1',
				opacity: '1',
				color: 'rgb(179, 179, 179)'
			},

			'& img': {
				opacity: '0.7 !important'
			},

			'& .fa:not(.imgIcon)': {
				opacity: '0.7'
			},
		}
	}
};

export default formStyle;
