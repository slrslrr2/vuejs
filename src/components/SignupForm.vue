<template>
  <form @submit.prevent="submiteForm">
    <!-- @submit.prevent 하면 submit후에 새로고침 막아준다 -->
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username" />
    </div>

    <div>
      <label for="password">password: </label>
      <input type="password" id="password" v-model="password" />
    </div>

    <div>
      <label for="nickname">nickname: </label>
      <input type="text" id="nickname" v-model="nickname" />
    </div>
    <button
      :disabled="!isUsernameValid || !password || !nickname"
      type="submit"
    >
      회원 가입
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',

      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submiteForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      this.logMessage = `${data.username}님이 가입되었습니다`;
      this.initForm;
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
