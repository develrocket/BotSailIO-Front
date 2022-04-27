import { useRouter } from 'next/router'
import {useWeb3} from "@3rdweb/hooks";
import React, {useState} from "react";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import {Block, Send, ChevronRight, ErrorOutline} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import Datetime from "react-datetime";
import FormControl from "@material-ui/core/FormControl";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import basicsStyles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import tooltipsStyle from "styles/jss/nextjs-material-kit/tooltipsStyle.js";
import pageStyles from "styles/jss/nextjs-material-kit/pages/sellItem.js";
import item from "./create/item";
import Tooltip from "@material-ui/core/Tooltip";
import formatMoneyOptionLabel from "../components/Sell/formatMoneyOptionLabel";
import Select from "react-select";
const useStyles = makeStyles({...basicsStyles, ...styles, ...tooltipsStyle, ...pageStyles});

export default function Sell(props) {
	const classes = useStyles();
	const router = useRouter();
	const { assets } = router.query;
	let items = [];
	if (assets && !Array.isArray(assets)) {
		items.push(assets);
	} else {
		items = assets;
	}
	const options = [
		{ value: "eth", label: "ETH", customAbbreviation: "Eth" },
	];

	return (
		<>
			<div className={classes.container}>
				<GridContainer className={classes.sellStyle}>
					<GridItem xs={12} sm={12} md={6} lg={6}>
						<h3 className="header">List item for sale</h3>
						<p className="text-label display-flex flex-between">
							<span>Price</span>
							<Tooltip
								id="tooltip-top"
								title="List price and listing schedule cannot be edited once the item is listed. You
								will need to cancel your listing and relist the item with the updated price and dates."
								placement="top"
								classes={{ tooltip: classes.tooltip }}
							>
								<ErrorOutline className="tooltip-icon" />
							</Tooltip>
						</p>
						<div className="price-box">
							<Select
								defaultValue={options[0]}
								formatOptionLabel={formatMoneyOptionLabel}
								options={options}
								instanceId='chainSelect'
								className="select-gray flex-1"
							/>
							<input className="bordered-input flex-3" style={{marginLeft: "10px"}} placeholder="Item name"/>
						</div>
						<p className="text-label">Duration</p>
						<FormControl fullWidth>
							<Datetime
								inputProps={{ placeholder: "Datetime Picker Here" }}
							/>
						</FormControl>
					</GridItem>
					<GridItem xs={12} sm={12} md={6} lg={6}>
					</GridItem>
				</GridContainer>
			</div>
		</>
	);
}
