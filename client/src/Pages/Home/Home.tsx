const Home = () => {
	const token = localStorage.getItem("token");
	const getFriendList = () => {
		fetch(`https://kapi.kakao.com/v1/api/talk/friends?`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					alert("성공");
					console.log(data);
				} else {
					alert("실패");
				}
			});
	};
	return (
		<div>
			<div>Home</div>
			<button onClick={getFriendList}>Friend List</button>
		</div>
	);
};

export default Home;
