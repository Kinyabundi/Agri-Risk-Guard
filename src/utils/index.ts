export function getInitials(name: string) {
	const splitName = name.trim().split(" ");

	if (splitName.length === 1) {
		return splitName[0][0].toUpperCase();
	} else {
		return (splitName[0][0] + splitName[splitName.length - 1][0]).toUpperCase();
	}
}
