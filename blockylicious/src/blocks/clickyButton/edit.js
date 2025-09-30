import { __ } from "@wordpress/i18n";
import metadata from "./block.json";

import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, SelectControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

export default function Edit(props) {
	/* Getting the post and pages. */
	const postTypes = useSelect((select) => {
		const data = select("core").getEntityRecords("root", "postType", {
			per_page: -1,
		});
		return data?.filter(
			(postType) =>
				postType.visibility.show_ui && postType.visibility.show_in_nav_menus,
		);
	});
	const { attributes, setAttributes } = props;
	const { className, ...blockProps } = useBlockProps();

	/* on split , on replace empty to avoid enter breaklines */
	return (
		<>
			<div className={className} {...blockProps}>
				<RichText
					value={attributes.labelText}
					onChange={(value) => setAttributes({ labelText: value })}
					placeholder={__("Button Label", metadata.textdomain)}
					allowedFormats={[]}
					multiline={false}
					splitting={() => {}}
					onReplace={() => {}}
				/>
			</div>
			<InspectorControls>
				<PanelBody title={__("Destination", metadata.textdomain)}>
					<SelectControl
						label={__("Type", metadata.textdomain)}
						value={attributes.postType}
						onChange={(value) => setAttributes({ postType: value })}
						options={[
							{
								label: __("Select a post type", metadata.textdomain),
								value: "",
							},
							...(postTypes || []).map((postType) => ({
								label: postType.labels.singular_name,
								value: postType.slug,
							})),
						]}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
