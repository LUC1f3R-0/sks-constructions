declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Bootstrap
declare module 'bootstrap/dist/js/bootstrap.bundle.min.js' {
  const bootstrap: any
  export default bootstrap
}

// AOS (Animate On Scroll)
declare module 'aos' {
  interface AOSOptions {
    offset?: number
    delay?: number
    duration?: number
    easing?: string
    once?: boolean
    mirror?: boolean
    anchorPlacement?: string
  }

  const AOS: {
    init: (options?: AOSOptions) => void
    refresh: () => void
    refreshHard: () => void
  }

  export default AOS
}

// CounterUp2
declare module 'counterup2' {
  const CounterUp: (el: Element, options?: any) => void
  export default CounterUp
}

// Slick Carousel (jQuery plugin)
declare module 'slick-carousel' {
  const slick: any
  export default slick
}

// Magnific Popup (jQuery plugin)
declare module 'magnific-popup' {
  const magnificPopup: any
  export default magnificPopup
}