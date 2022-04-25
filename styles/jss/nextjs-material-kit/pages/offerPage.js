const style = {
	container: {
		display: 'grid',
		gridTemplateColumns: '1fr 540px',
		height: 'calc(100vh - 105px)',
		marginTop: '115px',

		'& .imgContainer': {
			display: 'flex',
			justifyContent: 'center',
			background: '#0006'
		},

		'& .meta': {
			padding: '32px',
			position: 'relative',
			overflowY: 'auto',

			'& .rawList': {
				flexWrap: 'wrap',
				gap: '16px',
				display: 'flex',
				margin: '24px, 0, 12px, 0',
				padding: 0,
				listStyle: 'none',
			},

			'& li>h6': {
				color: '#868E96'
			},

			'& li>h5.ellipse': {
				cursor: 'copy'
			},

			'& li>h5': {
				color: '#ffffff'
			}
		},

		'& .ellipse': {
			whiteSpace: 'nowrap',
			width: '80px',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
}
	}
};

export default style;
