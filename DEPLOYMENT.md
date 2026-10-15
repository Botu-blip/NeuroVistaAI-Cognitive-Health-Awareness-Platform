# NeuroVistaAI - Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Steps:**
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - NeuroVistaAI website"
   git branch -M main
   git remote add origin https://github.com/yourusername/neurovistaai.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"
7. Your site will be live in ~60 seconds! 🎉

**Custom Domain (Optional):**
- In Vercel dashboard → Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

---

### Option 2: Netlify

**Steps:**
1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

### Option 3: GitHub Pages

**Steps:**
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/neurovistaai/', // Your repo name
   })
   ```

3. Add to `package.json` scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repo settings → Pages → Source: gh-pages branch

---

### Option 4: Railway

**Steps:**
1. Create `railway.json`:
   ```json
   {
     "build": {
       "builder": "NIXPACKS",
       "buildCommand": "npm install && npm run build"
     },
     "deploy": {
       "startCommand": "npx serve dist -s -n -L -p $PORT",
       "restartPolicyType": "ON_FAILURE",
       "restartPolicyMaxRetries": 10
     }
   }
   ```

2. Install serve:
   ```bash
   npm install --save-dev serve
   ```

3. Push to GitHub
4. Go to [railway.app](https://railway.app)
5. New Project → Deploy from GitHub
6. Select your repo
7. Deploy automatically

---

### Option 5: AWS Amplify

**Steps:**
1. Push code to GitHub
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
3. Connect repository
4. Build settings (auto-detected):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. Deploy

---

## 🔧 Pre-Deployment Checklist

- [ ] Test locally: `npm run build && npm run preview`
- [ ] Check all links work
- [ ] Test chatbot functionality
- [ ] Verify theme toggle works
- [ ] Test on mobile devices
- [ ] Check browser console for errors
- [ ] Optimize images (if any added)
- [ ] Update meta tags in `index.html`
- [ ] Add favicon
- [ ] Test all animations
- [ ] Verify responsive design

---

## 📊 Adding Analytics

### Google Analytics
1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `index.html` in `<head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Vercel Analytics
1. In Vercel dashboard → Analytics → Enable
2. Automatically tracks page views and performance

---

## 🌐 Custom Domain Setup

### For Vercel:
1. Purchase domain (Namecheap, GoDaddy, etc.)
2. In Vercel → Settings → Domains
3. Add your domain
4. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:
1. In Netlify → Domain Settings → Add custom domain
2. Update DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

---

## 🔒 Environment Variables (Production)

### Vercel:
1. Go to project → Settings → Environment Variables
2. Add: `VITE_OPENAI_API_KEY`
3. Redeploy

### Netlify:
1. Site Settings → Build & Deploy → Environment
2. Add variables
3. Trigger deploy

---

## 🐛 Common Deployment Issues

### Issue: Blank page after deployment
**Solution:** Check `base` in `vite.config.js` matches your deployment path

### Issue: 404 on page refresh
**Solution:** Add redirect rules:

**Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Netlify** - Create `public/_redirects`:
```
/* /index.html 200
```

### Issue: Slow loading
**Solutions:**
- Enable Gzip compression
- Use CDN for static assets
- Optimize images with WebP
- Enable caching headers

---

## 📈 Performance Optimization

### 1. Enable Compression
Most platforms do this automatically (Vercel, Netlify)

### 2. Add Cache Headers
**In `vercel.json`:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 3. Optimize Bundle
```bash
npm run build -- --minify terser
```

---

## 🔐 Security Best Practices

1. **Never commit `.env` files**
   - Add to `.gitignore`
   - Use platform environment variables

2. **API Keys**
   - Store in environment variables
   - Rotate regularly
   - Use rate limiting

3. **HTTPS**
   - All platforms provide free SSL
   - Force HTTPS redirects

4. **Headers**
   Add security headers in platform config:
   ```json
   {
     "key": "X-Frame-Options",
     "value": "DENY"
   },
   {
     "key": "X-Content-Type-Options",
     "value": "nosniff"
   }
   ```

---

## 📱 Progressive Web App (PWA) - Optional

### Convert to PWA:
1. Install plugin:
   ```bash
   npm install vite-plugin-pwa --save-dev
   ```

2. Update `vite.config.js`:
   ```javascript
   import { VitePWA } from 'vite-plugin-pwa'
   
   export default defineConfig({
     plugins: [
       react(),
       VitePWA({
         registerType: 'autoUpdate',
         manifest: {
           name: 'NeuroVistaAI',
           short_name: 'NeuroVista',
           description: 'AI-Powered Early Dementia Detection',
           theme_color: '#EBF4FF',
           icons: [
             {
               src: 'icon-192x192.png',
               sizes: '192x192',
               type: 'image/png'
             }
           ]
         }
       })
     ]
   })
   ```

---

## 📞 Post-Deployment

### 1. Test Everything
- [ ] Visit the live URL
- [ ] Test all sections
- [ ] Check mobile responsiveness
- [ ] Verify chatbot works
- [ ] Test theme toggle
- [ ] Check all links

### 2. Monitor Performance
- Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Aim for 90+ score
- Monitor Core Web Vitals

### 3. Set Up Monitoring
- [Sentry](https://sentry.io) for error tracking
- [Hotjar](https://www.hotjar.com) for user behavior
- Google Analytics for traffic

---

## 🎉 You're Live!

Your NeuroVistaAI website is now deployed and accessible worldwide! 🌍

**Next Steps:**
- Share your URL
- Gather user feedback
- Monitor analytics
- Iterate and improve

**Need Help?**
- Check platform documentation
- Review error logs
- Test locally first: `npm run preview`

---

**Happy Deploying! 🚀**
