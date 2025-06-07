import request from "@/utils/request";
// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: "/user/info",
    method: "get",
  });
};
