import { useImage } from "../hooks/useImage";

export const ImageThumbnail = (props) => {
	const { imageId, imageHeight = "250px", ...rest } = props;

	//hook
	const image = useImage(imageId);

	return image?.source_url ? (
		<img
			src={image.source_url}
			alt={image.alt}
			style={{
				width: "100%",
				height: imageHeight,
				objectFit: "cover",
				objectPosition: "center",
			}}
			{...rest}
		/>
	) : null;
};
