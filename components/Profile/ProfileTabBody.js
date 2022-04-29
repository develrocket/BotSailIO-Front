import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import { PhotoFilter, } from '@material-ui/icons';
import styles from "styles/jss/nextjs-material-kit/components/profile/tagBodyStyle.js";
const useStyles = makeStyles(styles);

import Button from "components/CustomButtons/Button.js";
import Popover from "@material-ui/core/Popover";
import {useRouter} from "next/router";

const ProfileTagList = (props) => {
	const classes = useStyles();
	const router = useRouter();
	const [anchorElListings, setAnchorElListings] = React.useState(null);

	const showMoreCreated = (e) => {
		e.preventDefault();
		setAnchorElCreated(e.currentTarget);
	}

	return (
		<div className={classes.container}>
		</div>
	);
}

export default ProfileTagList;
