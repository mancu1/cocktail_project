import type { Directive } from 'vue'
import { watchEffect } from 'vue'

// image lazy loading
export const lazyLoading: Directive = {
  mounted(el, binding) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.src = binding.value
          observer.unobserve(el)
        }
      })
    })
    observer.observe(el)
    watchEffect(() => {
      if (binding.value) {
        el.src = binding.value
      }
    })
  },
  updated(el, binding) {
    // Update the src when the bound value changes
    if (binding.value !== binding.oldValue) {
      el.src = binding.value
    }
  }
}
