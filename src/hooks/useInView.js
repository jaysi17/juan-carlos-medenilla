import { useEffect, useRef, useState } from 'react'

// threshold 0 (not a ratio) so very tall sections — e.g. Projects on a phone,
// several times the viewport height — still reveal. A ratio threshold can never
// be reached once the element is taller than viewport / threshold.
export function useInView({
  threshold = 0,
  rootMargin = '0px 0px -10% 0px',
} = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}
