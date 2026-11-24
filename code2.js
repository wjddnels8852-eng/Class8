  function spear(px, py, ang, len, w, a){ x.save(); x.translate(px, py); x.rotate(ang); x.globalAlpha = a == null ? 1 : a; x.shadowColor = '#7FD8FF'; x.shadowBlur = 16;
    x.fillStyle = lgrad(0, -w, 0, w, [[0, '#F0FCFF'], [0.5, '#8FD6FF'], [1, '#2E78BE']]); x.beginPath(); x.moveTo(len, 0); x.lineTo(len*0.2, -w); x.lineTo(0, -w*0.45); x.lineTo(-len*0.18, 0); x.lineTo(0, w*0.45); x.lineTo(len*0.2, w); x.closePath(); x.fill();
    x.shadowBlur = 0; x.strokeStyle = 'rgba(255,255,255,.9)'; x.lineWidth = 1.6; x.beginPath(); x.moveTo(len, 0); x.lineTo(-len*0.12, 0); x.stroke();
    x.globalAlpha *= 0.35; x.fillStyle = '#BFE8FF'; x.fillRect(-len*1.6, -w*0.25, len*1.45, w*0.5); x.restore(); }
  function shard(px, py, r, rot, a, seed, frozen){ rs(seed); const n = 3 + Math.floor(R()*2); x.save(); x.translate(px, py); x.rotate(rot); x.globalAlpha = a; x.beginPath();
    for(let i=0;i<n;i++){ const an = i/n*Math.PI*2 + R()*0.8, rr = r*(0.5 + R()*0.8); i ? x.lineTo(Math.cos(an)*rr, Math.sin(an)*rr) : x.moveTo(Math.cos(an)*rr, Math.sin(an)*rr); } x.closePath();
    x.fillStyle = frozen ? 'rgba(190,235,255,.55)' : 'rgba(220,240,255,.3)'; if(frozen){ x.shadowColor = '#8FDCFF'; x.shadowBlur = 12; } x.fill(); x.shadowBlur = 0; x.strokeStyle = 'rgba(255,255,255,.95)'; x.lineWidth = 1.6; x.stroke(); x.restore(); }
  function erase(cx, cy, rw, rh, k, t, seed){ if(k <= 0) return; k = Math.min(k, 1.4);   // 소거: 보라·검정 픽셀로 부서져 사라져요
    x.save(); x.globalAlpha = Math.min(1, k); x.fillStyle = rgrad(cx, cy, 0, Math.max(2, Math.max(rw, rh)*0.55*Math.min(1, k)), [[0, 'rgba(4,0,10,1)'], [0.7, 'rgba(18,0,36,.88)'], [1, 'rgba(40,0,70,0)']]); x.fillRect(cx - rw, cy - rh, rw*2, rh*2); x.restore();
    rs(seed); x.save(); for(let i=0;i<300;i++){ const px = cx + (R() - 0.5)*rw*1.3, py = cy + (R() - 0.5)*rh*1.3, th = R(), s = 5 + R()*15, pr = R(); if(th < k){ const up = (k - th)*140;
      x.globalAlpha = Math.max(0, 1 - (k - th)*1.8); x.fillStyle = pr < 0.3 ? '#B57CFF' : pr < 0.38 ? '#FFFFFF' : '#0A0612'; x.fillRect(px + Math.sin(t*3 + i)*5, py - up, s, s); } } x.restore(); }
  function breath(px, py, t, a){ x.save(); for(let i=0;i<6;i++){ const ph = (t*0.6 + i/6) % 1; x.globalAlpha = a*0.3*Math.sin(ph*Math.PI); x.fillStyle = '#FFFFFF'; x.beginPath(); x.arc(px + ph*70, py - ph*34, 8 + ph*32, 0, Math.PI*2); x.fill(); } x.restore(); }
  function glitter(seed, n, t, a){ rs(seed); x.save(); x.globalCompositeOperation = 'lighter'; for(let i=0;i<n;i++){ const px = R()*W, py = R()*H, tw = Math.max(0, Math.sin(t*(2 + R()*3) + i)); x.globalAlpha = a*tw; x.fillStyle = '#DFF6FF';
    const s = 2 + R()*4; x.fillRect(px - s*2, py - 0.7, s*4, 1.4); x.fillRect(px - 0.7, py - s*2, 1.4, s*4); } x.restore(); }
  function iceCrawl(k, t, seed){ rs(seed); x.save(); for(let i=0;i<40;i++){ const bx = R()*W, h = (80 + R()*260)*k, w = 30 + R()*60; x.fillStyle = lgrad(0, H - h, 0, H, [[0, 'rgba(240,252,255,.95)'], [0.4, 'rgba(150,215,255,.8)'], [1, 'rgba(60,130,200,.9)']]);
    x.beginPath(); x.moveTo(bx - w/2, H); x.lineTo(bx - w*0.15, H - h*0.7); x.lineTo(bx, H - h); x.lineTo(bx + w*0.2, H - h*0.65); x.lineTo(bx + w/2, H); x.fill(); x.strokeStyle = 'rgba(255,255,255,.7)'; x.lineWidth = 1.5; x.stroke(); } x.restore(); }
  function cracks(cx, cy, k, seed, col, w){ rs(seed); x.save(); x.strokeStyle = col; x.lineWidth = w; x.shadowColor = col; x.shadowBlur = 14; x.lineJoin = 'round';
    for(let i=0;i<14;i++){ let a = i/14*Math.PI*2 + R()*0.3, px = cx, py = cy, L = (180 + R()*520)*k; x.beginPath(); x.moveTo(px, py); for(let s=0;s<8;s++){ a += (R() - 0.5)*0.7; px += Math.cos(a)*L/8; py += Math.sin(a)*L/8; x.lineTo(px, py); } x.stroke(); } x.restore(); }
  function bubble(txt, cx, cy, size, rot, a){ x.save(); x.globalAlpha = a; x.translate(cx, cy); x.rotate(rot || 0); x.font = '900 ' + size + 'px ' + JFONT; const w = x.measureText(txt).width + size*1.2, h = size*1.7;
    x.fillStyle = '#FFFFFF'; x.strokeStyle = '#111'; x.lineWidth = 4; x.beginPath(); x.ellipse(0, 0, w/2, h/2, 0, 0, Math.PI*2); x.fill(); x.stroke(); x.fillStyle = '#111'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(txt, 0, 2); x.restore(); }
  function silhouette(cx, cy, s, col, aura, t){ x.save(); x.translate(cx, cy); x.scale(s, s); if(aura){ x.shadowColor = aura; x.shadowBlur = 30 + Math.sin(t*4)*8; } x.fillStyle = col;
    x.beginPath(); x.arc(0, -300, 34, 0, Math.PI*2); x.fill(); x.beginPath(); x.moveTo(-58, -250); x.quadraticCurveTo(0, -270, 58, -250); x.lineTo(70, -110); x.lineTo(44, -100); x.lineTo(40, 0); x.lineTo(8, 0); x.lineTo(0, -110); x.lineTo(-8, 0); x.lineTo(-40, 0); x.lineTo(-44, -100); x.lineTo(-70, -110); x.closePath(); x.fill(); x.restore(); }

  // ───── 배경 (그림 파일이 없을 때 쓰는 그림) ─────
  const BG = {
    noon:() => cached('noon', W, H, () => { x.fillStyle = grad(0, H, [[0, '#F4E6CC'], [0.62, '#EAD7B6'], [1, '#C9A57A']]); x.fillRect(0, 0, W, H); x.fillStyle = '#C49C6E'; x.fillRect(0, 360, W, 200);
      x.fillStyle = '#2E4A3A'; x.fillRect(430, 70, 420, 180); x.strokeStyle = '#8A6A44'; x.lineWidth = 10; x.strokeRect(430, 70, 420, 180);
      x.fillStyle = 'rgba(255,255,255,.85)'; x.font = '700 30px ' + FONT; x.textAlign = 'left'; x.fillText('점심시간 12:40', 460, 120); x.font = '700 22px ' + FONT; x.fillText('교실에서 공놀이 금지!!', 460, 170); x.fillText('일직: 1학년 8반', 460, 225);
      for(let i=0;i<2;i++){ const wx = i ? 960 : 40; x.fillStyle = grad(60, 320, [[0, '#6FB8FF'], [1, '#D8EEFF']]); x.fillRect(wx, 60, 280, 260); x.strokeStyle = '#B08A5A'; x.lineWidth = 12; x.strokeRect(wx, 60, 280, 260); x.beginPath(); x.moveTo(wx + 140, 60); x.lineTo(wx + 140, 320); x.stroke(); }
      for(let r=0;r<3;r++) for(let c=0;c<5;c++){ const s = 0.6 + r*0.25, dx = 640 + (c - 2)*(170 + r*70), dy = 340 + r*62; x.fillStyle = '#B5824E'; x.fillRect(dx - 60*s, dy, 120*s, 14*s); x.fillStyle = '#8A5A34'; x.fillRect(dx - 52*s, dy + 14*s, 9*s, 60*s); x.fillRect(dx + 43*s, dy + 14*s, 9*s, 60*s); } }),
    field:() => cached('field', W, H, () => { x.fillStyle = grad(0, H, [[0, '#2A2F5E'], [0.35, '#B86A7A'], [0.55, '#FFB27A'], [0.62, '#FFD9A8'], [1, '#8A6A4E']]); x.fillRect(0, 0, W, H);
      x.fillStyle = '#3A3550'; x.fillRect(80, 170, 760, 170); x.fillStyle = '#4A4466'; for(let r=0;r<4;r++) for(let c=0;c<14;c++){ x.fillStyle = (r + c) % 5 ? 'rgba(255,220,160,.35)' : 'rgba(255,240,200,.75)'; x.fillRect(100 + c*53, 185 + r*38, 36, 24); }
      x.fillStyle = lgrad(0, 340, 0, H, [[0, '#B8875E'], [1, '#6E4E36']]); x.fillRect(0, 340, W, H - 340); x.strokeStyle = 'rgba(255,255,255,.35)'; x.lineWidth = 4; x.beginPath(); x.ellipse(640, 470, 520, 90, 0, 0, Math.PI*2); x.stroke(); }),
    hall:() => cached('hall', W, H, () => { x.fillStyle = '#0C0A14'; x.fillRect(0, 0, W, H); const vx = 640, vy = 250;
      x.fillStyle = '#1C1828'; x.beginPath(); x.moveTo(0, 0); x.lineTo(vx - 90, vy - 70); x.lineTo(vx - 90, vy + 70); x.lineTo(0, H); x.fill(); x.beginPath(); x.moveTo(W, 0); x.lineTo(vx + 90, vy - 70); x.lineTo(vx + 90, vy + 70); x.lineTo(W, H); x.fill();
      x.fillStyle = '#26203A'; x.beginPath(); x.moveTo(0, H); x.lineTo(vx - 90, vy + 70); x.lineTo(vx + 90, vy + 70); x.lineTo(W, H); x.fill();
      for(let i=0;i<6;i++){ const k = 1 - i/6, xl = lerp(vx - 90, 0, k), yt = lerp(vy - 70, 0, k), yb = lerp(vy + 70, H, k); x.strokeStyle = 'rgba(120,100,180,.25)'; x.lineWidth = 3; x.beginPath(); x.moveTo(xl, yt); x.lineTo(xl, yb); x.moveTo(W - xl, yt); x.lineTo(W - xl, yb); x.stroke(); }
      x.fillStyle = '#E8E0FF'; x.fillRect(150, 70, 110, 44); x.fillStyle = '#1A1428'; x.font = '900 28px ' + FONT; x.textAlign = 'center'; x.fillText('1 - 7', 205, 102); })
  };
  function iceBG(t){ x.fillStyle = grad(0, H, [[0, '#06122A'], [0.6, '#0E3466'], [1, '#2A6AA8']]); x.fillRect(0, 0, W, H); glitter(5, 60, t, 0.7); }
  function voidBG(t){ x.fillStyle = grad(0, H, [[0, '#07020E'], [1, '#22093A']]); x.fillRect(0, 0, W, H); particles(9, 60, t, W/2, H + 20, W*1.2, '#B57CFF', H + 60, 3); }

  // ───── 병맛 도구 ─────
  function sausage(cx, cy, s, rot, glow){ x.save(); x.translate(cx, cy); x.rotate(rot || 0); x.scale(s, s);
    if(glow){ x.shadowColor = '#FFD27A'; x.shadowBlur = 50; }
    x.fillStyle = lgrad(0, -34, 0, 34, [[0, '#E89A7A'], [0.45, '#C8584A'], [1, '#7A2A22']]); x.beginPath(); x.moveTo(-110, -30); x.lineTo(110, -30); x.arc(110, 0, 30, -Math.PI/2, Math.PI/2); x.lineTo(-110, 30); x.arc(-110, 0, 30, Math.PI/2, Math.PI*1.5); x.fill(); x.shadowBlur = 0;
    x.strokeStyle = 'rgba(60,10,8,.55)'; x.lineWidth = 6; x.lineCap = 'round'; for(let i=-2;i<=2;i++){ x.beginPath(); x.moveTo(i*42 - 10, -20); x.lineTo(i*42 + 10, 20); x.stroke(); }
    x.fillStyle = 'rgba(255,255,255,.45)'; x.beginPath(); x.ellipse(-30, -16, 70, 6, 0, 0, Math.PI*2); x.fill(); x.restore(); }
  function label(txt, px, py, tx, ty, k){ if(k <= 0) return; x.save(); x.globalAlpha = Math.min(1, k*1.5); x.strokeStyle = '#FFFFFF'; x.lineWidth = 3; x.beginPath(); x.moveTo(px, py); x.lineTo(tx, ty); x.stroke(); x.fillStyle = '#FFFFFF'; x.beginPath(); x.arc(tx, ty, 6, 0, Math.PI*2); x.fill();
    x.translate(px, py); const sc = lerp(1.6, 1, eOut(k)); x.scale(sc, sc); x.font = '900 26px ' + FONT; const w = x.measureText(txt).width + 28; x.fillStyle = '#111'; x.fillRect(-w/2 + 4, -20 + 4, w, 40); x.fillStyle = '#FFE14A'; x.fillRect(-w/2, -20, w, 40);
    x.fillStyle = '#111'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(txt, 0, 1); x.restore(); }
  function stamp(txt, cx, cy, rot, k, col, size){ if(k <= 0) return; col = col || '#E8302A'; size = size || 64; x.save(); x.translate(cx, cy); x.rotate(rot || 0); const sc = lerp(2.6, 1, eOut(k)); x.scale(sc, sc); x.globalAlpha = Math.min(1, k*2);
    x.font = '900 ' + size + 'px ' + FONT; const w = x.measureText(txt).width + size*0.6, h = size*1.35; x.strokeStyle = col; x.lineWidth = size*0.09; x.strokeRect(-w/2, -h/2, w, h); x.fillStyle = col; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(txt, 0, 3); x.restore(); }
  function card(c1, c2, t){ x.fillStyle = lgrad(0, 0, W, H, [[0, c1], [1, c2]]); x.fillRect(0, 0, W, H); x.save(); x.globalAlpha = 0.12; x.fillStyle = '#FFFFFF'; for(let i=0;i<24;i++){ x.beginPath(); x.moveTo(i*80 - 300 + t*30, 0); x.lineTo(i*80 - 250 + t*30, 0); x.lineTo(i*80 - 500 + t*30, H); x.lineTo(i*80 - 550 + t*30, H); x.fill(); } x.restore(); }
  const punch = (t, at) => 1 + 0.28*eOut(seg(t, at, at + 0.12)) - 0.1*seg(t, at + 0.12, at + 0.6);
  // 그림 + 줌 펀치 / 정지화면
  const IMP = (n, a, b, opt, fn) => (t, d) => { const p = pic(n); if(!p) return false; const tt = fn ? fn(t) : t; const z = opt && opt.punch != null ? punch(t, opt.punch) : 1;
    kb(p, tt, d, [a[0], a[1], a[2]*z], [b[0], b[1], b[2]*z], opt); if(opt && opt.freeze != null && t > opt.freeze){ tint('#2A3A6A', 0.25, 'color'); } return true; };

  // ───── 파운드 푸티지(캠코더) 도구 ─────
  let clipT = 0;
  function nv(a){ if(a <= 0) return; x.save(); x.globalCompositeOperation = 'color'; x.globalAlpha = 0.85*a; x.fillStyle = '#2AFF5A'; x.fillRect(0, 0, W, H); x.globalCompositeOperation = 'multiply'; x.globalAlpha = 0.55*a; x.fillStyle = '#7AFF96'; x.fillRect(0, 0, W, H); x.restore(); }
  function scan(a){ x.save(); x.globalAlpha = a; x.fillStyle = '#000'; for(let y=0;y<H;y+=4) x.fillRect(0, y, W, 1.5); x.restore(); }
  function torch(cx, cy, r, dark){ x.save(); x.fillStyle = rgrad(cx, cy, r*0.15, r, [[0, 'rgba(0,0,0,0)'], [0.6, `rgba(0,0,0,${dark*0.55})`], [1, `rgba(0,0,0,${dark})`]]); x.fillRect(0, 0, W, H); x.restore(); }
  function glitch(k, t){ if(k <= 0) return; rs(Math.floor(t*20)); for(let i=0;i<6;i++){ const y = R()*H, h = 6 + R()*30, dx = (R() - 0.5)*80*k; x.drawImage(x.canvas, 0, y, W, h, dx, y, W, h); } x.save(); x.globalCompositeOperation = 'lighter'; x.globalAlpha = 0.25*k; x.fillStyle = '#FF2A4A'; x.fillRect(R()*W, 0, 6, H); x.restore(); }
  function hud(t, day){
    x.save(); x.strokeStyle = 'rgba(255,255,255,.85)'; x.lineWidth = 3; const m = 56, L = 36;
    [[m, m, 1, 1], [W - m, m, -1, 1], [m, H - m, 1, -1], [W - m, H - m, -1, -1]].forEach(([px, py, sx, sy]) => { x.beginPath(); x.moveTo(px, py + L*sy); x.lineTo(px, py); x.lineTo(px + L*sx, py); x.stroke(); });
    x.font = '700 22px ui-monospace, Menlo, monospace'; x.textBaseline = 'middle'; x.fillStyle = '#FFFFFF'; x.textAlign = 'left';
    if(Math.floor(t*1.6) % 2 === 0){ x.fillStyle = '#FF2A2A'; x.beginPath(); x.arc(m + 18, m + 26, 8, 0, Math.PI*2); x.fill(); } x.fillStyle = '#FFFFFF'; x.fillText('REC', m + 34, m + 27);
    const sec = Math.floor(clipT), base = day ? 8*3600 + 25*60 : 21*3600 + 2*60, tt = base + sec, hh = Math.floor(tt/3600), mm = Math.floor(tt/60) % 60, ss = tt % 60, p2 = n => String(n).padStart(2, '0');
    x.fillText((day ? '2026.11.13  AM ' : '2026.11.12  PM ') + p2(hh > 12 ? hh - 12 : hh) + ':' + p2(mm) + ':' + p2(ss), m + 92, m + 27);
    const bat = clipT > 60 ? 1 : 3; x.textAlign = 'right'; x.strokeStyle = '#FFFFFF'; x.lineWidth = 2; x.strokeRect(W - m - 70, m + 16, 50, 22); x.fillRect(W - m - 20, m + 22, 5, 10);
    x.fillStyle = bat === 1 ? '#FF2A2A' : '#FFFFFF'; for(let i=0;i<bat;i++) x.fillRect(W - m - 66 + i*16, m + 20, 12, 14); x.fillStyle = '#FFFFFF'; x.fillText(day ? 'DAY' : 'NIGHT', W - m - 86, m + 27); x.restore(); }
  function FF(t, o){ o = o || {}; if(o.nv) nv(o.nv); scan(0.12); if(o.torch) torch(o.torch[0], o.torch[1], o.torch[2], o.torch[3] == null ? 0.85 : o.torch[3]); if(o.gl) glitch(o.gl, t); hud(t, o.day); }
  function chalk(txt, cx, cy, size, k, col){ const n = Math.floor(txt.length*k); if(n <= 0) return; x.save(); x.font = '700 ' + size + 'px ' + FONT; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = col || 'rgba(240,245,240,.92)'; x.shadowColor = col || '#FFFFFF'; x.shadowBlur = 6; x.fillText(txt.slice(0, n), cx, cy); x.restore(); }
  function papers(seed, n, t, cx, cy, spread, a){ rs(seed); x.save(); for(let i=0;i<n;i++){ const ph = R()*6, r = spread*(0.3 + R()*0.7), an = t*(0.6 + R()*0.8) + ph, px = cx + Math.cos(an)*r, py = cy + Math.sin(an*1.3)*r*0.5;
    x.save(); x.translate(px, py); x.rotate(an*1.7); x.globalAlpha = a; x.fillStyle = '#F2F2EC'; x.fillRect(-22, -30, 44, 60); x.fillStyle = 'rgba(40,40,40,.5)'; for(let l=0;l<5;l++) x.fillRect(-16, -22 + l*10, 32 - (l === 4 ? 14 : 0), 2); x.fillStyle = '#D02A2A'; x.fillRect(4, 14, 14, 3); x.restore(); } x.restore(); }
  const HB = {
    ext:() => cached('hext', W, H, () => { x.fillStyle = grad(0, H, [[0, '#02040A'], [0.6, '#0A1420'], [1, '#141A22']]); x.fillRect(0, 0, W, H); stars(3, 120, 0.5);
      x.fillStyle = '#0C0F16'; x.fillRect(200, 150, 880, 260); for(let r=0;r<3;r++) for(let c=0;c<12;c++){ x.fillStyle = r === 0 && c === 7 ? '#FFE9A8' : 'rgba(40,50,70,.8)'; x.fillRect(230 + c*70, 175 + r*75, 44, 40); }
      x.fillStyle = '#141820'; x.fillRect(0, 410, W, 150); x.fillStyle = rgrad(1150, 300, 4, 160, [[0, 'rgba(255,220,150,.5)'], [1, 'rgba(255,220,150,0)']]); x.fillRect(990, 140, 320, 320); x.fillStyle = '#222'; x.fillRect(1148, 300, 6, 260); }),
    room:() => cached('hroom', W, H, () => { x.fillStyle = '#0A0C10'; x.fillRect(0, 0, W, H); x.fillStyle = '#16241C'; x.fillRect(340, 70, 600, 200); x.strokeStyle = '#3A3020'; x.lineWidth = 10; x.strokeRect(340, 70, 600, 200);
      for(let r=0;r<3;r++) for(let c=0;c<5;c++){ const s = 0.6 + r*0.25, dx = 640 + (c - 2)*(170 + r*70), dy = 340 + r*62; x.fillStyle = '#2A2016'; x.fillRect(dx - 60*s, dy, 120*s, 14*s); x.fillRect(dx - 52*s, dy + 14*s, 9*s, 60*s); x.fillRect(dx + 43*s, dy + 14*s, 9*s, 60*s); } })
  };
  function report(cx, cy, s, rot, grade){ x.save(); x.translate(cx, cy); x.rotate(rot || 0); x.scale(s, s); x.fillStyle = '#F6F6F0'; x.shadowColor = 'rgba(0,0,0,.6)'; x.shadowBlur = 20; x.fillRect(-150, -200, 300, 400); x.shadowBlur = 0;
    x.fillStyle = '#111'; x.font = '900 24px ' + FONT; x.textAlign = 'center'; x.fillText('수행평가 보고서', 0, -150); x.font = '600 16px ' + FONT; x.fillText('1학년 8반 지호', 0, -118); x.fillStyle = 'rgba(30,30,30,.45)'; for(let l=0;l<14;l++) x.fillRect(-120, -80 + l*20, 240 - (l % 4 === 3 ? 90 : 0), 3);
    if(grade){ x.save(); x.rotate(-0.2); x.globalAlpha = grade; x.strokeStyle = '#D0202A'; x.lineWidth = 8; x.beginPath(); x.arc(40, 100, 70, 0, Math.PI*2); x.stroke(); x.fillStyle = '#D0202A'; x.font = '900 70px ' + FONT; x.fillText('B+', 40, 125); x.restore(); } x.restore(); }

  // ───── 장면 ─────
  const S = []; const scene = (d, im, bg, fx, subs, sfx) => S.push({ d, im, bg, fx, subs:subs || [], sfx:sfx || [] });
  const sub = (a, b, txt, who, v) => [a, b, txt, '', who || '', v];
  // 0. 경고
  scene(6, null, t => { x.fillStyle = '#000'; x.fillRect(0, 0, W, H); }, t => {
    x.globalAlpha = seg(t, 0.2, 0.8); glowText('이 영상은 실제로 촬영된 영상입니다', W/2, H*0.38, 38, '#FFFFFF', '#000', null, 0, 1); x.globalAlpha = 1;
    stamp('(거짓말)', W/2 + 300, H*0.38 + 56, -0.12, seg(t, 1.9, 2.1), '#E8302A', 46); if(t > 1.9 && t < 2.1) SH = 7;
    x.globalAlpha = seg(t, 3.0, 3.6); glowText('※ 노약자와 수행평가 안 한 사람은 시청을 삼가 주십시오', W/2, H*0.66, 24, '#FF8A7A', '#000', null, 0, 1); x.globalAlpha = 1;
  }, [], [[0, 'pad'], [1.9, 'scratch']]);
  // 1. 타이틀
  scene(5.5, null, t => { x.fillStyle = '#050003'; x.fillRect(0, 0, W, H); }, t => {
    const k = seg(t, 0.5, 0.6); if(t > 0.5 && t < 0.62) FLASH = 0.6;
    x.globalAlpha = k; glowText('8반 괴담', W/2, H*0.36, 96, '#E01020', '#000', '#FF0020', 0, 1); x.globalAlpha = seg(t, 1.4, 2.0); glowText('제출하셨나요', W/2, H*0.36 + 96, 46, '#F0E8E8', '#000', null, 0, 1); x.globalAlpha = 1;
    rs(5); x.fillStyle = '#B00010'; for(let i=0;i<14;i++){ const dx = W/2 - 220 + R()*440, L = seg(t, 0.6 + R()*0.6, 3 + R()*2)*(30 + R()*120); x.fillRect(dx, H*0.36 + 30, 4, L); x.beginPath(); x.arc(dx + 2, H*0.36 + 30 + L, 4, 0, Math.PI*2); x.fill(); }
    glitch(t > 0.5 ? 0.6*Math.max(0, Math.sin(t*9)) : 0, t);
  }, [], [[0.5, 'boomBig'], [0.5, 'tension'], [0.6, 'glitch'], [0.7, 'fog']]);
  // 2. 밤 9시 학교
  scene(8, IMP('h01_exterior', [0.5, 0.5, 1.05], [0.55, 0.42, 1.25]), t => { x.drawImage(HB.ext(), 0, 0); }, t => { FF(t, { nv:0.25 }); },
  [sub(0.4, 3.6, '……지금 시간, 밤 9시 2분. 학교 왔습니다.', '지호', 'h01'), sub(3.8, 7.6, '수행평가 보고서를 책상에 두고 왔거든요. 마감은 내일 아침 8시 30분.', '지호', 'h02')], [[0, 'pad'], [0.2, 'step']]);
  // 3. 복도
  scene(7, IMP('h02_hall', [0.5, 0.55, 1.08], [0.5, 0.5, 1.22]), t => { x.drawImage(BG.hall(), 0, 0); }, t => { FF(t, { torch:[W/2 + Math.sin(t*1.3)*60, H*0.62, 380, 0.7] }); SH = 1.2; },
  [sub(0.4, 3.2, '야…… 그냥 내일 일찍 오면 안 되냐?', '태오', 'h03'), sub(3.4, 6.8, '안 돼. 나 이거 0점이면 진짜 끝이야.', '지호', 'h04')], [[0, 'tension'], [0.2, 'step'], [0.9, 'step'], [1.6, 'step'], [2.3, 'step'], [3.0, 'step']]);
  // 4. 사각…사각…
  scene(5.5, IMP('h02_hall', [0.5, 0.45, 1.3], [0.5, 0.42, 1.9]), t => { x.drawImage(BG.hall(), 0, 0); }, t => { FF(t, { torch:[W/2, H*0.5, 300, 0.75] }); x.globalAlpha = seg(t, 0.6, 1.0); glowText('(사각…… 사각……)', W/2, 110, 30, '#FFFFFF', '#000', null, 0, 1); x.globalAlpha = 1; },
  [sub(2.0, 5.2, '……누가 글씨 쓰는 소리 안 들려?', '태오', 'h05')], [[0.4, 'write'], [1.6, 'write'], [2.8, 'write'], [0, 'heart']]);
  // 5. 책상의 그림자
  scene(6, null, t => { x.drawImage(HB.room(), 0, 0); silhouette(640, 450, 0.75, '#020202', null, t); x.fillStyle = '#020202'; x.fillRect(560, 400, 160, 12); }, t => {
    FF(t, { nv:1, torch:[640, 330, 330, 0.9] }); chalk('괴담 1번', 640, 130, 30, seg(t, 0.5, 1.2), 'rgba(200,255,210,.6)'); },
  [sub(0.6, 5.6, '괴담 1번…… 밤 9시가 되면, 8반에서 누가 숙제를 한다……', '지호 (속삭임)', 'h06')], [[0.3, 'write'], [1.8, 'write'], [0, 'heart'], [3.2, 'heart']]);
  // 6. 점프 스케어!
  scene(3, IMP('f11_sleep', [0.38, 0.45, 1.6], [0.36, 0.42, 1.75], { punch:0.05 }), t => { x.fillStyle = '#DDE'; x.fillRect(0, 0, W, H); silhouette(640, 560, 2.2, '#111', null, t); }, t => {
    FF(t, { nv:1, gl:1 - seg(t, 0, 1.2) }); if(t < 0.12) INV = 1; if(t < 1) SH = 12; stamp('?!', 1040, 140, 0.1, seg(t, 0.1, 0.25), '#FF2A2A', 90); },
  [], [[0.02, 'scream'], [0.02, 'boomBig'], [0.06, 'water']]);
  // 7. 자던 애였다
  scene(7, IMP('f11_sleep', [0.4, 0.45, 1.15], [0.38, 0.42, 1.3], { breath:true, hair:[0, 0.35, 1] }), t => { x.drawImage(BG.noon(), 0, 0); bubble('Zzz', 640, 260, 80, 0, 1); }, t => {
    FF(t, { torch:[460, 260, 520, 0.6] }); label('자던 애 (아침부터 잠)', 1000, 120, 520, 230, seg(t, 0.4, 0.7)); x.globalAlpha = seg(t, 4.6, 5.0); glowText('(전편 「최후의 소시지」 출연)', 1010, 440, 20, '#FFE14A', '#000', null, 0, 1); x.globalAlpha = 1; },
  [sub(1.0, 3.4, '……음…… 지금 몇 교시야……?', '자던 애', 'h07'), sub(3.6, 6.8, '너 아직도 자고 있었냐?!', '지호', 'h08')], [[0, 'calm'], [0.4, 'ding'], [3.6, 'scratch']]);
  // 8. 칠판이 스스로
  scene(7, null, t => { x.drawImage(HB.room(), 0, 0); }, t => {
    const off = (t > 0.3 && t < 0.5) || (t > 0.8 && t < 0.9); chalk('수행평가 제출 마감: 내일 08:30', 640, 135, 34, seg(t, 1.2, 3.2)); chalk('제출하셨나요?', 640, 205, 44, seg(t, 3.6, 4.8), '#FF3A3A');
    FF(t, { nv:0.6, torch:[640, 170, 420, 0.8], gl:t > 4.8 ? 0.4 : 0 }); if(off){ x.fillStyle = '#000'; x.fillRect(0, 0, W, H); } },
  [sub(1.4, 3.4, '……분필이 혼자 움직여……', '태오', 'h09'), sub(5.0, 6.8, '……저거 우리한테 묻는 거지?', '지호', 'h10')], [[0, 'tension'], [0.3, 'glitch'], [1.2, 'write'], [2.2, 'write'], [3.6, 'write'], [4.8, 'sting']]);
  // 9. 수행평가 귀신
  scene(7, IMP('h03_ghost', [0.45, 0.5, 1.1], [0.35, 0.4, 1.3]), t => { x.drawImage(HB.room(), 0, 0); papers(91, 60, t, 640, 260, 300, 0.95); x.fillStyle = '#FF2020'; x.shadowColor = '#FF0000'; x.shadowBlur = 30; x.fillRect(590, 220, 30, 10); x.fillRect(660, 220, 30, 10); x.shadowBlur = 0; }, t => {
    papers(92, 14, t*1.4, 640, 300, 520, 0.8); FF(t, { gl:0.3 + 0.3*Math.max(0, Math.sin(t*5)) }); SH = 2; },
  [sub(0.6, 3.6, '제출…… 하셨나요……', '수행평가 귀신', 'h11'), sub(4.0, 6.8, '으아아아아악!!', '태오', 'h12')], [[0, 'glitch'], [0.6, 'voidfx'], [4.0, 'scream'], [4.05, 'water']]);
  // 10. 비명 (반 친구들 재현)
  scene(3.5, IMP('f04_shock', [0.5, 0.5, 1.1], [0.5, 0.45, 1.3], { punch:0.05 }), t => { x.fillStyle = '#111'; x.fillRect(0, 0, W, H); glowText('으아아악', W/2, H/2, 120, '#FFFFFF', '#000', null, 0, 1); }, t => {
    FF(t, { nv:1, gl:0.5 }); SH = 9; x.globalAlpha = seg(t, 1.2, 1.5); glowText('(재현 화면)', 1080, 470, 22, '#FFFFFF', '#000', null, 0, 1); x.globalAlpha = 1; }, [], [[0, 'scream']]);
  // 11. 추격전
  scene(8, null, t => { x.drawImage(BG.hall(), 0, 0); }, t => {
    papers(111, 22, t*2, 640 + Math.sin(t*2)*200, 300, 400, 0.9); speedLines(0, 40, '#FFFFFF', 0.25, t); FF(t, { nv:1, torch:[640 + Math.sin(t*9)*140, 300 + Math.cos(t*7)*60, 360, 0.75] }); SH = 9;
    [['맞춤법…… 틀렸어요……', 0.8, 300, 160, -0.1], ['분량…… 부족해요……', 2.8, 960, 240, 0.08], ['출처…… 어디 있어요……', 4.8, 520, 330, -0.05]].forEach(([s2, at, px, py, r]) => {
      const k = seg(t, at, at + 0.2); if(k > 0 && t < at + 2.6){ x.save(); x.translate(px, py); x.rotate(r); x.scale(lerp(1.8, 1, eOut(k)), lerp(1.8, 1, eOut(k))); glowText(s2, 0, 0, 40, '#FF3A3A', '#000', '#FF0000', 0, 1); x.restore(); } }); },
  [sub(0.3, 2.6, '뛰어어어!!', '지호', 'h13'), sub(6.6, 7.9, '왜 맞춤법을 지적하는데!!', '태오', 'h14')], [[0, 'battle'], [0.2, 'whoosh'], [0.8, 'glitch'], [2.8, 'glitch'], [4.8, 'glitch']].concat(Array.from({ length:14 }, (_, i) => [0.2 + i*0.5, 'step'])));
  // 12. 막다른 길 + 배터리 1%
  scene(5, null, t => { x.fillStyle = '#1A1C20'; x.fillRect(0, 0, W, H); x.fillStyle = '#24262C'; x.fillRect(240, 40, 800, 480); x.fillStyle = '#0E3A18'; x.fillRect(560, 70, 160, 50); x.fillStyle = '#4AFF7A'; x.font = '900 28px ' + FONT; x.textAlign = 'center'; x.fillText('비상구 없음', 640, 104); }, t => {
    FF(t, { torch:[640, 300, 300, 0.8] }); if(Math.floor(t*3) % 2 === 0) glowText('배터리 1%', 1040, 160, 34, '#FF2A2A', '#000', null, 0, 1); },
  [sub(0.4, 2.4, '막다른 길이야!!', '태오', 'h15'), sub(2.8, 4.8, '……하필 지금 배터리가……', '지호', 'h16')], [[0, 'tension'], [0, 'heart'], [2.8, 'ding']]);
  // 13. 제출할게요!
  scene(7, null, t => { x.drawImage(HB.room(), 0, 0); tint('#000', 0.6, 'source-over'); }, t => {
    const k = eOut(seg(t, 0.3, 1.0)); report(640, 300 + (1 - k)*300, 0.95, Math.sin(t*14)*0.02*(1 - seg(t, 3, 4)), 0); FF(t, { torch:[640, 290, 420, 0.7] }); papers(131, 10, t, 640, 260, 600, 0.6); },
  [sub(0.6, 3.6, '여, 여기요!! 제출할게요!!', '지호', 'h17'), sub(4.2, 6.8, '(손 떨림)', '', '')], [[0.3, 'swish'], [0.4, 'heart'], [0, 'pad']]);
  // 14. 귀신의 심사
  scene(7, IMP('h03_ghost', [0.3, 0.3, 1.7], [0.27, 0.24, 2.2]), t => { x.fillStyle = '#0A0004'; x.fillRect(0, 0, W, H); x.fillStyle = '#FF2020'; x.shadowColor = '#FF0000'; x.shadowBlur = 40; x.fillRect(470, 230, 120, 30); x.fillRect(690, 230, 120, 30); x.shadowBlur = 0; }, t => {
    FF(t, { gl:t > 2.6 && t < 2.9 ? 0.6 : 0 }); },
  [sub(0.6, 2.6, '…………', '수행평가 귀신', ''), sub(3.0, 6.6, '……참고문헌이…… 없네요……', '수행평가 귀신', 'h18')], [[0, 'heart'], [1.4, 'heart'], [2.8, 'sting']]);
  // 15. B+
  scene(7, null, t => { x.drawImage(HB.room(), 0, 0); tint('#000', 0.5, 'source-over'); }, t => {
    report(640, 300, 0.95, 0, seg(t, 0.6, 0.8)); if(t > 0.6 && t < 0.8) SH = 8; FF(t, { torch:[640, 290, 440, 0.6] });
    if(t > 3.6){ papers(151, 50, t*1.5, 640, 200 - (t - 3.6)*60, 200 + (t - 3.6)*220, Math.max(0, 1 - seg(t, 4.5, 6.6))); }
  }, [sub(1.2, 3.4, '……그래도 제출은 했으니까.', '수행평가 귀신', 'h19'), sub(4.0, 6.6, '……B+ 받았어…… 살았다……', '지호', 'h20')], [[0.6, 'dun'], [1.0, 'ching'], [3.6, 'whoosh'], [4.0, 'calm']]);
  // 16. 다음 날 아침
  scene(7.5, null, t => { x.drawImage(BG.noon(), 0, 0); }, t => {
    const fall = seg(t, 5.0, 5.8); if(fall > 0){ x.save(); x.translate(W/2, H/2); x.rotate(eIn(fall)*0.5); x.translate(-W/2, -H/2); x.restore(); }
    FF(t, { day:true }); if(t > 5.0){ x.fillStyle = `rgba(0,0,0,${eIn(seg(t, 5.0, 5.8))*0.9})`; x.fillRect(0, 0, W, H); if(t < 5.8) SH = 10; }
    x.globalAlpha = seg(t, 0.2, 0.6)*(1 - seg(t, 1.6, 2)); glowText('다음 날 아침 08:25', W/2, 120, 40, '#FFFFFF', '#000', null, 0, 1); x.globalAlpha = 1; },
  [sub(1.8, 4.2, '얘들아~ 수행평가 마감, 다음 주로 연기됐다~', '선생님 (화면 밖)', 'h21'), sub(4.4, 5.6, '…………', '지호 · 태오', ''), sub(5.8, 7.2, '(쿵)', '', '')], [[0, 'calm'], [4.4, 'scratch'], [5.6, 'thump'], [5.9, 'thump']]);
  // 17. 2화 예고
  scene(6, null, t => { x.fillStyle = '#050003'; x.fillRect(0, 0, W, H); }, t => { FF(t, { gl:0.3 }); x.globalAlpha = seg(t, 0.4, 1.0); glowText('8반 괴담 2화', W/2, 200, 46, '#E01020', '#000', '#FF0020', 0, 1);
    x.globalAlpha = seg(t, 1.2, 1.8); glowText('「기말고사가 다가온다」', W/2, 280, 40, '#F0E8E8', '#000', null, 0, 1); x.globalAlpha = 1; },
  [sub(2.4, 5.6, '……시험 범위…… 아시나요……', '???', 'h22')], [[0, 'tension'], [0.4, 'sting'], [2.4, 'glitch']]);
  // 18. 크레딧
  const CRED = [['', '8반 괴담 : 제출하셨나요'], ['', '파운드 푸티지 병맛 호러'], ['', ''], ['기획 · 감독', '정우진'], ['원작', '1학년 8반 3D 교실'], ['', ''], ['지호', '촬영 담당'], ['태오', '비명 담당'], ['자던 애', '특별 출연 (계속 잠)'], ['수행평가 귀신', 'A4 용지 500장'], ['', ''], ['사진', 'Canva AI × Claude'], ['효과음', '8반 신디사이저'], ['', ''], ['', '※ 이 영상의 귀신은 실제 선생님과 관계없습니다'], ['', '※ 수행평가는 미리미리 하세요']];
  scene(15, null, t => { x.fillStyle = '#050305'; x.fillRect(0, 0, W, H); }, t => {
    const y0 = H*0.42 - t*55; CRED.forEach(([a, b], i) => { const y = y0 + i*50; if(y < -40 || y > H + 40) return; x.textAlign = 'center'; x.textBaseline = 'middle';
      if(i < 2){ x.font = (i ? '600 22px ' : '900 46px ') + FONT; x.fillStyle = i ? '#FF8A8A' : '#FFFFFF'; x.fillText(b, W/2, y); return; }
      x.font = '600 21px ' + FONT; x.fillStyle = '#9A8A90'; x.textAlign = 'right'; x.fillText(a, W/2 - 20, y); x.font = '700 25px ' + FONT; x.fillStyle = '#FFFFFF'; x.textAlign = a ? 'left' : 'center'; x.fillText(b, a ? W/2 + 20 : W/2, y); });
  }, [], [[0, 'credits']]);
  let total = 0; S.forEach(s => { s.t0 = total; total += s.d; });

  // ───── 자막 (한국어 한 줄 + 말하는 사람) ─────
  function letterbox(){ x.fillStyle = '#000'; x.fillRect(0, 0, W, 34); x.fillRect(0, H - 34, W, 34); }
  function subtitle(s){
    if(!s) return; const [, , txt, , who] = s; x.save(); x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineJoin = 'round';
    x.font = '700 30px ' + FONT; x.lineWidth = 7; x.strokeStyle = 'rgba(0,0,0,.9)'; x.strokeText(txt, W/2, H - 86);
    x.fillStyle = who === '수행평가 귀신' || who === '???' ? '#FF5A5A' : who === '태오' ? '#BFE8FF' : who === '자던 애' ? '#FFE0A8' : '#FFFFFF'; x.fillText(txt, W/2, H - 86);
    if(who){ x.font = '600 18px ' + FONT; x.lineWidth = 5; x.strokeText(who, W/2, H - 52); x.fillStyle = '#C8C8C8'; x.fillText(who, W/2, H - 52); } x.restore();
  }

  // ───── 그림 AI 장면 그림 (anime/ 폴더에 있으면 그걸로, 같은 이름 .mp4 가 있으면 움직이는 영상으로) ─────
  const IMG = {}; const IMG_NAMES = ['h01_exterior', 'h02_hall', 'h03_ghost', 'f04_shock', 'f11_sleep'];
  let imgTried = false;
  function preload(){ if(imgTried) return; imgTried = true;
    IMG_NAMES.forEach(n => { const o = IMG[n] = { ok:false }; const tryExt = exts => { if(!exts.length) return; const im = new Image(); im.onload = () => { o.ok = true; o.im = im; }; im.onerror = () => tryExt(exts.slice(1)); im.src = exts[0]; }; tryExt(['anime/', ''].flatMap(d => ['jpg', 'png', 'jpeg', 'webp'].map(e => d + n + '.' + e)));
      const v = document.createElement('video'); v.muted = true; v.loop = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.preload = 'auto';
      v.addEventListener('loadeddata', () => { o.vid = v; o.vok = true; }); v.addEventListener('error', () => {}); v.src = 'anime/' + n + '.mp4'; }); }
  const pic = n => { const o = IMG[n]; if(!o) return null; if(o.vok){ const v = o.vid; if(v.paused) v.play().catch(() => {}); return v; } return o.ok ? o.im : null; };
  function vidRestart(sc){ const n = Array.isArray(sc.im) ? sc.im[0] : null; const o = n && IMG[n]; if(o && o.vok){ try { o.vid.currentTime = 0; o.vid.play().catch(() => {}); } catch(e){} } }
  function kb(im, t, d, a, b, o){   // 켄 번즈 + 살아 있는 움직임
    o = o || {}; const u = ease(t/d), cx = lerp(a[0], b[0], u), cy = lerp(a[1], b[1], u), z = lerp(a[2], b[2], u)*(1 + (o.breath ? Math.sin(t*2.2)*0.006 : 0));
    const IW = im.videoWidth || im.width, IH = im.videoHeight || im.height, isV = !!im.videoWidth;
    const sc = Math.max(W/IW, H/IH)*z, w = IW*sc, h = IH*sc;
    let dx = W/2 - cx*w, dy = H/2 - cy*h; dx = cl(dx, W - w, 0); dy = cl(dy, H - h, 0); x.drawImage(im, dx, dy, w, h);
    if(isV) o = { dust:o.dust };
    const strips = (y0f, y1f, amp, fq, sp, fall) => { const n = 28, sy0 = y0f*IH, sy1 = y1f*IH, sh = (sy1 - sy0)/n;
      for(let i=0;i<n;i++){ const sy = sy0 + i*sh, k = fall ? 1 - i/n : i/n, off = Math.sin(t*sp + i*fq)*amp*k*sc; x.drawImage(im, 0, sy, IW, sh + 1, dx + off, dy + sy*sc, w, (sh + 1)*sc); } };
    if(o.hair) strips(o.hair[0], o.hair[1], o.hair[2], 0.35, 3.2, true);
    if(o.dust){ rs(17); x.save(); x.globalCompositeOperation = 'lighter'; for(let i=0;i<46;i++){ const px = (R()*W + t*(8 + R()*14)) % W, py = (R()*H + Math.sin(t*0.7 + i)*20 + t*(R()*6 - 3) + H) % H; x.globalAlpha = 0.25 + 0.25*Math.sin(t*2 + i); x.fillStyle = '#FFF2C8'; x.beginPath(); x.arc(px, py, 1 + R()*2, 0, Math.PI*2); x.fill(); } x.restore(); }
  }
  // ───── 한 프레임 그리기 ─────
  let lastSc = null;
  function frame(T){
    T = cl(T, 0, total - 0.001); if(T > prevT4 && T - prevT4 < 1) S.forEach(s => s.sfx.forEach(([tt, k]) => { const at = s.t0 + tt; if(at > prevT4 && at <= T) EV4.push(k); })); prevT4 = T; clipT = T; const sc = S.find(s => T >= s.t0 && T < s.t0 + s.d) || S[S.length - 1], t = T - sc.t0;
    if(sc !== lastSc){ lastSc = sc; vidRestart(sc); }
    const sh0 = lastSH; SH = 0; FLASH = 0; INV = 0;
    x.save(); x.fillStyle = '#000'; x.fillRect(0, 0, W, H); if(sh0){ x.translate((Math.random() - 0.5)*sh0*2, (Math.random() - 0.5)*sh0*2); x.translate(W/2, H/2); x.scale(1.02, 1.02); x.translate(-W/2, -H/2); }
    let has = false;
    if(typeof sc.im === 'function') has = !!sc.im(t, sc.d); else if(sc.im){ const p = pic(sc.im[0]); if(p){ kb(p, t, sc.d, sc.im[1], sc.im[2], sc.im[3]); has = true; } }
    if(!has && sc.bg) sc.bg(t, sc.d); if(sc.fx) sc.fx(t, sc.d, has); x.restore(); lastSH = SH; lastFL = Math.max(FLASH, INV ? 1 : 0);
    if(INV){ x.save(); x.globalCompositeOperation = 'difference'; x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, W, H); x.restore(); }
    const fi = 1 - seg(t, 0, 0.3), fo = seg(t, sc.d - 0.3, sc.d); const fa = Math.max(sc === S[0] ? 1 - seg(t, 0, 1.2) : fi*0.85, fo*0.85);
    if(fa > 0){ x.fillStyle = `rgba(0,0,0,${fa})`; x.fillRect(0, 0, W, H); }
    if(FLASH){ x.fillStyle = `rgba(255,255,255,${FLASH})`; x.fillRect(0, 0, W, H); }
    x.fillStyle = rgrad(W/2, H/2, H*0.45, W*0.75, [[0, 'rgba(0,0,0,0)'], [1, 'rgba(0,0,0,.42)']]); x.fillRect(0, 0, W, H);
    grain(0.5); letterbox(); subtitle(sc.subs.find(([a, b]) => t >= a && t <= b));
    return T >= total - 0.05;
  }

  // ───── 소리: Web Audio로 직접 합성 (+ VOICEVOX 목소리 파일이 있으면 같이 재생) ─────
  let AC = null, master = null, rev = null, startAt = 0, timer = null, nextBeat = 0, mood = 'pad', fired = new Set(), noiseBuf = null, DLY = null, SP = null, OPT = null, POST = null;
  const VO = {}; let voTried = false;
  function ac(){ if(!AC){ try { AC = new (window.AudioContext || window.webkitAudioContext)(); master = AC.createGain(); master.gain.value = 0.72; POST = AC.createDynamicsCompressor(); POST.threshold.value = -16; POST.knee.value = 12; POST.ratio.value = 4; POST.attack.value = 0.004; POST.release.value = 0.22; POST.connect(AC.destination); master.connect(POST);
    { const dIn = AC.createGain(), dL = AC.createDelay(1), dR = AC.createDelay(1), fb = AC.createGain(), mg = AC.createChannelMerger(2), dg = AC.createGain(); dL.delayTime.value = 0.375; dR.delayTime.value = 0.375; fb.gain.value = 0.38; dg.gain.value = 0.5; dIn.connect(dL); dL.connect(dR); dR.connect(fb); fb.connect(dL); dL.connect(mg, 0, 0); dR.connect(mg, 0, 1); mg.connect(dg); dg.connect(POST); DLY = dIn; }
    const n = AC.sampleRate*2; noiseBuf = AC.createBuffer(1, n, AC.sampleRate); const d = noiseBuf.getChannelData(0); for(let i=0;i<n;i++) d[i] = Math.random()*2 - 1;
    rev = AC.createConvolver(); const L = AC.sampleRate*2.2, ir = AC.createBuffer(2, L, AC.sampleRate); for(let c=0;c<2;c++){ const ch = ir.getChannelData(c); for(let i=0;i<L;i++) ch[i] = (Math.random()*2 - 1)*Math.pow(1 - i/L, 3); } rev.buffer = ir; const rg = AC.createGain(); rg.gain.value = 0.28; rev.connect(rg); rg.connect(master); } catch(e){ AC = null; } } return AC; }
  function out(node, wet){ const o = OPT || {}; let dst = master; if(SP) dst = SP; else if(o.pan != null && AC.createStereoPanner){ const p = AC.createStereoPanner(); p.pan.value = o.pan; p.connect(master); dst = p; }
    node.connect(dst); if(wet && rev){ const g = AC.createGain(); g.gain.value = wet; node.connect(g); g.connect(rev); } if(o.dly && DLY){ const g = AC.createGain(); g.gain.value = o.dly; node.connect(g); g.connect(DLY); } }
  function tone(f, t0, dur, type, vol, fEnd, cut, wet, att){ const o = AC.createOscillator(), g = AC.createGain(); o.type = type || 'sine'; o.frequency.setValueAtTime(f, t0); if(fEnd) o.frequency.exponentialRampToValueAtTime(fEnd, t0 + dur);
    let node = o; if(cut){ const fl = AC.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = cut; o.connect(fl); node = fl; }
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol, t0 + (att || Math.min(0.02, dur*0.2))); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur); node.connect(g); out(g, wet); o.start(t0); o.stop(t0 + dur + 0.05); return o; }
  function noise(t0, dur, vol, type, f0, f1, q, wet, att){ const s = AC.createBufferSource(), fl = AC.createBiquadFilter(), g = AC.createGain(); s.buffer = noiseBuf; s.loop = true; fl.type = type || 'bandpass'; fl.Q.value = q || 1; fl.frequency.setValueAtTime(f0 || 1000, t0); if(f1) fl.frequency.exponentialRampToValueAtTime(f1, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol, t0 + (att || 0.01)); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur); s.connect(fl); fl.connect(g); out(g, wet); s.start(t0); s.stop(t0 + dur + 0.05); }
  const SFX = {
    shing:t0 => { [2400, 3620, 5150, 7300, 9100].forEach((f, i) => tone(f, t0, 1.1 - i*0.15, 'sine', 0.07 - i*0.008, f*0.995, null, 0.5)); noise(t0, 0.06, 0.25, 'highpass', 5000, null, 0.7); },
    swish:t0 => { noise(t0, 0.28, 0.35, 'bandpass', 900, 6000, 2, 0.2, 0.04); tone(3000, t0 + 0.05, 0.35, 'sine', 0.025, 2500, null, 0.4); },
    whoosh:t0 => { noise(t0, 1.1, 0.22, 'bandpass', 250, 1800, 1.5, 0.3, 0.4); },
    thump:t0 => { tone(150, t0, 0.4, 'sine', 0.85, 48); noise(t0, 0.09, 0.45, 'highpass', 2500); noise(t0, 0.7, 0.18, 'bandpass', 500, 300, 1, 0.6); },
    thunder:t0 => { noise(t0, 0.15, 0.4, 'highpass', 3000); for(let i=0;i<6;i++) noise(t0 + i*0.18 + Math.random()*0.1, 0.6 + Math.random()*0.6, 0.12 + Math.random()*0.1, 'lowpass', 900 - i*80, 200, 0.7, 0.5); },
    roarFx:t0 => { [320, 640, 1150].forEach((f, i) => { const s = AC.createBufferSource(), fl = AC.createBiquadFilter(), g = AC.createGain(), lfo = AC.createOscillator(), lg = AC.createGain(); s.buffer = noiseBuf; s.loop = true;
        fl.type = 'bandpass'; fl.Q.value = 6; fl.frequency.value = f; lfo.frequency.value = 7 + i*2; lg.gain.value = f*0.18; lfo.connect(lg); lg.connect(fl.frequency);
        g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.32 - i*0.07, t0 + 0.25); g.gain.setValueAtTime(0.32 - i*0.07, t0 + 1.8); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 2.8);
        s.connect(fl); fl.connect(g); out(g, 0.6); s.start(t0); s.stop(t0 + 2.9); lfo.start(t0); lfo.stop(t0 + 2.9); });
      const sc = tone(980, t0 + 0.2, 2.4, 'triangle', 0.05, 520, 2500, 0.6, 0.3); },
    voidfx:t0 => { tone(880, t0, 3, 'sine', 0.06, 110, null, 0.7, 0.5); tone(1320, t0 + 0.2, 2.6, 'sine', 0.03, 165, null, 0.7, 0.5); },
    sting:t0 => { [622, 932, 1244].forEach(f => tone(f, t0, 1.8, 'triangle', 0.08, f*0.97, 3000, 0.6)); noise(t0, 0.5, 0.15, 'highpass', 4000, 8000); },
    riser:t0 => { tone(200, t0, 2.2, 'triangle', 0.12, 1600, 4000, 0.4, 1.8); noise(t0, 2.2, 0.16, 'bandpass', 300, 7000, 1, 0.3, 1.8); },
    calmdrop:t0 => { tone(392, t0, 2, 'sine', 0.06, null, null, 0.7); tone(587, t0 + 0.15, 2, 'sine', 0.04, null, null, 0.7); },
    charge:t0 => { tone(220, t0, 4, 'triangle', 0.1, 1760, 5000, 0.4, 3.5); [880, 1320, 1760].forEach((f, i) => tone(f, t0 + 1 + i*0.8, 1.6, 'sine', 0.04, null, null, 0.6)); noise(t0, 4.2, 0.14, 'bandpass', 400, 9000, 1, 0.3, 3.5); },
    choir:t0 => { const ch = [220, 277, 330, 440]; ch.forEach((f, i) => { [-4, 4].forEach(dt => { const o = AC.createOscillator(), f1 = AC.createBiquadFilter(), f2 = AC.createBiquadFilter(), g = AC.createGain(); o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = dt*2;
        f1.type = 'bandpass'; f1.frequency.value = 750; f1.Q.value = 5; f2.type = 'bandpass'; f2.frequency.value = 1150; f2.Q.value = 6; g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.05, t0 + 1.2); g.gain.setValueAtTime(0.05, t0 + 3); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 4.2);
        o.connect(f1); o.connect(f2); f1.connect(g); f2.connect(g); out(g, 0.8); o.start(t0); o.stop(t0 + 4.3); }); }); },
    boomBig:t0 => { tone(90, t0, 1.6, 'sine', 0.95, 32); noise(t0, 0.12, 0.5, 'highpass', 3000); noise(t0, 2.4, 0.35, 'lowpass', 2500, 120, 0.7, 0.6); SFX.shing(t0 + 0.02); },
    bigSlash:t0 => { noise(t0, 0.5, 0.6, 'bandpass', 600, 9000, 1.5, 0.4, 0.05); SFX.shing(t0 + 0.05); tone(4000, t0 + 0.05, 0.8, 'sine', 0.05, 1200, null, 0.6); },
    chime:t0 => { [1568, 2093, 2637, 3136].forEach((f, i) => tone(f, t0 + i*0.09, 1.4, 'sine', 0.05, null, null, 0.7)); },
    heart:t0 => { for(let i=0;i<6;i++){ tone(62, t0 + i*0.62, 0.2, 'sine', 0.75, 42); tone(56, t0 + i*0.62 + 0.2, 0.2, 'sine', 0.55, 40); } },
    ice:t0 => { for(let i=0;i<9;i++){ const f = 2600 + Math.random()*5200; tone(f, t0 + i*0.045 + Math.random()*0.03, 0.5, 'sine', 0.045, f*1.01, null, 0.7); } noise(t0, 0.5, 0.18, 'highpass', 6000, 9000, 1, 0.5); for(let i=0;i<5;i++) noise(t0 + i*0.07, 0.03, 0.3, 'highpass', 3500); },
    scratch:t0 => { noise(t0, 0.12, 0.5, 'bandpass', 3000, 600, 3, 0.1, 0.005); noise(t0 + 0.12, 0.16, 0.45, 'bandpass', 700, 3500, 3, 0.1, 0.005); tone(1800, t0, 0.25, 'sine', 0.05, 400, null, 0.2); },
    ding:t0 => { tone(1318, t0, 0.6, 'sine', 0.12, null, null, 0.4); tone(1975, t0 + 0.07, 0.8, 'sine', 0.09, null, null, 0.5); },
    ching:t0 => { [2093, 2637, 3136, 4186].forEach((f, i) => tone(f, t0 + i*0.05, 1.0, 'sine', 0.07, null, null, 0.6)); noise(t0, 0.15, 0.2, 'highpass', 6000); },
    dun:t0 => { [0, 0.32, 0.64].forEach((dt, i) => { const f = [440, 415, 370][i], L = i === 2 ? 1.8 : 0.28; tone(f, t0 + dt, L, 'triangle', 0.12, null, 2600, 0.5); tone(f*1.5, t0 + dt, L, 'sine', 0.06, null, null, 0.5); tone(f/2, t0 + dt, L, 'sine', 0.25, null, null, 0.3); SFX.taiko(t0 + dt); }); },
    step:t0 => { noise(t0, 0.09, 0.35, 'bandpass', 900, 500, 2, 0.003, 0.08); tone(110, t0, 0.12, 'sine', 0.18, 70); },
    write:t0 => { for(let i=0;i<6;i++){ const s0 = t0 + i*0.13 + Math.random()*0.04; noise(s0, 0.08 + Math.random()*0.05, 0.12, 'bandpass', 3800 + Math.random()*1500, null, 6, 0.01, 0.04); } },
    scream:t0 => { noise(t0, 1.1, 0.5, 'bandpass', 2400, 900, 1.5, 0.01, 0.5); [880, 1175, 1480].forEach((f, i) => tone(f, t0 + i*0.02, 1.1, 'sawtooth', 0.04, f*0.7, 3500, 0.4)); tone(2600, t0, 0.5, 'square', 0.03, 1800, 4000); },
    glitch:t0 => { for(let i=0;i<7;i++){ const f = 300 + Math.random()*2400; tone(f, t0 + i*0.045, 0.04, 'square', 0.04, null, 5000); } noise(t0, 0.3, 0.12, 'highpass', 4000); },
    taiko:t0 => { tone(110, t0, 0.5, 'sine', 0.7, 58); noise(t0, 0.08, 0.3, 'lowpass', 900); },
    theme:() => { mood = 'theme'; }, calm:() => { mood = 'calm'; }, tension:() => { mood = 'tension'; }, battle:() => { mood = 'battle'; }, ending:() => { mood = 'ending'; }, credits:() => { mood = 'credits'; }, pad:() => { mood = 'pad'; }
  };
  const MOODS = /^(theme|calm|tension|battle|ending|credits|pad)$/;
  const PROG = { pad:[[220, 262, 330], [196, 247, 294]], calm:[[262, 330, 392], [220, 262, 330], [175, 220, 262], [196, 247, 294]], theme:[[220, 277, 330], [196, 247, 294]], tension:[[147, 175, 220], [139, 165, 208]],
    battle:[[147, 175, 220], [131, 165, 196], [117, 147, 175], [131, 165, 196]], ending:[[262, 330, 392], [196, 247, 294], [220, 262, 330], [175, 220, 262]], credits:[[262, 330, 392], [220, 262, 330], [175, 220, 262], [196, 247, 294]] };
  // ───── 8반 3D 사운드: 공간 음향 + 새 음악 ─────
  const SPM = { whoosh:['sweep', 1.1], swish:['sweep', 0.35], bigSlash:['sweep', 0.5], wind:['sweep', 1], thunder:['over', 2], roarFx:['fly', 2.8], step:['back', 0.2], scream:['side', 1.2], glitch:['rand', 0.4], ice:['orbit', 0.8], voidfx:['orbit', 3], ding:['fr', 1], ching:['fr', 1], write:['fl', 0.6], riser:['rise', 2.2], scratch:['rand', 0.3], charge:['orbit', 4] };
  let spSide = 1;
  function spat(k, t0){ const m = SPM[k]; if(!m || !AC.createPanner) return null; const p = AC.createPanner(); p.panningModel = 'HRTF'; p.distanceModel = 'inverse'; p.refDistance = 2; p.rolloffFactor = 0.5; p.connect(master);
    const [kind, d] = m, P = p.positionX ? [p.positionX, p.positionY, p.positionZ] : null;
    const init = (x, y, z) => { if(P){ P[0].setValueAtTime(x, t0); P[1].setValueAtTime(y, t0); P[2].setValueAtTime(z, t0); } else p.setPosition(x, y, z); };
    const to = (t, x, y, z) => { if(P){ P[0].linearRampToValueAtTime(x, t); P[1].linearRampToValueAtTime(y, t); P[2].linearRampToValueAtTime(z, t); } };
    spSide = -spSide; const s = spSide;
    if(kind === 'sweep'){ init(-6*s, 0.5, -1.5); to(t0 + d, 6*s, 0.5, -1.5); }
    else if(kind === 'over'){ init(-2, 7, -3); to(t0 + d, 3, 7, 2); }
    else if(kind === 'fly'){ init(0, 3, -9); to(t0 + d*0.5, 0, 5, 0); to(t0 + d, 0, 3, 8); }
    else if(kind === 'back') init(1.5*s, -0.5, 2.5);
    else if(kind === 'side') init(5*s, 0.3, -0.5);
    else if(kind === 'fr') init(2.5, 0.5, -2.5); else if(kind === 'fl') init(-2, 0, -2);
    else if(kind === 'rand') init((Math.random() - 0.5)*10, Math.random()*4, (Math.random() - 0.5)*8);
    else if(kind === 'rise'){ init(0, -3, -3); to(t0 + d, 0, 8, -1); }
    else if(kind === 'orbit'){ init(4, 1, 0); const turns = d > 2 ? 2 : 1; for(let i=1;i<=16;i++){ const a = i/16*Math.PI*2*turns; to(t0 + d*i/16, Math.cos(a)*4, 1 + i*0.1, Math.sin(a)*4); } }
    return p; }
  const withOpt = (o, f) => { OPT = o; try { f(); } finally { OPT = null; } };
  function pad(ch, t0, dur, vol, cut){ ch.forEach(f => [-1, 1].forEach(sd => withOpt({ pan:sd*0.75 }, () => { const o = tone(f, t0, dur, 'sawtooth', vol, null, cut, 0.7, dur*0.35); o.detune.value = sd*9; }))); }
  function kick(t){ tone(130, t, 0.38, 'sine', 0.85, 42); noise(t, 0.02, 0.25, 'highpass', 3000); }
  function snare(t){ noise(t, 0.22, 0.32, 'bandpass', 1900, 1500, 0.8, 0.35); tone(200, t, 0.14, 'triangle', 0.16, 130); }
  function hat(t, p, v){ withOpt({ pan:p }, () => noise(t, 0.05, v || 0.06, 'highpass', 8000)); }
  function music(t0, beat){   // 1박 = 0.5초
    const P = PROG[mood] || PROG.pad, ch = P[Math.floor(beat/8) % P.length], bar = beat % 8;
    if(mood === 'battle' || mood === 'theme'){
      if(bar === 0){ pad(ch, t0, 4.1, 0.02, 1800); tone(ch[0]/2, t0, 4, 'sine', 0.12, null, null, 0, 0.2); }
      if(bar % 4 === 0 || bar === 3) kick(t0); if(bar % 4 === 1 || bar === 7) kick(t0 + 0.25); if(bar % 4 === 2) snare(t0); if(bar === 7) snare(t0 + 0.25);
      hat(t0, -0.4); hat(t0 + 0.25, 0.4, 0.035);
      tone(ch[0]/2, t0, 0.22, 'triangle', 0.16, null, 700); tone(ch[0]/2, t0 + 0.25, 0.2, 'triangle', 0.12, null, 700);
      if(bar === 0 || bar === 3) ch.forEach((f, i) => withOpt({ pan:(i - 1)*0.5 }, () => tone(f, t0, 0.38, 'sawtooth', 0.028, null, 2400, 0.4)));
      for(let i=0;i<4;i++) withOpt({ dly:0.32, pan:i % 2 ? 0.5 : -0.5 }, () => tone(ch[(bar + i) % 3]*4, t0 + i*0.125, 0.11, 'triangle', 0.02, null, 5000, 0.2));
      if(mood === 'theme' && bar === 4) SFX.taiko(t0); }
    else if(mood === 'tension'){
      if(bar === 0){ pad(ch, t0, 4.1, 0.016, 700); tone(ch[0]/2, t0, 4, 'sine', 0.1, null, null, 0, 0.5); }
      tone(ch[0]/2, t0, 0.38, 'sine', 0.16, ch[0]/2.1); hat(t0 + 0.25, bar % 2 ? 0.6 : -0.6, 0.03);
      if(bar === 4) withOpt({ dly:0.4 }, () => tone(ch[2]*4*1.06, t0, 2.2, 'sine', 0.022, ch[2]*4, null, 0.8, 1.2));
      if(bar % 4 === 0) SFX.taiko(t0); }
    else if(mood === 'calm' || mood === 'ending' || mood === 'credits'){
      if(bar === 0){ pad(ch, t0, 4.1, 0.012, 1400); tone(ch[0]/2, t0, 4, 'sine', 0.07, null, null, 0, 0.4); withOpt({ dly:0.4 }, () => tone(ch[2]*4, t0, 2, 'sine', 0.025, null, null, 0.6)); }
      withOpt({ dly:0.25, pan:bar % 2 ? 0.35 : -0.35 }, () => { tone(ch[bar % 3]*2, t0, 1.1, 'triangle', 0.05, null, 3000, 0.4, 0.005); tone(ch[bar % 3]*4, t0, 0.7, 'sine', 0.018, null, null, 0.4, 0.005); });
      if(bar % 2 === 1) withOpt({ pan:0.5 }, () => tone(ch[(bar + 1) % 3]*4, t0 + 0.25, 0.4, 'sine', 0.02, null, null, 0.6)); }
    else { if(bar === 0) pad(ch, t0, 4.1, 0.01, 900); if(bar % 4 === 0) withOpt({ dly:0.45, pan:bar ? 0.5 : -0.5 }, () => tone(ch[1]*4, t0, 1.6, 'sine', 0.025, null, null, 0.7)); }
  }
  // 목소리: kakusei/v01.mp3 … (있으면 재생, 없으면 자막만)
  function loadVoices(){ if(voTried || !AC) return; voTried = true;
    S.forEach(s => s.subs.forEach(sb => { const id = sb[5]; if(!id || VO[id] !== undefined) return; VO[id] = null;
      fetch('anime/' + id + '.mp3').then(r => r.ok ? r.arrayBuffer() : Promise.reject()).then(b => new Promise((ok, no) => AC.decodeAudioData(b, ok, no))).then(buf => { VO[id] = buf; }).catch(() => {}); })); }
  function voice(id, t0){ const b = VO[id]; if(!b) return; const s = AC.createBufferSource(), g = AC.createGain(); s.buffer = b; g.gain.value = 1.4; s.connect(g); out(g, 0.15); s.start(t0); }
  function startAudio(fromT){ if(!ac()) return; if(AC.state === 'suspended') AC.resume(); stopAudio(); loadVoices(); startAt = AC.currentTime - fromT; nextBeat = Math.max(0, Math.ceil(fromT/0.5)); fired = new Set(); mood = 'pad';
    S.forEach((s, i) => { s.sfx.forEach(([tt, k], j) => { if(s.t0 + tt < fromT){ fired.add(i + ':' + j); if(MOODS.test(k)) mood = k; } }); s.subs.forEach((sb, j) => { if(s.t0 + sb[0] < fromT) fired.add(i + ':v' + j); }); });
    timer = setInterval(() => { const now = AC.currentTime, mt = now - startAt; if(mt > total + 1){ stopAudio(); return; }
      S.forEach((s, i) => { s.sfx.forEach(([tt, k], j) => { const id = i + ':' + j, at = s.t0 + tt; if(!fired.has(id) && at <= mt + 0.15){ fired.add(id); if(SFX[k]){ const tt = Math.max(now, startAt + at); SP = spat(k, tt); try { SFX[k](tt); } finally { SP = null; } } } });
        s.subs.forEach((sb, j) => { const id = i + ':v' + j, at = s.t0 + sb[0]; if(!fired.has(id) && at <= mt + 0.15){ fired.add(id); if(sb[5]) voice(sb[5], Math.max(now, startAt + at)); } }); });
      while(nextBeat*0.5 < mt + 0.3){ const at = startAt + nextBeat*0.5; if(at >= now - 0.02) music(at, nextBeat); nextBeat++; } }, 60); }
  function stopAudio(){ if(timer){ clearInterval(timer); timer = null; } if(AC && master){ try { const old = master; old.gain.setValueAtTime(old.gain.value, AC.currentTime); old.gain.linearRampToValueAtTime(0, AC.currentTime + 0.3);
    master = AC.createGain(); master.gain.value = 0.72; master.connect(POST || AC.destination); if(rev){ rev.disconnect(); const rg = AC.createGain(); rg.gain.value = 0.28; rev.connect(rg); rg.connect(master); } setTimeout(() => old.disconnect(), 500); } catch(e){} } }
  const clock = () => (AC && timer) ? AC.currentTime - startAt : null;
  return { cv, frame, total, startAudio, stopAudio, clock, preload, IMG, W, H, fx4d:() => { const e = EV4; EV4 = []; return { sh:lastSH, fl:lastFL, ev:e }; } };
})();

/* ===== 🎬 영화관: 로비에서 장르 문 → 복도 → 상영관, 아무 자리나 앉아서 영화보기 ===== */
const CIN_G = [{ n:'스파이더맨', e:'🕷', c:'#E2574C' }, { n:'치이카와', e:'🐹', c:'#FF9AC0' }, { n:'오디세이', e:'⚓', c:'#5CB0FF' }, { n:'체인소 맨', e:'🪚', c:'#FF8A3C' }, { n:'유튜브', e:'📺', c:'#FF5A5A' }];
// 🎞 상영관마다 공식 예고편 (유튜브 영상 주소의 v= 뒤 11글자)
const CIN_TR = ['dosbhD_1LIo', '-DjykB2XImc', 'zz2ZH13NOi8', 'fRqegBxEvEc', null];
const CIN_MOVIE = {};   // 직접 만든 영화는 상영 종료 (예고편으로 바뀜)   // 액션·애니메이션관: 「최후의 소시지」 / 코미디·공포관: 「8반 괴담 : 제출하셨나요」
const CM = () => CIN_MOVIE[cinG] || MOVIE;
const CX = 60, CIN_ROWS = 6, CIN_COLS = 8, cinRowZ = i => -9.6 - i*2.0, cinRowH = i => 1.5 - (i + 1)*0.25, cinSeatX = j => CX + (j - 3.5)*1.1;
let cinScene = null, cinG = -1, cinSeat = -1, cinWatch = null, cinGo = null, cinNear = '', cinSeats = null, cinScreen = null, cinCur = [], cinBeam = null, cinHemi = null, cinScrT = 0, cinScrK = '', cinWalls = [];
function cinTex(w, h, draw){ const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); return t; }
function buildCinema(){
  cinScene = new THREE.Scene(); cinScene.background = new THREE.Color('#0B0A12');
  cinHemi = new THREE.HemisphereLight('#FFE8D0', '#2A1A2A', 0.75); cinScene.add(cinHemi);
  const dl = new THREE.DirectionalLight('#FFF1DC', 0.35); dl.position.set(3, 10, 6); cinScene.add(dl);
  const carpet = cinTex(256, 256, (x, w, h) => { x.fillStyle = '#5A1420'; x.fillRect(0, 0, w, h); x.strokeStyle = 'rgba(255,200,120,.35)'; x.lineWidth = 3; for(let i=0;i<8;i++) for(let j=0;j<8;j++){ x.beginPath(); x.arc(i*32 + 16, j*32 + 16, 9, 0, 6.28); x.stroke(); } });
  carpet.wrapS = carpet.wrapT = THREE.RepeatWrapping; carpet.repeat.set(5, 5);
  const box = (w, h, d, m, x, y, z, par) => addM(par || cinScene, new THREE.BoxGeometry(w, h, d), typeof m === 'string' ? Lm(m) : m, x, y, z);
  // ── 로비 ──
  { const fl = addM(cinScene, new THREE.PlaneGeometry(16, 14), Lm('#ffffff', { map:carpet }), 0, 0, 0); fl.rotation.x = -Math.PI/2; fl.userData.cinFloor = true;
    const wl = (w, x, z, ry, c) => { const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; cinScene.add(g); addM(g, new THREE.PlaneGeometry(w, 5), Lm(c), 0, 2.5, 0); addM(g, new THREE.PlaneGeometry(w, 1.1), Lm('#3A1A24'), 0, 0.55, 0.01); addM(g, new THREE.BoxGeometry(w, 0.12, 0.08), Gm('#FFD38A'), 0, 4.2, 0.05); cinWalls.push({ g, x, z, ry }); return g; };
    const back = wl(16, 0, -7, 0, '#2A1830'); wl(14, -8, 0, Math.PI/2, '#2E1A34'); wl(14, 8, 0, -Math.PI/2, '#2E1A34'); const front = wl(16, 0, 7, Math.PI, '#2A1830');
    const marq = addM(back, new THREE.PlaneGeometry(7, 0.9), new THREE.MeshBasicMaterial({ map:cinTex(1024, 128, (x, w, h) => { x.fillStyle = '#14080E'; x.fillRect(0, 0, w, h); x.fillStyle = '#FFD38A'; x.font = '800 78px "Noto Sans KR", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('🎬 8반 시네마 · 오늘의 상영관', w/2, h/2 + 4); }) }), 0, 4.7, 0.03);
    for(let k=0;k<14;k++) addM(back, new THREE.SphereGeometry(0.06, 6, 4), Gm(k % 2 ? '#FFE27A' : '#FFB04A'), -3.4 + k*0.52, 5.2, 0.05);
    CIN_G.forEach((G, i) => { const x0 = -6 + i*3, d = new THREE.Group(); d.position.set(x0, 0, 0.02); back.add(d);
      addM(d, new THREE.PlaneGeometry(1.7, 2.7), Lm('#1A0E14'), 0, 1.35, 0); addM(d, new THREE.PlaneGeometry(1.4, 2.5), Lm('#6A1A26'), 0, 1.25, 0.01);
      [-0.35, 0.35].forEach(dx => addM(d, new THREE.SphereGeometry(0.05, 8, 6), Lm('#E5B93C'), dx, 1.2, 0.05));
      addM(d, new THREE.PlaneGeometry(1.9, 0.55), new THREE.MeshBasicMaterial({ map:cinTex(512, 150, (x, w, h) => { x.fillStyle = '#0E070B'; x.fillRect(0, 0, w, h); x.strokeStyle = G.c; x.lineWidth = 10; x.strokeRect(6, 6, w - 12, h - 12); x.fillStyle = G.c; x.font = '800 70px "Noto Sans KR", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(G.e + ' ' + G.n + '관', w/2, h/2 + 4); }) }), 0, 3.0, 0.02);
      d.traverse(o => { o.userData.cinDoor = i; }); });
    const poster = (G, t2) => new THREE.MeshBasicMaterial({ map:cinTex(256, 380, (x, w, h) => { const gr = x.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, G.c); gr.addColorStop(1, '#14080E'); x.fillStyle = gr; x.fillRect(0, 0, w, h); x.font = '120px sans-serif'; x.textAlign = 'center'; x.fillText(G.e, w/2, 170); x.fillStyle = '#FFF'; x.font = '800 34px "Noto Sans KR", sans-serif'; x.fillText(t2, w/2, 270); x.font = '600 20px "Noto Sans KR", sans-serif'; x.fillStyle = 'rgba(255,255,255,.7)'; x.fillText('COMING SOON', w/2, 320); x.strokeStyle = '#FFD38A'; x.lineWidth = 8; x.strokeRect(4, 4, w - 8, h - 8); }) });
    const titles = ['8반 대탈출', '쌤 몰래 급식', 'Planet 1-8', '야자 괴담', '구름섬 모험'];
    [[-8, -3.5], [-8, 3.5], [8, -3.5], [8, 3.5], [-8, 0]].forEach(([x, z], i) => { const fr = addM(cinScene, new THREE.PlaneGeometry(1.5, 2.12), Gm('#FFF1D6'), x + (x < 0 ? 0.02 : -0.02), 2.2, z); fr.rotation.y = x < 0 ? Math.PI/2 : -Math.PI/2; const pm = addM(cinScene, new THREE.PlaneGeometry(1.38, 1.97), realPosterM(i), x + (x < 0 ? 0.035 : -0.035), 2.2, z); pm.rotation.y = x < 0 ? Math.PI/2 : -Math.PI/2; });
    // 매점 · 매표소 · 줄 서는 기둥
    box(1.6, 1.0, 3.2, '#7A2A34', -6.6, 0.5, 2.8); box(1.7, 0.08, 3.3, '#F2E2C8', -6.6, 1.04, 2.8);
    const pc = box(0.8, 0.9, 0.8, new THREE.MeshLambertMaterial({ color:'#FFF6E0', transparent:true, opacity:0.45 }), -6.6, 1.55, 1.8); for(let k=0;k<14;k++) addM(cinScene, new THREE.SphereGeometry(0.08, 6, 4), Lm('#FFE7A0'), -6.6 + rand(-0.3, 0.3), 1.2 + rand(0, 0.3), 1.8 + rand(-0.3, 0.3));
    box(0.84, 0.12, 0.84, '#C8333F', -6.6, 2.05, 1.8); [0, 1, 2].forEach(k => { box(0.18, 0.28, 0.18, k % 2 ? '#E2574C' : '#FFFFFF', -6.4 + k*0.0, 1.22, 3.0 + k*0.35); });
    { const mb = addM(cinScene, new THREE.PlaneGeometry(2.4, 0.9), new THREE.MeshBasicMaterial({ map:cinTex(512, 192, (x, w, h) => { x.fillStyle = '#1A0E14'; x.fillRect(0, 0, w, h); x.fillStyle = '#FFE27A'; x.font = '800 54px "Noto Sans KR", sans-serif'; x.textAlign = 'center'; x.fillText('🍿 팝콘 · 🥤 콜라', w/2, 80); x.fillStyle = '#FFF'; x.font = '600 34px "Noto Sans KR", sans-serif'; x.fillText('공부 1시간 = 팝콘 무료 (농담)', w/2, 150); }) }), -7.96, 3.0, 2.8); mb.rotation.y = Math.PI/2; }
    box(1.8, 2.2, 1.6, '#3A1E2A', 6.7, 1.1, 3.4); box(1.2, 0.7, 0.05, new THREE.MeshLambertMaterial({ color:'#9FD8FF', transparent:true, opacity:0.5 }), 6.0, 1.5, 3.4).rotation.y = Math.PI/2;
    { const tb = addM(cinScene, new THREE.PlaneGeometry(1.6, 0.45), new THREE.MeshBasicMaterial({ map:cinTex(400, 110, (x, w, h) => { x.fillStyle = '#C8333F'; x.fillRect(0, 0, w, h); x.fillStyle = '#FFF'; x.font = '800 56px "Noto Sans KR", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('🎟 매표소', w/2, h/2 + 3); }) }), 5.78, 2.45, 3.4); tb.rotation.y = -Math.PI/2; }
    [[-2.2, 1.5], [-0.8, 1.5], [0.8, 1.5], [2.2, 1.5]].forEach(([x, z]) => { addM(cinScene, new THREE.CylinderGeometry(0.05, 0.05, 1.0, 8), Lm('#E5B93C'), x, 0.5, z); addM(cinScene, new THREE.SphereGeometry(0.08, 8, 6), Lm('#E5B93C'), x, 1.02, z); });
    [[-1.5, 1.5], [1.5, 1.5]].forEach(([x, z]) => { const rp = addM(cinScene, new THREE.CylinderGeometry(0.035, 0.035, 1.4, 6), Lm('#B3242F'), x, 0.85, z); rp.rotation.z = Math.PI/2; });
    const ex = addM(front, new THREE.PlaneGeometry(2.2, 0.5), new THREE.MeshBasicMaterial({ map:cinTex(440, 100, (x, w, h) => { x.fillStyle = '#1F6B3A'; x.fillRect(0, 0, w, h); x.fillStyle = '#FFF'; x.font = '800 52px "Noto Sans KR", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('⬅ 체험관으로', w/2, h/2 + 3); }) }), 0, 2.9, 0.02);
    addM(front, new THREE.PlaneGeometry(1.4, 2.5), Lm('#4A2A34'), 0, 1.25, 0.01);
    for(let i=0;i<3;i++) for(let j=0;j<3;j++){ addM(cinScene, new THREE.SphereGeometry(0.12, 8, 6), Gm('#FFE7C0'), -5 + i*5, 4.9, -4 + j*4); }
  }
  // ── 복도 (상영관 가는 길) ──
  { const fl = addM(cinScene, new THREE.PlaneGeometry(2.8, 16), Lm('#ffffff', { map:carpet }), CX, 1.505, 2); fl.rotation.x = -Math.PI/2; fl.userData.cinFloor = true;
    box(2.8, 1.5, 16, '#1A0E14', CX, 0.75, 2);
    [-1, 1].forEach(sd => { const w = addM(cinScene, new THREE.PlaneGeometry(16, 4), Lm('#24141E'), CX + sd*1.4, 3.5, 2); w.rotation.y = -sd*Math.PI/2;
      for(let k=0;k<5;k++){ const z = 8.5 - k*3.2; addM(cinScene, new THREE.BoxGeometry(0.08, 0.3, 0.2), Gm('#FFD38A'), CX + sd*1.36, 3.6, z); addM(cinScene, new THREE.ConeGeometry(0.18, 0.35, 10, 1, true), new THREE.MeshBasicMaterial({ color:'#FFD38A', transparent:true, opacity:0.18, side:THREE.DoubleSide, depthWrite:false }), CX + sd*1.3, 3.3, z);
        if(k % 2 === 0){ const pf = addM(cinScene, new THREE.PlaneGeometry(0.9, 1.3), realPosterM((sd > 0 ? 5 : 8) + k/2), CX + sd*1.37, 3.0, z - 1.6); pf.rotation.y = -sd*Math.PI/2; } } });
    for(let k=0;k<16;k++) addM(cinScene, new THREE.BoxGeometry(0.06, 0.02, 0.4), Gm('#FFB04A'), CX + (k % 2 ? 1.3 : -1.3), 1.52, 9.5 - k*1.0);
    const dE = addM(cinScene, new THREE.PlaneGeometry(2.8, 4), Lm('#3A1A24'), CX, 3.5, 10); dE.rotation.y = Math.PI;
    const sg = addM(cinScene, new THREE.PlaneGeometry(1.8, 0.4), new THREE.MeshBasicMaterial({ map:cinTex(360, 80, (x, w, h) => { x.fillStyle = '#1F6B3A'; x.fillRect(0, 0, w, h); x.fillStyle = '#FFF'; x.font = '800 44px "Noto Sans KR", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('⬅ 로비로', w/2, h/2 + 3); }) }), CX, 4.6, 9.97); sg.rotation.y = Math.PI; }
  // ── 상영관 ──
  { const hl = (w, h, x, y, z, ry, c) => { const m = addM(cinScene, new THREE.PlaneGeometry(w, h), Lm(c), x, y, z); m.rotation.y = ry; return m; };
    hl(24, 11, 50, 5.5, -18, Math.PI/2, '#17161C'); hl(24, 11, 70, 5.5, -18, -Math.PI/2, '#17161C'); hl(20, 11, CX, 5.5, -30, 0, '#060608');
    [[54.3, 8.6], [65.7, 8.6]].forEach(([x, w]) => hl(w, 11, x, 5.5, -6, Math.PI, '#17161C')); hl(2.8, 5.5, CX, 8.25, -6, Math.PI, '#17161C');
    for(let k=0;k<6;k++) [50.05, 69.95].forEach(x => { const pn = addM(cinScene, new THREE.BoxGeometry(0.1, 3, 2.6), Lm(k % 2 ? '#2A2A33' : '#22222A'), x, 5, -9 - k*3.4); addM(cinScene, new THREE.BoxGeometry(0.12, 0.25, 0.15), Gm('#FFC88A'), x + (x < 60 ? 0.08 : -0.08), 7.2, -9 - k*3.4); });
    const fl0 = addM(cinScene, new THREE.PlaneGeometry(20, 24), Lm('#ffffff', { map:carpet }), CX, 0, -18); fl0.rotation.x = -Math.PI/2; fl0.userData.cinFloor = true;
    for(let i=0;i<CIN_ROWS;i++){ const z1 = cinRowZ(i) + 0.05, z0 = cinRowZ(i) - 1.95, h = cinRowH(i); if(h > 0.01){ const st = box(20, h, z1 - z0, '#1E1C22', CX, h/2, (z0 + z1)/2); const tp = addM(cinScene, new THREE.PlaneGeometry(20, z1 - z0), Lm('#ffffff', { map:carpet }), CX, h + 0.005, (z0 + tp0(z0, z1))); tp.rotation.x = -Math.PI/2; tp.userData.cinFloor = true; }
      [51.5, 68.5].forEach(x => addM(cinScene, new THREE.BoxGeometry(1.6, 0.03, 0.05), Gm('#FFB04A'), x, h + 0.02, z0 + 0.03)); }
    { const bp = box(20, 1.5, 3.6, '#1E1C22', CX, 0.75, -7.75); const tp = addM(cinScene, new THREE.PlaneGeometry(20, 3.6), Lm('#ffffff', { map:carpet }), CX, 1.505, -7.75); tp.rotation.x = -Math.PI/2; tp.userData.cinFloor = true; }
    box(19.6, 0.4, 2.4, '#101014', CX, 0.2, -28.6);
    cinScreen = cinTex(1024, 448, (x, w, h) => { x.fillStyle = '#F4F2EA'; x.fillRect(0, 0, w, h); });
    addM(cinScene, new THREE.PlaneGeometry(18.3, 8.25), Gm('#000000'), CX, 5.0, -29.85);
    addM(cinScene, new THREE.PlaneGeometry(17.6, 7.7), new THREE.MeshBasicMaterial({ map:cinScreen }), CX, 5.0, -29.8);
    cinCur = [];   // 커튼 없음: 요즘 영화관처럼 검은 마스킹 벽
    // 스피커 · 비상구 · 벽 조명
    [-1, 1].forEach(sd => { for(let k=0;k<4;k++){ const z = -12 - k*4.5, sp = box(0.35, 0.9, 0.6, '#0E0E12', CX + sd*9.8, 7.9, z); const gr = addM(cinScene, new THREE.CircleGeometry(0.2, 16), Lm('#2A2A30'), CX + sd*9.62, 7.95, z); gr.rotation.y = -sd*Math.PI/2; }
      box(0.9, 1.6, 0.9, '#0E0E12', CX + sd*9.3, 0.8, -28.9); for(let k=0;k<6;k++){ const gl = addM(cinScene, new THREE.PlaneGeometry(0.06, 2.4), new THREE.MeshBasicMaterial({ color:'#FFB866', transparent:true, opacity:0.35, blending:THREE.AdditiveBlending, depthWrite:false }), CX + sd*9.93, 1.3, -8.5 - k*3.4); gl.rotation.y = -sd*Math.PI/2; } });
    { const ex = addM(cinScene, new THREE.PlaneGeometry(1.2, 0.42), new THREE.MeshBasicMaterial({ map:cinTex(300, 104, (x, w, h) => { x.fillStyle = '#0B8A3A'; x.fillRect(0, 0, w, h); x.fillStyle = '#FFF'; x.font = '900 40px "Noto Sans KR", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('🏃 비상구', w/2, h/2 + 2); }) }), CX - 3.2, 4.2, -6.06); ex.rotation.y = Math.PI; }
    cinBeam = addM(cinScene, new THREE.CylinderGeometry(4.5, 0.25, 23.6, 20, 1, true), new THREE.MeshBasicMaterial({ color:'#CFE6FF', transparent:true, opacity:0, side:THREE.DoubleSide, depthWrite:false, blending:THREE.AdditiveBlending }), CX, 6.6, -18);
    cinBeam.rotation.x = -Math.PI/2 + 0.07;
    // 좌석 (인스턴스로 가볍게)
    const N = CIN_ROWS*CIN_COLS, cush = new THREE.InstancedMesh(rbox(0.7, 0.2, 0.6, 0.08), Lm('#B3242F'), N), bk = new THREE.InstancedMesh(rbox(0.7, 0.9, 0.18, 0.14), Lm('#8E1B26'), N), arm = new THREE.InstancedMesh(rbox(0.1, 0.3, 0.64, 0.045), Lm('#2A1A20'), CIN_ROWS*(CIN_COLS + 1)), cup = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.055, 0.045, 0.05, 12, 1, true), Lm('#C9A24A', { side:THREE.DoubleSide }), CIN_ROWS*(CIN_COLS + 1));
    const m4 = new THREE.Matrix4(); let a = 0; cinSeats = [];
    for(let i=0;i<CIN_ROWS;i++){ const h = cinRowH(i), z = cinRowZ(i);
      for(let j=0;j<CIN_COLS;j++){ const x = cinSeatX(j), n = i*CIN_COLS + j; m4.makeTranslation(x, h + 0.42, z - 0.28); cush.setMatrixAt(n, m4); m4.makeTranslation(x, h + 0.84, z - 0.02); bk.setMatrixAt(n, m4); cinSeats.push({ x, z:z - 0.3, h, i, j }); }
      for(let j=0;j<=CIN_COLS;j++){ m4.makeTranslation(CX + (j - 4)*1.1, h + 0.52, z - 0.28); arm.setMatrixAt(a, m4); m4.makeTranslation(CX + (j - 4)*1.1, h + 0.68, z - 0.5); cup.setMatrixAt(a++, m4); } }
    [cush, bk, arm, cup].forEach(m => { m.instanceMatrix.needsUpdate = true; cinScene.add(m); }); cush.userData.cinSeats = true; bk.userData.cinSeats = true;
  }
  cinPremium();
  cinScene.userData.targets = cinScene.children.slice();
}
function tp0(z0, z1){ return (z1 - z0)/2; }
function cinFloor(x, z){ if(cinG < 0) return 0; if(x > CX - 1.5 && x < CX + 1.5 && z > -6) return 1.5; if(z > cinRowZ(0) + 0.05) return 1.5;
  for(let i=0;i<CIN_ROWS;i++){ if(z > cinRowZ(i) - 1.95) return cinRowH(i); } return 0; }
function cinBlocked(x, z){
  if(cinG < 0){ if(x < -7.4 || x > 7.4 || z < -6.4 || z > 6.4) return true; if(x < -5.6 && z > 1 && z < 4.6) return true; if(x > 5.6 && z > 2.4 && z < 4.4) return true; return false; }
  if(z > -6.2){ return x < CX - 1.1 || x > CX + 1.1 || z > 9.6; }
  if(x < 50.5 || x > 69.5 || z < -26.6) return true;
  if(x > CX - 4.75 && x < CX + 4.75) for(let i=0;i<CIN_ROWS;i++){ const zr = cinRowZ(i); if(z > zr - 0.62 && z < zr + 0.1) return true; }
  return false;
}
function enterCinema(){
  if(!cinScene) buildCinema();
  cinScene.add(me.group); me.group.visible = true; cinG = -1; cinSeat = -1; cinWatch = null; cinGo = null; cinNear = '';
  me.pos.set(0, 0, 5.4); me.ry = me.targetRy = Math.PI; me.group.position.y = 0;
  $('#panel').hidden = true; $('#joy').hidden = false; $('#cinUI').hidden = false; cinUIUpd();
  Object.assign(camLim, { pmin:-0.3, pmax:1.2, dmin:2.5, dmax:12 }); cam.yaw = 0; cam.pitch = 0.32; cam.dist = 6.5; cam.t.set(me.pos.x, 1.2, me.pos.z);
  toast('🎬 8반 시네마에 왔어요! 보고 싶은 영화의 문으로 들어가요');
}
function leaveCinema(){ $('#cinUI').hidden = true; cin4Reset(true); ytStop(); $('#ytPick').hidden = true; if(typeof MOVIE !== 'undefined'){ MOVIE.stopAudio(); MOVIE2.stopAudio(); movBig(false); } if(room !== 'cinema' && !cinScene) return; cinWatch = null; cinSeat = -1; cinG = -1; if(me) me.group.visible = true; if(cinHemi) cinHemi.intensity = 0.75;
  remotes.forEach(r => { if(cinScene && r.av.group.parent === cinScene){ scene.add(r.av.group); r.av.group.visible = false; } }); }
function cinFade(fn){ $('#fadeOv').style.background = '#000'; $('#fadeOv').style.opacity = 1; setTimeout(() => { fn(); $('#fadeOv').style.opacity = 0; setTimeout(() => { $('#fadeOv').style.background = ''; }, 700); }, 600); }
function cinEnterHall(i){ if(CIN_MOVIE[i]) CIN_MOVIE[i].preload(); cinFade(() => { cinG = i; cinSeat = -1; cinWatch = null; me.pos.set(CX, 0, 7.4); me.ry = me.targetRy = Math.PI; cam.yaw = 0; cam.pitch = 0.25; cam.dist = 4.5; cam.t.set(me.pos.x, 2.7, me.pos.z); cinScrK = ''; ctxBtn(''); cinNear = ''; lastSent = ''; pushPresence(); cinUIUpd();
  toast(CIN_G[i].e + ' ' + CIN_G[i].n + '관 · 복도를 따라 상영관으로 걸어가요'); }); }
function cinToLobby(){ cinFade(() => { cinStand(true); cinG = -1; me.pos.set(-6 + 0, 0, -5.4); me.ry = me.targetRy = 0; cinScrK = ''; ctxBtn(''); cinNear = ''; lastSent = ''; pushPresence(); cinUIUpd(); }); }
function cinSit(k){ const S = cinSeats[k]; if(!S) return; let taken = false; remotes.forEach(r => { if(r.av.room === 'cinema' && r.av.cg === cinG && r.av.cs === k) taken = true; }); if(taken){ toast('이미 친구가 앉아 있어요'); return; }
  cinSeat = k; cinGo = null; me.pos.set(S.x, 0, S.z); me.ry = me.targetRy = Math.PI; me.group.rotation.y = Math.PI; ctxBtn(''); cinNear = ''; lastSent = ''; pushPresence(); cinUIUpd(); toast('💺 ' + (S.i + 1) + '열 ' + (S.j + 1) + '번 자리 · 🎬 영화보기를 눌러요'); }
function cinStand(quiet){ if(cinSeat < 0) return; const S = cinSeats[cinSeat]; cinSeat = -1; if(cinWatch){ CM().stopAudio(); movBig(false); } ytStop(); cinWatch = null; me.group.visible = true; if(S){ me.pos.set(S.x, 0, S.z - 0.95); } camLim.dmin = 2.5; if(cam.dist < 3) cam.dist = 4.5; lastSent = ''; pushPresence(); cinUIUpd(); }
function cinUIUpd(){ $('#cinYT').hidden = cinSeat < 0; $('#cin4D').hidden = cinSeat < 0 || !CIN_MOVIE[cinG] || !!cinYT; $('#cinSX').hidden = cinSeat < 0; $('#cin4D').textContent = '🌀 4DX ' + (cin4.on ? '켜짐' : '꺼짐'); $('#cinSX').textContent = '🖼 ScreenX ' + (cin4.sx ? '켜짐' : '꺼짐'); $('#cin4D').classList.toggle('primary', cin4.on); $('#cinSX').classList.toggle('primary', cin4.sx); $('#cinWatch').hidden = cinSeat < 0; $('#cinBig').hidden = !(cinWatch && (CIN_MOVIE[cinG] || cinYT)); $('#cinWatch').textContent = cinWatch ? '⏹ 그만 보기' : '🎬 영화보기'; $('#cinStand').hidden = cinSeat < 0; $('#cinExit').textContent = cinG < 0 ? '⬅ 체험관으로' : '⬅ 로비로'; }
$('#cinWatch').addEventListener('click', () => { if(cinSeat < 0) return; if(cinWatch){ cinWatch = null; ytStop(); CM().stopAudio(); movBig(false); me.group.visible = true; cam.dist = 3.2; camLim.dmin = 2.5; } else { if(CIN_TR[cinG]){ ytStart(CIN_TR[cinG]); return; } if(cinG === 4){ ytPick(); return; } cinWatch = { t:0 }; camLim.dmin = 0.02; } cinScrK = ''; cinUIUpd(); });
function movBig(on){ const ov = $('#movOv'); if(on){ MOVIE.cv.remove(); MOVIE2.cv.remove(); ov.appendChild(CM().cv); ov.hidden = false; } else { ov.hidden = true; } }
$('#movOv').addEventListener('click', () => movBig(false));
$('#cinBig').addEventListener('click', () => { if(cinYT){ cinYT.big = true; return; } if(cinWatch && CIN_MOVIE[cinG]) movBig(true); });
$('#cinStand').addEventListener('click', () => cinStand());
$('#cinExit').addEventListener('click', () => { if(cinG < 0) exitRoom(); else cinToLobby(); });
function cinTap(x, y){ if(!cinScene) return; ndc.set(x / window.innerWidth * 2 - 1, -(y / window.innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
  const vis = o => { for(let q = o; q; q = q.parent) if(!q.visible) return false; return true; };
  for(const h of ray.intersectObjects(cinScene.children, true)){ if(!vis(h.object)) continue;
    if(h.object.userData.cinSeats && h.instanceId != null && cinG >= 0){ if(cinSeat >= 0) cinStand(true); cinSit(h.instanceId); return; }
    if(h.object.userData.cinDoor != null && cinG < 0){ cinEnterHall(h.object.userData.cinDoor); return; }
    if(h.object.userData.cinFloor && cinSeat < 0){ cinGo = { x:h.point.x, z:h.point.z }; return; }
    if(h.object.isMesh && h.object.visible && !h.object.userData.cinFloor) return; } }
function cinDrawScreen(t){
  const G = CIN_G[Math.max(0, cinG)] || CIN_G[0], ph = !cinWatch ? 'idle' : cinWatch.t < 2.2 ? 'dim' : cinWatch.t < 5.2 ? 'c' + Math.ceil(5.2 - cinWatch.t) : 'title';
  if(ph === 'title' && cinYT){ if(cinScrK !== 'yt'){ const c2 = cinScreen.image.getContext('2d'); c2.fillStyle = '#000'; c2.fillRect(0, 0, 1024, 448); cinScreen.needsUpdate = true; cinScrK = 'yt'; } if(!cinYT.el) ytMake(); return; }
  if(ph === 'title' && CIN_MOVIE[cinG]){ const ck = CM().clock(), mt = ck != null ? ck : cinWatch.t - 5.2; if(Math.abs(mt - (cinWatch.lastF || -9)) < 0.033) return; cinWatch.lastF = mt; const end = CM().frame(mt); const cx2 = cinScreen.image.getContext('2d'); cx2.drawImage(CM().cv, 0, 0, 1024, 448); cinScreen.needsUpdate = true; cinScrK = 'movie'; cin4Frame();
    if(end && !cinWatch.ended){ cinWatch.ended = true; toast('🎬 ' + (CM() === MOVIE2 ? '「8반 괴담」' : '「최후의 소시지」') + ' 끝! 다시 보려면 그만 보기 → 영화보기'); } return; }
  const key = ph + cinG + (ph === 'title' ? Math.floor(t*4) : ph[0] === 'c' ? Math.floor(cinWatch.t*12) : ''); if(key === cinScrK) return; cinScrK = key;
  const x = cinScreen.image.getContext('2d'), w = 1024, h = 448;
  if(ph === 'idle' || ph === 'dim'){ x.fillStyle = ph === 'idle' ? '#E9E6DC' : '#2A2830'; x.fillRect(0, 0, w, h); x.fillStyle = ph === 'idle' ? '#9A948A' : '#5A5660'; x.font = '700 40px "Noto Sans KR", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(ph === 'idle' ? (CIN_TR[cinG] ? '🎬 ' + G.n + ' 공식 예고편 · ScreenX · 앉아서 영화보기' : G.e + ' ' + G.n + '관 · 앉아서 📺 유튜브를 눌러요') : '곧 상영을 시작합니다…', w/2, h/2); }
  else if(ph[0] === 'c'){ cinIntroDraw(x, w, h, (cinWatch.t - 2.2)/3); }
  else { const gr = x.createLinearGradient(0, 0, w, h); gr.addColorStop(0, '#0E0A14'); gr.addColorStop(1, G.c); x.fillStyle = gr; x.fillRect(0, 0, w, h);
    for(let k=0;k<60;k++){ x.fillStyle = 'rgba(255,255,255,' + (0.2 + ((k*37 + Math.floor(t*4)*13) % 10)/14) + ')'; x.fillRect((k*97 + t*40) % w, (k*53) % h, 3, 3); }
    x.fillStyle = '#FFF'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.font = '120px sans-serif'; x.fillText(G.e, w/2, h/2 - 80);
    x.font = '800 64px "Noto Sans KR", sans-serif'; x.fillText(G.n + ' 영화 · 곧 개봉!', w/2, h/2 + 50); x.font = '600 30px "Noto Sans KR", sans-serif'; x.fillStyle = 'rgba(255,255,255,.75)'; x.fillText('지금 영화를 준비하고 있어요 · 8반 시네마', w/2, h/2 + 120); }
  cinScreen.needsUpdate = true;
}
function cinemaTick(dt){
  const t = performance.now()/1000;
  let ix = joy.x, iy = joy.y; if(keys['a'] || keys['arrowleft']) ix -= 1; if(keys['d'] || keys['arrowright']) ix += 1; if(keys['w'] || keys['arrowup']) iy -= 1; if(keys['s'] || keys['arrowdown']) iy += 1;
  const mag = Math.min(1, Math.hypot(ix, iy)); let mx = 0, mz = 0, sp = 0;
  if(cinSeat < 0){
    if(mag >= 0.12){ cinGo = null; const fx = -Math.sin(cam.yaw), fz = -Math.cos(cam.yaw), rx = Math.cos(cam.yaw), rz = -Math.sin(cam.yaw); mx = fx*(-iy) + rx*ix; mz = fz*(-iy) + rz*ix; const ml = Math.hypot(mx, mz) || 1; mx /= ml; mz /= ml; sp = 3.0*mag; }
    else if(cinGo){ const dx = cinGo.x - me.pos.x, dz = cinGo.z - me.pos.z, dl = Math.hypot(dx, dz); if(dl > 0.15){ mx = dx/dl; mz = dz/dl; sp = 2.8; } else cinGo = null; }
    if(sp){ const nx = me.pos.x + mx*sp*dt, nz = me.pos.z + mz*sp*dt; if(!cinBlocked(nx, nz)){ me.pos.x = nx; me.pos.z = nz; } else if(!cinBlocked(nx, me.pos.z)) me.pos.x = nx; else if(!cinBlocked(me.pos.x, nz)) me.pos.z = nz; else cinGo = null;
      me.targetRy = Math.atan2(mx, mz); me.mode = 'walk'; me.manual = true; } else if(me.mode === 'walk'){ me.mode = 'idle'; me.manual = false; }
  } else if(mag >= 0.5 && !cinWatch) cinStand();
  me.update(dt);
  const sitPose2 = av => { av.legs.forEach(l => { l.rotation.set(-1.45, 0, 0); }); av.arms.forEach((a, i) => a.rotation.set(-0.35, 0, i ? -0.12 : 0.12)); av.body.position.y = -0.04; };
  if(cinSeat >= 0){ const S = cinSeats[cinSeat]; me.pos.set(S.x, 0, S.z); me.group.position.set(S.x, S.h, S.z); me.group.rotation.y = Math.PI; sitPose2(me); }
  else me.group.position.y = cinFloor(me.pos.x, me.pos.z) + (me.jumpY || 0);
  remotes.forEach(r => { const a = r.av; if(a.room !== 'cinema' || a.group.parent !== cinScene) return; a.group.visible = a.cg === cinG;
    if(a.cs >= 0 && cinSeats[a.cs] && a.cg >= 0){ const S = cinSeats[a.cs]; a.pos.set(S.x, 0, S.z); a.group.position.set(S.x, S.h, S.z); a.group.rotation.y = Math.PI; sitPose2(a); }
    else { const sv = cinG; cinG = a.cg; a.group.position.y = cinFloor(a.pos.x, a.pos.z); cinG = sv; } });
  // 카메라: 영화보기면 내 눈높이로 스르륵
  if(cinWatch){ cinWatch.t += dt; const S = cinSeats[cinSeat], k = 1 - Math.exp(-dt*2.2);
    cam.t.lerp(_eye.set(S.x, S.h + 1.45, S.z), k); cam.dist += (0.05 - cam.dist)*k; cam.pitch += (-0.06 - cam.pitch)*k; let dy = 0 - cam.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); cam.yaw += dy*k;
    if(cam.dist < 0.7) me.group.visible = false; }
  else cam.t.lerp(_eye.set(me.pos.x, me.group.position.y + (isLand() ? 1.5 : 1.1), me.pos.z), 1 - Math.exp(-dt*6));
  // 조명 · 커튼 · 영사기 빛
  if(cinG >= 0){ const on = !!cinWatch && cinWatch.t > 1.0, kk = 1 - Math.exp(-dt*1.5);
    cinHemi.intensity += ((on ? 0.12 : 0.75) - cinHemi.intensity)*kk; cinBeam.material.opacity += ((on ? 0.045 + Math.sin(t*9)*0.008 : 0) - cinBeam.material.opacity)*kk;
    cinCur.forEach(c => { const tx = CX + c.userData.sd*(on ? 10.6 : 4.2); c.position.x += (tx - c.position.x)*kk; }); cinDrawScreen(t); }
  else if(cinHemi.intensity < 0.74) cinHemi.intensity = 0.75;
  cin4Tick(dt);
  cinWalls.forEach(w => { const c = camera.position; w.g.visible = w.ry === 0 ? c.z > w.z + 0.2 : w.ry === Math.PI ? c.z < w.z - 0.2 : w.ry > 0 ? c.x > w.x + 0.2 : c.x < w.x - 0.2; });
  // 상황 버튼
  let near = '', act = null;
  if(cinSeat < 0){
    if(cinG < 0){ CIN_G.forEach((G, i) => { if(me.pos.z < -5.4 && Math.abs(me.pos.x - (-6 + i*3)) < 0.9){ near = 'd' + i; act = () => cinEnterHall(i); } }); if(me.pos.z > 5.6 && Math.abs(me.pos.x) < 1){ near = 'x'; act = () => exitRoom(); } }
    else { if(me.pos.z > 9) { near = 'b'; act = cinToLobby; }
      let best = -1, bd = 1.05; cinSeats.forEach((S, k) => { const d = Math.hypot(me.pos.x - S.x, me.pos.z - S.z); if(d < bd){ bd = d; best = k; } }); if(best >= 0){ near = 's' + best; act = () => cinSit(best); } } }
  if(near !== cinNear){ cinNear = near; if(!near) ctxBtn(''); else ctxBtn(near[0] === 'd' ? '🚪 ' + CIN_G[+near.slice(1)].e + ' ' + CIN_G[+near.slice(1)].n + '관 들어가기' : near === 'x' ? '⬅ 체험관으로' : near === 'b' ? '⬅ 로비로 돌아가기' : '💺 여기 앉기', act); }
  else if(act) roomBtnAct = act;
}
/* ===== 🎬 프리미엄관: 4DX · ScreenX · 화면 빛 번짐 · 별빛 천장 ===== */
const cin4 = { on:true, sx:true, j:0, sh:0, fl:0, wind:0, water:0, snow:0, fog:0, smell:0, poke:0, cnt:0, avg:new THREE.Color('#FFE8D0'), drops:[], dirty:false, bk:'' };
let cinSX = null, cinDust = null, cinStrobe = [], cin4A = null, cin4S = null, cinAC = null;
const CIN_BASE = new THREE.Color('#FFE8D0'), _c4 = new THREE.Color();
// 🎞 지금 상영 중인 영화 포스터 (사용자가 보낸 예매 앱 화면에서 잘라 한 장으로 묶음, 4×3)
const POSTER_ATLAS = 'posters.jpg';   // GitHub에 올린 포스터 묶음 그림 (없으면 기본 포스터)
const POSTER_NAMES = ['듄', '폭설', '폴2', '명탐정 코난', '치이카와', '하트 오브 비스트', '프레셔', '타짜', '체인소맨', '스크루지', '진격의 거인', '드골'];
let posterImg = null; const posterTex = [];
function realPosterM(i){ if(!posterImg){ posterImg = new Image(); posterImg.onload = () => posterTex.forEach(t => { t.needsUpdate = true; });
    posterImg.onerror = () => { const c = document.createElement('canvas'); c.width = 896; c.height = 960; const x = c.getContext('2d'); const cols = ['#C8892A', '#3A6A9A', '#7A3A2A', '#B8202A', '#E89AB8', '#4A5A2A', '#3A4A5A', '#8A1A1A', '#C84A2A', '#5A2A4A', '#6A4A2A', '#2A3A4A'];
      POSTER_NAMES.forEach((n, i) => { const px = (i % 4)*224, py = Math.floor(i/4)*320, g = x.createLinearGradient(0, py, 0, py + 320); g.addColorStop(0, cols[i]); g.addColorStop(1, '#0A0A10'); x.fillStyle = g; x.fillRect(px + 4, py + 4, 216, 312);
        x.fillStyle = '#fff'; x.font = '900 30px "Noto Sans KR", sans-serif'; x.textAlign = 'center'; x.fillText(n, px + 112, py + 250); x.font = '600 14px "Noto Sans KR", sans-serif'; x.fillStyle = 'rgba(255,255,255,.7)'; x.fillText('NOW SHOWING', px + 112, py + 282); });
      posterTex.forEach(t => { t.image = c; t.needsUpdate = true; }); };
    posterImg.src = POSTER_ATLAS; }
  const t = new THREE.Texture(posterImg); t.repeat.set(1/4, 1/3); t.offset.set((i % 4)/4, 1 - (Math.floor(i/4) + 1)/3); if(posterImg.complete && posterImg.naturalWidth) t.needsUpdate = true; posterTex.push(t);
  return new THREE.MeshBasicMaterial({ map:t }); }
function rbox(w, h, d, r){   // 모서리가 둥근 상자
  const s = new THREE.Shape(), x0 = -w/2 + r, y0 = -h/2 + r, x1 = w/2 - r, y1 = h/2 - r;
  s.moveTo(x0, -h/2); s.lineTo(x1, -h/2); s.quadraticCurveTo(w/2, -h/2, w/2, y0); s.lineTo(w/2, y1); s.quadraticCurveTo(w/2, h/2, x1, h/2); s.lineTo(x0, h/2); s.quadraticCurveTo(-w/2, h/2, -w/2, y1); s.lineTo(-w/2, y0); s.quadraticCurveTo(-w/2, -h/2, x0, -h/2);
  const g = new THREE.ExtrudeGeometry(s, { depth:Math.max(0.01, d - 0.04), bevelEnabled:true, bevelThickness:0.02, bevelSize:0.02, bevelSegments:2, curveSegments:4 }); g.translate(0, 0, -(d - 0.04)/2); return g; }
function cinPremium(){
  // 천장: 광섬유 별빛
  const st = cinTex(1024, 512, (x, w, h) => { x.fillStyle = '#06040A'; x.fillRect(0, 0, w, h); for(let i=0;i<460;i++){ const r = Math.random(); x.fillStyle = `rgba(255,${230 + (Math.random()*25|0)},${200 + (Math.random()*55|0)},${0.3 + r*0.7})`; x.beginPath(); x.arc(Math.random()*w, Math.random()*h, 0.6 + r*1.7, 0, 6.3); x.fill(); } });
  const ce = addM(cinScene, new THREE.PlaneGeometry(20, 24), new THREE.MeshBasicMaterial({ map:st }), CX, 11, -18); ce.rotation.x = Math.PI/2;
  // ScreenX: 양쪽 벽까지 이어지는 화면
  const mk = sd => { const c = document.createElement('canvas'); c.width = 384; c.height = 168; const tx = new THREE.CanvasTexture(c); const m = new THREE.MeshBasicMaterial({ map:tx, transparent:true, opacity:0, depthWrite:false });
    const p = addM(cinScene, new THREE.PlaneGeometry(10.5, 7), m, CX + sd*9.84, 4.9, -24.3); p.rotation.y = -sd*Math.PI/2; p.visible = false; return { c, x:c.getContext('2d'), tx, m, p, sd }; };
  cinSX = [mk(-1), mk(1)];
  // 4DX 스트로브 조명 (양쪽 벽)
  [-1, 1].forEach(sd => { for(let k=0;k<4;k++){ const b = addM(cinScene, new THREE.BoxGeometry(0.12, 0.35, 0.35), Gm('#3A3440'), CX + sd*9.9, 9.6, -12 - k*4.5); cinStrobe.push(b); } });
  // 영사기 빛 속 먼지
  const N = 180, pos = new Float32Array(N*3), seeds = []; for(let i=0;i<N;i++) seeds.push([Math.random(), Math.random()*Math.PI*2, Math.random(), Math.random()*6]);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  cinDust = new THREE.Points(g, new THREE.PointsMaterial({ color:'#FFF4DC', size:0.05, transparent:true, opacity:0, depthWrite:false, blending:THREE.AdditiveBlending })); cinDust.userData.seeds = seeds; cinDust.frustumCulled = false; cinScene.add(cinDust);
  // 상영관 이름
  const sg = addM(cinScene, new THREE.PlaneGeometry(4.2, 0.7), new THREE.MeshBasicMaterial({ map:cinTex(600, 100, (x, w, h) => { x.fillStyle = '#0A0608'; x.fillRect(0, 0, w, h); x.font = '900 36px "Noto Sans KR", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; const gr = x.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, '#FFD27A'); gr.addColorStop(1, '#FF9A3C'); x.fillStyle = gr; x.fillText('8반 PREMIUM · 4DX · SCREENX', w/2, h/2 + 3); }) }), CX, 10.0, -29.15);
}
function cinIntro(){   // 상영 직전 로고 사운드 (낮은 붐 + 화음이 밝아짐)
  try { cinAC = cinAC || new (window.AudioContext || window.webkitAudioContext)(); const A = cinAC; if(A.state === 'suspended') A.resume(); const t0 = A.currentTime + 2.3;
    const out = A.createGain(); out.gain.value = 0.9; out.connect(A.destination); const lp = A.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(260, t0); lp.frequency.exponentialRampToValueAtTime(4200, t0 + 2.2); lp.connect(out);
    const sub = A.createOscillator(), sg = A.createGain(); sub.type = 'sine'; sub.frequency.setValueAtTime(70, t0); sub.frequency.exponentialRampToValueAtTime(34, t0 + 1.6); sg.gain.setValueAtTime(0.0001, t0); sg.gain.exponentialRampToValueAtTime(0.5, t0 + 0.05); sg.gain.exponentialRampToValueAtTime(0.0001, t0 + 2.2); sub.connect(sg); sg.connect(out); sub.start(t0); sub.stop(t0 + 2.3);
    [146.8, 220, 293.7, 370, 440, 587.3].forEach((f, i) => { const o = A.createOscillator(), g = A.createGain(); o.type = i % 2 ? 'triangle' : 'sawtooth'; o.frequency.value = f; o.detune.value = (Math.random() - 0.5)*10;
      g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.05, t0 + 1.6 + i*0.08); g.gain.setValueAtTime(0.05, t0 + 2.4); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 3.4); o.connect(g); g.connect(lp); o.start(t0); o.stop(t0 + 3.5); });
    { const n = A.sampleRate*3, nb = A.createBuffer(1, n, A.sampleRate), dd = nb.getChannelData(0); for(let i=0;i<n;i++) dd[i] = Math.random()*2 - 1;
      const src = A.createBufferSource(), bp = A.createBiquadFilter(), g2 = A.createGain(), pn = A.createPanner(); src.buffer = nb; bp.type = 'bandpass'; bp.Q.value = 1.2; bp.frequency.setValueAtTime(380, t0 + 0.3); bp.frequency.exponentialRampToValueAtTime(2600, t0 + 2.9);
      g2.gain.setValueAtTime(0.0001, t0 + 0.3); g2.gain.exponentialRampToValueAtTime(0.7, t0 + 1.0); g2.gain.exponentialRampToValueAtTime(0.0001, t0 + 3.1); pn.panningModel = 'HRTF';
      if(pn.positionX){ pn.positionX.setValueAtTime(0, t0); pn.positionY.setValueAtTime(1, t0); pn.positionZ.setValueAtTime(-3, t0); for(let i=0;i<=24;i++){ const a = i/24*Math.PI*2.5 - Math.PI/2, tt = t0 + 0.3 + i*0.115; pn.positionX.linearRampToValueAtTime(Math.cos(a)*3, tt); pn.positionZ.linearRampToValueAtTime(Math.sin(a)*3, tt); pn.positionY.linearRampToValueAtTime(1 + i*0.12, tt); } }
      src.connect(bp); bp.connect(g2); g2.connect(pn); pn.connect(out); src.start(t0 + 0.3); src.stop(t0 + 3.2); }
    [1174.7, 1480, 1760, 2349].forEach((f, i) => { const o = A.createOscillator(), g = A.createGain(); o.type = 'sine'; o.frequency.value = f; const s0 = t0 + 1.7 + i*0.1; g.gain.setValueAtTime(0.0001, s0); g.gain.exponentialRampToValueAtTime(0.05, s0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, s0 + 1.4); o.connect(g); g.connect(out); o.start(s0); o.stop(s0 + 1.5); });
  } catch(e){} }
function cinIntroDraw(x, w, h, u){   // 상영 직전 로고 화면
  x.fillStyle = '#000'; x.fillRect(0, 0, w, h); const k = Math.min(1, u*1.6), sw = (u*1.4 % 1)*w*1.6 - w*0.3;
  x.save(); x.globalAlpha = k; x.textAlign = 'center'; x.textBaseline = 'middle'; x.font = '900 96px "Noto Sans KR", sans-serif'; const gr = x.createLinearGradient(sw - 200, 0, sw + 200, 0); gr.addColorStop(0, '#B8862E'); gr.addColorStop(0.5, '#FFF4C8'); gr.addColorStop(1, '#B8862E'); x.fillStyle = gr; x.fillText('8반 CINEMA', w/2, h/2 - 30);
  x.globalAlpha = Math.max(0, Math.min(1, (u - 0.35)*3)); x.font = '700 30px "Noto Sans KR", sans-serif'; x.fillStyle = '#E8E0D0'; x.fillText('PREMIUM  ·  4DX  ·  SCREENX  ·  8반 3D SOUND', w/2, h/2 + 50); x.font = '600 20px "Noto Sans KR", sans-serif'; x.fillStyle = '#9FD8FF'; x.fillText('🎧 이어폰을 끼면 소리가 머리 위 · 뒤로 지나가요', w/2, h/2 + 92);
  x.globalAlpha = Math.max(0, Math.min(1, (u - 0.6)*3))*0.6; x.font = '500 18px "Noto Sans KR", sans-serif'; x.fillText('상영 중에는 휴대폰을 진동으로 · 의자가 움직일 수 있으니 팝콘을 꼭 잡아 주세요', w/2, h - 40);
  x.globalAlpha = 0.5*k; x.strokeStyle = '#D9B061'; x.lineWidth = 2; x.beginPath(); x.moveTo(w/2 - 260*k, h/2 + 18); x.lineTo(w/2 + 260*k, h/2 + 18); x.stroke(); x.restore(); }
const J4 = { boomBig:1, roarFx:1, bigSlash:0.7, thunder:0.85, scream:0.9, sting:0.55, dun:0.5, thump:0.5, taiko:0.3, scratch:0.35, swish:0.25, step:0.12, voidfx:0.3, charge:0.3, ching:0.2, whoosh:0.25 };
function cin4Ev(k){
  if(J4[k]){ cin4.j = Math.min(1.4, cin4.j + J4[k]); if(J4[k] >= 0.5 && navigator.vibrate) try { navigator.vibrate(Math.round(40 + J4[k]*90)); } catch(e){} }
  if(/^(whoosh|swish|roarFx|wind|riser)$/.test(k)) cin4.wind = Math.max(cin4.wind, k === 'riser' ? 1.2 : 1.6);
  if(k === 'thunder' || k === 'boomBig') cin4.fl = 1;
  if(k === 'voidfx' || k === 'fog' || k === 'glitch') cin4.fog = Math.max(cin4.fog, k === 'glitch' ? 1.2 : 3.2);
  if(k === 'ice') cin4.snow = 4.5;
  if(k === 'water'){ cin4.water = 3; for(let i=0;i<46;i++) cin4.drops.push({ x:Math.random(), y:Math.random()*0.8, r:4 + Math.random()*14, v:0.01 + Math.random()*0.05 }); }
  if(k === 'smell') cin4.smell = 3.8;
  if(k === 'scream' || k === 'sting') cin4.poke = 0.9;
}
function cin4Frame(){   // 영화 한 프레임마다: 4DX 신호 · ScreenX · 화면 색
  const M = CM(); if(!M.fx4d) return; const f = M.fx4d(); cin4.sh = f.sh; cin4.fl = Math.max(cin4.fl, f.fl*0.8); if(cin4.on) f.ev.forEach(cin4Ev);
  if((cin4.cnt++ % 3) === 0){ if(!cin4A){ const c = document.createElement('canvas'); c.width = 4; c.height = 2; cin4A = c.getContext('2d', { willReadFrequently:true }); }
    try { cin4A.drawImage(M.cv, 0, 0, 4, 2); const d = cin4A.getImageData(0, 0, 4, 2).data; let r = 0, g = 0, b = 0; for(let i=0;i<32;i+=4){ r += d[i]; g += d[i + 1]; b += d[i + 2]; } cin4.avg.setRGB(r/2040, g/2040, b/2040); } catch(e){} }
  if(cinSX && cin4.sx){ if(!cin4S){ cin4S = document.createElement('canvas'); cin4S.width = 48; cin4S.height = 21; } const sx = cin4S.getContext('2d'), W0 = M.cv.width, H0 = M.cv.height;
    cinSX.forEach(P => { sx.clearRect(0, 0, 48, 21); sx.drawImage(M.cv, P.sd < 0 ? 0 : W0*0.7, 0, W0*0.3, H0, 0, 0, 48, 21); const x = P.x, w = 384, h = 168;
      x.save(); x.imageSmoothingEnabled = true; x.translate(w, 0); x.scale(-1, 1); x.drawImage(cin4S, 0, 0, w, h); x.restore();
      const g = x.createLinearGradient(0, 0, w, 0); g.addColorStop(P.sd < 0 ? 0 : 1, 'rgba(0,0,0,.92)'); g.addColorStop(P.sd < 0 ? 1 : 0, 'rgba(0,0,0,.08)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
      const v = x.createLinearGradient(0, 0, 0, h); v.addColorStop(0, 'rgba(0,0,0,.6)'); v.addColorStop(0.18, 'rgba(0,0,0,0)'); v.addColorStop(0.82, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.6)'); x.fillStyle = v; x.fillRect(0, 0, w, h); P.tx.needsUpdate = true; }); }
}
function cin4Cam(){   // 4DX 의자 움직임 → 카메라 흔들림·기울임
  if(!cin4.on || !cinWatch) return; const t = performance.now()/1000, j = cin4.j, s = Math.min(cin4.sh, 14)/14, a = j*0.035 + s*0.022; if(a < 0.0006) return;
  camera.position.y += Math.sin(t*31)*a*0.6 - j*0.012; camera.position.x += Math.sin(t*23 + 1)*a*0.4;
  camera.rotateZ(Math.sin(t*17)*a*0.55); camera.rotateX(Math.sin(t*13 + 2)*a*0.25 - j*0.008); }
function cin4Reset(force){ const c = $('#fx4d'); if(c && cin4.dirty){ c.getContext('2d').clearRect(0, 0, c.width, c.height); cin4.dirty = false; } $('#fx4dB').innerHTML = ''; cin4.bk = '';
  Object.assign(cin4, { j:0, sh:0, fl:0, wind:0, water:0, snow:0, fog:0, smell:0, poke:0 }); cin4.drops = []; [MOVIE, MOVIE2].forEach(M => { M.cv.style.transform = ''; });
  if(cinSX) cinSX.forEach(P => { P.m.opacity = 0; P.p.visible = false; }); if(force || room !== 'cinema' || !cinWatch){ camera.fov = window.innerWidth < window.innerHeight ? 62 : 56; camera.updateProjectionMatrix(); } }
function cin4Tick(dt){
  const t = performance.now()/1000, movie = !!(cinWatch && CIN_MOVIE[cinG] && cinScrK === 'movie'), lightsOff = !!cinWatch && cinWatch.t > 1.0;
  // 화면 빛이 상영관을 물들여요
  if(cinG >= 0 && lightsOff){ _c4.copy(movie ? cin4.avg : CIN_BASE); const lum = movie ? (cin4.avg.r + cin4.avg.g + cin4.avg.b)/3 : 0.2;
    cinHemi.color.lerp(_c4.lerp(CIN_BASE, 0.25), 1 - Math.exp(-dt*6)); cinHemi.intensity = 0.1 + lum*0.42 + (cin4.on ? cin4.fl*0.9 : 0); }
  else if(cinHemi) cinHemi.color.lerp(CIN_BASE, 1 - Math.exp(-dt*3));
  cinStrobe.forEach((b, i) => b.material.color.setRGB(0.23 + cin4.fl*0.77, 0.2 + cin4.fl*0.8, 0.25 + cin4.fl*0.75));
  // 먼지
  if(cinDust){ const op = cinBeam.material.opacity*9; cinDust.material.opacity = op; cinDust.visible = op > 0.01;
    if(cinDust.visible){ const P = cinDust.geometry.attributes.position.array, sd = cinDust.userData.seeds; for(let i=0;i<sd.length;i++){ const [u0, an, rr, ph] = sd[i], u = (u0 + t*0.004 + Math.sin(t*0.3 + ph)*0.01) % 1, r = (0.25 + u*3.6)*rr;
      P[i*3] = CX + Math.cos(an + t*0.05)*r; P[i*3 + 1] = lerpN(7.6, 4.9, u) + Math.sin(an + t*0.07)*r*0.55; P[i*3 + 2] = lerpN(-6.6, -29.4, u); } cinDust.geometry.attributes.position.needsUpdate = true; } }
  // ScreenX: 양옆 벽까지 보이게 시야를 넓혀요
  { const f0 = window.innerWidth < window.innerHeight ? 62 : 56, fT = (movie && cin4.sx && $('#movOv').hidden) || (cinYT && cinYT.el && !cinYT.big && cin4.sx) ? f0 + 26 : f0; if(Math.abs(camera.fov - fT) > 0.05){ camera.fov += (fT - camera.fov)*(1 - Math.exp(-dt*2)); camera.updateProjectionMatrix(); } }
  // ScreenX 켜짐
  if(cinSX) cinSX.forEach(P => { const tg = movie && cin4.sx ? 0.92 : 0; P.m.opacity += (tg - P.m.opacity)*(1 - Math.exp(-dt*2.5)); P.p.visible = P.m.opacity > 0.01; });
  if(!movie || !cin4.on){ if(cin4.dirty || cin4.bk) cin4Reset(); return; }
  // 효과가 줄어들어요
  cin4.j *= Math.exp(-dt*3); cin4.fl *= Math.exp(-dt*7); ['wind', 'water', 'snow', 'fog', 'smell', 'poke'].forEach(k => { cin4[k] = Math.max(0, cin4[k] - dt); });
  // 크게 보기일 때는 화면 자체가 흔들려요
  const big = !$('#movOv').hidden, M = CM(), a = cin4.j*6 + Math.min(cin4.sh, 14)*0.35;
  M.cv.style.transform = big && a > 0.2 ? `translate(${(Math.sin(t*29)*a).toFixed(1)}px,${(Math.sin(t*37 + 1)*a*0.8).toFixed(1)}px) rotate(${(Math.sin(t*17)*a*0.06).toFixed(2)}deg)` : '';
  // 표시등
  const B = []; if(cin4.j > 0.25 || cin4.sh > 3) B.push('💺 모션'); if(cin4.wind > 0) B.push('💨 바람'); if(cin4.water > 0) B.push('💦 물'); if(cin4.snow > 0) B.push('❄️ 눈'); if(cin4.fog > 0) B.push('🌫️ 안개'); if(cin4.fl > 0.35) B.push('⚡ 섬광'); if(cin4.smell > 0) B.push('🌭 향기'); if(cin4.poke > 0) B.push('👉 등 찌르기');
  const bk = B.join('|'); if(bk !== cin4.bk){ cin4.bk = bk; $('#fx4dB').innerHTML = B.map(s => '<span>' + s + '</span>').join(''); }
  // 화면 위 4DX 효과
  const c = $('#fx4d'), W2 = window.innerWidth, H2 = window.innerHeight; if(c.width !== W2 || c.height !== H2){ c.width = W2; c.height = H2; } const x = c.getContext('2d');
  const any = cin4.wind || cin4.water || cin4.snow || cin4.fog || cin4.smell || cin4.fl > 0.02 || cin4.drops.length; if(!any){ if(cin4.dirty){ x.clearRect(0, 0, W2, H2); cin4.dirty = false; } return; }
  x.clearRect(0, 0, W2, H2); cin4.dirty = true;
  if(cin4.fog){ const k = Math.min(1, cin4.fog/1.2)*0.32; for(let i=0;i<5;i++){ const fx = ((i*0.27 + t*0.03*(i % 2 ? 1 : -1)) % 1.2 - 0.1)*W2, fy = H2*(0.82 + (i % 3)*0.06), r = H2*0.45; const g = x.createRadialGradient(fx, fy, 0, fx, fy, r); g.addColorStop(0, `rgba(230,230,240,${k})`); g.addColorStop(1, 'rgba(230,230,240,0)'); x.fillStyle = g; x.fillRect(fx - r, fy - r, r*2, r*2); } }
  if(cin4.wind){ const k = Math.min(1, cin4.wind/0.6); x.strokeStyle = `rgba(255,255,255,${0.32*k})`; x.lineWidth = 1.5; x.beginPath(); for(let i=0;i<46;i++){ const sp = 0.6 + ((i*37) % 10)/10, px = W2 + 200 - ((i*997 + t*1700*sp) % (W2 + 400)), py = ((i*389) % 1000)/1000*H2, L = 60 + (i % 5)*40; x.moveTo(px, py); x.lineTo(px + L, py + 4); } x.stroke(); }
  if(cin4.snow){ const k = Math.min(1, cin4.snow/0.8); x.fillStyle = `rgba(255,255,255,${0.8*k})`; for(let i=0;i<130;i++){ const sp = 40 + (i*53) % 120, px = ((i*733 + t*sp*0.6 + Math.sin(t + i)*20) % W2 + W2) % W2, py = ((i*421) % H2 + t*sp) % H2, r = 1 + (i % 4); x.beginPath(); x.arc(px, py, r, 0, 6.3); x.fill(); } }
  if(cin4.drops.length){ const fade = Math.min(1, cin4.water/0.8); cin4.drops.forEach(d => { d.y += d.v*dt; const px = d.x*W2, py = d.y*H2; x.globalAlpha = fade; const g = x.createRadialGradient(px - d.r*0.3, py - d.r*0.3, 0, px, py, d.r); g.addColorStop(0, 'rgba(255,255,255,.75)'); g.addColorStop(0.35, 'rgba(190,225,255,.25)'); g.addColorStop(1, 'rgba(120,170,220,.05)'); x.fillStyle = g; x.beginPath(); x.ellipse(px, py, d.r*0.85, d.r, 0, 0, 6.3); x.fill(); }); x.globalAlpha = 1; if(cin4.water <= 0) cin4.drops = []; }
  if(cin4.smell){ const k = Math.min(1, cin4.smell/0.8); x.font = '34px sans-serif'; x.textAlign = 'center'; for(let i=0;i<9;i++){ const ph = (t*0.35 + i/9) % 1; x.globalAlpha = k*Math.sin(ph*Math.PI)*0.8; x.fillText(i % 3 ? '〰️' : '🌭', W2*(0.1 + (i*0.37 % 0.8)) + Math.sin(t*2 + i)*20, H2*(1 - ph)); } x.globalAlpha = 1; }
  if(cin4.fl > 0.02){ x.fillStyle = `rgba(255,255,255,${cin4.fl*0.55})`; x.fillRect(0, 0, W2, H2); }
}
function lerpN(a, b, u){ return a + (b - a)*u; }
$('#cin4D').addEventListener('click', () => { cin4.on = !cin4.on; if(!cin4.on) cin4Reset(); cinUIUpd(); toast(cin4.on ? '🌀 4DX 켜짐 · 의자가 움직이고 바람·눈·섬광이 나와요' : '4DX 꺼짐'); });
$('#cinSX').addEventListener('click', () => { cin4.sx = !cin4.sx; cinUIUpd(); cinScrK = ''; toast(cin4.sx ? '🖼 ScreenX 켜짐 · 양쪽 벽까지 화면이 이어져요' : 'ScreenX 꺼짐'); });
/* ===== 📺 유튜브 영화 상영 (스크린에 딱 맞게 겹쳐 보여요) ===== */
const YT_LIST = [{ id:'dosbhD_1LIo', t:'🕷 스파이더맨: 브랜드 뉴 데이 · 메인 예고편' }, { id:'-DjykB2XImc', t:'🐹 극장판 치이카와: 인어 섬의 비밀 · 메인 예고편' }, { id:'zz2ZH13NOi8', t:'⚓ 오디세이 · 파이널 예고편' }, { id:'fRqegBxEvEc', t:'🪚 극장판 체인소 맨: 레제편 · 메인 예고편' }, { id:'WhWc3b3KhnY', t:'🌸 Spring · 판타지 단편 (약 8분)' }, { id:'_cMxraX_5RE', t:'🍄 Sprite Fright · 병맛 호러 코미디 (약 10분)' }];
let cinYT = null; const _yv = new THREE.Vector3(), _yz = new THREE.Vector3();
function ytId(s){ s = (s || '').trim(); const m = s.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/|live\/)([A-Za-z0-9_-]{11})/); return m ? m[1] : /^[A-Za-z0-9_-]{11}$/.test(s) ? s : null; }
function ytPick(){ $('#ypList').innerHTML = ''; YT_LIST.forEach(v => { const b = document.createElement('button'); b.type = 'button'; b.className = 'btn'; b.textContent = v.t; b.onclick = () => ytStart(v.id); $('#ypList').appendChild(b); }); $('#ypIn').value = ''; $('#ytPick').hidden = false; }
function ytStart(id){ $('#ytPick').hidden = true; if(cinSeat < 0){ toast('먼저 자리에 앉아요'); return; } if(cinWatch){ CM().stopAudio(); movBig(false); } ytStop(); cin4Reset();
  cinYT = { id, el:null, big:false }; cinWatch = { t:0, yt:true }; camLim.dmin = 0.02; cinScrK = ''; cinIntro(); cinUIUpd(); toast('📺 곧 상영해요 · 소리는 화면 속 재생 버튼을 눌러도 돼요'); }
function ytStop(){ if(cinYT && cinYT.el) cinYT.el.remove(); if(cinYT && cinYT.sx){ cinYT.sx.forEach(p => p.el.remove()); clearInterval(cinYT.sxT); } cinYT = null; $('#ytBack').hidden = true; }
function ytMake(){ const w = document.createElement('div'); w.id = 'ytWrap';
  w.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + cinYT.id + '?autoplay=1&playsinline=1&rel=0&modestbranding=1" title="유튜브 상영" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
  document.body.appendChild(w); cinYT.el = w;
  // ScreenX: 양쪽 벽에 예고편 장면(유튜브 자동 썸네일)을 흐리게 이어 붙여요
  const fr = ['hq1', 'hq2', 'hq3', 'hqdefault'].map(f => 'https://i.ytimg.com/vi/' + cinYT.id + '/' + f + '.jpg');
  cinYT.sx = [-1, 1].map(sd => { const p = document.createElement('div'); p.className = 'ytsx ' + (sd < 0 ? 'l' : 'r'); p.innerHTML = '<img alt=""><img alt=""><i></i>'; document.body.appendChild(p); const im = p.querySelectorAll('img'); im[0].src = fr[sd < 0 ? 0 : 1]; im[1].src = fr[sd < 0 ? 2 : 3]; return { el:p, sd, im, k:0 }; });
  cinYT.sxT = setInterval(() => { if(!cinYT || !cinYT.sx) return; cinYT.sx.forEach(P => { P.k = 1 - P.k; P.im[0].style.opacity = P.k ? 0 : 1; P.im[1].style.opacity = P.k ? 1 : 0; const hid = P.im[P.k ? 0 : 1]; setTimeout(() => { hid.src = fr[Math.floor(Math.random()*fr.length)]; }, 1600); }); }, 4200); }
// 4×4 원근 변환: 사각형(0,0)-(w,h)을 화면 위 네 점에 맞춰요
function adj3(m){ return [m[4]*m[8] - m[5]*m[7], m[2]*m[7] - m[1]*m[8], m[1]*m[5] - m[2]*m[4], m[5]*m[6] - m[3]*m[8], m[0]*m[8] - m[2]*m[6], m[2]*m[3] - m[0]*m[5], m[3]*m[7] - m[4]*m[6], m[1]*m[6] - m[0]*m[7], m[0]*m[4] - m[1]*m[3]]; }
function mul3(a, b){ const c = []; for(let i=0;i<3;i++) for(let j=0;j<3;j++){ let s = 0; for(let k=0;k<3;k++) s += a[3*i + k]*b[3*k + j]; c[3*i + j] = s; } return c; }
function basis3(x1, y1, x2, y2, x3, y3, x4, y4){ const m = [x1, x2, x3, y1, y2, y3, 1, 1, 1], a = adj3(m), v = [a[0]*x4 + a[1]*y4 + a[2], a[3]*x4 + a[4]*y4 + a[5], a[6]*x4 + a[7]*y4 + a[8]]; return mul3(m, [v[0], 0, 0, 0, v[1], 0, 0, 0, v[2]]); }
function quad3(w, h, d){ const s = basis3(0, 0, w, 0, 0, h, w, h), t = mul3(basis3(...d), adj3(s)); for(let i=0;i<9;i++) t[i] /= t[8]; return t; }
function ytPos(){
  if(!cinYT || !cinYT.el) return; const el = cinYT.el, st = el.style;
  if(cinYT.big){ st.transform = 'none'; st.width = '100vw'; st.height = '100vh'; st.zIndex = 40; st.display = ''; $('#ytBack').hidden = false; return; }
  $('#ytBack').hidden = true; st.width = '1280px'; st.height = '560px'; st.zIndex = 6;
  camera.updateMatrixWorld(); const W2 = window.innerWidth, H2 = window.innerHeight, d = [];
  for(const [x, y] of [[-8.8, 3.85], [8.8, 3.85], [-8.8, -3.85], [8.8, -3.85]]){ _yv.set(CX + x, 5.0 + y, -29.78); _yz.copy(_yv).applyMatrix4(camera.matrixWorldInverse); if(_yz.z > -0.05){ st.display = 'none'; return; } _yv.project(camera); d.push((_yv.x + 1)/2*W2, (1 - _yv.y)/2*H2); }
  st.display = ''; const t = quad3(1280, 560, d); st.transform = 'matrix3d(' + [t[0], t[3], 0, t[6], t[1], t[4], 0, t[7], 0, 0, 1, 0, t[2], t[5], 0, t[8]].map(v => +v.toFixed(8)).join(',') + ')';
  if(cinYT.sx) cinYT.sx.forEach(P => { const ps = P.el.style; if(!cin4.sx || cinYT.big){ ps.display = 'none'; return; } const x = CX + P.sd*9.84, zA = P.sd < 0 ? -19.05 : -29.55, zB = P.sd < 0 ? -29.55 : -19.05, q = [];
    for(const [z, y] of [[zA, 8.4], [zB, 8.4], [zA, 1.4], [zB, 1.4]]){ _yv.set(x, y, z); _yz.copy(_yv).applyMatrix4(camera.matrixWorldInverse); if(_yz.z > -0.05){ ps.display = 'none'; return; } _yv.project(camera); q.push((_yv.x + 1)/2*W2, (1 - _yv.y)/2*H2); }
    ps.display = ''; const m = quad3(480, 320, q); ps.transform = 'matrix3d(' + [m[0], m[3], 0, m[6], m[1], m[4], 0, m[7], 0, 0, 1, 0, m[2], m[5], 0, m[8]].map(v => +v.toFixed(8)).join(',') + ')'; }); }
$('#cinYT').addEventListener('click', ytPick);
$('#ypX').addEventListener('click', () => { $('#ytPick').hidden = true; });
$('#ypGo').addEventListener('click', () => { const id = ytId($('#ypIn').value); if(!id){ toast('유튜브 링크를 확인해 주세요'); return; } ytStart(id); });
$('#ytBack').addEventListener('click', () => { if(cinYT){ cinYT.big = false; } });
const ENG_RAW = `
achieve|동|이루다, 달성하다|She worked hard to achieve her goal.|그녀는 목표를 이루기 위해 열심히 노력했다.
affect|동|영향을 미치다|Lack of sleep can affect your grades.|잠이 부족하면 성적에 영향을 줄 수 있다.
available|형|이용할 수 있는|The library is available to all students.|도서관은 모든 학생이 이용할 수 있다.
avoid|동|피하다|Try to avoid junk food before exams.|시험 전에는 정크푸드를 피하도록 해라.
aware|형|알고 있는, 의식하는|Are you aware of the new school rule?|새 교칙에 대해 알고 있니?
benefit|명|이익, 혜택|Exercise has many benefits for your health.|운동은 건강에 많은 이점이 있다.
challenge|명|도전, 어려운 일|Learning a new language is a big challenge.|새 언어를 배우는 건 큰 도전이다.
compare|동|비교하다|Don't compare yourself to others.|너 자신을 남과 비교하지 마.
consider|동|고려하다, 여기다|Please consider my suggestion.|제 제안을 고려해 주세요.
contain|동|포함하다, 들어 있다|This box contains old photos.|이 상자에는 오래된 사진들이 들어 있다.
create|동|만들어 내다, 창조하다|He created a game with his friends.|그는 친구들과 게임을 만들었다.
culture|명|문화|K-pop is part of Korean culture.|K팝은 한국 문화의 일부이다.
decide|동|결정하다|I decided to join the science club.|나는 과학 동아리에 들어가기로 결정했다.
decrease|동|줄다, 감소하다|The number of students decreased this year.|올해 학생 수가 줄었다.
depend|동|의존하다, ~에 달려 있다|Your success depends on your effort.|너의 성공은 노력에 달려 있다.
describe|동|묘사하다, 설명하다|Can you describe the man you saw?|네가 본 남자를 묘사해 줄 수 있니?
develop|동|발달시키다, 개발하다|Reading develops your thinking skills.|독서는 사고력을 발달시킨다.
difference|명|차이|There is a big difference between them.|그들 사이에는 큰 차이가 있다.
discover|동|발견하다|Scientists discovered a new planet.|과학자들이 새 행성을 발견했다.
effect|명|효과, 영향|Music has a calming effect on people.|음악은 사람을 진정시키는 효과가 있다.
effort|명|노력|It takes effort to learn English.|영어를 배우는 데는 노력이 든다.
encourage|동|격려하다, 장려하다|My teacher encouraged me to try again.|선생님은 내게 다시 해 보라고 격려하셨다.
environment|명|환경|We must protect the environment.|우리는 환경을 보호해야 한다.
especially|부|특히|I like fruit, especially apples.|나는 과일, 특히 사과를 좋아한다.
experience|명|경험|Traveling is a great experience.|여행은 멋진 경험이다.
explain|동|설명하다|Could you explain this problem again?|이 문제를 다시 설명해 주실 수 있나요?
express|동|표현하다|It's hard to express my feelings in words.|내 감정을 말로 표현하기 어렵다.
focus|동|집중하다|Focus on one thing at a time.|한 번에 한 가지에 집중해라.
force|명|힘, 강요|The force of the wind broke the window.|바람의 힘이 창문을 깨뜨렸다.
improve|동|향상시키다, 나아지다|Practice will improve your speaking.|연습하면 말하기 실력이 향상될 것이다.
include|동|포함하다|The price includes lunch.|가격에는 점심이 포함되어 있다.
increase|동|늘다, 증가하다|Prices increase every year.|물가는 매년 오른다.
influence|명|영향(력)|Parents have a strong influence on children.|부모는 아이에게 강한 영향을 준다.
information|명|정보|You can find information online.|온라인에서 정보를 찾을 수 있다.
involve|동|포함하다, 관련시키다|The project involves a lot of teamwork.|그 프로젝트는 많은 팀워크를 필요로 한다.
issue|명|문제, 쟁점|Climate change is a global issue.|기후 변화는 세계적인 문제이다.
method|명|방법|This is a new method of studying.|이것은 새로운 공부 방법이다.
necessary|형|필요한|Sleep is necessary for good health.|잠은 건강에 필요하다.
opportunity|명|기회|This trip is a great opportunity to learn.|이 여행은 배울 수 있는 좋은 기회다.
patient|형|참을성 있는 (명: 환자)|Be patient with your little brother.|남동생에게 참을성을 가져라.
perform|동|수행하다, 공연하다|The band performed at the festival.|그 밴드는 축제에서 공연했다.
prefer|동|더 좋아하다|I prefer tea to coffee.|나는 커피보다 차를 더 좋아한다.
prepare|동|준비하다|We prepared for the exam together.|우리는 함께 시험을 준비했다.
prevent|동|막다, 예방하다|Washing hands prevents colds.|손을 씻으면 감기를 예방한다.
produce|동|생산하다, 만들어 내다|This factory produces cars.|이 공장은 자동차를 생산한다.
protect|동|보호하다|Helmets protect your head.|헬멧은 머리를 보호한다.
provide|동|제공하다|The school provides free lunch.|학교는 무료 점심을 제공한다.
purpose|명|목적|What is the purpose of your visit?|방문 목적이 무엇인가요?
realize|동|깨닫다, 실현하다|I realized I had left my phone.|나는 휴대폰을 두고 온 걸 깨달았다.
reduce|동|줄이다|We should reduce plastic waste.|우리는 플라스틱 쓰레기를 줄여야 한다.
reflect|동|반사하다, 반영하다|The lake reflects the mountains.|호수에 산이 비친다.
relationship|명|관계|She has a good relationship with her friends.|그녀는 친구들과 사이가 좋다.
remain|동|남다, 계속 ~이다|Please remain seated.|자리에 앉아 계세요.
require|동|필요로 하다|This job requires patience.|이 일은 인내심을 필요로 한다.
research|명|연구, 조사|They did research on sleep.|그들은 수면에 대한 연구를 했다.
respond|동|대답하다, 반응하다|He didn't respond to my message.|그는 내 메시지에 답하지 않았다.
responsible|형|책임이 있는|You are responsible for your choices.|너는 너의 선택에 책임이 있다.
result|명|결과|The result of the test was good.|시험 결과가 좋았다.
situation|명|상황|Stay calm in a difficult situation.|어려운 상황에서 침착해라.
solve|동|해결하다, 풀다|Can you solve this puzzle?|이 퍼즐을 풀 수 있니?
species|명|(생물의) 종|Many species are in danger.|많은 종들이 위기에 처해 있다.
structure|명|구조|The structure of the building is strong.|그 건물의 구조는 튼튼하다.
succeed|동|성공하다|If you keep trying, you will succeed.|계속 노력하면 성공할 것이다.
suggest|동|제안하다|I suggest we take a break.|잠깐 쉬자고 제안할게.
support|동|지지하다, 돕다|My family always supports me.|우리 가족은 항상 나를 지지해 준다.
survive|동|살아남다|Plants need water to survive.|식물은 살아남기 위해 물이 필요하다.
technology|명|기술|Technology changes our lives.|기술은 우리의 삶을 바꾼다.
tend|동|~하는 경향이 있다|Teenagers tend to sleep late.|십 대들은 늦게 자는 경향이 있다.
various|형|다양한|We sell various kinds of bread.|우리는 다양한 종류의 빵을 판다.
attitude|명|태도|A positive attitude helps you learn.|긍정적인 태도는 배우는 데 도움이 된다.
behavior|명|행동|His behavior in class was great.|수업 중 그의 행동은 훌륭했다.
belief|명|믿음, 신념|She has a strong belief in herself.|그녀는 자기 자신에 대한 믿음이 강하다.
community|명|공동체, 지역 사회|We cleaned the park for our community.|우리는 지역 사회를 위해 공원을 청소했다.
complete|동|완성하다, 끝마치다|I completed my homework early.|나는 숙제를 일찍 끝냈다.
condition|명|상태, 조건|The car is in good condition.|그 차는 상태가 좋다.
consist|동|(~으로) 이루어져 있다|The team consists of five members.|그 팀은 다섯 명으로 이루어져 있다.
contribute|동|기여하다|Everyone contributed to the project.|모두가 그 프로젝트에 기여했다.
crucial|형|매우 중요한|Sleep is crucial for memory.|잠은 기억에 매우 중요하다.
determine|동|결정하다, 알아내다|Genes determine eye color.|유전자는 눈 색깔을 결정한다.
distance|명|거리|The distance to school is 2 km.|학교까지의 거리는 2km이다.
emotion|명|감정|Music can change your emotions.|음악은 감정을 바꿀 수 있다.
energy|명|에너지, 기운|Solar energy is clean.|태양 에너지는 깨끗하다.
evidence|명|증거|There is no evidence of life on Mars.|화성에 생명체가 있다는 증거는 없다.
expect|동|기대하다, 예상하다|I didn't expect to see you here.|여기서 너를 볼 줄은 몰랐어.
factor|명|요인|Weather is a key factor in farming.|날씨는 농사의 핵심 요인이다.
feature|명|특징|This phone has many new features.|이 휴대폰에는 새로운 기능이 많다.
goal|명|목표|My goal is to read 30 books this year.|내 목표는 올해 책 30권을 읽는 것이다.
habit|명|습관|Reading every day is a good habit.|매일 책을 읽는 것은 좋은 습관이다.
identify|동|확인하다, 알아보다|Can you identify this bird?|이 새가 무슨 새인지 알아볼 수 있니?
imagine|동|상상하다|Imagine a world without phones.|휴대폰이 없는 세상을 상상해 봐.
individual|명|개인|Every individual is important.|모든 개인은 소중하다.
intend|동|의도하다, ~할 작정이다|I intend to study abroad.|나는 유학을 갈 생각이다.
limit|명|한계, 제한|There is a time limit of 50 minutes.|50분의 시간제한이 있다.
maintain|동|유지하다|Exercise helps maintain your health.|운동은 건강을 유지하는 데 도움이 된다.
material|명|재료, 자료|Wood is a natural material.|나무는 천연 재료이다.
measure|동|측정하다|We measured the room's size.|우리는 방의 크기를 측정했다.
memory|명|기억(력)|I have good memories of the trip.|나는 그 여행에 대한 좋은 기억이 있다.
mental|형|정신의|Mental health is as important as physical health.|정신 건강은 신체 건강만큼 중요하다.
object|명|물체, 목적|There is a strange object in the sky.|하늘에 이상한 물체가 있다.
observe|동|관찰하다|We observed the stars at night.|우리는 밤에 별을 관찰했다.
obvious|형|명백한|The answer is obvious.|답은 명백하다.
occur|동|일어나다, 발생하다|The accident occurred last night.|그 사고는 어젯밤에 일어났다.
offer|동|제공하다, 제안하다|They offered me a part-time job.|그들은 나에게 아르바이트를 제안했다.
origin|명|기원, 출신|What is the origin of this word?|이 단어의 기원은 무엇이니?
participate|동|참여하다|All students participated in the event.|모든 학생이 그 행사에 참여했다.
period|명|기간, 시대|We have a short period of rest.|우리는 짧은 휴식 기간이 있다.
physical|형|신체의, 물리적인|Physical activity is good for you.|신체 활동은 몸에 좋다.
population|명|인구|Seoul has a large population.|서울은 인구가 많다.
positive|형|긍정적인|Try to think positive thoughts.|긍정적인 생각을 하려고 노력해라.
possible|형|가능한|Is it possible to finish today?|오늘 끝내는 게 가능하니?
pressure|명|압력, 압박|Students feel a lot of pressure before exams.|학생들은 시험 전에 많은 압박을 느낀다.
process|명|과정|Learning is a slow process.|배움은 느린 과정이다.
quality|명|질, 품질|Quality is more important than quantity.|질이 양보다 중요하다.
range|명|범위|The test covers a wide range of topics.|시험은 넓은 범위의 주제를 다룬다.
rate|명|비율, 속도|The heart rate goes up when you run.|달리면 심박수가 올라간다.
recognize|동|알아보다, 인정하다|I didn't recognize you with glasses.|안경을 써서 너를 못 알아봤어.
recommend|동|추천하다|Can you recommend a good book?|좋은 책 좀 추천해 줄래?
region|명|지역|This region is famous for apples.|이 지역은 사과로 유명하다.
regular|형|규칙적인, 정기적인|Regular exercise keeps you healthy.|규칙적인 운동은 건강을 지켜 준다.
release|동|풀어 주다, 발표하다|The band released a new song.|그 밴드는 새 노래를 발표했다.
replace|동|대신하다, 교체하다|Robots may replace some jobs.|로봇이 일부 직업을 대신할지도 모른다.
represent|동|나타내다, 대표하다|The color red represents love.|빨간색은 사랑을 나타낸다.
resource|명|자원|Water is a precious resource.|물은 소중한 자원이다.
risk|명|위험|Smoking increases the risk of disease.|흡연은 질병의 위험을 높인다.
role|명|역할|Teachers play an important role.|선생님은 중요한 역할을 한다.
scene|명|장면|This is my favorite scene in the movie.|이건 영화에서 내가 가장 좋아하는 장면이다.
select|동|선택하다|Select one answer from below.|아래에서 답을 하나 고르세요.
sense|명|감각, 의미|Dogs have a good sense of smell.|개는 후각이 뛰어나다.
share|동|나누다, 공유하다|Let's share this pizza.|이 피자를 나눠 먹자.
similar|형|비슷한|My bag is similar to yours.|내 가방은 네 것과 비슷하다.
source|명|원천, 출처|The sun is a source of energy.|태양은 에너지의 원천이다.
specific|형|구체적인, 특정한|Give me a specific example.|구체적인 예를 들어 줘.
stress|명|스트레스, 강조|Exercise can reduce stress.|운동은 스트레스를 줄일 수 있다.
subject|명|과목, 주제|Math is my favorite subject.|수학은 내가 가장 좋아하는 과목이다.
suffer|동|고통받다|Many people suffer from allergies.|많은 사람들이 알레르기로 고생한다.
surface|명|표면|The surface of the moon is rough.|달의 표면은 거칠다.
surround|동|둘러싸다|Trees surround the lake.|나무들이 호수를 둘러싸고 있다.
temperature|명|온도|The temperature dropped below zero.|기온이 영하로 떨어졌다.
theory|명|이론|Einstein's theory changed science.|아인슈타인의 이론은 과학을 바꿨다.
traditional|형|전통적인|Hanbok is traditional Korean clothing.|한복은 한국의 전통 의상이다.
value|명|가치|Time has great value.|시간은 큰 가치가 있다.
visual|형|시각의|Visual information is easy to remember.|시각 정보는 기억하기 쉽다.
waste|동|낭비하다 (명: 쓰레기)|Don't waste your time.|시간을 낭비하지 마.
absorb|동|흡수하다|Plants absorb water through their roots.|식물은 뿌리로 물을 흡수한다.
accurate|형|정확한|The weather report was accurate.|일기 예보가 정확했다.
adapt|동|적응하다|Animals adapt to their environment.|동물은 환경에 적응한다.
admire|동|존경하다, 감탄하다|I admire my grandfather.|나는 할아버지를 존경한다.
anxious|형|불안한, 걱정하는|I felt anxious before the test.|시험 전에 불안했다.
apply|동|지원하다, 적용하다|She applied for the job.|그녀는 그 일자리에 지원했다.
appreciate|동|감사하다, 진가를 알다|I appreciate your help.|도와줘서 고마워.
approach|동|다가가다 (명: 접근법)|A cat approached me slowly.|고양이 한 마리가 천천히 다가왔다.
attach|동|붙이다, 첨부하다|Please attach the file to the email.|이메일에 파일을 첨부해 주세요.
attract|동|끌어당기다, 유치하다|Flowers attract bees.|꽃은 벌을 끌어들인다.
author|명|작가, 저자|Who is the author of this book?|이 책의 작가는 누구니?
calculate|동|계산하다|Calculate the area of the circle.|원의 넓이를 계산해라.
capable|형|~할 수 있는, 유능한|She is capable of winning.|그녀는 이길 수 있는 능력이 있다.
claim|동|주장하다|He claims that he saw a UFO.|그는 UFO를 봤다고 주장한다.
combine|동|결합하다|Combine the eggs and flour.|달걀과 밀가루를 섞어라.
comfortable|형|편안한|This chair is very comfortable.|이 의자는 아주 편안하다.
confident|형|자신감 있는|Be confident when you speak.|말할 때 자신감을 가져라.
conflict|명|갈등, 충돌|They solved the conflict by talking.|그들은 대화로 갈등을 해결했다.
convenient|형|편리한|Online shopping is convenient.|온라인 쇼핑은 편리하다.
curious|형|호기심이 많은|Children are curious about everything.|아이들은 모든 것에 호기심이 많다.
damage|명|손상, 피해|The storm caused a lot of damage.|폭풍이 많은 피해를 일으켰다.
decline|동|감소하다, 거절하다|Sales declined last month.|지난달 판매량이 감소했다.
deny|동|부인하다|He denied breaking the window.|그는 창문을 깬 것을 부인했다.
deserve|동|~할 자격이 있다|You deserve a rest.|너는 쉴 자격이 있어.
destroy|동|파괴하다|The fire destroyed the forest.|화재가 숲을 파괴했다.
detail|명|세부 사항|Tell me every detail.|모든 세부 사항을 말해 줘.
disappear|동|사라지다|The cat disappeared into the dark.|고양이가 어둠 속으로 사라졌다.
efficient|형|효율적인|This is an efficient way to study.|이것은 효율적인 공부 방법이다.
eliminate|동|없애다, 제거하다|We must eliminate mistakes.|우리는 실수를 없애야 한다.
emerge|동|나타나다, 드러나다|The sun emerged from the clouds.|해가 구름 사이로 나타났다.
enormous|형|거대한|An enormous whale appeared.|거대한 고래가 나타났다.
establish|동|설립하다, 확립하다|The school was established in 1950.|그 학교는 1950년에 설립되었다.
estimate|동|추정하다|I estimate it will take two hours.|두 시간 정도 걸릴 것으로 추정한다.
exhausted|형|기진맥진한|I was exhausted after the race.|경주 후에 나는 기진맥진했다.
expand|동|확장하다, 넓히다|The city is expanding quickly.|그 도시는 빠르게 확장되고 있다.
familiar|형|익숙한, 친숙한|This song sounds familiar.|이 노래는 익숙하게 들린다.
flexible|형|유연한|Our schedule is flexible.|우리 일정은 유연하다.
fundamental|형|근본적인, 기본적인|Reading is a fundamental skill.|독서는 기본적인 능력이다.
generate|동|발생시키다, 만들어 내다|Wind can generate electricity.|바람은 전기를 만들어 낼 수 있다.
grateful|형|고마워하는|I'm grateful for your support.|너의 지지에 감사해.
gradually|부|점차, 서서히|The weather gradually got warmer.|날씨가 점점 따뜻해졌다.
ignore|동|무시하다|Don't ignore your health.|건강을 무시하지 마라.
immediately|부|즉시|Call me immediately.|즉시 나에게 전화해.
impact|명|영향, 충격|The internet had a huge impact on society.|인터넷은 사회에 엄청난 영향을 미쳤다.
independent|형|독립적인|She wants to be independent.|그녀는 독립하고 싶어 한다.
investigate|동|조사하다|The police investigated the case.|경찰이 그 사건을 조사했다.
logical|형|논리적인|That's a logical answer.|그건 논리적인 대답이다.
moderate|형|적당한, 보통의|Moderate exercise is good for you.|적당한 운동은 몸에 좋다.
motivate|동|동기를 부여하다|Good grades motivate me.|좋은 성적은 나에게 동기를 준다.
negative|형|부정적인|Avoid negative thinking.|부정적인 생각을 피해라.
ordinary|형|평범한|It was an ordinary day.|평범한 하루였다.
persuade|동|설득하다|I persuaded my mom to buy a dog.|나는 엄마를 설득해서 개를 사게 했다.
predict|동|예측하다|No one can predict the future.|아무도 미래를 예측할 수 없다.
previous|형|이전의|I forgot the previous lesson.|이전 수업 내용을 잊어버렸다.
primary|형|주요한, 초등의|Our primary goal is safety.|우리의 주된 목표는 안전이다.
recover|동|회복하다|He recovered from the flu.|그는 독감에서 회복했다.
rely|동|의지하다, 믿다|You can rely on me.|나를 믿어도 돼.
rescue|동|구조하다|Firefighters rescued the child.|소방관들이 아이를 구조했다.
reveal|동|드러내다, 밝히다|The test revealed the truth.|그 검사가 진실을 밝혀냈다.
sufficient|형|충분한|We have sufficient time.|우리는 시간이 충분하다.
tolerate|동|참다, 견디다|I can't tolerate loud noise.|나는 시끄러운 소음을 못 참는다.
unique|형|독특한, 유일한|Everyone is unique.|모든 사람은 고유하다.
`;
/* ===== 🔤 영어 탐구실: 매일 단어 10개 + 간격 반복 복습 + 퀴즈 ===== */
const ENG_W = ENG_RAW.trim().split('\n').map(l => { const [w, p, m, e, k] = l.split('|'); return { w, p, m, e, k }; });
const FIG_ON = false;   // 🎁 단어 뽑기 · 피규어 · 진열장 (false = 꺼짐, true로 바꾸면 다시 켜져요)
const ENG_BOX = [0, 1, 2, 4, 7, 15];
// 📌 학원 단어시험 오답 노트 (다시 채점해서 틀린 단어 + 단어장 별표 단어). 틀리면 그날 바로 다시, 맞히면 1→2→4→7→15일 뒤
const MY_RAW = `
fertile|형|비옥한, 기름진|10/30 DAY39
grateful|형|감사하는, 고마워하는|10/30 DAY39
wage|명|임금, 급료|10/30 DAY39
cherish|동|소중히 여기다, 아끼다|11/2 DAY40
loan|명|대출, 융자; 빌려주다|11/2 DAY40
patient|명·형|환자; 참을성 있는|11/9 DAY45
fatal|형|치명적인|11/9 DAY45
crack|명·동|갈라진 금; 금이 가다|11/9 DAY45
variable|형·명|변하기 쉬운; 변수|11/9 DAY45
invert|동|뒤집다, 거꾸로 하다|11/9 DAY45
startle|동|깜짝 놀라게 하다|11/9 DAY45
stain|명·동|얼룩; 얼룩지게 하다|11/11 DAY47
weep|동|울다, 눈물을 흘리다|11/11 DAY47
summit|명|정상, 꼭대기; 정상 회담|11/11 DAY47
applause|명|박수(갈채)|11/11 DAY47
superstition|명|미신|11/11 DAY47
formulate|동|만들어 내다, 공식화하다|11/11 DAY47
dormitory|명|기숙사|11/11 DAY47
neutral|형|중립의|11/11 DAY47
vow|명·동|맹세; 맹세하다|11/11 DAY47
compulsive|형|강박적인, 억제하기 힘든|11/11 DAY47
alter|동|바꾸다, 변경하다|11/11 DAY47
retreat|동·명|후퇴하다; 후퇴|11/11 DAY47
shallow|형|얕은; 피상적인|11/11 DAY47
incentive|명|장려책, 동기|11/11 DAY47
banner|명|현수막, 배너|11/11 DAY47
durability|명|내구성|11/11 DAY47
heritage|명|유산|11/11 DAY47
absurd|형|터무니없는, 불합리한|11/11 DAY47
malnutrition|명|영양실조|11/11 DAY47
troop|명|군대, 무리|11/11 DAY47
dispatch|동|보내다, 파견하다|11/12 DAY48
remedy|명|치료(법); 해결책|11/12 DAY48
imprint|동·명|새기다, 각인시키다; 자국|11/12 DAY48
attend|동|참석하다; 주의를 기울이다|11/12 DAY48
draft|명|초안, 원고|11/12 DAY48
utmost|형|최고의, 최대한의|11/12 DAY48
violate|동|위반하다, 침해하다|11/12 DAY48
trim|동|다듬다, 손질하다|11/12 DAY48
subtract|동|빼다, 덜다|11/12 DAY48
equity|명|공평, 형평|11/12 DAY48
confine|동|제한하다, 가두다|11/12 DAY48
rigid|형|엄격한; 뻣뻣한|11/12 DAY48
archaeology|명|고고학|11/12 DAY48
intact|형|손상되지 않은, 온전한|11/12 DAY48
panel|명|토론자단, 패널|⭐ Word Master DAY30
flourish|동|번창하다, 번성하다|⭐ Word Master DAY30
discharge|명·동|배출, 방출; 내보내다, 해고하다|⭐ Word Master DAY30
undertake|동|착수하다, (일을) 떠맡다|⭐ Word Master DAY30
pledge|명·동|약속, 맹세; 약속하다|⭐ Word Master DAY30
mock|동·형|조롱하다; 가짜의|⭐ Word Master DAY30
disclose|동|드러내다, 폭로하다|⭐ Word Master DAY30
awkward|형|어색한, 서투른|⭐ Word Master DAY30
grind|동|갈다, 빻다|⭐ Word Master DAY30
script|명|대본; 손으로 쓰기|11/13 DAY49
sole|형|유일한|11/13 DAY49
temperate|형|(기후가) 온화한; 절제하는|11/13 DAY49
illuminate|동|비추다, 밝히다|11/5 보문고1 day1-2
take shape|동|형태를 갖추다, 구체화되다|11/5 보문고1 day1-2
specimen|명|표본, 견본|11/5 보문고1 day1-2
determined|형|단호한, 결심한|11/5 보문고1 day1-2
in progress|형|진행 중인|11/5 보문고1 day1-2
instrumental|형|중요한 역할을 하는|11/5 보문고1 day1-2
particle|명|입자, 미립자|11/5 보문고1 day1-2
distribute|동|분배하다, 나누어 주다|11/5 보문고1 day1-2
settle on|동|~으로 결정하다|11/5 보문고1 day1-2
bulky|형|부피가 큰|11/5 보문고1 day1-2
reflect on|동|되돌아보다, 곰곰이 생각하다|11/5 보문고1 day1-2
magnification|명|확대, 배율|11/5 보문고1 day1-2
proceed|동|진행하다, 나아가다|11/5 보문고1 day1-2
waterproof|형|방수의|11/5 보문고1 day1-2
medical condition|명|질환, 건강 상태|11/5 보문고1 day1-2
Antarctica|명|남극 대륙|11/5 보카파워 14-15
platform|명|승강장; 연단; 플랫폼|11/5 보카파워 14-15
demonstration|명|시연, 시범; 시위|11/5 보카파워 14-15
profile|명|옆모습, 윤곽; 개요|11/5 보카파워 14-15
devise|동|고안하다|11/5 보카파워 14-15
skyscraper|명|고층 건물|11/5 보카파워 14-15
swift|형|신속한, 빠른|11/5 보카파워 14-15
underlying|형|근본적인, 밑에 있는|11/5 보카파워 14-15
dome|명|돔, 둥근 지붕|11/5 보카파워 14-15
monitor|동|감시하다, 관찰하다|11/5 보카파워 14-15
landscape|명|풍경, 경치|11/5 보카파워 14-15
hoist|동|끌어올리다, 들어 올리다|11/5 보카파워 14-15
patent|명|특허(권)|11/5 보카파워 14-15
claw|명|발톱, 집게발|11/5 보카파워 14-15
mechanic|명|정비공|11/5 보카파워 14-15
brake|명·동|브레이크; 제동을 걸다|11/5 보카파워 14-15
persist|동|지속되다; 고집하다|11/13 보문고1 day1-8
originate|동|비롯되다, 유래하다|11/13 보문고1 day1-8
permit|동·명|허락하다; 허가증|11/13 보문고1 day1-8
contemporary|형|현대의; 동시대의|11/13 보문고1 day1-8
transition|명|전환, 이행|11/13 보문고1 day1-8
overdue|형|기한이 지난, 연체된|11/13 보문고1 day1-8
assert|동|주장하다|11/13 보문고1 day1-8
highly|부|매우, 대단히|11/13 보문고1 day1-8
infrastructure|명|사회 기반 시설|11/13 보문고1 day1-8
ethical|형|윤리적인|11/13 보문고1 day1-8
be comprised of|동|~으로 구성되다|11/13 보문고1 day1-8
organic|형|유기농의; 유기체의|11/13 보문고1 day1-8
aggregation|명|집합, 총계|11/13 보문고1 day1-8
fare|명|(교통) 요금|11/13 보문고1 day1-8
accountability|명|책임, 책무|11/13 보문고1 day1-8
physiologist|명|생리학자|11/13 보문고1 day1-8
household|명|가정, 가구|11/13 보문고1 day1-8
make the most of|동|~을 최대한 활용하다|11/13 보문고1 day1-8
minority|명|소수 (집단)|11/13 보문고1 day1-8
renewal|명|갱신, 재개|11/13 보문고1 day1-8
reach out|동|손을 뻗다; 연락하다, 도움을 주다|11/13 보문고1 day1-8
knot|명|매듭|11/13 보카파워 16-17
signify|동|의미하다; 중요하다|11/13 보카파워 16-17
harsh|형|가혹한, 혹독한|11/13 보카파워 16-17
fishery|명|어업; 어장|11/13 보카파워 16-17
officer|명|장교; 관리, 경찰관|11/13 보카파워 16-17
bulk|명|대부분; 큰 규모, 부피|11/13 보카파워 16-17
cruise|명·동|유람선 여행; 순항하다|11/13 보카파워 16-17
journal|명|일기; 학술지|11/13 보카파워 16-17
dump|동·명|버리다; 쓰레기 더미|11/13 보카파워 16-17
apprentice|명|견습생, 수습생|11/13 보카파워 16-17
servant|명|하인, 종|11/13 보카파워 16-17
hourglass|명|모래시계|11/13 보카파워 16-17
historian|명|역사가|11/13 보카파워 16-17
extract|동|추출하다, 뽑아내다|11/13 보카파워 16-17
incubation|명|부화; 잠복기|11/13 보카파워 16-17
bare|형|벌거벗은, 맨-; 텅 빈|11/13 보카파워 16-17
`;
const MY_W = MY_RAW.trim().split('\n').map(l => { const [w, p, m, src] = l.split('|'); return { w, p, m, e:'', k:'📝 ' + src, my:1 }; });
function myList(){ engSt.mine = engSt.mine || []; const base = (typeof amOwner !== 'undefined' && amOwner) ? MY_W : [], seen = {}; base.forEach(w => { seen[w.w.toLowerCase()] = 1; });
  return base.concat(engSt.mine.filter(o => !seen[o.w.toLowerCase()]).map(o => ({ w:o.w, p:'', m:o.m, e:'', k:'✏️ 내가 추가한 단어' + (o.d ? ' · ' + o.d : ''), my:1 }))); }
function myParse(txt){ const out = []; txt.split('\n').forEach(l => { l = l.trim(); if(!l) return; let m = /^([A-Za-z][A-Za-z '\-.]*?)\s*[-:|=\t~]\s*(.+)$/.exec(l) || /^([A-Za-z][A-Za-z'\-]*)\s+(.+)$/.exec(l); if(m && m[2].trim()) out.push({ w:m[1].trim().slice(0, 40), m:m[2].trim().slice(0, 60) }); }); return out; }
function myHome(){ engMode = 'my'; engStats(); const L = myList(), due = myDue().length, d = new Date(), mine = engSt.mine;
  engSet('<div class="eh">📌 내 오답 단어장</div><p class="etip">전체 ' + L.length + '개 · 오늘 외울 것 ' + due + '개 · 완전 암기 ' + myDone() + '개</p>'
    + '<button type="button" class="btn primary big" id="myGo"' + (due ? '' : ' disabled') + '>' + (due ? '📖 오답 외우기 (' + Math.min(15, due) + '개씩)' : (L.length ? '✅ 오늘 할 오답 끝! 내일 다시 나와요' : '아래에 틀린 단어를 먼저 넣어 주세요')) + '</button>'
    + '<div class="eh" style="font-size:14px">✏️ 시험에서 틀린 단어 넣기</div>'
    + '<textarea class="emyta" id="myTa" placeholder="한 줄에 하나씩 &#10;abolish - 폐지하다&#10;fertile - 비옥한"></textarea>'
    + '<button type="button" class="btn big" id="myAdd">➕ 단어장에 추가</button>'
    + (mine.length ? '<div class="eh" style="font-size:14px">내가 넣은 단어 ' + mine.length + '개</div><div class="emyl">' + mine.slice().reverse().map(o => '<div><b>' + escHtml(o.w) + '</b><span>' + escHtml(o.m) + '</span><button type="button" data-del="' + escHtml(o.w) + '" aria-label="지우기">✕</button></div>').join('') + '</div>' : '')
    + '<p class="etip">💡 틀린 단어는 그날 바로 다시 나오고, 맞히면 1→2→4→7→15일 뒤에 다시 나와요. 3번 연속 맞히면 완전 암기! (이 폰에 저장돼요)</p>'
    + '<button type="button" class="btn big" id="myBack">처음으로</button>');
  $('#myGo').onclick = () => engCards(myDue().slice(0, 15), 'my'); $('#myBack').onclick = engHome;
  $('#myAdd').onclick = () => { const add = myParse($('#myTa').value); if(!add.length){ toast('영어 - 뜻 형식으로 써 주세요'); return; } let n = 0; const today = (d.getMonth() + 1) + '/' + d.getDate();
    add.forEach(o => { const i = mine.findIndex(x => x.w.toLowerCase() === o.w.toLowerCase()); if(i >= 0) mine[i].m = o.m; else { mine.push({ w:o.w, m:o.m, d:today }); n++; } engSt.my = engSt.my || {}; delete engSt.my[o.w]; });
    engSave(); toast('📌 ' + add.length + '개 넣었어요' + (n < add.length ? ' (이미 있던 건 뜻만 바꿨어요)' : '')); myHome(); };
  document.querySelectorAll('#engBody [data-del]').forEach(b => b.onclick = () => { const w = b.dataset.del; engSt.mine = mine.filter(o => o.w !== w); if(engSt.my) delete engSt.my[w]; engSave(); myHome(); }); }
function myBox(w){ engSt.my = engSt.my || {}; return engSt.my[w.w]; }
function myDue(){ const t = dayNum(); return myList().filter(w => { const b = myBox(w); return !b || b.due <= t; }).sort((a, c) => ((myBox(a) || { b:-1 }).b - (myBox(c) || { b:-1 }).b) || (Math.random() - 0.5)); }
function myDone(){ return myList().filter(w => { const b = myBox(w); return b && b.b >= 3; }).length; }
function myMark(w, ok){ const t = dayNum(), b = myBox(w) || { b:0, due:t }; b.b = ok ? Math.min(5, b.b + 1) : 0; b.due = t + (ok ? ENG_BOX[b.b] : 0); engSt.my[w.w] = b; engSave(); }   // 외운 단계별 다음 복습까지 날짜 (라이트너 상자)
let engScene = null, engBoard = null, engBoardT = '', engLetters = [], engSt = null, engMode = '', engQ = null, engT = 0;
const dayNum = (d) => Math.floor(((d || new Date()) - new Date(2026, 10, 1))/864e5);
function engLoad(){ engSt = store.get('class8-eng', null) || {}; engSt.box = engSt.box || {}; engSt.days = engSt.days || {}; engSt.learned = engSt.learned || {}; engSt.figs = engSt.figs || {}; if(engSt.tk == null) engSt.tk = 1; return engSt; }
function engSave(){ store.set('class8-eng', engSt); }
function engToday(){ const n = ENG_W.length, d = ((dayNum()*10) % n + n) % n; return Array.from({ length:10 }, (_, i) => ENG_W[(d + i) % n]); }
function engDue(){ const t = dayNum(); return ENG_W.filter(w => engSt.box[w.w] && engSt.box[w.w].due <= t && !(engToday().some(v => v.w === w.w))); }
function engStreak(){ let s = 0, t = dayNum(); if(!engSt.days[t]) t--; while(engSt.days[t]){ s++; t--; } return s; }
function engMark(w, ok){ const t = dayNum(), b = engSt.box[w.w] || { b:0, due:t }; b.b = ok ? Math.min(5, b.b + 1) : 1; b.due = t + ENG_BOX[b.b]; engSt.box[w.w] = b; if(ok) engSt.learned[w.w] = 1; engSave(); }
function engSay(txt){ try { const u = new SpeechSynthesisUtterance(txt); u.lang = 'en-US'; u.rate = 0.9; const v = speechSynthesis.getVoices().find(v => /en[-_]US/i.test(v.lang)); if(v) u.voice = v; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch(e){} }
const engStem = w => w.slice(0, Math.max(3, w.length - 2));
function engHi(sent, word){ const mm = new RegExp('\\b' + engStem(word), 'i').exec(sent), i = mm ? mm.index : -1; if(i < 0) return escHtml(sent); const j = sent.indexOf(' ', i); const e = j < 0 ? sent.length : j; return escHtml(sent.slice(0, i)) + '<b>' + escHtml(sent.slice(i, e)) + '</b>' + escHtml(sent.slice(e)); }
function escHtml(s){ return String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c])); }
// ── 3D 방: 도서관 같은 공부방 + 칠판에 지금 단어 ──
function buildEng(){
  engScene = new THREE.Scene(); engScene.background = new THREE.Color('#1B1410'); engScene.fog = new THREE.Fog('#1B1410', 14, 30);
  engScene.add(new THREE.HemisphereLight('#FFE9C8', '#3A2A1E', 0.85)); const dl = new THREE.DirectionalLight('#FFF0D8', 0.55); dl.position.set(-4, 8, 6); engScene.add(dl);
  const add = (geo, m, x, y, z, ry) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); if(ry) o.rotation.y = ry; engScene.add(o); return o; };
  const fl = add(new THREE.PlaneGeometry(16, 14), mat('#8A5A36'), 0, 0, 0); fl.rotation.x = -Math.PI/2;
  for(let i=0;i<14;i++){ const ln = add(new THREE.PlaneGeometry(16, 0.03), mat('#6E4428'), 0, 0.005, -7 + i); ln.rotation.x = -Math.PI/2; }
  add(new THREE.PlaneGeometry(16, 6), mat('#2F4A3A'), 0, 3, -6); add(new THREE.PlaneGeometry(14, 6), mat('#334E3E'), -8, 3, 0, Math.PI/2); add(new THREE.PlaneGeometry(14, 6), mat('#334E3E'), 8, 3, 0, -Math.PI/2);
  add(new THREE.BoxGeometry(16, 1.1, 0.08), mat('#5A3A22'), 0, 0.55, -5.96);
  // 칠판
  add(new THREE.BoxGeometry(7.4, 3.4, 0.12), mat('#6B4A2C'), 0, 3.2, -5.9);
  const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 460; engBoard = { cv, tex:new THREE.CanvasTexture(cv) };
  add(new THREE.PlaneGeometry(7.0, 3.1), new THREE.MeshBasicMaterial({ map:engBoard.tex }), 0, 3.2, -5.83); engBoardDraw({ w:'English', m:'영어 탐구실', p:'', e:'One word a day keeps the F away.' });
  // 책장
  const bookGeo = new THREE.BoxGeometry(0.12, 0.5, 0.36), cols = ['#B23A3A', '#2E6FB0', '#E0A33A', '#3A8A5A', '#7A4AA8', '#D86A2A', '#EDE3CC', '#2A3A5A'];
  [[-5.6, -5.6, 0], [5.6, -5.6, 0], [-7.6, -2.5, Math.PI/2], [-7.6, 1.5, Math.PI/2], [7.6, -2.5, -Math.PI/2], [7.6, 1.5, -Math.PI/2]].forEach(([x, z, ry], si) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; engScene.add(g); const wood = mat('#5A3A22');
    const box = (w, h, d, px, py, pz) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wood); o.position.set(px, py, pz); g.add(o); };
    box(2.6, 0.08, 0.5, 0, 0.05, 0); for(let s=1;s<=5;s++) box(2.6, 0.06, 0.5, 0, s*0.78, 0); box(0.08, 4, 0.5, -1.3, 2, 0); box(0.08, 4, 0.5, 1.3, 2, 0); box(2.6, 4, 0.04, 0, 2, -0.24);
    const n = 5*17, im = new THREE.InstancedMesh(bookGeo, new THREE.MeshLambertMaterial(), n), m4 = new THREE.Matrix4(), c = new THREE.Color(); let k = 0;
    for(let s=0;s<5;s++){ let bx = -1.18; for(let b=0;b<17;b++){ const h = 0.38 + ((b*7 + s*3 + si) % 5)*0.05, w = 0.1 + ((b + s + si) % 3)*0.03; m4.makeScale(w/0.12, h/0.5, 1); m4.setPosition(bx + w/2, s*0.78 + 0.08 + h/2, 0.02); bx += w + 0.012;
      im.setMatrixAt(k, m4); im.setColorAt(k, c.set(cols[(b*3 + s*5 + si) % cols.length])); k++; } } im.instanceMatrix.needsUpdate = true; if(im.instanceColor) im.instanceColor.needsUpdate = true; g.add(im); });
  // 창문 (오후 햇살)
  [-1, 1].forEach(sd => { const w = add(new THREE.PlaneGeometry(2.4, 2.2), new THREE.MeshBasicMaterial({ map:cinTex(256, 240, (x, w2, h) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#7FB8F0'); g.addColorStop(1, '#FFE2B0'); x.fillStyle = g; x.fillRect(0, 0, w2, h); x.fillStyle = '#5A3A22'; x.fillRect(w2/2 - 4, 0, 8, h); x.fillRect(0, h/2 - 4, w2, 8); }) }), sd*7.95, 3.4, 4.2, -sd*Math.PI/2);
    const sun = add(new THREE.PlaneGeometry(2.4, 6), new THREE.MeshBasicMaterial({ color:'#FFE2A8', transparent:true, opacity:0.08, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide }), sd*6.2, 1.8, 4.2); sun.rotation.set(0, -sd*Math.PI/2, sd*0.6); });
  // 책상 · 스탠드
  for(let i=0;i<3;i++){ const x = -3 + i*3; add(new THREE.BoxGeometry(2.2, 0.08, 1.1), mat('#A8784A'), x, 0.78, 1.5); [[-1, -0.45], [1, -0.45], [-1, 0.45], [1, 0.45]].forEach(([a, b]) => add(new THREE.BoxGeometry(0.06, 0.78, 0.06), mat('#5A3A22'), x + a, 0.39, 1.5 + b));
    add(new THREE.BoxGeometry(0.5, 0.06, 0.36), mat(cols[i*2]), x - 0.5, 0.85, 1.4); const lp = add(new THREE.SphereGeometry(0.12, 12, 8), new THREE.MeshBasicMaterial({ color:'#FFE7A0' }), x + 0.7, 1.35, 1.25); }
  // 천장 등
  for(let i=0;i<3;i++){ const l = add(new THREE.SphereGeometry(0.25, 14, 10), new THREE.MeshBasicMaterial({ color:'#FFE2A8' }), -4 + i*4, 5.2, -1); add(new THREE.CylinderGeometry(0.01, 0.01, 0.8, 4), mat('#222'), -4 + i*4, 5.7, -1); }
  { const pl = new THREE.PointLight('#FFD9A0', 0.7, 14); pl.position.set(0, 4.5, -1); engScene.add(pl); }
  // 떠다니는 알파벳
  if(FIG_ON) buildGacha();
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((ch, i) => { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map:cinTex(96, 96, (x, w, h) => { x.font = '900 72px Georgia, serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = ['#FFE27A', '#9FD8FF', '#FFB3C8', '#B8F2C8'][i % 4]; x.shadowColor = x.fillStyle; x.shadowBlur = 14; x.fillText(ch, w/2, h/2 + 4); }), transparent:true, depthWrite:false }));
    sp.scale.setScalar(0.55); sp.userData = { a:i/26*Math.PI*2, r:3.4 + (i % 3)*0.9, y:2.2 + (i % 5)*0.55, s:0.1 + (i % 4)*0.03 }; engScene.add(sp); engLetters.push(sp); });
}
function engBoardDraw(w){ const key = w.w + w.m; if(engBoardT === key) return; engBoardT = key; const x = engBoard.cv.getContext('2d'), W2 = 1024, H2 = 460;
  x.fillStyle = '#1F3A2C'; x.fillRect(0, 0, W2, H2); x.globalAlpha = 0.06; for(let i=0;i<40;i++){ x.fillStyle = '#fff'; x.fillRect(Math.random()*W2, Math.random()*H2, 80 + Math.random()*200, 2); } x.globalAlpha = 1;
  x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#F4F1E6'; x.font = '700 120px Georgia, "Times New Roman", serif'; x.fillText(w.w, W2/2, 150);
  x.font = '700 50px "Noto Sans KR", sans-serif'; x.fillStyle = '#FFE27A'; x.fillText((w.p ? '(' + w.p + ') ' : '') + w.m, W2/2, 270);
  x.font = 'italic 34px Georgia, serif'; x.fillStyle = '#CFE8D8'; const e = w.e.length > 52 ? w.e.slice(0, 50) + '…' : w.e; x.fillText(e, W2/2, 370); engBoard.tex.needsUpdate = true; }
function enterEng(){
  if(!engScene) buildEng(); engLoad(); engLetters.forEach(s => s.visible = true); $('#engUI .etop b').textContent = '🔤 영어 탐구실';
  $('#panel').hidden = true; $('#joy').hidden = true; $('#engUI').hidden = false;
  Object.assign(camLim, { pmin:-0.3, pmax:0.6, dmin:6, dmax:12 }); cam.yaw = 0; cam.pitch = 0.08; cam.dist = 9.5; cam.t.set(0, 2.6, 0);
  engHome(); toast('🔤 영어 탐구실! 오늘의 단어 10개를 외우고 퀴즈로 확인해요');
}
function leaveEng(){ if(typeof histView !== 'undefined' && histView){ histView = ''; } $('#engUI').classList.remove('mini'); if(gacha){ gacha = null; if(gachaFig) gachaFig.visible = false; if(gachaRays) gachaRays.visible = false; $('#engUI').classList.remove('dim'); } $('#engUI').hidden = true; try { speechSynthesis.cancel(); } catch(e){} engQ = null; }
function engTick(dt){ engT += dt; engLetters.forEach(s => { const u = s.userData, a = u.a + engT*u.s; s.position.set(Math.cos(a)*u.r, u.y + Math.sin(engT*0.8 + u.a*3)*0.25, Math.sin(a)*u.r*0.6 - 1); });
  if(gacha) gachaTick(dt); else cam.yaw = Math.sin(engT*0.05)*0.12; }
// ── 화면 ──
function engSet(html){ $('#engBody').innerHTML = html; }
function engStats(){ const due = engDue().length; $('#engStat').innerHTML = '<span>🔥 연속 ' + engStreak() + '일</span><span>📚 외운 단어 ' + Object.keys(engSt.learned).length + '</span><span>🔁 복습 ' + due + '</span>'; }
function engHome(){ engMode = 'home'; engStats(); const t = dayNum(), done = !!engSt.days[t], due = engDue().length, d = new Date();
  engSet('<div class="eh">' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일 · 오늘의 단어 10개</div>'
    + '<div class="ewl">' + engToday().map(w => '<span class="' + (engSt.learned[w.w] ? 'ok' : '') + '">' + w.w + '</span>').join('') + '</div>'
    + '<button type="button" class="btn primary big" id="engGo">' + (done ? '✅ 오늘 완료! 한 번 더 보기' : '📖 오늘의 단어 외우기') + '</button>'
    + (function(){ const md = myDue().length; return '<button type="button" class="btn big gold" id="engMy">📌 내 오답 단어장' + (myList().length ? ' · 오늘 ' + md + '개 (완전 암기 ' + myDone() + '/' + myList().length + ')' : ' · 틀린 단어 넣기') + '</button>'; })()
    + '<button type="button" class="btn big" id="engRev"' + (due ? '' : ' disabled') + '>🔁 복습하기 ' + (due ? '(' + due + '개)' : '(오늘 복습 없음)') + '</button>'
    + (FIG_ON ? '<div class="erow2"><button type="button" class="btn big gold" id="engDraw">🎁 단어 뽑기 · 🎟 ' + (engSt.tk || 0) + '장</button><button type="button" class="btn big" id="engFigs">🏆 도감 ' + Object.keys(engSt.figs).length + '/12</button></div>' : '')
    + '<button type="button" class="btn big" id="engRec">📊 내 기록 · 우리 반</button>'
    + '<p class="etip">💡 외운 단어는 1일 → 2일 → 4일 → 7일 → 15일 뒤에 다시 나와요. 잊어버릴 때쯤 다시 보는 게 오래 기억하는 비법이에요 (에빙하우스 망각 곡선).</p>');
  $('#engGo').onclick = () => engCards(engToday(), 'today'); $('#engRev').onclick = () => engCards(engDue().slice(0, 15), 'review'); $('#engRec').onclick = engRecord; $('#engMy').onclick = myHome; if(FIG_ON){ $('#engDraw').onclick = figDraw; $('#engFigs').onclick = figBook; } }
function engCards(list, kind){ engMode = 'card'; let i = 0, flip = false; const again = [];
  const show = () => { if(i >= list.length){ if(again.length){ list = list.concat(again.splice(0)); } else { engQuiz(list.filter((w, k, a) => a.findIndex(v => v.w === w.w) === k), kind); return; } }
    const w = list[i]; engBoardDraw(w); flip = false;
    engSet('<div class="ebar"><i style="width:' + (i/list.length*100) + '%"></i></div><div class="eh">' + (kind === 'today' ? '오늘의 단어' : kind === 'my' ? '📌 오답 단어' : '복습') + ' ' + (i + 1) + ' / ' + list.length + '</div>'
      + '<div class="ecard" id="engCard"><div class="ef"><div class="ew">' + escHtml(w.w) + '</div><div class="ep">' + escHtml(w.p) + '</div><div class="etap">눌러서 뜻 보기</div></div>'
      + '<div class="eb"><div class="em">' + escHtml(w.m) + '</div><div class="ee">' + engHi(w.e, w.w) + '</div><div class="ek">' + escHtml(w.k) + '</div></div></div>'
      + '<div class="erow"><button type="button" class="btn" id="engSay">🔊 발음</button><button type="button" class="btn" id="engAgain">🔁 다시 볼래요</button><button type="button" class="btn primary" id="engOk">✅ 외웠어요</button></div>');
    engSay(w.w);
    $('#engCard').onclick = () => { flip = !flip; $('#engCard').classList.toggle('on', flip); if(flip) engSay(w.e || w.w); };
    $('#engSay').onclick = () => engSay(flip && w.e ? w.e : w.w);
    $('#engAgain').onclick = () => { again.push(w); i++; show(); };
    $('#engOk').onclick = () => { i++; show(); }; };
  show(); }
function engQuiz(list, kind){ engMode = 'quiz'; const qs = list.map((w, k) => { const type = w.e ? k % 3 : k % 2, others = (kind === 'my' && myList().length >= 4 ? myList() : ENG_W).filter(v => v.w !== w.w).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = [w].concat(others).sort(() => Math.random() - 0.5);
    if(type === 0) return { w, q:'<b class="qw">' + escHtml(w.w) + '</b><br>뜻은?', opts:opts.map(o => o.m), ans:w.m };
    if(type === 1) return { w, q:'<b class="qm">' + escHtml(w.m) + '</b><br>영어로?', opts:opts.map(o => o.w), ans:w.w };
    const blank = w.e.replace(new RegExp('\\b' + engStem(w.w) + '\\w*', 'i'), '_____');
    return { w, q:'빈칸에 들어갈 단어는?<br><span class="qe">' + escHtml(blank) + '</span>', opts:opts.map(o => o.w), ans:w.w }; });
  let i = 0, score = 0; engQ = qs;
  const show = () => { if(i >= qs.length){ engDone(score, qs.length, kind); return; } const q = qs[i]; engBoardDraw({ w:'Quiz ' + (i + 1), m:'정답을 골라 봐요', p:'', e:'You can do it!' });
    engSet('<div class="ebar"><i style="width:' + (i/qs.length*100) + '%"></i></div><div class="eh">✏️ 퀴즈 ' + (i + 1) + ' / ' + qs.length + ' · 맞힌 개수 ' + score + '</div><div class="eq">' + q.q + '</div><div class="eopts">'
      + q.opts.map((o, k) => '<button type="button" class="btn" data-k="' + k + '">' + escHtml(o) + '</button>').join('') + '</div>');
    document.querySelectorAll('.eopts .btn').forEach(b => b.onclick = () => { const ok = q.opts[+b.dataset.k] === q.ans; if(ok) score++; if(kind === 'my') myMark(q.w, ok); else engMark(q.w, ok);
      document.querySelectorAll('.eopts .btn').forEach(c => { c.disabled = true; if(q.opts[+c.dataset.k] === q.ans) c.classList.add('right'); }); if(!ok) b.classList.add('wrong');
      engBoardDraw(q.w); if(ok) engSay(q.w.w); setTimeout(() => { i++; show(); }, ok ? 650 : 1500); }); };
  show(); }
function engDone(score, n, kind){ const t = dayNum(), pass = score >= Math.ceil(n*0.7);
  let gotTk = false; if(kind === 'today' && pass){ engSt.days[t] = Math.max(engSt.days[t] || 0, score); if(FIG_ON && engSt.tkDay !== t){ engSt.tkDay = t; engSt.tk = (engSt.tk || 0) + 1; gotTk = true; } engSave(); lastSent = ''; pushPresence(); }
  engStats(); const st = engStreak();
  engSet('<div class="edone">' + (pass ? '🎉' : '💪') + '</div><div class="eh">' + n + '문제 중 ' + score + '개 맞혔어요!</div>'
    + (kind === 'today' ? (pass ? '<p class="etip">오늘의 단어 완료! 🔥 연속 ' + st + '일째예요. 틀린 단어는 내일 복습에 다시 나와요.</p>' : '<p class="etip">7개 이상 맞히면 오늘 완료로 기록돼요. 한 번 더 해 볼까요?</p>') : kind === 'my' ? '<p class="etip">📌 틀린 단어는 오늘 바로 다시 나오고, 맞힌 단어는 1→2→4→7→15일 뒤에 다시 나와요. 오늘 남은 오답 ' + myDue().length + '개 · 완전 암기 ' + myDone() + '/' + myList().length + '</p>' + (myDue().length ? '<button type="button" class="btn primary big" id="engMy2">📌 오답 단어 계속하기</button>' : '') : '<p class="etip">복습 완료! 맞힌 단어는 더 오래 뒤에 다시 나와요.</p>')
    + (gotTk ? '<p class="etip" style="color:#FFE27A;font-weight:800">🎟 단어 뽑기권 1장을 받았어요!</p><button type="button" class="btn primary big" id="engDraw2">🎁 지금 뽑기</button>' : '')
    + '<button type="button" class="btn' + (gotTk ? '' : ' primary') + ' big" id="engHome">처음으로</button>');
  $('#engHome').onclick = kind === 'my' ? myHome : engHome; if($('#engMy2')) $('#engMy2').onclick = () => engCards(myDue().slice(0, 15), 'my'); if($('#engDraw2')) $('#engDraw2').onclick = figDraw; if(pass){ toast(kind === 'today' ? '🔥 오늘의 영단어 완료! 연속 ' + st + '일' : '🔁 복습 완료!'); } }
function engRecord(){ engMode = 'rec'; const t = dayNum(); let cal = ''; for(let k=13;k>=0;k--){ const d = new Date(Date.now() - k*864e5); cal += '<span class="' + (engSt.days[t - k] ? 'on' : '') + '">' + d.getDate() + '</span>'; }
  const mates = []; remotes.forEach(r => { if(r.av.ew) mates.push([r.av.name, r.av.ew, r.av.es || 0]); }); if(engSt.days[t]) mates.push([me.name + ' (나)', 10, engStreak()]);
  mates.sort((a, b) => b[2] - a[2]);
  engSet('<div class="eh">📊 최근 14일</div><div class="ecal">' + cal + '</div><div class="eh">👥 오늘 단어를 끝낸 친구 (접속 중)</div>'
    + (mates.length ? '<div class="emates">' + mates.map(m => '<div><b>' + escHtml(m[0]) + '</b><span>🔥 ' + m[2] + '일</span></div>').join('') + '</div>' : '<p class="etip">아직 없어요. 오늘 1등으로 끝내 봐요!</p>')
    + '<div class="eh">📚 외운 단어 ' + Object.keys(engSt.learned).length + ' / ' + ENG_W.length + '</div><div class="ebar"><i style="width:' + (Object.keys(engSt.learned).length/ENG_W.length*100) + '%"></i></div>'
    + '<button type="button" class="btn big" id="engHome">처음으로</button>'); $('#engHome').onclick = engHome; }
/* 🏯 한국사 탐구실: 교과서 Ⅱ. 대한민국의 발전(74~118쪽) 카드 + 연표 순서 퀴즈. 영어 탐구실(서재)을 같이 쓰고 기록은 이 폰에만 저장 (Firebase 규칙 변경 없음) */
const HIST_SEC = { A:'1-1 8·15 광복과 정부 수립 운동', B:'1-2 통일 정부 수립을 위한 노력', C:'1-3 대한민국 정부 수립', D:'1-4 반민 특위와 농지 개혁', E:'2-1 6·25 전쟁', F:'2-2 전쟁의 상처와 분단 고착화', G:'3-1 4·19 혁명', H:'3-2 5·16과 유신 체제', I:'3-3 신군부와 5·18', J:'3-4 6월 민주 항쟁', K:'4-1 경제 개발과 산업화', L:'4-2 경제 성장과 사회 변화' };
const HIST_RAW = `
A|제2차 세계 대전 이후 미국 중심 자본주의 진영과 소련 중심 공산주의 진영이 직접 전쟁 없이 대립한 상황은?|냉전|X|두 진영은 세계 여러 곳에서 대립했지만 직접적인 무력 전쟁은 하지 않았다.
A|미국 트루먼 대통령이 공산주의 확대를 막겠다는 정책을 담아 발표한 것(1947)은?|트루먼 독트린|L|이 발표로 두 진영의 긴장이 뚜렷해졌다.
A|냉전 속에서 미국이 창설한 군사 기구는?|북대서양 조약 기구(NATO)|O|소련은 바르샤바 조약 기구(WTO)로 맞섰다.
A|냉전 속에서 소련이 미국에 맞서 창설한 군사 기구는?|바르샤바 조약 기구(WTO)|O|미국의 NATO에 대응하였다.
A|중국 국공 내전에서 국민당에 승리한 공산당이 세운 나라(1949)는?|중화 인민 공화국|O|마오쩌둥이 수립을 선포했다.
A|6·25 전쟁이 일어나자 미국이 일본에 대해 추진한 것은?|일본의 재무장|L|미국은 일본을 공산주의에 맞서는 반공 국가로 만들려 했다.
A|광복 후 미군과 소련군이 일본군 무장 해제를 위해 경계로 삼은 선은?|38도선|X|처음에는 미군과 소련군의 일시적인 점령 지역 구분선이었다.
A|광복 직전 한반도에 들어와 평양에서 38도선 이북의 행정권을 접수한 군대는?|소련군|O|행정권을 인민 위원회에 넘긴 뒤 자국에 유리하게 영향력을 행사했다.
A|광복 직후 전국 각지에 조직된 민간 자치 기구로, 소련군이 북한에서 행정권을 넘겨준 곳은?|인민 위원회|O|그 결과 북한은 소련의 지원을 받는 김일성 세력이 권력을 주도했다.
A|소련보다 늦게 들어온 미군이 38도선 이남에서 택한 통치 방식은?|미군정을 통한 직접 통치|L|대한민국 임시 정부 등은 자격을 인정받지 못했다.
A|미군정이 통치를 위해 일정 기간 유지한 조직은?|조선 총독부 조직|L|이 때문에 피신했던 친일 관료들이 다시 돌아오기도 했다. 한국 민주당 인사들도 활용했다.
A|"북위 38도선 이남의 통치는 당분간 본관의 권한 아래에서 시행한다"는 포고령 제1호를 발표한 사람은?|맥아더|P|태평양 미 육군 총사령관 맥아더 포고령 제1호(1945.9.9).
A|광복 직후 조선 총독부의 치안권을 넘겨받고 조선 건국 준비 위원회를 만든 사람은?|여운형|P|안재홍 등과 함께 조선 건국 동맹을 중심으로 좌우 세력을 연합했다.
A|여운형이 좌우 세력을 연합해 만들고, 전국에 지부와 치안대를 두어 질서를 유지한 단체는?|조선 건국 준비 위원회|O|좌익이 주도권을 잡자 안재홍 등 민족주의 세력이 탈퇴했다.
A|조선 건국 준비 위원회가 미군 진주 전에 선포하고, 지부를 인민 위원회로 바꾼 것은?|조선 인민 공화국|O|미군정은 조선 인민 공화국을 인정하지 않았다.
A|송진우, 김성수 등 지주·자본가 출신 우익 세력이 만들고 임시 정부 지지를 선언한 정당은?|한국 민주당|O|미군정과 가까웠다.
A|이승만이 귀국 후 조직하여 완전 독립, 38도선 철폐 등을 주장한 단체는?|독립 촉성 중앙 협의회|O|
A|김구 등 대한민국 임시 정부 요인들이 개인 자격으로 귀국해 활동한 정당은?|한국 독립당|O|미군정 방침 때문에 개인 자격으로 귀국했다.
A|조선 공산당이 좌익 정당들을 통합해 바꾼 정당은?|남조선 노동당|O|대표 인물은 박헌영이다.
A|1946년 김구 주도로 유해를 모셔 와 효창 공원에 안장한 세 의사는?|이봉창, 윤봉길, 백정기|P|"조국의 자주독립이 오거든 나의 유골을…"은 백정기의 유언이다.
B|1945년 12월 미국·영국·소련 외무 장관이 한국 문제를 논의한 회의는?|모스크바 3국 외상 회의|E|임시 민주 정부 수립, 미소 공동 위원회 설치, 최대 5년 신탁 통치를 결정했다.
B|모스크바 3국 외상 회의에서 결정한 신탁 통치의 최대 기간은?|5년|Y|미·영·중·소 4개국이 최대 5년간 신탁 통치하기로 했다.
B|모스크바 3국 외상 회의 소식에 김구·이승만 등 우익 세력이 벌인 운동은?|신탁 통치 반대 운동(반탁 운동)|E|
B|좌익 세력이 처음엔 반대하다가 '임시 정부 수립이 핵심'이라며 바꾼 입장은?|모스크바 3국 외상 회의 결정 총체적 지지|X|이후 좌우 대립이 심해졌다.
B|동아일보가 모스크바 3국 외상 회의를 잘못 보도한 내용은?|소련은 신탁 통치, 미국은 즉시 독립을 주장했다|X|실제와 다른 보도로 반탁 운동이 거세졌다.
B|1946년 3월 모스크바 결정을 실행하려고 열린 회의는?|제1차 미소 공동 위원회|E|임시 정부 수립을 위한 협의 대상 단체 문제로 대립하다 결렬됐다.
B|제1차 미소 공동 위원회가 결렬된 가장 큰 쟁점은?|임시 정부 수립에 참여할 협의 대상 단체 문제|X|소련은 모스크바 결정을 지지하는 단체만, 미국은 모든 정치 세력을 주장했다.
B|이승만이 남한만이라도 임시 정부를 세우자고 주장한 발언(1946.6)은?|정읍 발언|E|
B|여운형·김규식 등 중도 세력이 미군정 지원 속에 조직한 단체(1946.7)는?|좌우 합작 위원회|O|
B|좌우 합작 위원회가 1946년 10월 발표한 원칙은?|좌우 합작 7원칙|L|토지는 몰수·유조건 몰수·체감 매상으로 농민에게 무상 분여, 친일파 처리 등을 담았다.
B|좌우 합작 7원칙의 토지 개혁 방식은?|몰수·유조건 몰수·체감 매상 → 무상 분여|L|좌익은 무상 몰수·무상 분배, 우익은 유상 매입·유상 분배를 주장했다.
B|좌우 합작 운동이 사실상 중단된 결정적 계기는?|여운형 암살|E|좌우 주요 세력이 불참하고 미군정도 지원을 철회했다.
B|1947년 5월 다시 열렸지만 결렬된 회의는?|제2차 미소 공동 위원회|E|이후 미국은 한국 문제를 유엔으로 넘겼다.
B|1947년 11월 유엔 총회가 결정한 내용은?|인구 비례에 따른 남북한 총선거|L|이를 위해 유엔 한국 임시 위원단을 파견했다.
B|유엔 한국 임시 위원단의 38도선 이북 입국을 거부한 쪽은?|소련과 북한|O|
B|1948년 2월 유엔 소총회가 결정한 내용은?|선거가 가능한 지역(남한)만의 총선거|L|남한 단독 선거가 결정됐다.
B|1948년 4월 김구·김규식이 평양에 가서 통일 정부 수립을 논의한 것은?|남북 협상|E|남한 단독 선거 반대, 미소 양군 철수 등을 결의했지만 실패했다.
B|"나는 통일된 조국을 건설하려다가 38도선을 베고 쓰러질지언정…"이라고 말한 사람은?|김구|P|「삼천만 동포에게 읍고함」(1948)
B|1948년 4월 3일 제주도에서 남한 단독 선거 반대 등을 내걸고 일어난 봉기와 진압 과정은?|제주 4·3 사건|E|1947년 3·1절 기념 대회 경찰 발포가 배경이었고, 진압 과정에서 많은 제주도민이 희생됐다.
B|제주 4·3 사건의 배경이 된 1947년의 일은?|3·1절 기념 대회에서 경찰 발포|E|
B|제주도 진압 출동 명령을 거부한 군대 안 좌익 세력이 일으킨 사건은?|여수·순천 10·19 사건|E|
C|1948년 5월 10일 실시된 우리나라 최초의 민주적 선거는?|5·10 총선거|E|21세 이상 모든 국민에게 선거권, 보통·평등·비밀·직접 선거.
C|5·10 총선거의 4대 원칙은?|보통·평등·비밀·직접 선거|L|
C|5·10 총선거에 참여하지 않은 세력은?|김구·김규식 등 남북 협상파와 좌익 세력|O|
C|5·10 총선거에서 제주도 두 곳의 투표가 제대로 안 된 이유는?|제주 4·3 사건의 영향|X|그래서 198명이 국회 의원으로 뽑혔다.
C|5·10 총선거로 뽑힌 국회 의원 수는?|198명|Y|
C|5·10 총선거로 구성되어 헌법을 만든 국회는?|제헌 국회|O|국호를 대한민국으로 정하고 임시 정부의 법통 계승을 밝혔다.
C|제헌 헌법이 공포된 날은?|1948년 7월 17일|Y|대통령 중심제, 대통령·부통령은 국회에서 간접 선거.
C|제헌 헌법에서 대통령을 뽑는 방법은?|국회에서 간접 선거|L|
C|제헌 국회가 뽑은 초대 대통령과 부통령은?|이승만, 이시영|P|
C|대한민국 정부 수립을 국내외에 선포한 날은?|1948년 8월 15일|Y|
C|1948년 12월 유엔 총회가 대한민국 정부에 대해 결정한 것은?|한반도의 유일한 합법 정부로 승인|L|
C|제헌 헌법이 계승한다고 밝힌 것은?|대한민국 임시 정부의 법통(3·1 운동 정신)|L|
C|1946년 2월 김일성을 위원장으로 조직되어 북한에서 사실상 정부 역할을 한 기구는?|북조선 임시 인민 위원회|O|
C|북한의 토지 개혁 방식은?|무상 몰수, 무상 분배|L|북조선 임시 인민 위원회가 실시했고, 주요 산업도 국유화했다.
C|1948년 2월 북한에서 창설된 군대는?|조선 인민군|O|
C|1948년 9월 9일 김일성을 수상으로 수립된 북한 정권은?|조선 민주주의 인민 공화국|O|
D|1948년 9월 제헌 국회가 친일파를 처벌하려고 만든 법은?|반민족 행위 처벌법(반민법)|L|
D|반민법에 따라 친일파를 조사하려고 국회에 설치한 기구는?|반민족 행위 특별 조사 위원회(반민 특위)|O|특별 재판부도 설치했다.
D|반민 특위가 1949년 1월부터 체포·조사한 인물로 알맞은 것은?|이광수, 최남선, 최린 등|P|
D|반민 특위에 대한 이승만 정부의 태도는?|반공 우선, 반민 특위에 비협조|X|경찰의 반민 특위 사무실 습격, 국회 프락치 사건, 공소 시효 단축이 이어졌다.
D|1949년 6월 반민 특위 사무실을 습격한 쪽은?|일부 경찰|O|
D|국회가 반민법의 공소 시효를 줄인 결과는?|1950년 9월 → 1949년 8월로 단축, 반민 특위 해체|X|친일파 청산이 좌절됐다.
D|미군정이 일본인 소유 토지를 관리하려고 만든 회사는?|신한 공사|O|이후 중앙 토지 행정처가 이 토지를 농민에게 매각했다.
D|제헌 국회가 제정(1949)하고 이듬해 시행한 토지 개혁 법은?|농지 개혁법|L|
D|남한 농지 개혁의 방식은?|유상 매입, 유상 분배|L|북한(무상 몰수·무상 분배)과 비교해서 외우기!
D|농지 개혁법에서 한 가구가 가질 수 있는 농지 상한은?|3정보|Y|3정보를 넘는 농지를 정부가 사들였다. 1정보는 약 3,000평.
D|농지 개혁 때 정부가 지주에게 토지값으로 준 것은?|지가 증권|L|
D|농지 개혁의 결과는?|지주제 소멸, 자작농 증가|X|하지만 농민은 상환 부담, 지주는 지가 증권 가치 하락을 겪었다.
E|1950년 1월 미국 국무 장관이 발표해 한국이 미국 방위선에서 빠진 선언은?|애치슨 선언|L|방위선: 알류샨 열도-일본-오키나와-필리핀.
E|애치슨 선언 이후에도 미국이 남한을 지원할 근거가 된 협정(1950.1)은?|한미 상호 방위 원조 협정|L|
E|6·25 전쟁 전 북한이 북한군으로 편입한 병력은?|중국 국공 내전에 참전한 조선 의용군|O|김일성은 소련에서 무기 지원을 약속받고 중국과 군사 비밀 협정을 맺었다.
E|정부 수립 후 이승만 정부가 내세운 통일 주장은?|북진 통일|L|
E|6·25 전쟁이 일어난 날은?|1950년 6월 25일|Y|북한군이 38도선을 넘어 기습 남침, 3일 만에 서울 함락.
E|북한군에 밀려 국군이 마지막으로 지킨 방어선은?|낙동강 전선|X|임시 수도는 대전 → 대구 → 부산으로 옮겨졌다.
E|북한 공격을 침략으로 규정하고 유엔군 파병을 결의한 곳은?|유엔 안전 보장 이사회|O|미국 등 16개국이 참전했다.
E|1950년 9월 15일 전세를 뒤집은 작전은?|인천 상륙 작전|E|9월 28일 서울 수복, 10월 평양 점령, 압록강까지 진격.
E|국군과 유엔군이 압록강까지 진격한 뒤 전세가 다시 바뀐 이유는?|중국군 참전|E|1950년 10월
E|중국군 공세로 1951년 1월 서울을 다시 빼앗긴 일은?|1·4 후퇴|E|그전 1950년 12월에는 흥남 철수가 있었다.
E|국군과 유엔군이 서울을 재수복한 때는?|1951년 3월|Y|이후 38도선 부근에서 전선이 굳어졌다.
E|전선이 교착되자 소련의 제의로 정전 회담이 시작된 때는?|1951년 7월|Y|이승만 정부는 휴전을 반대하고 북진 통일을 주장했다.
E|정전 회담에서 가장 큰 쟁점이었던 문제는?|포로 송환 문제|X|미국은 자유 송환, 북한·중국은 자동(강제) 송환을 주장했다.
E|정전 회담 중 이승만 정부가 일방적으로 한 일은?|반공 포로 석방|E|
E|정전 협정이 체결된 날은?|1953년 7월 27일|Y|유엔군·북한군·중국군이 서명, 비무장 지대(DMZ) 설치.
E|정전 협정 뒤 한국과 미국이 맺어 미군이 한국에 머물게 된 조약(1953.10)은?|한미 상호 방위 조약|L|
F|6·25 전쟁 중 북한에 협조할 수 있다는 이유로 학살당한 사람들은?|국민 보도 연맹원|O|
F|6·25 전쟁 때 큰 경제적 이익(전쟁 특수)을 얻은 나라는?|일본|X|1951년 샌프란시스코 강화 조약으로 주권을 되찾았다.
F|일본이 연합국과 맺어 주권을 회복한 조약(1951)은?|샌프란시스코 강화 조약|L|
F|1952년 임시 수도 부산에서 국회 의원들을 탄압하며 대통령 직선제로 바꾼 개헌은?|발췌 개헌|L|부산 정치 파동 속에서 통과됐다.
F|발췌 개헌 당시 국회 의원을 탄압한 사건은?|부산 정치 파동|E|
F|초대 대통령에 한해 3선 금지 조항을 없앤 개헌(1954)은?|사사오입 개헌|L|135.333…표를 반올림해 135표로 통과시켰다.
F|1956년 대통령 선거에서 많은 표를 얻은 진보당 후보는?|조봉암|P|부통령에는 민주당 장면이 당선됐다.
F|1956년 선거에서 부통령으로 당선된 민주당 인물은?|장면|P|
F|조봉암과 진보당 간부들이 간첩 혐의를 받은 사건은?|진보당 사건|E|조봉암은 사형됐고 2011년 재심에서 무죄 판결을 받았다.
F|이승만 정부가 1959년 폐간시킨 정부 비판 신문은?|경향신문|O|국가 보안법도 개정했다.
F|6·25 전쟁 후 북한 김일성이 전쟁 실패 책임을 물어 숙청한 세력은?|남로당 계열(박헌영 등)|O|이후 연안파·소련파도 제거하고 1인 독재를 굳혔다.
F|1950년대 후반 북한이 노동력을 동원해 생산을 늘리려고 벌인 운동은?|천리마 운동|E|
F|6·25 전쟁 후 북한이 만든 경제 체제는?|사회주의 경제 체제(농업 협동화, 상공업 국영화)|L|
G|1960년 이기붕을 부통령에 당선시키려고 벌인 부정 선거는?|3·15 부정 선거|E|4할 사전 투표, 3~9인조 공개 투표, 투표함 바꿔치기 등.
G|1960년 선거 직전 사망한 민주당 대통령 후보는?|조병옥|P|
G|3·15 부정 선거 당일 선거 무효 시위가 일어나고, 뒤에 김주열의 시신이 발견된 곳은?|마산|X|
G|최루탄에 맞아 숨진 채 발견되어 시위를 전국으로 퍼지게 한 학생은?|김주열|P|
G|1960년 4월 19일 학생과 시민이 이승만 정권에 맞선 민주 혁명은?|4·19 혁명|E|대학교수단 시국 선언 → 이승만 하야.
G|4·19 혁명 뒤 허정 과도 정부가 바꾼 정치 제도는?|내각 책임제와 양원제 국회|L|
G|4·19 혁명 후 대통령과 국무총리는?|윤보선 대통령, 장면 국무총리|P|민주당 정부(장면 내각)
G|장면 내각이 제대로 해결하지 못한 문제는?|부정 선거 관련자 처벌 소극적, 민주당 신·구파 분열|X|그러나 4·19 이후 학원 민주화, 교원 노조, 남북 학생 회담 요구 등이 터져 나왔다.
H|1961년 5월 16일 박정희 등 일부 군인이 일으킨 사건은?|5·16 군사 정변|E|혁명 공약에서 반공을 국시로 내세웠다.
H|5·16 군사 정변 뒤 최고 통치 기구는?|국가 재건 최고 회의|O|중앙정보부도 만들었다.
H|5·16 뒤 정보·감시를 맡은 기구는?|중앙정보부|O|
H|박정희가 처음 대통령에 당선된 해는?|1963년|Y|제5대 대통령, 민주 공화당 후보.
H|한일 국교 정상화를 위한 비밀 회담(1962) 두 사람은?|김종필, 오히라|P|김종필·오히라 메모
H|한일 회담을 '굴욕 외교'라며 반대한 시위(1964)는?|6·3 시위|E|정부는 비상계엄으로 진압했다.
H|1965년 일본과 국교를 맺은 조약은?|한일 기본 조약|L|식민 지배 사과와 배상 문제가 남았다.
H|베트남 파병 대가로 미국이 국군 현대화와 경제 원조를 약속한 문서(1966)는?|브라운 각서|L|
H|1968년 북한 특수 부대가 청와대를 습격하려 한 사건은?|1·21 사태|E|이후 향토 예비군이 창설됐다.
H|1968년 미국 정보함이 북한에 나포된 사건은?|푸에블로호 피랍 사건|E|
H|대통령 3회 연임을 허용한 개헌(1969)은?|3선 개헌|L|
H|1971년 대통령 선거에서 박정희와 겨룬 야당 후보는?|김대중|P|
H|미국 닉슨 대통령이 "아시아 방위는 아시아인 스스로"라고 한 발표(1969)는?|닉슨 독트린|L|냉전 완화(데탕트)의 계기.
H|자주·평화·민족적 대단결의 통일 3대 원칙을 밝힌 것(1972)은?|7·4 남북 공동 성명|L|
H|대통령을 통일 주체 국민 회의에서 뽑고 임기 6년·중임 제한이 없는 헌법은?|유신 헌법|L|1972년. 국회 의원 3분의 1 추천권, 긴급 조치권, 국회 해산권.
H|유신 헌법에서 대통령을 뽑는 기구는?|통일 주체 국민 회의|O|
H|유신 헌법에서 대통령의 임기는?|6년(중임 제한 없음)|Y|
H|유신 정권이 내세운 민주주의는?|한국적 민주주의|X|
H|1973년 일어나 유신 반대 운동이 커지는 계기가 된 사건은?|김대중 납치 사건|E|장준하 등이 개헌 청원 100만 인 서명 운동을 벌였다.
H|유신 반대 운동을 탄압한 대통령의 특별 명령은?|긴급 조치|L|
H|1974년 유신 정부가 학생들을 탄압한 사건은?|민청학련 사건|E|
H|1974년 8명이 사형되고 2007년 재심에서 무죄가 된 사건은?|인혁당 재건위 사건|E|
H|1976년 재야 인사들이 명동 성당에서 발표한 유신 반대 선언은?|3·1 민주 구국 선언|L|
H|1979년 여성 노동자들이 회사 폐업에 항의해 신민당사에서 농성한 사건은?|YH 무역 사건|E|경찰이 강제 진압했다.
H|YH 무역 사건을 비판한 신민당 총재가 국회에서 제명된 사람은?|김영삼|P|
H|1979년 부산과 마산에서 일어난 유신 반대 시위는?|부마 민주 항쟁|E|
H|1979년 중앙정보부장 김재규가 박정희를 살해한 사건은?|10·26 사태|E|유신 체제가 무너졌다.
I|1979년 전두환·노태우 등 신군부가 군사 반란으로 권력을 잡은 사건은?|12·12 사태|E|
I|1980년 봄 학생과 시민들이 유신 헌법 폐지와 계엄 해제를 요구한 상황은?|서울의 봄|E|
I|1980년 5월 17일 신군부가 한 일은?|비상계엄 전국 확대|E|국회 폐쇄, 김대중 등 체포, 대학 휴교령.
I|1980년 광주에서 계엄군 진압에 맞서 일어난 민주화 운동은?|5·18 민주화 운동|E|5월 21일 계엄군 발포 → 시민군, 2011년 유네스코 세계 기록 유산.
I|5·18 민주화 운동 기록물이 등재된 것은?|유네스코 세계 기록 유산(2011)|L|
I|5·18 이후 미국의 책임을 물으며 일어난 사건(1982)은?|부산 미국 문화원 방화 사건|E|
I|5·18 진압 후 신군부가 만든 권력 기구는?|국가 보위 비상 대책 위원회(국보위)|O|삼청 교육대, 언론 통폐합.
I|전두환 정부가 언론 보도를 통제하려고 내린 지침은?|보도 지침|L|
I|전두환 정부 헌법에서 대통령 임기와 선출 방식은?|7년 단임, 대통령 선거인단 간접 선거|L|
I|전두환 정부의 대표적인 유화 정책은?|야간 통행금지 해제, 교복 자율화, 프로 스포츠|L|
I|1981년 전두환 정부가 연 대규모 문화 행사는?|국풍 81|E|
J|1986년 1천만 명 서명 운동으로 요구한 것은?|대통령 직선제 개헌|L|
J|1987년 1월 서울대생이 경찰 조사 중 숨진 사건은?|박종철 고문치사 사건|E|
J|1987년 전두환이 직선제 개헌 논의를 중단한다고 발표한 것은?|4·13 호헌 조치|L|
J|6월 민주 항쟁을 이끈 범국민 단체는?|민주 헌법 쟁취 국민운동 본부|O|
J|1987년 6월 9일 시위 중 최루탄에 맞아 쓰러진 학생은?|이한열|P|
J|1987년 6월 '호헌 철폐, 독재 타도'를 외친 전국적 시위는?|6월 민주 항쟁|E|
J|노태우가 대통령 직선제 개헌을 받아들인다고 발표한 것은?|6·29 민주화 선언|L|이후 5년 단임 대통령 직선제 헌법이 만들어졌다.
J|6월 민주 항쟁으로 만들어진 헌법의 대통령 선출 방식은?|5년 단임 대통령 직선제|L|
J|1986년 경찰이 대학생을 성 고문한 사건은?|부천 경찰서 성 고문 사건|E|
K|미국 원조 물자인 밀·원당·면화를 가공한 1950년대 산업은?|삼백 산업|X|제분·제당·면방직, 원료가 모두 흰색이라 삼백.
K|미국 원조 물자를 팔아 모은 돈은?|대충자금|L|
K|1950년대 후반 미국 원조가 어떻게 바뀌었나?|무상 원조 감소 → 유상 차관|X|
K|5·16 이전에 경제 개발 5개년 계획을 세웠지만 시행하지 못한 정부는?|장면 내각|O|
K|제1차 경제 개발 5개년 계획 기간은?|1962~1966년|Y|노동 집약적 경공업, 수출 주도형 정책.
K|1960년대 경제 개발에서 육성한 산업은?|노동 집약적 경공업|X|
K|1960년대 박정희 정부의 경제 정책 방향은?|수출 주도형 정책|L|
K|1970년 개통된 고속 도로는?|경부 고속 도로|X|제2차 경제 개발 5개년 계획 기간.
K|1968년 설립되어 철강 산업의 기반이 된 곳은?|포항 제철|O|
K|1972년 기업의 사채를 동결한 조치는?|8·3 긴급 경제 조치|L|
K|1970년대 제3·4차 경제 개발 계획에서 집중 육성한 산업은?|중화학 공업|X|철강, 조선, 전자, 석유 화학, 기계, 비철 금속.
K|수출 100억 달러를 달성한 해는?|1977년|Y|계획보다 4년 앞서 달성.
K|제1차 석유 파동(1973)을 극복한 방법은?|중동 건설 사업 진출|X|
K|1980년대 중반 고도성장을 가져온 3저 호황의 '3저'는?|저유가, 저금리, 저달러|X|
K|1960년대 독일로 파견되어 외화를 벌어 온 사람들은?|파독 광부와 간호사|P|
L|정치와 경제가 서로 깊은 관계를 맺고 이익을 나누는 문제는?|정경 유착|X|재벌 중심 성장의 부작용.
L|1960년대 저곡가 정책의 결과로 농촌 사람들이 도시로 떠난 현상은?|이촌향도|X|
L|1970년부터 근면·자조·협동을 내건 농촌 운동은?|새마을 운동|E|2013년 유네스코 세계 기록 유산.
L|새마을 운동의 3대 정신은?|근면·자조·협동|L|
L|1976~1978년 전남 함평 농민들이 벌인 운동은?|함평 고구마 피해 보상 운동|E|
L|1979년 오원춘 납치 등으로 알려진 농민 운동 사건은?|안동 교구 가톨릭 농민회 사건|E|
L|1970년 "근로 기준법을 준수하라"를 외치며 분신한 노동자는?|전태일|P|평화 시장 재단사, 노동 운동이 확산됐다.
L|1977~1978년 여성 노동자들이 노조를 지키려다 탄압받은 사건은?|동일 방직 사건|E|
L|1969년 중학교 입시 경쟁을 줄이려고 도입한 제도는?|중학교 무시험 추첨제|L|'뺑뺑이 세대'라는 말이 생겼다.
L|1970년대 고등학교 입시 경쟁을 줄이려고 시행한 정책은?|고교 평준화 정책|L|
L|1980년 전두환 정부가 과열된 사교육을 막으려고 한 조치는?|과외 전면 금지|L|
L|1993년 도입된 대학 입시 제도는?|대학 수학 능력 시험|L|
L|1965년 중학교 입시 문제 정답 논란으로 학부모들이 무즙을 들고 항의한 사건은?|무즙 파동|E|
L|1961년 제정된 생활이 어려운 사람을 돕는 법은?|생활 보호법|L|1970년에는 사회 복지 사업법.
L|전 국민 의료 보험이 실시된 해는?|1989년|Y|의료 보험은 1970년대 후반 처음 시행됐다.
L|1985년 울산 공단 주변 주민들에게 나타난 공해병은?|온산병|E|
L|1991년 낙동강에 유독 물질이 흘러든 사건은?|낙동강 페놀 유출 사건|E|
L|2007년 충남 태안 앞바다에서 일어나 자원봉사자들이 기름을 닦은 사건은?|태안 기름 유출 사건|E|
L|1994년 환경 보호를 위해 정부가 승격한 기관은?|환경부|O|
L|서울 쓰레기 매립장이었다가 공원이 된 곳은?|난지도|X|
`;
const HIST_SEQ_RAW = `
1945.08.15|8·15 광복
1945.12.20|모스크바 3국 외상 회의
1946.03.20|제1차 미소 공동 위원회
1946.06.03|이승만 정읍 발언
1946.07.25|좌우 합작 위원회 조직
1946.10.07|좌우 합작 7원칙 발표
1947.05.21|제2차 미소 공동 위원회
1947.11.14|유엔 총회, 남북한 총선거 결정
1948.02.26|유엔 소총회, 남한 단독 선거 결정
1948.04.19|남북 협상
1948.05.10|5·10 총선거
1948.07.17|제헌 헌법 공포
1948.08.15|대한민국 정부 수립
1948.09.22|반민족 행위 처벌법 제정
1949.06.21|농지 개혁법 제정
1950.01.12|애치슨 선언
1950.06.25|6·25 전쟁 발발
1950.09.15|인천 상륙 작전
1950.10.25|중국군 참전
1951.01.04|1·4 후퇴
1951.07.10|정전 회담 시작
1952.07.04|발췌 개헌
1953.07.27|정전 협정 체결
1953.10.01|한미 상호 방위 조약
1954.11.29|사사오입 개헌
1958.01.13|진보당 사건
1960.03.15|3·15 부정 선거
1960.04.19|4·19 혁명
1961.05.16|5·16 군사 정변
1962.01.13|제1차 경제 개발 5개년 계획 시작
1964.06.03|6·3 시위
1965.06.22|한일 기본 조약
1968.01.21|1·21 사태
1969.10.17|3선 개헌
1970.07.07|경부 고속 도로 개통
1970.11.13|전태일 분신
1972.07.04|7·4 남북 공동 성명
1972.10.17|유신 헌법
1973.10.17|제1차 석유 파동
1977.12.22|수출 100억 달러 달성
1979.08.11|YH 무역 사건
1979.10.16|부마 민주 항쟁
1979.10.26|10·26 사태
1979.12.12|12·12 사태
1980.05.18|5·18 민주화 운동
1981.05.28|국풍 81
1987.01.14|박종철 고문치사 사건
1987.04.13|4·13 호헌 조치
1987.06.10|6월 민주 항쟁
1987.06.29|6·29 민주화 선언
1989.07.01|전 국민 의료 보험
1991.03.14|낙동강 페놀 유출 사건
1993.08.20|대학 수학 능력 시험 도입
`;
const HIST_C = HIST_RAW.trim().split('\n').map((l, i) => { const [s, q, a, t, x] = l.split('|'); return { id:'h' + i, s, q, a, t, x:x || '' }; });
const HIST_E = HIST_SEQ_RAW.trim().split('\n').map(l => { const [k, n] = l.split('|'); return { k, n, y:k.slice(0, 4) }; });
let histSt = null;
function histLoad(){ histSt = store.get('class8-hist', null) || {}; histSt.box = histSt.box || {}; histSt.days = histSt.days || {}; histSt.seqBest = histSt.seqBest || 0; return histSt; }
function histSave(){ store.set('class8-hist', histSt); }
function histBox(c){ return histSt.box[c.id]; }
function histMark(c, ok){ const t = dayNum(), b = histBox(c) || { b:0, due:t }; b.b = ok ? Math.min(5, b.b + 1) : 0; b.due = t + (ok ? ENG_BOX[b.b] : 0); b.w = ok ? (b.w || 0) : (b.w || 0) + 1; histSt.box[c.id] = b; histSave(); }
function histNew(){ return HIST_C.filter(c => !histBox(c)); }
function histDue(){ const t = dayNum(); return HIST_C.filter(c => { const b = histBox(c); return b && b.due <= t; }).sort((a, c) => histBox(a).b - histBox(c).b); }
function histWrong(){ return HIST_C.filter(c => { const b = histBox(c); return b && b.b === 0; }); }
function histKnown(){ return HIST_C.filter(c => { const b = histBox(c); return b && b.b >= 2; }).length; }
function histStreak(){ let s = 0, t = dayNum(); if(!histSt.days[t]) t--; while(histSt.days[t]){ s++; t--; } return s; }
function histStats(){ $('#engStat').innerHTML = '<span>🔥 연속 ' + histStreak() + '일</span><span>📚 외운 카드 ' + histKnown() + '/' + HIST_C.length + '</span><span>🔁 복습 ' + histDue().length + '</span>'; }
function histBoard(top, big, sub){ const key = top + big + sub; if(engBoardT === key) return; engBoardT = key; const x = engBoard.cv.getContext('2d'), W2 = 1024, H2 = 460;
  x.fillStyle = '#20301F'; x.fillRect(0, 0, W2, H2); x.globalAlpha = 0.06; for(let i=0;i<40;i++){ x.fillStyle = '#fff'; x.fillRect(Math.random()*W2, Math.random()*H2, 80 + Math.random()*200, 2); } x.globalAlpha = 1;
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = '700 34px "Noto Sans KR", sans-serif'; x.fillStyle = '#CFE8D8'; x.fillText(fitText(x, top, 940), W2/2, 70);
  let fs = 96; x.font = '900 ' + fs + 'px "Noto Sans KR", sans-serif'; while(fs > 44 && x.measureText(big).width > 960){ fs -= 6; x.font = '900 ' + fs + 'px "Noto Sans KR", sans-serif'; }
  x.fillStyle = '#F4F1E6'; x.fillText(fitText(x, big, 980), W2/2, 210);
  x.font = '700 38px "Noto Sans KR", sans-serif'; x.fillStyle = '#FFE27A'; x.fillText(fitText(x, sub, 960), W2/2, 350); engBoard.tex.needsUpdate = true; }
function enterHist(){
  if(!engScene) buildEng(); engLoad(); histLoad(); histView = ''; $('#engUI').classList.remove('mini'); engLetters.forEach(s => s.visible = false);
  $('#panel').hidden = true; $('#joy').hidden = true; $('#engUI').hidden = false; $('#engUI .etop b').textContent = '🏯 한국사 탐구실';
  Object.assign(camLim, { pmin:-0.3, pmax:0.6, dmin:6, dmax:12 }); cam.yaw = 0; cam.pitch = 0.08; cam.dist = 9.5; cam.t.set(0, 2.6, 0);
  histHome(); toast('🏯 한국사 탐구실! 교과서 Ⅱ단원을 카드와 퀴즈로 외워요');
}
function histHome(){ engMode = 'hhome'; histStats(); const t = dayNum(), done = !!histSt.days[t], nw = histNew(), due = histDue().length, wr = histWrong().length, d = new Date();
  histBoard('한국사 · Ⅱ. 대한민국의 발전', '1945 → 1987', '광복부터 6월 민주 항쟁까지');
  const next = nw.slice(0, 10);
  engSet('<div class="eh">' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일 · 오늘의 한국사 ' + (next.length || 0) + '장</div>'
    + (next.length ? '<p class="etip">📖 ' + escHtml(HIST_SEC[next[0].s]) + (next[next.length - 1].s !== next[0].s ? ' ~ ' + escHtml(HIST_SEC[next[next.length - 1].s]) : '') + '</p>' : '<p class="etip">🎉 교과서 카드를 한 번씩 다 봤어요! 이제 복습과 오답으로 굳혀요.</p>')
    + (next.length ? '<button type="button" class="btn primary big" id="hGo">' + (done ? '✅ 오늘 완료! 다음 10장 더 하기' : '📖 오늘의 카드 10장 외우기') + '</button>' : '')
    + '<button type="button" class="btn big" id="hRev"' + (due ? '' : ' disabled') + '>🔁 복습하기 ' + (due ? '(' + due + '장)' : '(오늘 복습 없음)') + '</button>'
    + '<button type="button" class="btn big gold" id="hWrong"' + (wr ? '' : ' disabled') + '>❌ 틀린 카드만 다시 ' + (wr ? '(' + wr + '장)' : '(없음)') + '</button>'
    + '<div class="eh" style="font-size:14px;margin-top:4px">🎯 시험형 연습</div><div class="hgrid"><button type="button" class="btn" id="hSrc">📜 사료 퀴즈<small>자료 보고 사건 맞히기</small></button><button type="button" class="btn" id="hFlow">🧠 흐름·비교<small>원인·결과·순서</small></button><button type="button" class="btn" id="hSeq">⏳ 연표 순서<small>시대 순 나열</small></button><button type="button" class="btn" id="hSec">📚 단원별<small>범위 골라 공부</small></button></div>'
    + '<div class="eh" style="font-size:14px;margin-top:4px">🧊 3D로 보기</div><div class="hgrid"><button type="button" class="btn gold" id="hMap">🗺 6·25 전선 지도<small>전선이 움직여요</small></button><button type="button" class="btn gold" id="hLine">🛤 3D 연표 길<small>1945 → 1993 걷기</small></button></div>'
    + '<p class="etip">💡 틀린 카드는 그날 바로 다시 나오고, 맞히면 1→2→4→7→15일 뒤에 다시 나와요. 하루 10장씩이면 2주 만에 Ⅱ단원(' + HIST_C.length + '장) 한 바퀴! 시험 문제 단골인 사건 순서는 연표 퀴즈로 연습해요.</p>');
  if($('#hGo')) $('#hGo').onclick = () => histCards(histNew().slice(0, 10), 'today');
  $('#hRev').onclick = () => histCards(histDue().slice(0, 15), 'review'); $('#hWrong').onclick = () => histCards(histWrong().slice(0, 15), 'wrong');
  $('#hSeq').onclick = () => histSeq(); $('#hSec').onclick = histSecs; $('#hSrc').onclick = () => histMultiQuiz('src'); $('#hFlow').onclick = () => histMultiQuiz('flow'); $('#hMap').onclick = histMapOpen; $('#hLine').onclick = histLineOpen; }
function histSecs(){ engMode = 'hsec'; histStats();
  engSet('<div class="eh">📚 단원 골라 공부하기</div><div class="hsecs">' + Object.keys(HIST_SEC).map(k => { const L = HIST_C.filter(c => c.s === k), kn = L.filter(c => { const b = histBox(c); return b && b.b >= 2; }).length;
    return '<button type="button" class="btn" data-s="' + k + '"><span>' + escHtml(HIST_SEC[k]) + '</span><i>' + kn + '/' + L.length + '</i></button>'; }).join('') + '</div><button type="button" class="btn big" id="hBack">처음으로</button>');
  document.querySelectorAll('#engBody [data-s]').forEach(b => b.onclick = () => histCards(HIST_C.filter(c => c.s === b.dataset.s), 'sec'));
  $('#hBack').onclick = histHome; }
function histCards(list, kind){ if(!list.length){ histHome(); return; } engMode = 'hcard'; let i = 0, flip = false; const again = [];
  const lab = { today:'오늘의 카드', review:'복습', wrong:'❌ 틀린 카드', sec:'단원 공부' }[kind];
  const show = () => { if(i >= list.length){ if(again.length){ list = list.concat(again.splice(0)); } else { histQuiz(list.filter((c, k, a) => a.indexOf(c) === k), kind); return; } }
    const c = list[i]; flip = false; histBoard(HIST_SEC[c.s], '?', '눌러서 정답 확인');
    engSet('<div class="ebar"><i style="width:' + (i/list.length*100) + '%"></i></div><div class="eh">' + lab + ' ' + (i + 1) + ' / ' + list.length + '</div>'
      + '<div class="ecard" id="engCard"><div class="ef"><div class="hsec">' + escHtml(HIST_SEC[c.s]) + '</div><div class="hq">' + escHtml(c.q) + '</div><div class="etap">눌러서 정답 보기</div></div>'
      + '<div class="eb"><div class="ha">' + escHtml(c.a) + '</div>' + (c.x ? '<div class="hx">' + escHtml(c.x) + '</div>' : '') + '</div></div>'
      + '<div class="erow" style="grid-template-columns:1fr 1fr"><button type="button" class="btn" id="engAgain">🔁 다시 볼래요</button><button type="button" class="btn primary" id="engOk">✅ 외웠어요</button></div>');
    $('#engCard').onclick = () => { flip = !flip; $('#engCard').classList.toggle('on', flip); histBoard(HIST_SEC[c.s], flip ? c.a : '?', flip ? (c.x || '') : '눌러서 정답 확인'); };
    $('#engAgain').onclick = () => { again.push(c); i++; show(); };
    $('#engOk').onclick = () => { i++; show(); }; };
  show(); }
function histOpts(c){ const pool = HIST_C.filter(o => o !== c && o.a !== c.a), same = pool.filter(o => o.t === c.t), near = same.filter(o => o.s === c.s);
  const out = [], seen = { [c.a]:1 }; [near, same, pool].forEach(P => P.slice().sort(() => Math.random() - 0.5).forEach(o => { if(out.length < 3 && !seen[o.a]){ seen[o.a] = 1; out.push(o.a); } }));
  return out.concat([c.a]).sort(() => Math.random() - 0.5); }
function histQuiz(list, kind){ engMode = 'hquiz'; const qs = list.map(c => ({ c, opts:histOpts(c) })); let i = 0, score = 0;
  const show = () => { if(i >= qs.length){ histDone(score, qs.length, kind); return; } const q = qs[i]; histBoard('퀴즈 ' + (i + 1) + ' / ' + qs.length, '정답은?', HIST_SEC[q.c.s]);
    engSet('<div class="ebar"><i style="width:' + (i/qs.length*100) + '%"></i></div><div class="eh">✏️ 퀴즈 ' + (i + 1) + ' / ' + qs.length + ' · 맞힌 개수 ' + score + '</div><div class="eq hqq">' + escHtml(q.c.q) + '</div><div class="eopts">'
      + q.opts.map((o, k) => '<button type="button" class="btn" data-k="' + k + '">' + escHtml(o) + '</button>').join('') + '</div><div id="hExp"></div>');
    document.querySelectorAll('.eopts .btn').forEach(b => b.onclick = () => { const ok = q.opts[+b.dataset.k] === q.c.a; if(ok) score++; histMark(q.c, ok);
      document.querySelectorAll('.eopts .btn').forEach(x => { x.disabled = true; if(q.opts[+x.dataset.k] === q.c.a) x.classList.add('right'); }); if(!ok) b.classList.add('wrong');
      histBoard(HIST_SEC[q.c.s], q.c.a, ok ? '정답! 👍' : '틀렸어요 · 오늘 다시 나와요');
      if(!ok && q.c.x){ $('#hExp').innerHTML = '<p class="etip" style="margin-top:4px">📌 ' + escHtml(q.c.x) + '</p><button type="button" class="btn primary big" id="hNext" style="margin-top:8px">다음 ▶</button>'; $('#hNext').onclick = () => { i++; show(); }; }
      else setTimeout(() => { i++; show(); }, ok ? 650 : 1600); }); };
  show(); }
function histDone(score, n, kind){ const t = dayNum(), pass = score >= Math.ceil(n*0.7);
  if(kind === 'today' && pass){ histSt.days[t] = 1; histSave(); }
  histStats(); const wr = histWrong().length;
  histBoard('결과', n + '문제 중 ' + score + '개', pass ? '잘했어요! 🎉' : '틀린 카드는 다시 나와요');
  engSet('<div class="edone">' + (pass ? '🎉' : '💪') + '</div><div class="eh">' + n + '문제 중 ' + score + '개 맞혔어요!</div>'
    + '<p class="etip">' + (kind === 'today' ? (pass ? '오늘의 한국사 완료! 🔥 연속 ' + histStreak() + '일째예요.' : '7할 이상 맞히면 오늘 완료로 기록돼요.') + ' ' : '') + '틀린 카드는 오늘 바로 다시, 맞힌 카드는 며칠 뒤에 다시 나와요.</p>'
    + (wr ? '<button type="button" class="btn big gold" id="hW2">❌ 틀린 카드 ' + wr + '장 바로 다시</button>' : '')
    + '<button type="button" class="btn primary big" id="hH2">처음으로</button>');
  if($('#hW2')) $('#hW2').onclick = () => histCards(histWrong().slice(0, 15), 'wrong'); $('#hH2').onclick = histHome;
  if(pass) toast(kind === 'today' ? '🏯 오늘의 한국사 완료!' : '👍 잘했어요!'); }
/* ⏳ 연표 순서 퀴즈: 사건 4개를 일어난 순서대로 눌러요 (5라운드) */
function histSeq(){ engMode = 'hseq'; let round = 0, score = 0;
  const pick = () => { const span = 14 + Math.floor(Math.random()*12), st = Math.floor(Math.random()*Math.max(1, HIST_E.length - span)), seg = HIST_E.slice(st, st + span).sort(() => Math.random() - 0.5).slice(0, 4); return seg; };
  const show = () => { if(round >= 5){ histSt.seqBest = Math.max(histSt.seqBest || 0, score); histSave();
      histBoard('연표 순서 퀴즈', '5문제 중 ' + score + '개', '최고 기록 ' + histSt.seqBest + '개');
      engSet('<div class="edone">' + (score >= 4 ? '🏆' : '⏳') + '</div><div class="eh">순서 퀴즈 5문제 중 ' + score + '개 맞혔어요!</div><p class="etip">최고 기록 ' + histSt.seqBest + '개. 시험에 자주 나오는 "시대 순 나열" 문제 연습이에요.</p>'
        + '<button type="button" class="btn primary big" id="hS2">⏳ 한 번 더</button><button type="button" class="btn big" id="hH3">처음으로</button>');
      $('#hS2').onclick = () => histSeq(); $('#hH3').onclick = histHome; return; }
    const set = pick(), ans = set.slice().sort((a, b) => a.k < b.k ? -1 : 1), picked = [];
    histBoard('연표 순서 퀴즈 ' + (round + 1) + ' / 5', '먼저 일어난 순서는?', '맞힌 개수 ' + score);
    const draw = () => { engSet('<div class="ebar"><i style="width:' + (round/5*100) + '%"></i></div><div class="eh">⏳ ' + (round + 1) + ' / 5 · 먼저 일어난 것부터 차례로 눌러요</div><div class="eopts hseq">'
        + set.map((e, k) => { const p = picked.indexOf(e); return '<button type="button" class="btn' + (p >= 0 ? ' on' : '') + '" data-k="' + k + '"><b>' + (p >= 0 ? p + 1 : '') + '</b>' + escHtml(e.n) + '</button>'; }).join('') + '</div>'
        + '<div class="erow" style="grid-template-columns:1fr"><button type="button" class="btn" id="hUndo"' + (picked.length ? '' : ' disabled') + '>↩ 하나 취소</button></div><div id="hRes"></div>');
      document.querySelectorAll('.hseq .btn').forEach(b => b.onclick = () => { const e = set[+b.dataset.k]; if(picked.indexOf(e) >= 0) return; picked.push(e); if(picked.length < 4) draw(); else check(); });
      $('#hUndo').onclick = () => { picked.pop(); draw(); }; };
    const check = () => { const ok = picked.every((e, k) => e === ans[k]); if(ok) score++; draw(); document.querySelectorAll('.hseq .btn, #hUndo').forEach(b => b.disabled = true);
      histBoard('연표 순서 퀴즈 ' + (round + 1) + ' / 5', ok ? '정답! 👍' : '아쉬워요', ans.map(e => e.y).join(' → '));
      $('#hRes').innerHTML = '<p class="etip" style="margin-top:6px;color:' + (ok ? '#9FE8B8' : '#FFB4A8') + ';font-weight:800">' + (ok ? '✅ 정답!' : '❌ 정답 순서') + '</p><div class="hans">' + ans.map((e, k) => '<div><b>' + (k + 1) + '</b><span>' + escHtml(e.n) + '</span><i>' + e.y + '</i></div>').join('') + '</div><button type="button" class="btn primary big" id="hNx" style="margin-top:8px">다음 ▶</button>';
      $('#hNx').onclick = () => { round++; show(); }; };
    draw(); };
  show(); }

/* 📜 사료 퀴즈 · 🧠 흐름·비교 퀴즈 */
const HIST_SRC = `
맥아더 포고령 제1호(1945.9.)|북위 38도선 이남의 조선 영토와 조선 인민에 대한 정부의 모든 권한은 당분간 본관의 권한 아래에서 시행한다.|미군정의 직접 통치|태평양 미 육군 총사령관 맥아더가 발표했다. 미군은 남한에서 군정을 실시했다.
모스크바 3국 외상 회의 결정(1945.12.)|조선을 독립 국가로 재건하기 위하여 임시 조선 민주주의 정부를 수립한다. … 미·영·중·소 4개국이 최고 5년 기한으로 신탁 통치를 실시한다.|모스크바 3국 외상 회의|임시 민주 정부 수립, 미소 공동 위원회 설치, 최대 5년 신탁 통치를 결정했다.
이승만의 발언(1946.6.)|이제 무기 휴회된 미소 공동 위원회가 재개될 기색도 보이지 않으니 … 남방만이라도 임시 정부 혹은 위원회 같은 것을 조직하여 38도선 이북에서 소련이 철수하도록 세계 공론에 호소해야 할 것이다.|정읍 발언|제1차 미소 공동 위원회 결렬 뒤 남한 단독 정부 수립을 처음 주장했다.
좌우 합작 위원회 발표(1946.10.)|토지 개혁에 있어 몰수, 유조건 몰수, 체감 매상하여 농민에게 무상으로 분여하며 … 친일파 및 민족 반역자를 처리할 조례를 입법 기구에서 심리 결정한다.|좌우 합작 7원칙|여운형·김규식 등 중도 세력이 좌우 합작을 위해 발표했다.
김구, 「삼천만 동포에게 읍고함」(1948.2.)|나는 통일된 조국을 건설하려다가 38도선을 베고 쓰러질지언정 일신의 구차한 안일을 취하여 단독 정부를 세우는 데는 협력하지 아니하겠다.|남북 협상|김구는 남한 단독 선거에 반대하고 김규식과 함께 평양에서 남북 협상을 벌였다.
헌법 전문과 제1조(1948.7.)|유구한 역사와 전통에 빛나는 우리들 대한 국민은 기미 삼일 운동으로 대한민국을 건립하여 세계에 선포한 위대한 독립 정신을 계승하여 … 제1조 대한민국은 민주 공화국이다.|제헌 헌법|대한민국 임시 정부의 법통을 계승한다는 뜻을 밝혔다. 대통령은 국회에서 간접 선거로 뽑았다.
법률(1948.9.)|일본 정부와 통모하여 한일 합병에 적극 협력한 자 … 는 사형 또는 무기 징역에 처하고 그 재산과 유산의 전부 혹은 2분의 1 이상을 몰수한다.|반민족 행위 처벌법|제헌 국회가 친일파 청산을 위해 제정했다. 반민 특위가 설치됐지만 이승만 정부의 비협조로 해체됐다.
법률(1949.6.)|다음의 농지는 정부가 매수한다. 농가 아닌 자의 농지, 자경하지 않는 자의 농지, 본법 규정의 한도(3정보)를 초과하는 부분의 농지|농지 개혁법|유상 매입·유상 분배 방식. 지주에게는 지가 증권을 주었다.
미국 국무 장관의 연설(1950.1.)|이 방위선은 알류샨 열도에서 일본을 거쳐 오키나와로 이어진다. … 기타 태평양 지역의 군사적 안전에 대해서는 누구도 보장할 수 없다.|애치슨 선언|한국과 타이완이 미국의 태평양 방위선에서 빠졌다.
조약(1953.10.)|상호 합의에 의하여 미합중국의 육군, 해군과 공군을 대한민국의 영토 내와 그 부근에 배치하는 권리를 대한민국은 이를 허여하고 미합중국은 이를 수락한다.|한미 상호 방위 조약|정전 협정 뒤 체결되어 주한 미군 주둔의 근거가 되었다.
개헌 때의 계산(1954.11.)|재적 의원 203명의 3분의 2는 135.333…명이므로 사사오입하면 135명이다. 따라서 찬성 135표로 개헌안은 가결되었다.|사사오입 개헌|초대 대통령에 한해 3선 금지 조항을 없앴다.
대학교수단 시국 선언문(1960.4.)|마산, 서울, 기타 각지의 학생 데모는 주권을 빼앗긴 국민의 울분을 대신하여 궐기한 순정한 정의감의 발로이다. … 3·15 선거는 불법 선거이다. 공명선거에 의하여 정부통령 선거를 다시 실시하라.|4·19 혁명|교수단 시위 뒤 이승만이 대통령직에서 물러났다.
혁명 공약(1961.5.)|반공을 국시의 제일의로 삼고 지금까지 형식적이고 구호에만 그친 반공 태세를 재정비 강화한다. … 민생고를 시급히 해결하고 국가 자주 경제 재건에 총력을 경주한다.|5·16 군사 정변|박정희 등 군인들이 정변을 일으키고 발표했다.
조약(1965.6.)|1910년 8월 22일 및 그 이전에 대한 제국과 대일본 제국 간에 체결된 모든 조약 및 협정이 이미 무효임을 확인한다.|한일 기본 조약|'이미 무효'의 해석이 달라 식민 지배 불법성 문제가 남았다.
각서(1966.3.)|한국 국군의 현대화 계획을 위해 상당량의 장비를 제공한다. … 베트남에 파견되는 추가 병력에 필요한 경비를 부담한다.|브라운 각서|베트남 추가 파병의 대가로 미국이 군사·경제 원조를 약속했다.
미국 대통령의 발표(1969.7.)|아시아의 방위는 아시아인 스스로 해결해야 한다. 미국은 아시아 국가의 내란이나 침략에 군사적으로 직접 개입하지 않는다.|닉슨 독트린|냉전이 완화되는 계기가 되었고 박정희 정부는 안보 위기를 강조했다.
남북 합의(1972.7.)|첫째, 통일은 외세에 의존하거나 외세의 간섭을 받음이 없이 자주적으로 해결하여야 한다. 둘째, 통일은 서로 상대방을 반대하는 무력행사에 의거하지 않고 평화적 방법으로 실현하여야 한다.|7·4 남북 공동 성명|자주·평화·민족적 대단결의 통일 3대 원칙을 밝혔다.
헌법(1972.12.)|대통령은 통일 주체 국민 회의에서 토론 없이 무기명 투표로 선거한다. … 대통령은 국가의 안전 보장 또는 공공의 안녕질서가 중대한 위협을 받을 우려가 있을 때 긴급 조치를 할 수 있다.|유신 헌법|대통령 임기 6년·중임 제한 없음, 국회 의원 3분의 1 추천권, 국회 해산권을 주었다.
명동 성당 선언(1976.3.)|국가 안보라는 구실 아래 신앙과 양심의 자유는 날로 위축되어 가고 언론의 자유, 학원의 자주성은 박탈당하고 있다. … 이 나라는 1인 독재 아래 신음하고 있다.|3·1 민주 구국 선언|재야 인사와 종교인들이 유신 체제 철폐를 요구했다.
광주 시민 궐기문(1980.5.)|우리는 왜 총을 들 수밖에 없었는가? 그 대답은 너무나 간단합니다. 너무나 무자비한 만행을 더 이상 보고 있을 수만 없어서 너도나도 총을 들고 나섰던 것입니다.|5·18 민주화 운동|신군부의 계엄군 진압에 맞서 광주 시민들이 시민군을 조직했다.
경찰의 발표(1987.1.)|책상을 '탁' 치니 '억' 하고 죽었다.|박종철 고문치사 사건|경찰이 고문 사실을 숨기려 했지만 진실이 드러나 6월 민주 항쟁의 계기가 되었다.
국민 대회 선언문(1987.6.)|국가의 미래요 소망인 꽃다운 젊은이를 야만적인 고문으로 죽여 놓고 … 국민적 여망인 개헌을 일방적으로 파기한 4·13 폭거를 철회시키기 위한 범국민적 투쟁을 시작한다.|6월 민주 항쟁|호헌 철폐, 독재 타도를 외치며 전국에서 시위가 이어졌다.
여당 대표의 발표(1987.6.29.)|여야 합의하에 조속히 대통령 직선제로 개헌하고 새 헌법에 의한 대통령 선거를 통해 1988년 2월 평화적 정부 이양을 실현하도록 해야겠습니다.|6·29 민주화 선언|노태우가 발표했고, 5년 단임 대통령 직선제 헌법이 만들어졌다.
노동자의 편지(1969~1970)|저희는 근로 기준법의 혜택을 조금도 못 받으며 … 하루 15시간의 작업은 너무 과중합니다. … 1개월에 첫 주와 삼 주 2일을 쉬는 것은 희망합니다.|전태일 분신|평화 시장 재단사 전태일은 "근로 기준법을 준수하라"를 외치며 분신했다.
대통령 긴급 명령(1972.8.)|모든 기업은 1972년 8월 2일 현재 보유하는 모든 사채를 정부에 신고하여야 한다. … 신고된 사채는 월 1.35%, 3년 거치 5년 분할 상환으로 조정한다.|8·3 긴급 경제 조치|기업의 사채를 동결해 어려움에 빠진 기업을 지원했다.
조봉암의 진보당 창당 개회사(1956)|인간의 존엄성이 무시당하는 일을 없애고 모든 사람의 자유가 완전히 보장되고 모든 사람이 착취당하는 것 없이 응분의 노력과 사회적 보장에 의해 다 같이 평화롭고 행복스럽게 잘 살 수 있는 세상|진보당|평화 통일을 주장했던 조봉암은 진보당 사건으로 사형되었고 2011년 재심에서 무죄를 받았다.
`.trim().split('\n').map(l => { const [h, t, a, x] = l.split('|'); return { h, t, a, x }; });
const HIST_FLOW = `
남한 농지 개혁과 북한 토지 개혁을 바르게 비교한 것은?|남한은 유상 매입·유상 분배, 북한은 무상 몰수·무상 분배|남한은 무상 몰수·무상 분배, 북한은 유상 매입·유상 분배|남북 모두 유상 매입·유상 분배|남북 모두 무상 몰수·무상 분배|남한: 농지 개혁법(1949), 3정보 상한. 북한: 북조선 임시 인민 위원회(1946).
반민 특위가 친일파 청산에 실패한 까닭으로 알맞은 것은?|반공을 앞세운 이승만 정부의 비협조와 경찰의 반민 특위 습격|유엔이 반민 특위 해산을 결의해서|북한군 남침으로 국회가 사라져서|친일파가 모두 해외로 도망가서|국회 프락치 사건, 공소 시효 단축(1949.8.)으로 반민 특위가 해체됐다.
5·10 총선거에 대한 설명으로 옳은 것은?|우리나라 최초의 보통·평등·직접·비밀 선거였다|김구와 김규식이 적극 참여했다|남북한 전체에서 실시되었다|국민이 대통령을 직접 뽑았다|남북 협상파와 좌익은 불참했고, 제주도 2개 선거구는 4·3 사건으로 무산됐다.
모스크바 3국 외상 회의 이후 좌우 대립이 심해진 이유는?|우익은 신탁 통치 반대, 좌익은 결정 총체적 지지로 입장이 갈려서|미국과 소련이 곧바로 전쟁을 시작해서|좌익과 우익이 모두 신탁 통치를 찬성해서|유엔이 남한 단독 정부를 승인해서|좌익은 처음엔 반대했다가 "임시 정부 수립이 핵심"이라며 지지로 바뀌었다.
미국이 한국 문제를 유엔으로 넘긴 직접적인 계기는?|제2차 미소 공동 위원회 결렬|6·25 전쟁 발발|애치슨 선언 발표|5·10 총선거 실시|1947년 미소 공동 위원회가 끝내 결렬되자 미국은 한국 문제를 유엔 총회에 넘겼다.
6·25 전쟁이 일어나기 전의 상황으로 옳은 것은?|애치슨 선언으로 한국이 미국의 방위선에서 빠졌다|중국군이 이미 한반도에 들어와 있었다|정전 협정이 체결되어 있었다|한미 상호 방위 조약으로 미군이 주둔했다|북한은 소련의 무기 지원과 조선 의용군 편입으로 군사력을 키웠다.
인천 상륙 작전 이후 일어난 일을 순서대로 바르게 나열한 것은?|서울 수복 → 압록강 진격 → 중국군 참전 → 1·4 후퇴|중국군 참전 → 서울 수복 → 1·4 후퇴 → 압록강 진격|1·4 후퇴 → 서울 수복 → 중국군 참전 → 압록강 진격|압록강 진격 → 1·4 후퇴 → 서울 수복 → 중국군 참전|1950.9.15 인천 상륙 → 9.28 서울 수복 → 10월 평양·압록강 → 중국군 참전 → 1951.1.4 후퇴
정전 회담이 2년이나 걸린 가장 큰 이유는?|포로 송환 방식을 두고 의견이 달라서|소련이 회담에 참여하지 않아서|미국이 북진 통일을 고집해서|군사 분계선을 38도선으로 하자고 해서|유엔군은 자유 송환, 공산군은 자동 송환을 주장했다. 이승만은 반공 포로를 석방했다.
6·25 전쟁의 결과로 옳지 않은 것은?|남북 통일이 이루어졌다|이산가족과 전쟁고아가 생겼다|남북 모두 독재 체제가 강해졌다|일본은 전쟁 특수로 경제가 살아났다|전쟁 후 분단이 더 굳어졌다. 남한은 이승만 장기 집권, 북한은 김일성 1인 독재가 강화됐다.
이승만 정부의 장기 집권 과정을 순서대로 바르게 나열한 것은?|발췌 개헌 → 사사오입 개헌 → 진보당 사건 → 3·15 부정 선거|사사오입 개헌 → 발췌 개헌 → 3·15 부정 선거 → 진보당 사건|진보당 사건 → 발췌 개헌 → 사사오입 개헌 → 3·15 부정 선거|3·15 부정 선거 → 발췌 개헌 → 진보당 사건 → 사사오입 개헌|1952 발췌 개헌 → 1954 사사오입 → 1958 진보당 사건 → 1960 3·15 부정 선거
4·19 혁명 이후의 변화로 옳은 것은?|내각 책임제와 양원제 국회로 헌법을 고쳤다|대통령 임기를 6년으로 늘렸다|통일 주체 국민 회의를 만들었다|국가 보위 비상 대책 위원회를 만들었다|허정 과도 정부 → 장면 내각(국무총리)과 윤보선 대통령.
3선 개헌과 유신 헌법을 비교한 것으로 옳은 것은?|3선 개헌은 대통령 3회 연임 허용, 유신 헌법은 중임 제한을 아예 없앴다|둘 다 대통령을 국민이 직접 뽑지 못하게 했다|3선 개헌으로 통일 주체 국민 회의가 생겼다|유신 헌법은 대통령 임기를 4년으로 줄였다|유신 헌법: 통일 주체 국민 회의 간선, 임기 6년, 긴급 조치권, 국회 해산권.
박정희 정부가 1972년 유신 헌법을 만들 때 내세운 명분은?|급변하는 국제 정세에 대응하고 평화 통일을 준비한다|부정 선거를 바로잡는다|5·18 민주화 운동을 수습한다|대통령 직선제를 지킨다|닉슨 독트린과 데탕트 속에서 안보를 강조하며 비상계엄을 선포하고 유신 헌법을 만들었다.
유신 체제가 무너지게 된 과정으로 옳은 것은?|YH 무역 사건 → 김영삼 제명 → 부마 민주 항쟁 → 10·26 사태|부마 민주 항쟁 → YH 무역 사건 → 12·12 사태 → 10·26 사태|10·26 사태 → YH 무역 사건 → 김영삼 제명 → 부마 민주 항쟁|김영삼 제명 → 10·26 사태 → YH 무역 사건 → 부마 민주 항쟁|1979년 8월 YH → 10월 김영삼 제명 → 부마 항쟁 → 10·26 박정희 피살
유신 헌법과 전두환 정부 헌법의 대통령 선출 방식으로 옳은 것은?|유신: 통일 주체 국민 회의 간선 / 전두환: 대통령 선거인단 간선 7년 단임|유신: 국민 직선 / 전두환: 국회 간선|둘 다 국민 직선 5년 단임|유신: 국회 간선 / 전두환: 국민 직선|6월 민주 항쟁 이후에야 5년 단임 대통령 직선제가 되었다.
5·18 민주화 운동이 일어나게 된 직접적인 계기는?|신군부가 비상계엄을 전국으로 확대하고 시위를 무력 진압해서|대통령이 부정 선거를 저질러서|한일 회담이 굴욕적이라서|박종철이 고문으로 숨져서|12·12 사태 → 서울의 봄 → 5·17 비상계엄 전국 확대 → 5·18
6월 민주 항쟁이 일어난 과정을 순서대로 바르게 나열한 것은?|박종철 고문치사 → 4·13 호헌 조치 → 이한열 부상 → 6·29 민주화 선언|4·13 호헌 조치 → 6·29 민주화 선언 → 박종철 고문치사 → 이한열 부상|6·29 민주화 선언 → 박종철 고문치사 → 4·13 호헌 조치 → 이한열 부상|이한열 부상 → 6·29 민주화 선언 → 4·13 호헌 조치 → 박종철 고문치사|그 결과 5년 단임 대통령 직선제 개헌이 이루어졌다.
4·19 혁명과 6월 민주 항쟁의 공통점으로 알맞은 것은?|학생과 시민이 독재에 맞서 민주주의를 되찾았다|군인이 정변을 일으켜 권력을 잡았다|유엔군이 개입해 정부를 바꿨다|북한과 합의해 통일 헌법을 만들었다|4·19 → 이승만 하야, 6월 항쟁 → 대통령 직선제 개헌.
1950년대 경제의 특징으로 옳은 것은?|미국 원조 물자를 가공하는 삼백 산업이 발달했다|중화학 공업을 집중 육성했다|수출 100억 달러를 달성했다|3저 호황으로 고도성장했다|삼백 산업(제분·제당·면방직), 대충자금. 1950년대 후반 무상 원조가 줄었다.
1960년대와 1970년대 경제 개발을 바르게 비교한 것은?|1960년대 노동 집약적 경공업, 1970년대 중화학 공업 육성|1960년대 중화학 공업, 1970년대 경공업 육성|둘 다 삼백 산업 중심|둘 다 농업 중심|1960년대: 수출 주도, 경부 고속 도로(1970). 1970년대: 포항 제철, 수출 100억 달러(1977).
제1차 석유 파동과 제2차 석유 파동이 우리 경제에 준 영향으로 옳은 것은?|1차는 중동 건설 진출로 극복, 2차는 중화학 과잉 투자와 겹쳐 큰 위기|1차와 2차 모두 별다른 영향이 없었다|1차는 3저 호황으로 극복했다|2차 때 수출 100억 달러를 달성했다|1973년 제1차, 1978~1979년 제2차 석유 파동.
빠른 경제 성장의 그늘(문제점)로 알맞지 않은 것은?|농촌 소득이 도시보다 훨씬 빠르게 늘었다|재벌 중심 성장과 정경 유착|저임금·장시간 노동|도시와 농촌의 격차, 이촌향도|정부는 새마을 운동(1970)으로 농촌 환경 개선을 추진했다.
1970년대 노동 운동에 대한 설명으로 옳은 것은?|전태일 분신을 계기로 노동 운동이 확산되었다|정부가 노동조합 활동을 적극 보호했다|노동자의 단체 행동권이 넓어졌다|노동자의 근로 시간이 크게 줄었다|동일 방직 사건(1977~1978), YH 무역 사건(1979)이 대표적이다.
`.trim().split('\n').map(l => { const p = l.split('|'); return { q:p[0], a:p[1], w:[p[2], p[3], p[4]], x:p[5] || '' }; });
function histShuf(a){ return a.slice().sort(() => Math.random() - 0.5); }
function histMultiQuiz(kind){ engMode = 'h' + kind; const N = 8;
  const qs = kind === 'src' ? histShuf(HIST_SRC).slice(0, N).map(s => ({ head:'📜 ' + s.h, body:'<div class="hsrc">' + escHtml(s.t) + '</div><div class="hqq" style="margin-top:6px">이 자료와 관련된 것은?</div>', a:s.a, opts:histShuf([s.a].concat(histShuf(HIST_SRC.filter(o => o.a !== s.a)).slice(0, 3).map(o => o.a))), x:s.x }))
    : histShuf(HIST_FLOW).slice(0, N).map(f => ({ head:'🧠 흐름·비교', body:'<div class="hqq">' + escHtml(f.q) + '</div>', a:f.a, opts:histShuf([f.a].concat(f.w)), x:f.x }));
  let i = 0, score = 0; const wrong = [];
  const show = () => { if(i >= qs.length){ const best = kind === 'src' ? 'srcBest' : 'flowBest'; histSt[best] = Math.max(histSt[best] || 0, score); histSave();
      histBoard(kind === 'src' ? '사료 퀴즈' : '흐름·비교 퀴즈', qs.length + '문제 중 ' + score + '개', '최고 기록 ' + histSt[best] + '개');
      engSet('<div class="edone">' + (score >= 6 ? '🏆' : '💪') + '</div><div class="eh">' + qs.length + '문제 중 ' + score + '개 맞혔어요!</div>'
        + (wrong.length ? '<div class="eh" style="font-size:14px">틀린 것 다시 보기</div><div class="hans">' + wrong.map(q => '<div style="flex-direction:column;align-items:flex-start"><b>' + escHtml(q.a) + '</b><span style="font-size:13px;color:#CFC4AE">' + escHtml(q.x) + '</span></div>').join('') + '</div>' : '')
        + '<button type="button" class="btn primary big" id="hM2">한 번 더 (새 문제)</button><button type="button" class="btn big" id="hH4">처음으로</button>');
      $('#hM2').onclick = () => histMultiQuiz(kind); $('#hH4').onclick = histHome; return; }
    const q = qs[i]; histBoard(q.head.replace(/^\S+ /, ''), kind === 'src' ? '무슨 사건일까?' : '골라 봐요', '퀴즈 ' + (i + 1) + ' / ' + qs.length);
    engSet('<div class="ebar"><i style="width:' + (i/qs.length*100) + '%"></i></div><div class="eh">' + escHtml(q.head) + ' · ' + (i + 1) + ' / ' + qs.length + '</div>' + q.body + '<div class="eopts">'
      + q.opts.map((o, k) => '<button type="button" class="btn" data-k="' + k + '">' + escHtml(o) + '</button>').join('') + '</div><div id="hExp"></div>');
    document.querySelectorAll('.eopts .btn').forEach(b => b.onclick = () => { const ok = q.opts[+b.dataset.k] === q.a; if(ok) score++; else wrong.push(q);
      document.querySelectorAll('.eopts .btn').forEach(x => { x.disabled = true; if(q.opts[+x.dataset.k] === q.a) x.classList.add('right'); }); if(!ok) b.classList.add('wrong');
      $('#hExp').innerHTML = '<p class="etip" style="margin-top:4px">' + (ok ? '✅ ' : '📌 ') + escHtml(q.x) + '</p><button type="button" class="btn primary big" id="hNext" style="margin-top:8px">다음 ▶</button>';
      $('#hNext').onclick = () => { i++; show(); }; }); };
  show(); }

/* 🗺 3D 6·25 전쟁 전선 지도 · 🛤 3D 연표 길 (한국사 탐구실 전용 장면) */
let histScene = null, histView = '', histMap = null, histLine = null, histT = 0;
const KP = [[124.3,39.9],[125.4,40.4],[126.0,40.9],[126.9,41.8],[127.6,41.4],[128.1,41.6],[128.3,42.0],[129.0,42.1],[129.7,42.4],[130.6,42.4],[130.2,42.0],[129.8,41.8],[129.6,41.2],[129.2,40.7],[128.9,40.4],[128.2,40.0],[127.6,39.8],[127.4,39.4],[127.5,39.15],[127.9,38.9],[128.4,38.4],[128.6,38.2],[128.9,37.75],[129.2,37.4],[129.4,37.0],[129.45,36.5],[129.55,36.05],[129.4,35.5],[129.05,35.1],[128.6,34.9],[128.0,34.8],[127.5,34.6],[126.9,34.4],[126.3,34.5],[126.4,34.8],[126.3,35.6],[126.6,36.0],[126.2,36.7],[126.7,37.0],[126.6,37.45],[126.4,37.7],[126.0,37.75],[125.3,37.9],[124.8,38.1],[125.3,38.75],[125.2,39.2],[124.9,39.6]];
const KCITY = [['서울',126.98,37.57],['평양',125.75,39.03],['부산',129.07,35.18],['대구',128.6,35.87],['대전',127.38,36.35],['인천',126.63,37.45],['흥남',127.6,39.83],['원산',127.45,39.15],['판문점',126.68,37.95],['압록강',125.2,40.45]];
const KS = (lat) => [[123,33],[123,lat],[132,lat],[132,33]];
const DMZ = [[123,37.75],[126.1,37.75],[126.7,37.9],[127.3,38.25],[127.9,38.3],[128.4,38.62],[132,38.62],[132,33],[123,33]];
const KSTAGE = [
  { d:'1950. 6. 이전', t:'38도선으로 나뉜 한반도', s:KS(38), ar:[], x:'광복 뒤 미군과 소련군이 38도선을 경계로 남북을 나누어 점령했고, 1948년 남북에 각각 정부가 세워졌어요.' },
  { d:'1950. 6. 25.', t:'북한군의 기습 남침', s:KS(38), ar:[[126.6,38.4,126.95,37.7,'r'],[127.4,38.4,127.6,37.7,'r'],[128.3,38.4,128.6,37.8,'r']], x:'새벽에 북한군이 38도선 전역에서 남침했어요. 유엔 안전 보장 이사회는 이를 침략으로 규정했어요.' },
  { d:'1950. 6. 28.', t:'3일 만에 서울 함락', s:KS(37.15), ar:[[126.98,37.6,127.1,36.6,'r'],[127.9,37.4,128.0,36.6,'r']], x:'서울이 함락되고 정부는 대전 → 대구 → 부산으로 옮겨 갔어요. 미국 등 16개국이 유엔군으로 참전했어요.' },
  { d:'1950. 8. ~ 9.', t:'낙동강 방어선', s:[[128.25,33],[128.25,35.7],[128.55,36.25],[129.4,36.25],[132,36.25],[132,33]], ar:[[127.4,36.3,128.3,35.9,'r'],[127.5,35.3,128.2,35.3,'r'],[128.7,36.7,129.2,36.3,'r']], x:'국군과 유엔군은 낙동강을 따라 마지막 방어선을 지키며 버텼어요.' },
  { d:'1950. 9. 15. ~ 28.', t:'인천 상륙 작전 · 서울 수복', s:KS(37.9), ar:[[125.6,37.1,126.6,37.45,'b'],[126.7,37.45,126.98,37.57,'b'],[128.6,35.9,127.6,37.0,'b']], x:'유엔군이 인천에 상륙해 북한군의 허리를 끊었고, 9월 28일 서울을 되찾았어요.' },
  { d:'1950. 10. ~ 11.', t:'평양 점령 · 압록강까지', s:[[123,33],[123,40.3],[125.4,40.6],[126.3,41.1],[127.4,41.0],[128.3,41.3],[129.2,40.9],[129.9,41.4],[132,41.4],[132,33]], ar:[[126.98,37.9,125.75,38.95,'b'],[125.75,39.1,125.6,40.3,'b'],[127.5,39.3,128.2,40.9,'b']], x:'국군과 유엔군은 38도선을 넘어 10월 19일 평양을 점령하고 압록강까지 나아갔어요.' },
  { d:'1950. 10. ~ 1951. 1.', t:'중국군 참전 · 1·4 후퇴', s:[[123,33],[123,36.95],[127.2,36.95],[128.2,37.2],[129.3,37.3],[132,37.3],[132,33]], ar:[[125.9,40.6,125.8,38.7,'r'],[126.5,38.4,127.0,37.2,'r'],[127.6,39.9,129.0,35.3,'s']], x:'중국군이 참전하자 흥남에서 피란민과 군인이 배로 철수했고(흥남 철수), 1951년 1월 4일 서울을 다시 빼앗겼어요.' },
  { d:'1951. 3. ~ 7.', t:'서울 재수복 · 전선 교착', s:DMZ, ar:[[127.1,37.1,126.98,37.55,'b'],[128.2,37.2,128.3,38.2,'b']], x:'서울을 되찾은 뒤 38도선 부근에서 전선이 굳었고, 1951년 7월 정전 회담이 시작됐어요.' },
  { d:'1953. 7. 27.', t:'정전 협정 · 휴전선', s:DMZ, ar:[], dmz:1, x:'판문점에서 정전 협정이 체결되어 군사 분계선과 비무장 지대(DMZ)가 생겼어요. 이후 한미 상호 방위 조약이 맺어졌어요.' }
];
const HMK = 1.6, hmx = lon => (lon - 127.5)*HMK, hmz = lat => -(lat - 38)*HMK*1.25;
function histMapDraw(cv, st){ const x = cv.getContext('2d'), W2 = cv.width, H2 = cv.height, px = lon => (lon - 124)/7*W2, py = lat => (43 - lat)/9*H2;
  x.clearRect(0, 0, W2, H2); x.save(); x.beginPath(); KP.forEach(([lo, la], i) => i ? x.lineTo(px(lo), py(la)) : x.moveTo(px(lo), py(la))); x.closePath(); x.clip();
  x.fillStyle = '#D8494A'; x.fillRect(0, 0, W2, H2); x.fillStyle = '#3A7FE0'; x.beginPath(); st.s.forEach(([lo, la], i) => i ? x.lineTo(px(lo), py(la)) : x.moveTo(px(lo), py(la))); x.closePath(); x.fill();
  x.globalAlpha = 0.06; x.fillStyle = '#fff'; for(let i=0;i<60;i++){ x.beginPath(); x.arc(Math.random()*W2, Math.random()*H2, 6 + Math.random()*20, 0, 7); x.fill(); } x.globalAlpha = 1;
  if(st.dmz){ x.strokeStyle = '#FFE27A'; x.lineWidth = 16; x.beginPath(); DMZ.slice(0, 6).forEach(([lo, la], i) => i ? x.lineTo(px(lo), py(la)) : x.moveTo(px(lo), py(la))); x.stroke(); }
  x.restore();
  x.setLineDash([14, 10]); x.strokeStyle = 'rgba(255,255,255,.75)'; x.lineWidth = 3; x.beginPath(); x.moveTo(px(124.4), py(38)); x.lineTo(px(129.2), py(38)); x.stroke(); x.setLineDash([]);
  x.font = '700 26px "Noto Sans KR", sans-serif'; x.fillStyle = 'rgba(255,255,255,.85)'; x.fillText('38도선', px(124.0) + 6, py(38) - 10);
  x.strokeStyle = 'rgba(20,20,30,.8)'; x.lineWidth = 4; x.beginPath(); KP.forEach(([lo, la], i) => i ? x.lineTo(px(lo), py(la)) : x.moveTo(px(lo), py(la))); x.closePath(); x.stroke();
  KCITY.forEach(([n, lo, la]) => { x.fillStyle = '#fff'; x.beginPath(); x.arc(px(lo), py(la), 9, 0, 7); x.fill(); x.font = '800 34px "Noto Sans KR", sans-serif'; x.lineWidth = 7; x.strokeStyle = 'rgba(10,14,30,.85)'; x.strokeText(n, px(lo) + 14, py(la) + 12); x.fillText(n, px(lo) + 14, py(la) + 12); }); }
function histArrow(a){ const [lo1, la1, lo2, la2, c] = a, p1 = new THREE.Vector3(hmx(lo1), 0.55, hmz(la1)), p2 = new THREE.Vector3(hmx(lo2), 0.55, hmz(la2)), mid = p1.clone().add(p2).multiplyScalar(0.5); mid.y += 0.5 + p1.distanceTo(p2)*0.15;
  const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2), col = c === 'r' ? '#FF5A4E' : c === 's' ? '#FFFFFF' : '#5CB8FF', m = new THREE.MeshBasicMaterial({ color:col });
  const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 30, 0.09, 8, false), m), head = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.55, 12), m), g = new THREE.Group(); g.add(tube, head);
  const tan = curve.getTangent(1); head.position.copy(p2); head.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan); g.userData = { tube, head, n:tube.geometry.index.count }; return g; }
function buildHistScene(){ histScene = new THREE.Scene(); histScene.background = new THREE.Color('#0D1530'); histScene.fog = new THREE.Fog('#0D1530', 30, 70);
  histScene.add(new THREE.HemisphereLight('#E8F0FF', '#20283F', 0.9)); const dl = new THREE.DirectionalLight('#FFF4E0', 0.6); dl.position.set(-6, 14, 8); histScene.add(dl);
  // 지도 테이블
  const G = new THREE.Group(); histScene.add(G); const sea = new THREE.Mesh(new THREE.BoxGeometry(18, 0.3, 22), mat('#1D4E7A')); sea.position.set(0, -0.15, -0.6); G.add(sea);
  const sh = new THREE.Shape(KP.map(([lo, la]) => new THREE.Vector2(hmx(lo), -hmz(la)))), land = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth:0.4, bevelEnabled:false }), mat('#C9B98A')); land.rotation.x = -Math.PI/2; G.add(land);
  const mkTop = () => { const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 1316; const tex = new THREE.CanvasTexture(cv), pl = new THREE.Mesh(new THREE.PlaneGeometry(7*HMK, 9*HMK*1.25), new THREE.MeshBasicMaterial({ map:tex, transparent:true, depthWrite:false }));
    pl.rotation.x = -Math.PI/2; pl.position.set(hmx(127.5), 0.42, hmz(38.5)); G.add(pl); return { cv, tex, pl }; };
  histMap = { G, a:mkTop(), b:mkTop(), i:0, fade:1, arrows:[], k:0 }; histMap.b.pl.position.y = 0.43; histMap.b.pl.material.opacity = 0;
  // 연표 길
  const L = new THREE.Group(); L.position.set(40, 0, 0); histScene.add(L); const road = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.1, HIST_E.length*4.5 + 8), mat('#3A3F5A')); road.position.set(0, -0.05, -HIST_E.length*2.25 + 2); L.add(road);
  const dec = { 194:'#6E8BFF', 195:'#E2574C', 196:'#3BB273', 197:'#F2A93B', 198:'#9B6BFF', 199:'#3FC1C9' }, pins = [];
  HIST_E.forEach((e, i) => { const z = -i*4.5, sx = i % 2 ? 1.9 : -1.9, col = dec[e.k.slice(0, 3)] || '#888';
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.6, 0.18), mat('#2A2F45')); post.position.set(sx, 0.8, z); L.add(post);
    const cv = document.createElement('canvas'); cv.width = 512; cv.height = 300; const x = cv.getContext('2d'); x.fillStyle = '#FFF8E8'; x.fillRect(0, 0, 512, 300); x.fillStyle = col; x.fillRect(0, 0, 512, 84);
    x.fillStyle = '#fff'; x.font = '900 62px "Noto Sans KR", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(e.k.slice(0, 4) + '. ' + (+e.k.slice(5, 7)) + '.', 256, 44);
    x.fillStyle = '#1E1A14'; let fs = 58; x.font = '900 ' + fs + 'px "Noto Sans KR", sans-serif'; const words = e.n; while(fs > 30 && x.measureText(words).width > 480){ fs -= 4; x.font = '900 ' + fs + 'px "Noto Sans KR", sans-serif'; }
    if(x.measureText(words).width > 480){ const h = Math.ceil(words.length/2), sp = words.lastIndexOf(' ', h + 3); const a = sp > 0 ? words.slice(0, sp) : words.slice(0, h), b = sp > 0 ? words.slice(sp + 1) : words.slice(h); x.fillText(a, 256, 165); x.fillText(b, 256, 235); } else x.fillText(words, 256, 190);
    const qv = document.createElement('canvas'); qv.width = 512; qv.height = 300; const q = qv.getContext('2d'); q.fillStyle = '#2A2F48'; q.fillRect(0, 0, 512, 300); q.strokeStyle = col; q.lineWidth = 10; q.strokeRect(5, 5, 502, 290); q.fillStyle = col; q.font = '900 150px "Noto Sans KR", sans-serif'; q.textAlign = 'center'; q.textBaseline = 'middle'; q.fillText('?', 256, 150);
    const tex = new THREE.CanvasTexture(cv), qtex = new THREE.CanvasTexture(qv), board = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 1.23), new THREE.MeshBasicMaterial({ map:tex, side:THREE.DoubleSide })); board.position.set(sx, 2.15, z); board.rotation.y = sx > 0 ? -0.35 : 0.35; board.visible = false; L.add(board); post.visible = false;
    const tile = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.12, 0.5), mat(col)); tile.position.set(0, 0.02, z); L.add(tile); pins.push({ board, post, z, sx, tex, qtex }); });
  histLine = { L, pins, i:0, zc:0 }; }
function histSetView(v){ histView = v; const ui = $('#engUI'); ui.classList.toggle('mini', !!v); if(v && !histScene) buildHistScene();
  if(v === 'map'){ Object.assign(camLim, { pmin:0.35, pmax:1.45, dmin:10, dmax:34 }); cam.yaw = 0; cam.pitch = 1.0; cam.dist = window.innerWidth < window.innerHeight ? 28 : 22; cam.t.set(0, 0, -0.5); me.group.visible = false; }
  if(v === 'line'){ Object.assign(camLim, { pmin:0.1, pmax:1.0, dmin:5, dmax:16 }); cam.yaw = 0.12; cam.pitch = 0.38; cam.dist = window.innerWidth < window.innerHeight ? 13 : 9; histScene.add(me.group); me.group.visible = true; me.pos.set(40, 0, 2); me.ry = me.targetRy = Math.PI; me.mode = 'idle'; }
  if(!v){ camera.clearViewOffset(); me.group.visible = false; Object.assign(camLim, { pmin:-0.3, pmax:0.6, dmin:6, dmax:12 }); cam.yaw = 0; cam.pitch = 0.08; cam.dist = 9.5; cam.t.set(0, 2.6, 0); } }
function histMapStage(k){ const M = histMap; k = Math.max(0, Math.min(KSTAGE.length - 1, k)); M.k = k; const st = KSTAGE[k];
  const nb = M.i ? M.a : M.b; histMapDraw(nb.cv, st); nb.tex.needsUpdate = true; nb.pl.position.y = 0.44; (M.i ? M.b : M.a).pl.position.y = 0.42; M.i = 1 - M.i; M.fade = 0;
  M.arrows.forEach(g => M.G.remove(g)); M.arrows = st.ar.map(a => { const g = histArrow(a); M.G.add(g); g.userData.tube.geometry.setDrawRange(0, 0); g.userData.head.visible = false; return g; }); M.at = 0;
  histBoard('6·25 전쟁 · ' + (k + 1) + ' / ' + KSTAGE.length, st.t, st.d);
  engSet('<div class="hmapnav"><button type="button" class="btn" id="hmP"' + (k ? '' : ' disabled') + '>◀</button><div><b>' + escHtml(st.d) + '</b><span>' + escHtml(st.t) + '</span></div><button type="button" class="btn primary" id="hmN"' + (k < KSTAGE.length - 1 ? '' : ' disabled') + '>▶</button></div>'
    + '<div class="hdots">' + KSTAGE.map((_, j) => '<i class="' + (j === k ? 'on' : '') + '"></i>').join('') + '</div><p class="etip">' + escHtml(st.x) + '</p>'
    + '<p class="etip" style="font-size:11.5px">🟦 국군·유엔군 지역 🟥 북한군·중국군 지역 · 화살표 = 진격 방향' + (k === 6 ? ' · 흰 화살표 = 흥남 철수' : '') + ' · 손가락으로 지도를 돌려 볼 수 있어요</p>'
    + '<button type="button" class="btn big" id="hmX">⬅ 한국사 탐구실로</button>');
  $('#hmP').onclick = () => histMapStage(k - 1); $('#hmN').onclick = () => histMapStage(k + 1); $('#hmX').onclick = () => { histSetView(''); histHome(); }; }
function histMapOpen(){ histSetView('map'); histMapStage(0); toast('🗺 ▶를 눌러 6·25 전쟁의 전선 변화를 따라가 봐요'); }
function histLineGo(i){ const H = histLine; i = Math.max(0, Math.min(HIST_E.length - 1, i)); H.i = i; H.max = Math.max(H.max || 0, i); const e = HIST_E[i], next = HIST_E[i + 1];
  const rel = HIST_C.find(c => c.a === e.n || c.a.indexOf(e.n) >= 0 || e.n.indexOf(c.a.split('(')[0]) >= 0 && c.a.length > 3);
  H.pins.forEach((p, j) => { const show = j >= i && j <= i + 1; p.board.visible = p.post.visible = show; p.board.material.map = j === i + 1 && j > H.max ? p.qtex : p.tex; p.board.material.needsUpdate = true; });
  histBoard(e.k.slice(0, 4) + '년 ' + (+e.k.slice(5, 7)) + '월', e.n, '연표 길 ' + (i + 1) + ' / ' + HIST_E.length);
  let opts = []; if(next){ let pool = HIST_E.filter((v, j) => j > i + 1 && j <= i + 8); if(pool.length < 2) pool = HIST_E.filter((v, j) => j !== i + 1 && j !== i && Math.abs(j - i) <= 8); opts = histShuf([next.n].concat(histShuf(pool).slice(0, 2).map(v => v.n))); }
  engSet('<div class="hmapnav"><button type="button" class="btn" id="hlP"' + (i ? '' : ' disabled') + '>◀</button><div><b>' + e.k.slice(0, 4) + '. ' + (+e.k.slice(5, 7)) + '.</b><span>' + escHtml(e.n) + '</span></div><span class="hlc">' + (i + 1) + '/' + HIST_E.length + '</span></div>'
    + (rel && rel.x ? '<p class="etip">📌 ' + escHtml(rel.x) + '</p>' : '')
    + (next ? (i + 1 <= H.max ? '<button type="button" class="btn primary big" id="hlN">▶ 다음: ' + escHtml(next.n) + '</button>'
      : '<div class="eh" style="font-size:14px">❓ 바로 다음에 일어난 사건은?</div><div class="eopts">' + opts.map((o, k) => '<button type="button" class="btn" data-k="' + k + '">' + escHtml(o) + '</button>').join('') + '</div><div id="hlHint"></div>')
      : '<p class="etip" style="color:#9FE8B8;font-weight:800">🎉 연표 길 끝까지 왔어요! 1945 → 1993</p>')
    + '<button type="button" class="btn big" id="hlX">⬅ 한국사 탐구실로</button>');
  $('#hlP').onclick = () => histLineGo(i - 1); $('#hlX').onclick = () => { histSetView(''); histHome(); }; if($('#hlN')) $('#hlN').onclick = () => histLineGo(i + 1);
  document.querySelectorAll('#engBody .eopts .btn').forEach(b => b.onclick = () => { const ok = opts[+b.dataset.k] === next.n;
    if(ok){ b.classList.add('right'); histLineGo(i + 1); toast('✅ 정답! ' + next.k.slice(0, 4) + '년 ' + next.n); }
    else { b.classList.add('wrong'); b.disabled = true; const w = HIST_E.find(v => v.n === opts[+b.dataset.k]); $('#hlHint').innerHTML = '<p class="etip" style="color:#FFB4A8">❌ ' + escHtml(w.n) + '은(는) ' + w.k.slice(0, 4) + '년이에요. 힌트: 정답은 ' + next.k.slice(0, 4) + '년!</p>'; } }); }
function histLineOpen(){ histSetView('line'); histLine.max = 0; histLineGo(0); toast('🛤 다음 사건을 맞히면 한 칸씩 걸어가요'); }
function histTick(dt){ histT += dt; if(!histView){ engTick(dt); return; }
  { const w = window.innerWidth, h = window.innerHeight, ui = $('#engUI'); if(w > 760) camera.setViewOffset(w, h, (ui.offsetWidth + 16)/2, 0, w, h); else camera.setViewOffset(w, h, 0, ui.offsetHeight/2, w, h); }
  if(histView === 'map' && histMap){ const M = histMap; if(M.fade < 1){ M.fade = Math.min(1, M.fade + dt*2.2); const nw = M.i ? M.b : M.a, od = M.i ? M.a : M.b; nw.pl.material.opacity = M.fade; od.pl.material.opacity = 1 - M.fade*0.999; }
    M.at = (M.at || 0) + dt; M.arrows.forEach((g, j) => { const u = Math.max(0, Math.min(1, (M.at - 0.4 - j*0.35)/1.1)); g.userData.tube.geometry.setDrawRange(0, Math.floor(u*g.userData.n/6)*6); g.userData.head.visible = u >= 1; if(u >= 1) g.userData.head.scale.setScalar(1 + Math.sin(histT*6)*0.12); }); }
  if(histView === 'line' && histLine){ const H = histLine, p = H.pins[H.i], tz = p.z + 2.6; const dz = tz - (me.pos.z), sp = Math.min(Math.abs(dz), dt*6);
    if(Math.abs(dz) > 0.05){ me.pos.z += Math.sign(dz)*sp; me.pos.x += (40 - me.pos.x)*Math.min(1, dt*4); me.targetRy = dz < 0 ? Math.PI : 0; me.mode = 'walk'; } else { me.mode = 'idle'; me.targetRy = p.sx > 0 ? -Math.PI*0.75 : Math.PI*0.75; }
    me.update(dt); const kk = 1 - Math.exp(-dt*4); cam.t.lerp(new THREE.Vector3(40, 1.7, p.z - 1.6), kk); if(!H.drag){ let dy = 0.12 - cam.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); cam.yaw += dy*kk*0.5; }
    H.pins.forEach((q, j) => { const s = j === H.i ? 1.15 : 1; q.board.scale.x += (s - q.board.scale.x)*Math.min(1, dt*6); q.board.scale.y = q.board.scale.x; }); } }

const EXAM_Q = [
{ p:3.5, q:'(가)에 들어갈 단체로 옳은 것은?', box:'광복 직후 여운형은 안재홍 등과 함께 [ (가) ]을/를 조직하여 치안대를 두고 전국 각지에 지부를 설치하였다. 이후 [ (가) ]은/는 미군이 들어오기 직전 조선 인민 공화국 수립을 선포하고 지부를 인민 위원회로 바꾸었다.',
  o:['한국 민주당','조선 건국 준비 위원회','독립 촉성 중앙 협의회','좌우 합작 위원회','남조선 노동당'], a:2,
  n:['송진우·김성수 등 우익, 임시 정부 지지(1945.9)','정답 · 1945.8 여운형·안재홍','이승만이 귀국 후 조직(1945.10)','여운형·김규식 중도 세력(1946.7)','박헌영 중심 좌익 정당(1946.11)'] },
{ p:3.6, q:'다음 결정이 발표된 회의 이후에 있었던 사실로 옳은 것은?', box:'조선을 독립 국가로 재건하기 위하여 임시 조선 민주주의 정부를 수립한다. …… 미·영·중·소 4개국이 최고 5년 기한으로 신탁 통치를 실시한다.', src:'1945. 12.',
  o:['조선 건국 준비 위원회가 조직되었다.','맥아더 포고령 제1호가 발표되었다.','미소 공동 위원회가 개최되었다.','카이로 선언에서 한국의 독립이 약속되었다.','8·15 광복을 맞이하였다.'], a:3,
  n:['1945.8 → 회의 이전','1945.9 → 회의 이전','정답 · 제1차 미소 공동 위원회 1946.3','1943 → 회의 이전','1945.8 → 회의 이전'] },
{ p:4, q:'밑줄 친 \'발언\'이 나온 시기로 옳은 것은?', box:'이제 무기 휴회된 공위가 재개될 기색도 보이지 않으며 통일 정부를 고대하나 여의케 되지 않으니, 우리는 남방만이라도 임시 정부 혹은 위원회 같은 것을 조직하여 38 이북에서 소련이 철수하도록 세계 공론에 호소하여야 될 것이다.', src:'이승만의 <u>발언</u>',
  tl:['모스크바 3국 외상 회의','제1차 미소 공동 위원회','좌우 합작 위원회 결성','제2차 미소 공동 위원회','남북 협상','5·10 총선거'], o:['(가)','(나)','(다)','(라)','(마)'], fix:1, a:2,
  n:['1945.12 ~ 1946.3','정답 · 정읍 발언 1946.6 (1차 미소공위 결렬 뒤, 좌우 합작 위원회 7월 전)','1946.7 ~ 1947.5','1947.5 ~ 1948.4','1948.4 ~ 1948.5'] },
{ p:4.1, q:'(가) 원칙에 대한 설명으로 옳은 것만을 <보기>에서 고른 것은?', box:'[ (가) ]<br>1. 조선의 민주 독립을 보장한 삼상 회의 결정에 의하여 남북을 통한 좌우 합작으로 민주주의 임시 정부를 수립할 것<br>3. 토지 개혁에 있어 몰수, 유조건 몰수, 체감 매상하여 농민에게 무상으로 분여할 것<br>6. 친일파 및 민족 반역자를 처리할 조례를 입법 기구에서 심리 결정할 것',
  bogi:['ㄱ. 여운형, 김규식 등 중도 세력이 발표하였다.','ㄴ. 이승만과 한국 민주당이 적극 지지하였다.','ㄷ. 토지 개혁 방식으로 유상 매입·유상 분배를 제시하였다.','ㄹ. 친일파 처리 문제를 담고 있었다.'],
  o:['ㄱ, ㄴ','ㄱ, ㄷ','ㄱ, ㄹ','ㄴ, ㄷ','ㄷ, ㄹ'], fix:1, a:3,
  n:['ㄴ ✗ 우익 주요 세력은 반대·불참','ㄷ ✗ 몰수·유조건 몰수·체감 매상 → 무상 분여','정답 · 좌우 합작 7원칙(1946.10)','',''] },
{ p:3.5, q:'다음 글을 쓴 인물의 활동으로 옳은 것은?', box:'나는 통일된 조국을 건설하려다가 38도선을 베고 쓰러질지언정 일신의 구차한 안일을 취하여 단독 정부를 세우는 데는 협력하지 아니하겠다.', src:'「삼천만 동포에게 읍고함」, 1948',
  o:['정읍에서 남한 단독 정부 수립을 주장하였다.','조선 건국 준비 위원회를 조직하였다.','김규식과 함께 평양에서 남북 협상에 참여하였다.','남조선 노동당을 결성하였다.','5·10 총선거로 제헌 국회 의원에 당선되었다.'], a:3,
  n:['이승만(1946.6)','여운형(1945.8)','정답 · 김구, 1948.4 남북 협상','박헌영','김구는 5·10 총선거에 불참'] },
{ p:4, q:'다음 사건에 대한 설명으로 옳은 것은?', box:'1948년 4월 3일 제주도에서 남한 단독 선거 반대 등을 내걸고 무장봉기가 일어났다. 이후 진압 과정에서 수많은 제주도민이 희생되었다.',
  o:['1947년 3·1절 기념 대회에서 일어난 경찰의 발포가 배경이 되었다.','남북 협상이 성공한 결과로 일어났다.','군대 안 좌익 세력이 제주도 출동 명령을 거부하며 시작되었다.','이 사건으로 5·10 총선거가 전국에서 무효가 되었다.','반민 특위 해체에 반발하여 일어났다.'], a:1,
  n:['정답 · 제주 4·3 사건의 배경','남북 협상은 실패','여수·순천 10·19 사건','제주도 2개 선거구만 무산','반민 특위 해체는 1949'] },
{ p:3.6, q:'밑줄 친 \'선거\'에 대한 설명으로 옳지 않은 것은?', box:'1948년 5월 10일, 유엔 한국 임시 위원단의 감시 아래 우리나라 최초의 민주적 <u>선거</u>가 실시되었다.',
  o:['21세 이상 모든 국민에게 선거권이 주어졌다.','보통·평등·직접·비밀 선거로 실시되었다.','김구, 김규식 등 남북 협상파가 참여하지 않았다.','제주도의 일부 선거구에서는 투표가 이루어지지 못하였다.','이 선거로 구성된 국회는 대통령 직선제 헌법을 제정하였다.'], a:5,
  n:['옳음','옳음','옳음','옳음 · 4·3 사건 영향','정답(옳지 않음) · 제헌 헌법은 국회 간선제'] },
{ p:4.1, q:'다음 헌법에 대한 설명으로 옳은 것은?', box:'유구한 역사와 전통에 빛나는 우리들 대한 국민은 기미 삼일 운동으로 대한민국을 건립하여 세계에 선포한 위대한 독립 정신을 계승하여 ……<br>제1조 대한민국은 민주 공화국이다.',
  o:['대통령을 국회에서 선출하도록 하였다.','대통령의 임기를 6년으로 하고 중임 제한을 두지 않았다.','대통령 선거인단에서 7년 단임의 대통령을 선출하였다.','초대 대통령에 한해 중임 제한을 없앴다.','내각 책임제와 양원제 국회를 채택하였다.'], a:1,
  n:['정답 · 제헌 헌법(1948.7.17)','유신 헌법(1972)','전두환 정부 헌법(1980)','사사오입 개헌(1954)','4·19 혁명 이후 개헌(1960)'] },
{ p:4.4, q:'(가)~(다)를 일어난 순서대로 옳게 나열한 것은?', bx:['(가) 제헌 국회가 친일파 처벌을 위해 반민족 행위 처벌법을 제정하였다.','(나) 제헌 국회가 농지 개혁법을 제정하여 3정보 상한을 정하였다.','(다) 유엔 총회가 대한민국을 한반도의 유일한 합법 정부로 승인하였다.'],
  o:['(가) - (나) - (다)','(가) - (다) - (나)','(나) - (가) - (다)','(나) - (다) - (가)','(다) - (가) - (나)'], fix:1, a:2,
  n:['','정답 · 1948.9 → 1948.12 → 1949.6','','',''] },
{ p:4, q:'(가) 기구에 대한 설명으로 옳은 것만을 <보기>에서 고른 것은?', box:'제헌 국회는 반민족 행위 처벌법에 따라 [ (가) ]을/를 설치하였다. [ (가) ]은/는 1949년 1월부터 이광수, 최남선, 최린 등을 체포하여 조사하였다.',
  bogi:['ㄱ. 일부 경찰에게 사무실을 습격당하였다.','ㄴ. 이승만 정부의 적극적인 지원으로 활동 기간이 늘어났다.','ㄷ. 공소 시효가 단축되면서 활동을 마치게 되었다.','ㄹ. 미군정이 친일파 청산을 위해 설치하였다.'],
  o:['ㄱ, ㄴ','ㄱ, ㄷ','ㄴ, ㄷ','ㄴ, ㄹ','ㄷ, ㄹ'], fix:1, a:2,
  n:['ㄴ ✗ 이승만 정부는 반공 우선, 비협조','정답 · 반민 특위(1949.6 습격, 공소 시효 1950.9 → 1949.8)','','ㄹ ✗ 제헌 국회가 설치',''] },
{ p:4, q:'(가), (나)에 대한 설명으로 옳은 것은?', bx:['(가) 3정보를 넘는 농지는 정부가 사들여 농민에게 나누어 주고, 농민은 5년 동안 수확량의 30%씩 갚는다.','(나) 5정보 이상을 가진 지주의 토지를 모두 무상으로 몰수하여 농민에게 무상으로 나누어 준다.'],
  o:['(가)는 북조선 임시 인민 위원회가 실시하였다.','(가)에 따라 지주는 지가 증권을 받았다.','(나)는 제헌 국회가 제정한 법에 따라 실시되었다.','(나)는 6·25 전쟁이 끝난 뒤에 실시되었다.','(가), (나) 모두 좌우 합작 7원칙을 바탕으로 하였다.'], a:2,
  n:['(가)는 남한 농지 개혁법(1949)','정답 · 유상 매입 → 지가 증권','(나)는 북조선 임시 인민 위원회','(나)는 1946년','관계없음'] },
{ p:3.6, q:'다음 선언이 발표된 이후의 사실로 옳은 것은?', box:'이 방위선은 알류샨 열도에서 일본을 거쳐 오키나와로 이어진다. …… 기타 태평양 지역의 군사적 안전에 대해서는 누구도 보장할 수 없다.', src:'미국 국무 장관의 연설, 1950. 1.',
  o:['북한군이 38도선을 넘어 남침하였다.','대한민국 정부가 수립되었다.','농지 개혁법이 제정되었다.','반민족 행위 특별 조사 위원회가 조직되었다.','5·10 총선거가 실시되었다.'], a:1,
  n:['정답 · 6·25 전쟁 1950.6','1948.8','1949.6','1948.10','1948.5'] },
{ p:4.4, q:'다음 상황이 나타난 시기로 옳은 것은?', box:'중국군의 공세로 국군과 유엔군이 후퇴하는 가운데, 함경남도 흥남 부두에서 군인과 피란민 10만여 명이 배를 타고 남쪽으로 철수하였다.',
  tl:['북한군 남침 (1950.6)','인천 상륙 작전 (1950.9)','중국군 참전 (1950.10)','1·4 후퇴 (1951.1)','정전 회담 시작 (1951.7)','정전 협정 (1953.7)'], o:['(가)','(나)','(다)','(라)','(마)'], fix:1, a:3,
  n:['','','정답 · 흥남 철수 1950.12','',''] },
{ p:4.1, q:'밑줄 친 \'회담\'이 진행되던 중에 있었던 사실로 옳은 것은?', box:'1951년 7월에 시작된 정전 <u>회담</u>은 군사 분계선 설정, 포로 송환 문제 등으로 2년 가까이 이어졌다.',
  o:['이승만 정부가 반공 포로를 석방하였다.','유엔군이 인천 상륙 작전을 펼쳤다.','미국이 애치슨 선언을 발표하였다.','한미 상호 방위 조약이 체결되었다.','유엔 안전 보장 이사회가 유엔군 파병을 결의하였다.'], a:1,
  n:['정답 · 1953.6','1950.9 → 회담 전','1950.1 → 전쟁 전','1953.10 → 정전 협정 뒤','1950.6 → 회담 전'] },
{ p:4, q:'다음 개헌에 대한 설명으로 옳은 것은?', box:'재적 의원 203명의 3분의 2는 135.333…명이므로 사사오입하면 135명이다. 따라서 찬성 135표로 개헌안은 가결되었다.', src:'정부의 발표, 1954',
  o:['초대 대통령에 한해 중임 제한을 없앴다.','대통령 직선제와 양원제를 주요 내용으로 하였다.','부산 정치 파동 속에서 통과되었다.','통일 주체 국민 회의에서 대통령을 뽑게 하였다.','대통령의 3회 연임을 허용하였다.'], a:1,
  n:['정답 · 사사오입 개헌(1954)','발췌 개헌(1952)','발췌 개헌(1952)','유신 헌법(1972)','3선 개헌(1969)'] },
{ p:4.4, q:'(가)~(라)를 일어난 순서대로 옳게 나열한 것은?', bx:['(가) 조봉암과 진보당 간부들이 간첩 혐의로 체포되었다.','(나) 임시 수도 부산에서 대통령 직선제 개헌안이 통과되었다.','(다) 이기붕을 부통령으로 당선시키기 위해 부정 선거가 저질러졌다.','(라) 반올림 논리로 초대 대통령의 중임 제한을 없앴다.'],
  o:['(가) - (나) - (라) - (다)','(나) - (가) - (라) - (다)','(나) - (라) - (가) - (다)','(라) - (나) - (가) - (다)','(라) - (나) - (다) - (가)'], fix:1, a:3,
  n:['','','정답 · 발췌 개헌 1952 → 사사오입 1954 → 진보당 1958 → 3·15 1960','',''] },
{ p:3.9, q:'다음 선언문이 발표된 민주 운동의 결과로 옳은 것은?', box:'마산, 서울, 기타 각지의 학생 데모는 주권을 빼앗긴 국민의 울분을 대신하여 궐기한 순정한 정의감의 발로이다. …… 3·15 선거는 불법 선거이다. 공명선거에 의하여 정부통령 선거를 다시 실시하라.', src:'대학교수단 시국 선언문',
  o:['이승만이 대통령직에서 물러났다.','5년 단임의 대통령 직선제 개헌이 이루어졌다.','유신 체제가 무너졌다.','신군부가 국가 보위 비상 대책 위원회를 설치하였다.','국가 재건 최고 회의가 권력을 장악하였다.'], a:1,
  n:['정답 · 4·19 혁명(1960)','6월 민주 항쟁(1987)','10·26 사태(1979)','5·18 이후(1980)','5·16 군사 정변(1961)'] },
{ p:4.1, q:'밑줄 친 \'정부\'에 대한 설명으로 옳은 것만을 <보기>에서 고른 것은?', box:'4·19 혁명 이후 실시된 총선거에서 민주당이 압승하였다. 국회는 윤보선을 대통령으로, 장면을 국무총리로 선출하여 새 <u>정부</u>가 출범하였다.',
  bogi:['ㄱ. 내각 책임제와 양원제 국회를 바탕으로 하였다.','ㄴ. 국가 재건 최고 회의를 설치하였다.','ㄷ. 경제 개발 5개년 계획을 세웠지만 시행하지 못하였다.','ㄹ. 일본과 한일 기본 조약을 체결하였다.'],
  o:['ㄱ, ㄴ','ㄱ, ㄷ','ㄴ, ㄷ','ㄴ, ㄹ','ㄷ, ㄹ'], fix:1, a:2,
  n:['ㄴ ✗ 5·16 군사 정변 세력','정답 · 장면 내각, 5·16으로 무너짐','','ㄹ ✗ 박정희 정부(1965)',''] },
{ p:4, q:'다음 조약의 체결 과정에 대한 설명으로 옳은 것은?', box:'제2조 1910년 8월 22일 및 그 이전에 대한 제국과 대일본 제국 간에 체결된 모든 조약 및 협정이 이미 무효임을 확인한다.',
  o:['김종필·오히라 비밀 회담의 합의를 바탕으로 추진되었다.','국민의 지지 속에서 반대 시위 없이 체결되었다.','식민 지배에 대한 사과와 배상 문제가 모두 해결되었다.','이승만 정부가 체결하였다.','닉슨 독트린이 발표된 이후 체결되었다.'], a:1,
  n:['정답 · 1962 메모 → 1965 한일 기본 조약','6·3 시위(1964) 등 반대 시위','사과·배상 문제가 남음','박정희 정부','닉슨 독트린은 1969'] },
{ p:4, q:'다음 헌법이 시행되던 시기에 있었던 사실로 옳은 것은?', box:'· 대통령은 통일 주체 국민 회의에서 토론 없이 무기명 투표로 선거한다.<br>· 대통령은 국가의 안전 보장 또는 공공의 안녕질서가 중대한 위협을 받을 우려가 있을 때 긴급 조치를 할 수 있다.<br>· 대통령은 국회를 해산할 수 있다.',
  o:['YH 무역 사건이 일어났다.','북한 특수 부대가 청와대를 습격하려 한 1·21 사태가 일어났다.','7·4 남북 공동 성명이 발표되었다.','브라운 각서가 체결되었다.','6·3 시위가 일어났다.'], a:1,
  n:['정답 · 유신 헌법(1972.12~1980) 시기, YH 1979','1968 → 유신 이전','1972.7 → 유신 헌법(12월)보다 먼저! 함정','1966','1964'] },
{ p:4, q:'다음 선언이 비판한 체제에서 일어난 사실로 옳지 않은 것은?', box:'국가 안보라는 구실 아래 신앙과 양심의 자유는 날로 위축되어 가고 언론의 자유, 학원의 자주성은 박탈당하고 있다. …… 이 나라는 1인 독재 아래 신음하고 있다.', src:'3·1 민주 구국 선언, 1976',
  o:['긴급 조치로 유신 반대 운동을 탄압하였다.','민청학련 사건으로 많은 학생이 구속되었다.','인혁당 재건위 사건으로 8명이 사형되었다.','김대중 납치 사건이 일어났다.','박종철 고문치사 사건이 일어났다.'], a:5,
  n:['옳음','옳음 · 1974','옳음 · 1974(2007 재심 무죄)','옳음 · 1973','정답(옳지 않음) · 1987 전두환 정부'] },
{ p:4.4, q:'다음 글이 발표된 민주화 운동에 대한 설명으로 옳은 것만을 <보기>에서 고른 것은?', box:'우리는 왜 총을 들 수밖에 없었는가? 그 대답은 너무나 간단합니다. 너무나 무자비한 만행을 더 이상 보고 있을 수만 없어서 너도나도 총을 들고 나섰던 것입니다.', src:'광주 시민 궐기문, 1980. 5. 25.',
  bogi:['ㄱ. 신군부가 비상계엄을 전국으로 확대한 것이 배경이 되었다.','ㄴ. 시민들이 시민군을 조직하여 계엄군에 맞섰다.','ㄷ. 정부가 대통령 직선제 개헌을 받아들이는 결과를 낳았다.','ㄹ. 이승만이 대통령직에서 물러나는 계기가 되었다.'],
  o:['ㄱ, ㄴ','ㄱ, ㄷ','ㄴ, ㄷ','ㄴ, ㄹ','ㄷ, ㄹ'], fix:1, a:1,
  n:['정답 · 5·18 민주화 운동','ㄷ ✗ 6월 민주 항쟁(1987)','','ㄹ ✗ 4·19 혁명(1960)',''] },
{ p:4.2, q:'밑줄 친 \'투쟁\'에 대한 설명으로 옳지 않은 것은?', box:'국가의 미래요 소망인 꽃다운 젊은이를 야만적인 고문으로 죽여 놓고 …… 국민적 여망인 개헌을 일방적으로 파기한 4·13 폭거를 철회시키기 위한 범국민적 <u>투쟁</u>을 시작한다.', src:'6·10 국민 대회 선언문, 1987',
  o:['박종철 고문치사 사건이 은폐·조작된 사실이 알려졌다.','전두환 정부가 4·13 호헌 조치를 발표하였다.','\'호헌 철폐, 독재 타도\'를 외치며 시위가 이어졌다.','노태우가 6·29 민주화 선언을 발표하였다.','결과로 대통령 임기 7년의 간선제 헌법이 만들어졌다.'], a:5,
  n:['옳음 · 배경','옳음 · 배경','옳음','옳음 · 결과','정답(옳지 않음) · 결과는 5년 단임 대통령 직선제'] },
{ p:4.1, q:'(가)~(다) 시기의 경제에 대한 설명으로 옳은 것은?', bx:['(가) 미국에서 들여온 밀·원당·면화를 가공하는 삼백 산업이 발달하였다.','(나) 노동 집약적 경공업을 중심으로 수출 주도형 정책을 펼쳤다.','(다) 철강, 조선, 전자, 석유 화학 등 중화학 공업을 육성하였다.'],
  o:['(가) 시기에 경부 고속 도로가 개통되었다.','(나) 시기에 베트남 파병으로 수출과 외화 수입이 늘었다.','(다) 시기에 저유가·저금리·저달러의 3저 호황을 맞았다.','(가) 시기에 포항 제철이 설립되었다.','(나) 시기에 수출 100억 달러를 달성하였다.'], a:2,
  n:['1970 → (나) 시기 말','정답 · 1960년대','1980년대 중반','1968 → (나) 시기','1977 → (다) 시기'] },
{ p:4, q:'다음 편지를 쓴 인물이 분신한 이후 1970년대에 있었던 사실로 옳은 것은?', box:'저희는 근로 기준법의 혜택을 조금도 못 받으며 …… 하루 15시간의 작업은 너무 과중합니다. …… 저희들의 요구는 인간으로서 최소한의 요구입니다.', src:'평화 시장 재단사의 편지',
  o:['동일 방직 여성 노동자들이 노동조합을 지키려 투쟁하였다.','전 국민 의료 보험이 실시되었다.','대학 수학 능력 시험 제도가 도입되었다.','낙동강 페놀 유출 사건이 일어났다.','정부가 과외를 전면 금지하였다.'], a:1,
  n:['정답 · 전태일(1970) 이후, 동일 방직 1977~1978','1989','1993','1991','1980'] }
];

/* 📝 실전 모의고사: 학교 시험지 형식(25문항·100점·50분) · 한국사 공부 3시간 이상이면 봉투가 열려요 */
const EXAM_NEED = 0;   // 잠금 없음 (누구나 바로 풀 수 있어요)
let histLastAct = 0; ['pointerdown', 'keydown'].forEach(t => document.addEventListener(t, () => { histLastAct = Date.now(); }, { passive:true }));
function histSecGet(){ return num(store.get('class8-histsec', 0), 0, 1e8, 0); }
setInterval(() => { if(!me || document.visibilityState !== 'visible') return; const active = Date.now() - histLastAct < 120000;
  if((room === 'hist' && active) || (me.mode === 'sit' && me.subject === '한국사')) store.set('class8-histsec', histSecGet() + 1); }, 1000);
let exam = null;
/* ✏️ 시험지 필기: 애플펜슬은 쓰기, 손가락은 스크롤·선택 (손가락 쓰기는 버튼으로 켜요) */
const INK = { on:false, strokes:[], cur:null, tool:'pen', col:'#1A1A1A', finger:false, cv:null, x:null, sc:1, ro:null };
const INK_COL = { pen:'#1A1A1A', red:'#D0021B', blue:'#1A3FA8' };
function inkSetup(){ const sh = $('#examOv .ex-sheet'); if(!sh) return; INK.strokes = []; INK.cur = null;
  const cv = document.createElement('canvas'); cv.className = 'ex-ink'; sh.appendChild(cv); INK.cv = cv; INK.x = cv.getContext('2d');
  const bar = document.createElement('div'); bar.className = 'ex-inkbar'; bar.innerHTML = '<button type="button" data-t="pen" class="on" aria-label="검정 펜"><i style="background:#1A1A1A"></i></button><button type="button" data-t="red" aria-label="빨간 펜"><i style="background:#D0021B"></i></button><button type="button" data-t="blue" aria-label="파란 펜"><i style="background:#1A3FA8"></i></button><button type="button" data-t="hl" aria-label="형광펜"><i style="background:#FFE34D"></i></button><button type="button" data-t="er" aria-label="지우개">⌫</button><button type="button" id="inkUndo" aria-label="되돌리기">↩</button><button type="button" id="inkFinger" aria-label="손가락으로 쓰기">☝</button>';
  $('#examOv').appendChild(bar);
  bar.querySelectorAll('[data-t]').forEach(b => b.onclick = () => { INK.tool = b.dataset.t; bar.querySelectorAll('[data-t]').forEach(c => c.classList.toggle('on', c === b)); });
  $('#inkUndo').onclick = () => { INK.strokes.pop(); inkRedraw(); };
  $('#inkFinger').onclick = () => { INK.finger = !INK.finger; $('#inkFinger').classList.toggle('on', INK.finger); toast(INK.finger ? '☝ 손가락으로도 써요 · 스크롤은 위쪽 막대를 끌거나 다시 꺼요' : '✏️ 펜슬로만 써요 · 손가락은 스크롤'); };
  INK.ro = new ResizeObserver(() => inkFit()); INK.ro.observe(sh); inkFit();
  const ov = $('#examOv'), draws = e => e.pointerType === 'pen' || (INK.finger && (e.pointerType === 'touch' || e.pointerType === 'mouse'));
  const pt = e => { const r = sh.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top, e.pointerType === 'pen' ? (e.pressure || 0.5) : 0.5]; };
  INK.down = e => { if(!draws(e) || !sh.contains(e.target) || e.target.closest('.ex-inkbar')) return; e.preventDefault(); const p = pt(e);
    if(INK.tool === 'er'){ INK.erasing = true; inkErase(p); return; }
    const q = document.elementFromPoint(e.clientX, e.clientY), an = q && q.closest('.ex-q'), base = inkAnchor(an);
    INK.cur = { a:an ? an.id : '', bx:base[0], by:base[1], t:INK.tool, p:[[p[0] - base[0], p[1] - base[1], p[2]]], t0:Date.now(), cx:e.clientX, cy:e.clientY, id:e.pointerId }; };
  INK.move = e => { if(INK.erasing && draws(e)){ e.preventDefault(); inkErase(pt(e)); return; } const c = INK.cur; if(!c || e.pointerId !== c.id) return; e.preventDefault();
    let evs = e.getCoalescedEvents ? e.getCoalescedEvents() : []; if(!evs || !evs.length) evs = [e]; evs.forEach(v => { const p = pt(v); c.p.push([p[0] - c.bx, p[1] - c.by, p[2]]); }); inkSeg(c); };
  INK.up = e => { INK.erasing = false; const c = INK.cur; if(!c || e.pointerId !== c.id) return; INK.cur = null;
    const moved = Math.hypot(e.clientX - c.cx, e.clientY - c.cy);
    if(moved < 6 && Date.now() - c.t0 < 350){ inkRedraw(); const el = document.elementFromPoint(e.clientX, e.clientY), b = el && el.closest('button'); if(b) b.click(); return; }
    INK.strokes.push(c); inkRedraw(); };
  ov.addEventListener('pointerdown', INK.down); ov.addEventListener('pointermove', INK.move); ov.addEventListener('pointerup', INK.up); ov.addEventListener('pointercancel', INK.up);
  INK.ts = e => { if(!$('#examOv .ex-sheet') || !sh.contains(e.target) || e.target.closest('.ex-inkbar')) return; const t = e.touches[0]; if(t && (t.touchType === 'stylus' || INK.finger)) e.preventDefault(); };
  ov.addEventListener('touchstart', INK.ts, { passive:false }); ov.addEventListener('touchmove', INK.ts, { passive:false });
  INK.on = true; }
function inkTeardown(){ if(!INK.on) return; const ov = $('#examOv'); ov.removeEventListener('pointerdown', INK.down); ov.removeEventListener('pointermove', INK.move); ov.removeEventListener('pointerup', INK.up); ov.removeEventListener('pointercancel', INK.up);
  ov.removeEventListener('touchstart', INK.ts); ov.removeEventListener('touchmove', INK.ts); if(INK.ro) INK.ro.disconnect(); const b = ov.querySelector('.ex-inkbar'); if(b) b.remove(); INK.on = false; INK.cv = null; }
function inkAnchor(el){ if(!el) return [0, 0]; const sh = $('#examOv .ex-sheet'), a = el.getBoundingClientRect(), s = sh.getBoundingClientRect(); return [a.left - s.left, a.top - s.top]; }
function inkFit(){ const sh = $('#examOv .ex-sheet'), cv = INK.cv; if(!sh || !cv) return; const w = sh.offsetWidth, h = sh.offsetHeight; let sc = Math.min(window.devicePixelRatio || 1, 2); while(w*h*sc*sc > 16e6 && sc > 0.6) sc -= 0.1;
  if(cv.width === Math.round(w*sc) && cv.height === Math.round(h*sc)) { inkRedraw(); return; } cv.width = Math.round(w*sc); cv.height = Math.round(h*sc); cv.style.width = w + 'px'; cv.style.height = h + 'px'; INK.sc = sc; inkRedraw(); }
function inkStyle(x, t){ x.lineCap = x.lineJoin = 'round'; x.globalAlpha = t === 'hl' ? 0.32 : 1; x.strokeStyle = t === 'hl' ? '#FFD400' : (INK_COL[t] || '#1A1A1A'); }
function inkW(t, pr){ return t === 'hl' ? 16 : 1.1 + pr*2.4; }
function inkPath(x, s, from){ const b = s.a ? inkAnchor(document.getElementById(s.a)) : [s.bx, s.by], P = s.p; inkStyle(x, s.t);
  if(s.t === 'hl'){ x.lineWidth = 16; x.beginPath(); P.forEach((p, i) => i ? x.lineTo(b[0] + p[0], b[1] + p[1]) : x.moveTo(b[0] + p[0], b[1] + p[1])); x.stroke(); return; }
  for(let i = Math.max(1, from || 1); i < P.length; i++){ x.lineWidth = inkW(s.t, (P[i][2] + P[i - 1][2])/2); x.beginPath(); x.moveTo(b[0] + P[i - 1][0], b[1] + P[i - 1][1]); x.lineTo(b[0] + P[i][0], b[1] + P[i][1]); x.stroke(); }
  if(P.length === 1){ x.fillStyle = x.strokeStyle; x.beginPath(); x.arc(b[0] + P[0][0], b[1] + P[0][1], inkW(s.t, P[0][2])/2, 0, 7); x.fill(); } }
function inkRedraw(){ const x = INK.x, cv = INK.cv; if(!x) return; x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, cv.width, cv.height); x.setTransform(INK.sc, 0, 0, INK.sc, 0, 0);
  INK.strokes.filter(s => s.t === 'hl').forEach(s => inkPath(x, s)); INK.strokes.filter(s => s.t !== 'hl').forEach(s => inkPath(x, s)); x.globalAlpha = 1; }
function inkSeg(c){ const x = INK.x; if(!x) return; x.setTransform(INK.sc, 0, 0, INK.sc, 0, 0); if(c.t === 'hl'){ inkRedraw(); inkPath(x, c); x.globalAlpha = 1; return; } inkPath(x, c, c.p.length - 1); x.globalAlpha = 1; }
function inkErase(p){ const before = INK.strokes.length; INK.strokes = INK.strokes.filter(s => { const b = s.a ? inkAnchor(document.getElementById(s.a)) : [s.bx, s.by]; return !s.p.some(q => Math.hypot(b[0] + q[0] - p[0], b[1] + q[1] - p[1]) < 14); }); if(INK.strokes.length !== before) inkRedraw(); }

const EXAM_NUM = ['①','②','③','④','⑤'];
function examOpen(id){ examCur = EXAMS.find(e => e.id === id) || EXAMS[0]; const E = examCur, sec = histSecGet(), ok = sec >= EXAM_NEED || amOwner, best = exRec(E.id).best, el = $('#examOv'); el.hidden = false; el.className = 'cover';
  const pct = Math.min(100, sec/EXAM_NEED*100), left = Math.max(0, EXAM_NEED - sec);
  el.innerHTML = '<div class="ex-cover"><button type="button" class="ex-x" id="exX" aria-label="닫기">✕</button>'
    + '<div class="ex-env' + (ok ? '' : ' locked') + '" id="exEnv"><div class="ex-flap"></div><div class="ex-paper-peek"><b>' + escHtml(E.subj) + '</b><span>' + escHtml(E.title) + '</span></div>'
    + '<div class="ex-front"><div class="ex-lbl"><small>2026학년도 ' + escHtml(E.term) + '</small><b>' + escHtml(E.subj + ' ' + E.title) + '</b><span>' + escHtml(E.range) + ' · 선택형 ' + E.q.length + '문항 · ' + E.min + '분</span><i>8반 3D 교실 출제</i></div>'
    + '</div><div class="ex-seal">' + (ok ? '開封<br>가능' : '🔒') + '</div><div class="ex-stamp">대외비</div></div>'
    + (ok ? '<button type="button" class="ex-btn" id="exGo">✉ 봉투 열고 시험 시작</button>'
      : '<div class="ex-lock"><b>🔒 한국사를 3시간 공부하면 봉투가 열려요</b><div class="ex-bar"><i style="width:' + pct + '%"></i></div><span>지금까지 ' + fmtTime(sec) + ' · ' + fmtTime(left) + ' 남았어요</span><p>한국사 탐구실에서 카드·퀴즈·지도를 공부하거나, 교실 책상에서 과목을 <b>한국사</b>로 골라 앉아 있으면 시간이 쌓여요.</p></div>')
    + (best != null ? '<p class="ex-note">최고 점수 ' + best + '점</p>' : '') + '</div>';
  $('#exX').onclick = examClose; if($('#exGo')) $('#exGo').onclick = () => { $('#exEnv').classList.add('open'); setTimeout(examStart, 1100); }; }
function examClose(){ inkTeardown(); const el = $('#examOv'); el.hidden = true; el.innerHTML = ''; if(exam && exam.timer) clearInterval(exam.timer); exam = null; if(room === 'exam') exhRender(); }
function examStart(only){ const EQ = examCur.q, base = only ? only : EQ.map((_, i) => i);
  const qs = base.map(i => { const q = EQ[i]; const idx = [0, 1, 2, 3, 4]; if(!q.fix) idx.sort(() => Math.random() - 0.5); return { i, q, idx, pick:-1 }; });
  exam = { qs, t0:Date.now(), lim:(only ? Math.max(5, qs.length*2) : examCur.min)*60, done:false, only:!!only };
  const el = $('#examOv'); el.className = 'paper';
  const qHtml = (x, k) => { const q = x.q; let h = '<div class="ex-q" id="exq' + k + '"><p class="ex-qt"><b>' + (k + 1) + '.</b> ' + q.q + ' <span class="ex-pt">[' + q.p + '점]</span></p>';
    if(q.box) h += '<div class="ex-box">' + q.box + (q.src ? '<div class="ex-src">- ' + q.src + ' -</div>' : '') + '</div>';
    if(q.bx) h += '<div class="ex-box">' + q.bx.map(s => '<p>' + s + '</p>').join('') + '</div>';
    if(q.tl) h += '<div class="ex-tl"><div class="ex-tl-row">' + ['(가)','(나)','(다)','(라)','(마)'].map(s => '<span>' + s + '</span>').join('') + '</div><div class="ex-tl-line">' + q.tl.map(s => '<i><em>' + s + '</em></i>').join('') + '</div></div>';
    if(q.bogi) h += '<div class="ex-bogi"><div class="ex-bogi-t">&lt;보 기&gt;</div>' + q.bogi.map(s => '<p>' + s + '</p>').join('') + '</div>';
    h += '<div class="ex-opts' + (q.fix && q.o[0].length < 12 ? ' grid' : '') + '">' + x.idx.map((oi, j) => '<button type="button" data-q="' + k + '" data-j="' + j + '"><span class="ex-n">' + EXAM_NUM[j] + '</span> ' + q.o[oi] + '<em class="ex-note2"></em></button>').join('') + '</div></div>'; return h; };
  el.innerHTML = '<div class="ex-top"><button type="button" class="ex-x2" id="exQuit">✕ 그만</button><b id="exTime">' + (only ? Math.max(5, qs.length*2) : examCur.min) + ':00</b><span id="exCnt">0 / ' + qs.length + '</span><button type="button" class="ex-sub" id="exSub">제출</button></div>'
    + '<div class="ex-sheet"><div class="ex-head"><div class="ex-hl"><b>2026학년도 ' + escHtml(examCur.term) + '</b><span>1학년 8반 · 이름: ' + escHtml(me ? me.name : '') + '</span><span>' + (only ? '틀린 문제 다시 풀기 · ' + qs.length + '문항' : escHtml(examCur.title) + ' · ' + examCur.min + '분') + '</span></div><div class="ex-hr">' + escHtml(examCur.subj) + '</div><div class="ex-score" id="exScore"></div></div>'
    + '<div class="ex-guide">* 각 문항에 배점이 표시되어 있습니다.<br>** 선택형 ' + qs.length + '문제, 서답형 0문제입니다.</div>'
    + '<div class="ex-cols">' + qs.map(qHtml).join('') + '</div>'
    + '<div class="ex-foot"><span>2026학년도 1학년</span><span>8반 3D 교실 · 한국사 탐구실</span></div><button type="button" class="ex-btn" id="exSub2">답안 제출하기</button></div>';
  el.scrollTop = 0; inkTeardown(); inkSetup(); if(!exRec('_').ink){ exRecSet('_', { ink:1 }); toast('✏️ 애플펜슬로 시험지에 바로 필기할 수 있어요 · 손가락은 스크롤'); }
  el.querySelectorAll('.ex-opts button').forEach(b => b.onclick = () => { if(exam.done) return; const k = +b.dataset.q, x = exam.qs[k]; x.pick = +b.dataset.j;
    b.parentNode.querySelectorAll('button').forEach(c => c.classList.toggle('on', c === b)); $('#exCnt').textContent = exam.qs.filter(y => y.pick >= 0).length + ' / ' + exam.qs.length; });
  const sub = () => { const left = exam.qs.filter(y => y.pick < 0).length; if(left && !exam.confirm){ exam.confirm = 1; toast('아직 ' + left + '문제를 안 풀었어요 · 한 번 더 누르면 제출돼요'); setTimeout(() => { if(exam) exam.confirm = 0; }, 3000); return; } examGrade(); };
  $('#exSub').onclick = sub; $('#exSub2').onclick = sub; $('#exQuit').onclick = examClose;
  exam.timer = setInterval(() => { if(!exam || exam.done) return; const r = Math.max(0, exam.lim - (Date.now() - exam.t0)/1000); $('#exTime').textContent = String(Math.floor(r/60)).padStart(2, '0') + ':' + String(Math.floor(r % 60)).padStart(2, '0'); $('#exTime').classList.toggle('warn', r < 300); if(r <= 0){ toast('⏰ 시간 끝! 자동으로 제출했어요'); examGrade(); } }, 500); }
function examGrade(){ if(!exam || exam.done) return; exam.done = true; clearInterval(exam.timer); let sc = 0, tot = 0; const wrong = [];
  exam.qs.forEach((x, k) => { const q = x.q, ans = x.idx.indexOf(q.a - 1), ok = x.pick === ans; tot += q.p; if(ok) sc += q.p; else wrong.push(x.i);
    const box = $('#exq' + k); box.classList.add(ok ? 'ok' : 'bad'); box.insertAdjacentHTML('afterbegin', '<i class="ex-mark">' + (ok ? '' : '') + '</i>');
    box.querySelectorAll('.ex-opts button').forEach((b, j) => { const oi = x.idx[j]; if(j === ans) b.classList.add('ans'); if(j === x.pick && !ok) b.classList.add('wr'); const nt = q.n[oi]; if(!q.fix && nt && (j === ans || j === x.pick || !ok)) b.querySelector('.ex-note2').textContent = nt; b.disabled = true; });
    if(q.fix){ const ex = q.n.filter(Boolean); if(ex.length) box.insertAdjacentHTML('beforeend', '<div class="ex-exp">📌 ' + ex.map(escHtml).join('<br>📌 ') + '</div>'); } });
  sc = Math.round(sc*10)/10; const full = !exam.only; let newBest = false; if(full){ const R = exRec(examCur.id); newBest = R.best == null || sc >= R.best; exRecSet(examCur.id, { best:Math.max(R.best || 0, sc), last:sc, wrong, n:(R.n || 0) + 1 }); }
  $('#exScore').innerHTML = '<b>' + sc + '</b><small>/' + Math.round(tot*10)/10 + '</small>'; $('#exScore').classList.add('show');
  $('#exSub').textContent = '닫기'; $('#exSub').onclick = examClose; $('#exCnt').textContent = (exam.qs.length - wrong.length) + '개 맞음';
  const foot = $('#exSub2'); foot.insertAdjacentHTML('beforebegin', '<div class="ex-res"><b>' + sc + '점</b> · ' + exam.qs.length + '문제 중 ' + (exam.qs.length - wrong.length) + '개 맞았어요' + (full && newBest ? ' · 🏆 최고 기록!' : '') + '<br><small>초록 동그라미 = 정답 · 빨간 줄 = 내가 고른 오답 · 선지마다 연도와 해설이 붙어 있어요</small></div>');
  foot.textContent = wrong.length ? '❌ 틀린 ' + wrong.length + '문제만 다시 풀기' : '🎉 만점! 닫기'; foot.onclick = () => { if(wrong.length) examStart(wrong); else examClose(); };
  $('#examOv').scrollTop = 0; toast(sc >= 100 ? '💯 만점이에요!' : '📝 채점 완료 · ' + sc + '점'); }

/* 🎙 8반 토론회: 찬성 2 · 반대 2 · 사회자 · 청중 투표. debate/state, debate/msgs/{sid}, debate/votes/{sid} (Firebase 규칙에 debate 추가 필요) */
const DEB_SEAT = [{ k:'p0', n:'찬성 1', side:'pro', c:'#2F6BFF', x:-4.5, z:-0.5 }, { k:'p1', n:'찬성 2', side:'pro', c:'#3FA9FF', x:-1.6, z:-1.5 }, { k:'p2', n:'반대 1', side:'con', c:'#E5383B', x:1.6, z:-1.5 }, { k:'p3', n:'반대 2', side:'con', c:'#FF7A2F', x:4.5, z:-0.5 }];
const DEB_PH = [{ n:'입론', sec:120, d:'내 주장과 근거를 말해요' }, { n:'반론', sec:90, d:'상대 주장의 약점을 짚어요' }, { n:'최종 발언', sec:60, d:'우리 편 주장을 정리해요' }];
const DEB_TOPICS = ['고등학교에서 휴대폰 사용을 전면 금지해야 한다', '숙제할 때 AI를 써도 된다', '교복을 자율화해야 한다', '수행평가를 줄이고 지필고사를 늘려야 한다', '급식 잔반에 벌점을 줘야 한다', '반 자리는 성적순이 아니라 추첨으로 정해야 한다', '청소년 SNS 사용 시간을 법으로 제한해야 한다'];
let debScene = null, debSt = null, debMsgs = [], debVotes = {}, debSid = '', debMsgRef = null, debVoteRef = null, debStRef = null, debOff = 0, debT = 0, debFig = [], debBig = null, debAdvGuard = '', debRec = null, debBeams = [], debPods = [], debFloat = [];
function debNow(){ return Date.now() + debOff; }
function debMine(){ if(!debSt || !debSt.seats) return -1; return DEB_SEAT.findIndex(s => debSt.seats[s.k] && debSt.seats[s.k].uid === myUid); }
function debOrder(st){ return String((st && st.order) || '').split(',').filter(Boolean).map(v => { const [s, p] = v.split('.'); return { s:+s, p:+p }; }); }
function debCur(){ if(!debSt || debSt.phase !== 'run') return null; const o = debOrder(debSt); return o[debSt.step] || null; }
function debLeft(){ const c = debCur(); if(!c) return 0; return DEB_PH[c.p].sec - (debNow() - (debSt.stepAt || 0))/1000; }
function debIsMod(){ return debSt && debSt.mod && debSt.mod.uid === myUid; }
function debModHere(){ if(!debSt || !debSt.mod) return false; return debSt.mod.uid === myUid || remotes.has(debSt.mod.uid); }
function wrapKo(x, t, w, max){ const out = []; let line = ''; for(const ch of String(t)){ if(ch === '\n'){ out.push(line); line = ''; continue; } if(x.measureText(line + ch).width > w && line){ out.push(line); line = ch.trim() ? ch : ''; } else line += ch; } if(line) out.push(line); if(out.length > max){ out.length = max; out[max - 1] = out[max - 1].slice(0, -1) + '…'; } return out; }
function debFigure(col){ const g = new THREE.Group(), suit = mat('#1C2233'), skin = mat('#F1C9A5');
  const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.18, 0.85, 10), suit); legs.position.y = 0.43; g.add(legs);
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.24, 0.72, 12), suit); body.position.y = 1.2; g.add(body);
  const shirt = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.42), mat('#F4F4F8')); shirt.position.set(0, 1.32, 0.255); g.add(shirt);
  const tie = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.36, 0.02), new THREE.MeshBasicMaterial({ color:col })); tie.position.set(0, 1.3, 0.27); g.add(tie);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.25, 18, 14), skin); head.position.y = 1.78; g.add(head);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.265, 18, 10, 0, Math.PI*2, 0, Math.PI*0.55), mat('#2A2420')); hair.position.y = 1.8; g.add(hair);
  const cv = document.createElement('canvas'); cv.width = 384; cv.height = 96; const lab = spriteFrom(cv, 1.5, 0.375); lab.position.y = 2.35; g.add(lab);
  const bcv = document.createElement('canvas'); bcv.width = 640; bcv.height = 320; const bub = spriteFrom(bcv, 2.7, 1.35); bub.position.y = 3.35; bub.visible = false; g.add(bub);
  g.userData = { cv, lab, bcv, bub, name:'', bT:0 }; return g; }
function debLabel(f, name, col){ if(f.userData.name === name) return; f.userData.name = name; const x = f.userData.cv.getContext('2d'); x.clearRect(0, 0, 384, 96); x.font = '800 40px "Noto Sans KR", sans-serif'; const w = Math.min(370, x.measureText(name).width + 40);
  x.fillStyle = col; roundRect(x, 192 - w/2, 14, w, 64, 32); x.fill(); x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(fitText(x, name, 340), 192, 47); f.userData.lab.material.map.needsUpdate = true; }
function debBubble(i, text){ const f = debFig[i]; if(!f) return; const x = f.userData.bcv.getContext('2d'), S = DEB_SEAT[i]; x.clearRect(0, 0, 640, 320); x.font = '700 34px "Noto Sans KR", sans-serif'; const L = wrapKo(x, text, 560, 5), h = 40 + L.length*46;
  x.fillStyle = 'rgba(255,255,255,.96)'; roundRect(x, 20, 250 - h, 600, h, 28); x.fill(); x.beginPath(); x.moveTo(300, 248); x.lineTo(320, 290); x.lineTo(345, 248); x.fill();
  x.fillStyle = S.c; x.fillRect(20, 262 - h, 8, h - 24); x.fillStyle = '#141826'; x.textAlign = 'left'; x.textBaseline = 'top'; L.forEach((l, k) => x.fillText(l, 52, 270 - h + k*46));
  f.userData.bub.material.map.needsUpdate = true; f.userData.bub.visible = true; f.userData.bT = 9; }
function buildDebate(){ debScene = new THREE.Scene(); debScene.background = new THREE.Color('#05060C'); debScene.fog = new THREE.Fog('#05060C', 22, 48);
  debScene.add(new THREE.HemisphereLight('#DCE4FF', '#141826', 0.55)); const key = new THREE.DirectionalLight('#FFF2DC', 0.75); key.position.set(0, 10, 10); debScene.add(key);
  [-6, 6].forEach(x => { const p = new THREE.PointLight('#FFD9A8', 0.6, 18); p.position.set(x, 5, -3); debScene.add(p); });
  const floor = new THREE.Mesh(new THREE.CircleGeometry(16, 64), new THREE.MeshPhongMaterial({ color:'#0A0C14', shininess:90, specular:'#3A3F55' })); floor.rotation.x = -Math.PI/2; debScene.add(floor);
  const ring = (r1, r2, c, y, o) => { const m = new THREE.Mesh(new THREE.RingGeometry(r1, r2, 96), new THREE.MeshBasicMaterial(Object.assign({ color:c, side:THREE.DoubleSide }, o || {}))); m.rotation.x = -Math.PI/2; m.position.y = y; debScene.add(m); return m; };
  ring(9.6, 10.6, '#C9CCD8', 0.01); ring(10.8, 11.0, '#5B6178', 0.01); ring(7.4, 7.7, '#E8EAF2', 0.012);
  const stage = new THREE.Mesh(new THREE.CylinderGeometry(7.2, 7.4, 0.18, 72), new THREE.MeshPhongMaterial({ color:'#121522', shininess:120, specular:'#50566E' })); stage.position.y = 0.09; debScene.add(stage);
  ring(4.2, 4.5, '#D8DBE6', 0.185); ring(2.2, 2.32, '#8A90A8', 0.185);
  const dais = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.6, 0.42, 48), mat('#E9EAF0')); dais.position.set(0, 0.39, 2.2); debScene.add(dais);
  const lcv = document.createElement('canvas'); lcv.width = 512; lcv.height = 512; const lx = lcv.getContext('2d'); lx.fillStyle = '#F4F5F9'; lx.fillRect(0, 0, 512, 512); lx.textAlign = 'center'; lx.textBaseline = 'middle';
  lx.fillStyle = '#1A1D2B'; lx.font = '900 92px "Noto Sans KR", sans-serif'; lx.fillText('8반 토론회', 256, 230); const gr = lx.createLinearGradient(130, 0, 382, 0); gr.addColorStop(0, '#2F6BFF'); gr.addColorStop(0.5, '#B8B8C8'); gr.addColorStop(1, '#E5383B'); lx.fillStyle = gr; lx.fillRect(130, 300, 252, 16); lx.fillStyle = '#6A6F85'; lx.font = '700 34px "Noto Sans KR", sans-serif'; lx.fillText('1학년 8반', 256, 370);
  const ltop = new THREE.Mesh(new THREE.CircleGeometry(1.5, 48), new THREE.MeshBasicMaterial({ map:new THREE.CanvasTexture(lcv) })); ltop.rotation.x = -Math.PI/2; ltop.position.set(0, 0.61, 2.2); debScene.add(ltop);
  const pcv = document.createElement('canvas'); pcv.width = 256; pcv.height = 1024; const px = pcv.getContext('2d'); const pg = px.createLinearGradient(0, 0, 0, 1024); pg.addColorStop(0, '#D9D6D0'); pg.addColorStop(0.7, '#F3EEE6'); pg.addColorStop(1, '#FFD6A8'); px.fillStyle = pg; px.fillRect(0, 0, 256, 1024);
  for(let i = 0; i < 9; i++){ px.fillStyle = 'rgba(0,0,0,' + (0.04 + (i % 3)*0.02) + ')'; px.fillRect(i*29, 0, 2, 1024); } for(let j = 0; j < 7; j++){ px.fillStyle = 'rgba(0,0,0,.06)'; px.fillRect(0, 120 + j*130 + (j % 2)*30, 256, 3); }
  const ptex = new THREE.CanvasTexture(pcv); [-1, 1].forEach(sd => { const pan = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 8.5), new THREE.MeshBasicMaterial({ map:ptex })); pan.position.set(sd*4.6, 4.1, -5.4); pan.rotation.y = -sd*0.32; pan.rotation.z = sd*0.06; debScene.add(pan); });
  const arc = new THREE.Mesh(new THREE.TorusGeometry(10.5, 0.16, 8, 96, Math.PI), new THREE.MeshBasicMaterial({ color:'#7FF0D8' })); arc.position.set(0, 1.2, -1.5); arc.rotation.x = -Math.PI/2 + 0.12; arc.scale.y = 0.55; debScene.add(arc);
  const arc2 = arc.clone(); arc2.material = new THREE.MeshBasicMaterial({ color:'#3A6A78' }); arc2.position.y = 2.4; arc2.scale.set(1.04, 0.57, 1); debScene.add(arc2);
  const bcv = document.createElement('canvas'); bcv.width = 1280; bcv.height = 720; debBig = { cv:bcv, tex:new THREE.CanvasTexture(bcv), key:'' };
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(5.4, 3.04), new THREE.MeshBasicMaterial({ map:debBig.tex })); scr.position.set(0, 4.0, -5.6); debScene.add(scr);
  const frame = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 3.24), mat('#202436')); frame.position.set(0, 4.0, -5.62); debScene.add(frame);
  DEB_SEAT.forEach((S, i) => { const g = new THREE.Group(), yaw = Math.atan2(-S.x, 10 - S.z);
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.95, 1.12, 0.55), new THREE.MeshPhongMaterial({ color:'#3B3F4E', shininess:60 })); base.position.y = 0.74; g.add(base);
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.06, 0.66), mat('#D8DAE2')); top.position.y = 1.32; top.rotation.x = -0.12; g.add(top);
    const strip = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.0, 0.04), new THREE.MeshBasicMaterial({ color:S.c })); strip.position.set(0.18, 0.72, 0.29); g.add(strip);
    const strip2 = strip.clone(); strip2.material = new THREE.MeshBasicMaterial({ color:'#E8E8F0' }); strip2.scale.x = 0.35; strip2.position.x = 0.02; g.add(strip2);
    const mic = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.45, 6), mat('#111')); mic.position.set(-0.25, 1.5, 0.1); mic.rotation.x = -0.5; g.add(mic);
    const ncv = document.createElement('canvas'); ncv.width = 256; ncv.height = 96; const nx = ncv.getContext('2d'); nx.fillStyle = S.c; nx.fillRect(0, 0, 256, 96); nx.fillStyle = '#fff'; nx.font = '900 46px "Noto Sans KR", sans-serif'; nx.textAlign = 'center'; nx.textBaseline = 'middle'; nx.fillText(S.n, 128, 50);
    const np = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.23), new THREE.MeshBasicMaterial({ map:new THREE.CanvasTexture(ncv) })); np.position.set(-0.2, 1.06, 0.282); g.add(np);
    const beam = new THREE.Mesh(new THREE.ConeGeometry(1.25, 6, 32, 1, true), new THREE.MeshBasicMaterial({ color:S.c, transparent:true, opacity:0, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide })); beam.position.set(0, 3.2, -0.3); g.add(beam);
    const fig = debFigure(S.c); fig.position.set(0, 0.18, -0.55); fig.visible = false; g.add(fig);
    g.position.set(S.x, 0.18, S.z); g.rotation.y = yaw; debScene.add(g); debFig.push(fig); debBeams.push(beam); debPods.push(strip); });
}
function debBigDraw(){ const st = debSt || {}, c = debCur(), left = Math.max(0, Math.ceil(debLeft())), vt = debVoteCount(), key = [st.phase, st.topic, st.step, left, vt.pro, vt.con, c ? 1 : 0].join('|'); if(key === debBig.key) return; debBig.key = key;
  const x = debBig.cv.getContext('2d'), W2 = 1280, H2 = 720, bg = x.createLinearGradient(0, 0, W2, H2); bg.addColorStop(0, '#0E1430'); bg.addColorStop(1, '#1B0E22'); x.fillStyle = bg; x.fillRect(0, 0, W2, H2);
  x.fillStyle = '#2F6BFF'; x.fillRect(0, 0, W2/2, 10); x.fillStyle = '#E5383B'; x.fillRect(W2/2, 0, W2/2, 10); x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillStyle = '#9FB0E0'; x.font = '800 40px "Noto Sans KR", sans-serif'; x.fillText('🎙 1학년 8반 토론회', W2/2, 70);
  x.fillStyle = '#fff'; x.font = '900 60px "Noto Sans KR", sans-serif'; wrapKo(x, st.topic || '토론 주제를 정하는 중이에요', 1150, 2).forEach((l, k, a) => x.fillText(l, W2/2, 190 + k*76 - (a.length - 1)*38));
  if(st.phase === 'run' && c){ const S = DEB_SEAT[c.s], who = st.seats && st.seats[S.k] ? st.seats[S.k].name : S.n; x.fillStyle = S.c; roundRect(x, 290, 330, 700, 90, 45); x.fill(); x.fillStyle = '#fff'; x.font = '900 46px "Noto Sans KR", sans-serif'; x.fillText(DEB_PH[c.p].n + ' · ' + S.n + ' ' + who, W2/2, 377);
    x.font = '900 190px ui-monospace, Menlo, monospace'; x.fillStyle = left <= 10 ? '#FF6B6B' : '#FFE27A'; x.fillText(Math.floor(left/60) + ':' + String(left % 60).padStart(2, '0'), W2/2, 560); }
  else if(st.phase === 'vote' || st.phase === 'done'){ const tot = Math.max(1, vt.pro + vt.con), pw = 1000*vt.pro/tot; x.font = '900 52px "Noto Sans KR", sans-serif'; x.fillStyle = '#fff'; x.fillText(st.phase === 'vote' ? '🗳 청중 투표 중' : (vt.pro === vt.con ? '🤝 무승부!' : (vt.pro > vt.con ? '🔵 찬성 측 승리!' : '🔴 반대 측 승리!')), W2/2, 380);
    x.fillStyle = '#2F6BFF'; x.fillRect(140, 460, pw, 90); x.fillStyle = '#E5383B'; x.fillRect(140 + pw, 460, 1000 - pw, 90); x.fillStyle = '#fff'; x.font = '900 50px "Noto Sans KR", sans-serif'; x.textAlign = 'left'; x.fillText('찬성 ' + vt.pro, 170, 507); x.textAlign = 'right'; x.fillText(vt.con + ' 반대', 1110, 507); x.textAlign = 'center'; }
  else { x.fillStyle = '#C9D2F0'; x.font = '700 44px "Noto Sans KR", sans-serif'; x.fillText('연단에 설 토론자와 사회자를 기다려요', W2/2, 420); x.font = '700 38px "Noto Sans KR", sans-serif'; x.fillStyle = '#8A93B8'; x.fillText('입론 → 반론 → 최종 발언 → 청중 투표', W2/2, 500); }
  debBig.tex.needsUpdate = true; }
function debVoteCount(){ let pro = 0, con = 0; Object.keys(debVotes).forEach(k => { if(debVotes[k] === 'pro') pro++; else if(debVotes[k] === 'con') con++; }); return { pro, con }; }
function debApply(st){ debSt = st || { phase:'wait', seats:{} }; debSt.seats = debSt.seats || {}; if((debSt.sid || '') !== debSid){ debSid = debSt.sid || ''; debListen(); }
  DEB_SEAT.forEach((S, i) => { const o = debSt.seats[S.k]; debFig[i].visible = !!o; if(o) debLabel(debFig[i], o.name, S.c); else debFig[i].userData.bub.visible = false; }); debRender(); }
function debListen(){ if(debMsgRef) debMsgRef.off(); if(debVoteRef) debVoteRef.off(); debMsgs = []; debVotes = {}; debAdvGuard = ''; if(!debSid || !rtdb) { debRender(); return; }
  debMsgRef = rtdb.ref('debate/msgs/' + debSid); debMsgRef.orderByChild('at').limitToLast(200).on('child_added', s => { const v = s.val() || {}; if(typeof v.t !== 'string') return; const m = { uid:String(v.uid || ''), name:String(v.name || '').slice(0, 12), t:chatClean(v.t).slice(0, 300), seat:v.seat | 0, ph:v.ph | 0, r:!!v.r, at:+v.at || 0 }; debMsg(m); }, () => {});
  debVoteRef = rtdb.ref('debate/votes/' + debSid); debVoteRef.on('value', s => { debVotes = s.val() || {}; debRender(); }, () => {}); }
function debMsg(m){ if(m.r){ debReact(m.t); return; } debMsgs.push(m); if(debNow() - m.at < 30000) debBubble(m.seat, m.t); const L = $('#debLog'); if(L){ debLogAdd(m); } }
function debLogAdd(m){ const L = $('#debLog'); if(!L) return; const S = DEB_SEAT[m.seat] || DEB_SEAT[0], em = L.querySelector('.db-empty'); if(em) em.remove();
  const el = document.createElement('div'); el.className = 'db-m ' + S.side; el.innerHTML = '<span class="who" style="color:' + S.c + '">' + escHtml(S.n) + ' · ' + escHtml(m.name) + ' <i>' + escHtml(DEB_PH[m.ph] ? DEB_PH[m.ph].n : '') + '</i></span><div class="bb">' + escHtml(m.t) + '</div>';
  const near = L.scrollHeight - L.scrollTop - L.clientHeight < 140; L.appendChild(el); if(near) L.scrollTop = L.scrollHeight; }
function debReact(e){ const el = document.createElement('div'); el.className = 'db-float'; el.textContent = e; el.style.left = (20 + Math.random()*50) + '%'; document.body.appendChild(el); setTimeout(() => el.remove(), 2600); }
function debRender(){ const B = $('#debBody'); if(!B || $('#debUI').hidden) return; const st = debSt || { phase:'wait', seats:{} }, mine = debMine(), mod = debIsMod(), c = debCur(), vt = debVoteCount(); let h = '';
  h += '<div class="db-topic"><small>토론 주제</small><b>' + escHtml(st.topic || '아직 정하지 않았어요') + '</b></div>';
  if(st.phase === 'run' && c){ const S = DEB_SEAT[c.s], who = st.seats[S.k] ? st.seats[S.k].name : S.n, myTurn = c.s === mine;
    h += '<div class="db-now" style="--sc:' + S.c + '"><span>' + (debSt.step + 1) + '/' + debOrder(st).length + ' · ' + DEB_PH[c.p].n + '</span><b>' + escHtml(S.n + ' ' + who) + (myTurn ? ' (나)' : '') + '</b><em id="debTime">' + Math.max(0, Math.ceil(debLeft())) + '초</em><i class="db-bar"><u id="debBar"></u></i></div>';
    if(myTurn) h += '<p class="db-tip">🎤 내 차례! ' + DEB_PH[c.p].d + '. 여러 번 나눠 보내도 돼요.</p><form class="db-in" id="debForm" autocomplete="off"><input id="debIn" maxlength="300" placeholder="발언 입력…" enterkeyhint="send">' + (debSR() ? '<button type="button" id="debMic" class="db-mic" aria-label="말로 입력">🎤</button>' : '') + '<button type="submit" class="db-send">보내기</button></form><button type="button" class="db-btn" id="debDone">✅ 발언 끝 · 다음 차례로</button>';
    else if(mine < 0) h += '<div class="db-react"><button type="button" data-r="👏">👏</button><button type="button" data-r="🤔">🤔</button><button type="button" data-r="🔥">🔥</button><button type="button" data-r="😮">😮</button></div>';
    if(mod) h += '<div class="db-row"><button type="button" class="db-btn ghost" id="debSkip">⏭ 다음 차례</button><button type="button" class="db-btn ghost" id="debEnd">🗳 바로 투표</button></div>'; }
  else if(st.phase === 'vote'){ const my = debVotes[myUid]; h += '<div class="db-now" style="--sc:#9B6BFF"><span>청중 투표</span><b>어느 쪽이 더 설득력 있었나요?</b><em>' + (vt.pro + vt.con) + '표</em></div>';
    h += '<div class="db-row"><button type="button" class="db-vote pro' + (my === 'pro' ? ' on' : '') + '" data-v="pro">🔵 찬성</button><button type="button" class="db-vote con' + (my === 'con' ? ' on' : '') + '" data-v="con">🔴 반대</button></div>';
    if(mod || !debModHere()) h += '<button type="button" class="db-btn" id="debResult">📣 결과 발표</button>'; }
  else if(st.phase === 'done'){ h += '<div class="db-now" style="--sc:' + (vt.pro > vt.con ? '#2F6BFF' : vt.pro < vt.con ? '#E5383B' : '#9B6BFF') + '"><span>결과</span><b>' + (vt.pro === vt.con ? '🤝 무승부' : vt.pro > vt.con ? '🔵 찬성 측 승리' : '🔴 반대 측 승리') + '</b><em>' + vt.pro + ' : ' + vt.con + '</em></div>';
    if(mod || !debModHere()) h += '<button type="button" class="db-btn" id="debNew">🔄 새 토론 열기</button>'; }
  else { h += '<div class="db-seats">' + DEB_SEAT.map((S, i) => { const o = st.seats[S.k]; return '<button type="button" class="db-seat" data-s="' + i + '" style="--sc:' + S.c + '"' + (o && o.uid !== myUid ? ' disabled' : '') + '><small>' + S.n + '</small><b>' + (o ? escHtml(o.name) + (o.uid === myUid ? ' (나)' : '') : '비어 있음') + '</b><i>' + (o ? (o.uid === myUid ? '일어나기' : '') : '여기 서기') + '</i></button>'; }).join('') + '</div>';
    h += '<div class="db-mod"><span>🎙 사회자</span><b>' + (st.mod ? escHtml(st.mod.name) + (mod ? ' (나)' : '') : '없음') + '</b>' + (!mod && !debModHere() && mine < 0 ? '<button type="button" class="db-btn ghost sm" id="debMod">사회자 맡기</button>' : mod ? '<button type="button" class="db-btn ghost sm" id="debModOff">그만두기</button>' : '') + '</div>';
    if(mod){ const pro = DEB_SEAT.some(S => S.side === 'pro' && st.seats[S.k]), con = DEB_SEAT.some(S => S.side === 'con' && st.seats[S.k]);
      h += '<input class="db-topicin" id="debTopic" maxlength="60" placeholder="토론 주제를 입력하거나 아래에서 골라요" value="' + escHtml(st.topic || '') + '"><div class="db-sugg">' + DEB_TOPICS.map(t => '<button type="button" data-t="' + escHtml(t) + '">' + escHtml(t) + '</button>').join('') + '</div>';
      h += '<button type="button" class="db-btn" id="debStart"' + (pro && con ? '' : ' disabled') + '>▶ 토론 시작' + (pro && con ? '' : ' (찬성·반대 1명 이상 필요)') + '</button>'; }
    else h += '<p class="db-tip">' + (mine >= 0 ? '연단에 섰어요! 사회자가 시작하면 차례대로 발언해요.' : '빈 연단을 눌러 토론자가 되거나, 사회자를 맡거나, 청중으로 지켜봐요.') + '</p>'; }
  h += '<div class="db-loghead">📜 발언 기록</div><div class="db-log" id="debLog"><p class="db-empty">아직 발언이 없어요</p></div>';
  const keep = $('#debIn') ? $('#debIn').value : ''; B.innerHTML = h; if($('#debIn')) $('#debIn').value = keep; debMsgs.forEach(debLogAdd); const L = $('#debLog'); L.scrollTop = L.scrollHeight; debBind(); }
function debBind(){ const q = s => $('#debBody').querySelector(s), st = debSt || {};
  $('#debBody').querySelectorAll('[data-s]').forEach(b => b.onclick = () => debSeat(+b.dataset.s));
  if(q('#debMod')) q('#debMod').onclick = () => debPatch({ mod:{ uid:myUid, name:me.name } }); if(q('#debModOff')) q('#debModOff').onclick = () => debPatch({ mod:null });
  $('#debBody').querySelectorAll('[data-t]').forEach(b => b.onclick = () => { $('#debTopic').value = b.dataset.t; debPatch({ topic:b.dataset.t }); });
  if(q('#debTopic')) q('#debTopic').onchange = e => debPatch({ topic:chatClean(e.target.value).slice(0, 60) });
  if(q('#debStart')) q('#debStart').onclick = () => { const t = chatClean(($('#debTopic').value || '').trim()).slice(0, 60); if(!t){ toast('토론 주제를 먼저 정해요'); return; } debStart(t); };
  if(q('#debForm')) q('#debForm').onsubmit = e => { e.preventDefault(); const i = $('#debIn'); if(debSay(i.value)) i.value = ''; };
  if(q('#debMic')) q('#debMic').onclick = debMic; if(q('#debDone')) q('#debDone').onclick = () => debNext(st.step); if(q('#debSkip')) q('#debSkip').onclick = () => debNext(st.step); if(q('#debEnd')) q('#debEnd').onclick = () => debPatch({ phase:'vote', voteAt:debNow() });
  $('#debBody').querySelectorAll('[data-v]').forEach(b => b.onclick = () => { if(!debSid) return; debVotes[myUid] = b.dataset.v; Promise.resolve(rtdb.ref('debate/votes/' + debSid + '/' + myUid).set(b.dataset.v)).catch(debErr); debRender(); });
  if(q('#debResult')) q('#debResult').onclick = () => debPatch({ phase:'done' }); if(q('#debNew')) q('#debNew').onclick = () => debPatch({ phase:'wait', step:0, order:'', sid:'', topic:'' });
  $('#debBody').querySelectorAll('[data-r]').forEach(b => b.onclick = () => { if(!debSid) return; const n = Date.now(); if(n - (debReact.t || 0) < 800) return; debReact.t = n; debReact(b.dataset.r); Promise.resolve(rtdb.ref('debate/msgs/' + debSid).push({ uid:myUid, name:me.name, t:b.dataset.r, r:1, seat:0, ph:0, at:firebase.database.ServerValue.TIMESTAMP })).catch(() => {}); }); }
function debErr(){ toast('토론장 저장에 실패했어요 · Firebase 규칙에 debate를 추가해야 해요'); }
function debPatch(o){ if(!rtdb) return; Promise.resolve(rtdb.ref('debate/state').update(o)).catch(debErr); }
function debSeat(i){ const S = DEB_SEAT[i], mine = debMine(); if(debIsMod()){ toast('사회자는 연단에 설 수 없어요'); return; }
  const ref = rtdb.ref('debate/state/seats/' + S.k); Promise.resolve(ref.transaction(cur => { if(!cur) return mine >= 0 ? undefined : { uid:myUid, name:me.name }; if(cur.uid === myUid) return null; return; })).then(() => {}).catch(debErr);
  if(mine >= 0 && mine !== i) toast('먼저 지금 연단에서 일어나요'); }
function debStart(topic){ const st = debSt || {}, has = i => !!(st.seats || {})[DEB_SEAT[i].k], o = [];
  [0, 2, 1, 3].forEach(i => { if(has(i)) o.push(i + '.0'); }); [2, 0, 3, 1].forEach(i => { if(has(i)) o.push(i + '.1'); });
  const con = has(2) ? 2 : 3, pro = has(0) ? 0 : 1; o.push(con + '.2', pro + '.2');
  debPatch({ topic, phase:'run', step:0, stepAt:debNow(), order:o.join(','), sid:'d' + Date.now().toString(36) }); toast('🎙 토론을 시작해요!'); }
function debNext(exp){ if(!rtdb) return; Promise.resolve(rtdb.ref('debate/state').transaction(st => { if(!st || st.phase !== 'run' || st.step !== exp) return; st.step++; st.stepAt = Date.now() + debOff; if(st.step >= debOrder(st).length){ st.phase = 'vote'; st.voteAt = Date.now() + debOff; } return st; })).catch(debErr); }
function debSay(t){ t = chatClean(t).trim().slice(0, 300); const c = debCur(); if(!t || !c || c.s !== debMine() || !debSid) return false; const n = Date.now(); if(n - (debSay.t || 0) < 1500){ toast('조금 천천히 보내요 🙂'); return false; } debSay.t = n;
  Promise.resolve(rtdb.ref('debate/msgs/' + debSid).push({ uid:myUid, name:me.name, t, seat:c.s, ph:c.p, at:firebase.database.ServerValue.TIMESTAMP })).catch(debErr); return true; }
function debSR(){ return window.SpeechRecognition || window.webkitSpeechRecognition; }
function debMic(){ const SR = debSR(), b = $('#debMic'); if(!SR) return; if(debRec){ try { debRec.stop(); } catch(e){} return; }
  try { const r = new SR(), base = $('#debIn').value; r.lang = 'ko-KR'; r.interimResults = true; r.continuous = false; debRec = r; b.classList.add('on');
    r.onresult = e => { let t = ''; for(let i = 0; i < e.results.length; i++) t += e.results[i][0].transcript; $('#debIn').value = (base ? base + ' ' : '') + t; };
    r.onend = () => { debRec = null; const bb = $('#debMic'); if(bb) bb.classList.remove('on'); }; r.onerror = e => { if(e.error === 'not-allowed') toast('마이크 권한을 허용해 주세요'); else if(e.error !== 'no-speech' && e.error !== 'aborted') toast('음성 인식이 이 브라우저에서는 잘 안 돼요'); }; r.start(); toast('🎤 말해 보세요 · 끝나면 자동으로 멈춰요'); }
  catch(e){ debRec = null; b.classList.remove('on'); toast('이 브라우저는 음성 입력을 지원하지 않아요'); } }
function enterDebate(){ if(!debScene) buildDebate(); $('#panel').hidden = true; $('#joy').hidden = true; $('#debUI').hidden = false;
  Object.assign(camLim, { pmin:0.02, pmax:0.7, dmin:7, dmax:17 }); cam.yaw = 0; cam.pitch = 0.16; cam.dist = window.innerWidth < window.innerHeight ? 17 : 13; cam.t.set(0, 2.1, -1);
  if(rtdb){ rtdb.ref('.info/serverTimeOffset').once('value').then(s => { debOff = +s.val() || 0; }).catch(() => {}); debStRef = rtdb.ref('debate/state'); debStRef.on('value', s => debApply(s.val()), () => { $('#debBody').innerHTML = '<p class="db-tip">토론장을 아직 못 쓰는 상태예요.<br>Firebase 규칙에 debate를 추가하면 바로 켜져요.</p>'; }); }
  debApply(debSt); toast('🎙 8반 토론회에 왔어요! 연단에 서거나 사회자를 맡아 봐요'); }
function leaveDebate(){ if(!$('#debUI') || $('#debUI').hidden) return; $('#debUI').hidden = true; camera.clearViewOffset(); if(debStRef) debStRef.off(); if(debMsgRef) debMsgRef.off(); if(debVoteRef) debVoteRef.off(); debStRef = debMsgRef = debVoteRef = null; debSid = ''; if(debRec){ try { debRec.stop(); } catch(e){} }
  const mine = debMine(); if(mine >= 0 && debSt && debSt.phase === 'wait') Promise.resolve(rtdb.ref('debate/state/seats/' + DEB_SEAT[mine].k).remove()).catch(() => {}); }
function debTick(dt){ debT += dt; if(!debScene) return; const c = debCur();
  debBeams.forEach((b, i) => { const on = c && c.s === i; b.material.opacity += ((on ? 0.16 + Math.sin(debT*3)*0.03 : 0) - b.material.opacity)*Math.min(1, dt*4); debPods[i].scale.y = on ? 1 + Math.sin(debT*6)*0.04 : 1; });
  debFig.forEach((f, i) => { const u = f.userData; if(u.bT > 0){ u.bT -= dt; if(u.bT <= 0) u.bub.visible = false; } f.rotation.y = Math.sin(debT*0.7 + i)*0.08; if(c && c.s === i) f.position.y = 0.18 + Math.abs(Math.sin(debT*5))*0.015; });
  debBigDraw(); const w = window.innerWidth, h = window.innerHeight, ui = $('#debUI'); if(w > 760) camera.setViewOffset(w, h, (ui.offsetWidth + 16)/2, 0, w, h); else camera.setViewOffset(w, h, 0, ui.offsetHeight/2, w, h);
  if(debSt && debSt.phase === 'run' && c){ const L = debLeft(), tm = $('#debTime'), bar = $('#debBar'); if(tm) tm.textContent = Math.max(0, Math.ceil(L)) + '초'; if(bar) bar.style.width = Math.max(0, L/DEB_PH[c.p].sec*100) + '%';
    const g = debSt.sid + ':' + debSt.step; if(L < -1 && debAdvGuard !== g && (debIsMod() || c.s === debMine() || (!debModHere() && L < -4))){ debAdvGuard = g; debNext(debSt.step); } } }

/* 📝 시험장: 시험지 목록에서 골라서 풀어요. 새 시험은 EXAMS에 추가하면 목록에 나와요 */
const EXAMS = [
  { id:'hist2-f1', subj:'한국사2', title:'실전 모의고사 1회', range:'Ⅱ. 대한민국의 발전 (광복 ~ 6월 민주 항쟁 · 산업화)', term:'2학기 기말고사 대비', min:50, c:'#8A4A2A', q:EXAM_Q }
];
let examCur = EXAMS[0];
function exRecAll(){ return store.get('class8-exams', null) || {}; }
function exRec(id){ return exRecAll()[id] || {}; }
function exRecSet(id, o){ const a = exRecAll(); a[id] = Object.assign(a[id] || {}, o); store.set('class8-exams', a); }
let exhScene = null, exhClock = null, exhT = 0;
function buildExamHall(){ exhScene = new THREE.Scene(); exhScene.background = new THREE.Color('#DCE3EA'); exhScene.fog = new THREE.Fog('#DCE3EA', 26, 46);
  exhScene.add(new THREE.HemisphereLight('#FFFFFF', '#B9A98C', 0.85)); const sun = new THREE.DirectionalLight('#FFF6E4', 0.55); sun.position.set(-8, 10, 4); exhScene.add(sun);
  const W2 = 15, D2 = 13, H2 = 4.6;
  const fcv = document.createElement('canvas'); fcv.width = 512; fcv.height = 512; const fx = fcv.getContext('2d'); for(let i = 0; i < 8; i++){ fx.fillStyle = i % 2 ? '#C79A66' : '#BE9060'; fx.fillRect(0, i*64, 512, 64); fx.fillStyle = 'rgba(0,0,0,.08)'; fx.fillRect(0, i*64, 512, 2); }
  const ftex = new THREE.CanvasTexture(fcv); ftex.wrapS = ftex.wrapT = THREE.RepeatWrapping; ftex.repeat.set(3, 3);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W2, D2), new THREE.MeshLambertMaterial({ map:ftex })); floor.rotation.x = -Math.PI/2; exhScene.add(floor);
  const wallM = mat('#EEF1F4'), wainM = mat('#9FB3A8');
  const wall = (w, x, z, ry) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, H2), wallM); m.position.set(x, H2/2, z); m.rotation.y = ry; exhScene.add(m); const b = new THREE.Mesh(new THREE.PlaneGeometry(w, 1.0), wainM); b.position.set(x, 0.5, z); b.rotation.y = ry; b.translateZ(0.01); exhScene.add(b); };
  wall(W2, 0, -D2/2, 0); wall(D2, -W2/2, 0, Math.PI/2); wall(D2, W2/2, 0, -Math.PI/2);
  for(let i = 0; i < 3; i++){ const win = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.0), new THREE.MeshBasicMaterial({ color:'#CFE8FF' })); win.position.set(W2/2 - 0.02, 2.5, -3.8 + i*3.6); win.rotation.y = -Math.PI/2; exhScene.add(win);
    const fr = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 2.0), mat('#FFFFFF')); fr.position.copy(win.position); fr.position.x -= 0.01; fr.rotation.y = -Math.PI/2; exhScene.add(fr); }
  const bcv = document.createElement('canvas'); bcv.width = 1024; bcv.height = 400; const bx = bcv.getContext('2d'); bx.fillStyle = '#244A3A'; bx.fillRect(0, 0, 1024, 400); bx.strokeStyle = '#8A6A44'; bx.lineWidth = 18; bx.strokeRect(9, 9, 1006, 382);
  bx.fillStyle = '#F4F1E6'; bx.textAlign = 'center'; bx.font = '900 92px "Noto Sans KR", sans-serif'; bx.fillText('시 험 장', 512, 140); bx.font = '700 44px "Noto Sans KR", sans-serif'; bx.fillStyle = '#FFE9A8'; bx.fillText('휴대폰은 가방에 · 시험 중 조용히', 512, 245); bx.fillStyle = '#CDE3D6'; bx.font = '600 36px "Noto Sans KR", sans-serif'; bx.fillText('1학년 8반', 512, 330);
  const board = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 2.5), new THREE.MeshBasicMaterial({ map:new THREE.CanvasTexture(bcv) })); board.position.set(0, 2.4, -D2/2 + 0.03); exhScene.add(board);
  const ccv = document.createElement('canvas'); ccv.width = 256; ccv.height = 256; exhClock = { cv:ccv, tex:new THREE.CanvasTexture(ccv), m:-1 };
  const clock = new THREE.Mesh(new THREE.CircleGeometry(0.55, 40), new THREE.MeshBasicMaterial({ map:exhClock.tex })); clock.position.set(4.6, 3.6, -D2/2 + 0.04); exhScene.add(clock);
  const deskTop = mat('#F2E6C8'), deskLeg = mat('#8C96A3'), chairM = mat('#3D5A80');
  for(let r = 0; r < 4; r++) for(let c = 0; c < 5; c++){ const g = new THREE.Group(), x = -5 + c*2.5, z = -2.2 + r*2.1;
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.06, 0.72), deskTop); top.position.y = 0.76; g.add(top);
    [[-0.5, -0.3], [0.5, -0.3], [-0.5, 0.3], [0.5, 0.3]].forEach(([a, b]) => { const l = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.74, 0.05), deskLeg); l.position.set(a, 0.37, b); g.add(l); });
    const paper = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.01, 0.56), mat('#FFFFFF')); paper.position.set(-0.12, 0.795, 0.02); paper.rotation.y = (Math.random() - 0.5)*0.2; g.add(paper);
    const pen = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.28, 6), mat('#1A3FA8')); pen.rotation.z = Math.PI/2; pen.rotation.y = 0.4; pen.position.set(0.3, 0.81, 0.05); g.add(pen);
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.06, 0.55), chairM); seat.position.set(0, 0.46, 0.62); g.add(seat);
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.5, 0.05), chairM); back.position.set(0, 0.74, 0.9); g.add(back);
    g.position.set(x, 0, z); exhScene.add(g); }
  const pd = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.95, 0.9), mat('#7A5A3A')); pd.position.set(-3.8, 0.48, -D2/2 + 1.3); exhScene.add(pd);
  for(let i = 0; i < 4; i++){ const st = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.035, 0.68), mat(i % 2 ? '#FFFFFF' : '#F6F2E6')); st.position.set(-4.2, 0.97 + i*0.035, -D2/2 + 1.3); st.rotation.y = i*0.05; exhScene.add(st); }
  const env = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.05, 0.4), mat('#C9A26E')); env.position.set(-3.3, 0.98, -D2/2 + 1.3); exhScene.add(env);
  const lamp = (x, z) => { const p = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.06, 0.4), new THREE.MeshBasicMaterial({ color:'#FFFFFF' })); p.position.set(x, H2 - 0.03, z); exhScene.add(p); }; [-4, 0, 4].forEach(x => { lamp(x, 1); lamp(x, 4.5); });
}
function exhClockDraw(){ const d = new Date(), m = d.getHours()*60 + d.getMinutes(); if(m === exhClock.m) return; exhClock.m = m; const x = exhClock.cv.getContext('2d');
  x.clearRect(0, 0, 256, 256); x.fillStyle = '#FFFFFF'; x.beginPath(); x.arc(128, 128, 122, 0, 7); x.fill(); x.lineWidth = 10; x.strokeStyle = '#2A2F45'; x.stroke();
  for(let i = 0; i < 12; i++){ const a = i*Math.PI/6; x.fillStyle = '#2A2F45'; x.fillRect(128 + Math.sin(a)*100 - 3, 128 - Math.cos(a)*100 - 9, 6, 18); }
  const hand = (a, l, w) => { x.lineWidth = w; x.lineCap = 'round'; x.beginPath(); x.moveTo(128, 128); x.lineTo(128 + Math.sin(a)*l, 128 - Math.cos(a)*l); x.stroke(); };
  hand(((d.getHours() % 12) + d.getMinutes()/60)*Math.PI/6, 60, 10); hand(d.getMinutes()*Math.PI/30, 92, 6); exhClock.tex.needsUpdate = true; }
function enterExamHall(){ if(!exhScene) buildExamHall(); $('#panel').hidden = true; $('#joy').hidden = true; $('#exhUI').hidden = false;
  Object.assign(camLim, { pmin:0.1, pmax:0.9, dmin:6, dmax:15 }); cam.yaw = 0; cam.pitch = 0.42; cam.dist = window.innerWidth < window.innerHeight ? 13 : 10.5; cam.t.set(0, 1.2, -1.2);
  exhRender(); toast('📝 시험장에 왔어요! 풀고 싶은 시험지를 골라요'); }
function leaveExamHall(){ if(!$('#exhUI') || $('#exhUI').hidden) return; $('#exhUI').hidden = true; camera.clearViewOffset(); }
function exhRender(){ const B = $('#exhBody'); if(!B) return; const subs = [...new Set(EXAMS.map(e => e.subj))];
  B.innerHTML = '<p class="db-tip">시험지를 고르면 봉투를 열고 학교 시험처럼 풀어요. 애플펜슬 필기도 돼요.</p>'
    + subs.map(sj => '<div class="exh-sub">' + escHtml(sj) + '</div>' + EXAMS.filter(e => e.subj === sj).map(e => { const r = exRec(e.id), tot = e.q.reduce((s, q) => s + q.p, 0);
      return '<button type="button" class="exh-card" data-x="' + e.id + '" style="--xc:' + e.c + '"><span class="exh-env">✉</span><span class="exh-t"><small>' + escHtml(e.term) + '</small><b>' + escHtml(e.subj + ' ' + e.title) + '</b><i>' + escHtml(e.range) + '</i><em>' + e.q.length + '문항 · ' + Math.round(tot) + '점 · ' + e.min + '분' + (r.best != null ? ' · 최고 ' + r.best + '점' : ' · 아직 안 풀었어요') + '</em></span></button>'; }).join('')).join('')
    + '<div class="exh-soon">🔒 다른 과목 시험지는 곧 추가돼요</div>';
  B.querySelectorAll('[data-x]').forEach(b => b.onclick = () => examOpen(b.dataset.x)); }
function exhTick(dt){ exhT += dt; if(!exhScene) return; exhClockDraw(); cam.yaw = Math.sin(exhT*0.06)*0.12; const w = window.innerWidth, h = window.innerHeight, ui = $('#exhUI'); if(w > 760) camera.setViewOffset(w, h, (ui.offsetWidth + 16)/2, 0, w, h); else camera.setViewOffset(w, h, 0, ui.offsetHeight/2, w, h); }

/* ⚔ 6·25 전선 체험: 1950년 8월 낙동강 방어선. 국군·유엔군 vs 북한군·중국군 팀 대결 (맞으면 '탈락' 후 재투입, 피 표현 없음)
   war/p/{uid} 위치 · war/fx 총알 궤적 · war/hit 명중 · war/feed 소식 · war/score 점수 (Firebase 규칙에 war 추가 필요) */
const WAR_T = { un:{ n:'국군·유엔군', s:'🔵', c:'#2F6BFF', uni:'#55663F', arm:'#2F6BFF', z:20 }, kp:{ n:'북한군·중국군', s:'🔴', c:'#E5383B', uni:'#8A7A52', arm:'#E5383B', z:-20 } };
const WAR_GOAL = 15, WAR_X = 27, WAR_Z = 23;
let warScene = null, warMe = null, warFigMe = null, warOthers = new Map(), warBots = [], warObs = [], warTr = [], warRefs = [], warScore = { un:0, kp:0, round:1 }, warLocal = { un:0, kp:0 }, warLastSend = 0, warSentKey = '', warFeed = [], warT = 0, warFiring = false, warQuizCd = 0;
function warOnline(){ return warOthers.size > 0; }
function warFig(team, name){ const T = WAR_T[team], g = new THREE.Group(), uni = mat(T.uni), skin = mat('#EAC09A');
  const legs = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.8, 0.26), uni); legs.position.y = 0.4; g.add(legs);
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.62, 0.32), uni); body.position.y = 1.11; g.add(body);
  const belt = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.07, 0.34), mat('#3A2E22')); belt.position.y = 0.83; g.add(belt);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.53, 0.12, 0.35), new THREE.MeshBasicMaterial({ color:T.arm })); arm.position.y = 1.28; g.add(arm);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.21, 14, 10), skin); head.position.y = 1.62; g.add(head);
  const hat = team === 'un' ? new THREE.Mesh(new THREE.SphereGeometry(0.25, 14, 8, 0, Math.PI*2, 0, Math.PI*0.5), mat('#4A5634')) : new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.23, 0.16, 14), mat('#6E6440'));
  hat.position.y = team === 'un' ? 1.66 : 1.78; g.add(hat); if(team === 'un'){ const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.29, 0.03, 16), mat('#4A5634')); rim.position.y = 1.66; g.add(rim); } else { const bill = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.03, 0.14), mat('#5A5236')); bill.position.set(0, 1.72, 0.2); g.add(bill); }
  const gun = new THREE.Group(), stock = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.5), mat('#6A4A2A')), barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.55, 6), mat('#222'));
  barrel.rotation.x = Math.PI/2; barrel.position.z = 0.5; gun.add(stock, barrel); gun.position.set(0.2, 1.12, 0.3); g.add(gun);
  const cv = document.createElement('canvas'); cv.width = 384; cv.height = 96; const x = cv.getContext('2d'); x.font = '800 40px "Noto Sans KR", sans-serif'; const w = Math.min(370, x.measureText(name).width + 44);
  x.fillStyle = T.c; roundRect(x, 192 - w/2, 14, w, 64, 32); x.fill(); x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(fitText(x, name, 330), 192, 47);
  const lab = spriteFrom(cv, 1.4, 0.35); lab.position.y = 2.2; g.add(lab);
  const hp = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.08), new THREE.MeshBasicMaterial({ color:'#6EE7A8', depthTest:false })); hp.position.y = 1.98; hp.renderOrder = 5; g.add(hp);
  g.userData = { hp, gun, lab }; return g; }
function warBox(x, z, w, d, h, col){ const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(col)); m.position.set(x, h/2, z); warScene.add(m); warObs.push({ x0:x - w/2, x1:x + w/2, z0:z - d/2, z1:z + d/2 }); return m; }
function buildWar(){ warScene = new THREE.Scene(); warScene.background = new THREE.Color('#C9C4B0'); warScene.fog = new THREE.Fog('#C9C4B0', 24, 70);
  warScene.add(new THREE.HemisphereLight('#FFF4DC', '#6A5A3A', 0.9)); const sun = new THREE.DirectionalLight('#FFE2B0', 0.6); sun.position.set(-10, 20, 8); warScene.add(sun);
  const gcv = document.createElement('canvas'); gcv.width = gcv.height = 256; const gx = gcv.getContext('2d'); gx.fillStyle = '#8A8A5A'; gx.fillRect(0, 0, 256, 256); for(let i = 0; i < 900; i++){ gx.fillStyle = ['#7A7A4C', '#9A9564', '#86804E', '#A0946A'][i % 4]; gx.fillRect(Math.random()*256, Math.random()*256, 3 + Math.random()*6, 3 + Math.random()*6); }
  const gt = new THREE.CanvasTexture(gcv); gt.wrapS = gt.wrapT = THREE.RepeatWrapping; gt.repeat.set(14, 12);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(120, 110), new THREE.MeshLambertMaterial({ map:gt })); ground.rotation.x = -Math.PI/2; warScene.add(ground);
  const river = new THREE.Mesh(new THREE.PlaneGeometry(120, 4.4), new THREE.MeshPhongMaterial({ color:'#4A7A8C', shininess:80, transparent:true, opacity:0.92 })); river.rotation.x = -Math.PI/2; river.position.y = 0.03; warScene.add(river); warScene.userData.river = river;
  [-10.5, 10.5].forEach(x => { const br = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.18, 5.6), mat('#7A5A3A')); br.position.set(x, 0.09, 0); warScene.add(br); [-1.5, 1.5].forEach(o => { const rail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.5, 5.6), mat('#5A3E26')); rail.position.set(x + o, 0.35, 0); warScene.add(rail); }); });
  [[-34, 0], [34, 0], [0, -WAR_Z - 20], [0, WAR_Z + 20]].forEach(([x, z], i) => { const hill = new THREE.Mesh(new THREE.SphereGeometry(i < 2 ? 9 : 14, 16, 10, 0, Math.PI*2, 0, Math.PI/2), mat(i % 2 ? '#6E7A4A' : '#7A8650')); hill.position.set(x*1.25, -1.5, z); hill.scale.y = 0.5; warScene.add(hill); });
  const sand = '#B8A27A', rock = '#8C8478', wood = '#6E5236';
  [-1, 1].forEach(sd => { const z = sd*15; [-18, -6, 6, 18].forEach(x => warBox(x, z, 4.2, 0.8, 1.05, sand)); [-12, 0, 12].forEach(x => warBox(x + sd*1.5, sd*8, 1.2, 1.2, 1.2, rock));
    warBox(-22*sd, sd*19, 4, 3.2, 2.6, '#9A8466'); warBox(22*sd, sd*10, 3.2, 3.6, 2.2, '#8E7A5E'); warBox(0, sd*20.5, 2.2, 0.8, 1.05, sand); });
  [[-16, -5], [-3, 5], [4, -6], [16, 5], [-24, 4], [24, -4]].forEach(([x, z]) => { const t = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 2.2, 6), mat(wood)); t.position.set(x, 1.1, z); warScene.add(t); const c = new THREE.Mesh(new THREE.ConeGeometry(1.2, 2.4, 7), mat('#4E6A3A')); c.position.set(x, 3, z); warScene.add(c); warObs.push({ x0:x - 0.35, x1:x + 0.35, z0:z - 0.35, z1:z + 0.35 }); });
  [[-6, -11], [7, 11], [-20, 7], [20, -7]].forEach(([x, z]) => warBox(x, z, 1.6, 1.3, 0.7, rock));
  const flag = (x, z, c) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 4, 6), mat('#DDD')); p.position.set(x, 2, z); warScene.add(p); const f = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.9), new THREE.MeshBasicMaterial({ color:c, side:THREE.DoubleSide })); f.position.set(x + 0.72, 3.5, z); warScene.add(f); };
  flag(-25, WAR_Z - 1, WAR_T.un.c); flag(25, -WAR_Z + 1, WAR_T.kp.c);
  const sign = (txt, x, z, ry) => { const cv = document.createElement('canvas'); cv.width = 512; cv.height = 128; const c = cv.getContext('2d'); c.fillStyle = '#F2E6C8'; c.fillRect(0, 0, 512, 128); c.fillStyle = '#3A2E22'; c.font = '900 56px "Noto Sans KR", sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(txt, 256, 66);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.8), new THREE.MeshBasicMaterial({ map:new THREE.CanvasTexture(cv), side:THREE.DoubleSide })); m.position.set(x, 2.2, z); m.rotation.y = ry; warScene.add(m); };
  sign('낙동강 방어선', -10.5, 3.3, 0); sign('1950. 8.', 10.5, -3.3, Math.PI);
}
function warBlocked(x, z, r){ if(Math.abs(x) > WAR_X || Math.abs(z) > WAR_Z) return true; if(Math.abs(z) < 2.2 + r && !(Math.abs(Math.abs(x) - 10.5) < 1.3)) return true;
  return warObs.some(o => x > o.x0 - r && x < o.x1 + r && z > o.z0 - r && z < o.z1 + r); }
function warRayObs(x, z, dx, dz, max){ let best = max; warObs.forEach(o => { let t0 = 0, t1 = best; for(const [p, d, a, b] of [[x, dx, o.x0, o.x1], [z, dz, o.z0, o.z1]]){ if(Math.abs(d) < 1e-6){ if(p < a || p > b){ t0 = 1e9; break; } } else { let u = (a - p)/d, v = (b - p)/d; if(u > v) [u, v] = [v, u]; t0 = Math.max(t0, u); t1 = Math.min(t1, v); } } if(t0 <= t1 && t0 > 0.2 && t0 < best) best = t0; }); return best; }
function warSpawn(team){ let x, z, k = 0; do { x = (Math.random() - 0.5)*30; z = WAR_T[team].z + (Math.random() - 0.5)*3; k++; } while(warBlocked(x, z, 0.5) && k < 40); return [x, z]; }
function warTargets(){ const L = []; warOthers.forEach((o, uid) => { if(o.al && o.tm !== warMe.team) L.push({ uid, x:o.x, z:o.z, o }); }); warBots.forEach(b => { if(b.al && b.team !== warMe.team) L.push({ bot:b, x:b.x, z:b.z }); }); return L; }
function warTracer(x, z, x2, z2, col){ const g = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x, 1.25, z), new THREE.Vector3(x2, 1.25, z2)]), l = new THREE.Line(g, new THREE.LineBasicMaterial({ color:col || '#FFE27A', transparent:true }));
  warScene.add(l); const fl = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 4), new THREE.MeshBasicMaterial({ color:'#FFF2A0', transparent:true })); fl.position.set(x, 1.25, z); warScene.add(fl); warTr.push({ l, fl, t:0.18 }); }
/* ⚔ 전선 체험 2: 레이저 조준선 · 화면 터치/마우스 조준 · 저격총+배율 · 수류탄 · 화염병 · 섬광탄 */
const WAR_W = { rifle:{ n:'소총', e:'🔫', mag:12, cd:0.24, rl:1.6, dmg:25, rng:30, sp:0.07 }, sniper:{ n:'저격총', e:'🎯', mag:5, cd:1.3, rl:2.4, dmg:100, rng:48, sp:0.16 } };
const WAR_THROW = { g:{ n:'수류탄', e:'💣', max:2 }, m:{ n:'화염병', e:'🔥', max:1 }, f:{ n:'섬광탄', e:'✨', max:1 } };
const warAim = { held:false, mouse:false, t:0, x:0, z:0, pid:null, lx:0 };
let warLaser = null, warProj = [], warFires = [], warBlind = 0, warFov0 = 0;
function warAimOn(){ return warAim.held || (warAim.mouse && Date.now() - warAim.t < 3500); }
function warW(){ return WAR_W[warMe.wpn || 'rifle']; }
function warGround(cx, cy){ const r = new THREE.Raycaster(), v = new THREE.Vector2(cx/window.innerWidth*2 - 1, -(cy/window.innerHeight)*2 + 1); r.setFromCamera(v, camera); const p = new THREE.Vector3(); return r.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), -1.2), p) ? p : null; }
function warAimDir(){ const M = warMe; if(M.scope || !warAimOn()) return [Math.sin(M.ry), Math.cos(M.ry)]; const dx = warAim.x - M.x, dz = warAim.z - M.z, l = Math.hypot(dx, dz) || 1; return [dx/l, dz/l]; }
function warAimSet(cx, cy){ const p = warGround(cx, cy); if(!p) return; warAim.x = p.x; warAim.z = p.z; warAim.t = Date.now(); }
['pointerdown', 'pointermove', 'pointerup', 'pointercancel'].forEach(t => window.addEventListener(t, e => {
  if(room !== 'war' || !warMe || e.target !== canvas) return; e.stopPropagation(); const M = warMe;
  if(t === 'pointerdown'){ try { canvas.setPointerCapture(e.pointerId); } catch(x){} if(e.pointerType === 'mouse'){ warAim.mouse = true; warAimSet(e.clientX, e.clientY); warFiring = true; return; } warAim.held = true; warAim.pid = e.pointerId; warAim.lx = e.clientX; if(!M.scope) warAimSet(e.clientX, e.clientY); return; }
  if(t === 'pointermove'){ if(e.pointerType === 'mouse'){ warAim.mouse = true; if(M.scope){ M.ry -= (e.movementX || 0)*0.003; M.tRy = M.ry; } else warAimSet(e.clientX, e.clientY); return; }
    if(e.pointerId !== warAim.pid) return; if(M.scope){ M.ry -= (e.clientX - warAim.lx)*0.0035; M.tRy = M.ry; warAim.lx = e.clientX; } else warAimSet(e.clientX, e.clientY); return; }
  if(e.pointerType === 'mouse'){ warFiring = false; return; } if(e.pointerId === warAim.pid){ warAim.held = false; warAim.pid = null; warAim.t = Date.now(); }
}, true));
function warLaserMake(){ if(warLaser) return; const g = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(0, 0, 1)]);
  warLaser = { l:new THREE.Line(g, new THREE.LineBasicMaterial({ color:'#FF2A2A', transparent:true, opacity:0.75, depthWrite:false })), dot:new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), new THREE.MeshBasicMaterial({ color:'#FF3B3B' })) };
  warScene.add(warLaser.l, warLaser.dot); }
function warLaserTick(){ const M = warMe; if(!warLaser) return; const on = M && M.al; warLaser.l.visible = warLaser.dot.visible = on && !M.scope; if(!on || M.scope) return;
  const [dx, dz] = warAimDir(), W = warW(); let range = warRayObs(M.x, M.z, dx, dz, W.rng); warTargets().forEach(t => { const px = t.x - M.x, pz = t.z - M.z, s = px*dx + pz*dz; if(s > 0 && s < range && Math.hypot(px - dx*s, pz - dz*s) < 0.5) range = s; });
  const sx = M.x + dx*0.55 + dz*0.18, sz = M.z + dz*0.55 - dx*0.18, ex = M.x + dx*range, ez = M.z + dz*range, P = warLaser.l.geometry.attributes.position;
  P.setXYZ(0, sx, 1.14, sz); P.setXYZ(1, ex, 1.14, ez); P.needsUpdate = true; warLaser.l.geometry.computeBoundingSphere(); warLaser.dot.position.set(ex, 1.14, ez); warLaser.l.material.opacity = M.scope ? 0.45 : 0.75; }
function warFire(){ const M = warMe; if(!M.al || M.reload > 0 || M.cd > 0) return; if(M.ammo <= 0){ warReload(); return; } const W = warW(); M.cd = W.cd; M.ammo--;
  let [dx, dz] = warAimDir();
  if(M.wpn !== 'sniper' && !warAimOn() && !M.scope){ let best = null, bd = 24; warTargets().forEach(t => { const vx = t.x - M.x, vz = t.z - M.z, d = Math.hypot(vx, vz); if(d > bd) return; const ang = Math.acos(Math.max(-1, Math.min(1, (vx*dx + vz*dz)/d))); if(ang > 1.2) return; if(warRayObs(M.x, M.z, vx/d, vz/d, d) < d - 0.3) return; best = t; bd = d; });
    if(best){ dx = best.x - M.x; dz = best.z - M.z; const l = Math.hypot(dx, dz); dx /= l; dz /= l; } }
  M.ry = M.tRy = Math.atan2(dx, dz); const spr = M.scope ? 0 : W.sp*(M.wpn === 'sniper' ? 1 : (warAimOn() ? 0.5 : 1)), sp = (Math.random() - 0.5)*spr, cs = Math.cos(sp), sn = Math.sin(sp); [dx, dz] = [dx*cs - dz*sn, dx*sn + dz*cs];
  let range = warRayObs(M.x, M.z, dx, dz, W.rng), hit = null;
  warTargets().forEach(t => { const px = t.x - M.x, pz = t.z - M.z, s = px*dx + pz*dz; if(s < 0 || s > range) return; if(Math.hypot(px - dx*s, pz - dz*s) < 0.5){ range = s; hit = t; } });
  const x2 = M.x + dx*range, z2 = M.z + dz*range; warTracer(M.x + dx*0.6, M.z + dz*0.6, x2, z2, M.wpn === 'sniper' ? '#FFFFFF' : null); warSfx('shot'); if(M.wpn === 'sniper') warSfx('shot');
  if(warOnline() && rtdb){ const r = rtdb.ref('war/fx').push({ u:myUid, x:+M.x.toFixed(2), z:+M.z.toFixed(2), x2:+x2.toFixed(2), z2:+z2.toFixed(2), at:firebase.database.ServerValue.TIMESTAMP }); setTimeout(() => { try { r.remove(); } catch(e){} }, 1500); }
  if(hit){ warSfx('hit'); if(hit.bot) warBotHurt(hit.bot, W.dmg); else if(rtdb){ const r = rtdb.ref('war/hit').push({ by:myUid, bn:me.name, to:hit.uid, d:W.dmg, at:firebase.database.ServerValue.TIMESTAMP }); setTimeout(() => { try { r.remove(); } catch(e){} }, 4000); } }
  if(M.ammo <= 0) warReload(); }
function warReload(){ const M = warMe; if(!M || M.reload > 0 || M.ammo >= warW().mag) return; M.reload = warW().rl; warSfx('reload'); }
function warSwap(){ const M = warMe; if(!M || !M.al) return; const nw = M.wpn === 'sniper' ? 'rifle' : 'sniper'; M.bag[M.wpn] = M.ammo; M.wpn = nw; M.ammo = M.bag[nw]; M.reload = 0; M.cd = 0.4; if(nw !== 'sniper') warScopeSet(false); toast(WAR_W[nw].e + ' ' + WAR_W[nw].n + (nw === 'sniper' ? ' · 🔭로 배율 조준, 한 발이면 탈락!' : '')); warHudBtns(); }
function warScopeSet(on){ const M = warMe; if(!M) return; if(on && M.wpn !== 'sniper') return; M.scope = !!on; $('#warScopeOv').hidden = !M.scope; if(M.scope){ M.camSave = M.camSave || { p:cam.pitch, d:cam.dist }; } else if(M.camSave){ cam.pitch = M.camSave.p; cam.dist = M.camSave.d; M.camSave = null; cam.yaw = Math.atan2(-Math.sin(M.ry), -Math.cos(M.ry)); } warHudBtns(); }
function warHudBtns(){ const M = warMe; if(!M) return; $('#warWpn').textContent = WAR_W[M.wpn].e + ' ' + WAR_W[M.wpn].n; $('#warScp').hidden = M.wpn !== 'sniper'; $('#warScp').classList.toggle('on', !!M.scope);
  Object.keys(WAR_THROW).forEach(k => { const b = $('#warT' + k); b.innerHTML = WAR_THROW[k].e + '<i>' + M.th[k] + '</i>'; b.disabled = !M.th[k]; }); }
function warThrow(k){ const M = warMe; if(!M || !M.al || !M.th[k] || M.thCd > 0) return; M.th[k]--; M.thCd = 0.8; let tx, tz;
  if(warAimOn() && !M.scope){ tx = warAim.x; tz = warAim.z; } else { tx = M.x + Math.sin(M.ry)*10; tz = M.z + Math.cos(M.ry)*10; }
  const d = Math.hypot(tx - M.x, tz - M.z); if(d > 15){ tx = M.x + (tx - M.x)/d*15; tz = M.z + (tz - M.z)/d*15; } M.ry = M.tRy = Math.atan2(tx - M.x, tz - M.z);
  const p = { k, x0:M.x, z0:M.z, x1:tx, z1:tz, mine:true, tm:M.team, by:myUid, bn:me.name }; warProjStart(p); warHudBtns();
  if(warOnline() && rtdb){ const r = rtdb.ref('war/fx').push({ u:myUid, k, tm:M.team, nm:me.name, x:+M.x.toFixed(2), z:+M.z.toFixed(2), x2:+tx.toFixed(2), z2:+tz.toFixed(2), at:firebase.database.ServerValue.TIMESTAMP }); setTimeout(() => { try { r.remove(); } catch(e){} }, 4000); } }
function warProjStart(p){ const col = { g:'#3A4A2A', m:'#7A5A2A', f:'#B8B8B8' }[p.k], m = new THREE.Mesh(p.k === 'm' ? new THREE.CylinderGeometry(0.07, 0.09, 0.28, 8) : new THREE.SphereGeometry(0.13, 10, 8), mat(col)); m.position.set(p.x0, 1.3, p.z0); warScene.add(m);
  const d = Math.hypot(p.x1 - p.x0, p.z1 - p.z0); Object.assign(p, { m, t:0, dur:0.45 + d*0.04, ph:'fly' }); warProj.push(p); warSfx('throw'); }
function warBoom(p){ const R = { g:4.2, f:10 }[p.k]; const fx = new THREE.Mesh(new THREE.SphereGeometry(1, 18, 12), new THREE.MeshBasicMaterial({ color:p.k === 'f' ? '#FFFFFF' : '#FFA040', transparent:true, opacity:0.9, depthWrite:false }));
  fx.position.set(p.x1, 0.6, p.z1); warScene.add(fx); warTr.push({ l:fx, fl:fx, t:0.5, grow:p.k === 'f' ? 9 : 4.5 }); warSfx(p.k === 'f' ? 'flash' : 'boom');
  const M = warMe, enemy = M && p.tm !== M.team;
  if(p.k === 'g'){ if(enemy && M.al){ const d = Math.hypot(M.x - p.x1, M.z - p.z1); if(d < R) warHurt(Math.round(95*(1 - d/R)) + 10, p.by, p.bn + ' 💣'); }
    if(p.mine) warBots.forEach(b => { if(b.team === M.team) return; const d = Math.hypot(b.x - p.x1, b.z - p.z1); if(d < R) warBotHurt(b, Math.round(95*(1 - d/R)) + 10); }); }
  if(p.k === 'f'){ if(enemy && M.al){ const dx = p.x1 - M.x, dz = p.z1 - M.z, d = Math.hypot(dx, dz); if(d < R && warRayObs(M.x, M.z, dx/(d || 1), dz/(d || 1), d) >= d - 0.3) warBlind = Math.max(warBlind, 3.2*(1 - d/(R + 3))); }
    if(p.mine) warBots.forEach(b => { if(b.team !== M.team && Math.hypot(b.x - p.x1, b.z - p.z1) < R) b.stun = 3; }); } }
function warFireZone(p){ const g = new THREE.Group(); for(let i = 0; i < 14; i++){ const a = Math.random()*6.28, r = Math.random()*2.2, f = new THREE.Mesh(new THREE.ConeGeometry(0.28 + Math.random()*0.2, 0.9 + Math.random()*0.8, 6), new THREE.MeshBasicMaterial({ color:i % 3 ? '#FF7A1A' : '#FFD23A', transparent:true, opacity:0.85, depthWrite:false })); f.position.set(Math.cos(a)*r, 0.45, Math.sin(a)*r); g.add(f); }
  const glow = new THREE.Mesh(new THREE.CircleGeometry(2.6, 28), new THREE.MeshBasicMaterial({ color:'#FF5A1A', transparent:true, opacity:0.35, depthWrite:false })); glow.rotation.x = -Math.PI/2; glow.position.y = 0.05; g.add(glow);
  g.position.set(p.x1, 0, p.z1); warScene.add(g); warFires.push({ g, x:p.x1, z:p.z1, t:4.5, tm:p.tm, mine:p.mine, by:p.by, bn:p.bn }); warSfx('boom'); }
function warProjTick(dt){ const M = warMe;
  warProj = warProj.filter(p => { p.t += dt;
    if(p.ph === 'fly'){ const u = Math.min(1, p.t/p.dur); p.m.position.set(p.x0 + (p.x1 - p.x0)*u, 1.3 + Math.sin(u*Math.PI)*2.6 - u*1.15, p.z0 + (p.z1 - p.z0)*u); p.m.rotation.x += dt*12;
      if(u >= 1){ if(p.k === 'm'){ warScene.remove(p.m); warFireZone(p); return false; } p.ph = 'fuse'; p.t = 0; } return true; }
    if(p.ph === 'fuse'){ p.m.position.y = 0.13; p.m.scale.setScalar(1 + Math.sin(p.t*30)*0.15); if(p.t >= (p.k === 'g' ? 1.1 : 0.8)){ warScene.remove(p.m); warBoom(p); return false; } } return true; });
  warFires = warFires.filter(f => { f.t -= dt; f.g.children.forEach((c, i) => { if(c.geometry.type === 'ConeGeometry'){ c.scale.y = 0.7 + Math.abs(Math.sin(warT*9 + i))*0.6; c.material.opacity = Math.min(0.85, f.t/1.2); } else c.material.opacity = Math.min(0.35, f.t/3); });
    if(M && M.al && f.tm !== M.team && Math.hypot(M.x - f.x, M.z - f.z) < 2.6){ f.acc = (f.acc || 0) + dt*28; if(f.acc >= 7){ warHurt(Math.floor(f.acc), f.by, f.bn + ' 🔥'); f.acc = 0; } }
    if(f.mine) warBots.forEach(b => { if(b.team !== (M && M.team) && b.al && Math.hypot(b.x - f.x, b.z - f.z) < 2.6){ b.burn = (b.burn || 0) + dt*28; if(b.burn >= 7){ warBotHurt(b, Math.floor(b.burn)); b.burn = 0; } } });
    if(f.t <= 0){ warScene.remove(f.g); return false; } return true; });
  if(warBlind > 0){ warBlind -= dt; } $('#warBlind').style.opacity = Math.max(0, Math.min(1, warBlind/1.2)); }
function warScopeTick(dt){ const M = warMe, base = window.innerWidth < window.innerHeight ? 62 : 56, tf = M && M.scope ? 18 : base;
  if(Math.abs(camera.fov - tf) > 0.1){ camera.fov += (tf - camera.fov)*Math.min(1, dt*10); camera.updateProjectionMatrix(); }
  if(M && M.scope){ const dx = Math.sin(M.ry), dz = Math.cos(M.ry); cam.yaw = Math.atan2(-dx, -dz); cam.pitch = 0.06; cam.dist = 1.6; cam.t.set(M.x + dx*0.4 + dz*0.25, 1.75, M.z + dz*0.4 - dx*0.25); } }

function warHurt(d, by, bn){ const M = warMe; if(!M.al || M.inv > 0) return; M.hp -= d; warFlash(); if(M.hp > 0) return; M.hp = 0; M.al = false; M.dead = 3.2; M.killer = bn || '적'; if(M.scope) warScopeSet(false);
  const ot = M.team === 'un' ? 'kp' : 'un'; warKill(ot, bn || '적', me.name, M.team); }
function warKill(team, killer, victim, vteam){ const msg = { k:killer, v:victim, kt:team, vt:vteam };
  if(warOnline() && rtdb){ rtdb.ref('war/score').transaction(s => { s = s || { un:0, kp:0, round:1 }; if(s.win) return s; s[team] = (s[team] || 0) + 1; if(s[team] >= WAR_GOAL){ s.win = team; s.winAt = Date.now(); } return s; }); rtdb.ref('war/feed').push(Object.assign({ at:firebase.database.ServerValue.TIMESTAMP }, msg)); }
  else { warLocal[team]++; warFeedAdd(msg); if(warLocal[team] >= WAR_GOAL){ warLocal.win = team; warLocal.winAt = Date.now(); } } }
function warFeedAdd(m){ warFeed.unshift(m); warFeed.length = Math.min(warFeed.length, 4); const F = $('#warFeed'); if(F) F.innerHTML = warFeed.map(f => '<div><b style="color:' + WAR_T[f.kt].c + '">' + escHtml(f.k) + '</b> ▸ <span style="color:' + WAR_T[f.vt].c + '">' + escHtml(f.v) + '</span> 탈락</div>').join(''); }
let warAC = null; function warSfx(k){ try { warAC = warAC || new (window.AudioContext || window.webkitAudioContext)(); const t = warAC.currentTime, g = warAC.createGain(); g.connect(warAC.destination);
  if(k === 'shot'){ const b = warAC.createBuffer(1, 4000, warAC.sampleRate), d = b.getChannelData(0); for(let i = 0; i < 4000; i++) d[i] = (Math.random()*2 - 1)*Math.pow(1 - i/4000, 3); const s = warAC.createBufferSource(); s.buffer = b; g.gain.value = 0.18; s.connect(g); s.start(t); }
  else if(k === 'boom' || k === 'flash' || k === 'throw'){ const n = k === 'throw' ? 2500 : 18000, b = warAC.createBuffer(1, n, warAC.sampleRate), d = b.getChannelData(0); for(let i = 0; i < n; i++) d[i] = (Math.random()*2 - 1)*Math.pow(1 - i/n, k === 'boom' ? 1.6 : 4); const s = warAC.createBufferSource(); s.buffer = b; const f = warAC.createBiquadFilter(); f.type = k === 'boom' ? 'lowpass' : 'highpass'; f.frequency.value = k === 'boom' ? 600 : 2500; g.gain.value = k === 'boom' ? 0.5 : 0.15; s.connect(f); f.connect(g); s.start(t); }
  else { const o = warAC.createOscillator(); o.type = k === 'hit' ? 'square' : 'triangle'; o.frequency.setValueAtTime(k === 'hit' ? 880 : 300, t); o.frequency.exponentialRampToValueAtTime(k === 'hit' ? 440 : 600, t + 0.12); g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.15); o.connect(g); o.start(t); o.stop(t + 0.16); } } catch(e){} }
function warFlash(){ const f = $('#warHurt'); if(!f) return; f.classList.remove('on'); void f.offsetWidth; f.classList.add('on'); }
function warBotHurt(b, d){ if(!b.al) return; b.hp -= d; if(b.hp <= 0){ b.al = false; b.dead = 3; warKill(warMe.team, me.name, b.name, b.team); } }
function warMakeBots(){ warBots.forEach(b => warScene.remove(b.fig)); warBots = []; const et = warMe.team === 'un' ? 'kp' : 'un', names = et === 'un' ? ['국군 김 일병', '국군 이 상병', '유엔군 스미스', '국군 박 병장'] : ['북한군 1', '북한군 2', '중국군 1', '북한군 3'];
  names.forEach((n, i) => { const [x, z] = warSpawn(et), fig = warFig(et, n + ' (AI)'); warScene.add(fig); warBots.push({ name:n, team:et, x, z, ry:0, hp:100, al:true, fig, cd:1 + i*0.4, wan:Math.random()*6, dead:0 }); }); }
function warBotTick(b, dt){ const M = warMe, f = b.fig;
  if(!b.al){ b.dead -= dt; f.rotation.x = Math.max(-Math.PI/2, f.rotation.x - dt*4); f.position.y = 0.15; if(b.dead <= 0){ [b.x, b.z] = warSpawn(b.team); b.hp = 100; b.al = true; f.rotation.x = 0; f.position.y = 0; } f.position.x = b.x; f.position.z = b.z; return; }
  const vx = M.x - b.x, vz = M.z - b.z, d = Math.hypot(vx, vz), see = M.al && d < 20 && warRayObs(b.x, b.z, vx/d, vz/d, d) >= d - 0.3;
  b.wan += dt*0.6; let mx = 0, mz = 0; if(see && d > 9){ mx = vx/d; mz = vz/d; } else if(!see){ mx = Math.sin(b.wan) + (vx/d)*0.6; mz = Math.cos(b.wan*0.7) + (vz/d)*0.6; const l = Math.hypot(mx, mz) || 1; mx /= l; mz /= l; } else { mx = -vz/d*Math.sin(warT + b.wan); mz = vx/d*Math.sin(warT + b.wan); }
  const sp = (b.stun > 0 ? 0 : 2.2)*dt; if(!warBlocked(b.x + mx*sp, b.z, 0.4)) b.x += mx*sp; if(!warBlocked(b.x, b.z + mz*sp, 0.4)) b.z += mz*sp;
  b.ry = see ? Math.atan2(vx, vz) : Math.atan2(mx, mz) || b.ry; b.cd -= dt; if(b.stun > 0){ b.stun -= dt; b.cd = Math.max(b.cd, 0.4); }
  if(see && b.cd <= 0){ b.cd = 0.9 + Math.random()*0.8; const miss = Math.random() < 0.6, ex = miss ? (Math.random() - 0.5)*3 : 0; warTracer(b.x, b.z, M.x + ex, M.z + ex, '#FFB0A0'); if(!miss) warHurt(12, 'bot', b.name); }
  f.position.set(b.x, 0, b.z); f.rotation.y = b.ry; f.userData.hp.scale.x = Math.max(0.01, b.hp/100); f.userData.hp.quaternion.copy(camera.quaternion); }
function warListen(){ if(!rtdb) return; const add = (ref, ev, fn) => { ref.on(ev, fn, () => { const n = $('#warNet'); if(n) n.textContent = '⚠️ 혼자 연습 모드 · 친구 대전은 Firebase 규칙에 war를 추가해야 해요'; }); warRefs.push([ref, ev]); };
  add(rtdb.ref('war/p'), 'value', s => { const v = s.val() || {}, now = Date.now(); const seen = new Set();
    Object.keys(v).forEach(uid => { if(uid === myUid) return; const p = v[uid]; if(!p || now - (p.at || 0) > 15000 || !WAR_T[p.tm]) return; seen.add(uid); let o = warOthers.get(uid);
      if(!o || o.tm !== p.tm){ if(o) warScene.remove(o.fig); o = { fig:warFig(p.tm, String(p.nm || '친구').slice(0, 10)), tm:p.tm, x:p.x, z:p.z }; warScene.add(o.fig); warOthers.set(uid, o); }
      Object.assign(o, { tx:+p.x, tz:+p.z, ry:+p.ry || 0, hp:+p.hp, al:!!p.al, nm:p.nm, tm:p.tm }); });
    warOthers.forEach((o, uid) => { if(!seen.has(uid)){ warScene.remove(o.fig); warOthers.delete(uid); } });
    if(warOnline() && warBots.length){ warBots.forEach(b => warScene.remove(b.fig)); warBots = []; toast('⚔ 친구가 들어왔어요! AI 병사는 물러나요'); } if(!warOnline() && !warBots.length && warMe) warMakeBots(); });
  add(rtdb.ref('war/fx').limitToLast(20), 'child_added', s => { const f = s.val() || {}; if(f.u === myUid || Date.now() - (f.at || 0) > 3000) return; if(WAR_THROW[f.k] && WAR_T[f.tm]){ warProjStart({ k:f.k, x0:+f.x, z0:+f.z, x1:+f.x2, z1:+f.z2, mine:false, tm:f.tm, by:f.u, bn:String(f.nm || '적').slice(0, 10) }); return; } const o = warOthers.get(f.u); warTracer(f.x, f.z, f.x2, f.z2, o && o.tm === 'kp' ? '#FFB0A0' : '#A8D0FF'); });
  add(rtdb.ref('war/hit').orderByChild('to').equalTo(myUid), 'child_added', s => { const h = s.val() || {}; if(Date.now() - (h.at || 0) > 5000) return; warHurt(Math.min(100, +h.d || 25), h.by, String(h.bn || '적').slice(0, 10)); });
  add(rtdb.ref('war/feed').limitToLast(4), 'child_added', s => { const f = s.val() || {}; if(!WAR_T[f.kt] || !WAR_T[f.vt] || Date.now() - (f.at || 0) > 20000) return; warFeedAdd({ k:String(f.k || '').slice(0, 12), v:String(f.v || '').slice(0, 12), kt:f.kt, vt:f.vt }); });
  add(rtdb.ref('war/score'), 'value', s => { warScore = s.val() || { un:0, kp:0, round:1 }; }); }
function warPick(team){ $('#warPick').hidden = true; const [x, z] = warSpawn(team); warMe = { team, x, z, ry:team === 'un' ? Math.PI : 0, tRy:team === 'un' ? Math.PI : 0, hp:100, al:true, ammo:12, reload:0, cd:0, inv:1.5, dead:0, wpn:'rifle', bag:{ rifle:12, sniper:5 }, th:{ g:2, m:1, f:1 }, thCd:0, scope:false }; warLaserMake();
  if(warFigMe) warScene.remove(warFigMe); warFigMe = warFig(team, me.name + ' (나)'); warScene.add(warFigMe); cam.yaw = team === 'un' ? 0 : Math.PI; cam.pitch = 0.62; cam.dist = 9;
  $('#warHud').hidden = false; if(rtdb && myUid) try { rtdb.ref('war/p/' + myUid).onDisconnect().remove(); } catch(e){} if(!warOnline()) warMakeBots(); warHudBtns(); toast(WAR_T[team].s + ' ' + WAR_T[team].n + '(으)로 투입! 화면을 누르면 그쪽으로 조준해요'); }
function warQuiz(){ if(warQuizCd > 0){ toast('보급 퀴즈는 ' + Math.ceil(warQuizCd) + '초 뒤에 다시 풀 수 있어요'); return; } const P = HIST_C.filter(c => c.s === 'E' || c.s === 'F'), c = P[Math.floor(Math.random()*P.length)], opts = histOpts(c), Q = $('#warQuiz');
  Q.innerHTML = '<div class="wq-card"><small>📦 보급 퀴즈 · 맞히면 탄약 가득 + 체력 +50 + 투척물 +1</small><b>' + escHtml(c.q) + '</b>' + opts.map((o, i) => '<button type="button" data-i="' + i + '">' + escHtml(o) + '</button>').join('') + '<button type="button" class="wq-x">닫기</button></div>'; Q.hidden = false;
  Q.querySelector('.wq-x').onclick = () => { Q.hidden = true; };
  Q.querySelectorAll('[data-i]').forEach(b => b.onclick = () => { const ok = opts[+b.dataset.i] === c.a; Q.hidden = true; warQuizCd = ok ? 25 : 10;
    if(ok){ const M = warMe; M.bag = { rifle:12, sniper:5 }; M.ammo = warW().mag; M.reload = 0; M.hp = Math.min(150, M.hp + 50); Object.keys(WAR_THROW).forEach(k => { M.th[k] = Math.min(WAR_THROW[k].max, M.th[k] + 1); }); warHudBtns(); toast('📦 보급 성공! 탄약 가득 · 체력 ' + M.hp + ' · 투척물 +1'); } else toast('❌ 정답은 「' + c.a + '」 · ' + (c.x || '10초 뒤 다시 도전')); }); }
function enterWar(){ document.body.classList.add('inwar'); if(!warScene) buildWar(); $('#panel').hidden = true; $('#joy').hidden = false; $('#warUI').hidden = false; $('#warPick').hidden = false; $('#warHud').hidden = true; warMe = null; warFeed = []; warLocal = { un:0, kp:0 };
  Object.assign(camLim, { pmin:0.35, pmax:1.2, dmin:6, dmax:16 }); cam.yaw = 0; cam.pitch = 0.9; cam.dist = 30; cam.t.set(0, 0, 0); warListen();
  setTimeout(() => { let u = 0, k = 0; warOthers.forEach(o => { if(o.tm === 'un') u++; else k++; }); const c = $('#warCnt'); if(c) c.textContent = '지금 국군·유엔군 ' + u + '명 · 북한군·중국군 ' + k + '명' + (u + k ? '' : ' · 혼자면 AI 병사와 연습해요'); }, 900); }
function leaveWar(){ document.body.classList.remove('inwar'); if(!$('#warUI') || $('#warUI').hidden) return; $('#warUI').hidden = true; warRefs.forEach(([r, e]) => { try { r.off(e); } catch(x){} }); warRefs = [];
  if(rtdb && myUid) try { rtdb.ref('war/p/' + myUid).remove(); } catch(e){} warOthers.forEach(o => warScene.remove(o.fig)); warOthers.clear(); warBots.forEach(b => warScene.remove(b.fig)); warBots = []; if(warFigMe) warScene.remove(warFigMe); warFigMe = null; warMe = null; warFiring = false; warProj.forEach(p => warScene.remove(p.m)); warProj = []; warFires.forEach(f => warScene.remove(f.g)); warFires = []; warBlind = 0; $('#warBlind').style.opacity = 0; $('#warScopeOv').hidden = true; warAim.held = warAim.mouse = false; camera.fov = window.innerWidth < window.innerHeight ? 62 : 56; camera.updateProjectionMatrix(); }
function warTick(dt){ warT += dt; if(!warScene) return; if(warScene.userData.river) warScene.userData.river.material.color.setHSL(0.54, 0.3, 0.42 + Math.sin(warT*1.5)*0.02);
  warTr = warTr.filter(t => { t.t -= dt; if(t.grow){ t.l.scale.setScalar(0.3 + t.grow*(1 - t.t/0.5)); t.l.material.opacity = Math.max(0, t.t/0.5)*0.9; if(t.t <= 0){ warScene.remove(t.l); return false; } return true; } t.l.material.opacity = Math.max(0, t.t/0.18); t.fl.material.opacity = t.l.material.opacity; if(t.t <= 0){ warScene.remove(t.l); warScene.remove(t.fl); t.l.geometry.dispose(); return false; } return true; });
  warOthers.forEach(o => { o.x += ((o.tx ?? o.x) - o.x)*Math.min(1, dt*10); o.z += ((o.tz ?? o.z) - o.z)*Math.min(1, dt*10); const f = o.fig; f.position.set(o.x, o.al ? 0 : 0.15, o.z); f.rotation.y = o.ry; f.rotation.x += ((o.al ? 0 : -Math.PI/2) - f.rotation.x)*Math.min(1, dt*6); f.userData.hp.scale.x = Math.max(0.01, (o.hp || 0)/100); f.userData.hp.quaternion.copy(camera.quaternion); });
  const sc = warOnline() ? warScore : warLocal; $('#warScore').innerHTML = '<span class="un">🔵 국군·유엔군 <b>' + (sc.un || 0) + '</b></span><i>' + WAR_GOAL + '명 먼저</i><span class="kp"><b>' + (sc.kp || 0) + '</b> 북한군·중국군 🔴</span>';
  const W = $('#warWin'); if(sc.win){ W.hidden = false; W.innerHTML = '<b>' + WAR_T[sc.win].s + ' ' + WAR_T[sc.win].n + ' 승리!</b><span>잠시 후 다음 판이 시작돼요</span>'; if(Date.now() - (sc.winAt || 0) > 7000){ if(warOnline() && rtdb) rtdb.ref('war/score').transaction(s => (s && s.win && Date.now() - s.winAt > 7000) ? { un:0, kp:0, round:(s.round || 1) + 1 } : s); else warLocal = { un:0, kp:0 }; } } else W.hidden = true;
  warBots.forEach(b => warBotTick(b, dt)); const M = warMe; if(!M){ warProjTick(dt); return; }
  if(!M.al){ M.dead -= dt; warFigMe.rotation.x = Math.max(-Math.PI/2, warFigMe.rotation.x - dt*4); $('#warDead').hidden = false; $('#warDead').innerHTML = '<b>탈락!</b><span>' + escHtml(M.killer || '') + '에게 맞았어요 · ' + Math.max(0, Math.ceil(M.dead)) + '초 뒤 재투입</span>';
    if(M.dead <= 0){ [M.x, M.z] = warSpawn(M.team); M.hp = 100; M.al = true; M.bag = { rifle:12, sniper:5 }; M.ammo = warW().mag; M.th = { g:2, m:1, f:1 }; M.inv = 2; warHudBtns(); warFigMe.rotation.x = 0; $('#warDead').hidden = true; } }
  else { let ix = joy.x, iy = joy.y; if(keys['a'] || keys['arrowleft']) ix -= 1; if(keys['d'] || keys['arrowright']) ix += 1; if(keys['w'] || keys['arrowup']) iy -= 1; if(keys['s'] || keys['arrowdown']) iy += 1;
    const mag = Math.min(1, Math.hypot(ix, iy)); if(mag >= 0.12){ const fx = -Math.sin(cam.yaw), fz = -Math.cos(cam.yaw), rx = Math.cos(cam.yaw), rz = -Math.sin(cam.yaw); let mx = fx*(-iy) + rx*ix, mz = fz*(-iy) + rz*ix; const ml = Math.hypot(mx, mz) || 1; mx /= ml; mz /= ml;
      const sp = 4.4*mag*dt; if(!warBlocked(M.x + mx*sp, M.z, 0.4)) M.x += mx*sp; if(!warBlocked(M.x, M.z + mz*sp, 0.4)) M.z += mz*sp; M.tRy = Math.atan2(mx, mz); }
    if(warAimOn() && !M.scope) M.tRy = Math.atan2(warAim.x - M.x, warAim.z - M.z); if(M.scope) M.tRy = M.ry;
    let dr = M.tRy - M.ry; dr = Math.atan2(Math.sin(dr), Math.cos(dr)); M.ry += dr*Math.min(1, dt*10);
    if(keys['q']){ keys['q'] = false; warSwap(); } if(keys['e']){ keys['e'] = false; warScopeSet(!M.scope); } if(keys['g']){ keys['g'] = false; warThrow('g'); }
    if(warFiring || keys[' ']) warFire(); if(keys['r']) warReload(); }
  M.cd = Math.max(0, M.cd - dt); M.inv = Math.max(0, M.inv - dt); warQuizCd = Math.max(0, warQuizCd - dt); M.thCd = Math.max(0, (M.thCd || 0) - dt); if(M.reload > 0){ M.reload -= dt; if(M.reload <= 0){ M.reload = 0; M.ammo = warW().mag; } }
  const F = warFigMe; F.position.set(M.x, M.al ? Math.abs(Math.sin(warT*9))*0.04*Math.min(1, Math.hypot(joy.x, joy.y)) : 0.15, M.z); F.rotation.y = M.ry; F.visible = !M.scope && (M.inv <= 0 || Math.floor(warT*10) % 2 === 0); F.userData.hp.scale.x = Math.max(0.01, Math.min(1.5, M.hp/100)); F.userData.hp.quaternion.copy(camera.quaternion);
  if(!M.scope) cam.t.lerp(new THREE.Vector3(M.x, 1.2, M.z), 1 - Math.exp(-dt*8)); warScopeTick(dt); warLaserTick(); warProjTick(dt);
  $('#warHp').style.width = Math.min(100, M.hp/1.5) + '%'; $('#warHpT').textContent = '❤ ' + Math.max(0, Math.round(M.hp)); $('#warAmmo').textContent = M.reload > 0 ? '🔄 장전 중…' : WAR_W[M.wpn].e + ' ' + M.ammo + ' / ' + warW().mag; $('#warQz').classList.toggle('cd', warQuizCd > 0); $('#warQz').textContent = warQuizCd > 0 ? '📦 ' + Math.ceil(warQuizCd) : '📦 보급';
  const now = Date.now(), key = [M.x.toFixed(1), M.z.toFixed(1), M.ry.toFixed(1), Math.round(M.hp), M.al].join(); if(rtdb && myUid && now - warLastSend > 130 && (key !== warSentKey || now - warLastSend > 4000)){ warLastSend = now; warSentKey = key;
    rtdb.ref('war/p/' + myUid).set({ x:+M.x.toFixed(2), z:+M.z.toFixed(2), ry:+M.ry.toFixed(2), hp:Math.round(M.hp), al:M.al ? 1 : 0, tm:M.team, nm:me.name, at:now }).catch(() => {}); } }

$('#warExit').addEventListener('click', exitRoom);
document.querySelectorAll('#warPick [data-team]').forEach(b => b.addEventListener('click', () => warPick(b.dataset.team)));
(() => { const f = $('#warFire'); const on = e => { e.preventDefault(); e.stopPropagation(); warFiring = true; }, off = e => { warFiring = false; };
  f.addEventListener('pointerdown', on); ['pointerup', 'pointercancel', 'pointerleave'].forEach(t => f.addEventListener(t, off));
  $('#warRl').addEventListener('click', e => { e.stopPropagation(); if(warMe) warReload(); }); $('#warWpn').addEventListener('click', e => { e.stopPropagation(); warSwap(); }); $('#warScp').addEventListener('click', e => { e.stopPropagation(); if(warMe) warScopeSet(!warMe.scope); });
  [['#warTg', 'g'], ['#warTm', 'm'], ['#warTf', 'f']].forEach(([sel, k]) => $(sel).addEventListener('click', e => { e.stopPropagation(); warThrow(k); })); $('#warQz').addEventListener('click', e => { e.stopPropagation(); if(warMe) warQuiz(); });
  ['#warHud', '#warTop', '#warPick', '#warQuiz'].forEach(sel => $(sel).addEventListener('pointerdown', e => e.stopPropagation())); })();
$('#exhExit').addEventListener('click', exitRoom);
$('#debExit').addEventListener('click', exitRoom);
$('#engExit').addEventListener('click', exitRoom);
$('#engHomeBtn').addEventListener('click', () => { if(room === 'hist'){ if(histView) histSetView(''); histHome(); } else engHome(); });
/* ===== 🎁 단어 뽑기: 오늘의 단어를 끝내면 뽑기 1번 → 8반 오리지널 '워디' 미니 피규어 12종 (👑 1%) ===== */
const FIGS = [
  { n:'하늘 워디', r:0, c:'#8FD3FF', a:'book' }, { n:'딸기 워디', r:0, c:'#FF9DB8', a:'scarf' }, { n:'레몬 워디', r:0, c:'#FFE07A', a:'pencil' },
  { n:'민트 워디', r:0, c:'#8FE8C8', a:'glasses' }, { n:'라벤더 워디', r:0, c:'#C7A8FF', a:'phones' }, { n:'코코아 워디', r:0, c:'#C89A72', a:'' },
  { n:'우주인 워디', r:1, c:'#EEF2F8', a:'helmet' }, { n:'해적 워디', r:1, c:'#B07A4A', a:'pirate' }, { n:'닌자 워디', r:1, c:'#4A4A5C', a:'ninja' },
  { n:'무지개 워디', r:2, c:'#FF7A7A', a:'rainbow' }, { n:'로봇 워디', r:2, c:'#A8B4C4', a:'robot' }, { n:'영어의 왕 워디', r:3, c:'#FFC93C', a:'king' }];
const RAR = [{ n:'일반', c:'#C9D2E0', p:0.70 }, { n:'레어', c:'#5AB8FF', p:0.22 }, { n:'에픽', c:'#C77DFF', p:0.07 }, { n:'전설', c:'#FFC93C', p:0.01 }];
function makeFig(i, locked){   // 동글동글한 곰 모양 미니 피규어 (둥근 기둥 받침 위)
  const F = FIGS[i], g = new THREE.Group(), L = (c, o) => new THREE.MeshLambertMaterial(Object.assign({ color:c }, o || {}));
  const add = (geo, m, x, y, z, p) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); (p || g).add(o); return o; };
  const body = locked ? L('#2A2E3A') : F.a === 'king' ? L(F.c, { emissive:'#7A4A00', emissiveIntensity:0.35 }) : L(F.c);
  add(new THREE.CylinderGeometry(0.42, 0.46, 0.12, 24), L(locked ? '#1A1C24' : '#2A2F45'), 0, 0.06, 0);
  if(!locked) add(new THREE.TorusGeometry(0.44, 0.025, 6, 28), L(RAR[F.r].c, { emissive:RAR[F.r].c, emissiveIntensity:0.5 }), 0, 0.12, 0).rotation.x = Math.PI/2;
  const b = add(new THREE.SphereGeometry(0.3, 20, 14), body, 0, 0.42, 0); b.scale.set(1, 0.95, 0.9);
  const h = add(new THREE.SphereGeometry(0.27, 20, 14), body, 0, 0.82, 0);
  [-1, 1].forEach(s => { add(new THREE.SphereGeometry(0.09, 12, 8), body, s*0.2, 1.03, 0); add(new THREE.SphereGeometry(0.085, 10, 8), body, s*0.31, 0.45, 0.06); add(new THREE.SphereGeometry(0.09, 10, 8), body, s*0.14, 0.16, 0.08); });
  if(locked){ g.userData.f = -1; return g; }
  const eye = L('#1A1A22'), wh = L('#FFFFFF');
  [-1, 1].forEach(s => { add(new THREE.SphereGeometry(0.045, 10, 8), eye, s*0.09, 0.85, 0.24); add(new THREE.SphereGeometry(0.014, 6, 4), wh, s*0.09 + 0.014, 0.865, 0.283); add(new THREE.CircleGeometry(0.04, 12), L('#FF8FA8', { transparent:true, opacity:0.8 }), s*0.16, 0.78, 0.236).rotation.y = s*0.5;
    add(new THREE.SphereGeometry(0.05, 10, 8), L('#FFF4E8'), s*0.2, 1.03, 0.05); });
  add(new THREE.SphereGeometry(0.06, 12, 8), L('#FFF4E8'), 0, 0.78, 0.25).scale.set(1.3, 0.8, 0.7); add(new THREE.SphereGeometry(0.022, 8, 6), eye, 0, 0.8, 0.29);
  const cap = () => { add(new THREE.BoxGeometry(0.38, 0.03, 0.38), L('#20243A'), 0, 1.08, 0).rotation.y = 0.785; add(new THREE.CylinderGeometry(0.13, 0.15, 0.08, 14), L('#20243A'), 0, 1.04, 0); add(new THREE.CylinderGeometry(0.01, 0.01, 0.14, 4), L('#FFC93C'), 0.16, 1.02, 0.1); };
  const a = F.a;
  if(a === 'book'){ add(new THREE.BoxGeometry(0.2, 0.26, 0.05), L('#3A6AD0'), 0.1, 0.45, 0.28).rotation.y = -0.3; cap(); }
  if(a === 'scarf'){ add(new THREE.TorusGeometry(0.2, 0.06, 8, 18), L('#E83A5A'), 0, 0.64, 0).rotation.x = Math.PI/2; add(new THREE.BoxGeometry(0.08, 0.2, 0.04), L('#E83A5A'), 0.12, 0.52, 0.22); cap(); }
  if(a === 'pencil'){ const p = add(new THREE.CylinderGeometry(0.03, 0.03, 0.42, 8), L('#FFB020'), 0.33, 0.5, 0.12); p.rotation.z = 0.5; add(new THREE.ConeGeometry(0.03, 0.08, 8), L('#F4D8B0'), 0.43, 0.68, 0.12).rotation.z = 0.5; cap(); }
  if(a === 'glasses'){ [-1, 1].forEach(s => add(new THREE.TorusGeometry(0.06, 0.012, 6, 16), L('#222'), s*0.09, 0.85, 0.26)); add(new THREE.BoxGeometry(0.06, 0.012, 0.01), L('#222'), 0, 0.86, 0.27); cap(); }
  if(a === 'phones'){ add(new THREE.TorusGeometry(0.28, 0.025, 6, 20, Math.PI), L('#FF5AA8'), 0, 0.85, 0); [-1, 1].forEach(s => add(new THREE.CylinderGeometry(0.07, 0.07, 0.06, 14), L('#FF5AA8'), s*0.28, 0.82, 0).rotation.z = Math.PI/2); }
  if(a === ''){ cap(); add(new THREE.SphereGeometry(0.05, 10, 8), L('#FF5A5A'), -0.12, 1.08, 0.12); }
  if(a === 'helmet'){ add(new THREE.SphereGeometry(0.36, 20, 14), new THREE.MeshLambertMaterial({ color:'#BFE8FF', transparent:true, opacity:0.35, depthWrite:false }), 0, 0.84, 0); add(new THREE.TorusGeometry(0.3, 0.04, 8, 22), L('#D0D6E0'), 0, 0.6, 0).rotation.x = Math.PI/2; add(new THREE.BoxGeometry(0.16, 0.12, 0.04), L('#3A6AD0'), 0, 0.42, 0.28); }
  if(a === 'pirate'){ add(new THREE.CylinderGeometry(0.06, 0.3, 0.16, 3), L('#1A1A1A'), 0, 1.1, 0).rotation.y = Math.PI/6; add(new THREE.CircleGeometry(0.05, 12), L('#111'), 0.09, 0.85, 0.27); add(new THREE.SphereGeometry(0.03, 8, 6), L('#FFF'), 0, 1.13, 0.16); }
  if(a === 'ninja'){ add(new THREE.CylinderGeometry(0.275, 0.275, 0.09, 18, 1, true), L('#C82A2A', { side:THREE.DoubleSide }), 0, 0.88, 0); [0.1, -0.1].forEach((d, k) => add(new THREE.BoxGeometry(0.04, 0.18, 0.02), L('#C82A2A'), 0.05*(k ? -1 : 1), 0.8, -0.28 + d*0.2).rotation.z = k ? 0.4 : -0.4);
    add(new THREE.BoxGeometry(0.28, 0.035, 0.035), L('#C0C6D0'), -0.2, 0.5, 0.25).rotation.z = 0.7; }
  if(a === 'rainbow'){ ['#FF5A5A', '#FFA23A', '#FFE14A', '#5ADB7A', '#4AA8FF', '#A86AFF'].forEach((c, k) => add(new THREE.TorusGeometry(0.31 - Math.abs(k - 2.5)*0.025, 0.035, 6, 22), L(c), 0, 0.28 + k*0.055, 0).rotation.x = Math.PI/2); cap(); }
  if(a === 'robot'){ add(new THREE.CylinderGeometry(0.012, 0.012, 0.2, 6), L('#666'), 0, 1.14, 0); add(new THREE.SphereGeometry(0.04, 10, 8), L('#FF4A4A', { emissive:'#FF2A2A', emissiveIntensity:0.8 }), 0, 1.25, 0);
    add(new THREE.BoxGeometry(0.16, 0.1, 0.03), L('#2A3A4A'), 0, 0.46, 0.28); [-1, 1].forEach(s => add(new THREE.SphereGeometry(0.018, 6, 4), L('#5AFF9A', { emissive:'#3AFF7A' }), s*0.04, 0.47, 0.3)); }
  if(a === 'king'){ const gold = L('#FFD24A', { emissive:'#A86A00', emissiveIntensity:0.45 });
    add(new THREE.CylinderGeometry(0.16, 0.17, 0.1, 16, 1, true), gold, 0, 1.1, 0).material.side = THREE.DoubleSide; for(let k=0;k<5;k++){ const an = k/5*Math.PI*2; add(new THREE.ConeGeometry(0.035, 0.1, 6), gold, Math.cos(an)*0.16, 1.2, Math.sin(an)*0.16); }
    add(new THREE.SphereGeometry(0.035, 10, 8), L('#E8304A', { emissive:'#A0102A', emissiveIntensity:0.6 }), 0, 1.1, 0.17);
    const cape = add(new THREE.PlaneGeometry(0.56, 0.52), L('#C8203A', { side:THREE.DoubleSide }), 0, 0.42, -0.24); cape.rotation.x = 0.18;
    add(new THREE.TorusGeometry(0.2, 0.035, 8, 18), L('#FFFFFF'), 0, 0.64, -0.02).rotation.x = Math.PI/2;
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map:cinTex(128, 128, (x, w, h2) => { const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, 'rgba(255,220,120,.9)'); gr.addColorStop(1, 'rgba(255,200,80,0)'); x.fillStyle = gr; x.fillRect(0, 0, w, h2); }), transparent:true, depthWrite:false, blending:THREE.AdditiveBlending }));
    glow.scale.setScalar(1.6); glow.position.y = 0.65; g.add(glow); }
  g.userData.f = i; return g;
}
// ── 뽑기 ──
function figRoll(){ const r = Math.random(); let acc = 0, tier = 0; for(let k=0;k<RAR.length;k++){ acc += RAR[k].p; if(r < acc){ tier = k; break; } tier = k; }
  const pool = FIGS.map((f, i) => i).filter(i => FIGS[i].r === tier); return pool[Math.floor(Math.random()*pool.length)]; }
let gacha = null, gachaM = null, gachaFig = null, gachaRays = null;
function buildGacha(){   // 영어 탐구실 왼쪽 앞: 캡슐 뽑기 기계
  const g = new THREE.Group(); g.position.set(-4.6, 0, 3.2); g.rotation.y = 0.45; engScene.add(g); const L = c => new THREE.MeshLambertMaterial({ color:c });
  const add = (geo, m, x, y, z) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); g.add(o); return o; };
  add(new THREE.BoxGeometry(1.2, 1.1, 1.0), L('#E83A5A'), 0, 0.55, 0); add(new THREE.BoxGeometry(1.24, 0.1, 1.04), L('#FFC93C'), 0, 1.12, 0);
  add(new THREE.SphereGeometry(0.62, 24, 16), new THREE.MeshLambertMaterial({ color:'#DFF4FF', transparent:true, opacity:0.32, depthWrite:false }), 0, 1.72, 0);
  const cc = ['#FF5A5A', '#4AA8FF', '#FFE14A', '#5ADB7A', '#C77DFF', '#FF9A3C']; for(let k=0;k<16;k++){ const an = k*2.4, rr = 0.15 + (k % 4)*0.09; add(new THREE.SphereGeometry(0.13, 12, 8), L(cc[k % 6]), Math.cos(an)*rr, 1.35 + Math.floor(k/5)*0.17, Math.sin(an)*rr); }
  add(new THREE.CylinderGeometry(0.16, 0.16, 0.08, 18), L('#C0C6D0'), 0, 0.72, 0.52).rotation.x = Math.PI/2; add(new THREE.BoxGeometry(0.3, 0.05, 0.05), L('#8A909A'), 0, 0.72, 0.57);
  add(new THREE.BoxGeometry(0.4, 0.3, 0.05), L('#1A1A24'), 0, 0.3, 0.5);
  const sg = add(new THREE.PlaneGeometry(1.1, 0.3), new THREE.MeshBasicMaterial({ map:cinTex(440, 120, (x, w, h) => { x.fillStyle = '#FFC93C'; x.fillRect(0, 0, w, h); x.fillStyle = '#7A1A2A'; x.font = '900 60px "Noto Sans KR", sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('단어 뽑기', w/2, h/2 + 4); }) }), 0, 0.98, 0.51);
  gachaM = g;
}
function figDraw(){
  if(gacha) return; if(!(engSt.tk > 0)){ toast('🎟 뽑기권이 없어요. 오늘의 단어를 끝내면 1장 받아요!'); return; }
  engSt.tk--; const id = figRoll(), F = FIGS[id], isNew = !engSt.figs[id]; engSt.figs[id] = (engSt.figs[id] || 0) + 1; engSave(); engShelfSync(); lastSent = ''; pushPresence();
  gacha = { t:0, id, isNew, done:false }; $('#engUI').classList.add('dim');
  const cap = new THREE.Group(); const top = new THREE.Mesh(new THREE.SphereGeometry(0.26, 18, 10, 0, Math.PI*2, 0, Math.PI/2), new THREE.MeshLambertMaterial({ color:RAR[F.r].c })), bot = new THREE.Mesh(new THREE.SphereGeometry(0.26, 18, 10, 0, Math.PI*2, Math.PI/2, Math.PI/2), new THREE.MeshLambertMaterial({ color:'#FFFFFF' }));
  cap.add(top); cap.add(bot); cap.userData = { top, bot }; engScene.add(cap); gacha.cap = cap;
  if(gachaFig){ engScene.remove(gachaFig); } gachaFig = makeFig(id); gachaFig.visible = false; engScene.add(gachaFig);
  if(!gachaRays){ gachaRays = new THREE.Sprite(new THREE.SpriteMaterial({ map:cinTex(256, 256, (x, w, h) => { x.translate(128, 128); for(let k=0;k<16;k++){ x.rotate(Math.PI/8); const gr = x.createLinearGradient(0, 0, 0, -128); gr.addColorStop(0, 'rgba(255,255,255,.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.beginPath(); x.moveTo(-6, 0); x.lineTo(0, -128); x.lineTo(6, 0); x.fill(); } }), transparent:true, depthWrite:false, blending:THREE.AdditiveBlending })); engScene.add(gachaRays); }
  gachaRays.material.color.set(RAR[F.r].c); gachaRays.visible = false;
  engSet('<div class="eh" style="text-align:center">두근두근…</div>'); figSfx(0);
}
function figSfx(k){ try { cinAC = cinAC || new (window.AudioContext || window.webkitAudioContext)(); const A = cinAC; if(A.state === 'suspended') A.resume(); const t0 = A.currentTime;
  const tn = (f, t, d, v, ty) => { const o = A.createOscillator(), g = A.createGain(); o.type = ty || 'sine'; o.frequency.value = f; g.gain.setValueAtTime(0.0001, t0 + t); g.gain.exponentialRampToValueAtTime(v, t0 + t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t0 + t + d); o.connect(g); g.connect(A.destination); o.start(t0 + t); o.stop(t0 + t + d + 0.05); };
  if(k === 0){ for(let i=0;i<8;i++) tn(300 + i*40, i*0.12, 0.08, 0.15, 'square'); }
  else if(k === 1){ [523, 659, 784].forEach((f, i) => tn(f, i*0.08, 0.5, 0.15, 'triangle')); }
  else { [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => tn(f, i*0.09, 1.2, 0.14, 'triangle')); [1047, 1568, 2093].forEach(f => tn(f, 0.6, 2.2, 0.08)); } } catch(e){} }
function gachaTick(dt){
  if(!gachaM) return; const G = gacha; if(!G) return; G.t += dt; const t = G.t, F = FIGS[G.id];
  cam.t.lerp(_v3a.set(-2.6, 1.8, 3.4), 1 - Math.exp(-dt*3)); cam.dist += (5 - cam.dist)*(1 - Math.exp(-dt*3)); cam.yaw += (0.45 - cam.yaw)*(1 - Math.exp(-dt*3));
  gachaM.position.x = -4.6 + (t < 1 ? Math.sin(t*40)*0.03 : 0);
  const cap = G.cap, out = new THREE.Vector3(-4.6 + Math.sin(0.45)*0.7, 0, 3.2 + Math.cos(0.45)*0.7);
  if(t < 1.0){ cap.position.set(out.x, 0.3, out.z); cap.visible = t > 0.8; }
  else if(t < 1.8){ const u = (t - 1)/0.8; cap.position.set(lerpN(out.x, -2.6, u), 0.3 + Math.sin(u*Math.PI)*1.2 + u*1.2, lerpN(out.z, 3.6, u)); cap.rotation.z += dt*8; }
  else { const u = Math.min(1, (t - 1.8)/0.4); cap.userData.top.position.y = u*0.5; cap.userData.bot.position.y = -u*0.5; cap.traverse(o => { if(o.material){ o.material.transparent = true; o.material.opacity = 1 - u; } });
    if(!G.done){ G.done = true; gachaFig.visible = true; gachaRays.visible = true; figSfx(F.r >= 2 ? 2 : 1); if(F.r === 3){ cin4.fl = 1; } engReveal(G.id, G.isNew); }
    const s = Math.min(1, (t - 1.8)/0.35); gachaFig.position.set(-2.6, 1.0, 3.6); gachaFig.scale.setScalar(1.5*(s < 1 ? 0.2 + s*0.95 + Math.sin(s*Math.PI)*0.25 : 1)); gachaFig.rotation.y += dt*1.6;
    gachaRays.position.set(-2.6, 1.95, 3.3); gachaRays.scale.setScalar((F.r === 3 ? 5 : 3.4)*(1 + Math.sin(t*3)*0.05)); gachaRays.material.rotation += dt*0.6; gachaRays.material.opacity = 0.35 + F.r*0.15; }
}
const _v3a = new THREE.Vector3();
function engReveal(id, isNew){ const F = FIGS[id], R = RAR[F.r];
  engSet('<div class="edone" style="font-size:48px">' + (F.r === 3 ? '👑' : F.r === 2 ? '💜' : F.r === 1 ? '💙' : '🎉') + '</div><div class="eh" style="text-align:center;color:' + R.c + '">' + R.n + (isNew ? ' · NEW!' : '') + '</div><div class="em" style="text-align:center;font-size:26px">' + F.n + '</div>'
    + (F.r === 3 ? '<p class="etip" style="text-align:center">1% 확률의 전설 피규어! 이제 당신은 8반 <b>영어의 왕</b>이에요. 친구들 화면에 머리 위 왕관이 보여요.</p>' : '<p class="etip" style="text-align:center">교실 뒤쪽 진열장에 전시됐어요. (' + Object.keys(engSt.figs).length + ' / 12종)</p>')
    + '<button type="button" class="btn primary big" id="figOk">확인</button>');
  $('#figOk').onclick = () => { gacha = null; $('#engUI').classList.remove('dim'); if(gachaFig) gachaFig.visible = false; if(gachaRays) gachaRays.visible = false; cam.t.set(0, 2.6, 0); cam.dist = 9.5; engHome(); };
  if(F.r === 3) toast('👑 전설! 영어의 왕 워디가 나왔어요!'); }
function figBook(){ engMode = 'figs';
  engSet('<div class="eh">🏆 워디 피규어 도감 (' + Object.keys(engSt.figs).length + ' / 12)</div><div class="efigs">' + FIGS.map((F, i) => { const have = engSt.figs[i]; return '<div class="' + (have ? 'on' : '') + '" style="--rc:' + RAR[F.r].c + '"><i style="background:' + (have ? F.c : '#2A2E3A') + '"></i><b>' + (have ? F.n : '???') + '</b><span>' + RAR[F.r].n + (have > 1 ? ' ×' + have : '') + '</span></div>'; }).join('') + '</div>'
    + '<p class="etip">확률: 일반 70% · 레어 22% · 에픽 7% · <b style="color:#FFC93C">전설 1%</b> · 교실 뒤쪽 진열장에 모은 피규어가 전시돼요.</p><button type="button" class="btn big" id="engHome">처음으로</button>');
  $('#engHome').onclick = engHome; }
// ── 교실 뒤쪽 진열장 ──
let shelf = null;
function buildShelf(){
  shelf = new THREE.Group(); shelf.position.set(-1.6, 0, D/2 - 0.28); shelf.rotation.y = Math.PI; scene.add(shelf); const L = (c, o) => new THREE.MeshLambertMaterial(Object.assign({ color:c }, o || {}));
  const add = (geo, m, x, y, z) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); shelf.add(o); return o; };
  add(new THREE.BoxGeometry(3.3, 2.5, 0.42), L('#5A3A22'), 0, 1.25, -0.02).scale.z = 0.12; add(new THREE.BoxGeometry(3.3, 0.08, 0.46), L('#6E4428'), 0, 0.04, 0.0);
  for(let r=0;r<4;r++) add(new THREE.BoxGeometry(3.2, 0.05, 0.42), L('#8A5A36'), 0, 0.12 + r*0.62, 0); [-1, 1].forEach(s => add(new THREE.BoxGeometry(0.06, 2.5, 0.44), L('#6E4428'), s*1.63, 1.25, 0));
  add(new THREE.PlaneGeometry(3.2, 2.3), new THREE.MeshLambertMaterial({ color:'#CFEFFF', transparent:true, opacity:0.12, depthWrite:false }), 0, 1.3, 0.22);
  add(new THREE.PlaneGeometry(3.1, 0.34), signMat('🏆 영어 피규어 진열장 · 단어 외우고 뽑기!', '#2A1A10', '#FFE27A', 960, 104, '800 46px "Noto Sans KR", sans-serif'), 0, 2.72, 0.02);
  for(let r=0;r<3;r++){ const pl = new THREE.Mesh(new THREE.PlaneGeometry(3.1, 0.03), new THREE.MeshBasicMaterial({ color:'#FFE2A8' })); pl.position.set(0, 0.7 + r*0.62, 0.2); shelf.add(pl); }
  shelf.userData.slots = []; engShelfSync();
}
function engShelfSync(){ if(!shelf || !engSt) return; shelf.userData.slots.forEach(o => shelf.remove(o)); shelf.userData.slots = [];
  FIGS.forEach((F, i) => { const r = 2 - Math.floor(i/4), c = i % 4, f = makeFig(i, !engSt.figs[i]); f.scale.setScalar(0.42); f.position.set(-1.14 + c*0.76, 0.15 + r*0.62, 0.02); shelf.add(f); shelf.userData.slots.push(f); }); }
function crownMesh(){ const g = new THREE.Group(), gold = new THREE.MeshLambertMaterial({ color:'#FFD24A', emissive:'#A86A00', emissiveIntensity:0.5, side:THREE.DoubleSide });
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.18, 0.1, 16, 1, true), gold); g.add(ring); for(let k=0;k<5;k++){ const an = k/5*Math.PI*2, c = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.11, 6), gold); c.position.set(Math.cos(an)*0.17, 0.1, Math.sin(an)*0.17); g.add(c); }
  const gem = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), new THREE.MeshLambertMaterial({ color:'#E8304A', emissive:'#A0102A' })); gem.position.set(0, 0, 0.18); g.add(gem); return g; }
function setCrown(av, on){ if(!av || !av.head) return 0; if(on && !av.crownM){ av.crownM = crownMesh(); av.crownM.position.set(0, 0.36, 0); av.head.add(av.crownM); } if(av.crownM) av.crownM.visible = !!on; return 0; }
engLoad(); if(FIG_ON) buildShelf();
/* ===== 📱 AR 모드: 카메라 화면 위에 우리 3D 교실을 미니어처로 띄워요 (자이로 센서로 공간에 고정) ===== */
let arOn = false, arVid = null, arTex = null, arStream = null, arBg = null, arSv = null, arQS = null, arHasOri = false, arOri = null;
const _arQ = new THREE.Quaternion(), _arQ0 = new THREE.Quaternion(), _arQ1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)), _arE = new THREE.Euler(), _arZ = new THREE.Vector3(0, 0, 1), _arRel = new THREE.Quaternion();
function arOriQ(q, o){ const d = Math.PI/180, sc = ((screen.orientation && screen.orientation.angle) || window.orientation || 0)*d;
  _arE.set((o.beta || 0)*d, (o.alpha || 0)*d, -(o.gamma || 0)*d, 'YXZ'); q.setFromEuler(_arE); q.multiply(_arQ1); q.multiply(_arQ0.setFromAxisAngle(_arZ, -sc)); return q; }
function arOriEv(e){ if(e.alpha == null && e.beta == null) return; arOri = { alpha:e.alpha, beta:e.beta, gamma:e.gamma }; if(!arHasOri){ arHasOri = true; arQS = null; } }
async function arStart(){
  if(arOn) return; if(room !== 'class'){ toast('AR은 교실에서만 켤 수 있어요'); return; }
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){ toast('이 브라우저는 카메라를 쓸 수 없어요'); return; }
  try { if(window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function'){ await DeviceOrientationEvent.requestPermission().catch(() => 'denied'); } } catch(e){}
  try { arStream = await navigator.mediaDevices.getUserMedia({ video:{ facingMode:{ ideal:'environment' }, width:{ ideal:1280 }, height:{ ideal:720 } }, audio:false }); }
  catch(e){ toast('📷 카메라를 허용해야 AR을 볼 수 있어요'); return; }
  arVid = arVid || Object.assign(document.createElement('video'), { muted:true, playsInline:true, autoplay:true }); arVid.setAttribute('playsinline', ''); arVid.srcObject = arStream; try { await arVid.play(); } catch(e){}
  arTex = new THREE.VideoTexture(arVid); arTex.minFilter = THREE.LinearFilter; arTex.magFilter = THREE.LinearFilter;
  arBg = scene.background; scene.background = arTex; arSv = { yaw:cam.yaw, pitch:cam.pitch, dist:cam.dist, lim:Object.assign({}, camLim) };
  Object.assign(camLim, { pmin:0.15, pmax:1.35, dmin:9, dmax:64 }); cam.yaw = 0.2; cam.pitch = 0.62; cam.dist = window.innerWidth < window.innerHeight ? 38 : 30;
  arOn = true; arHasOri = false; arQS = null; window.addEventListener('deviceorientation', arOriEv);
  document.body.classList.add('ar'); $('#arUI').hidden = false; $('#panel').hidden = true; $('#joy').hidden = true;
  toast('📱 AR 켜짐! 폰을 천천히 움직여 보세요 · 두 손가락으로 크기 조절');
}
function arStop(){
  if(!arOn) return; arOn = false; window.removeEventListener('deviceorientation', arOriEv);
  if(arStream) arStream.getTracks().forEach(t => t.stop()); arStream = null; if(arVid) arVid.srcObject = null; if(arTex){ arTex.dispose(); arTex = null; }
  scene.background = arBg || new THREE.Color('#0F1426'); if(arSv){ cam.yaw = arSv.yaw; cam.pitch = arSv.pitch; cam.dist = arSv.dist; Object.assign(camLim, arSv.lim); }
  document.body.classList.remove('ar'); $('#arUI').hidden = true; if(room === 'class'){ $('#panel').hidden = false; $('#joy').hidden = false; }
}
function arCam(){   // 교실 가운데를 보는 카메라 + 폰이 돌아간 만큼 시선도 같이 돌려요
  if(!arOn) return; if(room !== 'class'){ arStop(); return; }
  if(arTex && arVid.videoWidth){ const A = camera.aspect, V = arVid.videoWidth/arVid.videoHeight; if(V > A){ arTex.repeat.set(A/V, 1); arTex.offset.set((1 - A/V)/2, 0); } else { arTex.repeat.set(1, V/A); arTex.offset.set(0, (1 - V/A)/2); } }
  const cp = Math.cos(cam.pitch); camera.position.set(Math.sin(cam.yaw)*cp*cam.dist, 0.5 + Math.sin(cam.pitch)*cam.dist, Math.cos(cam.yaw)*cp*cam.dist); camera.lookAt(0, 0.5, 0);
  if(arHasOri && arOri){ arOriQ(_arQ, arOri); if(!arQS) arQS = _arQ.clone(); _arRel.copy(arQS).invert().multiply(_arQ); camera.quaternion.multiply(_arRel); }
  outdoor.visible = false;
}
$('#btnAR').addEventListener('click', () => { if(arOn) arStop(); else arStart(); });
$('#arCenter').addEventListener('click', () => { arQS = null; cam.yaw = 0.2; cam.pitch = 0.62; cam.dist = window.innerWidth < window.innerHeight ? 38 : 30; toast('가운데로 맞췄어요'); });
$('#arOff').addEventListener('click', arStop);
function wildIsle(I, nm){   // 펫을 타야만 갈 수 있는 섬 (버섯섬·세계수)
  I.stage = new THREE.Group(); I.stage.scale.setScalar(ISLE_S); I.stage.userData.stage = true; I.g.add(I.stage); I.g.add(I.itemsG);
  I.g.traverse(o => { if(o.isMesh) o.userData.isleId = I.id; });
  I.label = labelSprite(nm, '#C9F5B0'); I.label.scale.set(3.6, 0.9, 1); I.label.position.y = I.labelY || 9; I.g.add(I.label);
  I.visit = labelSprite('', '#8FCBFF'); I.visit.scale.set(2.8, 0.7, 1); I.visit.visible = false; I.visit.position.y = I.label.position.y + 0.9; I.g.add(I.visit);
  isles.push(I); isleById[I.id] = I;
}
function worldTree(){   // 🌳 세계수: 아주 멀리 떠 있는 거대한 나무섬 (펫 타고만 갈 수 있어요)
  const a = 0.75, g = new THREE.Group(); g.position.set(Math.cos(a)*128, 2, Math.sin(a)*128); isleScene.add(g);
  const R = 9, bb = isleBase(R), pa = bb.userData.padArrow; if(pa && pa.parent) bb.remove(pa.parent); g.add(bb);
  const bark = Lm('#6B4A2E'), barkD = Lm('#4E3420'), wood = Lm('#B5824E'), leaf = ['#4FAE45', '#3E9A3A', '#6BC25A', '#2E8A3A'];
  const tr = addM(g, new THREE.CylinderGeometry(1.7, 2.7, 30, 16), bark, 0, 15, 0);
  for(let k=0;k<10;k++){ const aa = k/10*Math.PI*2; const rd = addM(g, new THREE.BoxGeometry(0.35, 28, 0.3), barkD, Math.cos(aa)*2.05, 14.5, Math.sin(aa)*2.05); rd.rotation.y = -aa; rd.rotation.z = Math.cos(aa)*0.03; }
  for(let k=0;k<7;k++){ const aa = k/7*Math.PI*2 + 0.2, rt = new THREE.Group(); rt.position.set(Math.cos(aa)*2.2, 0.6, Math.sin(aa)*2.2); rt.rotation.y = -aa; g.add(rt);   // 뿌리
    addM(rt, new THREE.CylinderGeometry(0.35, 0.75, 3.6, 8), bark, 1.2, 0.2, 0).rotation.z = -1.1; addM(rt, new THREE.CylinderGeometry(0.2, 0.35, 2.2, 6), barkD, 2.9, -0.4, 0).rotation.z = -1.4; }
  const decks = [8, 15, 22];   // 나무 위 전망대 (펫 타고 내려앉아요)
  decks.forEach((h, i) => { const dk = addM(g, new THREE.CylinderGeometry(5.2, 5.2, 0.3, 28), wood, 0, h, 0);
    addM(g, new THREE.TorusGeometry(5.1, 0.08, 6, 40), Lm('#7A5434'), 0, h + 0.8, 0).rotation.x = Math.PI/2;
    for(let q=0;q<20;q++){ const aa = q/20*Math.PI*2; addM(g, new THREE.CylinderGeometry(0.06, 0.06, 0.8, 5), Lm('#7A5434'), Math.cos(aa)*5.1, h + 0.4, Math.sin(aa)*5.1); }
    for(let q=0;q<6;q++){ const aa = q/6*Math.PI*2 + i; const ln = addM(g, new THREE.SphereGeometry(0.22, 10, 8), Gm(i === 1 ? '#FFB5E8' : '#FFE27A'), Math.cos(aa)*4.6, h + 1.9, Math.sin(aa)*4.6); addM(g, new THREE.CylinderGeometry(0.01, 0.01, 1.0, 3), Lm('#3A2A1A'), ln.position.x, h + 2.6, ln.position.z); }
    for(let q=0;q<8;q++){ const aa = q/8*Math.PI*2; addM(g, new THREE.BoxGeometry(0.25, 0.2, 2.6), wood, Math.cos(aa)*3.6, h - 0.5, Math.sin(aa)*3.6).rotation.set(0.5*Math.cos(0), -aa, 0); } });
  { const th = new THREE.Group(); th.position.set(3.2, 15.15, 0); g.add(th);   // 나무집
    addM(th, new THREE.BoxGeometry(1.8, 1.4, 1.6), Lm('#C99A6B'), 0, 0.7, 0); const rf = addM(th, new THREE.ConeGeometry(1.5, 1.0, 4), Lm('#C8333F'), 0, 1.9, 0); rf.rotation.y = Math.PI/4;
    addM(th, new THREE.BoxGeometry(0.5, 0.8, 0.05), Lm('#6B4A2E'), 0, 0.4, 0.81); addM(th, new THREE.BoxGeometry(0.4, 0.35, 0.05), Gm('#FFE7A0'), -0.55, 0.9, 0.81); }
  const can = [[0, 31, 0, 8], [5, 28, 3, 5.5], [-5, 28.5, -2, 6], [2, 29, -5, 5.5], [-3, 27.5, 5, 5], [0, 36, 0, 6], [4.5, 33, -2, 4.5], [-4, 34, 2, 4.5]];
  can.forEach(([x, y, z, r], i) => addM(g, new THREE.IcosahedronGeometry(r, 1), Lm(leaf[i % 4], { flatShading:true }), x, y, z));
  for(let q=0;q<40;q++){ const aa = rand(0, 6.28), rr = rand(3, 9), yy = rand(25, 37); addM(g, new THREE.SphereGeometry(0.28, 8, 6), Gm(pick(['#FFE27A', '#FF9AC4', '#9FE4FF'])), Math.cos(aa)*rr, yy, Math.sin(aa)*rr); }   // 빛나는 열매
  for(let q=0;q<16;q++){ const aa = rand(0, 6.28), rr = rand(4, 8), h = rand(3, 7); addM(g, new THREE.CylinderGeometry(0.05, 0.05, h, 4), Lm('#5FA83A'), Math.cos(aa)*rr, 25 - h/2, Math.sin(aa)*rr); }   // 덩굴
  const I = { id:'wt', name:'🌳 세계수', idx:-5, g, lv:0, items:{}, itemsG:new THREE.Group(), ph:0, wild:true, fixed:true, wr:R, n:0, pos:g.position, labelY:41 };
  I.surf = (x, z, feet) => { const d = Math.hypot(x, z); if(d > R) return undefined; if(d < 2.3) return feet > 29 ? 30 : null;
    let h = 0; decks.forEach(dh => { if(d < 5.2 && dh + 0.15 <= feet + 0.5) h = Math.max(h, dh + 0.15); }); return h; };
  wildIsle(I, '🌳 세계수 · 펫 타고만 와요');
}
let bridgeSig = '', bridgeMesh = null, bridgeRopes = null;
function isleBridges(){   // 이웃한 섬 가장자리끼리 흔들다리 (섬이 커지면 다시 이어요)
  const ids = ISLE_ROSTER.map((_, i) => 's' + i), sig = ids.map(id => isleById[id] ? isleById[id].lv : 0).join(',');
  if(sig === bridgeSig) return; bridgeSig = sig;
  if(bridgeMesh){ isleScene.remove(bridgeMesh); isleScene.remove(bridgeRopes); }
  const N = 22, plankG = new THREE.BoxGeometry(0.9, 0.08, 0.32), mesh = new THREE.InstancedMesh(plankG, new THREE.MeshLambertMaterial({ color:'#A97C44' }), ids.length*N), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), pts = [];
  let n = 0;
  ids.forEach((id, i) => { const A = isleById[id], B = isleById[ids[(i + 1) % ids.length]]; if(!A || !B) return;
    const ddx = B.pos.x - A.pos.x, ddz = B.pos.z - A.pos.z, L = Math.hypot(ddx, ddz) || 1, d = new THREE.Vector3(ddx/L, 0, ddz/L);
    const a0 = A.pos.clone().addScaledVector(d, ISLE_R[A.lv] - 0.4), b0 = B.pos.clone().addScaledVector(d, -(ISLE_R[B.lv] - 0.4)); a0.y = A.pos.y + 0.02; b0.y = B.pos.y + 0.02;
    const span = a0.distanceTo(b0), ry = Math.atan2(d.x, d.z); q.setFromAxisAngle(up, ry);
    for(let k=0;k<N;k++){ const u = (k + 0.5)/N, p = a0.clone().lerp(b0, u); p.y -= Math.sin(u*Math.PI)*span*0.08; m4.compose(p, q, new THREE.Vector3(1, 1, 1)); mesh.setMatrixAt(n++, m4); }
    [-0.45, 0.45].forEach(s => { const side = new THREE.Vector3(d.z, 0, -d.x).multiplyScalar(s); for(let k=0;k<12;k++){ const u1 = k/12, u2 = (k + 1)/12; [u1, u2].forEach(u => { const p = a0.clone().lerp(b0, u).add(side); p.y += 0.55 - Math.sin(u*Math.PI)*span*0.08; pts.push(p.x, p.y, p.z); }); } }); });
  mesh.count = n; mesh.instanceMatrix.needsUpdate = true; mesh.frustumCulled = false; isleScene.add(mesh); bridgeMesh = mesh;
  const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3)); bridgeRopes = new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color:'#6B4A2E' })); isleScene.add(bridgeRopes);
}
function teacherSpent(){ let s = 0; Object.keys(isleData).forEach(k => { if(k !== 't') s += num(isleData[k] && isleData[k].spent, 0, 1e7, 0); }); return s; }
function refreshIsles(){
  if(!isleScene) return;
  isleMine = null; Object.keys(isleData).forEach(k => { const d = isleData[k]; if(d && d.owner === myUid && k !== 't') isleMine = k; });
  const tsp = teacherSpent();
  isles.forEach(I => {
    if(I.arena || I.pit || I.wild) return;
    const d = isleData[I.id] || {}, teacher = I.id === 't';
    const lv = teacher ? Math.min(6, 2 + T_LV.filter(v => tsp >= v).length - 1) : clamp(Math.floor(num(d.lv, 1, ISLE_LVMAX, 1)), 1, ISLE_LVMAX);
    if(lv !== I.lv){ if(I.base) I.g.remove(I.base); I.base = isleBase(ISLE_R[lv]); I.base.traverse(o => { o.userData.isleId = I.id; }); I.g.add(I.base); I.lv = lv; }
    let want = {};
    if(teacher) T_AUTO.forEach(([need, t, x, z], k) => { if(tsp >= need) want['a' + k] = { t, x, z, r:Math.atan2(x, z) }; });
    else { const it = d.items || {}; Object.keys(it).slice(0, ISLE_MAX).forEach(k => { const o = it[k]; if(o && ISLE_ITEM[o.t]) want[k] = { t:o.t, x:num(o.x, -7, 7, 0), z:num(o.z, -7, 7, 0), r:num(o.r, -7, 7, 0) }; });
      if(!d.owner && !Object.keys(want).length) want = { s0:{ t:'tree', x:0.4, z:-0.3, r:0 } }; }
    Object.keys(I.items).forEach(k => { const w0 = want[k], o0 = I.items[k]; if(!w0 || w0.t !== o0.t || Math.abs(w0.x - o0.x) > 1e-3 || Math.abs(w0.z - o0.z) > 1e-3 || Math.abs(w0.r - (o0.r || 0)) > 1e-3){ I.itemsG.remove(I.items[k].g); isleSpin = isleSpin.filter(o => o !== I.items[k].g); delete I.items[k]; } });
    Object.keys(want).forEach(k => { if(I.items[k]) return; const w = want[k], g = makeIsleItem(w.t); g.position.set(w.x, 0, w.z); g.rotation.y = w.r; g.scale.setScalar(ISLE_SC);
      g.traverse(o => { o.userData.isleId = I.id; o.userData.ik = k; }); I.itemsG.add(g); I.items[k] = { t:w.t, g, x:w.x, z:w.z, r:w.r };
      if(g.userData.spin || g.userData.bob || g.userData.flag || g.userData.flame || g.userData.wheel || g.userData.water || g.userData.smoke) isleSpin.push(g); });
    const mine = I.id === isleMine, n = Object.keys(I.items).length;
    const txt = teacher ? '👩‍🏫 영선쌤 섬 · Lv' + lv : isleName(I.id) + (d.owner ? ' · Lv' + lv : /^빈 섬/.test(I.name) ? '' : ' · 빈 섬');
    if(I.label.userData.txt !== txt + mine){ I.label.userData.txt = txt + mine; setLabel(I.label, txt, mine ? '#FFE27A' : d.owner || teacher ? '#FFFFFF' : '#A9B0D6'); }
    I.label.position.y = 2.6 + lv*0.35; I.visit.position.y = I.label.position.y + 0.8; I.n = n;
  });
  isleRefundBlocks(); isleRefundPrice(); isleBridges();
  updIsleUI();
}
// 하루 공부시간으로 포인트 계산: 처음 1시간은 1분에 10P, 1~2시간은 1분에 20P, 2시간부터는 1분에 30P (날마다 새로)
function dayPoints(sec){ const m = Math.floor(Math.max(0, sec)/60); return Math.min(m, 60)*10 + Math.min(Math.max(m - 60, 0), 60)*20 + Math.max(m - 120, 0)*30; }
function islePoints(){ if(isleBaseSec == null) return null; const d = isleMine && isleData[isleMine]; return isleBaseSec + dayPoints(me ? me.total || 0 : 0) + num(d && d.farmP, 0, 1e9, 0) - num(d && d.spent, 0, 1e9, 0); }
function isleLoadEarned(){
  isleBaseSec = null;
  if(!rtdb || !myUid){ isleBaseSec = 0; updIsleUI(); return; }
  rtdb.ref('days/' + myUid).once('value').then(s => { const v = s.val() || {}; let sum = 0; Object.keys(v).forEach(k => { if(k !== todayKey) sum += dayPoints(num(v[k] && v[k].t, 0, 86400, 0)); }); isleBaseSec = sum; /* 지난 날들도 새 계산법으로 다시 계산 */ updIsleUI(); })
    .catch(e => { isleBaseSec = 0; netErr(e); updIsleUI(); });
}
function updIsleUI(){
  if(room !== 'isle') return;
  const p = islePoints(), d = isleMine && isleData[isleMine], lv = d ? clamp(Math.floor(num(d.lv, 1, ISLE_LVMAX, 1)), 1, ISLE_LVMAX) : 0;
  $('#isleInfo').textContent = isleMine ? '🪙 ' + (p == null ? '…' : p + 'P') + ' · 내 섬 Lv' + lv + ' · 1분 10P (1시간↑ 20P, 2시간↑ 30P)' : '아직 내 섬이 없어요 · 명단에서 내 이름을 골라요';
  $('#isleBuild').disabled = $('#isleUp').disabled = $('#isleDel').disabled = !isleMine;
  $('#isleUp').textContent = lv >= ISLE_LVMAX ? '⬆ 최대' : '⬆ 넓히기 ' + (ISLE_UP[lv + 1] || '') + 'P';
  $('#isleMineBtn').textContent = isleMine ? (isleOn && isleOn !== isleMine ? '🏝 내 섬으로' : '🏝 내 섬') : '🏝 내 섬 고르기';
  document.querySelectorAll('[data-isk]').forEach(b => { const k = b.dataset.isk, ok = !!me && skillOk(me, k); b.setAttribute('aria-disabled', String(!ok)); b.title = ok ? '' : '하루 ' + (SKILLS[k].need/3600) + '시간 공부하면 열려요'; });
}
function isleAt(id){ isleFocus = id; const I = isleById[id]; if(!I) return; cam.dist = id === isleMine ? clamp(ISLE_R[I.lv]*1.6 + 3, 6, 16) : clamp(ISLE_R[I.lv]*2.6 + 6, 9, 30); lastSent = ''; pushPresence();
  const d = isleData[id] || {}; toast(id === 't' ? '👩‍🏫 영선쌤 섬 · 우리 반이 포인트를 쓸수록 같이 커져요' : isleName(id) + (d.owner ? '의 섬 · Lv' + I.lv + ' · 건물 ' + I.n + '개' : ' · 아직 주인이 없어요')); }
function isleClaim(){
  const body = showSheet('내 섬 고르기 · 명단에서 내 이름'); $('#spSheet').hidden = false;
  body.appendChild(el('p', null, '한 번 고르면 바꿀 수 없어요. 꼭 내 이름을 골라요.'));
  ISLE_ROSTER.forEach((name, i) => { const id = 's' + i, taken = !!(isleData[id] && isleData[id].owner), btn = el('button', 'quizopt', (taken ? '✓ ' : '') + name + (taken ? ' · 주인 있음' : ''));
    btn.type = 'button'; btn.disabled = taken; if(taken) btn.style.opacity = 0.45;
    btn.addEventListener('click', () => { const b2 = showSheet('‘' + name + '’ 섬의 주인이 될까요?'); b2.appendChild(el('p', null, '한 번 고르면 바꿀 수 없어요. 내 이름이 맞는지 다시 확인해요.'));
      const ok = el('button', 'btn primary', '맞아요, 내 섬으로 할래요'), no = el('button', 'btn', '다시 고르기'); ok.type = no.type = 'button';
      ok.addEventListener('click', () => { $('#spSheet').hidden = true; isleTake(id, name); }); no.addEventListener('click', isleClaim); b2.appendChild(ok); b2.appendChild(no); });
    body.appendChild(btn); });
}
const isleName = id => { const I = isleById[id], d = isleData[id] || {}; if(!I) return ''; return /^빈 섬/.test(I.name) && d.nm ? String(d.nm).slice(0, 8) : I.name; };   // 빈 섬은 주인 닉네임으로 보여요
function isleTake(id, name){
  if(/^빈 섬/.test(name) && me) name = me.name;
  const fresh = { pv:3, owner:myUid, nm:(me && me.name || '').slice(0, 8), lv:1, spent:0, at:Date.now(), items:{ i0:{ t:'tree', x:0.6, z:-0.4, r:0 } } };
  const done = () => { toast('🎉 ' + name + '의 섬이 생겼어요! 공부한 만큼 포인트로 꾸며요'); isleAt(id); setTimeout(() => { const sp = myPetSpec(); if(room === 'isle' && (!sp || sp.sp === 'egg') && !demoMode && !PETS_OFF) petSheet(true); }, 1400); };
  if(isleLocal){ isleData[id] = fresh; refreshIsles(); done(); return; }
  rtdb.ref('isles/' + id).transaction(cur => cur ? undefined : fresh).then(r => { if(r.committed) done(); else toast('앗, 다른 친구가 먼저 골랐어요'); }).catch(netErr);
}
function isleWrite(upd){
  if(!isleMine) return;
  if(isleLocal){ const d = isleData[isleMine] = isleData[isleMine] || {}; Object.keys(upd).forEach(k => { const ps = k.split('/'); let o = d; for(let i=0;i<ps.length - 1;i++) o = o[ps[i]] = o[ps[i]] || {}; const last = ps[ps.length - 1]; if(upd[k] == null) delete o[last]; else o[last] = upd[k]; }); refreshIsles(); return; }
  rtdb.ref('isles/' + isleMine).update(upd).catch(netErr);
}
const isleThumbs = {};
function isleThumb(tp){   // 건물 모양을 그림자(실루엣)로 그려서 작은 그림으로 만들어요
  if(isleThumbs[tp]) return isleThumbs[tp];
  try {
    const S = 128, sc = new THREE.Scene(), obj = makeIsleItem(tp); obj.children.filter(c => c.userData.shadow).forEach(c => obj.remove(c)); sc.add(obj);
    const box = new THREE.Box3().setFromObject(obj), size = box.getSize(new THREE.Vector3()), cen = box.getCenter(new THREE.Vector3()), m = Math.max(size.x, size.y, size.z) || 1;
    const cam2 = new THREE.PerspectiveCamera(30, 1, 0.01, 100); cam2.position.set(cen.x + m*1.6, cen.y + m*0.9, cen.z + m*2.4); cam2.lookAt(cen);
    sc.overrideMaterial = new THREE.MeshBasicMaterial({ color:'#1B1F3B' });
    const rt = new THREE.WebGLRenderTarget(S, S), oc = renderer.getClearColor(new THREE.Color()), oa = renderer.getClearAlpha();
    renderer.setRenderTarget(rt); renderer.setClearColor(0x000000, 0); renderer.clear(); renderer.render(sc, cam2);
    const px = new Uint8Array(S*S*4); renderer.readRenderTargetPixels(rt, 0, 0, S, S, px);
    renderer.setRenderTarget(null); renderer.setClearColor(oc, oa); rt.dispose();
    const c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'), im = x.createImageData(S, S);
    for(let y=0;y<S;y++) for(let i=0;i<S*4;i++) im.data[y*S*4 + i] = px[(S - 1 - y)*S*4 + i];
    let any = false; for(let i=3;i<px.length;i+=16) if(px[i] > 0){ any = true; break; }
    x.putImageData(im, 0, 0); isleThumbs[tp] = any ? c.toDataURL() : ''; } catch(e) { isleThumbs[tp] = ''; }
  return isleThumbs[tp];
}
function isleIdeaAsk(force){   // 섬에 들어오면 "추가됐으면 하는 것" 물어보기 (하루 한 번)
  if(!isleMine) return; const day = todayKey; if(!force && store.get('class8-idea-day', '') === day) return; store.set('class8-idea-day', day);
  const body = showSheet('💡 공중섬에 추가됐으면 하는 거 있어요?'); body.appendChild(el('p', null, '건물, 기능, 이벤트 뭐든 좋아요. 친구들 의견을 모아서 만들어요!'));
  const ta = el('textarea'); ta.maxLength = 120; ta.rows = 3; ta.placeholder = '예) 놀이공원 롤러코스터, 섬끼리 다리 놓기…'; ta.style.cssText = 'width:100%;border-radius:12px;padding:10px;font:600 14px var(--font-b);background:var(--panel-2);color:var(--fg);border:1.5px solid var(--line)'; body.appendChild(ta);
  const ok = el('button', 'btn primary', '보내기'), no = el('button', 'btn', '다음에'); ok.type = no.type = 'button';
  ok.addEventListener('click', () => { const v = ta.value.trim().slice(0, 120); if(!v){ toast('한 줄만 적어줘요'); return; } isleWrite({ ['ideas/i' + Date.now().toString(36)]:{ t:v, at:Date.now() } }); $('#spSheet').hidden = true; toast('💌 의견 고마워요! 모아서 만들게요'); });
  no.addEventListener('click', () => { $('#spSheet').hidden = true; }); body.appendChild(ok); body.appendChild(no);
}
function isleIdeasView(){   // 정우진 섬 주인만: 모든 친구 의견 보기
  const body = showSheet('💡 친구들 의견'); const list = [];
  Object.keys(isleData).forEach(id => { const d = isleData[id], ideas = d && d.ideas; if(!ideas) return; Object.values(ideas).forEach(o => { if(o && typeof o.t === 'string') list.push({ who:isleName(id) || id, t:o.t.slice(0, 120), at:num(o.at, 0, 1e14, 0) }); }); });
  list.sort((a, b) => b.at - a.at); if(!list.length) body.appendChild(el('p', null, '아직 의견이 없어요.'));
  list.slice(0, 60).forEach(o => { const p = el('p'); p.style.cssText = 'margin:0;padding:8px 10px;border-radius:10px;background:var(--panel-2)'; p.appendChild(el('b', null, o.who + ' · ')); p.appendChild(document.createTextNode(o.t)); body.appendChild(p); });
}
function isleBuildSheet(){
  if(!isleMine){ isleClaim(); return; }
  const d = isleData[isleMine] || {}, lv = clamp(Math.floor(num(d.lv, 1, ISLE_LVMAX, 1)), 1, ISLE_LVMAX), p = islePoints() || 0, n = Object.keys(d.items || {}).length;
  const body = showSheet('짓기 · 🪙 ' + p + 'P');
  if(n >= ISLE_MAX) body.appendChild(el('p', null, '섬이 꽉 찼어요 (' + ISLE_MAX + '개). 치우기로 자리를 만들어요.'));
  if(isleMine === 's0'){ const iv = el('button', 'btn', '💡 친구들 의견 보기'); iv.type = 'button'; iv.addEventListener('click', isleIdeasView); body.appendChild(iv); }
  { const ia = el('button', 'btn', '✏️ 추가됐으면 하는 거 의견 보내기'); ia.type = 'button'; ia.addEventListener('click', () => isleIdeaAsk(true)); body.appendChild(ia); }
  const grid = el('div', 'shopgrid'); body.appendChild(grid);
  ISLE_ITEMS.forEach(it => { const lock = it.lv > lv, poor = it.cost > p, btn = el('button', 'shopcard' + (lock ? ' lock' : poor ? ' poor' : ''));
    const im = el('div', 'sil'); const src = isleThumb(it.t); if(src) im.style.backgroundImage = 'url(' + src + ')'; else im.textContent = it.e; btn.appendChild(im);
    btn.appendChild(el('b', null, it.name)); btn.appendChild(el('span', null, lock ? '🔒 섬 Lv' + it.lv : it.cost + 'P' + (poor ? ' · 부족' : '')));
    btn.type = 'button'; btn.disabled = lock || poor || n >= ISLE_MAX;
    btn.addEventListener('click', () => { $('#spSheet').hidden = true; isleMode = { kind:'place', t:it.t }; isleAt(isleMine); ctxBtn('✖ ' + it.name + ' 놓기 취소', () => { isleGhostOff(); isleMode = null; ctxBtn(''); }); toast(it.e + ' 내 섬 위를 눌러서 놓을 곳을 골라요'); });
    grid.appendChild(btn); });
}
const _iplane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), _ipt = new THREE.Vector3();
function isleGhostOff(){ if(isleMode && isleMode.ghost){ rmFx(isleMode.ghost); isleMode.ghost = null; } }
function isleGhost(I, it, lx, lz){
  isleGhostOff(); const g = makeIsleItem(it.t), gm = new THREE.MeshBasicMaterial({ color:'#1B1F3B', transparent:true, opacity:0.45, depthWrite:false });
  g.traverse(o => { if(o.isMesh) o.material = gm; }); g.position.set(lx, 0.01, lz); g.rotation.y = Math.atan2(lx, lz); g.scale.setScalar(ISLE_SC); I.itemsG.add(g);
  const ring = new THREE.Mesh(new THREE.RingGeometry(it.r/ISLE_SC*0.9, it.r/ISLE_SC*0.9 + 0.06, 32), new THREE.MeshBasicMaterial({ color:'#FFE27A', transparent:true, opacity:0.9, depthWrite:false })); ring.rotation.x = -Math.PI/2; ring.position.y = 0.03; g.add(ring);
  isleMode.ghost = g; isleMode.gx = lx; isleMode.gz = lz;
  ctxBtn(isleMode.move ? '✔ 여기로 ' + it.name + ' 옮기기' : '✔ 여기에 ' + it.name + ' 짓기 (' + it.cost + 'P)', () => { const I2 = isleById[isleMine]; if(!I2 || !isleMode || !isleMode.ghost) return; I2.g.updateMatrixWorld(); const v = I2.g.localToWorld(new THREE.Vector3(isleMode.gx, 0, isleMode.gz)).project(camera);
    isleTap((v.x + 1)/2*window.innerWidth, (1 - v.y)/2*window.innerHeight); });
  toast(isleMode.move ? '그림자 자리로 옮겨져요 · 한 번 더 누르거나 ✔ 버튼' : '그림자가 지어질 모양이에요 · 같은 곳을 한 번 더 누르거나 ✔ 버튼을 눌러요');
}
function isleTap(x, y){
  ndc.set(x / window.innerWidth * 2 - 1, -(y / window.innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
  const I = isleMine && isleById[isleMine];
  if(isleMode && isleMode.kind === 'place' && I){
    _iplane.constant = -I.g.position.y; if(!ray.ray.intersectPlane(_iplane, _ipt)) return;
    let lx = _ipt.x - I.g.position.x, lz = _ipt.z - I.g.position.z; const it = ISLE_ITEM[isleMode.t], R = ISLE_R[I.lv];
    if(it.grid){ lx = Math.round(lx); lz = Math.round(lz); }   // 길·울타리는 칸에 딱 맞춰 놓아요
    if(Math.hypot(lx, lz) > R - it.r*0.8){ toast('섬 밖이에요. 섬 위를 눌러요'); return; }
    for(const k in I.items){ if(k === isleMode.move) continue; const o = I.items[k]; if(Math.hypot(o.x - lx, o.z - lz) < (ISLE_ITEM[o.t].r + it.r)*0.8){ toast('다른 건물이랑 너무 가까워요'); return; } }
    // 먼저 그 자리에 그림자(반투명 실루엣)를 보여주고, 한 번 더 누르거나 ✔ 버튼을 누르면 지어요
    if(!isleMode.ghost || Math.hypot(isleMode.gx - lx, isleMode.gz - lz) > 0.35){ isleGhost(I, it, lx, lz); return; }
    const p = islePoints() || 0; if(!isleMode.move && p < it.cost){ toast('포인트가 모자라요'); isleGhostOff(); isleMode = null; ctxBtn(''); return; }
    isleGhostOff();
    const d = isleData[isleMine] || {}, k = 'i' + Date.now().toString(36) + Math.floor(Math.random()*1e4).toString(36);
    const rr = it.grid ? Math.round(Math.atan2(lx, lz)/(Math.PI/2))*(Math.PI/2) : Math.atan2(lx, lz);
    if(isleMode.move){ const mk = isleMode.move, o = (d.items || {})[mk]; if(o) isleWrite({ ['items/' + mk]:{ t:o.t, x:+lx.toFixed(2), z:+lz.toFixed(2), r:+rr.toFixed(2) } }); toast(it.e + ' ' + it.name + ' 옮겼어요!'); isleMode = null; ctxBtn(''); return; }
    isleWrite({ ['items/' + k]:{ t:it.t, x:+lx.toFixed(2), z:+lz.toFixed(2), r:+rr.toFixed(2) }, spent:num(d.spent, 0, 1e9, 0) + it.cost });
    toast(it.e + ' ' + it.name + ' 완성! -' + it.cost + 'P'); isleMode = null; ctxBtn(''); return;
  }
  const targets = isleMode && (isleMode.kind === 'del' || isleMode.kind === 'pick') ? (I ? [I.itemsG] : []) : isles.map(o => o.g);
  for(const h of ray.intersectObjects(targets, true)){
    const id = h.object.userData.isleId; if(!id) continue;
    if(isleMode && isleMode.kind === 'pick'){ const k = h.object.userData.ik; if(!k || !I.items[k]) continue; const it = ISLE_ITEM[I.items[k].t];
      isleMode = { kind:'place', t:it.t, move:k }; ctxBtn('✖ 옮기기 취소', () => { isleGhostOff(); isleMode = null; ctxBtn(''); }); toast(it.e + ' ' + it.name + ' · 옮길 곳을 눌러요'); return; }
    if(isleMode && isleMode.kind === 'del'){ const k = h.object.userData.ik; if(!k || !I.items[k]) continue; const it = ISLE_ITEM[I.items[k].t], d = isleData[isleMine] || {}, back = Math.floor(it.cost/2);
      isleWrite({ ['items/' + k]:null, ['farm/' + k]:null, spent:Math.max(0, num(d.spent, 0, 1e9, 0) - back) }); toast(it.e + ' ' + it.name + ' 치웠어요 · +' + back + 'P 돌려받음'); return; }
    { const fk = h.object.userData.ik, I3 = isleById[id]; if(fk && I3 && I3.items[fk] && I3.items[fk].t === 'farm' && !isleMode){ if(id === isleMine && isleOn === isleMine) farmAct(fk); else toast(farmInfo(id, fk)); return; } }
    if(id === isleOn && !isleFly && !isleFall){ const I0 = isleById[id]; I0.stage.updateMatrixWorld(); I0.stage.worldToLocal(_ipt.copy(h.point)); isleGo = { x:_ipt.x, z:_ipt.z }; return; }
    if(id === 'arena'){ toast('⚔ 전투장 · 점프 발판으로 갈 수 있어요'); return; }
    if(isleById[id] && isleById[id].wild){ toast(isleById[id].name + ' · 펫을 타고 날아가야 갈 수 있어요!'); return; }
    if(id === 'pit') return;
    const I2 = isleById[id], d2 = isleData[id] || {}; toast('👀 ' + (id === 't' ? '영선쌤 섬 · 우리 반이 같이 키워요' : isleName(id) + (d2.owner ? '의 섬 · Lv' + I2.lv + ' · 건물 ' + I2.n + '개' : ' · 아직 주인이 없어요')) + ' · 점프 발판으로 놀러 갈 수 있어요'); return;
  }
}
function enterIsle(){
  if(!isleScene) buildIsleScene();
  camera.far = 400; camera.updateProjectionMatrix();
  Object.assign(camLim, { pmin:-0.25, pmax:1.35, dmin:2.5, dmax:95 });
  cam.yaw = 0; cam.pitch = 0.42; cam.dist = 72; cam.t.set(0, 0, 0); isleFocus = null; isleMode = null;
  isles.forEach(I => { if(I.wild) I.g.visible = !demoMode && !PETS_OFF; });   // 시연 모드: 펫 타고 가는 섬은 숨겨요
  $('#panel').hidden = false; $('#joy').hidden = false; $('#isleUI').hidden = false; document.body.classList.add('isle');
  isleLocal = !rtdb;
  if(!isleLocal){ isleRef = rtdb.ref('isles'); isleRef.on('value', s => { isleData = s.val() || {}; refreshIsles(); if(!isleMine && isleClaimT === 0){ isleClaimT = 1; setTimeout(() => { if(room === 'isle' && !isleMine) isleClaim(); }, 600); } }, netErr); }
  else { refreshIsles(); setTimeout(() => { if(room === 'isle' && !isleMine) isleClaim(); }, 600); }
  isleLoadEarned(); updIsleUI(); setTimeout(() => { if(room === 'isle' && isleMine && !isleFocus){ isleAt(isleMine); cam.pitch = 0.45; } }, 800);
  setTimeout(() => { if(room !== 'isle' || !isleMine || !$('#spSheet').hidden) return; const sp = myPetSpec(); if((!sp || sp.sp === 'egg') && !demoMode && !PETS_OFF && (mySecTotal() || 0) >= PET_HATCH) petSheet(true); else isleIdeaAsk(false); }, 2500);
  toast('☁ 공중섬에 왔어요! 공부한 만큼 땅을 넓히고 건물을 지어요');
}
function leaveIsle(){
  if(isleRef){ isleRef.off(); isleRef = null; }
  isleGhostOff(); isleClaimT = 0; isleMode = null; isleFocus = null; isleGo = null; isleOn = null; isleFly = null; isleFall = null; $('#isleUI').hidden = true; $('#isleFight').hidden = true; document.body.classList.remove('isle'); if(me){ me.group.scale.setScalar(1); me.kvx = me.kvz = 0; me.ride = false; me.rideY = me.rideTot = me.rideVy = 0; $('#isleRide').textContent = '🐾 펫 타기'; $('#isleWater').hidden = true; }
  remotes.forEach(r => { const a = r.av; if(a.group.parent && a.group.parent.userData.stage){ scene.add(a.group); a.group.visible = false; } });
  if(room === 'isle' || camera.far === 400){ camera.far = 140; camera.updateProjectionMatrix(); }
}
let isleVy = 0, isleVisT = 0, isleGo = null, isleOn = null, isleFly = null, isleFall = null, isleSyncT = 0;
const _iv = new THREE.Vector3(), _iv2 = new THREE.Vector3();
function islePlaceMe(id, at){
  const I = isleById[id || isleMine]; if(!I || !me) return;
  I.stage.add(me.group); isleOn = I.id; me.group.scale.setScalar(1); me.group.visible = true; me.group.rotation.set(0, me.ry, 0);
  if(me.flying) setFly(false); me.path = []; me.goSeat = null; me.mode = 'idle'; me.manual = false; me.jumpY = 0; me.vy = 0; me.kvx = me.kvz = 0;
  const R = isleRad(I)/ISLE_S;
  if(at) me.pos.set(at.x, 0, at.z); else me.pos.set(0, 0, R*0.5);
  me.isleY = Math.max(0, isleSurf(I, me.pos.x, me.pos.z).h)/ISLE_S; isleVy = 0;
  if(!at) me.ry = me.targetRy = 0; isleKeepOn(I, true);
  if(!at){ cam.dist = clamp(isleRad(I)*1.1 + 2.5, 4, 14); cam.pitch = 0.42; cam.yaw = 0; }
  isleFocus = I.id; camLim.dmax = I.pit ? 8 : 95; if(I.pit) cam.dist = Math.min(cam.dist, 7); if(!I.pit) me.pitIn = false; lastSent = ''; pushPresence();
}
function islePad(I){ return _iv2.set(0, 0, -(isleRad(I) - 0.75)/ISLE_S); }
// 올라가거나 들어갈 수 있는 건물: 그 자리의 바닥 높이(섬 칸)를 돌려줘요. null = 벽, undefined = 그 건물 밖
const ISLE_WALK = {
  farm:(x, z) => Math.abs(x) < 0.86 && Math.abs(z) < 0.86 ? 0.15 : undefined,
  pool:(x, z) => Math.abs(x) < 1.0 && Math.abs(z) < 0.65 ? (x > 0.7 ? -0.12 : -0.32) : Math.abs(x) < 1.15 && Math.abs(z) < 0.8 ? 0.16 : undefined,
  castle:(x, z) => { for(const [a, b] of [[-0.8, -0.8], [0.8, -0.8], [-0.8, 0.8], [0.8, 0.8]]) if(Math.hypot(x - a, z - b) < 0.34) return null;
    if(x >= 0.6 && x < 0.92 && z > -0.46 && z < 0.46) return 1.3*(0.46 - z)/0.92; if(Math.abs(x) < 0.62 && Math.abs(z) < 0.62) return 1.3; return undefined; },
  megacastle:(x, z) => { for(const [a, b] of [[-2.2, -2.2], [2.2, -2.2], [-2.2, 2.2], [2.2, 2.2]]) if(Math.hypot(x - a, z - b) < 0.55) return null;
    if(Math.hypot(x, z + 0.4) < 0.62 || Math.hypot(x - 0.8, z - 0.6) < 0.36 || Math.hypot(x + 0.8, z - 0.6) < 0.36) return null;
    if((Math.abs(z - 2.2) < 0.18 && Math.abs(x) < 1.85 && Math.abs(x) > 0.4) || (Math.abs(z + 2.2) < 0.18 && Math.abs(x) < 1.85) || (Math.abs(Math.abs(x) - 2.2) < 0.18 && Math.abs(z) < 1.85)) return null;
    if(Math.abs(x) < 0.36 && z > 0.8 && z < 2.0) return 2.6*(2.0 - z)/1.2; if(Math.abs(x) < 1.12 && z > -1.22 && z < 0.82) return 2.6; return Math.abs(x) < 2.2 && Math.abs(z) < 2.2 ? 0 : undefined; },
  mountain:(x, z) => { const h = Math.max(4.2*(1 - Math.hypot(x, z)/2.6), 2.4*(1 - Math.hypot(x - 1.6, z - 0.8)/1.4), 1.9*(1 - Math.hypot(x + 1.7, z + 0.7)/1.1)); return h > 0 ? h : undefined; },
  pyramid:(x, z) => { const m = Math.max(Math.abs(x), Math.abs(z)); return m < 1.13 ? 2.2*(1 - m/1.13) : undefined; },
  volcano:(x, z) => { const d = Math.hypot(x, z); return d < 0.9 ? 3.3 : d < 2.9 ? 3.4*(2.9 - d)/2.0 : undefined; },
  road:(x, z) => Math.abs(x) < 0.5 && Math.abs(z) < 0.5 ? 0.03 : undefined,
  fence:(x, z) => Math.abs(z) < 0.08 && Math.abs(x) < 0.52 ? null : undefined,
  falls:(x, z) => Math.hypot(x*0.8, (z + 0.5)*1.2) < 1.05 ? null : undefined
};
function isleSurf(I, sx, sz, feet){   // 무대 좌표 → {h: 바닥 높이(섬 칸), wall}
  const ix = sx*ISLE_S, iz = sz*ISLE_S; let best = null, wall = false;
  if(I.surf){ const v = I.surf(ix, iz, feet == null ? 1e6 : feet); return v === null ? { h:feet || 0, wall:true } : { h:v || 0, wall:false }; }
  for(const k in I.items){ const o = I.items[k], it = ISLE_ITEM[o.t], dx = ix - o.x, dz = iz - o.z; if(Math.abs(dx) > 3.4*ISLE_SC || Math.abs(dz) > 3.4*ISLE_SC) continue;
    const fn = ISLE_WALK[o.t];
    if(fn){ const c = Math.cos(o.r || 0), s = Math.sin(o.r || 0), lx = dx*c - dz*s, lz = dx*s + dz*c, v0 = fn(lx/ISLE_SC, lz/ISLE_SC), v = typeof v0 === 'number' ? v0*ISLE_SC : v0; if(v === null) wall = true; else if(v !== undefined) best = best === null ? v : Math.max(best, v); }
    else if(Math.hypot(dx, dz) < it.r*0.85 + 0.08) wall = true; }
  return { h:best === null ? 0 : best, wall };
}
function isleKeepOn(I, soft){   // 섬 밖으로 밀려나면 떨어져요 · 건물은 피해서 걸어요
  if(I.pit){ const d = Math.hypot(me.pos.x, me.pos.z) || 1e-4;
    if(me.pitIn){ if(d > PIT_FIGHT && !isleFall && !soft){ isleFall = { t:0, vx:0, vz:0, lava:true }; me.say('앗 뜨거!!'); burn(me); } else if(d > PIT_FIGHT && soft){ me.pos.x *= (PIT_FIGHT - 0.6)/d; me.pos.z *= (PIT_FIGHT - 0.6)/d; } }
    else { const lo = PIT_CAGE + 0.5, hi = PIT_OUT - 0.4; if(d < lo){ me.pos.x *= lo/d; me.pos.z *= lo/d; } else if(d > hi){ me.pos.x *= hi/d; me.pos.z *= hi/d; } }
    me.pos.y = 0; return; }
  const S = 1/ISLE_S, R = isleRad(I)*S - 0.45, d = Math.hypot(me.pos.x, me.pos.z);
  if(d > R){ const hard = Math.hypot(me.kvx || 0, me.kvz || 0) > 1.5 || me.jumpY > 0.05;
    if(!soft && hard && !isleFall){ isleFall = { t:0, vx:(me.kvx || 0), vz:(me.kvz || 0) }; me.say('으아아!'); return; }
    me.pos.x *= R/d; me.pos.z *= R/d; }
  me.pos.y = 0;
}
function isleJumpSheet(){
  const body = showSheet('🚀 점프 발판 · 어디로 갈까요?');
  const go = (id, label) => { if(id === isleOn) return; const b = el('button', 'quizopt', label); b.type = 'button'; b.addEventListener('click', () => { $('#spSheet').hidden = true; isleJump(id); }); body.appendChild(b); };
  if(isleMine) go(isleMine, '🏝 내 섬');
  go('arena', '⚔ 전투장 (누구나 기술 OK)'); go('t', '👩‍🏫 영선쌤 섬');
  ISLE_ROSTER.forEach((name, i) => { const id = 's' + i, d = isleData[id]; if(id !== isleMine && d && d.owner) go(id, '🏝 ' + isleName(id) + '의 섬 · Lv' + (isleById[id] ? isleById[id].lv : 1)); });
}
function isleTele(id, at, msg){   // 지하로 내려가거나 올라올 땐 화면을 어둡게 했다가 옮겨요
  const ov = $('#fadeOv'); ov.style.background = '#000'; ov.style.opacity = 1; ctxBtn(''); isleGo = null;
  setTimeout(() => { if(room !== 'isle') return; me.pitIn = false; islePlaceMe(id, at); if(at) cam.dist = id === 'pit' ? 7 : 9; ov.style.opacity = 0; setTimeout(() => { ov.style.background = ''; }, 700); if(msg) toast(msg); }, 550);
}
function isleGoPit(){ isleTele('pit', { x:0, z:PIT_CAGE + 1.6 }, '🔥 지하 맞짱장! 철창 안으로 들어가 싸우거나 관중석에서 구경해요'); }
function isleJump(id){   // 포물선을 그리며 날아가요
  if(isleOn === 'pit' || id === 'pit'){ if(id === 'pit') isleGoPit(); else isleTele(id, id === 'arena' ? { x:0, z:3.2 } : null, id === 'arena' ? '⬆ 전투장으로 올라왔어요' : ''); return; }
  const A = isleById[isleOn], B = isleById[id]; if(!B || !me || isleFly) return;
  me.group.getWorldPosition(_iv); isleScene.add(me.group); me.group.position.copy(_iv); me.group.scale.setScalar(ISLE_S);
  const land = islePad(B).clone(); land.z += 1.6;
  isleFly = { t:0, dur:1.8, from:_iv.clone(), to:id, land }; isleOn = null; isleGo = null; isleGhostOff(); isleMode = null; ctxBtn(''); me.mode = 'idle'; me.say('점프!');
  lastSent = ''; pushPresence(); toast('🚀 ' + (id === 'arena' ? '전투장' : id === 't' ? '영선쌤 섬' : id === isleMine ? '내 섬' : isleName(id) + '의 섬') + '으로 날아가요!');
}
function isDesc(o, root){ while(o){ if(o === root) return true; o = o.parent; } return false; }
function isleSyncRemotes(){   // 공중섬에 있는 친구를 그 친구가 서 있는 섬 위에 세워요
  remotes.forEach(r => { const a = r.av, I = a.room === 'isle' && a.isl && isleById[a.isl];
    if(I && room === 'isle'){ if(a.group.parent !== I.stage){ I.stage.add(a.group); a.pos.x = r.tx; a.pos.z = r.tz; } a.group.visible = true; }
    else if(a.group.parent && a.group.parent.userData.stage){ scene.add(a.group); a.group.visible = false; } });
}
// 8분마다 한 번, 1분 정도 노을빛(따뜻한 햇살)이 됐다가 다시 맑은 하늘로 돌아와요
const _cA = new THREE.Color(), _cB = new THREE.Color();
const ISLE_DAY = { bg:'#BFDDF5', fog:'#CFE3F2', hemi:'#F4F8FF', sun:'#FFF6E6', cl:'#B9C6D6', si:0.95 }, ISLE_GOLD = { bg:'#F4D9B4', fog:'#F2DCC0', hemi:'#FFF1DA', sun:'#FFC98A', cl:'#D9B898', si:1.15 };
function isleGolden(){ const ph = ((Date.now() + (typeof srvOff === 'number' ? srvOff : 0))/1000 % 480)/480; return Math.max(0, Math.min(1, (1 - Math.abs(ph - 0.875)/0.125)*1.6)); }
function isleLightTick(){
  const U = isleScene.userData, g = isleGolden(); if(U.lastG !== undefined && Math.abs(U.lastG - g) < 0.002) return; U.lastG = g;
  const mix = (a, b) => _cA.set(ISLE_DAY[a]).lerp(_cB.set(ISLE_GOLD[a]), g);
  isleScene.background.copy(mix('bg')); isleScene.fog.color.copy(mix('fog')); U.hemi.color.copy(mix('hemi')); U.sun.color.copy(mix('sun')); U.cloudM.emissive.copy(mix('cl'));
  U.sun.intensity = ISLE_DAY.si + (ISLE_GOLD.si - ISLE_DAY.si)*g; U.goldM.opacity = g; U.rays.opacity = 0.05*g;
  U.halo.forEach(m => { m.color.set(g > 0.5 ? '#FFD9A0' : '#FFF1C8'); m.opacity = m.userData.op*(1 + g*0.8); });
}
// ───────── 🌾 농사짓기: 밭을 사서 씨앗을 심고, 시간이 지나 다 자라면 수확해서 포인트를 받아요 ─────────
const CROPS = {
  carrot:{ n:'당근', e:'🥕', cost:20, min:5, get:60, fr:'#FF8A2A', lf:'#4FAE45', shape:'root' },
  tomato:{ n:'토마토', e:'🍅', cost:50, min:15, get:160, fr:'#E8352E', lf:'#3E8F3A', shape:'vine' },
  straw:{ n:'딸기', e:'🍓', cost:80, min:25, get:270, fr:'#FF3B5C', lf:'#3FA34A', shape:'bush' },
  corn:{ n:'옥수수', e:'🌽', cost:120, min:40, get:420, fr:'#FFD34D', lf:'#6BB540', shape:'stalk' },
  melon:{ n:'수박', e:'🍉', cost:200, min:60, get:720, fr:'#2E8B3A', lf:'#4FAE45', shape:'melon' },
  pumpkin:{ n:'황금 호박', e:'🎃', cost:400, min:120, get:1500, fr:'#FFB020', lf:'#3E8F3A', shape:'melon' }
};
const _fm = {}, fMat = c => _fm[c] || (_fm[c] = Lm(c));
const fGeo = { cone:new THREE.ConeGeometry(0.05, 0.16, 5), sph:new THREE.SphereGeometry(1, 10, 8), cyl:new THREE.CylinderGeometry(1, 1, 1, 8), spark:new THREE.OctahedronGeometry(0.09, 0) };
function farmState(id, k){ const d = isleData[id], f = d && d.farm && d.farm[k]; if(!f || !CROPS[f.c]) return null; const C = CROPS[f.c], el2 = (serverNow() - num(f.at, 0, 1e15, 0))/1000, u = Math.max(0, el2/(C.min*60));
  return { c:f.c, C, u, st:u >= 1 ? 3 : u >= 0.66 ? 2 : u >= 0.33 ? 1 : 0, left:Math.max(0, Math.ceil(C.min*60 - el2)) }; }
const fmtLeft = s => s >= 3600 ? Math.floor(s/3600) + '시간 ' + Math.floor(s % 3600/60) + '분' : s >= 60 ? Math.floor(s/60) + '분 ' + (s % 60) + '초' : s + '초';
function farmInfo(id, k){ const f = farmState(id, k), who = id === isleMine ? '내' : isleName(id) + '의';
  return !f ? '🌾 ' + who + ' 농사밭 · 비어 있어요' : f.st === 3 ? f.C.e + ' ' + who + ' ' + f.C.n + ' 다 자랐어요!' : '🌱 ' + who + ' ' + f.C.n + ' 자라는 중 · ' + fmtLeft(f.left) + ' 남음'; }
function farmPlant(k, c){ const C = CROPS[c], d = isleData[isleMine] || {}, p = islePoints() || 0;
  if(p < C.cost){ toast('포인트가 모자라요 (씨앗 ' + C.cost + 'P)'); return; }
  isleWrite({ ['farm/' + k]:{ c, at:Math.round(serverNow()) }, spent:num(d.spent, 0, 1e9, 0) + C.cost }); refreshIsles();
  toast('🌱 ' + C.n + ' 심었어요! ' + C.min + '분 뒤에 수확해요 · -' + C.cost + 'P'); }
function farmHarvest(k){ const f = farmState(isleMine, k); if(!f || f.st < 3) return; const d = isleData[isleMine] || {};
  isleWrite({ ['farm/' + k]:null, farmP:num(d.farmP, 0, 1e9, 0) + f.C.get }); refreshIsles();
  toast(f.C.e + ' ' + f.C.n + ' 수확! +' + f.C.get + 'P'); me.say(f.C.e + ' 수확!'); }
function farmSheet(k){ const body = showSheet('🌱 무엇을 심을까요?'), p = islePoints() || 0;
  body.appendChild(el('p', null, '씨앗을 심으면 시간이 지나면서 자라요. 다 자라면 밭에 가서 수확해요! (내 포인트 ' + p + 'P)'));
  Object.keys(CROPS).forEach(c => { const C = CROPS[c], b = el('button', 'quizopt', C.e + ' ' + C.n + ' · 씨앗 ' + C.cost + 'P · ' + (C.min >= 60 ? C.min/60 + '시간' : C.min + '분') + ' → 수확 ' + C.get + 'P');
    b.type = 'button'; if(p < C.cost) b.style.opacity = 0.5; b.addEventListener('click', () => { $('#spSheet').hidden = true; farmPlant(k, c); }); body.appendChild(b); }); }
function farmAct(k){ const f = farmState(isleMine, k); if(!f) farmSheet(k); else if(f.st === 3) farmHarvest(k); else toast(farmInfo(isleMine, k)); }
function farmNear(I){ const ix = me.pos.x*ISLE_S, iz = me.pos.z*ISLE_S; for(const k in I.items){ const o = I.items[k]; if(o.t === 'farm' && Math.hypot(ix - o.x, iz - o.z) < ISLE_ITEM.farm.r + 0.25) return k; } return null; }
function farmCtx(k){ const f = farmState(isleMine, k);
  if(!f) ctxBtn('🌱 씨앗 심기', () => farmSheet(k)); else if(f.st === 3) ctxBtn('🧺 ' + f.C.n + ' 수확하기 +' + f.C.get + 'P', () => farmHarvest(k)); else ctxBtn('🌱 ' + f.C.n + ' · ' + fmtLeft(f.left) + ' 남음', () => toast(farmInfo(isleMine, k))); }
function farmPlantMesh(C, st, gp){   // 작물 하나 (st 0 새싹 → 1 → 2 → 3 열매)
  const lf = fMat(C.lf), fr = fMat(C.fr), q = [0.45, 0.7, 0.9, 1][st], add = (geo, m, x, y, z, sx, sy, sz) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); gp.add(o); return o; };
  if(C.shape === 'stalk'){ add(fGeo.cyl, lf, 0, 0.25*q, 0, 0.025, 0.5*q, 0.025); for(let i=0;i<3;i++) add(fGeo.cone, lf, Math.cos(i*2.1)*0.06, 0.18*q + i*0.1*q, Math.sin(i*2.1)*0.06, 1, q*1.4, 1).rotation.z = (i % 2 ? 1 : -1)*0.7;
    if(st >= 2) add(fGeo.cyl, st === 3 ? fr : lf, 0.05, 0.32*q, 0, 0.04, 0.16, 0.04); return; }
  const n = st === 0 ? 2 : 4; for(let i=0;i<n;i++){ const a = i/n*6.28; add(fGeo.cone, lf, Math.cos(a)*0.04*q, 0.08*q, Math.sin(a)*0.04*q, q, q*(C.shape === 'root' ? 1.6 : 1.1), q).rotation.set(Math.sin(a)*0.5, 0, -Math.cos(a)*0.5); }
  if(st < 2) return; const ripe = st === 3, m = ripe ? fr : fMat('#9CCB5A');
  if(C.shape === 'root') add(fGeo.cone, m, 0, 0.02, 0, ripe ? 1.1 : 0.7, ripe ? 0.5 : 0.3, ripe ? 1.1 : 0.7).rotation.x = Math.PI;
  else if(C.shape === 'vine'){ add(fGeo.cyl, fMat('#A87A4A'), 0.07, 0.17, 0, 0.012, 0.34, 0.012); [[0.05, 0.14], [-0.04, 0.2], [0.02, 0.26]].forEach(([x, y]) => add(fGeo.sph, m, x, y, 0.04, 0.045, 0.045, 0.045)); }
  else if(C.shape === 'bush') [[0.06, 0.05], [-0.06, 0.04], [0, 0.07]].forEach(([x, z]) => add(fGeo.sph, m, x, 0.04, z, 0.035, 0.04, 0.035));
  else { const r = ripe ? 0.13 : 0.08; add(fGeo.sph, m, 0.05, r*0.8, 0.04, r, r*0.85, r); if(ripe && C.e === '🍉') add(fGeo.sph, fMat('#1F6B2A'), 0.05, r*0.8, 0.04, r*1.01, r*0.5, r*0.3); }
}
function farmSync(I, k){
  const o = I.items[k], f = farmState(I.id, k), key = f ? f.c + ':' + f.st : '';
  if(o.cropKey === key) return; o.cropKey = key;
  if(o.crop){ o.g.remove(o.crop); o.crop = null; } if(!f) return;
  const gp = new THREE.Group(); [-0.5, 0, 0.5].forEach(z => [-0.45, 0, 0.45].forEach(x => { const pg = new THREE.Group(); pg.position.set(x + (z === 0 ? 0.08 : 0), 0.2, z); pg.rotation.y = (x + z)*3; farmPlantMesh(f.C, f.st, pg); gp.add(pg); }));
  if(f.st === 3){ const sp = new THREE.Mesh(fGeo.spark, new THREE.MeshBasicMaterial({ color:'#FFE27A' })); sp.position.set(0, 0.95, 0); gp.add(sp); gp.userData.spark = sp; }
  gp.traverse(m => { m.userData.isleId = I.id; m.userData.ik = k; }); o.g.add(gp); o.crop = gp;
}
// ───────── 🐾 펫 타기 (공중섬) ─────────
function petRideSpec(){ const sp = myPetSpec(); if(!sp || sp.sp === 'egg' || demoMode || PETS_OFF) return null; const I = isleById[isleOn]; if(!I || I.pit || I.arena) return null; return sp; }
function isleRideToggle(){
  if(me.ride){ me.ride = false; $('#isleRide').textContent = '🐾 펫 타기'; const I = isleById[isleOn];
    if(I && Math.hypot(me.pos.x, me.pos.z) > isleRad(I)/ISLE_S - 0.3){ isleFall = { t:0, vx:0, vz:0 }; me.say('으아아 펫아!!'); }
    else { me.isleY = Math.max(0, I ? isleSurf(I, me.pos.x, me.pos.z).h : 0)/ISLE_S; }
    me.rideY = me.rideTot = 0; camLim.pmin = -0.25; if(cam.pitch < -0.25) cam.pitch = -0.25; lastSent = ''; pushPresence(); return; }
  const sp = myPetSpec();
  if(!sp || sp.sp === 'egg'){ toast('🥚 알이 부화해야 탈 수 있어요 (공부 30분)'); return; }
  if(!petRideSpec()){ toast('여기서는 펫을 탈 수 없어요 (전투장·지하 제외)'); return; }
  me.ride = true; me.rideY = 0; $('#isleRide').textContent = '🐾 내리기'; lastSent = ''; pushPresence(); camLim.pmin = sp.sp === 'dragon' ? -0.9 : -0.25;
  const nm = petData.nm || PET_SP[sp.sp].n[sp.st];
  toast(sp.sp === 'dragon' ? '🐉 ' + nm + ' 타고 날아요! 화면을 위로 올려보면 올라가고, 아래로 내려다보면 내려가요' : sp.sp === 'whale' ? '🐋 ' + nm + ' 타고 하늘을 헤엄쳐요! 🌊 물대포 버튼으로 친구를 날려버려요' : PET_FLY[sp.sp] ? PET_SP[sp.sp].e + ' ' + nm + ' 타고 하늘을 날아요! 섬 밖으로 날아가서 다른 섬에도 갈 수 있어요' : '🦊 ' + nm + ' 타고 달려요! 하늘에 얼음 발판을 만들며 다른 섬까지 뛰어가요');
}
const iceTiles = []; let iceT = 0;
const rideIceGeo = new THREE.CylinderGeometry(0.75, 0.6, 0.12, 6);
function iceSpawn(x, y, z){
  let o = iceTiles.find(o => o.t > o.life); if(!o){ if(iceTiles.length > 24) return; o = { m:new THREE.Mesh(rideIceGeo, new THREE.MeshLambertMaterial({ color:"#CFF4FF", emissive:'#3A8AB0', transparent:true, opacity:0.9 })) }; iceTiles.push(o); }
  o.t = 0; o.life = 1.4; o.m.position.set(x, y, z); o.m.rotation.y = Math.random(); o.m.scale.setScalar(0.2); FX().add(o.m);
}
function iceTick(dt){ iceTiles.forEach(o => { if(o.t > o.life) return; o.t += dt; const u = o.t/o.life; o.m.scale.setScalar(u < 0.12 ? 0.2 + u/0.12*0.8 : 1); o.m.material.opacity = 0.9*(1 - Math.max(0, u - 0.6)/0.4); if(o.t > o.life && o.m.parent) o.m.parent.remove(o.m); }); }
const _iw = new THREE.Vector3();
function isleRideMove(I, RD, dt, moving, spd){   // 타고 있을 때: 건물을 뛰어넘고, 섬 밖 하늘로도 나가요
  const t = performance.now()/1000, R0 = isleRad(I)/ISLE_S, d0 = Math.hypot(me.pos.x, me.pos.z), inside = d0 < R0 - 0.3, slide = RD.sp === 'penguin' && inside, fly = PET_FLY[RD.sp] && !slide;
  me.rideSlide = slide;
  me.rideMv = moving;
  const abs0 = (me.isleY || 0) + (me.rideY || 0);
  if(inside){ const s = isleSurf(I, me.pos.x, me.pos.z, abs0*ISLE_S + 0.3), gnd = s.wall ? (I.wild ? me.isleY*ISLE_S : Math.max(s.h, 1.3)) : Math.max(s.h, 0); me.isleY += (gnd/ISLE_S - me.isleY)*Math.min(1, dt*7); }
  if(RD.sp === 'dragon') me.rideY = Math.max(0.4, abs0 - me.isleY);
  if(RD.sp === 'dragon'){   // 🐉 화면을 위로 올려보면 상승, 내려다보면 하강 (버튼 없이 시점으로 조종)
    const f = Math.max(-1, Math.min(1, (0.4 - cam.pitch)*2.2)); me.rideVy = moving ? (spd || 0)*f*0.85 : 0;
    if(me.meteor){ me.meteor.t += dt; me.rideVy = -42; for(let n=0;n<3;n++) puff(me.pos.x + rand(-0.4, 0.4), (me.isleY || 0) + me.rideY + rand(0, 1.2), me.pos.z + rand(-0.4, 0.4), pick(['#FF8A2A', '#FFD34D', '#E2574C']), 0.9); }
    me.rideY = Math.max(0.4, Math.min(45, (me.rideY || 0) + me.rideVy*dt));
    if(me.meteor && (me.rideY <= 0.42 || me.meteor.t > 3)){ me.meteor = null; const dx = Math.sin(me.ry), dz = Math.cos(me.ry); castSkill(me, 'meteor', me.pos.x, me.pos.z, dx, dz); skillSend('meteor', me.pos.x, me.pos.z, dx, dz); }
    if(!moving) me.rideY += Math.sin(t*2)*0.003;
  } else {
    const tgt = fly ? (RD.sp === 'whale' ? 2.8 + Math.sin(t*(moving ? 2.6 : 1.4))*(moving ? 0.6 : 0.2) : 2.6 + Math.sin(t*2)*0.15) : slide ? 0 : (moving ? Math.abs(Math.sin(t*7))*0.45 : 0);
    me.rideY = (me.rideY || 0) + (tgt - (me.rideY || 0))*Math.min(1, dt*(fly ? 2.5 : 12)); me.rideVy = 0; }
  me.rideTot = me.rideY + rideLift(RD.st, RD.sp); me.swim = false;
  // 효과
  iceT += dt; const fx = -Math.sin(me.ry || 0), fz = -Math.cos(me.ry || 0), y0 = (me.isleY || 0) + me.rideTot;
  if(moving && iceT > (fly ? 0.07 : 0.1)){ iceT = 0;
    if(slide){ iceSpawn(me.pos.x, (me.isleY || 0) + 0.01, me.pos.z); puff(me.pos.x + fx*0.8 + rand(-0.3, 0.3), (me.isleY || 0) + 0.25, me.pos.z + fz*0.8 + rand(-0.3, 0.3), '#FFFFFF', 0.6); }
    else if(!fly){ if(!inside || me.isleY > 0.6) iceSpawn(me.pos.x, (me.isleY || 0) + 0.02, me.pos.z); puff(me.pos.x + fx*0.6, (me.isleY || 0) + 0.2, me.pos.z + fz*0.6, '#BFF0FF', 0.5); }
    else puff(me.pos.x + fx*RIDE_K[RD.st]*0.5, y0 - 0.2, me.pos.z + fz*RIDE_K[RD.st]*0.5, RD.sp === 'dragon' ? (RD.st >= 2 ? '#FF8A2A' : '#BFF59A') : RD.sp === 'whale' ? (RD.st >= 3 ? '#CFC2FF' : '#BFF0FF') : ['#7AF0C8', '#B48CFF', '#5CB0FF', '#FFB5E8'][Math.floor(t*6) % 4], RD.sp === 'penguin' ? 1.1 : 0.7); }
  // 다른 섬 위로 날아가면 그 섬으로 옮겨가요
  if(d0 > R0 - 0.5){ I.stage.updateMatrixWorld(); I.stage.localToWorld(_iv.set(me.pos.x, (me.isleY || 0) + (me.rideY || 0), me.pos.z)); let best = null;
    isles.forEach(J => { if(J === I || J.pit || J.arena) return; J.stage.updateMatrixWorld(); J.stage.worldToLocal(_iw.copy(_iv)); const dj = Math.hypot(_iw.x, _iw.z); if(dj < isleRad(J)/ISLE_S - 0.6 && (!best || dj < best.d)) best = { J, x:_iw.x, z:_iw.z, d:dj }; });
    if(best){ const ry = me.ry, ty = me.targetRy, keepY = me.rideY, absW = _iv.y; islePlaceMe(best.J.id, { x:best.x, z:best.z }); best.J.stage.updateMatrixWorld(); { const lp = best.J.stage.worldToLocal(_iw.set(0, 0, 0).add(_iv)); me.isleY = Math.max(0, isleSurf(best.J, best.x, best.z, Math.max(0, lp.y*ISLE_S)).h)/ISLE_S; } me.ry = ry; me.targetRy = ty; me.group.rotation.y = ry; me.rideY = keepY; me.ride = true; lastSent = ''; pushPresence();
      toast('🛬 ' + (best.J.wild ? best.J.name : best.J.id === 't' ? '영선쌤 섬' : best.J.id === isleMine ? '내 섬' : isleName(best.J.id) + '의 섬') + ' 도착!'); return; }
    const wl = Math.hypot(_iv.x, _iv.z), WMAX = 150; if(wl > WMAX){ _iv.x *= WMAX/wl; _iv.z *= WMAX/wl; I.stage.worldToLocal(_iw.copy(_iv)); me.pos.x = _iw.x; me.pos.z = _iw.z; } }
}
let farmT = 0;
function farmTick(dt){ farmT += dt; const t = performance.now()/1000;
  isles.forEach(I => { if(!I.items) return; for(const k in I.items){ const o = I.items[k]; if(o.t !== 'farm') continue; if(farmT > 0.5) farmSync(I, k); if(o.crop && o.crop.userData.spark){ const sp = o.crop.userData.spark; sp.position.y = 0.95 + Math.sin(t*3)*0.08; sp.rotation.y = t*2; } } });
  if(farmT > 0.5) farmT = 0; }
function isleTick(dt){
  const t = performance.now()/1000;
  let ix = joy.x, iy = joy.y;
  if(keys['a'] || keys['arrowleft']) ix -= 1; if(keys['d'] || keys['arrowright']) ix += 1;
  if(keys['w'] || keys['arrowup']) iy -= 1; if(keys['s'] || keys['arrowdown']) iy += 1;
  const mag = Math.min(1, Math.hypot(ix, iy));
  const MI = isleMine && isleById[isleMine];
  if(MI && me && isleFly){   // 날아가는 중
    const f = isleFly, B = isleById[f.to]; f.t += dt; const u = Math.min(1, f.t/f.dur);
    B.stage.updateMatrixWorld(); B.stage.localToWorld(_iv.copy(f.land));
    me.group.position.lerpVectors(f.from, _iv, u); me.group.position.y += Math.sin(u*Math.PI)*(8 + f.from.distanceTo(_iv)*0.15);
    me.group.rotation.set(0, Math.atan2(_iv.x - f.from.x, _iv.z - f.from.z), 0); me.mode = 'idle'; me.flyH = 0;
    me.group.getWorldPosition(_ipt); _ipt.y += 0.4; cam.t.lerp(_ipt, 1 - Math.exp(-dt*6));
    if(u >= 1){ isleFly = null; me.ry = me.targetRy = Math.PI; islePlaceMe(f.to, f.land); toast(f.to === 'arena' ? '⚔ 전투장 도착! 기술로 친구를 밀어 떨어뜨려 봐요' : '착지! 걷고 싸울 수 있어요 (짓기는 내 섬에서만)'); }
  } else if(MI && me && isleFall){   // 섬에서 떨어지는 중 → 내 섬에서 다시 나타나요
    isleFall.t += dt; me.pos.x += isleFall.vx*dt*0.5; me.pos.z += isleFall.vz*dt*0.5;
    me.group.position.set(me.pos.x, isleFall.lava ? -0.4 - isleFall.t*1.6 : -isleFall.t*isleFall.t*14, me.pos.z); me.group.rotation.y += dt*(isleFall.lava ? 4 : 10);
    if(isleFall.lava && Math.random() < dt*20) puff(me.pos.x + rand(-0.4, 0.4), -0.6, me.pos.z + rand(-0.4, 0.4), '#FF8A2A', 0.6);
    if(isleFall.lava && isleFall.t > 0.9){ isleFall = null; me.pitIn = false; const a = rand(0, Math.PI*2); islePlaceMe('pit', { x:Math.cos(a)*(PIT_CAGE + 1.5), z:Math.sin(a)*(PIT_CAGE + 1.5) }); toast('🔥 용암에 빠졌어요! 철창 밖 관중석으로 나왔어요'); }
    else if(isleFall.t > 1.3){ isleFall = null; me.ry = me.targetRy = 0; islePlaceMe(isleMine); toast('☁ 구름 아래로 떨어졌어요! 내 섬에서 다시 시작해요'); }
  } else if(MI && me){   // 섬 위를 걸어다녀요
    if(!isleOn || !isleById[isleOn] || me.group.parent !== isleById[isleOn].stage) islePlaceMe(isleOn && isleById[isleOn] ? isleOn : isleMine);
    const I = isleById[isleOn];
    let mx = 0, mz = 0, sp = 0;
    if(mag >= 0.12 && !(me.frozenT > 0)){ isleGo = null; const fx = -Math.sin(cam.yaw), fz = -Math.cos(cam.yaw), rx = Math.cos(cam.yaw), rz = -Math.sin(cam.yaw);
      mx = fx*(-iy) + rx*ix; mz = fz*(-iy) + rz*ix; const ml = Math.hypot(mx, mz) || 1; mx /= ml; mz /= ml; sp = 3.2*mag; }
    else if(isleGo && !(me.frozenT > 0)){ const dx = isleGo.x - me.pos.x, dz = isleGo.z - me.pos.z, dl = Math.hypot(dx, dz); if(dl > 0.12){ mx = dx/dl; mz = dz/dl; sp = 3; } else isleGo = null; }
    const RD = me.ride ? petRideSpec() : null; if(me.ride && !RD) isleRideToggle();
    if(RD && sp) sp *= RD.sp === 'dragon' ? 4.2 + RD.st*0.8 : 1.7 + RD.st*0.3 + (RD.sp === 'penguin' && me.rideSlide ? 1.0 : 0);
    const ox = me.pos.x, oz = me.pos.z, feet = (me.isleY || 0)*ISLE_S;
    if(sp){ me.pos.x += mx*sp*dt; me.pos.z += mz*sp*dt; me.targetRy = Math.atan2(mx, mz); me.mode = 'walk'; me.manual = true; }
    else if(me.mode === 'walk'){ me.mode = 'idle'; me.manual = false; }
    if(me.kvx || me.kvz){ me.pos.x += me.kvx*dt; me.pos.z += me.kvz*dt; const f = Math.exp(-2.2*dt); me.kvx *= f; me.kvz *= f; if(Math.hypot(me.kvx, me.kvz) < 0.2) me.kvx = me.kvz = 0; }
    if(RD) isleRideMove(I, RD, dt, !!sp, sp);
    else if(!I.pit){ const blocked = (x, z) => { const s = isleSurf(I, x, z, feet); return s.wall || s.h - feet > 0.4; };   // 0.4칸까지는 올라가고, 더 높거나 벽이면 막혀요
      if(blocked(me.pos.x, me.pos.z)){ if(!blocked(me.pos.x, oz)) me.pos.z = oz; else if(!blocked(ox, me.pos.z)) me.pos.x = ox; else { me.pos.x = ox; me.pos.z = oz; } isleGo = null; }
      const g2 = isleSurf(I, me.pos.x, me.pos.z, feet).h; if(g2 >= feet) { me.isleY = g2/ISLE_S; isleVy = 0; } else { isleVy -= 18*dt; me.isleY = Math.max(g2, feet + isleVy*dt)/ISLE_S; if(me.isleY*ISLE_S <= g2) isleVy = 0; }
      me.swim = g2 < -0.05 && me.isleY*ISLE_S < 0; } else { me.isleY = 0; me.swim = false; }
    if(!RD) isleKeepOn(I);
    if(!isleFall){ const kx = me.kvx, kz = me.kvz; me.kvx = me.kvz = 0; me.update(dt); me.kvx = kx; me.kvz = kz; me.group.position.y += (me.isleY || 0) + (RD ? me.rideTot || 0 : 0);
      if(me.swim){ const s2 = Math.sin(performance.now()/180); me.arms[0].rotation.set(-1.4 + s2*1.2, 0, 0.3); me.arms[1].rotation.set(-1.4 - s2*1.2, 0, -0.3); me.legs.forEach((l, i) => { l.rotation.x = Math.sin(performance.now()/120 + i*3)*0.4; }); me.body.rotation.x = 0.5;
        if(Math.random() < dt*6) puff(me.pos.x + rand(-0.4, 0.4), me.group.position.y + 0.9, me.pos.z + rand(-0.4, 0.4), '#BFF0FF', 0.4); } else me.body.rotation.x = 0; }
    I.g.updateMatrixWorld(); me.group.getWorldPosition(_ipt); _ipt.y += 0.5; cam.t.lerp(_ipt, 1 - Math.exp(-dt*5));
    // 점프 발판 위에 서면 버튼
    if(!isleMode){ const pd = islePad(I), onPad = !I.pit && Math.hypot(me.pos.x - pd.x, me.pos.z - pd.z) < 1.1;
      const hole = isleOn === 'arena' && Math.hypot(me.pos.x, me.pos.z) < 1.5;
      if(I.pit){ const lad = Math.hypot(me.pos.x, me.pos.z + (PIT_OUT - 1.2)) < 1.8;
        if(me.pitIn) ctxBtn('');
        else if(lad) ctxBtn('⬆ 전투장으로', () => isleTele('arena', { x:0, z:3.2 }, '⬆ 전투장으로 올라왔어요'));
        else ctxBtn('⚔ 맞짱 들어가기', () => { const a = Math.atan2(me.pos.z, me.pos.x); me.pitIn = true; me.pos.set(Math.cos(a)*(PIT_FIGHT - 1.2), 0, Math.sin(a)*(PIT_FIGHT - 1.2)); me.targetRy = Math.atan2(-me.pos.x, -me.pos.z); lastSent = ''; pushPresence(); toast('⚔ 맞짱 시작! 용암에 떨어지면 관중석으로 나가요'); }); }
      else if(hole) ctxBtn('⬇ 구멍으로 내려가기', isleGoPit);
      else if(onPad) ctxBtn('🚀 다른 섬으로', isleJumpSheet);
      else { const fk = isleOn === isleMine && farmNear(I); if(fk) farmCtx(fk); else ctxBtn(''); } }
  } else if(mag >= 0.12){ cam.yaw -= ix*dt*1.6; cam.dist = clamp(cam.dist + iy*dt*(6 + cam.dist*0.6), camLim.dmin, camLim.dmax); }
  isleSyncT -= dt; if(isleSyncT <= 0){ isleSyncT = 0.3; isleSyncRemotes(); }
  remotes.forEach(r => { const a = r.av; if(a.group.parent && a.group.parent.userData.stage) a.group.position.y += a.isleY || 0; });
  isles.forEach(I => { const near = I.id === isleOn && cam.dist < 30; I.label.visible = !near; if(near) I.visit.visible = false; });
  { const F = $('#isleFight'), show = !!(isleMine && isleOn && !isleFly && !isleFall); if(F.hidden === show) F.hidden = !show;
    if(show){ const now = Date.now(); F.querySelectorAll('.fbtn').forEach(b => { const k = b.dataset.isk || (b.id === 'isleUlt' ? 'ult' : ''); if(!k) return; const r = Math.max(0, ((skillCd[k] || 0) - now)/SKILLS[k].cd); b.style.setProperty('--cd', r.toFixed(3)); });
      const uo = ultOk(); if($('#isleUlt').hidden === uo) $('#isleUlt').hidden = !uo;
      const pk = me.ride ? PET_SK[me.petSp] : null; if($('#isleWater').hidden === !!pk) $('#isleWater').hidden = !pk;
      if(pk && $('#isleWater').dataset.isk !== pk.k){ const b = $('#isleWater'); b.dataset.isk = pk.k; $('#pskE').textContent = pk.e; $('#pskN').textContent = pk.n; b.style.setProperty('--c1', pk.c1); b.style.setProperty('--c2', pk.c2); }
      const port = window.innerWidth < window.innerHeight, ph = $('#panel').hidden ? 0 : $('#panel').getBoundingClientRect().height; F.style.setProperty('--fb', (port ? ph + 6 : 8) + 'px'); } }
  isles.forEach(I => { const U = I.base && I.base.userData; if(!U) return; if(U.padArrow) U.padArrow.position.y = 0.45 + Math.sin(t*3)*0.08; if(U.orb) U.orb.rotation.y += dt*0.12; if(U.fall) U.fall.offset.y += dt*0.9; });
  isles.forEach(I => { if(!I.fixed) I.g.position.y = I.pos.y + Math.sin(t*0.5 + I.ph)*0.25; });
  { const P = isleById.pit; if(P && (isleOn === 'pit' || isleOn === 'arena')){ P.lavaT.offset.x += dt*0.03; P.lavaT.offset.y += dt*0.05; P.bubbles.forEach(b => { b.position.y = -0.3 + Math.max(0, Math.sin(t*2 + b.userData.ph))*0.22; }); if(P.lavaGlow) P.lavaGlow.material.opacity = 0.2 + Math.sin(t*2.5)*0.1;
    const A = isleById.arena; if(A.base.userData.holeGlow) A.base.userData.holeGlow.material.opacity = 0.25 + Math.sin(t*3)*0.12; } }
  if(!(MI && me) && isleFocus && isleById[isleFocus]){ const I = isleById[isleFocus]; _ipt.set(I.g.position.x, I.g.position.y + 0.8, I.g.position.z); cam.t.lerp(_ipt, 1 - Math.exp(-dt*3)); }
  farmTick(dt); iceTick(dt);
  isleSpin.forEach(g => { if(g.userData.spin) g.userData.spin.rotation.z += dt*1.5; if(g.userData.bob) g.userData.bob.position.y = (g.userData.bobY || 0.95) + Math.sin(t*4)*(g.userData.bobA || 0.05); if(g.userData.flag) g.userData.flag.rotation.y = Math.sin(t*3)*0.4;
    if(g.userData.wheel){ g.userData.wheel.rotation.z += dt*0.25; g.userData.cabs.forEach(c => { c.rotation.z = -g.userData.wheel.rotation.z; }); }
    if(g.userData.water) g.userData.water.offset.y += dt*1.2;
    if(g.userData.smoke) g.userData.smoke.forEach(s => { const u = ((t*0.35 + s.userData.k/5) % 1); s.position.set(Math.sin(t + s.userData.k)*0.3*u, 3.5 + u*3, Math.cos(t*0.7 + s.userData.k)*0.3*u); s.scale.setScalar(0.6 + u*1.6); s.material.opacity = 0.55*(1 - u); });
    if(g.userData.flame){ g.userData.fan.rotation.z += dt*25; const f = 0.85 + Math.random()*0.3; g.userData.flame.scale.set(f, f, 0.8 + Math.random()*0.5); } });
  (isleScene.userData.fly || []).forEach(f => { if(f.isle){ f.o.position.y = f.o.userData.y0 + Math.sin(t*0.4 + f.o.userData.ph)*0.6; return; } f.a += f.sp*dt*6; f.o.position.set(Math.cos(f.a)*f.R, f.y + Math.sin(t*0.5 + f.R)*1.2, Math.sin(f.a)*f.R); f.o.rotation.y = -f.a; if(f.o.userData.prop) f.o.userData.prop.rotation.z += dt*12; });
  isleClouds.forEach(c => { c.s.position.x += c.sp*dt; if(c.s.position.x > 85) c.s.position.x = -85; });
  isleScene.userData.sky.position.copy(camera.position); isleLightTick(); if(isleScene.userData.sunG) isleScene.userData.sunG.lookAt(camera.position);
  isleVisT -= dt; if(isleVisT <= 0){ isleVisT = 1;   // 누가 어느 섬을 구경하는지
    const by = {}; remotes.forEach(r => { const a = r.av; if(a.room === 'isle' && a.isl && isleById[a.isl]) (by[a.isl] = by[a.isl] || []).push(a.name); });
    const key = JSON.stringify(by); if(key !== isleVisitKey){ isleVisitKey = key; isles.forEach(I => { const n = by[I.id]; I.visit.visible = !!n; if(n) setLabel(I.visit, '👀 ' + n[0] + (n.length > 1 ? ' 외 ' + (n.length - 1) + '명' : ''), '#8FCBFF'); }); }
    updIsleUI(); }
}
$('#isleMineBtn').addEventListener('click', () => { if(!isleMine){ isleClaim(); return; } if(isleOn && isleOn !== isleMine) isleJump(isleMine); else { cam.dist = clamp(isleRad(isleById[isleMine])*1.1 + 2.5, 4, 14); cam.pitch = 0.42; } });
$('#isleFT').addEventListener('click', () => { const F = $('#isleFight'); F.classList.toggle('mini'); $('#isleFT').querySelector('b').textContent = F.classList.contains('mini') ? '⚔️' : '✕'; });
$('#isleRide').addEventListener('click', () => { if(!me || isleFly || isleFall) return; isleRideToggle(); });
$('#isleAll').addEventListener('click', () => { isleGhostOff(); isleMode = null; ctxBtn(''); cam.dist = 72; cam.pitch = 0.42; toast('🗺 멀리서 다 같이 구경해요'); });
$('#isleBuild').addEventListener('click', () => { if(isleMine && isleOn !== isleMine){ toast('짓기는 내 섬에 있을 때만 할 수 있어요 · 🏝 내 섬을 눌러요'); return; } isleBuildSheet(); });
$('#isleUp').addEventListener('click', () => {
  if(!isleMine) return; const d = isleData[isleMine] || {}, lv = clamp(Math.floor(num(d.lv, 1, ISLE_LVMAX, 1)), 1, ISLE_LVMAX);
  if(lv >= ISLE_LVMAX){ toast('이미 가장 큰 섬이에요!'); return; }
  const cost = ISLE_UP[lv + 1], p = islePoints() || 0;
  if(p < cost){ toast('땅 넓히기는 ' + cost + 'P가 필요해요 · ' + (cost - p) + 'P 남았어요'); return; }
  isleWrite({ lv:lv + 1, spent:num(d.spent, 0, 1e9, 0) + cost }); isleAt(isleMine); toast('🏝 땅이 넓어졌어요! 섬 Lv' + (lv + 1));
});
$('#isleDel').addEventListener('click', () => { if(!isleMine) return; if(isleOn !== isleMine){ toast('치우기는 내 섬에 있을 때만 할 수 있어요'); return; } isleMode = { kind:'del' }; isleAt(isleMine); ctxBtn('✖ 치우기 끝내기', () => { isleMode = null; ctxBtn(''); }); toast('치울 건물을 눌러요 · 값의 절반을 돌려받아요'); });
$('#isleExit').addEventListener('click', exitRoom);
$('#isleMove').addEventListener('click', () => { if(!isleMine) return; if(isleOn !== isleMine){ toast('옮기기는 내 섬에 있을 때만 할 수 있어요'); return; } isleGhostOff(); isleMode = { kind:'pick' }; isleAt(isleMine); ctxBtn('✖ 옮기기 끝', () => { isleGhostOff(); isleMode = null; ctxBtn(''); }); toast('🔀 옮길 건물을 눌러요'); });
$('#isleUlt').addEventListener('click', () => doSkill('ult'));
document.querySelectorAll('[data-isk]').forEach(b => b.addEventListener('click', () => { if(!isleOn){ toast(isleMine ? '섬 위에 서 있을 때 쓸 수 있어요' : '먼저 내 섬을 골라요'); return; } doSkill(b.dataset.isk); }));

// 지하 맞짱장 바닥에 쓰는 돌 무늬 (작은 픽셀 그림)
function pixTex(draw){ const c = document.createElement('canvas'); c.width = c.height = 16; const x = c.getContext('2d'); draw(x);
  const tx = new THREE.CanvasTexture(c); tx.magFilter = THREE.NearestFilter; tx.minFilter = THREE.NearestFilter; return tx; }
const PIT_STONE = pixTex(x => { for(let i=0;i<16;i++) for(let j=0;j<16;j++){ x.fillStyle = ['#8A8F96', '#7A7F86', '#959AA0', '#6E7379'][(Math.random()*4)|0]; x.fillRect(i, j, 1, 1); } });
// 예전 블록 기능에 쓴 포인트 돌려주기 (블록·가방을 지우고 산 값만큼 spent에서 빼요)
const BLK_REFUND = { grass:1, dirt:1, planks:1, log:2, leaf:1, glass:2, brick:3, lamp:3 };
let isleRefundDone = false;
function isleRefundPrice(){
  if(!isleMine || isleLocal === null) return; const d = isleData[isleMine]; if(!d || d.pv === 3) return;
  const lv = clamp(Math.floor(num(d.lv, 1, ISLE_LVMAX, 1)), 1, ISLE_LVMAX); let fair = 0; for(let l=2;l<=lv;l++) fair += ISLE_UP[l];
  Object.values(d.items || {}).forEach(o => { if(o && ISLE_ITEM[o.t]) fair += ISLE_ITEM[o.t].cost; });
  const old = num(d.spent, 0, 1e9, 0), nw = Math.min(old, fair); isleWrite({ spent:nw, pv:3 });
  if(old - nw > 0) setTimeout(() => toast('💰 땅 넓히기 값이 내려서 ' + (old - nw) + 'P를 돌려받았어요'), 900);
}
function isleRefundBlocks(){
  if(isleRefundDone || !isleMine) return; const d = isleData[isleMine]; if(!d || !(d.blocks || d.inv || d.mined)) return; isleRefundDone = true;
  let back = 0; Object.values(d.blocks || {}).forEach(tp => { back += BLK_REFUND[tp] || 0; }); Object.keys(d.inv || {}).forEach(tp => { back += (BLK_REFUND[tp] || 0)*num(d.inv[tp], 0, 1e6, 0); });
  isleWrite({ blocks:null, inv:null, mined:null, spent:Math.max(0, num(d.spent, 0, 1e9, 0) - back) });
  if(back) setTimeout(() => toast('🧱 블록 기능이 없어져서 블록에 쓴 ' + back + 'P를 돌려받았어요'), 600);
}

/* ===== 🔐 수학 탈출방: 공통수학2 (함수 · 유리함수 · 명제) 3·4점 문제 3개를 풀어야 문이 열려요 ===== */
// 문제는 모의고사 유형을 참고해 새로 만든 문제예요 (실제 기출 문제를 그대로 옮긴 게 아니에요)
const Fr = (a, b) => '<span class="fr"><span>' + a + '</span><span>' + b + '</span></span>';
const QZ = [
  { u:'명제', p:3, q:'두 조건 p: x² − 4x + 3 ≤ 0, q: |x − a| ≤ 2 에 대하여 p 가 q 이기 위한 충분조건이 되도록 하는 정수 a 의 개수는?', c:['1', '2', '3', '4', '5'], a:2,
    h:'p 의 진리집합 ⊂ q 의 진리집합이 되어야 해요.', s:'P = {x | 1 ≤ x ≤ 3}, Q = {x | a − 2 ≤ x ≤ a + 2}. P ⊂ Q 이려면 a − 2 ≤ 1, a + 2 ≥ 3 → 1 ≤ a ≤ 3 → 3개' },
  { u:'유리함수', p:4, q:'함수 f(x) = ' + Fr('ax + b', 'x + c') + ' 의 그래프가 점 (2, 3)에 대하여 대칭이고 원점을 지날 때, f(4) 의 값은? (단, a, b, c 는 상수)', c:['4', '5', '6', '7', '8'], a:2,
    h:'대칭의 중심 = 두 점근선의 교점 (−c, a) 예요.', s:'−c = 2, a = 3 이고 f(0) = ' + Fr('b', 'c') + ' = 0 → b = 0. f(x) = ' + Fr('3x', 'x − 2') + ' → f(4) = 6' },
  { u:'유리함수', p:4, q:'정의역이 {x | 3 ≤ x ≤ 5} 인 함수 y = ' + Fr('x + 3', 'x − 2') + ' 의 최댓값을 M, 최솟값을 m 이라 할 때, M + m 의 값은?', c:['7', '8', Fr('26', '3'), '9', Fr('28', '3')], a:2,
    h:'y = 1 + ' + Fr('5', 'x − 2') + ' 은 x > 2 에서 감소해요.', s:'x = 3 일 때 M = 6, x = 5 일 때 m = ' + Fr('8', '3') + ' → M + m = ' + Fr('26', '3') },
  { u:'함수', p:4, q:'집합 X = {1, 2, 3} 에서 X 로의 함수 f 중에서 f(1) < f(2) 를 만족시키는 함수 f 의 개수는?', c:['6', '9', '12', '15', '18'], a:1,
    h:'(f(1), f(2)) 쌍을 먼저 세고, f(3) 은 자유예요.', s:'f(1) < f(2) 인 쌍: (1,2), (1,3), (2,3) → 3가지, f(3) 은 3가지 → 9' },
  { u:'함수', p:4, q:'실수 전체에서 정의된 함수 f(x) = { x + a (x ≥ 1), 3x − 1 (x < 1) } 이 일대일대응일 때, 상수 a 의 값은?', c:['−1', '0', '1', '2', '3'], a:2,
    h:'두 식 모두 증가하니까, x = 1 에서 이어져야 치역이 실수 전체가 돼요.', s:'1 + a = 3·1 − 1 = 2 → a = 1' },
  { u:'명제', p:4, q:'x > 0 일 때, x + ' + Fr('9', 'x + 1') + ' 의 최솟값은?', c:['3', '4', '5', '6', '7'], a:2,
    h:'(x + 1) + ' + Fr('9', 'x + 1') + ' − 1 로 바꾸고 산술·기하평균을 써요.', s:'(x + 1) + ' + Fr('9', 'x + 1') + ' ≥ 2√9 = 6 → 최솟값 6 − 1 = 5 (x = 2 일 때)' },
  { u:'유리함수', p:4, q:'함수 f(x) = ' + Fr('2x + 3', 'x − 1') + ' 의 역함수를 f⁻¹ 라 할 때, f⁻¹(5) 의 값은?', c:['2', Fr('7', '3'), Fr('8', '3'), '3', Fr('10', '3')], a:2,
    h:'f(k) = 5 인 k 를 찾아요.', s:'2k + 3 = 5(k − 1) → k = ' + Fr('8', '3') },
  { u:'유리함수', p:4, q:'함수 y = ' + Fr('3', 'x') + ' 의 그래프를 x축의 방향으로 m 만큼, y축의 방향으로 n 만큼 평행이동하면 함수 y = ' + Fr('2x + 1', 'x − 1') + ' 의 그래프와 일치한다. m + n 의 값은?', c:['1', '2', '3', '4', '5'], a:2,
    h:'y = ' + Fr('2x + 1', 'x − 1') + ' 을 ' + Fr('3', 'x − m') + ' + n 꼴로 바꿔요.', s:'y = ' + Fr('3', 'x − 1') + ' + 2 → m = 1, n = 2 → 3' },
  { u:'유리함수', p:4, q:'함수 y = ' + Fr('2', 'x + 1') + ' − 3 의 그래프가 지나지 않는 사분면은?', c:['제1사분면', '제2사분면', '제3사분면', '제4사분면', '모두 지난다'], a:0,
    h:'점근선 x = −1, y = −3 을 그리고, y절편을 확인해요.', s:'x > 0 이면 y < 2 − 3 = −1 < 0 이라 제1사분면은 지나지 않아요' },
  { u:'유리함수', p:4, q:'함수 f(x) = ' + Fr('ax + 2', 'x − 3') + ' 의 그래프가 직선 y = x 에 대하여 대칭일 때, f(4) 의 값은? (단, a 는 상수)', c:['10', '12', '14', '16', '18'], a:2,
    s:'y = x 에 대칭이면 대칭의 중심 (3, a) 가 y = x 위에 있어야 해요 → a = 3. f(4) = ' + Fr('12 + 2', '1') + ' = 14' },
  { u:'유리함수', p:4, q:'함수 y = ' + Fr('2', 'x − 1') + ' + 1 (x > 1) 의 그래프 위의 점 P 에서 두 점근선에 내린 수선의 발을 각각 A, B 라 하자. 두 점근선의 교점을 C 라 할 때, 사각형 PACB 의 둘레의 길이의 최솟값은?', c:['4', '4√2', '6', '4√3', '8'], a:1,
    s:'P(t + 1, ' + Fr('2', 't') + ' + 1) 이면 두 변의 길이는 t, ' + Fr('2', 't') + ' → 둘레 2(t + ' + Fr('2', 't') + ') ≥ 2·2√2 = 4√2' },
  { u:'명제', p:4, q:'두 조건 p: x² − 2x − 8 ≤ 0, q: a ≤ x ≤ a + 3 에 대하여 q 가 p 이기 위한 충분조건이 되도록 하는 모든 정수 a 의 값의 합은?', c:['−3', '−2', '−1', '0', '1'], a:1,
    s:'P = [−2, 4]. Q ⊂ P 이려면 a ≥ −2, a + 3 ≤ 4 → −2 ≤ a ≤ 1 → −2 + (−1) + 0 + 1 = −2' },
  { u:'함수', p:4, q:'집합 X = {1, 2, 3, 4} 에서 X 로의 일대일대응 f 중에서 f(1) = 2, f(2) ≠ 3 을 만족시키는 함수 f 의 개수는?', c:['2', '3', '4', '5', '6'], a:2,
    s:'f(2), f(3), f(4) 는 {1, 3, 4} 를 하나씩 가져요. f(2) 는 1 또는 4 (2가지), 나머지 둘은 2가지 → 4' },
  { u:'함수', p:4, q:'함수 f(x) = x² − 2x + 2 (x ≥ 1) 의 역함수를 g 라 할 때, 두 함수 y = f(x), y = g(x) 의 그래프의 두 교점 사이의 거리는?', c:['1', '√2', '√3', '2', '√5'], a:1,
    s:'f 는 증가함수라 교점은 y = x 위에 있어요. x² − 3x + 2 = 0 → x = 1, 2 → (1, 1), (2, 2) → 거리 √2' },
  { u:'함수', p:4, q:'일차함수 f(x) = ax + b (a > 0) 에 대하여 (f ∘ f)(x) = 4x + 9 일 때, f(1) 의 값은?', c:['3', '4', '5', '6', '7'], a:2,
    s:'(f ∘ f)(x) = a²x + ab + b → a = 2, 3b = 9 → b = 3 → f(1) = 5' },
  { u:'유리함수', p:3, q:'함수 y = ' + Fr('ax + 1', 'x − 2') + ' 의 치역이 {y | y ≠ 3} 이고 그래프가 점 (3, b) 를 지날 때, a + b 의 값은?', c:['10', '11', '12', '13', '14'], a:3,
    s:'수평 점근선 y = a = 3. b = ' + Fr('9 + 1', '1') + ' = 10 → 13' },
  { u:'명제', p:4, q:'두 양수 a, b 가 a + 2b = 8 을 만족시킬 때, ab 의 최댓값은?', c:['4', '6', '8', '10', '16'], a:2,
    s:'a + 2b ≥ 2√(2ab) → 8 ≥ 2√(2ab) → ab ≤ 8 (a = 4, b = 2)' },
  { u:'명제', p:4, q:'두 양수 x, y 에 대하여 (x + ' + Fr('1', 'y') + ')(y + ' + Fr('4', 'x') + ') 의 최솟값은?', c:['5', '7', '8', '9', '10'], a:3,
    s:'전개하면 xy + ' + Fr('4', 'xy') + ' + 5 ≥ 2√4 + 5 = 9' },
];
const QZ_NEED = 3, QZ_TRY = 3;
let qzChairs = [], qzWin = null, qzScene = null, qz = null, qzLamps = [], qzDoor = null, qzDoorOpen = 0, qzDuel = null, qzPres = null, qzSeenInv = {};
function qzRng(seed){ let h = seed >>> 0 || 1; return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return (h >>> 0)/4294967296; }; }
function qzPick(n, seed){ const r = qzRng(seed), idx = QZ.map((_, i) => i); for(let i=idx.length - 1;i>0;i--){ const j = Math.floor(r()*(i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  const three = idx.filter(i => QZ[i].p === 3), four = idx.filter(i => QZ[i].p === 4); return four.slice(0, 2).concat([three[0]], four.slice(2)).slice(0, n); }
function buildQuiz(){
  qzScene = new THREE.Scene(); qzScene.background = new THREE.Color('#0E1226'); qzScene.fog = new THREE.Fog('#0E1226', 10, 22);
  qzScene.add(new THREE.HemisphereLight('#9FB6FF', '#1A1530', 0.55));
  const bulb = new THREE.PointLight('#FFE7A0', 1.3, 16); bulb.position.set(0, 3.6, 0.5); qzScene.add(bulb);
  const box = (w, h, d, c, x, y, z) => addM(qzScene, new THREE.BoxGeometry(w, h, d), Lm(c), x, y, z);
  box(10, 0.1, 9, '#2A2F4A', 0, -0.05, 0); box(10, 4.4, 0.1, '#262B48', 0, 2.2, -4.5); box(0.1, 4.4, 9, '#232845', -5, 2.2, 0); box(0.1, 4.4, 9, '#232845', 5, 2.2, 0); box(10, 0.1, 9, '#1A1E36', 0, 4.4, 0);
  for(let i=-4;i<=4;i++) box(0.04, 0.01, 9, '#20243C', i, 0.005, 0);
  // 전구
  addM(qzScene, new THREE.CylinderGeometry(0.01, 0.01, 0.7, 4), Lm('#555'), 0, 4.05, 0.5); addM(qzScene, new THREE.SphereGeometry(0.16, 14, 10), Gm('#FFE7A0'), 0, 3.62, 0.5);
  // 무거운 철문 + 자물쇠 램프 3개
  const dg = new THREE.Group(); dg.position.set(0, 0, -4.42); qzScene.add(dg);
  addM(dg, new THREE.BoxGeometry(2.4, 3.2, 0.12), Lm('#3A3F58'), 0, 1.6, 0);
  qzDoor = addM(dg, new THREE.BoxGeometry(2.0, 2.9, 0.1), new THREE.MeshPhongMaterial({ color:'#6B7290', shininess:60 }), 0, 1.45, 0.08);
  for(let k=0;k<4;k++) addM(qzDoor, new THREE.BoxGeometry(1.8, 0.05, 0.03), Lm('#545A75'), 0, -1.1 + k*0.75, 0.06);
  addM(qzDoor, new THREE.CylinderGeometry(0.06, 0.06, 0.3, 10), Lm('#C9A84E'), 0.75, 0, 0.1).rotation.x = Math.PI/2;
  qzLamps = [-0.6, 0, 0.6].map(x => addM(dg, new THREE.SphereGeometry(0.13, 14, 10), new THREE.MeshBasicMaterial({ color:'#E2574C' }), x, 3.35, 0.12));
  const sign = labelSprite('🔐 3문제를 풀면 열려요', '#FFE27A'); sign.scale.set(3.4, 0.85, 1); sign.position.set(0, 3.95, -4.3); qzScene.add(sign);
  // 칠판 (왼쪽 벽)
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 256; const x = cv.getContext('2d'); x.fillStyle = '#1E4A3A'; x.fillRect(0, 0, 512, 256);
  x.fillStyle = 'rgba(255,255,255,.88)'; x.font = 'bold 30px sans-serif'; x.fillText('수학 탈출방 · 공통수학2', 24, 52); x.font = '26px sans-serif';
  ['y = k/(x−p) + q', 'p ⇒ q : P ⊂ Q', '(g∘f)(x) = g(f(x))', 'a + b ≥ 2√ab'].forEach((s, i) => x.fillText(s, 34, 104 + i*40));
  const bt = new THREE.CanvasTexture(cv); const board = addM(qzScene, new THREE.PlaneGeometry(4, 2), new THREE.MeshBasicMaterial({ map:bt }), -4.94, 2.2, -0.5); board.rotation.y = Math.PI/2;
  // 책상 하나 + 마주 보는 의자 두 개 (밧줄로 묶여 있어요)
  box(1.3, 0.06, 1.0, '#C99A6B', 0, 0.75, 0); [[-0.58, -0.43], [0.58, -0.43], [-0.58, 0.43], [0.58, 0.43]].forEach(q => box(0.05, 0.75, 0.05, '#5B6170', q[0], 0.37, q[1]));
  box(0.32, 0.04, 0.24, '#2C6FD1', -0.25, 0.8, 0.15); box(0.26, 0.03, 0.2, '#FFFFFF', 0.25, 0.79, -0.15); addM(qzScene, new THREE.CylinderGeometry(0.015, 0.015, 0.3, 6), Lm('#FFC93C'), 0.1, 0.8, 0.05).rotation.z = Math.PI/2;
  qzChairs = [1, -1].map(side => { const g = new THREE.Group(); g.position.set(0, 0, side*1.05); g.rotation.y = side > 0 ? 0 : Math.PI; qzScene.add(g);
    const seat = '#566190', leg = '#5B6170', b2 = (w, h, d, c, x, y, z) => addM(g, new THREE.BoxGeometry(w, h, d), Lm(c), x, y, z);
    b2(0.55, 0.06, 0.5, seat, 0, 0.45, 0); b2(0.55, 0.62, 0.06, seat, 0, 0.78, 0.25); [[-0.24, -0.21], [0.24, -0.21], [-0.24, 0.21], [0.24, 0.21]].forEach(q => b2(0.04, 0.45, 0.04, leg, q[0], 0.225, q[1]));
    const rope = new THREE.Group(); g.add(rope); const rm = new THREE.MeshLambertMaterial({ color:'#C9A26B' });
    [0.72, 0.92].forEach(y => { const r = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.035, 6, 20), rm); r.rotation.x = Math.PI/2; r.position.set(0, y, 0.05); r.scale.set(1, 1.15, 1); rope.add(r); });
    const lr = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.03, 6, 16), rm); lr.rotation.x = Math.PI/2; lr.position.set(0, 0.38, -0.3); rope.add(lr);
    const knot = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), rm); knot.position.set(0, 0.82, 0.42); rope.add(knot);
    return { g, rope, side }; });
  // 떠다니는 수식 조각
  qzScene.userData.floaters = ['f⁻¹', '∴', 'x≠1', '⇒', '∘', 'P⊂Q'].map((s, i) => { const sp = labelSprite(s, ['#5CE1E6', '#FFC93C', '#C9A8FF', '#FF7C93', '#6EE7A8', '#8FCBFF'][i]); sp.scale.set(1.1, 0.28, 1);
    sp.position.set(rand(-3.5, 3.5), rand(1.2, 3.4), rand(-3, 2)); qzScene.add(sp); return { sp, ph:rand(0, 6), y:sp.position.y }; });
}
function enterQuiz(){
  if(!qzScene) buildQuiz();
  $('#panel').hidden = true; $('#joy').hidden = true; $('#qzCard').hidden = false;
  Object.assign(camLim, { pmin:-0.3, pmax:0.9, dmin:4, dmax:12 });
  cam.yaw = 0.9; cam.pitch = 0.28; cam.dist = 5.2; cam.t.set(0, 0.9, 0);
  qz = { set:qzPick(8, (Date.now()/1000) | 0), i:0, solved:0, tries:0, lockT:0, opened:false, show:false };
  qzScene.add(me.group); me.group.visible = true; me.pos.set(0, 0, 1.05); me.ry = me.targetRy = Math.PI; me.pose = null; qzWin = null; qzChairs.forEach(c => { c.rope.visible = true; c.rope.position.y = 0; c.g.visible = c.side > 0; });
  qzDoorOpen = 0; qzDoor.position.x = 0; qzLamps.forEach(l => l.material.color.set('#E2574C'));
  qzRender(); toast('🔐 수학 탈출방! 문제 3개를 맞혀야 문이 열려요');
}
function leaveQuiz(){ $('#qzCard').hidden = true; qzDuelEnd(true); qzWin = null; qzReleaseOpp(); }
function qzReleaseOpp(){ remotes.forEach(r => { if(r.av.group.parent === qzScene){ scene.add(r.av.group); r.av.group.visible = false; } }); }
function qzCur(){ return QZ[qzDuel && qzDuel.started ? qzDuel.set[qzDuel.i] : qz.set[qz.i % qz.set.length]]; }
function qzRender(){
  const card = $('#qzCard'); if(card.hidden || !qz) return; const P = qzCur(), D = qzDuel && qzDuel.started;
  const opp = D && remotes.get(qzDuel.opp), oq = opp && opp.av.qd;
  $('#qzHead').innerHTML = D ? '⚔ 먼저 풀기 대결 · 나 <b>' + qzDuel.sc + '/3</b> · ' + (opp ? opp.av.name : '상대') + ' <b>' + (oq && oq.sc || 0) + '/3</b>'
    : '🔐 탈출 ' + [0, 1, 2].map(k => k < qz.solved ? '🟢' : '🔴').join('') + (qz.opened ? ' · <b>문이 열렸어요!</b>' : ' · ' + qz.solved + '/3');
  $('#qzTag').textContent = P.u + ' · ' + P.p + '점'; $('#qzTag').className = 'qztag p' + P.p;
  $('#qzQ').innerHTML = P.q;
  const box = $('#qzC'); box.textContent = '';
  P.c.forEach((c, k) => { const b = el('button', 'qzopt'); b.type = 'button'; b.innerHTML = '<i>' + '①②③④⑤'[k] + '</i>' + c; b.addEventListener('click', () => qzAnswer(k, b)); box.appendChild(b); });
  $('#qzMsg').innerHTML = D ? '틀리면 5초 동안 못 눌러요' : '기회 ' + (QZ_TRY - qz.tries) + '번 · 3번 틀리면 해설을 보고 다음 문제로 넘어가요';
  $('#qzExit').textContent = qz.opened ? '🚪 나가기' : '🔒 나가기 (3문제)';
  $('#qzDuel').textContent = D ? '🏳 대결 그만' : '⚔ 친구와 대결';
}
function qzAnswer(k, btn){
  const now = Date.now(); if(now < qz.lockT){ toast('잠깐! ' + Math.ceil((qz.lockT - now)/1000) + '초 뒤에 다시 눌러요'); return; }
  const P = qzCur(), D = qzDuel && qzDuel.started;
  if(k === P.a){
    btn.classList.add('ok');
    if(D){ qzDuel.sc++; qzDuel.i++; qzSendDuel(); if(qzDuel.sc >= 3){ qzDuel.done = Date.now() + srvOff; qzSendDuel(); qzCheckDuel(); } }
    if(!qz.opened){ qz.solved++; if(qz.solved <= 3) qzLamps[qz.solved - 1].material.color.set('#6EE7A8'); if(qz.solved >= QZ_NEED){ qz.opened = true; toast('🎉 3문제 탈출 성공! 문이 열렸어요'); } else toast('정답! 🟢 ' + qz.solved + '/3'); }
    else if(!D) toast('정답! 계속 풀어도 돼요');
    qz.i++; qz.tries = 0; setTimeout(qzRender, 650);
  } else {
    btn.classList.add('no'); btn.disabled = true;
    if(D){ qz.lockT = now + 5000; toast('땡! 5초 동안 못 눌러요'); return; }
    qz.tries++;
    if(qz.tries >= QZ_TRY){ $('#qzMsg').innerHTML = '<b>해설</b> · ' + P.s + ' <br><button type="button" class="btn" id="qzNext">다음 문제 →</button>';
      $('#qzNext').addEventListener('click', () => { qz.i++; qz.tries = 0; qzRender(); }); $('#qzC').querySelectorAll('button').forEach(b => { b.disabled = true; }); }
    else $('#qzMsg').innerHTML = '땡! 기회 ' + (QZ_TRY - qz.tries) + '번 남았어요';
  }
}
// ⚔ 먼저 풀기 대결: 같은 3문제를 동시에 풀고, 3개를 먼저 맞힌 사람이 이겨요
function qzSendDuel(){ qzPres = qzDuel ? { to:qzDuel.opp, seed:qzDuel.seed, n:qzDuel.n, acc:!!qzDuel.acc, st:qzDuel.st || 0, sc:qzDuel.sc || 0, done:qzDuel.done || 0 } : null; lastSent = ''; pushPresence(); }
function qzDuelSheet(){
  if(qzDuel){ qzDuelEnd(); qzRender(); return; }
  const body = showSheet('⚔ 누구랑 대결할까요?'); let n = 0;
  remotes.forEach((r, uid) => { if(r.av.room !== 'quiz') return; n++; const b = el('button', 'quizopt', '⚔ ' + r.av.name); b.type = 'button';
    b.addEventListener('click', () => { $('#spSheet').hidden = true; qzDuel = { opp:uid, seed:(Math.random()*1e9) | 0, n:Date.now(), acc:false, sc:0, i:0 }; qzSendDuel(); toast(r.av.name + '님에게 대결 신청을 보냈어요'); qzRender(); }); body.appendChild(b); });
  if(!n) body.appendChild(el('p', null, '지금 수학 탈출방에 있는 친구가 없어요. 친구가 들어오면 다시 눌러요.'));
}
function qzDuelStart(){ qzDuel.set = qzPick(3, qzDuel.seed); qzDuel.i = 0; qzDuel.sc = 0; qzDuel.started = true; qz.lockT = 0; toast('⚔ 대결 시작! 3문제 먼저 맞히면 승리'); qzSendDuel(); qzRender(); }
function qzDuelEnd(silent){ if(!qzDuel) return; qzDuel = null; qzSendDuel(); if(!silent) toast('대결을 끝냈어요'); }
function qzCheckDuel(){
  if(!qzDuel || !qzDuel.started || qzDuel.res) return; const r = remotes.get(qzDuel.opp), oq = r && r.av.qd;
  const mine = qzDuel.done || 0, theirs = oq && oq.to === myUid && oq.seed === qzDuel.seed ? (oq.done || 0) : 0;
  if(!mine && !theirs) return; if(mine && theirs) qzDuel.res = mine <= theirs ? 'win' : 'lose'; else if(mine) qzDuel.res = 'win'; else qzDuel.res = 'lose';
  const nm = r ? r.av.name : '상대';
  if(qzDuel.res === 'win') toast('🏆 대결 승리! ' + nm + '님 앞에서 L을 가져가~'); else toast('😵 ' + nm + '님이 먼저 풀었어요… L을 가져가야 해요');
  qzWin = { meWin:qzDuel.res === 'win', oppAv:r ? r.av : null, t:0, k:-1 };
  setTimeout(() => { qzDuelEnd(true); qzRender(); }, 9300);
}
function qzPoll(){   // 친구 대결 신청 / 수락 확인
  if(room !== 'quiz') return;
  remotes.forEach((r, uid) => { const q = r.av.qd; if(!q || q.to !== myUid) return;
    if(q.acc && qzDuel && qzDuel.opp === uid && !qzDuel.acc && q.seed === qzDuel.seed){ qzDuel.acc = true; qzDuel.st = q.st; qzSendDuel(); }
    if(!q.acc && !qzDuel && !qzSeenInv[q.n]){ qzSeenInv[q.n] = 1;
      const body = showSheet('⚔ ' + r.av.name + '님의 대결 신청!'); body.appendChild(el('p', null, '같은 3문제를 동시에 풀어요. 먼저 3개 맞히는 사람이 이겨요.'));
      const ok = el('button', 'btn primary', '수락'), no = el('button', 'btn', '거절'); ok.type = no.type = 'button';
      ok.addEventListener('click', () => { $('#spSheet').hidden = true; qzDuel = { opp:uid, seed:q.seed, n:Date.now(), acc:true, st:Date.now() + srvOff + 3500, sc:0, i:0 }; qzSendDuel(); toast('3초 뒤에 시작해요!'); });
      no.addEventListener('click', () => { $('#spSheet').hidden = true; }); body.appendChild(ok); body.appendChild(no); } });
  if(qzDuel && qzDuel.acc && !qzDuel.started && qzDuel.st && Date.now() + srvOff >= qzDuel.st) qzDuelStart();
  if(qzDuel && qzDuel.started){ qzCheckDuel(); const oh = $('#qzHead'); if(oh && !qzDuel.res){ const r = remotes.get(qzDuel.opp), s = r && r.av.qd ? r.av.qd.sc || 0 : 0; if(oh.dataset.o !== String(s)){ oh.dataset.o = s; qzRender(); } } }
}
function qzTie(av, chair, t){   // 의자에 묶인 모습: 앉은 다리 + 뒤로 묶인 팔 + 꿈틀꿈틀
  av.group.position.set(chair.g.position.x, 0, chair.g.position.z); av.group.rotation.y = chair.side > 0 ? Math.PI : 0; av.pose = null;
  av.legs.forEach(l => { l.rotation.set(-Math.PI/2, 0, 0); }); av.arms.forEach((a, i) => { a.rotation.set(0.55, 0, (i ? -1 : 1)*0.18); });
  av.body.position.y = 0; av.body.rotation.set(0, Math.sin(t*2.3 + chair.side)*0.08, Math.sin(t*3.1 + chair.side)*0.05);
}
function qzDance(av, T){   // L을 가져가 → 크림치즈허니 → L을 가져가 → 크리스크로스
  const ph = Math.floor(T/2) % 2, s = Math.sin(T*10), L = av.arms[0], R = av.arms[1];
  if(ph === 0){ R.rotation.set(-0.35, 0, 2.55); L.rotation.set(0, 0, -0.5 - Math.abs(s)*0.5); av.legs[0].rotation.set(-Math.max(0, s)*1.1, 0, 0.12); av.legs[1].rotation.set(-Math.max(0, -s)*1.1, 0, -0.12); av.body.rotation.set(0, s*0.25, 0); av.body.position.y = Math.abs(Math.cos(T*10))*0.08; }
  else { const c = Math.sin(T*8) > 0 ? 1 : -1; av.legs[0].rotation.set(0, 0, 0.32*c); av.legs[1].rotation.set(0, 0, -0.32*c); L.rotation.set(0, 0, 1.2 + s*0.4); R.rotation.set(0, 0, -1.2 - s*0.4); av.body.rotation.set(0, 0, 0); av.body.position.y = Math.abs(Math.sin(T*8))*0.16; }
}
function quizTick(dt){
  const t = performance.now()/1000; cam.t.set(0, 0.9, 0);
  qzView();
  if(qz && qz.opened && qzDoorOpen < 1){ qzDoorOpen = Math.min(1, qzDoorOpen + dt*0.8); qzDoor.position.x = -qzDoorOpen*1.9; }
  (qzScene.userData.floaters || []).forEach(f => { f.sp.position.y = f.y + Math.sin(t + f.ph)*0.15; });
  qzPoll();
  // 나와 (대결 중이면) 상대를 의자에 묶어 두고, 승부가 나면 이긴 사람이 진 사람 앞에서 춤춰요
  me.update(dt);
  const opp = qzDuel && qzDuel.started && remotes.get(qzDuel.opp);
  qzChairs[1].g.visible = !!opp || !!(qzWin && qzWin.oppAv);
  const oppAv = opp ? opp.av : qzWin && qzWin.oppAv;
  if(oppAv){ if(oppAv.group.parent !== qzScene) qzScene.add(oppAv.group); oppAv.group.visible = true; }
  if(qzWin){ qzWin.t += dt; const W = qzWin.meWin ? me : oppAv, Lo = qzWin.meWin ? oppAv : me, lc = qzWin.meWin ? qzChairs[1] : qzChairs[0], wc = qzWin.meWin ? qzChairs[0] : qzChairs[1];
    if(Lo) qzTie(Lo, lc, t);
    if(W){ wc.rope.visible = false; const tx = lc.g.position.x + 0.0, tz = lc.g.position.z + (lc.side > 0 ? -1.1 : 1.1) * -1;
      const fx = lc.g.position.x + 1.25, fz = lc.g.position.z; const u = Math.min(1, qzWin.t/0.8);
      W.group.position.set(wc.g.position.x + (fx - wc.g.position.x)*u, 0, wc.g.position.z + (fz - wc.g.position.z)*u); W.group.rotation.y = -Math.PI/2; W.pose = null;
      if(qzWin.t > 0.8){ const T = qzWin.t - 0.8; qzDance(W, T); const k = Math.floor(T/2); if(k !== qzWin.k && k < 4){ qzWin.k = k; W.say(['L을 가져가~', '크림치즈허니~', 'L을 가져가~', '크리스크로스~'][k]); } } }
    if(qzWin.t > 9.3){ qzWin = null; qzChairs.forEach(c => { c.rope.visible = true; }); qzReleaseOpp(); }
  } else { qzTie(me, qzChairs[0], t); if(oppAv) qzTie(oppAv, qzChairs[1], t); }
}
function qzView(){ const w = window.innerWidth, h = window.innerHeight, card = $('#qzCard'), side = w/h >= 1.25;
  if(side){ const cw = card.offsetWidth + 12; camera.setViewOffset(w, h, -cw/2, 0, w, h); } else { const ch = card.offsetHeight; camera.setViewOffset(w, h, 0, ch/2, w, h); } }
$('#qzExit').addEventListener('click', () => { if(!qz || !qz.opened){ toast('🔒 아직 문이 잠겨 있어요 · 3문제를 맞혀야 나갈 수 있어요'); return; } exitRoom(); });
$('#qzDuel').addEventListener('click', qzDuelSheet);

/* ===== 🐾 펫: 공부 30분이면 알이 부화 (랜덤), 누적 5·10·15시간마다 진화 ===== */
const PET_SP = {
  dragon:{ n:['아기드래곤', '꼬마드래곤', '불꽃드래곤', '우주드래곤'], c:['#7ED36A', '#4FB257', '#FF7A3D', '#7A5CFF'], e:'🐉' },
  whale:{ n:['아기고래', '꼬마고래', '푸른고래', '은하고래'], c:['#9FDBFF', '#5CB0E6', '#2C6FD1', '#3A2A8A'], e:'🐋' },
  fox:{ n:['아기여우', '꼬마여우', '은빛여우', '구미호'], c:['#FFB070', '#FF8A3D', '#E8EEF6', '#FFE7A0'], e:'🦊' },
  penguin:{ n:['아기펭귄', '꼬마펭귄', '얼음펭귄', '오로라펭귄'], c:['#9AA3B5', '#3A3F58', '#2A3F6A', '#1B2A55'], e:'🐧' }
};
const PET_BS = [0.6, 1.0, 1.6, 2.3], RIDE_K = [1.6, 2.2, 3.0, 3.8];   // 단계마다 점점 커져요 · 탈 때 크기
const PET_FOOT = { dragon:0.44, fox:0.44, penguin:0.41, whale:0 };   // 몸 가운데에서 발바닥까지
const rideLift = (st, sp) => (PET_FOOT[sp] ? 0.3 + PET_FOOT[sp] : 0.62)*RIDE_K[st] - 0.35;
const PET_FLY = { dragon:1, whale:1, penguin:1 };
const PET_SKILL = { dragon:'🔥 타면 하늘을 날아요. 불꽃드래곤부터 불꽃 꼬리를 남겨요', whale:'🫧 타면 하늘을 헤엄치듯 날아요. 물방울을 뿌려요', fox:'❄ 공중에 얼음 발판을 만들며 달려요. 건물도 훌쩍 뛰어넘어요', penguin:'🛷 섬 위에서는 배로 쭉 미끄러지며 제일 빨라요. 섬 밖으로 나가면 오로라를 뿌리며 날아요' };
const PET_HATCH = 1800, PET_EVO = [0, 5*3600, 10*3600, 15*3600];   // 부화 30분, 진화 5·10·15시간
let petData = null, petBaseSec = null, petLastStage = -1;
const galaxyTex = (() => { let tx = null; return () => { if(tx) return tx; const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'), g = x.createLinearGradient(0, 0, 128, 128);
  g.addColorStop(0, '#1B1250'); g.addColorStop(0.5, '#4A2A9A'); g.addColorStop(1, '#0E2A6A'); x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  for(let i=0;i<140;i++){ x.fillStyle = ['#FFFFFF', '#BFD9FF', '#FFE7A0', '#FFB5E8'][i % 4]; x.globalAlpha = Math.random()*0.9 + 0.1; x.fillRect(Math.random()*128, Math.random()*128, i % 9 ? 1.2 : 2.5, i % 9 ? 1.2 : 2.5); }
  tx = new THREE.CanvasTexture(c); return tx; }; })();
function makePet(sp, st){   // 종류·단계별 귀여운 펫 모양 (머리 = +z)
  const g = new THREE.Group(); g.rotation.order = 'YXZ'; const body = new THREE.Group(); g.add(body); const S = PET_SP[sp] || PET_SP.dragon, col = S.c[st] || S.c[0];
  const M = (c, o) => new THREE.MeshLambertMaterial(Object.assign({ color:c }, o || {}));
  const legend = st >= 3, bm = legend && (sp === 'whale' || sp === 'dragon') ? new THREE.MeshLambertMaterial({ map:galaxyTex(), emissive:'#2A1A6A' }) : M(col);
  const eye = (x, y, z, r) => { addM(body, new THREE.SphereGeometry(r, 10, 8), Gm('#14162A'), x, y, z); addM(body, new THREE.SphereGeometry(r*0.35, 6, 4), Gm('#FFFFFF'), x + r*0.3, y + r*0.35, z + r*0.6); };
  const parts = { wings:[], tails:[] };
  if(sp === 'whale'){
    const b = addM(body, new THREE.SphereGeometry(0.42, 18, 14), bm, 0, 0, 0); b.scale.set(0.9, 0.75, 1.35);
    addM(body, new THREE.SphereGeometry(0.36, 16, 10), M(legend ? '#C9B8FF' : '#EAF6FF'), 0, -0.12, 0.1).scale.set(0.8, 0.55, 1.15);
    eye(0.22, 0.06, 0.38, 0.05); eye(-0.22, 0.06, 0.38, 0.05);
    const tail = new THREE.Group(); tail.position.z = -0.55; body.add(tail); parts.tails.push(tail);
    [-1, 1].forEach(s => { const f = addM(tail, new THREE.BoxGeometry(0.3, 0.04, 0.18), bm, s*0.16, 0.05, -0.08); f.rotation.y = s*0.4; });
    [-1, 1].forEach(s => { const fin = addM(body, new THREE.BoxGeometry(0.22, 0.03, 0.12), bm, s*0.34, -0.12, 0.08); fin.rotation.z = -s*0.5; parts.wings.push(fin); });
    if(st >= 1){ const sp2 = addM(body, new THREE.CylinderGeometry(0.02, 0.06, 0.18, 6), M('#BFF0FF', { transparent:true, opacity:0.7 }), 0, 0.38, 0.15); parts.spout = sp2; }
  } else if(sp === 'dragon'){   // 🐉 날렵한 서양 드래곤: 긴 목·뿔·박쥐 날개·가시 꼬리
    const P = [{ bd:'#5DBF52', bl:'#FFE7A0', mem:'#A8EC8A', hn:'#FFF4D6', ey:'#FFE27A', sp:'#E8F7C8' }, { bd:'#2E8F44', bl:'#F2DA86', mem:'#6CCB6A', hn:'#EDE3C8', ey:'#FFD34D', sp:'#BFF59A' },
      { bd:'#D9432A', bl:'#FFC46A', mem:'#FF8A3C', hn:'#2A1A1A', ey:'#FFE27A', sp:'#2A1A1A' }, { bd:'#5A3CC8', bl:'#C9B8FF', mem:'#7A5CFF', hn:'#E2D6FF', ey:'#CFF6FF', sp:'#CFC2FF' }][st] || {};
    const bdM = legend ? bm : M(P.bd), dk = M(legend ? '#3A2A8A' : st >= 2 ? '#8A2A1A' : '#2A6A34');
    addM(body, new THREE.SphereGeometry(0.3, 20, 16), bdM, 0, 0, 0).scale.set(0.88, 0.8, 1.38);   // 몸통
    addM(body, new THREE.SphereGeometry(0.2, 16, 12), M(P.bl), 0, -0.07, 0.1).scale.set(0.9, 0.62, 1.7); // 배
    { const a0 = new THREE.Vector3(0, 0.1, 0.28), a1 = new THREE.Vector3(0, 0.47, 0.6), v = a1.clone().sub(a0), nk = addM(body, new THREE.CylinderGeometry(0.085, 0.15, v.length(), 14), bdM, (a0.x + a1.x)/2, (a0.y + a1.y)/2, (a0.z + a1.z)/2);   // 매끈한 목
      nk.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.normalize()); addM(body, new THREE.SphereGeometry(0.15, 14, 10), bdM, a0.x, a0.y, a0.z);
      const nb = addM(body, new THREE.CylinderGeometry(0.05, 0.09, 0.44, 10), M(P.bl), 0, 0.27, 0.48); nb.quaternion.copy(nk.quaternion); }   // 목 앞 비늘
    const hd = new THREE.Group(); hd.position.set(0, 0.56, 0.66); body.add(hd); parts.head = hd;
    addM(hd, new THREE.SphereGeometry(0.16, 16, 12), bdM, 0, 0, 0).scale.set(1, 0.85, 1.05);
    addM(hd, new THREE.SphereGeometry(0.11, 14, 10), bdM, 0, -0.03, 0.15).scale.set(0.9, 0.62, 1.45);    // 주둥이
    addM(hd, new THREE.SphereGeometry(0.09, 12, 8), M(P.bl), 0, -0.09, 0.12).scale.set(0.85, 0.4, 1.4);  // 아래턱
    [-1, 1].forEach(sd => {
      addM(hd, new THREE.SphereGeometry(0.045, 10, 8), Gm(P.ey), sd*0.085, 0.04, 0.1);                    // 빛나는 눈
      addM(hd, new THREE.BoxGeometry(0.012, 0.055, 0.01), Gm('#14100A'), sd*0.09, 0.04, 0.142);           // 세로 동공
      const br = addM(hd, new THREE.BoxGeometry(0.09, 0.025, 0.05), dk, sd*0.08, 0.085, 0.09); br.rotation.z = sd*0.35;   // 눈썹뼈
      addM(hd, new THREE.SphereGeometry(0.014, 6, 4), Gm('#14100A'), sd*0.04, 0.0, 0.31);                 // 콧구멍
      const h1 = new THREE.Group(); h1.position.set(sd*0.07, 0.1, -0.06); h1.rotation.set(-0.9, 0, sd*0.25); hd.add(h1);   // 뒤로 휜 뿔
      addM(h1, new THREE.ConeGeometry(0.035 + st*0.006, 0.16 + st*0.05, 7), M(P.hn), 0, 0.08 + st*0.025, 0); const h2 = addM(h1, new THREE.ConeGeometry(0.02, 0.1 + st*0.03, 6), M(P.hn), 0, 0.2 + st*0.06, -0.04); h2.rotation.x = -0.6;
      addM(hd, new THREE.ConeGeometry(0.02, 0.07, 4), M(P.hn), sd*0.13, 0.0, -0.06).rotation.set(-1.2, 0, -sd*0.9);   // 볼 가시
      addM(hd, new THREE.ConeGeometry(0.012, 0.035, 4), Gm('#FFFFFF'), sd*0.05, -0.06, 0.25).rotation.x = Math.PI;      // 송곳니
    });
    for(let i=0;i<7;i++){ const z = 0.52 - i*0.15, y = (i < 2 ? 0.44 - i*0.15 : 0.2 - (i - 2)*0.02);   // 등 가시
      addM(body, new THREE.ConeGeometry(0.035, 0.09 + (i > 1 && i < 5 ? 0.04 : 0) + st*0.015, 5), M(P.sp), 0, y + 0.05, z).rotation.x = -0.45; }
    [-1, 1].forEach(sd => {   // 박쥐 날개 (뼈 + 막)
      const w0 = new THREE.Group(); w0.position.set(sd*0.2, 0.18, 0.08); w0.userData.s = sd; body.add(w0); parts.wings.push(w0); const w = new THREE.Group(); w.rotation.set(-0.25, -sd*0.35, sd*0.6); w0.add(w);
      const W = 0.62 + st*0.16, sh = new THREE.Shape(); sh.moveTo(0, 0); sh.lineTo(W*0.55, 0.32*W); sh.lineTo(W, 0.12*W); sh.quadraticCurveTo(W*0.82, -0.08*W, W*0.78, -0.3*W);
      sh.quadraticCurveTo(W*0.6, -0.12*W, W*0.48, -0.36*W); sh.quadraticCurveTo(W*0.36, -0.14*W, W*0.2, -0.32*W); sh.quadraticCurveTo(W*0.12, -0.12*W, 0, -0.16*W); sh.lineTo(0, 0);
      const mem = addM(w, new THREE.ShapeGeometry(sh, 6), M(P.mem, { side:THREE.DoubleSide, transparent:true, opacity:legend ? 0.85 : 0.95, emissive:new THREE.Color(P.mem).multiplyScalar(0.45) }), 0, 0, 0); mem.rotation.x = Math.PI/2 - 0.15; if(sd < 0) mem.scale.x = -1;
      [[W*0.55, 0.32*W], [W, 0.12*W], [W*0.78, -0.3*W], [W*0.48, -0.36*W], [W*0.2, -0.32*W]].forEach(([x, y]) => { const v = new THREE.Vector3(sd*x, Math.sin(0.15)*y, Math.cos(0.15)*y), L = v.length(), bn = addM(w, new THREE.CylinderGeometry(0.01, 0.022, L, 5), dk, v.x/2, v.y/2 + 0.012, v.z/2); bn.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.clone().normalize()); });
      addM(w, new THREE.ConeGeometry(0.02, 0.07, 4), M(P.hn), sd*W*0.55, 0.05*W, 0.32*W).rotation.z = -sd*Math.PI/2; });
    const tl = []; let par = body;   // 마디 꼬리 (물결치듯 움직여요)
    for(let i=0;i<5;i++){ const t2 = new THREE.Group(); t2.position.set(0, i ? 0 : -0.02, i ? -0.15 : -0.36); par.add(t2); par = t2; tl.push(t2); parts.tails.push(t2);
      addM(t2, new THREE.SphereGeometry(0.11 - i*0.018, 12, 8), bdM, 0, 0, -0.07).scale.set(1, 0.85, 1.5); if(i % 2 === 0) addM(t2, new THREE.ConeGeometry(0.025, 0.07, 4), M(P.sp), 0, 0.08 - i*0.012, -0.07).rotation.x = -0.4; }
    { const tip = addM(par, new THREE.OctahedronGeometry(0.09 + st*0.02, 0), M(st >= 2 ? P.ey : P.sp), 0, 0, -0.2); tip.scale.set(1.2, 0.35, 1.5); }   // 스페이드 꼬리 끝
    if(st >= 2) parts.fire = true;
  } else if(sp === 'fox'){
    addM(body, new THREE.SphereGeometry(0.28, 16, 12), M(col), 0, 0, 0).scale.set(0.95, 0.9, 1.2);
    addM(body, new THREE.SphereGeometry(0.24, 16, 12), M(col), 0, 0.26, 0.2); addM(body, new THREE.SphereGeometry(0.12, 10, 8), M('#FFFFFF'), 0, 0.2, 0.38).scale.set(1, 0.8, 1.2);
    addM(body, new THREE.SphereGeometry(0.03, 6, 4), Gm('#14162A'), 0, 0.22, 0.5);
    eye(0.09, 0.32, 0.38, 0.04); eye(-0.09, 0.32, 0.38, 0.04);
    [-1, 1].forEach(s => addM(body, new THREE.ConeGeometry(0.08, 0.2, 4), M(col), s*0.13, 0.5, 0.18).rotation.z = -s*0.25);
    const nT = st >= 3 ? 9 : st >= 2 ? 3 : 1;
    for(let k=0;k<nT;k++){ const tail = new THREE.Group(); tail.position.set(0, 0.02, -0.28); tail.rotation.y = (k - (nT - 1)/2)*0.22; body.add(tail); parts.tails.push(tail);
      addM(tail, new THREE.SphereGeometry(0.12, 10, 8), M(legend ? '#FFE7A0' : col, legend ? { emissive:'#6A4A00' } : {}), 0, 0.1, -0.22).scale.set(0.8, 0.8, 1.9); addM(tail, new THREE.SphereGeometry(0.07, 8, 6), M('#FFFFFF'), 0, 0.14, -0.45); }
  } else {   // penguin
    addM(body, new THREE.SphereGeometry(0.3, 16, 12), M(col), 0, 0, 0).scale.set(1, 1.2, 0.95);
    addM(body, new THREE.SphereGeometry(0.24, 14, 10), M('#FFFFFF'), 0, -0.04, 0.1).scale.set(0.9, 1.1, 0.8);
    addM(body, new THREE.SphereGeometry(0.22, 14, 10), M(col), 0, 0.36, 0.02);
    eye(0.08, 0.4, 0.19, 0.04); eye(-0.08, 0.4, 0.19, 0.04);
    addM(body, new THREE.ConeGeometry(0.05, 0.12, 6), M('#FFB020'), 0, 0.34, 0.24).rotation.x = Math.PI/2;
    [-1, 1].forEach(s => { const f = addM(body, new THREE.BoxGeometry(0.06, 0.26, 0.14), M(col), s*0.3, 0.0, 0); f.rotation.z = s*0.3; parts.wings.push(f); });
    if(st >= 2) addM(body, new THREE.TorusGeometry(0.12, 0.025, 6, 16), M('#FFD34D', { emissive:'#6A5000' }), 0, 0.6, 0).rotation.x = Math.PI/2;
  }
  if(legend){   // 전설 단계: 반짝이는 별가루
    const N = 18, pos = new Float32Array(N*3); for(let i=0;i<N*3;i++) pos[i] = (Math.random() - 0.5)*1.1;
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    parts.stars = new THREE.Points(pg, new THREE.PointsMaterial({ color:sp === 'fox' ? '#FFE7A0' : '#CFC2FF', size:0.06, transparent:true, opacity:0.9, depthWrite:false })); body.add(parts.stars);
    addM(body, new THREE.SphereGeometry(0.62, 14, 10), new THREE.MeshBasicMaterial({ color:sp === 'fox' ? '#FFD34D' : '#9A7CFF', transparent:true, opacity:0.1, depthWrite:false }), 0, 0.1, 0);
  }
  petCool(sp, st, body, parts, M);
  body.scale.setScalar(PET_BS[st] || 1);
  g.userData.parts = parts; g.userData.body = body; return g;
}
function petCool(sp, st, body, parts, M){   // 진화할수록 멋져지는 장식
  const glow = c => new THREE.MeshBasicMaterial({ color:c }), S = PET_SP[sp], col = S.c[st] || S.c[0];
  // 🦵 다리: 걸어다녀요
  parts.legs = []; const leg = (x, z, len, r, c, paw, ph) => { const g = new THREE.Group(); g.position.set(x, -0.1, z); body.add(g);
    addM(g, new THREE.CylinderGeometry(r, r*0.85, len, 8), M(c), 0, -len/2, 0); addM(g, new THREE.SphereGeometry(r*1.25, 10, 8), M(paw), 0, -len, r*0.35).scale.set(1, 0.6, 1.3); g.userData.ph = ph; parts.legs.push(g); return g; };
  const bodyC = sp === 'dragon' ? ['#5DBF52', '#2E8F44', '#D9432A', '#5A3CC8'][st] : col;
  if(sp === 'dragon'){ [[0.17, 0.15, 0], [-0.17, 0.15, Math.PI], [0.17, -0.15, Math.PI], [-0.17, -0.15, 0]].forEach(([x, z, ph]) => { const g = leg(x, z, 0.26, 0.075, bodyC, ['#3E9A3A', '#1F6A30', '#8A2A1A', '#3A2A8A'][st], ph);
      for(let k=-1;k<=1;k++) addM(g, new THREE.ConeGeometry(0.02, 0.06, 4), M('#FFFFFF'), k*0.04, -0.27, 0.1).rotation.x = Math.PI/2; });
  }
  else if(sp === 'fox'){ const paw = st >= 2 ? '#FFFFFF' : '#3A2A20';
    [[0.12, 0.17, 0], [-0.12, 0.17, Math.PI], [0.12, -0.15, Math.PI], [-0.12, -0.15, 0]].forEach(([x, z, ph]) => leg(x, z, 0.28, 0.045, col, paw, ph));
    [-1, 1].forEach(s => { addM(body, new THREE.ConeGeometry(0.045, 0.12, 4), M('#FFD6E0'), s*0.13, 0.49, 0.2).rotation.z = -s*0.25;
      addM(body, new THREE.SphereGeometry(0.035, 8, 6), M('#FF9AB0', { transparent:true, opacity:0.7 }), s*0.13, 0.24, 0.36).scale.set(1, 0.6, 0.4); }); }
  else if(sp === 'penguin'){ [[0.1, 0], [-0.1, Math.PI]].forEach(([x, ph]) => { const g = new THREE.Group(); g.position.set(x, -0.34, 0.06); body.add(g); addM(g, new THREE.SphereGeometry(0.075, 10, 6), M('#FFB020'), 0, -0.03, 0.04).scale.set(1, 0.4, 1.5); g.userData.ph = ph; parts.legs.push(g); });
    [-1, 1].forEach(s => addM(body, new THREE.SphereGeometry(0.035, 8, 6), M('#FF9AB0', { transparent:true, opacity:0.7 }), s*0.13, 0.33, 0.17).scale.set(1, 0.6, 0.4)); parts.waddle = true; }
  else if(sp === 'whale'){ [-1, 1].forEach(s => addM(body, new THREE.SphereGeometry(0.04, 8, 6), M('#FF9AB0', { transparent:true, opacity:0.6 }), s*0.27, -0.04, 0.38).scale.set(0.6, 0.6, 0.4));
    addM(body, new THREE.TorusGeometry(0.075, 0.012, 4, 14, Math.PI), Gm('#3A2030'), 0, -0.06, 0.53).rotation.z = Math.PI; }
  if(sp === 'dragon'){
    if(st >= 2) addM(body, new THREE.OctahedronGeometry(0.055, 0), glow(st >= 3 ? '#B9A6FF' : '#FFE27A'), 0, 0.08, 0.5);   // 가슴 보석
    if(st >= 3 && parts.head){ const cr = new THREE.Group(); cr.position.set(0, 0.17, -0.02); parts.head.add(cr); for(let i=0;i<5;i++){ const a = (i - 2)*0.4; addM(cr, new THREE.OctahedronGeometry(0.035, 0), glow('#CFC2FF'), Math.sin(a)*0.1, Math.cos(a)*0.03, -Math.abs(a)*0.04).scale.y = 2.2; } parts.crown = cr; }
  } else if(sp === 'whale'){
    if(st >= 2) for(let i=0;i<3;i++) addM(body, new THREE.BoxGeometry(0.5 - i*0.08, 0.02, 0.03), glow(st >= 3 ? '#FFB5E8' : '#7FE8FF'), 0, -0.24, 0.25 - i*0.14);
    if(st >= 1) addM(body, new THREE.ConeGeometry(0.08, 0.18, 6), M(st >= 2 ? '#7FE8FF' : '#BFE6FF'), 0, 0.3, -0.15).rotation.x = -0.6;
    if(st >= 3){ const ring = addM(body, new THREE.TorusGeometry(0.7, 0.02, 6, 40), new THREE.MeshBasicMaterial({ color:'#CFC2FF', transparent:true, opacity:0.7 }), 0, 0, 0); ring.rotation.x = 1.2; parts.ring = ring; }
  } else if(sp === 'fox'){
    if(st >= 1) addM(body, new THREE.TorusGeometry(0.17, 0.045, 8, 18), M(st >= 3 ? '#4A6AFF' : '#E8352E'), 0, 0.12, 0.22).rotation.x = 1.2;
    if(st >= 2){ addM(body, new THREE.OctahedronGeometry(0.05, 0), glow('#BFF0FF'), 0, 0.44, 0.36).scale.y = 1.6; [-1, 1].forEach(s => addM(body, new THREE.ConeGeometry(0.035, 0.12, 4), glow('#BFF0FF'), s*0.13, 0.62, 0.18)); }
    if(st >= 3){ const orbs = new THREE.Group(); body.add(orbs); for(let i=0;i<3;i++){ const o = addM(orbs, new THREE.SphereGeometry(0.06, 8, 6), glow('#7FD8FF'), Math.cos(i*2.09)*0.55, 0.3, Math.sin(i*2.09)*0.55); addM(o, new THREE.ConeGeometry(0.05, 0.14, 6), glow('#BFF0FF'), 0, 0.08, 0); } parts.orbs = orbs; }
  } else if(sp === 'penguin'){
    if(st >= 1) addM(body, new THREE.TorusGeometry(0.19, 0.05, 8, 18), M(st >= 2 ? '#5CE1E6' : '#E8352E'), 0, 0.2, 0).rotation.x = Math.PI/2;
    if(st >= 2) [-1, 1].forEach(s => addM(body, new THREE.TorusGeometry(0.045, 0.012, 6, 12), glow('#BFF0FF'), s*0.08, 0.41, 0.2));
    if(st >= 3){ const cape = new THREE.Group(); cape.position.set(0, 0.22, -0.2); body.add(cape);
      [['#7AF0C8', -0.12], ['#B48CFF', 0], ['#5CB0FF', 0.12]].forEach(([c, x]) => addM(cape, new THREE.PlaneGeometry(0.14, 0.5), new THREE.MeshBasicMaterial({ color:c, transparent:true, opacity:0.75, side:THREE.DoubleSide }), x, -0.22, -0.02*Math.abs(x)*10)); parts.cape = cape; }
  }
}
function makeEgg(){ const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  addM(body, new THREE.SphereGeometry(0.25, 16, 12), new THREE.MeshLambertMaterial({ color:'#FFF6E0' }), 0, 0.05, 0).scale.set(0.85, 1.1, 0.85);
  [['#FF7C93', 0.1], ['#5CE1E6', -0.05], ['#FFC93C', 0.18]].forEach(([c, y], i) => addM(body, new THREE.SphereGeometry(0.045, 8, 6), Lm(c), Math.cos(i*2.1)*0.2, y, Math.sin(i*2.1)*0.2));
  g.userData.body = body; g.userData.parts = { egg:true }; return g; }
function petStage(sec){ return sec >= PET_EVO[3] ? 3 : sec >= PET_EVO[2] ? 2 : sec >= PET_EVO[1] ? 1 : 0; }
function mySecTotal(){ return petBaseSec == null ? null : petBaseSec + (me ? me.total || 0 : 0); }
let amOwner = false;
function myPetSpec(){ if(!petData) return null; if(petData.sp === 'egg') return { sp:'egg', st:0, nm:'' }; const s = mySecTotal(); return { sp:petData.sp, st:petStage(s || 0), nm:(petData.nm || '').slice(0, 8) }; }
function petSave(){ store.set('class8-pet', petData); if(rtdb && isleMine && petData) rtdb.ref('isles/' + isleMine + '/pet').set(petData).catch(() => {}); lastSent = ''; pushPresence(); }
function petInit(){   // 로그인하면 내 펫 불러오기 (섬에 저장된 게 있으면 그걸로)
  petData = store.get('class8-pet', null) || { sp:'egg', at:Date.now() };
  if(!rtdb || !myUid){ petBaseSec = 0; return; }
  rtdb.ref('days/' + myUid).once('value').then(s => { const v = s.val() || {}; let sum = 0; Object.keys(v).forEach(k => { if(k !== todayKey) sum += num(v[k] && v[k].t, 0, 86400, 0); }); petBaseSec = sum; }).catch(() => { petBaseSec = 0; });
  rtdb.ref('isles').once('value').then(s => { const all = s.val() || {}; Object.keys(all).forEach(id => { const d = all[id], p = d && d.owner === myUid && d.pet; if(p && (PET_SP[p.sp] || (p.sp === 'egg' && petData.sp === 'egg'))){ petData = p; store.set('class8-pet', petData); } }); }).catch(() => {});
}
function petApply(av, spec){   // 아바타에 펫 붙이기/바꾸기
  const key = spec ? spec.sp + ':' + spec.st : '';
  if(av.petKey === key) return; av.petKey = key;
  if(av.petObj){ av.petObj.parent && av.petObj.parent.remove(av.petObj); av.petObj = null; }
  av.petSp = spec ? spec.sp : ''; av.petSt = spec ? spec.st : 0;
  if(!spec) return; av.petObj = spec.sp === 'egg' ? makeEgg() : makePet(spec.sp, spec.st); av.group.add(av.petObj); av.petT = Math.random()*6;
}
function petTick(av, dt){
  const p = av.petObj; if(!p) return; av.petT = (av.petT || 0) + dt; const t = av.petT, parts = p.userData.parts, body = p.userData.body;
  const par = av.group.parent, inClass = par === scene, inIsle = par && par.userData && par.userData.stage;
  const sit = av.mode === 'sit' && inClass;
  let sc = (inClass ? 0.42 : 0.55)*[1, 0.75, 0.5, 0.36][av.petSt || 0];
  if(parts.ring) parts.ring.rotation.z += dt*0.8; if(parts.orbs) parts.orbs.rotation.y += dt*2.2; if(parts.cape) parts.cape.rotation.x = 0.25 + Math.sin(t*5)*0.15; if(parts.crown) parts.crown.rotation.y = Math.sin(t*1.5)*0.2;
  if(av.ride && inIsle && !parts.egg){ petRidePose(av, p, body, parts, t); return; }
  const fs = inIsle ? 1 : [1, 0.85, 0.65, 0.5][av.petSt || 0], bs = (parts.egg ? 1 : PET_BS[av.petSt || 0])*fs, foot = PET_FOOT[av.petSp] || 0;
  const follow = !parts.egg && !sit && (inClass || inIsle || par === lobbyScene);
  let walk = false;
  if(follow){   // 🐾 주인 옆을 따라 걸어다녀요
    if(p.parent !== par){ par.add(p); av.petP = null; }
    const ry = av.group.rotation.y, ox = 0.85 + bs*0.25, oz = -0.55 - bs*0.2, tx = av.pos.x + ox*Math.cos(ry) + oz*Math.sin(ry), tz = av.pos.z - ox*Math.sin(ry) + oz*Math.cos(ry);
    if(!av.petP || Math.hypot(av.petP.x - tx, av.petP.z - tz) > 9){ av.petP = { x:tx, z:tz, ry }; }
    const P = av.petP, dx = tx - P.x, dz = tz - P.z, dl = Math.hypot(dx, dz);
    if(dl > 0.15){ const v = Math.min(dl, (1.6 + dl*2.4)*dt); P.x += dx/dl*v; P.z += dz/dl*v; walk = v/dt > 0.6; const h = Math.atan2(dx, dz); let dd = h - P.ry; dd = Math.atan2(Math.sin(dd), Math.cos(dd)); P.ry += dd*Math.min(1, dt*8); }
    else { let dd = ry - P.ry; dd = Math.atan2(Math.sin(dd), Math.cos(dd)); P.ry += dd*Math.min(1, dt*3); }
    const gy = inIsle ? (av === me ? me.isleY || 0 : av.isleY || 0) : 0;
    p.position.set(P.x, gy + (foot ? foot*bs : 0.55 + bs*0.25 + Math.sin(t*1.6)*0.1), P.z); p.rotation.set(0, P.ry, 0);
    body.position.y = walk && foot ? Math.abs(Math.sin(t*11))*0.035 : 0;
    if(parts.waddle){ body.rotation.z = walk ? Math.sin(t*11)*0.12 : 0;
      if(dl > 1.4){ p.rotation.set(1.3, P.ry, 0); p.position.y = gy + 0.32*bs; body.rotation.z = 0; walk = false; if(Math.random() < dt*10) puff(P.x, gy + 0.15, P.z, '#FFFFFF', 0.5); } }
  } else {
    if(p.parent !== av.group){ av.group.add(p); av.petP = null; }
    if(sit){ sc *= [1, 0.8, 0.6, 0.48][av.petSt || 0]; p.position.set(0.28, 0.78 + foot*PET_BS[av.petSt || 0]*sc, 0.62); body.position.y = Math.abs(Math.sin(t*2))*0.03; p.rotation.set(0, Math.PI + 0.4, 0); }   // 책상 위에 올라가 있어요
    else { p.position.set(0.55, 1.25 + Math.sin(t*2)*0.08, -0.25); body.position.y = 0; p.rotation.set(0, Math.sin(t*0.7)*0.3, 0); } }
  p.scale.setScalar(follow ? fs : sc);
  if(parts.legs) parts.legs.forEach(g => { g.rotation.x = walk ? Math.sin(t*11 + g.userData.ph)*0.7 : 0; });
  if(parts.egg){ body.rotation.z = Math.sin(t*6)*0.12*(Math.sin(t*0.9) > 0.6 ? 1 : 0.2); return; }
  parts.wings.forEach((w, i) => { if(w.userData.s) w.rotation.z = w.userData.s*(0.3 + Math.sin(t*9)*0.5); else w.rotation.z = (i ? -1 : 1)*(0.4 + Math.sin(t*6)*0.3); });
  parts.tails.forEach((tl, i) => { tl.rotation.x = Math.sin(t*4 + i*0.4)*0.25; if(parts.tails.length > 1) tl.rotation.z = Math.sin(t*3 + i)*0.15; });
  if(parts.spout){ parts.spout.scale.y = 0.6 + Math.abs(Math.sin(t*1.5))*0.8; }
  if(parts.stars){ parts.stars.rotation.y += dt*0.8; }
}
function petRidePose(av, p, body, parts, t){   // 펫을 타고 있을 때: 펫이 커지고 그 위에 걸터앉아요
  if(p.parent !== av.group){ av.group.add(p); av.petP = null; }
  const st = av.petSt || 0, K = RIDE_K[st], fly = PET_FLY[av.petSp] && !(av === me && me.rideSlide), fast = av.mode === 'walk' || av === me && me.rideMv;
  if(parts.legs) parts.legs.forEach(g => { g.rotation.x = fly ? 0.9 : fast ? Math.sin(t*13 + g.userData.ph)*0.9 : 0; });
  p.scale.setScalar(K/(PET_BS[st] || 1)); p.position.set(0, 0.35 - 0.3*K, (av.petSp === 'penguin' ? 0.05 : 0.12)*K);
  const vyr = Math.max(-1, Math.min(1, (av.rideVy || 0)/12));
  p.rotation.set(av.petSp === 'penguin' && !fly ? 1.35 : av.petSp === 'penguin' ? 1.1 : av.petSp === 'dragon' ? -vyr*0.55 + (fast ? 0.1 : 0) : av.petSp === 'whale' ? Math.sin(t*(fast ? 4 : 2))*(fast ? 0.14 : 0.06) : fly && fast ? -0.12 : 0, 0, av.petSp === 'whale' && fast ? Math.sin(t*2)*0.08 : 0); body.position.y = 0;
  parts.wings.forEach((w, i) => { const sp2 = fly ? (fast ? 14 : 7) : 9; if(w.userData.s) w.rotation.z = w.userData.s*(0.3 + Math.sin(t*sp2)*0.7); else w.rotation.z = (i ? -1 : 1)*(0.5 + Math.sin(t*sp2)*0.45); });
  parts.tails.forEach((tl, i) => { tl.rotation.x = Math.sin(t*(fast ? 9 : 4) + i*0.4)*0.3; if(parts.tails.length > 1) tl.rotation.z = Math.sin(t*3 + i)*0.18; });
  if(parts.stars) parts.stars.rotation.y += 0.02;
  // 걸터앉은 자세
  av.legs[0].rotation.set(-1.25, 0, 0.55); av.legs[1].rotation.set(-1.25, 0, -0.55); av.arms[0].rotation.set(-0.9, 0, 0.25); av.arms[1].rotation.set(-0.9, 0, -0.25);
  av.body.rotation.x = fast ? 0.15 : 0; av.body.position.y = 0;
}
function petTickAll(dt){
  if(demoMode || PETS_OFF){ if(me) petApply(me, null); remotes.forEach(r => petApply(r.av, null)); return; }   // 시연 모드: 펫 숨김 (공부 시간으로 크는 건 그대로)
  if(me){ const spec = myPetSpec(); petApply(me, spec);
    if(spec && spec.sp !== 'egg' && petLastStage >= 0 && spec.st > petLastStage){ toast('✨ ' + (petData.nm || PET_SP[spec.sp].n[spec.st - 1]) + '이(가) ' + PET_SP[spec.sp].n[spec.st] + '(으)로 진화했어요!'); lastSent = ''; pushPresence(); }
    if(spec) petLastStage = spec.sp === 'egg' ? -1 : spec.st; petTick(me, dt); }
  remotes.forEach(r => { petApply(r.av, r.av.pet || null); petTick(r.av, dt); });
}
function lookSheet(){
  if(!me) return; const body = showSheet('👕 캐릭터 꾸미기'), L = lookParse(myLook);
  const sv = { yaw:cam.yaw, pitch:cam.pitch, dist:cam.dist }; cam.yaw = me.group.rotation.y; cam.pitch = 0.14; cam.dist = Math.max(camLim.dmin, 4.4);
  $('#spSheet').classList.add('lookmode'); const wide = window.innerWidth > 700; if(wide) camera.setViewOffset(window.innerWidth, window.innerHeight, -228, 0, window.innerWidth, window.innerHeight); else cam.t.y += 0.6;
  body.appendChild(el('p', null, '고르면 바로 내 캐릭터에 입혀져요. 친구들 화면에도 똑같이 보여요!'));
  const save = () => { myLook = lookStr(L); store.set('class8-look', myLook); me.applyLook(myLook); lastSent = ''; pushPresence(); };
  LOOK_K.forEach(k => { const D = LOOK[k]; body.appendChild(el('div', 'look-sec', D.n)); const row = el('div', 'look-row');
    D.o.forEach((o, i) => { const sw = k === 's' || k === 'p', b = el('button', (sw ? 'sw' : '') + (L[k] === i ? ' on' : ''), sw ? '' : o); b.type = 'button'; if(sw){ const ii = el('i'); ii.style.background = o; b.appendChild(ii); }
      b.addEventListener('click', () => { L[k] = i; row.querySelectorAll('button').forEach(x => x.classList.remove('on')); b.classList.add('on'); save(); }); row.appendChild(b); }); body.appendChild(row); });
  [['머리색', HAIR_ALL, 'hair'], ['옷 색', SHIRT_ALL, 'shirt']].forEach(([nm, pal, key]) => { body.appendChild(el('div', 'look-sec', nm)); const row = el('div', 'look-row');
    pal.forEach(c => { const b = el('button', 'sw' + (me[key] === c ? ' on' : '')); b.type = 'button'; const ii = el('i'); ii.style.background = c; b.appendChild(ii);
      b.addEventListener('click', () => { me[key] = c; if(key === 'shirt') me.shirtM.color.set(c); row.querySelectorAll('button').forEach(x => x.classList.remove('on')); b.classList.add('on'); choice[key] = c; { const sv2 = store.get('class8-avatar', {}) || {}; sv2[key] = c; store.set('class8-avatar', sv2); } me.lookK = ''; save(); }); row.appendChild(b); }); body.appendChild(row); });
  const done = el('button', 'btn primary', '완료'); done.type = 'button'; done.addEventListener('click', () => { $('#spSheet').hidden = true; }); body.appendChild(done);
  const ob = new MutationObserver(() => { if($('#spSheet').hidden){ ob.disconnect(); cam.yaw = sv.yaw; cam.pitch = sv.pitch; cam.dist = sv.dist; $('#spSheet').classList.remove('lookmode'); if(wide) camera.clearViewOffset(); } }); ob.observe($('#spSheet'), { attributes:true, attributeFilter:['hidden'] });
}
const HAIR_ALL = ['#3B2A24', '#15151C', '#E7B75A', '#F08FB5', '#6E5BD8', '#C8331F', '#E8E8EE', '#2E8F7F', '#5CB0FF', '#8A5A3A'];
const SHIRT_ALL = ['#2C6FD1', '#2FA36B', '#E7A92B', '#2B2F45', '#D9534F', '#FFFFFF', '#FF7C93', '#7A5CFF', '#5CE1E6', '#F2E2C8'];
$('#btnLook').addEventListener('click', lookSheet);
function petFairPick(){   // 우리 반에서 제일 적은 펫 중에서 랜덤 (한 종류만 몰리지 않게)
  const cnt = { dragon:0, whale:0, fox:0, penguin:0 }; Object.keys(isleData || {}).forEach(k => { const p = isleData[k] && isleData[k].pet; if(p && cnt[p.sp] != null) cnt[p.sp]++; });
  const mn = Math.min(...Object.values(cnt)), pool = Object.keys(cnt).filter(k => cnt[k] <= mn + 0);
  let r = Math.random(); try { const u = new Uint32Array(1); crypto.getRandomValues(u); r = u[0]/4294967296; } catch(e){}
  return pool[Math.floor(r*pool.length)] || 'dragon'; }
const petPics = {};
function petPortrait(sp, st, dark){   // 펫을 3D로 찍은 사진 (진화 미리보기는 실루엣)
  const key = sp + st + (dark ? 'd' : ''); if(petPics[key] !== undefined) return petPics[key];
  try {
    const S = 256, sc = new THREE.Scene(), obj = sp === 'egg' ? makeEgg() : makePet(sp, st); sc.add(obj);
    if(obj.userData.parts && obj.userData.parts.legs) obj.userData.parts.legs.forEach(l => { l.rotation.x = 0; });
    sc.add(new THREE.HemisphereLight('#FFFFFF', '#5A5A7A', 0.95)); const dl = new THREE.DirectionalLight('#FFF4E0', 0.8); dl.position.set(2, 3, 4); sc.add(dl);
    obj.rotation.y = -0.5; obj.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(obj), size = box.getSize(new THREE.Vector3()), cen = box.getCenter(new THREE.Vector3()), m = Math.max(size.x, size.y, size.z) || 1;
    const cam2 = new THREE.PerspectiveCamera(28, 1, 0.01, 100); cam2.position.set(cen.x, cen.y + m*0.35, cen.z + m*2.35); cam2.lookAt(cen);
    if(dark) sc.overrideMaterial = new THREE.MeshBasicMaterial({ color:'#3A4070' });
    const rt = new THREE.WebGLRenderTarget(S, S), oc = renderer.getClearColor(new THREE.Color()), oa = renderer.getClearAlpha();
    renderer.setRenderTarget(rt); renderer.setClearColor(0x000000, 0); renderer.clear(); renderer.render(sc, cam2);
    const px = new Uint8Array(S*S*4); renderer.readRenderTargetPixels(rt, 0, 0, S, S, px);
    renderer.setRenderTarget(null); renderer.setClearColor(oc, oa); rt.dispose();
    const c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'), im = x.createImageData(S, S);
    for(let y=0;y<S;y++) for(let i=0;i<S*4;i++) im.data[y*S*4 + i] = px[(S - 1 - y)*S*4 + i];
    let any = false; for(let i=3;i<px.length;i+=16) if(px[i] > 0){ any = true; break; }
    x.putImageData(im, 0, 0); petPics[key] = any ? c.toDataURL() : ''; } catch(e) { petPics[key] = ''; }
  return petPics[key];
}
function petPic(sp, st, dark, emo, cls){ const src = petPortrait(sp, st, dark); if(src){ const i = el('img'); i.src = src; i.alt = ''; return i; } return el('div', cls || 'emo', emo); }
const fmtH = sec => sec >= 3600 ? (Math.floor(sec/360)/10) + '시간' : Math.ceil(sec/60) + '분';
function petSheet(intro){
  const spec = myPetSpec(), s = mySecTotal() || 0, body = showSheet(intro ? '🥚 펫 알을 받았어요!' : '🐾 내 펫');
  const hero = el('div', 'pet-hero'), bar = (u, l, r) => { const w = el('div', 'pet-bar'), i = el('i'); i.style.width = Math.round(Math.min(1, u)*100) + '%'; w.appendChild(i); body.appendChild(w); const tx = el('div', 'pet-bartxt'); tx.appendChild(el('span', null, l)); tx.appendChild(el('span', null, r)); body.appendChild(tx); };
  if(!spec || spec.sp === 'egg'){
    const left = Math.max(0, PET_HATCH - s);
    hero.style.background = 'linear-gradient(160deg,#FFB36B,#B565E8 55%,#3A2A8A)'; hero.appendChild(petPic('egg', 0, false, '🥚'));
    hero.appendChild(el('div', 'nm', left > 0 ? '알을 품는 중…' : '알이 흔들려요!')); hero.appendChild(el('div', 'tag', left > 0 ? '공부 30분이면 부화해요' : '✨ 지금 부화할 수 있어요')); body.appendChild(hero);
    body.appendChild(el('div', 'pet-sec', '부화까지')); bar(s/PET_HATCH, '누적 공부 ' + fmtH(Math.min(s, PET_HATCH)), left > 0 ? fmtH(left) + ' 남음' : '준비 완료!');
    body.appendChild(el('div', 'pet-sec', '무엇이 나올까요?')); const ev = el('div', 'pet-evo');
    ['dragon', 'whale', 'fox', 'penguin'].forEach(sp => { const d = el('div'); d.appendChild(petPic(sp, 0, true, '?', 'q')); d.appendChild(el('span', null, '???')); ev.appendChild(d); }); body.appendChild(ev);
    body.appendChild(el('div', 'pet-skill', '🐉 드래곤 · 🐋 고래 · 🦊 여우 · 🐧 펭귄 중 하나가 랜덤으로 태어나요. 공부할수록 4단계까지 진화하고, 공중섬에서 타고 다닐 수 있어요!'));
    if(left <= 0){ const b = el('button', 'btn primary', '🐣 부화시키기'); b.type = 'button'; b.style.minHeight = '54px'; b.style.fontSize = '17px'; b.addEventListener('click', () => {
      const sp = petFairPick(); petData = { sp, nm:'', at:Date.now() }; petSave(); $('#spSheet').hidden = true;
      toast('🐣 ' + PET_SP[sp].e + ' ' + PET_SP[sp].n[petStage(s)] + '이(가) 태어났어요! 이름을 지어줘요'); if(me){ for(let k=0;k<12;k++) puff(me.pos.x + rand(-0.6, 0.6), 1.5 + rand(0, 0.8), me.pos.z + rand(-0.6, 0.6), pick(['#FFE7A0', '#FF7C93', '#5CE1E6']), 0.6); }
      setTimeout(petNameSheet, 900); }); body.appendChild(b); }
    else { const b = el('button', 'btn', '📚 공부하러 가기'); b.type = 'button'; b.addEventListener('click', () => { $('#spSheet').hidden = true; }); body.appendChild(b); }
    return; }
  const S = PET_SP[spec.sp], nm = spec.nm || S.n[spec.st], col = S.c[spec.st];
  hero.style.background = 'linear-gradient(160deg,' + (spec.st >= 3 && spec.sp !== 'fox' ? '#7A5CFF' : col) + ',' + (spec.st >= 3 ? '#1B1250' : '#1A2040') + ')';
  hero.appendChild(petPic(spec.sp, spec.st, false, S.e)); hero.appendChild(el('div', 'nm', nm)); hero.appendChild(el('div', 'tag', S.e + ' ' + S.n[spec.st] + ' · ' + (spec.st + 1) + '단계' + (spec.st >= 3 ? ' · 전설' : ''))); body.appendChild(hero);
  const next = PET_EVO[spec.st + 1], cur = PET_EVO[spec.st];
  body.appendChild(el('div', 'pet-sec', next ? '다음 진화: ' + S.n[spec.st + 1] : '진화 완료'));
  if(next) bar((s - cur)/(next - cur), '누적 ' + fmtH(s), fmtH(next - s) + ' 남음'); else bar(1, '누적 ' + fmtH(s), '🌟 최고 단계!');
  const st2 = el('div', 'pet-stats'); [['크기', '×' + PET_BS[spec.st]], ['탈 때 크기', '×' + RIDE_K[spec.st]], ['탈 때 속도', '×' + (1.7 + spec.st*0.3).toFixed(1)]].forEach(([k, v]) => { const d = el('div'); d.appendChild(el('b', null, v)); d.appendChild(document.createTextNode(k)); st2.appendChild(d); }); body.appendChild(st2);
  body.appendChild(el('div', 'pet-sec', '진화 단계')); const ev = el('div', 'pet-evo');
  S.n.forEach((n, i) => { const d = el('div', i === spec.st ? 'on' : ''); d.appendChild(petPic(spec.sp, i, i > spec.st, i > spec.st ? '?' : S.e, 'q')); d.appendChild(el('span', null, i > spec.st ? (PET_EVO[i]/3600) + '시간' : n)); ev.appendChild(d); }); body.appendChild(ev);
  body.appendChild(el('div', 'pet-skill', '<능력> ' + PET_SKILL[spec.sp] + (room === 'isle' ? '' : ' · 공중섬에서 🐾 펫 타기')));
  const bt = el('div', 'pet-btns');
  const b = el('button', 'btn', '✏️ 이름 짓기'); b.type = 'button'; b.addEventListener('click', petNameSheet); bt.appendChild(b);
  const b2 = el('button', 'btn primary', room === 'isle' ? (me && me.ride ? '🐾 내리기' : '🐾 타기') : '닫기'); b2.type = 'button'; b2.addEventListener('click', () => { $('#spSheet').hidden = true; if(room === 'isle' && !isleFly && !isleFall) isleRideToggle(); }); bt.appendChild(b2);
  body.appendChild(bt);
}
function petNameSheet(){
  const body = showSheet('✏️ 펫 이름 짓기'); const inp = el('input'); inp.maxLength = 8; inp.value = (petData && petData.nm) || ''; inp.placeholder = '최대 8글자';
  inp.style.cssText = 'width:100%;border-radius:12px;padding:10px;font:700 16px var(--font-b);background:var(--panel-2);color:var(--fg);border:1.5px solid var(--line)'; body.appendChild(inp);
  const ok = el('button', 'btn primary', '저장'); ok.type = 'button'; ok.addEventListener('click', () => { const v = inp.value.trim().slice(0, 8); if(!petData) return; petData.nm = v; petSave(); $('#spSheet').hidden = true; toast('🐾 이름: ' + (v || '기본 이름')); }); body.appendChild(ok);
}
$('#btnPet').addEventListener('click', () => { if(!me) return; petSheet(); });

function fpEye(){
  if(!firstPerson || !me) return null;
  if(room === 'class' || room === 'lobby'){ if(me.mode === 'sit' && room === 'class') return _eye.set(me.pos.x, 1.15, me.pos.z); return _eye.set(me.pos.x, 1.45 + me.jumpY + me.flyH + me.bob, me.pos.z); }
  if(room === 'sea' && diver){
    if(seaPhase === 'dock') return _eye.set(walker.g.position.x, walker.g.position.y + 1.45, walker.g.position.z);
    if(seaPhase === 'study') return _eye.set(walker.g.position.x, walker.g.position.y + 1.0, walker.g.position.z);
    if(seaPhase === 'swim'){ fwd(diver, 0.9); _eye.y = diver.g.position.y + 0.15; return _eye; }
    if(seaPhase === 'sub'){ fwd(sub, 1.4); _eye.y = sub.g.position.y + 0.3; return _eye; }
    if(seaPhase === 'subP') return _eye.set(rideLast.x, rideLast.y + 0.3, rideLast.z);
  }
  if(room === 'space'){
    if(spacePhase === 'pad' && padAstro) return _eye.set(padAstro.g.position.x, padAstro.g.position.y + 1.45, padAstro.g.position.z);
    if(spacePhase === 'space' && astro) return _eye.set(astro.g.position.x, astro.g.position.y + (spStudy ? 1.0 : 1.45), astro.g.position.z);
  }
  if(room === 'isle' && isleMine && me && (isleOn || isleFly || isleFall)){ me.group.getWorldPosition(_eye); _eye.y += 1.45*ISLE_S*(isleFly ? 1 : 1) + (isleOn ? 0 : 0); return _eye; }   // 공중섬: 내 캐릭터 눈높이 (0.5배 크기)
  return null;   // 엘니뇨·기하 탐구실과 로켓 발사 장면은 3인칭으로 봐요
}
function fpHideList(eye){
  if(!eye) return [];
  const list = room === 'class' || room === 'lobby' ? [me.group] : room === 'sea' ? [diver && diver.g, walker && walker.g, seaPhase === 'sub' && sub ? sub.g : null] : room === 'space' ? [astro && astro.g, padAstro && padAstro.g] : room === 'isle' ? [me && me.group] : [];
  return list.filter(o => o && o.visible).map(o => { o.visible = false; return o; });
}

/* ---------- 10. 매 프레임 실행 ---------- */
const clock3 = new THREE.Clock();
let sendT = 0, introYaw = 0;
const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function loop(){
  const dt = Math.min(clock3.getDelta(), 0.05);
  if(botsOn){ bots.forEach(b => { botBrain(b, dt); b.update(dt); }); botCheer(dt); }
  updateBlasts(dt); if(room === 'lobby') doorFxTick(dt); if(room === 'class') hubTick(dt);
  soundTick(); qGroup.visible = frontWall.visible;
  surveyDot.visible = !!me && (!myPreDone || (postOpen() && !myPostDone));
  if(surveyDot.visible){ const sc = 0.3 + Math.sin(performance.now()/250)*0.04; surveyDot.scale.set(sc, sc, 1); }
  { const on = !!seats[VIP_SEAT].occ; lampLight.intensity += ((on ? 1.6 : 0.35) - lampLight.intensity)*Math.min(1, dt*4); bulb.material.color.set(on ? '#FFE7B0' : '#B8A27A'); }
  const now = Date.now();
  remotes.forEach((r, id) => {
    const k = 1 - Math.exp(-dt*10); r.av.pos.x += (r.tx - r.av.pos.x)*k; r.av.pos.z += (r.tz - r.av.pos.z)*k; r.av.update(dt);
  });
  if(me){
    if(room === 'class'){
      steer(dt);
      me.update(dt);
      cam.t.lerp(new THREE.Vector3(me.pos.x, isLand() ? 1.5 : 1, me.pos.z), 1 - Math.exp(-dt*6));
    } else roomTick(dt);
    petTickAll(dt);
    sendT -= dt;
    if(sendT <= 0){ sendT = 0.2; pushPresence(); }
  } else {
    if(!reduce) introYaw += dt*0.12;
    cam.yaw = introYaw; cam.pitch = 0.75; cam.dist = 13.5; cam.t.set(0, 0.5, 0.5);
  }
  if(ringT > 0){ ringT -= dt*1.4; ring.material.opacity = Math.max(0, ringT); ring.scale.setScalar(1 + (1 - ringT)*0.6); }
  const eye = fpEye();
  if(eye){   // 1인칭: 내 눈 위치에서 바라봐요
    const lp = clamp(cam.pitch - 0.35, -1.1, 1.1); camera.position.copy(eye);
    camera.lookAt(eye.x - Math.sin(cam.yaw)*Math.cos(lp), eye.y - Math.sin(lp), eye.z - Math.cos(cam.yaw)*Math.cos(lp));
  } else {
  const cp = Math.cos(cam.pitch);
  camera.position.set(cam.t.x + Math.sin(cam.yaw)*cp*cam.dist, cam.t.y + Math.sin(cam.pitch)*cam.dist, cam.t.z + Math.cos(cam.yaw)*cp*cam.dist);
  if(room === 'sea'){ if(seaPhase === 'dock') camera.position.y = Math.max(camera.position.y, 0.6); else camera.position.y = Math.min(-0.3, Math.max(camera.position.y, -99.4)); }
  camera.lookAt(cam.t);
  }
  if(room === 'cinema'){ cin4Cam(); ytPos(); }
  if(arOn) arCam();
  // 카메라 쪽 벽은 숨겨서 가리지 않게
  frontWall.visible = camera.position.z < D/2 - 0.2; backWall.visible = camera.position.z > -D/2 + 0.2;
  leftWall.visible = camera.position.x > -W/2 + 0.2; rightWall.visible = camera.position.x < W/2 - 0.2; outdoor.visible = rightWall.visible && !arOn;
  uiT -= dt; if(uiT <= 0){ uiT = 0.25; updateUI(); }
  const fpHid = fpHideList(eye);
  renderer.render(room === 'sea' ? seaScene : room === 'nino' ? ninoScene : room === 'space' ? (spacePhase === 'space' ? spaceScene : launchScene) : room === 'geo' ? geoScene : room === 'isle' ? isleScene : room === 'eng' ? engScene : room === 'hist' ? (histView ? histScene : engScene) : room === 'debate' ? debScene : room === 'exam' ? exhScene : room === 'war' ? warScene : room === 'cinema' ? cinScene : room === 'quiz' ? qzScene : room === 'lobby' ? lobbyScene : scene, camera);
  fpHid.forEach(o => { o.visible = true; });
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

// 글꼴이 늦게 도착하면 칠판과 이름표를 다시 그려요
if(document.fonts && document.fonts.ready) document.fonts.ready.then(() => { drawBoard(); drawPlate(); drawCork(); drawCalBoard(); drawQBoard(); doorSigns.forEach(paintSign); boardKey = ''; fameKey = ''; allAvatars.forEach(a => a.drawLabel(true)); });
})();

/*END-OF-CODE2*/
