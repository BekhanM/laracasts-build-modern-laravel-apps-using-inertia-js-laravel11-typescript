import { createApp, h, type DefineComponent } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/vue3'
import { InertiaProgress } from '@inertiajs/progress'

createInertiaApp({
  resolve: (name) => {
    const pages: Record<string, DefineComponent> = import.meta.glob('./Pages/**/*.vue', {
      eager: true,
    })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })

    // Handle page titles globally
    app.use(plugin)
    app.component('InertiaLink', Link)

    // Set document title based on page props
    if (props.initialPage.props.title) {
      document.title = props.initialPage.props.title
    }

    app.mount(el)
  },
})

InertiaProgress.init({
  color: '#ef4444',
  showSpinner: true,
  delay: 0,
  includeCSS: true,
})
