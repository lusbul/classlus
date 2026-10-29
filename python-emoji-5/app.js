
const L=window.LESSON,$=s=>document.querySelector(s),storage='python-emoji-steps-'+L.id;
let state={};try{state=JSON.parse(localStorage.getItem(storage)||'{}')}catch(e){}
const code=$('#code');code.value=state.code??L.code;
$('#student').value=state.student||'';$('#reflection').value=state.reflection||'';
function save(){state.code=code.value;state.student=$('#student').value;state.reflection=$('#reflection').value;try{localStorage.setItem(storage,JSON.stringify(state))}catch(e){}}
[code,$('#student'),$('#reflection')].forEach(el=>el.addEventListener('input',save));
$('#copy').onclick=async()=>{try{await navigator.clipboard.writeText(code.value);$('#status').textContent='Код скопійовано'}catch(e){code.select();$('#status').textContent='Код виділено для копіювання'}};
$('#verify').onclick=()=>{code.value=L.code;save();$('#modeHelp').textContent='Готовий приклад завантажено. Зараз побачиш результат.';$('#run').click()};
$('#try').onclick=()=>{code.value=L.starter;save();$('#modeHelp').textContent='Тепер це твоя програма. Зміни текст, числа чи символи та натисни «Запустити».';$('#output').textContent='Зміни код і натисни «Запустити».';$('#turtleCanvas').hidden=true;code.focus()};
$('#check').onclick=()=>{const x=$('input[name=quiz]:checked');if(!x){$('#feedback').textContent='Спочатку обери відповідь';return}state.answer=+x.value;state.correct=state.answer===L.correct;save();$('#feedback').textContent=state.correct?'🌟 Правильно!':'🔎 Спробуй ще раз, повернись до пояснення.'};
if(state.answer!==undefined){const x=$('input[name=quiz][value="'+state.answer+'"]');if(x)x.checked=true}
let py=null;async function load(){if(py)return py;$('#status').textContent='⏳ Завантажуємо Python…';if(!window.loadPyodide)await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js';s.onload=resolve;s.onerror=reject;document.head.appendChild(s)});py=await loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/'});return py}
function turtlePreview(src){
const c=$('#turtleCanvas');c.hidden=false;const g=c.getContext('2d');g.clearRect(0,0,c.width,c.height);
let x=260,y=175,angle=0,color='royalblue',width=3;
const commands=[],lines=src.split('\n');
for(let i=0;i<lines.length;i++){const line=lines[i].trim(),loop=line.match(/^for\s+\w+\s+in\s+range\((\d+)\):/);
if(loop){const block=[];while(i+1<lines.length&&/^\s+/.test(lines[i+1]))block.push(lines[++i].trim());for(let j=0;j<Math.min(+loop[1],100);j++)commands.push(...block)}else commands.push(line)}
for(const line of commands){let m;if(m=line.match(/\.color\(['"]([^'"]+)['"]\)/))color=m[1];if(m=line.match(/\.pensize\((\d+)\)/))width=+m[1];
if(m=line.match(/\.(right|left|forward|backward)\((-?[\d.]+)\)/)){const n=+m[2];if(m[1]==='right')angle+=n;else if(m[1]==='left')angle-=n;else{const d=n*(m[1]==='backward'?-1:1),nx=x+Math.cos(angle*Math.PI/180)*d,ny=y+Math.sin(angle*Math.PI/180)*d;g.beginPath();g.strokeStyle=color;g.lineWidth=width;g.moveTo(x,y);g.lineTo(nx,ny);g.stroke();x=nx;y=ny}}}
$('#output').textContent='🐢 Навчальний переглядач Turtle показав базові команди цього кроку. Для повної бібліотеки Turtle скористайся відповідним середовищем.';
}
$('#run').onclick=async()=>{save();$('#run').disabled=true;$('#status').textContent='';try{
if(L.id>=11){turtlePreview(code.value);$('#status').textContent='Ескіз готовий';return}
const p=await load(),out=[];p.setStdout({batched:s=>out.push(s)});p.setStderr({batched:s=>out.push(s)});
p.globals.set('ask_student',s=>window.prompt(s||'Введи відповідь:')??'');
await p.runPythonAsync('import builtins\nbuiltins.input = ask_student');
await p.runPythonAsync(code.value);
$('#output').textContent=out.join('\n')||'Програму виконано без текстового виведення.';
$('#status').textContent='✅ Готово';
}catch(e){$('#output').textContent=String(e);$('#status').textContent='🔎 Прочитай повідомлення про помилку.'}finally{$('#run').disabled=false}};
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
$('#report').onclick=()=>{save();const w=window.open('','_blank');if(!w){alert('Дозволь відкривати вікно для звіту.');return}
w.document.write('<!doctype html><html lang="uk"><meta charset="utf-8"><title>Звіт</title><style>body{font:16px Arial;max-width:760px;margin:35px auto;color:#203050}pre{white-space:pre-wrap;background:#eef3ff;padding:15px}</style><h1>Python Emoji — крок '+L.id+'</h1><h2>'+esc(L.title)+'</h2><p>Автор: '+esc(state.student)+'</p><h3>Мій код</h3><pre>'+esc(state.code)+'</pre><h3>Перевір себе</h3><p>'+esc(state.answer===undefined?'Ще не виконано':L.options[state.answer])+'</p><h3>Мій висновок</h3><p>'+esc(state.reflection)+'</p><script>window.onload=()=>window.print()<\/script></html>');w.document.close()};
