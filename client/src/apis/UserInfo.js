const token = localStorage.getItem("token");
export const getFriendList = () => {
	fetch(
		`https://kapi.kakao.com/v1/api/talk/friends?offset=0&limit=100&order=asc`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
		.then((res) => res.json())
		.then((data) => {
			if (data) {
				alert("성공");
				console.log(data);
				return data;
			} else {
				alert("실패");
			}
		});
};
