import React, { useState } from "react";

// material-ui components
import TokenDropdown from "components/Dropdown/TokenDropdown";
import {makeStyles} from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/components/createCollection/paymentTokensStyle";

const useStyles = makeStyles(styles);

export default function CreateCollection() {
	const classes = useStyles();
	return (
		<div className={'formControl'}>
			<h4><strong>Payment tokens</strong></h4>
			<div>

			</div>
			<p>These tokens can be used to buy and sell your items.</p>
			<TokenDropdown
				navDropdown
				buttonText="Add Token"
				buttonProps={{
					className: classes.navLink,
					color: "transparent",
					width: "100%"
				}}
				onChangeHandle={(val) => blockchainHandle(val)}
				dropdownList={[
					{ divider: true },
					"DAI (Polygon)",
					{ divider: true },
					"USDC (Polygon)",
					{ divider: true },
					"REVV (Polygon)",
					{ divider: true },
				]}
			/>
		</div>
	);
}

CreateCollection.propTypes = {};
