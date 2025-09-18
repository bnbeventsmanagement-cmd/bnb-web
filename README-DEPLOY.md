# 🚀 B&B RSVP - Deployment Guide

## 📋 Overview
This guide explains how to deploy the B&B RSVP website to Vercel with proper configuration and monitoring.

## 🎯 Project Type
**Vite/React SPA** - Single Page Application built with Vite

## ⚙️ Vercel Configuration

### 1. Project Settings
- **Production Branch**: `main`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Root Directory**: `.` (root of repository)
- **Node.js Version**: 18.x or higher

### 2. Environment Variables
Configure the following environment variables in Vercel Dashboard → Settings → Environment Variables:

#### Required Variables:
```
VITE_CONTACT_EMAIL=bnbeventsmanagement@gmail.com
VITE_CONTACT_PHONE=+972-50-488-4840
VITE_SITE_URL=https://www.bnb-rsvp.com
VITE_WEB3FORMS_ACCESS_KEY=7d7dcc9e-3c6a-4768-b0fa-1bb4da118da6
```

#### Optional Variables:
```
VITE_INSTAGRAM_URL=https://instagram.com/bnb_rsvp
VITE_WHATSAPP_URL=https://wa.me/972504884840
VITE_FACEBOOK_URL=https://facebook.com/bnb.rsvp
VITE_LOGIN_URL=https://eventsmanagment.com/login
VITE_FORMSPREE_FORM_ID=xpwgqkzw
```

### 3. Build Configuration
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm ci`

## 🔍 Deployment Verification

### 1. Check Production Branch
1. Go to Vercel Dashboard → Project Settings → Git
2. Verify **Production Branch** is set to `main`
3. Ensure **Auto-expose System Environment Variables** is enabled

### 2. Verify Deployment Connection
1. Go to Vercel Dashboard → Project → Deployments
2. Check that each deployment shows:
   - ✅ **Commit SHA** from GitHub
   - ✅ **Commit Message** from GitHub
   - ✅ **Branch** information
   - ✅ **Author** information

### 3. Monitor Deployment Status
- **Green checkmark** = Successful deployment
- **Red X** = Failed deployment (check logs)
- **Yellow circle** = Building in progress

## 🔄 Deployment Operations

### 1. Manual Redeploy
1. Go to Vercel Dashboard → Project → Deployments
2. Click on the latest deployment
3. Click **"Redeploy"** button
4. Optionally check **"Use existing Build Cache"** for faster builds

### 2. Clear Build Cache
1. Go to Vercel Dashboard → Project → Settings → Functions
2. Click **"Clear Build Cache"**
3. Redeploy the project

### 3. Promote Preview to Production
1. Go to Vercel Dashboard → Project → Deployments
2. Find the preview deployment you want to promote
3. Click **"Promote to Production"**
4. Confirm the action

## 🌐 Domain Configuration

### 1. Custom Domain Setup
1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain: `www.bnb-rsvp.com`
3. Follow DNS configuration instructions

### 2. DNS Configuration
If you're migrating from GoDaddy or another hosting provider:

#### A Record:
```
Type: A
Name: @
Value: 76.76.19.19 (Vercel's IP)
```

#### CNAME Record:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### Verify DNS Propagation:
- Use tools like `nslookup` or online DNS checkers
- Wait 24-48 hours for full propagation

## 🚨 Troubleshooting

### Common Issues:

#### 1. Build Failures
- **Check**: Environment variables are set correctly
- **Check**: Node.js version is 18+ in Vercel settings
- **Check**: Build logs for specific error messages

#### 2. 404 Errors on Refresh
- **Solution**: Already configured in `vercel.json` with rewrites
- **Verify**: `vercel.json` is in the root directory

#### 3. Environment Variables Not Working
- **Check**: Variables are prefixed with `VITE_`
- **Check**: Variables are set for all environments (Production, Preview, Development)
- **Check**: No typos in variable names

#### 4. Images Not Loading
- **Check**: Images are in `public/images/` directory
- **Check**: Image paths use relative URLs (`./images/logo.svg`)

### Build Logs Analysis:
1. Go to Vercel Dashboard → Project → Deployments
2. Click on failed deployment
3. Check **"Build Logs"** tab for error details
4. Common issues:
   - Missing environment variables
   - TypeScript compilation errors
   - ESLint errors
   - Missing dependencies

## 📊 Performance Monitoring

### 1. Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **INP** (Interaction to Next Paint): < 200ms

### 2. Vercel Analytics
1. Enable Vercel Analytics in project settings
2. Monitor:
   - Page views
   - Performance metrics
   - Error rates
   - User behavior

### 3. Lighthouse Scores
Target scores:
- **Performance**: ≥ 90
- **Accessibility**: ≥ 90
- **Best Practices**: ≥ 90
- **SEO**: ≥ 90

## 🔧 Local Development

### 1. Setup
```bash
# Clone repository
git clone <repository-url>
cd bnb-web-master

# Install dependencies
npm install

# Copy environment variables
cp env.example .env

# Start development server
npm run dev
```

### 2. Environment Variables
Create `.env` file with required variables (see env.example)

### 3. Build Locally
```bash
# Verify environment
npm run verify-env

# Build project
npm run build

# Preview build
npm run preview
```

## 📝 Important Notes

### 1. File Structure
- **Root Directory**: Contains `package.json`, `vite.config.ts`, `vercel.json`
- **Build Output**: `dist/` directory
- **Static Assets**: `public/` directory

### 2. Routing
- **SPA Routing**: All routes redirect to `index.html`
- **Legal Pages**: `/legal/*` routes work correctly
- **Static Files**: Served directly from `public/`

### 3. Security
- **Headers**: Configured in `vercel.json`
- **HTTPS**: Automatic with Vercel
- **CORS**: Properly configured

## 🆘 Support

### If Deployment Fails:
1. Check build logs in Vercel dashboard
2. Verify all environment variables are set
3. Ensure `vercel.json` is valid JSON
4. Check that all required files are committed to git

### Contact:
- **Technical Issues**: Check GitHub issues
- **Domain Issues**: Contact domain provider
- **Vercel Issues**: Check Vercel status page

---

**Last Updated**: December 19, 2024
**Project**: B&B אישורי הגעה והושבה
**Framework**: Vite + React
**Deployment**: Vercel
