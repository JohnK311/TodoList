import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import components from '@/components/UI';


const app = createApp(App)
//регистрация UI компонентов
components.forEach(component => {
  app.component(component.name, component)
})

app.use(store).use(router).mount('#app')
