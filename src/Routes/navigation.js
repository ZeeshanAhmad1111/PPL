import { Navigate } from "react-router-dom";

const CustomRoute = ({
	isLoggedIn,
	publicRoute = <Navigate to="/" />,
	privateRoute = <Navigate to="/" />,
	commonRoute,
}) => {
	const checkIsLoggedIn = () => {
		return isLoggedIn ? privateRoute : publicRoute;
	};

	const checkCommonRoute = () => {
		return commonRoute ? commonRoute : checkIsLoggedIn();
	};

	return checkCommonRoute();
};

export { CustomRoute };