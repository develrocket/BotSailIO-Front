import React from "react";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import CreateCollection from "../../components/CreateCollection/CreateCollection";
import {makeStyles} from "@material-ui/core/styles";

import styles from "styles/jss/nextjs-material-kit/pages/components";
import basicsStyles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle";
import pageStyles from "styles/jss/nextjs-material-kit/pages/create";
const useStyles = makeStyles({...basicsStyles, ...styles, ...pageStyles});

export default function Index(props) {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<GridContainer style={{ justifyContent: 'center' }}>
				<GridItem xs={12} sm={12} md={8} lg={9}>
					<div className={classes.partTitle}>
						<h1 className="top">Create a Collection</h1>
						<CreateCollection />
					</div>
				</GridItem>
			</GridContainer>
		</div>
	);
}
