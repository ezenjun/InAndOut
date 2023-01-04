import { useEffect, useState } from "react";
import { getFriendList } from "../../apis/UserInfo";
const Home = () => {
	return (
		<div>
			<div>Home</div>
			<button onClick={getFriendList}>Friend List</button>
		</div>
	);
};

export default Home;
