import { __ } from "@wordpress/i18n";
import {
	RangeControl,
	ToggleControl,
	ColorPalette,
	HorizontalRule,
} from "@wordpress/components";

import metadata from "../block.json";

export const TopCurveSettings = ({ attributes, setAttributes }) => {
	const { enableTopCurve, width, height, flipX, flipY, color } = attributes;
	return enableTopCurve ? (
		<>
			<HorizontalRule />
			<RangeControl
				label={__("Width", metadata.textdomain)}
				min={100}
				max={300}
				value={width}
				onChange={(value) => setAttributes({ width: value })}
                __next40pxDefaultSize={true}
                __nextHasNoMarginBottom={true}
			/>
			<RangeControl
				label={__("Height", metadata.textdomain)}
				min={0}
				max={100}
				value={height}
                onChange={(value) => setAttributes({ height: value })}
                __next40pxDefaultSize={true}
                __nextHasNoMarginBottom={true}
			/>
			<ToggleControl
				label={__("Flip X", metadata.textdomain)}
				checked={flipX}
				onChange={(value) => setAttributes({ flipX: value })}
				__nextHasNoMarginBottom={true}
			/>
			<ToggleControl
				label={__("Flip Y", metadata.textdomain)}
				checked={flipY}
				onChange={(value) => setAttributes({ flipY: value })}
				__nextHasNoMarginBottom={true}
			/>
			<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
				<label>{__("Curve Color", metadata.textdomain)}</label>
				<ColorPalette
					value={color.background}
					onChange={(value) => setAttributes({ color: { background: value } })}
				/>
			</div>
		</>
	) : null;
};
