import axios from 'axios';
import {apiUrls} from '../../apiUrls/apiUrls';

export const fetchHotQuestionsFromTag = async (tag: any, page: number) => {
  try {
    const response = await axios.get(
      `${apiUrls.hotQuestionsUrl}&tagged=${tag}&page=${page}`,
    );
    return response?.data;
  } catch (e: any) {
    console.log(e.response);
    return e.response;
  }
};
