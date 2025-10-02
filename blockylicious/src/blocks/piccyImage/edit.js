import {
	useBlockProps,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import metadata from "./block.json";
import { useSelect } from "@wordpress/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// https://docs.fontawesome.com/web/use-with/react/use-with
config.autoAddCss = false;

import { useImage } from "../../hooks/useImage";
import { ImageThumbnail } from "../../components/ImageThumbnail";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();

	const image = useImage(attributes.imageId);

	const imageSelected = !!attributes.imageId && !!image?.source_url;

	return (
		<>
			<div {...blockProps}>
				{imageSelected ? (
					<ImageThumbnail imageId={attributes.imageId} />
				) : (
					<div className="piccy-image-placeholder">
						<FontAwesomeIcon icon={faImage} style={{ margin: "auto" }} />
					</div>
				)}
				<MediaUploadCheck>
					<MediaUpload
						allowedTypes={["image"]}
						value={attributes.imageId}
						render={({ open }) => (
							<button onClick={open} className="piccy-image-button">
								{imageSelected
									? __("Replace Image", metadata.textdomain)
									: __("Select an Image", metadata.textdomain)}
							</button>
						)}
						onSelect={(media) => {
							setAttributes({
								imageId: media.id,
							});
						}}
					/>
				</MediaUploadCheck>
			</div>
		</>
	);
}
