import { __ } from "@wordpress/i18n";
import { RangeControl, ToggleControl, ColorPalette, HorizontalRule } from "@wordpress/components";

import metadata from "../block.json";

export const BottomCurveSettings = ({ attributes, setAttributes }) => {
    const { enableBottomCurve, bottomWidth, bottomHeight, bottomFlipX, bottomFlipY, bottomColor } = attributes;
    return (
        enableBottomCurve ? (
            <>
                <HorizontalRule />
                <RangeControl
                    label={__("Width", metadata.textdomain)}
                    min={100}
                    max={300}
                    value={bottomWidth}
                    onChange={(value) => setAttributes({ bottomWidth: value })}
                />
                <RangeControl
                    label={__("Height", metadata.textdomain)}
                    min={0}
                    max={100}
                    value={bottomHeight}
                    onChange={(value) => setAttributes({ bottomHeight: value })}
                />
                <ToggleControl
                    label={__("Flip X", metadata.textdomain)}
                    checked={bottomFlipX}
                    onChange={(value) => setAttributes({ bottomFlipX: value })}
                />
                <ToggleControl
                    label={__("Flip Y", metadata.textdomain)}
                    checked={bottomFlipY}
                    onChange={(value) => setAttributes({ bottomFlipY: value })}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <label>{__("Curve Color", metadata.textdomain)}</label>
                    <ColorPalette
                        value={bottomColor.background}
                        onChange={(value) => setAttributes({ bottomColor: { background: value } })}
                    />
                </div>
            </>
        ) : null
    )
};