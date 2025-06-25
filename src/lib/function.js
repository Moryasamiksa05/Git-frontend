export const handleLoginWithGithub = () => {
	window.open(`${import.meta.env.VITE_API_BASE_URL}/auth/github`, "_self");
};
