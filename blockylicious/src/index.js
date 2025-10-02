import {
	registerFormatType,
	applyFormat,
	removeFormat,
} from "@wordpress/rich-text";
import { __ } from "@wordpress/i18n";
import { RichTextToolbarButton, ColorPalette } from "@wordpress/block-editor";
import { Popover, PanelBody } from "@wordpress/components";
import { useState } from "@wordpress/element";
import lowHightlighIcon from "./assets/low-highlight.svg";
import lowHightlighIconActive from "./assets/low-highlight-active.svg";

import "./style.scss";

registerFormatType("blockylicious/low-highlight", {
	title: __("Low Highlight", "blockylicious"),
	tagName: "span",
	className: "blockylicious-low-highlight",
	edit: ({ onChange, value, contentRef, isActive }) => {
		const [showColors, setShowColors] = useState(false);
		const lowHighlightColor = value.activeFormats?.find(
			(format) => format.type === "blockylicious/low-highlight",
		);
		const attributes = {
			...(lowHighlightColor?.attributes || {}),
			...(lowHighlightColor?.unregisteredAttributes || {}),
		};
		return (
			<>
				<RichTextToolbarButton
					icon={
						<img
							height={24}
							width={24}
							src={isActive ? lowHightlighIconActive : lowHightlighIcon}
						/>
					}
					title={__("Low Highlight", "blockylicious")}
					onClick={() => {
						setShowColors(true);
					}}
				/>
				{!!showColors && (
					<Popover
						onClose={() => setShowColors(false)}
						anchor={contentRef?.current}
					>
						<PanelBody>
							<ColorPalette
								value={attributes?.["data-color"]}
								onChange={(newValue) => {
									if (newValue) {
										onChange(
											applyFormat(value, {
												type: "blockylicious/low-highlight",
												attributes: {
													"data-color": newValue,
													style: `background-image: linear-gradient(to right, ${newValue} 0%, ${newValue} 100%);`,
												},
											}),
										);
									} else {
										onChange(
											removeFormat(value, "blockylicious/low-highlight"),
										);
									}
								}}
							/>
						</PanelBody>
					</Popover>
				)}
			</>
		);
	},
});
