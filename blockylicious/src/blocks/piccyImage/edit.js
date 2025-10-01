import {
	useBlockProps,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import metadata from "./block.json";
import { useSelect } from "@wordpress/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPanorama } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();

	const image = useSelect(
		(select) => {
			return select("core").getEntityRecord(
				"postType",
				"attachment",
				attributes.imageId,
			);
		},
		[attributes.imageId],
	);

	const imageSelected = !!attributes.imageId && !!image?.source_url;

	return (
		<>
			<div {...blockProps}>
				{imageSelected ? (
					<img
						src={image.source_url}
						alt={image.alt}
						style={{
							width: "100%",
							height: "150px",
							objectFit: "cover",
							objectPosition: "center",
						}}
					/>
				) : (
					<div className="piccy-image-placeholder">
						<FontAwesomeIcon icon={faPanorama} style={{ margin: "auto" }} />
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
