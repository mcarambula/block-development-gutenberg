import {
	useBlockProps,
	BlockControls,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton, Icon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import metadata from "./block.json";
import { ImageThumbnail } from "../../components/ImageThumbnail";

import "./editor.scss";

export default function Edit({ clientId }) {
	const blockProps = useBlockProps();
	/* Dont pass the blockProps to the innerBlocksProps, since its a separate div */
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "piccy-gallery-inner-blocks",
		},
		{
			allowedBlocks: ["blockylicious/piccy-image"],
		},
	);

	const [isPreviewOpen, setIsPreviewOpen] = useState(false);

	const innerBlocks = useSelect(
		(select) => {
			const block = select("core/block-editor").getBlock(clientId);

			return block?.innerBlocks;
		},
		[clientId],
	);

	console.log(innerBlocks);

	const [previewModeImage, setPreviewModeImage] = useState({
		imageId: innerBlocks?.[0]?.attributes?.imageId || null,
		blockId: innerBlocks?.[0]?.clientId || null,
	});

	const stop = (e) => {
		e.stopPropagation();
	};

	return (
		<>
			<div {...blockProps}>
				{isPreviewOpen ? (
					<>
						<div className="preview-mode">
							{(innerBlocks || []).map((block) => {
								return (
									<div
										className="thumb-container"
										key={block.clientId}
										role="button"
										tabIndex={0}
										onMouseDown={stop} // 👈 clave
										onClick={() => {
											setPreviewModeImage({
												imageId: block.attributes.imageId,
												blockId: block.clientId,
											});
										}}
									>
										<ImageThumbnail
											imageId={block.attributes.imageId}
											imageHeight={110}
											className={`thumb${
												previewModeImage.blockId === block.clientId
													? " selected"
													: ""
											}`}
										/>
									</div>
								);
							})}
						</div>
						<ImageThumbnail
							imageId={previewModeImage.imageId}
							imageHeight="550px"
						/>
					</>
				) : (
					<div className="edit-mode">
						<span className="piccy-label">
							{__("Piccy image gallery", metadata.textdomain)}
						</span>
						<div {...innerBlocksProps} />
					</div>
				)}
			</div>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={<Icon icon={!isPreviewOpen ? "welcome-view-site" : "edit"} />}
						label={__(
							isPreviewOpen ? "Edit Gallery" : "Preview Gallery",
							metadata.textdomain,
						)}
						onClick={() => setIsPreviewOpen(!isPreviewOpen)}
					/>
				</ToolbarGroup>
			</BlockControls>
		</>
	);
}
