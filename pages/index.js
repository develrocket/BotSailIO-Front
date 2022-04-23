import React, {Component} from "react";
import Router from "next/router";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import Parallax from "../components/Parallax/Parallax";
import {makeStyles} from "@material-ui/core/styles";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";
const useStyles = makeStyles(styles);

export default function Index(props) {
	const classes = useStyles();

	return (
		<Parallax filter responsive image="/img/landing-bg.jpg" style={{height: '100vh'}}>
			<div className={classes.container}>
				<GridContainer>
					<GridItem xs={12} sm={12} md={12} className={'text-center'}>
						<h4 style={{margin: 0}}>Non-Custodial</h4>
						<h2 style={{margin: 0}}>Multi-Chain</h2>
						<h1 className={classes.title} style={{marginTop: 0}}>NFT Marketplace</h1>
						<div className={'home-logo-box'}>
							<img src={'/img/logos/velas.svg'} />
							<img src={'/img/logos/celo.svg'} />
							<img src={'/img/logos/moonbeam.svg'} />
						</div>
						<br/>
						<Button
							color="primary"
							size="lg"
							href="/collections"
							rel="noopener noreferrer"
						>
							Browse All Collections
						</Button>
					</GridItem>
				</GridContainer>
			</div>
		</Parallax>
	);
}
