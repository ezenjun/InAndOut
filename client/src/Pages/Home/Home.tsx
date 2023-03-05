import { useEffect, useState } from "react";
import { getFriendList } from "../../apis/UserInfo";
const Home = () => {
	return (
		<div>
			<div>Home</div>
			<div>HOME 이야야야양ㅎㅎㅎ</div>
			<button onClick={getFriendList}>Friend List</button>
		</div>
	);
};

export default Home;
