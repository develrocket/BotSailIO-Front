import React, {Component, useRef, useState} from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CollectionFilter from "components/CollectionFilter/CollectionFilter";
import ItemList from "components/Collection/Item/ItemList";
import {makeStyles} from "@material-ui/core/styles";
import {FileCopy, Done, Twitter, Telegram, Widgets, Language} from '@material-ui/icons';

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import basicsStyles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import pageStyles from "styles/jss/nextjs-material-kit/pages/create/createItemStype.js";
import Button from "components/CustomButtons/Button";

const useStyles = makeStyles({...basicsStyles, ...styles, ...pageStyles});

export default function Item({}) {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.createItemForm}>
				<h1 className="header">Create New Item</h1>
				<p><span className="text-danger">*</span>Required fields</p>
				<p>Image, Video, Audio, or 3D Model<span className="text-danger">*</span></p>
				<p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
				<p>Preview Image<span>*</span></p>
				<p>Because you’ve included multimedia, you’ll need to provide an image (PNG, JPG, or GIF) for the card
					display of your item.</p>
				<p>Name<span className="text-danger">*</span></p>
			</div>
		</div>
	);
}
