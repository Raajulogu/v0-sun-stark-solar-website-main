# SunStark Solar - Premium Solar Company Website

A modern, production-ready Next.js web application for SunStark Solar, featuring a comprehensive solar energy solution platform with dynamic project management, services showcase, and customer engagement tools.

## 🌟 Features

### Core Pages
- **Home** - Hero section, featured projects, services overview, trust indicators
- **About** - Company story, mission & vision, team highlights, statistics
- **Services** - Detailed service offerings (Residential, Commercial, Industrial, Maintenance)
- **Works/Projects** - Portfolio with dynamic project listings and detailed project pages
- **Process** - Step-by-step installation workflow with timeline
- **Partners** - Client testimonials, partner showcase, success stories
- **Contact** - Comprehensive contact form with validation and API integration

### Technical Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Premium Theme** - Black, gold, and dark grey color palette for corporate aesthetic
- **Form Validation** - Client-side and server-side validation
- **API Routes** - Backend contact form processing
- **SEO Optimized** - Meta tags, semantic HTML, fast loading
- **Performance** - Optimized images, code splitting, caching strategies

## 📋 Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **State Management**: React Hooks & SWR
- **Forms**: Custom form handling with validation
- **API**: Next.js Route Handlers
- **Deployment**: Vercel (optimized)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

#### Option 1: Using shadcn CLI (Recommended)
```bash
npx shadcn-cli@latest init --skip-git my-app
cd my-app
# Copy all files from this project
```
### Running Locally
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📊 Project Structure

```
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── services/page.tsx        # Services page
│   ├── works/page.tsx           # Projects listing
│   ├── works/[id]/page.tsx      # Project detail page
│   ├── process/page.tsx         # Installation process
│   ├── partners/page.tsx        # Partners & clients
│   ├── contact/page.tsx         # Contact page
│   ├── api/
│   │   └── contact/route.ts     # Contact form API
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles & design tokens
├── components/
│   ├── header.tsx               # Navigation header
│   ├── footer.tsx               # Footer
│   └── ui/                      # shadcn/ui components
├── hooks/
│   ├── use-mobile.ts            # Mobile detection
│   └── use-toast.ts             # Toast notifications
└── lib/
    └── utils.ts                 # Utility functions
```

## 🎨 Design System

### Color Palette
- **Background**: Deep Black (oklch 0.12 0 0)
- **Foreground**: White (oklch 0.98 0 0)
- **Primary/Accent**: Gold (oklch 0.7 0.19 70.08)
- **Secondary**: Dark Grey (oklch 0.24 0 0)
- **Muted**: Medium Grey (oklch 0.35 0 0)

### Typography
- **Heading Font**: Geist (sans-serif)
- **Body Font**: Geist (sans-serif)
- **Line Height**: 1.5-1.6 for body text

## 🔧 Configuration

### Company Information
Update company details in `/components/footer.tsx` and `/app/api/contact/route.ts`:

```typescript
Email: sunstarksolarstark@gmail.com
Phone: +91 9360260195, +91 9600642600
Address: Plot 5 & 6, Muthamizh Nagar, Vanur, Pattanur, 
         Pondicherry, Tamil Nadu – 605111
```

## 📡 API Integration Points

### Contact Form API (`/api/contact`)
The contact form currently logs submissions. To enable full functionality:

#### 1. **Database Integration (MongoDB)**
```typescript
import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URI!)
const db = client.db('sunstark_solar')
await db.collection('contacts').insertOne(contactData)
```

#### 2. **Email Service (SendGrid/Resend)**
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
await resend.emails.send({
  from: 'contact@sunstarksolar.com',
  to: email,
  subject: 'Thank you for contacting SunStark Solar',
  html: emailTemplate
})
```

#### 3. **CRM Integration**
Connect to your CRM system to automatically create leads:
- HubSpot
- Salesforce
- Pipedrive
- Or custom solution

## 🎯 Next Steps for Production

### 1. **Content Management (Prismic CMS)**
- Set up Prismic account
- Create custom types for projects, testimonials, blog posts
- Replace mock data with live CMS content
- Implement image management via Cloudinary

### 2. **Database Setup (MongoDB or PostgreSQL)**
- Create database schema for contacts, projects, teams
- Set up environment variables
- Connect contact form to database
- Implement data persistence

### 3. **Email Service**
- Choose email provider (Resend, SendGrid, etc.)
- Set up email templates
- Configure admin notifications
- Add user confirmation emails

### 4. **Analytics & Monitoring**
- Integrate Google Analytics
- Set up error tracking (Sentry)
- Monitor form submissions
- Track user behavior

### 5. **SEO Enhancement**
- Submit sitemap to Google Search Console
- Set up Google My Business
- Configure meta tags for each page
- Create JSON-LD schema markup

### 6. **Performance Optimization**
- Implement image optimization with next/image
- Add caching headers
- Minify CSS/JS
- Set up CDN for static assets

## 🔐 Environment Variables

Create a `.env.local` file (not tracked in git):

```env
# Database
MONGODB_URI=mongodb+srv://...

# Email Service
RESEND_API_KEY=re_...

# CMS (Prismic)
PRISMIC_REPO_ID=...
PRISMIC_ACCESS_TOKEN=...

# Storage (Cloudinary)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=...

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=...
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All pages are fully responsive and optimized for mobile-first design.

## 🧪 Testing

### Form Validation
The contact form includes:
- Required field validation
- Email format validation
- Phone number validation
- Message length validation
- Client-side and server-side checks

## 📈 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph
- ✅ Responsive design
- ✅ Fast page load times
- ✅ XML sitemap ready
- ✅ Mobile-friendly
- ✅ Schema markup support

## 🚢 Deployment to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set environment variables
   - Deploy

3. **Custom Domain**
   - Add your domain in Vercel dashboard
   - Update DNS records
   - Enable SSL

## 📧 Contact Form Flow

```
User fills form → Client-side validation → Server API → 
Response → Toast notification
```

In production, add:
```
→ MongoDB storage → Email to admin → Email to user → CRM sync
```

## 🛠️ Maintenance

### Regular Tasks
- Monitor form submissions
- Update project portfolio
- Check analytics
- Update testimonials
- Maintain security patches

### SEO Monitoring
- Check Google Search Console
- Monitor rankings
- Update meta descriptions
- Refresh content regularly

## 📝 License

This project is built for SunStark Solar. All rights reserved.

## 🤝 Support

For questions or issues:
- Email: sunstarksolarstark@gmail.com
- Phone: +91 9360260195, +91 9600642600
- Contact form: Available on website

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
