# ⚡ Quick Start Guide - NeuroVistaAI

Welcome to NeuroVistaAI! This guide will help you get started in under 5 minutes.

## 🎯 What You're Building

A fully responsive, empathetic AI-powered dementia detection landing page with:
- 🌓 Dark/Light mode toggle
- 🤖 Working AI chatbot
- ✨ Beautiful 3D animations
- 📱 Mobile-first responsive design
- ♿ Accessibility compliant

## 🚀 Get Started in 3 Steps

### Step 1: Verify Installation (You're Already Here!)
The project is set up and running. You should see the development server at:
```
http://localhost:5173
```

### Step 2: Open in Browser
Click the preview button in your tool panel to see the live website.

### Step 3: Explore the Features!
Try these interactions:
- Toggle dark/light mode (button in top-right)
- Click "See How It Works" to smooth scroll
- Open the chatbot (bottom-right button)
- Ask chatbot questions like:
  - "What is dementia?"
  - "How does AI analysis work?"
  - "What are preventive measures?"

## 📁 Project Structure

```
NeuroVistaAI/
├── src/
│   ├── components/          # All React components
│   │   ├── Hero.jsx         # Main landing section
│   │   ├── Chatbot.jsx      # AI assistant
│   │   ├── ThemeToggle.jsx  # Dark/light switcher
│   │   └── ...
│   ├── context/
│   │   └── ThemeContext.jsx # Theme state management
│   ├── App.jsx              # Main app
│   └── index.css            # Global styles
├── package.json             # Dependencies
└── vite.config.js           # Build configuration
```

## 🎨 Key Features to Test

### 1. Theme Toggle
- **Location**: Top-right corner
- **How it works**: Click sun/moon icon
- **What to notice**: Smooth color transitions throughout

### 2. AI Chatbot
- **Location**: Bottom-right corner
- **How to use**: Click chat icon
- **Try asking**:
  - "Tell me about memory loss"
  - "What causes dementia?"
  - "How can I prevent cognitive decline?"

### 3. Animated Elements
- **Hero section**: Rotating 3D brain with orbital rings
- **Background**: Floating particles
- **Scroll animations**: Watch sections fade in as you scroll

### 4. Smooth Scrolling
- Click "See How It Works" button
- Click "Scroll to explore" at bottom of hero
- Smooth navigation to sections

## 🛠️ Making Your First Changes

### Change the Main Headline
1. Open `src/components/Hero.jsx`
2. Find line ~48: The main heading text
3. Change "Gain Clarity and Peace of Mind..." to your text
4. Save and watch it update automatically!

### Customize Colors
1. Open `tailwind.config.js`
2. Find the `colors` section
3. Change any hex color value
4. Save and see changes instantly

### Add a Custom Message to Chatbot
1. Open `src/components/Chatbot.jsx`
2. Find the `predefinedResponses` object
3. Add a new entry:
   ```javascript
   yourKeyword: "Your custom response here"
   ```
4. Update the `getResponse` function to check for your keyword

## 📱 Test Responsive Design

### Desktop (Current View)
- Full multi-column layouts
- Large animations
- Spacious padding

### Tablet (768px - 1024px)
1. Resize your browser window
2. Notice 2-column grids adapt
3. Buttons remain touch-friendly

### Mobile (<768px)
1. Use browser dev tools (F12)
2. Toggle device toolbar
3. Select iPhone or Android
4. All content stacks vertically
5. Chatbot remains accessible

## 🎯 Common Tasks

### Start Development Server
```bash
npm run dev
```
Already running! 🎉

### Build for Production
```bash
npm run build
```
Creates optimized files in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Test the production build locally

### Install New Package
```bash
npm install package-name
```

## 💡 Pro Tips

### Hot Module Replacement (HMR)
- Any changes you make auto-refresh in the browser
- No need to manually reload!
- Preserves component state when possible

### Theme Preference Saved
- Toggle theme once
- Close and reopen browser
- Your preference is remembered!

### Smooth Performance
- All animations are GPU-accelerated
- Optimized for 60fps
- Works great on mobile devices

## 🎨 Design Highlights

### Color Psychology
- **Light Mode**: Calming blues and greens for trust
- **Dark Mode**: Deep navys with warm accents
- **Accent**: Soft coral/peach for friendly CTAs

### Typography
- Minimum 18px body text (highly readable)
- Clear hierarchy with size progression
- Inter & Nunito Sans fonts (friendly, modern)

### Spacing
- Generous padding for breathing room
- Consistent spacing scale
- Clean, uncluttered layouts

## 🤖 Chatbot Details

### Current Implementation
- Keyword-based responses (works offline!)
- Instant answers about dementia and cognitive health
- No API key required

### Topics Covered
- Memory concerns and symptoms
- Dementia types and diagnosis
- Prevention and brain health
- AI analysis explanation
- Treatment options

### Future Enhancement (Optional)
- Can integrate with OpenAI API
- See `.env.example` for setup
- Instructions in `CUSTOMIZATION.md`

## 📚 Additional Resources

- **Features**: See `FEATURES.md` for complete feature list
- **Customization**: Check `CUSTOMIZATION.md` for detailed guides
- **Deployment**: Read `DEPLOYMENT.md` for publishing options
- **README**: Full documentation in `README.md`

## 🎉 What's Next?

### Immediate Next Steps:
1. ✅ Explore all sections by scrolling
2. ✅ Test dark/light mode toggle
3. ✅ Chat with the AI assistant
4. ✅ Check mobile responsiveness

### Customization Ideas:
- Change colors to match your brand
- Update copy and messaging
- Add your own sections
- Connect real backend API
- Add contact form
- Implement actual screening tests

### Deployment:
When ready to go live:
1. Run `npm run build`
2. Choose a platform (Vercel recommended)
3. Follow steps in `DEPLOYMENT.md`
4. Share your live URL!

## ❓ Need Help?

### Common Questions

**Q: How do I stop the server?**
A: Press `Ctrl + C` in the terminal

**Q: Port 5173 already in use?**
A: Vite will automatically use next available port (5174, etc.)

**Q: Changes not showing?**
A: Check terminal for errors, try hard refresh (Ctrl + F5)

**Q: Want to use a different port?**
A: Run `npm run dev -- --port 3000`

### Troubleshooting

**Issue**: Blank page
- Check browser console (F12) for errors
- Verify all files saved
- Restart dev server

**Issue**: Animations stuttering
- Close other browser tabs
- Check CPU usage
- Reduce particle count in `ParticleBackground.jsx`

**Issue**: Theme not persisting
- Check browser localStorage is enabled
- Clear cache and try again

## 🌟 You're All Set!

You now have a fully functional, beautiful AI dementia detection website running locally! 

Enjoy exploring and customizing NeuroVistaAI. Remember:
- The live preview updates automatically
- All your changes are saved
- You can't break anything (that's what Git is for!)

**Happy coding! 🚀**

---

**Built with ❤️ for better cognitive health awareness**
