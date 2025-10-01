import {
	useBlockProps,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import metadata from "./block.json";
import { useSelect } from "@wordpress/data";

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

	console.log(image);

	return (
		<>
			<div {...blockProps}>
				{attributes.imageId && image && image.source_url ? (
					<img
						src={image.source_url}
						alt={image.alt}
						style={{
							width: "100%",
							height: "250px",
							objectFit: "cover",
							objectPosition: "center",
						}}
					/>
				) : (
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							value={attributes.imageId}
							render={({ open }) => (
								<button onClick={open}>
									{__("Select an Image", metadata.textdomain)}
								</button>
							)}
							onSelect={(media) => {
								setAttributes({
									imageId: media.id,
								});
							}}
						/>
					</MediaUploadCheck>
				)}
			</div>
		</>
	);
}
