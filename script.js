// Replace with your verified business email address before publishing.
const BUSINESS_EMAIL = 'Aragonhandyworks@gmail.com';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
toggle.addEventListener('click', () => {const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰';});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#estimate-form').addEventListener('submit',e=>{
 e.preventDefault();const form=e.currentTarget; if(!form.reportValidity())return;
 const data=new FormData(form);const lines=['New website estimate inquiry','',...['name','phone','email','type','location','details'].map(k=>`${k.charAt(0).toUpperCase()+k.slice(1)}: ${data.get(k)}`)];
 const subject=encodeURIComponent('Estimate Request - Aragon Handyworks LLC');const body=encodeURIComponent(lines.join('\n'));
 if(!BUSINESS_EMAIL){document.querySelector('#form-status').textContent='Website setup needed: add your verified business email in script.js to activate this form.';return;}
 window.location.href=`mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
 document.querySelector('#form-status').textContent='Your email app should open with the request ready to send.';
});
