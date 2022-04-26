import React from "react";
import Image from "next/image";

// material-ui components

import Button from "components/CustomButtons/Button.js";
import {makeStyles} from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/components/offerListStyle";

const useStyles = makeStyles(styles);

export default function OfferItem() {
	const classes = useStyles();
	return (
		<li>
			<a href="/velas/velas-apes-club/215">
				<div className="media">
					<Image src="https://m.raregems.io/t/5122702?optimizer=image&width=400" width={200} height={200} loading="lazy"/>
				</div>
				<div className="meta">
					<div className="counters">
						VelasApesClub
					</div>
					<div className="name">Velas Apes # #251</div>
					<div className="btn">
						<Button color="primary" size="sm" round>Buy for <b>&nbsp;1500 VLX</b></Button>
					</div>
				</div>
			</a>
		</li>
	);
}

OfferItem.propTypes = {};
