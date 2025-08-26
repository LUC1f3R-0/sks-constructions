declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'bootstrap/dist/js/bootstrap.bundle.min.js' {
  const bootstrap: any
  export default bootstrap
}

declare module 'aos' {
  const AOS: {
    init: (options?: any) => void
    refresh: () => void
    refreshHard: () => void
  }
  export default AOS
}



declare module 'counterup2' {
  const CounterUp: any
  export default CounterUp
}

declare module 'slick-carousel' {
  const slick: any
  export default slick
}

declare module 'magnific-popup' {
  const magnificPopup: any
  export default magnificPopup
}
