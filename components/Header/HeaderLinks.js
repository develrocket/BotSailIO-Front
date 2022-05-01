/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useWeb3 } from "@3rdweb/hooks"
import MiddleTruncate from "../Helper/MiddleTruncate";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import {Person, FavoriteBorder, Settings, ExitToApp, Apps} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
	const router = useRouter();
	const { pathname, query } = router
	const { connectWallet, address, error } = useWeb3();
	const [anchorElTop, setAnchorElTop] = React.useState(null);

	const showMoreActions = (e) => {
		e.preventDefault();
		setAnchorElTop(e.currentTarget);
	}

	const incrementCounter = () => {
		const currentCounter = query.counter ? parseInt(query.counter) : 0
		const href = `/?counter=${currentCounter + 1}`

	}

	const goToPage = (url) => {
		const href = "/create/" + url.toLowerCase();
		router.push(href, href, { shallow: true })
	};

	const goToProfilePage = (url) => {
		if (url === "Profile") {
			const href = "/account";
			router.push(href, href, { shallow: true })
		} else if (url === "Favorites") {
			const href = "/account?tab=favorites";
			router.push(href, href, { shallow: true })
		} else if (url === "Settings") {
			const href = "/account/settings";
			router.push(href, href, { shallow: true })
		} else if (url === "My Collections") {
			const href = "/settings";
			router.push(href, href, { shallow: true })
		}
		// TODO Logout logic
	};

	const goToUrl = (url) => {
		router.push(url, url, { shallow: true })
	};

	console.log('wallet-address:', address, error);
	console.log('router pathname', (router.pathname.indexOf('myNFTs') >= 0));


    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    href="/collections"
                    color="transparent"
                    className={classes.navLink + (router.pathname.indexOf('collections') >= 0 ? ' ' + classes.activeLink  : '')}>
                    Collections
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="/myNFTs"
                    color="transparent"
                    className={classes.navLink + (router.pathname.indexOf('myNFTs') >= 0 ? ' ' + classes.activeLink  : '')}
                >
                    My NFTs
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="/offers"
                    color="transparent"
                    className={classes.navLink + (router.pathname.indexOf('offers') >= 0 ? ' ' + classes.activeLink  : '')}
                >
                    Latest Offer
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="/trades"
                    color="transparent"
                    className={classes.navLink + (router.pathname.indexOf('trades') >= 0 ? ' ' + classes.activeLink  : '')}
                >
                    Latest Trade
                </Button>
            </ListItem>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					navDropdown
					buttonText="Create"
					onClick={(url) => {
						goToPage(url);
					}}
					buttonProps={{
						className: classes.navLink,
						color: "transparent",
					}}
					dropdownList={[
						"Collection",
						"Item",
					]}
					className={classes.activeLink}
				/>
			</ListItem>
			<ListItem className={classes.listItem + " " + classes.mobileMenu}>
				<CustomDropdown
					navDropdown
					buttonText="Account"
					onClick={(url) => {
						goToProfilePage(url);
					}}
					buttonProps={{
						className: classes.navLink,
						color: "transparent",
					}}
					dropdownList={[
						"Profile",
						"Favorites",
						"My Collections",
						"Settings",
						"Log Out",
					]}
					className={classes.activeLink}
				/>
			</ListItem>
			<ListItem className={classes.listItem + " " + classes.imgLink}>
				<Button
					href="/account"
					onClick={showMoreActions}
					color="transparent"
					className={classes.navLink + (router.pathname.indexOf('account') >= 0 ? ' ' + classes.activeLink  : '')}
				>
					<img src="/img/faces/avatar.jpg" className="round-avatar" />
				</Button>
				<Popover
					classes={{
						paper: classes.popover,
					}}
					open={Boolean(anchorElTop)}
					anchorEl={anchorElTop}
					onClose={() => setAnchorElTop(null)}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
					style={{marginTop: "8px"}}
				>
					<div className={classes.actionList}>
						<div className="action-item" onClick={() => {
							setAnchorElTop(null);
							goToUrl("/account");
						}}>
							<div className="action-icon">
								<Person />
							</div>
							<div className="action-label">Profile</div>
						</div>
						<div className="action-item" onClick={() => {
							setAnchorElTop(null);
							goToUrl("/account?tab=favorites");
						}}>
							<div className="action-icon">
								<FavoriteBorder />
							</div>
							<div className="action-label">
								Favorites
							</div>
						</div>
						<div className="action-item" onClick={() => {
							setAnchorElTop(null);
							goToUrl("/myCollections");
						}}>
							<div className="action-icon">
								<Apps />
							</div>
							<div className="action-label">
								My Collections
							</div>
						</div>
						<div className="action-item" onClick={() => {
							setAnchorElTop(null);
							goToUrl("/account/settings");
						}}>
							<div className="action-icon">
								<Settings />
							</div>
							<div className="action-label">Settings</div>
						</div>
						<div className="action-item" onClick={() => {
							setAnchorElTop(null);
							// TODO Logout logic
						}}>
							<div className="action-icon">
								<ExitToApp />
							</div>
							<div className="action-label">Log Out</div>
						</div>
					</div>
				</Popover>
			</ListItem>
            <ListItem className={classes.listItem}>
				{address ? (
					<Button
						color="actionButton"
						target="_blank"
						className={'wallet-button'}
					>
						<MiddleTruncate
							text={address}
							start={6}
							end={4} />
					</Button>
				) : (
					<Button
						color="actionButton"
						target="_blank"
						className={'wallet-button'}
						onClick={()=>connectWallet("injected")}
					>
						Connect Wallet
					</Button>
				)}
            </ListItem>
        </List>
    );
}
