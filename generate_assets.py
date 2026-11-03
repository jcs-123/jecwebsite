import os, re, base64

with open('font_10.ttf', 'rb') as f:
    caldina_b64 = base64.b64encode(f.read()).decode('ascii')

with open('font_9.otf', 'rb') as f:
    acumin_b64 = base64.b64encode(f.read()).decode('ascii')

def parse_pdf_ops_to_svg_paths(stream_text):
    paths = []
    blocks = re.findall(r'q\s+1\s+0\s+0\s+1\s+([\d\.\-]+)\s+([\d\.\-]+)\s+cm\s*(.*?)\s*Q', stream_text, re.DOTALL)
    for tx_s, ty_s, body in blocks:
        tx, ty = float(tx_s), float(ty_s)
        d_tokens = []
        lines = body.strip().split('\n')
        cur_x, cur_y = 0.0, 0.0
        for line in lines:
            parts = line.strip().split()
            if not parts:
                continue
            op = parts[-1]
            try:
                args = [float(x) for x in parts[:-1]]
            except ValueError:
                continue
            
            if op == 'm':
                cur_x = tx + args[0]
                cur_y = 1080.0 - (ty + args[1])
                d_tokens.append(f'M {cur_x:.3f} {cur_y:.3f}')
            elif op == 'l':
                cur_x = tx + args[0]
                cur_y = 1080.0 - (ty + args[1])
                d_tokens.append(f'L {cur_x:.3f} {cur_y:.3f}')
            elif op == 'c':
                p1x = tx + args[0]
                p1y = 1080.0 - (ty + args[1])
                p2x = tx + args[2]
                p2y = 1080.0 - (ty + args[3])
                cur_x = tx + args[4]
                cur_y = 1080.0 - (ty + args[5])
                d_tokens.append(f'C {p1x:.3f} {p1y:.3f}, {p2x:.3f} {p2y:.3f}, {cur_x:.3f} {cur_y:.3f}')
            elif op == 'h':
                d_tokens.append('Z')
            elif op in ('f', 'f*'):
                pass
        if d_tokens:
            paths.append(' '.join(d_tokens))
    return paths

def get_bbox(d_string):
    tokens = re.findall(r'[-+]?\d*\.\d+|\d+', d_string)
    nums = [float(t) for t in tokens]
    xs = nums[0::2]
    ys = nums[1::2]
    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)
    return min_x, min_y, max_x - min_x, max_y - min_y

# Emblem standalone
with open('emblem_stream_1.txt', 'r', encoding='utf-8') as f:
    text_emblem = f.read()

emblem_paths = parse_pdf_ops_to_svg_paths(text_emblem)
emblem_d = ' '.join(emblem_paths)
min_x, min_y, w, h = get_bbox(emblem_d)

emblem_svg_gold = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{min_x-8:.1f} {min_y-8:.1f} {w+16:.1f} {h+16:.1f}" width="100%" height="100%" fill="none">
  <path d="{emblem_d}" fill="#F5C768" fill-rule="evenodd" />
</svg>'''
with open('public/assets/jyothi_emblem.svg', 'w', encoding='utf-8') as f:
    f.write(emblem_svg_gold)

# Horizontal Logo
with open(r'C:\Users\USER\.gemini\antigravity\brain\fdf0e33c-6bc4-4d3c-9b28-990f106d5974\.user_uploaded\media_1793681298222_4ae89677.pdf', 'rb') as f:
    pdf_bytes = f.read()

import zlib
m_c = re.search(rb'\b15\s+0\s+obj\s*<<(.*?)>>\s*stream\r?\n(.*?)\r?\nendstream', pdf_bytes, re.DOTALL)
obj15_stream = zlib.decompress(m_c.group(2)).decode('latin1', errors='ignore')
h_paths = parse_pdf_ops_to_svg_paths(obj15_stream)
h_emblem_d = ' '.join(h_paths)
hx, hy, hw, hh = get_bbox(h_emblem_d)

# For dark purple navbars & hero headers: Gold Emblem + White Title + Gold Subtitle
h_svg_dark = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="198 410 730 260" width="100%" height="100%" fill="none">
  <defs>
    <style>
      @font-face {{
        font-family: 'Caldina';
        src: url(data:font/truetype;charset=utf-8;base64,{caldina_b64}) format('truetype');
        font-weight: 700;
        font-style: normal;
      }}
      @font-face {{
        font-family: 'AcuminConcept';
        src: url(data:font/opentype;charset=utf-8;base64,{acumin_b64}) format('opentype');
        font-weight: 600;
        font-style: normal;
      }}
      .brand-title-white {{
        font-family: 'Caldina', 'Outfit', 'Montserrat', sans-serif;
        font-size: 126.6px;
        font-weight: 700;
        fill: #FFFFFF;
        letter-spacing: 0.04em;
      }}
      .brand-sub-gold {{
        font-family: 'AcuminConcept', 'Inter', sans-serif;
        font-size: 24.1px;
        font-weight: 600;
        fill: #F5C768;
        letter-spacing: 0.12em;
      }}
    </style>
  </defs>
  <path d="{h_emblem_d}" fill="#F5C768" fill-rule="evenodd" />
  <text x="407.3" y="584" class="brand-title-white">JYOTHI</text>
  <text x="414.7" y="626" class="brand-sub-gold">ENGINEERING COLLEGE (AUTONOMOUS)</text>
</svg>'''
with open('public/assets/jyothi_logo_white_gold.svg', 'w', encoding='utf-8') as f:
    f.write(h_svg_dark)

# All Gold Version
h_svg_gold = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="198 410 730 260" width="100%" height="100%" fill="none">
  <defs>
    <style>
      @font-face {{
        font-family: 'Caldina';
        src: url(data:font/truetype;charset=utf-8;base64,{caldina_b64}) format('truetype');
        font-weight: 700;
        font-style: normal;
      }}
      @font-face {{
        font-family: 'AcuminConcept';
        src: url(data:font/opentype;charset=utf-8;base64,{acumin_b64}) format('opentype');
        font-weight: 600;
        font-style: normal;
      }}
      .brand-title-gold {{
        font-family: 'Caldina', 'Outfit', 'Montserrat', sans-serif;
        font-size: 126.6px;
        font-weight: 700;
        fill: #F5C768;
        letter-spacing: 0.04em;
      }}
      .brand-sub-gold {{
        font-family: 'AcuminConcept', 'Inter', sans-serif;
        font-size: 24.1px;
        font-weight: 600;
        fill: #F5C768;
        letter-spacing: 0.12em;
      }}
    </style>
  </defs>
  <path d="{h_emblem_d}" fill="#F5C768" fill-rule="evenodd" />
  <text x="407.3" y="584" class="brand-title-gold">JYOTHI</text>
  <text x="414.7" y="626" class="brand-sub-gold">ENGINEERING COLLEGE (AUTONOMOUS)</text>
</svg>'''
with open('public/assets/jyothi_logo_gold.svg', 'w', encoding='utf-8') as f:
    f.write(h_svg_gold)

# For light/white navbars: Deep Purple Emblem & Text + Gold Subtitle
h_svg_dark_text = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="198 410 730 260" width="100%" height="100%" fill="none">
  <defs>
    <style>
      @font-face {{
        font-family: 'Caldina';
        src: url(data:font/truetype;charset=utf-8;base64,{caldina_b64}) format('truetype');
        font-weight: 700;
        font-style: normal;
      }}
      @font-face {{
        font-family: 'AcuminConcept';
        src: url(data:font/opentype;charset=utf-8;base64,{acumin_b64}) format('opentype');
        font-weight: 600;
        font-style: normal;
      }}
      .brand-title-purple {{
        font-family: 'Caldina', 'Outfit', 'Montserrat', sans-serif;
        font-size: 126.6px;
        font-weight: 700;
        fill: #3C1361;
        letter-spacing: 0.04em;
      }}
      .brand-sub-purple {{
        font-family: 'AcuminConcept', 'Inter', sans-serif;
        font-size: 24.1px;
        font-weight: 600;
        fill: #85590D;
        letter-spacing: 0.12em;
      }}
    </style>
  </defs>
  <path d="{h_emblem_d}" fill="#3C1361" fill-rule="evenodd" />
  <text x="407.3" y="584" class="brand-title-purple">JYOTHI</text>
  <text x="414.7" y="626" class="brand-sub-purple">ENGINEERING COLLEGE (AUTONOMOUS)</text>
</svg>'''
with open('public/assets/jyothi_logo_dark.svg', 'w', encoding='utf-8') as f:
    f.write(h_svg_dark_text)

# Stacked logo
m_s = re.search(rb'\b2\s+0\s+obj\s*<<(.*?)>>\s*stream\r?\n(.*?)\r?\nendstream', pdf_bytes, re.DOTALL)
obj2_stream = zlib.decompress(m_s.group(2)).decode('latin1', errors='ignore')
s_paths = parse_pdf_ops_to_svg_paths(obj2_stream)
s_emblem_d = ' '.join(s_paths)
sx, sy, sw, sh = get_bbox(s_emblem_d)

stacked_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="270 310 540 460" width="100%" height="100%" fill="none">
  <defs>
    <style>
      @font-face {{
        font-family: 'Caldina';
        src: url(data:font/truetype;charset=utf-8;base64,{caldina_b64}) format('truetype');
        font-weight: 700;
        font-style: normal;
      }}
      @font-face {{
        font-family: 'AcuminConcept';
        src: url(data:font/opentype;charset=utf-8;base64,{acumin_b64}) format('opentype');
        font-weight: 600;
        font-style: normal;
      }}
      .brand-title-stacked {{
        font-family: 'Caldina', 'Outfit', 'Montserrat', sans-serif;
        font-size: 126.6px;
        font-weight: 700;
        fill: #F5C768;
        letter-spacing: 0.04em;
        text-anchor: middle;
      }}
      .brand-sub-stacked {{
        font-family: 'AcuminConcept', 'Inter', sans-serif;
        font-size: 24.1px;
        font-weight: 600;
        fill: #F5C768;
        letter-spacing: 0.12em;
        text-anchor: middle;
      }}
    </style>
  </defs>
  <path d="{s_emblem_d}" fill="#F5C768" fill-rule="evenodd" />
  <text x="538" y="675" class="brand-title-stacked">JYOTHI</text>
  <text x="538" y="718" class="brand-sub-stacked">ENGINEERING COLLEGE (AUTONOMOUS)</text>
</svg>'''
with open('public/assets/jyothi_logo_stacked.svg', 'w', encoding='utf-8') as f:
    f.write(stacked_svg)

print('Updated all SVG brand assets!')
