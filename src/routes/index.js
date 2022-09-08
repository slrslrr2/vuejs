import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', // URL에 #을 지워준다.
  routes: [
    {
      path: '',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'), //필요할 때마다 페이지를 불러온다(즉, 초기 페이지 로딩 속도 줄여준다. 단, 한번불러오면 다음에 그대로 가져다 쓴다)
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '*', //위쪽을 제외한 나머지 url에 대해 반응하겠다.
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
