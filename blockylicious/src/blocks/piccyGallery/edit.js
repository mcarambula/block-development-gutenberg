import {
	useBlockProps,
	BlockControls,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton, Icon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import metadata from "./block.json";

import "./editor.scss";

export default function Edit() {
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

	return (
		<>
			<div {...blockProps}>
				{isPreviewOpen ? (
					<div className="preview-mode">Preview mode</div>
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
