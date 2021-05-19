gsap.registerPlugin(ScrollTrigger)

const slideLeft = (object) => {
  gsap.fromTo(
    object,
    {
      x: "-100vw",
    },
    {
      scrollTrigger: {
        trigger: "#catalog",
        toggleActions: "play none play reverse",
        start: "top center",
      },
      x: 0,
      duration: 2,
    }
  )
}

const slideRight = (object) => {
  gsap.fromTo(
    object,
    {
      x: "100vw",
    },
    {
      scrollTrigger: {
        trigger: "#catalog",
        toggleActions: "play none play reverse",
        start: "top center",
      },
      x: 0,
      duration: 2,
    }
  )
}

const fadeIn = (object, scroll = undefined) => {
  gsap.fromTo(
    object,
    {
      opacity: 0,
    },
    {
      scrollTrigger: scroll,
      opacity: 1,
      duration: 2,
    }
  )
}

slideLeft(".product_showcase")
slideRight(".categories")
fadeIn(".add_banner__image", {
  trigger: ".add_banner",
  toggleActions: "play none play reverse",
  start: "top center",
})
fadeIn(".header_banner")
