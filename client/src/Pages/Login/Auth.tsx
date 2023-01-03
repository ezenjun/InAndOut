import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { REST_API_KEY, REDIRECT_URI } from "./OAuth";
const Auth = () => {
	const location = useLocation();
	const code = new URL(window.location.href).searchParams.get("code");
	const navigate = useNavigate();

	/*
        Send code to Backend
        Get Access Token
        Save Access Token to Local Storage
    */

	/**
	 * Get Token in Frontend
	 */
	const getKakaoToken = () => {
		fetch(`https://kauth.kakao.com/oauth/token`, {
			method: "POST",
			headers: {
				"Content-type": "application/x-www-form-urlencoded",
			},
			body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.access_token) {
					localStorage.setItem("token", data.access_token);
					alert("로그인 성공");
					navigate("/home");
				} else {
					alert("로그인 실패");
					navigate("/login");
				}
			});
	};
	useEffect(() => {
		if (!location.search) return;
		getKakaoToken();
	}, []);
	return <div></div>;
};

export default Auth;
