import {
	useBlockProps,
	useInnerBlocksProps,
	BlockControls,
	JustifyContentControl,
} from "@wordpress/block-editor";
import { parseValue } from "../../utils/parseValue";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;

	const blockGap = parseValue(attributes.style?.spacing?.blockGap ?? "10px");

	const blockProps = useBlockProps({
		style: {
			gap: blockGap,
			justifyContent: attributes.justifyContent,
		},
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: ["blockylicious/clicky-button", {}],
		allowedBlocks: ["blockylicious/clicky-button"],
	});

	/* Template para que haga render de ese bloque */
	return (
		<>
			<BlockControls>
				<JustifyContentControl
					allowedControls={["left", "center", "right"]}
					value={attributes.justifyContent}
					onChange={(value) => setAttributes({ justifyContent: value })}
				/>
			</BlockControls>
			<div {...innerBlocksProps} />
		</>
	);
}
