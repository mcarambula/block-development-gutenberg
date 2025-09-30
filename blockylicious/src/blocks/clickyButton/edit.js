import { __ } from "@wordpress/i18n";
import metadata from "./block.json";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	HorizontalRule,
	Dropdown,
	Button,
	ColorIndicator,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";

function CompactColor({ label, value, onChange }) {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: 8,
				justifyContent: "space-between",
			}}
		>
			<span className="components-base-control__label">{label}</span>
			<Dropdown
				popoverProps={{
					placement: "bottom-start",
					flip: true,
					shift: true,
					boundary: "viewport",
				}}
				renderToggle={({ isOpen, onToggle }) => (
					<Button
						onClick={onToggle}
						aria-expanded={isOpen}
						variant="secondary"
						size="small"
					>
						<ColorIndicator colorValue={value} />
					</Button>
				)}
				renderContent={() => (
					<div style={{ padding: 8 }}>
						<ColorPalette value={value} onChange={(v) => onChange(v)} />
					</div>
				)}
			/>
		</div>
	);
}

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const {
		labelText,
		textColor = "#ffffff",
		backgroundColor = "#503AA8",
		hoverTextColor = "#ffffff",
		hoverColor = "#412a9d",
		postType,
		linkedPost,
	} = attributes;

	const postTypes = useSelect((select) => {
		const data = select("core").getEntityRecords("root", "postType", {
			per_page: -1,
		});
		return data?.filter(
			(pt) => pt.visibility?.show_ui && pt.visibility?.show_in_nav_menus,
		);
	}, []);

	const posts = useSelect(
		(select) => {
			if (!postType) return [];
			return select("core").getEntityRecords("postType", postType, {
				per_page: -1,
			});
		},
		[postType],
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

	return (
		<>
			<div {...blockProps}>
				<RichText
					value={labelText}
					onChange={(value) => setAttributes({ labelText: value })}
					placeholder={__("Button Label", metadata.textdomain)}
					allowedFormats={[]}
					multiline={false}
					splitting={() => {}}
					onReplace={() => {}}
				/>
			</div>

			<InspectorControls>
				<PanelBody
					title={__("Button Style", metadata.textdomain)}
					initialOpen={true}
				>
					{/* fila compacta */}
					<div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
						<CompactColor
							label={__("Text", metadata.textdomain)}
							value={textColor}
							onChange={(v) => setAttributes({ textColor: v || "#ffffff" })}
						/>
						<CompactColor
							label={__("Background", metadata.textdomain)}
							value={backgroundColor}
							onChange={(v) =>
								setAttributes({ backgroundColor: v || "#503AA8" })
							}
						/>
						<CompactColor
							label={__("Hover Text", metadata.textdomain)}
							value={hoverTextColor}
							onChange={(v) =>
								setAttributes({ hoverTextColor: v || "#ffffff" })
							}
						/>
						<CompactColor
							label={__("Hover Background", metadata.textdomain)}
							value={hoverColor}
							onChange={(v) => setAttributes({ hoverColor: v || "#514BB1" })}
						/>
					</div>
				</PanelBody>

				<PanelBody title={__("Destination", metadata.textdomain)}>
					<SelectControl
						label={__("Type", metadata.textdomain)}
						value={postType}
						onChange={(value) => setAttributes({ postType: value })}
						options={[
							{
								label: __("Select a post type", metadata.textdomain),
								value: "",
							},
							...(postTypes || []).map((pt) => ({
								label: pt.labels?.singular_name,
								value: pt.slug,
							})),
						]}
					/>
					{postType && (
						<>
							<HorizontalRule />
							<SelectControl
								label={__(`Linked ${postType}`, metadata.textdomain)}
								value={linkedPost}
								onChange={(value) =>
									setAttributes({ linkedPost: value ? parseInt(value) : null })
								}
								options={[
									{
										label: __(
											`Select a ${postType} to link to`,
											metadata.textdomain,
										),
										value: "",
									},
									...(posts || []).map((p) => ({
										label: p.title?.rendered,
										value: p.id,
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
