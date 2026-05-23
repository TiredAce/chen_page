import { ref } from 'vue'

const OBSERVER_OPTIONS = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
}

export function useRevealAnimations() {
  const aboutCardsRef = ref(null)
  const doingLeftListRef = ref(null)
  const doingRightListRef = ref(null)
  const knowledgeGridRef = ref(null)
  const contactGridRef = ref(null)
  const qrCodeContainerRef = ref(null)
  const observers = []

  const observeOnce = (targetRef, visibleClass, interactiveClass, interactiveDelay = 0) => {
    if (!targetRef.value) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        entry.target.classList.add(visibleClass)
        if (interactiveClass) {
          window.setTimeout(() => {
            entry.target.classList.add(interactiveClass)
          }, interactiveDelay)
        }
        observer.unobserve(entry.target)
      })
    }, OBSERVER_OPTIONS)

    observer.observe(targetRef.value)
    observers.push(observer)
  }

  const observeSectionHeaders = () => {
    const sections = document.querySelectorAll('.section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const sectionHeader = entry.target.querySelector('.section-header')
          sectionHeader?.classList.add('header-visible')
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    sections.forEach((section) => observer.observe(section))
    observers.push(observer)
  }

  const setupRevealAnimations = () => {
    observeOnce(aboutCardsRef, 'cards-visible', 'cards-interactive', 1200)
    observeOnce(doingLeftListRef, 'list-visible')
    observeOnce(doingRightListRef, 'list-visible')
    observeSectionHeaders()
    observeOnce(knowledgeGridRef, 'grid-visible')
    observeOnce(contactGridRef, 'grid-visible')
    observeOnce(qrCodeContainerRef, 'container-visible')
  }

  const cleanupRevealAnimations = () => {
    observers.splice(0).forEach((observer) => observer.disconnect())
  }

  return {
    aboutCardsRef,
    doingLeftListRef,
    doingRightListRef,
    knowledgeGridRef,
    contactGridRef,
    qrCodeContainerRef,
    setupRevealAnimations,
    cleanupRevealAnimations
  }
}
