import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base:'/ichat/',
  publicPath:'/ichat/',
  dva: {
    immer: true,
    hmr: true,
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
