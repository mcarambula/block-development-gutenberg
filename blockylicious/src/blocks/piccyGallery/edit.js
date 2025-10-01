import { useBlockProps, BlockControls } from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton, Icon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import metadata from "./block.json";

import "./editor.scss";

export default function Edit() {
	const blockProps = useBlockProps();
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);

	return (
		<>
			<div {...blockProps}>
				<p>Piccy Gallery</p>
			</div>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={<Icon icon={ !isPreviewOpen ? "welcome-view-site" : "edit" } />}
						label={__( isPreviewOpen ? "Edit Gallery" : "Preview Gallery", metadata.textdomain)}
						onClick={() => setIsPreviewOpen(!isPreviewOpen)}
					/>
				</ToolbarGroup>
			</BlockControls>
		</>
	);
}
