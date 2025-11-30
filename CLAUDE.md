# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal homepage for "子来" (Zilai), built with Next.js 16, React 19, and Tailwind CSS v4. The site showcases a senior backend engineer's profile with sections for skills, interests, and contact information. The content is primarily in Chinese and focuses on technical expertise, spiritual interests, and AI exploration journey.

## Development Commands

- `npm run dev` - Start the development server on http://localhost:3000
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono via next/font/google
- **Linting**: ESLint with Next.js configuration

## Project Architecture

### Directory Structure
- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration and metadata
  - `page.tsx` - Main homepage with hero, skills, interests, and contact sections
  - `globals.css` - Global styles with Tailwind imports and CSS variables
- `public/` - Static assets including images and SVG icons
- `content/` - Content files with personal information
- `.next/` - Next.js build output (auto-generated)

### Key Features
- Responsive design with dark mode support using Tailwind CSS
- Gradient backgrounds and animations for visual appeal
- Structured sections: Hero, Skills, Interests, Contact
- SEO-optimized with OpenGraph metadata
- Chinese localization with proper lang attributes

### Content Management
Personal information is stored in `content/personal-info.md` which includes:
- Professional background and skills
- Personal interests and hobbies
- Contact information for social media

### Image Assets
- Profile image: `/public/images/profile image.jpg` (note the space in filename)
- Various SVG icons in `/public/` for visual elements

## Development Notes

### Styling Approach
- Uses Tailwind CSS v4 with inline theme configuration
- CSS variables defined in `globals.css` for theming
- Custom animations defined using styled-jsx in page components
- Gradient effects and hover states throughout the design

### TypeScript Configuration
- Strict mode enabled
- Path aliasing configured: `@/*` maps to `./*`
- Modern ES2017+ target with bundler module resolution

### Font Configuration
- Geist Sans and Geist Mono fonts from Google Fonts
- CSS variables set up for consistent typography
- Applied globally via the root layout

## SEO and Metadata
The site includes comprehensive metadata:
- Chinese title and description
- Keywords for search optimization
- OpenGraph tags for social sharing
- Proper lang attribute (zh-CN) set in HTML

## Content Language
This is a Chinese-language website featuring:
- Technical content in Chinese
- Personal interests in spirituality and traditional culture
- Contact information for Chinese social platforms (WeChat, Zhihu)