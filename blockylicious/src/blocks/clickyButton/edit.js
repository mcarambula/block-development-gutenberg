import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { className, ...blockProps } = useBlockProps();

	/* on split , on replace empty to avoid enter breaklines */
	return (
		<div className={className} {...blockProps}>
			<RichText
				value={attributes.labelText}
				onChange={(value) => setAttributes({ labelText: value })}
				placeholder="Button Label"
				allowedFormats={[]}
				multiline={false}
				onSplit={() => {}}
				onReplace={() => {}}
			/>
		</div>
	);
}
