import React, {Component, useRef, useState} from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CollectionFilter from "components/CollectionFilter/CollectionFilter";
import ItemList from "components/Collection/Item/ItemList";
import {makeStyles} from "@material-ui/core/styles";
import {FormatListBulleted, AddSharp, Star, BarChart, LockOpen, Warning, ErrorOutline, Close} from '@material-ui/icons';
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import ReactPlayer from 'react-player';

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import basicsStyles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import pageStyles from "styles/jss/nextjs-material-kit/pages/create/createItemStype.js";
import modalStyle from "styles/jss/nextjs-material-kit/modalStyle.js";
import Button from "components/CustomButtons/Button";

const useStyles = makeStyles({...basicsStyles, ...styles, ...pageStyles, ...modalStyle});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function Item({}) {
	const classes = useStyles();
	const [ mainFile, setMainFile ] = useState(null);
	const [ previewImg, setPreviewImg ] = useState(null);
	const [ isShowVideo, showVideo ] = useState(false);
	const [isPlaying, setIsPlaying] = useState(true);
	const [ isShowPreview, showPreview ] = useState(false);
	const [classicModal, setClassicModal] = React.useState(false);

	const onChangeMainFile =(e) => {
		if (e.target.files && e.target.files.length > 0) {
			const type = e.target.files[0].type.split("/")[0];
			if (type === "video") {
				showVideo(true);
				showPreview(true);
			} else {
				showVideo(false);
				showPreview(false);
			}
			setMainFile(e.target.files[0]);
		}
	}

	const onChangePreviewImg =(e) => {
		if (e.target.files && e.target.files.length > 0) {
			setPreviewImg(e.target.files[0]);
		}
	}

	const removeMainImage =(e) => {
		e.preventDefault();
		setMainFile("");
	}

	const removePreviewImg =(e) => {
		setPreviewImg("");
	}

	return (
		<div className={classes.container}>
			<div className={classes.createItemForm}>
				<h1 className="header">Create New Item</h1>
				<p><span className="text-danger">*</span>Required fields</p>

				<p className="text-label">Image, Video, Audio, or 3D Model<span className="text-danger">*</span></p>
				<p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
				<div className="fileContainer">
					<label className="rbFileInput" htmlFor="main_file_input">
						<input type="file" id="main_file_input" name="main_file" style={{ display: 'none' }}
							   accept=".jpg,.png,.gif,.svg,.mp4,.webm,.mp3,.wav,.ogg,.glb,.gltf,.max" onChange={onChangeMainFile} />
						{ !mainFile ? <i className="fa fa-image" style={{ fontSize: '4.5em' }} /> :
							<i className="fa fa-image rbFileIcon" /> }
						{ mainFile && <div className="rbFile">
							<span className={'removeImg'} onClick={removeMainImage}>&times;</span>
							{isShowVideo
								?
								<>
									<ReactPlayer width="100%" height="calc(100%-50px)" url={ URL.createObjectURL(mainFile) }
												 playing={ isPlaying } controls />
									<div className="video-change" onClick={onChangeMainFile}>Change</div>
								</>
								: <img src={ URL.createObjectURL(mainFile) } width={300} height={200} />
							}
						</div> }
					</label>
				</div>

				{
					isShowPreview &&
					<>
						<p className="text-label">Preview Image<span className="text-danger">*</span></p>
						<p>Because you’ve included multimedia, you’ll need to provide an image (PNG, JPG, or GIF) for the card
							display of your item.</p>
						<label className="rbFileInput" htmlFor="preview_input">
							<input type="file" id="preview_input" name="main_file" accept=".jpg,.png,.gif,.svg"
								   style={{ display: 'none' }} onChange={onChangePreviewImg} />
							{ !previewImg ? <i className="fa fa-image" style={{ fontSize: '4.5em' }} /> :
								<i className="fa fa-image rbFileIcon" /> }
							{ previewImg && <div className="rbFile">
								<span className={'removeImg'} onClick={removePreviewImg}>&times;</span>
								<img src={ URL.createObjectURL(previewImg) } width={300} height={200} />
							</div> }
						</label>
					</>
				}

				<p className="text-label">Name<span className="text-danger">*</span></p>
				<input className="bordered-input" placeholder="Item name"/>

				<p className="text-label">External link</p>
				<p>OpenSea will include a link to this URL on this item's detail page, so that users can click to learn
					more about it. You are welcome to link to your own webpage with more details.</p>
				<input className="bordered-input" placeholder="https://yoursite.io/item/123"/>

				<p className="text-label">Description</p>
				<p>The description will be included on the item's detail page underneath its image.
					<span className="text-blue">Markdown</span> syntax is supported.</p>
				<textarea className="bordered-input height-3x" rows="3"
						  placeholder="Provide a detailed description of your item." />

				<p className="text-label">Collection</p>
				<p>
					This is the collection where your item will appear.<ErrorOutline/>
				</p>
				<div className="select">
					<select className="bordered-input select-box" placeholder="Select Collection">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</select>
				</div>

				<div className="modal-box m-t-15">
					<div className="content-box">
						<FormatListBulleted />
						<div style={{marginLeft: "15px"}}>
							<p className="text-label">Properties</p>
							<p>Textual traits that show up as rectangles</p>
						</div>
					</div>
					<div className="round-border">
						<AddSharp onClick={() => setClassicModal(true)} />
						<Dialog
							classes={{
								root: classes.center,
								paper: classes.modal,
							}}
							open={classicModal}
							TransitionComponent={Transition}
							keepMounted
							onClose={() => setClassicModal(false)}
							aria-labelledby="classic-modal-slide-title"
							aria-describedby="classic-modal-slide-description"
						>
							<DialogTitle
								id="classic-modal-slide-title"
								disableTypography
								className={classes.modalHeader}
								style={{borderBottom: "1px solid gray"}}
							>
								<IconButton
									className={classes.modalCloseButton}
									key="close"
									aria-label="Close"
									color="inherit"
									onClick={() => setClassicModal(false)}
								>
									<Close className={classes.modalClose} />
								</IconButton>
								<h3 className={classes.modalTitle}>Add Properties</h3>
							</DialogTitle>
							<DialogContent
								id="classic-modal-slide-description"
								className={classes.modalBody}
								style={{borderBottom: "1px solid gray"}}
							>
								<p>
									Properties show up underneath your item, are clickable, and can be filtered in your
									collection's sidebar.
								</p>
								<div className="properties-list">
									<div className="header">
										<div className="header-label">Type</div>
										<div className="header-label">Name</div>
									</div>
									<>
										<div className="properties-row">
											<div className="properties-close"><Close /></div>
											<div className="properties-char">
												<input className="bordered-input" placeholder="Character" />
											</div>
											<div className="properties-close">
												<input className="bordered-input" placeholder="Male" />
											</div>
										</div>
									</>
									<Button color="info" size="lg">Add more</Button>
								</div>
							</DialogContent>
							<DialogActions className={classes.modalFooter}>
								<Button color="success" size="lg">Save</Button>
							</DialogActions>
						</Dialog>
					</div>
				</div>

				<div className="modal-box">
					<div className="content-box">
						<Star />
						<div style={{marginLeft: "15px"}}>
							<p className="text-label">Levels</p>
							<p>Numerical traits that show as a progress bar</p>
						</div>
					</div>
					<div className="round-border">
						<AddSharp />
					</div>
				</div>

				<div className="modal-box">
					<div className="content-box">
						<BarChart />
						<div style={{marginLeft: "15px"}}>
							<p className="text-label">Stats</p>
							<p>Numerical traits that just show as numbers</p>
						</div>
					</div>
					<div className="round-border">
						<AddSharp />
					</div>
				</div>

				<div className="modal-box">
					<div className="content-box">
						<LockOpen />
						<div style={{marginLeft: "15px"}}>
							<p className="text-label">Unlockable Content</p>
							<p>Include unlockable content that can only be revealed by the owner of the item.</p>
						</div>
					</div>
					<div className="round-border">
						<AddSharp />
					</div>
				</div>

				<div className="modal-box">
					<div className="content-box">
						<Warning />
						<div style={{marginLeft: "15px"}}>
							<p className="text-label">Explicit & Sensitive Content</p>
							<p>Set this item as explicit and sensitive content<ErrorOutline /></p>
						</div>
					</div>
					<div className="round-border">
						<AddSharp />
					</div>
				</div>

				<p className="text-label">Supply</p>
				<p>
					The number of items that can be minted. No gas cost to you!<ErrorOutline/>
				</p>
				<input className="bordered-input" placeholder="1" type="number"/>

				<p className="text-label">Blockchain</p>
				<input className="bordered-input" placeholder="1" type="number"/>

				<p className="text-label">Freeze metada`ta</p>
				<p>Freezing your metadata will allow you to permanently lock and store all of this item's content in
					decentralized file storage.</p>
				<input className="bordered-input" type="text"
					   placeholder="To freeze your metadata, you must create your item first."/>

				<Button color="info" size="lg" style={{margin: "20px 0"}}>Create</Button>
			</div>
		</div>
	);
}
