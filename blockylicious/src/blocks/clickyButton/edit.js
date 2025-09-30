import { __ } from "@wordpress/i18n";
import metadata from "./block.json";

import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	PanelBody,
	SelectControl,
	HorizontalRule,
	ColorPalette,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;

	const {
		textColor = "#ffffff",
		backgroundColor = "#503AA8",
		hoverTextColor = "#ffffff",
		hoverColor = "#514BB1",
	} = attributes;

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

	const posts = useSelect(
		(select) => {
			const data = select("core").getEntityRecords(
				"postType",
				attributes?.postType,
				{
					per_page: -1,
				},
			);
			return data;
		},
		[attributes?.postType],
	);

	const blockProps = useBlockProps({
		className: "wp-block-blockylicious-clicky-button",
		style: {
			"--btn-bg": backgroundColor,
			"--btn-text": textColor,
			"--hover-bg": hoverColor,
			"--hover-text": hoverTextColor,
		},
	});

	console.log(blockProps);

	/* on split , on replace empty to avoid enter breaklines */
	return (
		<>
			<div {...blockProps}>
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
				<PanelBody title={__("Button Style", metadata.textdomain)}>
					<p>{__("Text Color", metadata.textdomain)}</p>
					<ColorPalette
						value={attributes.textColor}
						onChange={(value) => setAttributes({ textColor: value })}
					/>
					<p>{__("Background Color", metadata.textdomain)}</p>
					<ColorPalette
						value={attributes.backgroundColor}
						onChange={(value) => setAttributes({ backgroundColor: value })}
					/>
					<p>{__("Hover Text Color", metadata.textdomain)}</p>
					<ColorPalette
						value={attributes.hoverTextColor}
						onChange={(value) => setAttributes({ hoverTextColor: value })}
					/>
					<p>{__("Hover Background Color", metadata.textdomain)}</p>
					<ColorPalette
						value={attributes.hoverColor}
						onChange={(value) => setAttributes({ hoverBackgroundColor: value })}
					/>
				</PanelBody>
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
					{attributes.postType && (
						<>
							<HorizontalRule />
							<SelectControl
								label={__(`Linked ${attributes.postType}`, metadata.textdomain)}
								value={attributes.linkedPost}
								onChange={(value) =>
									setAttributes({ linkedPost: value ? parseInt(value) : null })
								}
								options={[
									{
										label: __(
											`Select a ${attributes.postType} to link to`,
											metadata.textdomain,
										),
										value: "",
									},
									...(posts || []).map((post) => ({
										label: post.title.rendered,
										value: post.id,
									})),
								]}
							/>
						</>
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);
}
