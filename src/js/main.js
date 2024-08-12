import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../scss/style.scss'

import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

gsap.fromTo('.header__menu-banner', {
	backgroundImage: 'linear-gradient(to right, transparent, #030014 10%)',
}, {
	duration: 3,
	ease: 'expo.out',
	backgroundImage: 'linear-gradient(to right, transparent, #03001400 100%)',
})

gsap.fromTo('.welcome__label', {
	opacity: 0,
	backgroundImage: 'linear-gradient(90deg, #e59cff40 100%, #ba9cff40 150%, #9cb2ff40 300%)',
}, {
	opacity: 1,
	backgroundImage: 'linear-gradient(90deg, #e59cff40 0.01%, #ba9cff40 50%, #9cb2ff40 100%)',
	duration: 1,
	delay: 1
})

gsap.from('.star1', {
	opacity: 0,
	top: 15,
	delay: 1,
	duration: 1
})
gsap.from('.star2', {
	opacity: 0,
	top: 30,
	delay: 1,
	duration: 1
})
gsap.from('.star3', {
	opacity: 0,
	top: 25,
	delay: 1,
	duration: 1
})

gsap.fromTo('.welcome__label .label', {
	backgroundImage: 'linear-gradient(90deg, #fff, transparent)',

}, {
	backgroundImage: 'linear-gradient(90deg, #fff 100%, transparent)',
	duration: 2
})

gsap.fromTo('.welcome__title', {
	backgroundImage: 'linear-gradient(45deg, #fff 0%, transparent 10%)',
	opacity: 0

}, {
	backgroundImage: 'linear-gradient(45deg, #fff 0%, transparent 200%)',
	duration: 2,
	opacity: 1,
	delay: 2
})

gsap.fromTo('.welcome__subtitle', {
	opacity: 0

}, {
	duration: .5,
	opacity: 1,
	delay: 3
})

gsap.fromTo('.welcome__gradient', { opacity: 0 }, {
	marginTop: 85,
	duration: .5,
	opacity: 0.075,
	delay: 4,
	ease: 'bounce'
})

gsap.fromTo('.welcome__app', { opacity: 0, transform: 'scale(1.025)' }, {
	duration: 2,
	opacity: 1,
	transform: 'scale(1)',
	delay: 3.5,
})

gsap.fromTo('.welcome__app-gradient', { opacity: 1 }, {
	duration: 2,
	opacity: 0,
	delay: 4,
})



document.querySelectorAll('.feature') && document.querySelectorAll('.feature').forEach((feature, i) => {
	gsap.from(feature, {
		opacity: 0,
		delay: i * 0.2,
		duration: 1,
		scrollTrigger: feature
	})

	const leftBorder = feature.querySelector('.feature__left-border')

	const tl = gsap.timeline({ repeat: Infinity, repeatDelay: i * 0.2 })

	tl.to(leftBorder, { background: 'linear-gradient(to bottom, transparent 0%, #ffffff10 0%, transparent 100%)', duration: 2 })
	tl.to(leftBorder, { background: 'linear-gradient(to bottom, transparent 0%, #ffffff20 100%, transparent 100%)', duration: 2 })
	tl.to(leftBorder, { background: 'linear-gradient(to bottom, transparent 0%, #ffffff00 100%, transparent 100%)', duration: 2 })

})

/* 
, {
		background: 'linear-gradient(to bottom, rgba(#fff, 12%) 100%, transparent 100%)',
		scrollTrigger: '.feature'
	}
*/