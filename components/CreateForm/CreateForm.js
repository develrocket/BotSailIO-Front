import React, { useState,useEffect } from "react";
import Image from "next/image";

// material-ui components
import {makeStyles} from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/components/createStyle";

const useStyles = makeStyles(styles);

export default function CreateForm() {
	const classes = useStyles();
	const [ logo, setLogo ] = useState("");
	const [ FeaturedImg, setFeaturedImg ] = useState("");
	const logoChange = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			setLogo(e.target.files[0]);
		}
	};
	const FeaturedImgChange = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			setFeaturedImg(e.target.files[0]);
		}
	};
	return (
		<form className={ classes.form }>
			<p><span style={{ color: 'red' }}>*</span> Required fields</p>

			<div>
				<h4 className="logoHead"><strong>Logo image</strong></h4>
				<p>This image will also be used for navigation. 350 x 350 recommended.</p>
				<label className="logoImgInput" htmlFor="logoInput">
					<input type="file" id="logoInput" name="logoInput" accept="image/*" style={{ display: 'none' }} onChange={logoChange} />
					{ !logo ? <i className="fa fa-image" style={{ fontSize: '4.5em' }} /> :
						<i className="fa fa-image imgIcon" /> }
					{ logo && <div className="logoImg">
						<img src={ URL.createObjectURL(logo) } width={160} height={160} />
					</div> }
				</label>
			</div>

			<div>
				<h4><strong>Featured image</strong></h4>
				<p>This image will be used for featuring your collection on the homepage, category pages, or other promotional areas of OpenSea. 600 x 400 recommended.</p>
				<label className="FeaturedImgInput" htmlFor="FeaturedInput">
					<input type="file" id="FeaturedInput" name="FeaturedInput" accept="image/*" style={{ display: 'none' }} onChange={FeaturedImgChange} />
					{ !FeaturedImg ? <i className="fa fa-image" style={{ fontSize: '4.5em' }} /> :
						<i className="fa fa-image FeaturedImgIcon" /> }
					{ FeaturedImg && <div className="FeaturedImg">
						<span className={'removeImg'}>&times;</span>
						<img src={ URL.createObjectURL(FeaturedImg) } width={300} height={200} />
					</div> }
				</label>
			</div>

			<div>
				<h4><strong>Banner image</strong></h4>
				<p>This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 400 recommended.recommended</p>
				<label className="FeaturedImgInput" htmlFor="FeaturedInput">
					<input type="file" id="FeaturedInput" name="FeaturedInput" accept="image/*" style={{ display: 'none' }} onChange={FeaturedImgChange} />
					{ !FeaturedImg ? <i className="fa fa-image" style={{ fontSize: '4.5em' }} /> :
						<i className="fa fa-image FeaturedImgIcon" /> }
					{ FeaturedImg && <div className="FeaturedImg">
						<span className={'removeImg'}>&times;</span>
						<img src={ URL.createObjectURL(FeaturedImg) } width={300} height={200} />
					</div> }
				</label>
			</div>

		</form>
	);
}

CreateForm.propTypes = {};
