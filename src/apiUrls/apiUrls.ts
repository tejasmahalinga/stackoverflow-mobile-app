const pageSize = 10;
const version = 2.3;

export const apiUrls = {
  hotQuestionsUrl: `https://api.stackexchange.com/${version}/questions?&pagesize=${pageSize}&order=desc&sort=hot&site=stackoverflow`,
};
