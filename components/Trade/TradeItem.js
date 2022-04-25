import React from "react";
import Image from "next/image";

// material-ui components

import Button from "components/CustomButtons/Button.js";
import Success from "components/Typography/Success.js";
import {makeStyles} from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/components/tradeListStyle";

const useStyles = makeStyles(styles);

export default function TradeItem() {
	const classes = useStyles();
	return (
		<li>
			<a href="/offer/1">
				<div className="media">
					<Image src="https://m.raregems.io/t/5122702?optimizer=image&width=400" width={200} height={200} loading="lazy"/>
				</div>
				<div className="meta">
					<div className="chain">
						<Image src="https://s.raregems.io/97/img/chains/velas.svg" width={16} height={16} loading="lazy"/>Velas
					</div>
					{/*<div className="counters">*/}
					{/*	VelasApesClub*/}
					{/*</div>*/}
					<div className="name">Velas Apes # #251</div>
					{/*<div className="btn">*/}
					{/*	<Button color="primary" size="sm" round>Buy for <b>&nbsp;1500 VLX</b></Button>*/}
					{/*</div>*/}
					<div style={{ textAlign: 'center' }}>
						<Success><strong>89 VLX</strong></Success>
					</div>
				</div>
			</a>
		</li>
	);
}

TradeItem.propTypes = {};
