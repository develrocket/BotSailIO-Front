import React, {Component, useRef, useState} from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CollectionFilter from "components/CollectionFilter/CollectionFilter";
import ItemList from "components/Collection/Item/ItemList";
import {makeStyles} from "@material-ui/core/styles";
import {FileCopy, Done, Twitter, Telegram, Widgets, Language} from '@material-ui/icons';

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import basicsStyles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import pageStyles from "styles/jss/nextjs-material-kit/pages/collections/itemStype.js";
import Button from "components/CustomButtons/Button";

const useStyles = makeStyles({...basicsStyles, ...styles, ...pageStyles});

export default function Detail({item}) {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<GridContainer className={classes.detailpage}>
				<GridItem xs={12} sm={12} md={6} lg={7} className="media-box">
				</GridItem>
				<GridItem xs={12} sm={12} md={6} lg={5}>
				</GridItem>
			</GridContainer>
		</div>
	);
}

export async function getStaticProps({params}) {
	// TODO get item's detail of collection from params.companyName, params.groupName, params.id
	const item = []
	return {
		props: {
			item
		}
	}
}

export async function getStaticPaths() {
	// TODO get collection's item list from db.
	const paths =
		[
			{
				params: {
					companyName: "velas",
					groupName: 'velas-apes-club',
					id: '216'
				}
			},
			{
				params: {
					companyName: "velas",
					groupName: 'velas-apes-club',
					id: '215'
				}
			}
		]
	return {
		paths,
		fallback: false
	}
}
