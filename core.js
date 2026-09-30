/* VI Core v61 — dependency-free global controls */
(function(){
 const KEY='ava_internal_theme_v1';
 function apply(theme){const dark=theme==='dark';document.documentElement.dataset.theme=dark?'dark':'light';document.body.classList.toggle('dark-theme',dark);const b=document.getElementById('themeToggle');if(b){b.textContent=dark?'☀':'☾';b.title=dark?'Switch to light theme':'Switch to dark theme';b.setAttribute('aria-label',b.title);b.setAttribute('aria-pressed',String(dark))}const m=document.getElementById('themeColorMeta');if(m)m.content=dark?'#071018':'#ffffff'}
 function init(){let t='light';try{t=localStorage.getItem(KEY)||'light'}catch{}apply(t==='dark'?'dark':'light');document.getElementById('themeToggle')?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const n=document.body.classList.contains('dark-theme')?'light':'dark';try{localStorage.setItem(KEY,n)}catch{}apply(n)},{capture:true});document.getElementById('avaHomeLogo')?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();window.dispatchEvent(new CustomEvent('vi:navigate',{detail:'home'}))},{capture:true});document.getElementById('backupBtn')?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();window.dispatchEvent(new CustomEvent('vi:navigate',{detail:'backup'}))},{capture:true})}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();

/* VI v61 — single global navigation bridge */
(function(){
  function closeMore(){
    const m=document.getElementById('moreMenu');
    const b=document.getElementById('moreNav');
    if(m){m.classList.remove('open');m.setAttribute('aria-hidden','true');}
    if(b)b.setAttribute('aria-expanded','false');
  }
  function toggleMore(){
    const m=document.getElementById('moreMenu');
    const b=document.getElementById('moreNav');
    if(!m)return;
    const open=!m.classList.contains('open');
    m.classList.toggle('open',open);
    m.setAttribute('aria-hidden',String(!open));
    if(b)b.setAttribute('aria-expanded',String(open));
  }
  function wire(){
    document.addEventListener('click',function(e){
      const more=e.target.closest('#moreNav');
      if(more){e.preventDefault();e.stopPropagation();toggleMore();return;}
      const target=e.target.closest('[data-page]');
      if(target){
        const id=target.dataset.page;
        if(id){e.preventDefault();e.stopPropagation();closeMore();window.dispatchEvent(new CustomEvent('vi:navigate',{detail:id}));}
        return;
      }
      const menu=document.getElementById('moreMenu');
      if(menu && menu.classList.contains('open') && !e.target.closest('#moreMenu'))closeMore();
    },{capture:true});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMore();},{capture:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wire,{once:true});else wire();
})();
