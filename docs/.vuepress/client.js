import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue'

export default defineClientConfig({
  enhance: ({ app }) => {
    console.log(app.pages);
  },
  layouts: {
    Layout,
  },
})