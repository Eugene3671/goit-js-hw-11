import{a as u,S as p,i as d}from"./assets/vendor-w2JwYdZo.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function f(n){return u.get("https://pixabay.com/api/",{params:{key:"25786434-348adb767e319176b4ad356ea",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{const e=r.data.hits;return e.length===0?Promise.reject():e}).catch(r=>Promise.reject(r))}let i=new p(".gallery a");i.on("show.simplelightbox",function(){});const l=document.querySelector(".gallery"),c=document.querySelector(".loader-container");function m(n){const r=n.map(e=>`<li class="photo-card">
          <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" />
          <div class="info">
            <p><b>Likes</b> <span>${e.likes}</span></p>
            <p><b>Views</b> <span>${e.views}</span></p>
            <p><b>Comments</b> <span>${e.comments}</span></p>
            <p><b>Downloads</b> <span>${e.downloads}</span></p>
          </div>
          </a>
        </li>`).join(`
`);l.innerHTML=r,i.refresh()}function h(){l.innerHTML=""}function y(){c.classList.add("loader")}function g(){c.classList.remove("loader")}const b=document.querySelector(".form");b.addEventListener("submit",n=>{n.preventDefault();const r=n.target.elements.searchText.value.trim();h(),y(),f(r).then(e=>{m(e)}).catch(e=>{d.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>g())});
//# sourceMappingURL=index.js.map
