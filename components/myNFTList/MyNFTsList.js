import React from "react";

// material-ui components
import {makeStyles} from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/components/collectionListStyle";
import MyNFTItem from "./MyNFTItem";
const useStyles = makeStyles(styles);

export default function MyNFTsList() {
	const classes = useStyles();
	return (
		<ul className={classes.items}>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
			<MyNFTItem/>
		</ul>
	);
}

MyNFTsList.propTypes = {};
