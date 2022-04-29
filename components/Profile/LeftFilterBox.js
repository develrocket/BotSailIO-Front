import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {FilterList, ArrowBack, KeyboardArrowDown, KeyboardArrowUp} from '@material-ui/icons';
import styles from "styles/jss/nextjs-material-kit/components/profile/leftFilterBoxStyle.js";
const useStyles = makeStyles(styles);
import Select from "react-select";

import formatMoneyOptionLabel from "components/Profile/formatMoneyOptionLabel";

const LeftFilterBox = (props) => {
	const classes = useStyles();
	const [isShowStatus, setIsShowStatus] = useState(false);
	const [isShowPrice, setIsShowPrice] = useState(false);
	const [isShowCollections, setIsShowCollections] = useState(false);
	const [isShowChains, setIsShowChains] = useState(false);
	const [isShowCategories, setIsShowCategories] = useState(false);
	const [isShowSale, setIsShowSale] = useState(false);
	const [filterConditions, setFilterConditions] = useState([]);

	const options = [
		{ value: "usd", label: "United Status Dollar (USD)", customAbbreviation: "" },
		{ value: "eth", label: "Ether (ETH)", customAbbreviation: "" },
		{ value: "sol", label: "Solana (SOL)", customAbbreviation: "" },
	];

	const handleClickButton = (item) => {
		if (filterConditions.includes(item)) {
			const filtered = filterConditions.filter(function(value, index, arr){
				return value !== item;
			});
			setFilterConditions([...filtered]);
		} else {
			setFilterConditions([...filterConditions, item]);
		}
	}

	return (
		<div className={classes.container}>
			<div className="filter-header">
				<div className="toggle-box color-white">
					<FilterList />
				</div>
				<p align="left" className="flex-1 header-label">Filter</p>
				<div className="toggle-box" onClick={props.handleClickToggleBtn}>
					<ArrowBack className="toggle-btn"/>
				</div>
			</div>
			<div className="filter-row" onClick={() => setIsShowStatus(!isShowStatus)}>
				<p className="filter-header-label">Status</p>
				<div className="toggle-more">
					{isShowStatus
						? <KeyboardArrowUp />
						: <KeyboardArrowDown />
					}
				</div>
			</div>
			{isShowStatus &&
				<div className="filter-bar">
					<div className={"filter-btn" + (filterConditions.includes("buy_now") ? " selected" : "")}
						 onClick={() => handleClickButton("buy_now")}>Buy Now</div>
					<div className={"filter-btn" + (filterConditions.includes("on_auction") ? " selected" : "")}
						 onClick={() => handleClickButton("on_auction")}>On Auction</div>
					<div className={"filter-btn" + (filterConditions.includes("new") ? " selected" : "")}
						 onClick={() => handleClickButton("new")}>New</div>
					<div className={"filter-btn" + (filterConditions.includes("has_offer") ? " selected" : "")}
						 onClick={() => handleClickButton("has_offer")}>Has Offers</div>
				</div>
			}
			<div className="filter-row" onClick={() => setIsShowPrice(!isShowPrice)}>
				<p className="filter-header-label">Price</p>
				<div className="toggle-more">
					{isShowPrice
						? <KeyboardArrowUp />
						: <KeyboardArrowDown />
					}
				</div>
			</div>
			{isShowPrice &&
			<div className="filter-bar">
				<Select
					className="select-gray"
					defaultValue={options[0]}
					formatOptionLabel={formatMoneyOptionLabel}
					options={options}
					instanceId='moneySelect'
				/>
				<span style={{display: "flex", flexDirection: "row", marginTop: "12px"}}>
					<input className="bordered-input flex-1" placeholder="Min"/>
					<span style={{lineHeight: "40px", width: "40px", fontSize: "20px", textAlign: "center"}}>to</span>
					<input className="bordered-input flex-1" placeholder="Min"/>
				</span>
				<div className={"filter-btn m-0 m-t-12 h-48" + (filterConditions.includes("price") ? " selected" : "")}
					 onClick={() => handleClickButton("price")}>Apply</div>
			</div>
			}
			<div className="filter-row" onClick={() => setIsShowCollections(!isShowCollections)}>
				<p className="filter-header-label">Collections</p>
				<div className="toggle-more">
					{isShowCollections
						? <KeyboardArrowUp />
						: <KeyboardArrowDown />
					}
				</div>
			</div>
			{
				isShowCollections &&
				<div className="filter-bar">
					<input className="bordered-input m-r-5 flex-1" placeholder="Search"/>
				</div>
			}
			<div className="filter-row" onClick={() => setIsShowChains(!isShowChains)}>
				<p className="filter-header-label">Chains</p>
				<div className="toggle-more">
					{isShowChains
						? <KeyboardArrowUp />
						: <KeyboardArrowDown />
					}
				</div>
			</div>
			<div className="filter-row" onClick={() => setIsShowCategories(!isShowCategories)}>
				<p className="filter-header-label">Categories</p>
				<div className="toggle-more">
					{isShowCategories
						? <KeyboardArrowUp />
						: <KeyboardArrowDown />
					}
				</div>
			</div>
			<div className="filter-row" onClick={() => setIsShowSale(!isShowSale)}>
				<p className="filter-header-label">On Sale In</p>
				<div className="toggle-more">
					{isShowSale
						? <KeyboardArrowUp />
						: <KeyboardArrowDown />
					}
				</div>
			</div>
		</div>
	);
}

export default LeftFilterBox;
