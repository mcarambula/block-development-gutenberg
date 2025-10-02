import { useSelect } from "@wordpress/data";

export const useImage = (imageId) => {
	const image = useSelect(
		(select) => {
			return select("core").getEntityRecord("postType", "attachment", imageId);
		},
		[imageId],
	);
	return image;
};
