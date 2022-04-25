import React, {Component, useState} from "react";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import MyNFTsList from "../components/myNFTList/MyNFTsList";
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import basicsStyles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import pageStyles from "styles/jss/nextjs-material-kit/pages/myNFTs";
const useStyles = makeStyles({...basicsStyles, ...styles, ...pageStyles});

export default function Index(props) {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<GridContainer style={{ justifyContent: 'center' }}>
				<GridItem xs={12} sm={12} md={8} lg={9}>
					<div className={classes.partTitle}>
						<h1 className="top">My NFTs</h1>
						<ul className="stats">
							<li>
								<div className="name" style={{ lineHeight: '0.9em' }}>Tokens</div>
								<div className="value">0</div>
							</li>
							<li>
								<div className="name" style={{ lineHeight: '0.9em' }}>For sale</div>
								<div className="value">0</div>
							</li>
							<li>
								<div className="name" style={{ lineHeight: '0.9em' }}	>Hidden</div>
								<div className="value">0</div>
							</li>
						</ul>
					</div>

					{/*<MyNFTsList/>*/}
					<p style={{ textAlign: 'center', color: '#868e96', fontSize: '19px' }}>
						Nothing found 👀
					</p>
					<div style={{ textAlign: 'center', margin: '64px 0' }}>
						<Button color="primary" round size="lg" style={{ textTransform: 'capitalize', padding: '10px 40px' }}>
							<h3 style={{ margin: '0' }}>Connect Wallet</h3>
						</Button>
					</div>
				</GridItem>
			</GridContainer>
		</div>
	);
}
