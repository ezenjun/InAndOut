import React from "react";
import { KAKAO_AUTH_URL } from "./OAuth";

const Login = () => {
	return (
		<div>
			<a href={KAKAO_AUTH_URL}>카카오 로그인</a>
		</div>
	);
};

export default Login;
