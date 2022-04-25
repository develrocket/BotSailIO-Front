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
import {Apps, CloudDownload} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
	const router = useRouter();
	const { connectWallet, address, error } = useWeb3();

	console.log('wallet-address:', address, error);

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
                    className={classes.navLink}
                >
                    My NFTs
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="/offers"
                    color="transparent"
                    className={classes.navLink}
                >
                    Latest Offer
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="/trades"
                    color="transparent"
                    className={classes.navLink}
                >
                    Latest Trade
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-navbar"
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    Website Builder
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
				{address ? (
					<Button
						color="default"
						target="_blank"
						className={classes.navLink}
					>
						<MiddleTruncate
							text={address}
							start={6}
							end={4} />
					</Button>
				) : (
					<Button
						color="primary"
						target="_blank"
						className={classes.navLink}
						onClick={()=>connectWallet("injected")}
					>
						Connect Wallet
					</Button>
				)}
            </ListItem>
        </List>
    );
}
