# Body Double - ExecYul

**Mental health and productivity companion for ADHD and executive functioning.**

2026 Creative Factory Studio. All rights reserved.

---

## Quick Deploy (PowerShell)

### Prerequisites
- [Git for Windows](https://git-scm.com/download/win)
- PowerShell 5.1+ or PowerShell Core
- GitHub access to `creativefactoryops-yules/Bodydouble`

### One-Command Deploy

```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/creativefactoryops-yules/Bodydouble/main/deploy.ps1" -OutFile "deploy.ps1"
.\deploy.ps1
```

### Manual Deploy

```powershell
git clone https://github.com/creativefactoryops-yules/Bodydouble.git
cd Bodydouble
# Copy enhanced files here
copy ..\index.html .
copy ..\logo.png .
git add index.html logo.png
git commit -m "Enhanced: music, logo, watermark, responsive"
git push origin main
```

Enable GitHub Pages at: `Settings > Pages > Branch: main`

---

## Music Features (ADHD-Optimized)

| Scene | Track | Why It Helps |
|-------|-------|-------------|
| Focus | Lofi Girl | Predictable beats reduce distractibility |
| Chill | Ambient Nature | Lowers cortisol, improves working memory |
| Storm | Classical | Mozart effect enhances spatial reasoning |
| Cozy | Warm Jazz | Dopamine without overstimulation |
| Dance | Upbeat Energy | Structured rhythm for breaks |
| Meditate | 40Hz Binaural | Gamma entrainment for attention |
| Sleep | Delta Waves | Slow-wave sleep for ADHD insomnia |
| Tidy | Upbeat Lofi | Rhythm scaffolding for mundane tasks |

**Note:** Click the music toggle (top-right) to start. YouTube requires user interaction before playing audio.

---

## Branding

- **Logo**: `logo.png` - Creative Factory Studio (top-left, fixed)
- **Watermark**: Slanted "CFSmochi" pattern (subtle, full-page)
- **Copyright**: Fixed footer - "2026 Creative Factory Studio. All rights reserved."
- **Ko-fi**: Fixed bottom bar linking to your support page

---

## Responsive Breakpoints

| Screen | Behavior |
|--------|----------|
| < 360px | Compact UI, hidden music text, small logo |
| 360-480px | Mobile optimized |
| 481-768px | Tablet layout |
| 769-1199px | Desktop, scene max 600px |
| 1200px+ | Large desktop, scene max 700px |
| 1400px+ | Extra wide container |

---

## File Structure

```
Bodydouble/
├── index.html     # Main app (enhanced)
├── logo.png       # CFS logo (400x400 optimized)
├── deploy.ps1     # PowerShell deploy script
├── manifest.json  # PWA manifest
├── icon.svg       # App icon
└── sw.js         # Service worker
```

---

## Troubleshooting

**Music won't play?**
- Click the play button first (browser autoplay policy)
- Check browser console for YouTube API errors
- Ensure you have internet connection

**Logo not showing?**
- Verify `logo.png` is in the same folder as `index.html`
- Check for 404 in browser DevTools Network tab

**Pages not updating?**
- GitHub Pages takes 1-5 minutes to deploy
- Hard refresh: `Ctrl+Shift+R`

---

## Support

- **Ko-fi**: [ko-fi.com/creativefactorystudio](https://ko-fi.com/creativefactorystudio)
- **Website**: [creativefactory.studio](https://creativefactory.studio)

---

*Made with love by Creative Factory Studio for Yulia and everyone navigating ADHD.*
