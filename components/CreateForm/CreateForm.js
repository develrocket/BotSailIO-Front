import React from "react";
import Image from "next/image";

// material-ui components
import {makeStyles} from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/components/createStyle";

const useStyles = makeStyles(styles);

export default function CreateForm() {
	const classes = useStyles();
	return (
		<form className={ classes.form }>
			<p><span style={{ color: 'red' }}>*</span> Required fields</p>
			<div>
				<h4 className="logoHead">Logo image</h4>
				<p>This image will also be used for navigation. 350 x 350 recommended.</p>
				<div className="logoImg">
					<i className="fa fa-image" style={{ fontSize: '4.5em' }}/>
				</div>
			</div>
		</form>
	);
}

CreateForm.propTypes = {};
