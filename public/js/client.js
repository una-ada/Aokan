/**
 * Aokan client main module.
 * @author Una Ada <una@anarchy.website>
 * @version 2021.07.03
 */

document.addEventListener('click', e =>
  (res =>
    res &&
    Object.assign(res.style, {
      transition: '',
      opacity: 1,
      webkitClipPath: `circle(0px at ${e.offsetX}px ${e.offsetY}px)`,
    }) &&
    requestAnimationFrame(_ =>
      Object.assign(res.style, {
        transitionDuration: '1s',
        opacity: 0,
        webkitClipPath: `circle(${(({ width, height }) =>
          (width ** 2 + height ** 2) ** 0.5)(
          res.getBoundingClientRect()
        )}px at ${e.offsetX}px ${e.offsetY}px)`,
      })
    ))(
    e.path
      .find(el => el.classList && el.classList.contains('text-field'))
      ?.querySelector('.text-field__responder')
  )
);
