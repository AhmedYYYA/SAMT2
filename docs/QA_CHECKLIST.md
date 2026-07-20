# QA Checklist

## Functional

- [ ] Arabic loads in RTL by default
- [ ] Language switch changes all visible programme content
- [ ] Mobile navigation opens, closes and supports Escape
- [ ] All internal navigation links scroll smoothly
- [ ] Executive and approval modals open and close correctly
- [ ] Station tabs, previous and next controls work
- [ ] Station changes follow the pinned scroll sequence
- [ ] Animated SVGs load from `assets/stations/`

## Animation

- [ ] GSAP Core loads
- [ ] ScrollTrigger loads and registers
- [ ] Lenis initializes and updates ScrollTrigger
- [ ] Journey horizontal motion completes without clipping
- [ ] Page progress reaches 100%
- [ ] Reduced-motion preference disables non-essential movement

## Responsive

- [ ] 1440 × 900
- [ ] 1366 × 768
- [ ] 1024 × 768
- [ ] 768 × 1024
- [ ] 390 × 844

## Content and readability

- [ ] Body copy is readable at 100% browser zoom
- [ ] Modal text remains inside the viewport
- [ ] Arabic line-height is clear
- [ ] English headings do not overflow
- [ ] No information panel requires horizontal scrolling
