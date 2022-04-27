import React, {Component, useState} from "react";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import MyNFTsList from "../components/myNFTList/MyNFTsList";
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import IconButton from "@material-ui/core/IconButton";
import {MoreVert, Storefront, Send, VisibilityOff, Block} from "@material-ui/icons";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import basicsStyles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import pageStyles from "styles/jss/nextjs-material-kit/pages/myNFTs";
import {useWeb3} from "@3rdweb/hooks";
import CopyBox from "../components/Collection/Item/CopyBox";
const useStyles = makeStyles({...basicsStyles, ...styles, ...pageStyles});

export default function Index(props) {
	const classes = useStyles();
	const { connectWallet, address, error } = useWeb3();
	const [isShowSubMenu, setIsShowSubMenu] = useState(false);
	const [commandType, setCommandType] = useState("");
	const [selectedList, setSelectedList] = useState([1, 2, 3]);

	const handleCommand = (type, token) => {

		setIsShowSubMenu(true);
		setCommandType(type);
		let items = [];
		items.push(token);
		console.log("selectedList", [...items]);
		setSelectedList([...items]);
		console.log("selectedList", selectedList);
	};

	const handleClickCancel = () => {
		setIsShowSubMenu(false);
		setCommandType("");
		setSelectedList([]);
		console.log("selectedList123", selectedList);
	};

	return (
		<>
			<div className={classes.container}>
				<GridContainer style={{ justifyContent: 'center' }}>
					<GridItem xs={12} sm={12} md={8} lg={9}>
						<div className={classes.partTitle}>
							<h1 className="top">My NFTs</h1>
							{address &&
							<CopyBox value={address} />
							}
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

						{
							address
								? <MyNFTsList handleCommand={handleCommand} selectedList={isShowSubMenu ? selectedList : []} />
								: <>
									<p style={{ textAlign: 'center', color: '#868e96', fontSize: '19px' }}>
										Nothing found 👀
									</p>
									<div style={{ textAlign: 'center', margin: '64px 0' }}>
										<Button color="primary" round size="lg" onClick={()=>connectWallet("injected")}
												style={{ textTransform: 'capitalize', padding: '10px 40px' }}>
											<h3 style={{ margin: '0' }}>Connect Wallet</h3>
										</Button>
									</div>
								</>
						}
					</GridItem>
				</GridContainer>
			</div>
			{
				isShowSubMenu &&
				<div className={classes.transferBox}>
					<div className="cart-container">
						<div className="cart-box">
							{
								selectedList.length === 0
									? <p>Select items to transfer. You can only sell bundles of items with the same
										verification status.</p>
									: <div />
							}
						</div>
						<Button color="info" className="transfer-btn"><Send />Transfer</Button>
						<Button className="transfer-cancel-btn" onClick={handleClickCancel}><Block />Cancel</Button>
					</div>
				</div>
			}
		</>
	);
}
