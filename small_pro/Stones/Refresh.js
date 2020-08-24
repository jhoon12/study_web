const Refresh = {
  refresh: async () => {
    try {
      const res = await axios.get(
        `${CONSTANT.SERVER_ADRESS / user / refresh}`,
        {
          headers: {
            refresh_token: localStorage.getItem("refresh_token"),
          },
        }
      );
      if (res === 200) {
        localStorage.getItem(res.access_token);
      }
    } catch (e) {
      if (e.response.status === 403) console.log("로그인 안되어있음");
      else if (e.response.status === 500) console.log("재발급실패");
    }
  },
};
