import { ref } from 'vue'
import axios from 'axios';

export default function useLogin() {
const BaseUrl = "https://preprod-ciprel-v2.futurafric.app/api/login";

const loading = ref(false);

  const login = async (data) => {
    loading.value = true;
    await axios.post(BaseUrl, data).then((res) => {
      console.log(res.data);
      data.value = {};
    }).catch((error) => {
      console.log(error);
    }).finally(() => loading.value = false);
  }

  return { login, loading }
}
