import React, {Component, useState} from "react";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import MyNFTsList from "../components/myNFTList/MyNFTsList";
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import IconButton from "@material-ui/core/IconButton";
import {MoreVert, Storefront, Send, VisibilityOff, Block} from "@material-ui/icons";
import { useRouter } from 'next/router'

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import basicsStyles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import pageStyles from "styles/jss/nextjs-material-kit/pages/myNFTs";
import {useWeb3} from "@3rdweb/hooks";
import CopyBox from "../components/Collection/Item/CopyBox";
const useStyles = makeStyles({...basicsStyles, ...styles, ...pageStyles});

export default function Index(props) {
	const classes = useStyles();
	const router = useRouter();
	const { pathname, query } = router
	const { connectWallet, address, error } = useWeb3();
	const [isShowSubMenu, setIsShowSubMenu] = useState(false);
	const [commandType, setCommandType] = useState("");
	const [selectedList, setSelectedList] = useState([]);

	const handleCommand = (type, token) => {
		token = token + '';
		setIsShowSubMenu(true);
		setCommandType(type);
		setSelectedList([...token]);
	};

	const handleClickItem = (token) => {
		token = token + '';
		console.log(0, token, selectedList);
		if (commandType !== "") {
			console.log(1, token, selectedList);
			if (selectedList.includes(token)) {
				console.log(2, token, selectedList);
				const data = selectedList;
				data.splice(token, 1);
				setSelectedList([...data]);
			} else {
				console.log(3, token, selectedList);
				setSelectedList([...selectedList, token]);
			}
		}
	};

	const handleClickCancel = () => {
		setIsShowSubMenu(false);
		setCommandType("");
		setSelectedList([]);
	};

	const handleClickTransfer = () => {
		router.push({
			pathname: '/transfer',
			query: { assets: selectedList },
		})
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
								? <MyNFTsList handleCommand={handleCommand} handleClickItem={handleClickItem}
											  selectedList={selectedList} isDoingCommand={false} />
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
								selectedList.map((item, key) =>
									<div className="cart-item">
										<img src="https://m.raregems.io/c/21725?optimizer=image&amp;width=400"
											 className="cart-img" alt="cart-img" />
									</div>
								)
							}

							{
								selectedList.length === 0 &&
								<p>Select items to transfer. You can only sell bundles of items with the same
									verification status.</p>
							}
						</div>
						<Button color="info" className="transfer-btn" onClick={handleClickTransfer}><Send />Transfer</Button>
						<Button className="transfer-cancel-btn" onClick={handleClickCancel}><Block />Cancel</Button>
					</div>
				</div>
			}
		</>
	);
}
