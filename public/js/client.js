/**
 * Aokan client main module.
 * @author Una Ada <una@anarchy.website>
 * @version 2021.07.03
 */

const AJAX = ({ method, url, params, headers }) =>
  new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open(method, url);
    req.onload = _ =>
      ~~(req.status / 100) == 2
        ? resolve(req.response)
        : reject(({ status, statusText } = req));
    req.onerror = _ => reject(({ status, statusText } = req));
    headers &&
      Object.entries(headers).forEach(([key, value]) =>
        req.setRequestHeader(key, value)
      );
    req.send(
      params && typeof params == 'object'
        ? Object.entries(params)
            .map(
              ([key, value]) =>
                encodeURIComponent(key) + encodeURIComponent(value)
            )
            .join('&')
        : params
    );
  });

AJAX({ method: 'GET', url: 'http://localhost:3000/user/unasareyou' }).then(
  res => console.log(JSON.parse(res))
);

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
