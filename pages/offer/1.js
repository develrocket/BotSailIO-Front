import React from "react";
import Image from "next/image";
import Link from "next/link"

// material-ui components

import Button from "components/CustomButtons/Button.js";
import FolderShared from "@material-ui/icons/FolderShared";
import {makeStyles} from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/offerPage";

const useStyles = makeStyles(styles);

export default function OfferItem() {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className="imgContainer">
				<Image src="https://m.raregems.io/t/5122702?optimizer=image&width=400" width={200} height={200} loading="lazy"/>
			</div>
			<div className="meta">
				<div>
					<Link href='/' style={{ color: 'blue' }}><a>VelasPunks</a></Link>
					<Button color="default" simple style={{ padding: 0, float: 'right' }}>
						<FolderShared />
					</Button>
				</div>
				<h1 style={{ color: '#ffffff', margin: '8px 0 16px', fontSize: '32px', fontWeight: '700' }}>Velas Punks #3309</h1>
				<p style={{ color: '#868E96' }}>Velas Punks is the first NFT collection of 10,777 Vpunks on the Velas blockchain.</p>
				<ul className="rawList">
					<li>
						<h6>BLOCKCHAIN</h6>
						<div className="value">190</div>
					</li>
					<li>
						<h6>CONTRACT ADDR</h6>
						<h5 className="ellipse" title={`Copy`}>0x02A837BB9263a9925c71F390B0DD36BB49000E2b</h5>
					</li>
					<li>
						<h6>STANDARD</h6>
						<h5>ERC721</h5>
					</li>
					<li>
						<h6>TOKEN ID</h6>
						<h5>100000051</h5>
					</li>
					<li>
						<h6>OWNER</h6>
						<Link href={`/`}><a><h5 className="ellipse">0x8fBd07DE10BCa6433d695312E8c41Fc0537393e0</h5></a></Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

OfferItem.propTypes = {};
