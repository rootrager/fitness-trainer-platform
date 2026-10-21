# Design System Documentation

## Overview
This document describes the complete design system for the Fitness Coach Platform, built with React, TypeScript, Tailwind CSS, and Shadcn UI.

## Design Principles

### Style Guidelines
- **Minimal & Clean**: Clean layouts with plenty of white space
- **Rounded Corners**: 12-16px border radius for cards and buttons
- **Color Scheme**: Purple (#6E35FF) as primary accent
- **Typography**: Strong hierarchy with clear font sizes
- **Spacing**: Generous spacing between elements
- **Icons**: Lucide React icons throughout

## Color Palette

### Primary Colors
- **Primary**: `#6E35FF` (Purple)
- **Primary Hover**: `#5D2EE6`
- **Primary Light**: `#8B5FFF`
- **Primary Dark**: `#5A2ACC`

### Neutral Grays
- **Gray 50**: `#fafafa`
- **Gray 100**: `#f5f5f5`
- **Gray 200**: `#e5e5e5`
- **Gray 300**: `#d4d4d4`
- **Gray 400**: `#a3a3a3`
- **Gray 500**: `#737373`
- **Gray 600**: `#525252`
- **Gray 700**: `#404040`
- **Gray 800**: `#262626`
- **Gray 900**: `#171717`

### Status Colors
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Amber)
- **Error**: `#ef4444` (Red)
- **Info**: `#3b82f6` (Blue)

## Typography

### Font Family
- **Sans**: Inter, system-ui, sans-serif
- **Display**: Inter, system-ui, sans-serif

### Font Sizes
- **xs**: 0.75rem (12px)
- **sm**: 0.875rem (14px)
- **base**: 1rem (16px)
- **lg**: 1.125rem (18px)
- **xl**: 1.25rem (20px)
- **2xl**: 1.5rem (24px)
- **3xl**: 1.875rem (30px)
- **4xl**: 2.25rem (36px)
- **5xl**: 3rem (48px)
- **6xl**: 3.75rem (60px)

### Font Weights
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Components

### Buttons
- **Primary**: Purple background, white text
- **Secondary**: Light gray background
- **Outline**: Transparent with border
- **Ghost**: Transparent, hover effect
- **Sizes**: sm, default, lg

### Cards
- White background
- Rounded corners (12px)
- Subtle shadow
- Padding: 24px

### Inputs
- Light gray background (#f9fafb)
- Rounded corners (8px)
- Focus: Purple ring
- Height: 36px (default)

### Status Badges
- **Paid/Ready/Sent**: Green with check icon
- **Pending/Preparing**: Gray with clock icon
- **Failed**: Red with X icon

### Sidebar
- Fixed right position (RTL layout)
- Width: 256px (16rem)
- White background
- Active state: Purple background

## Layout

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Spacing Scale
- **xs**: 0.5rem (8px)
- **sm**: 0.75rem (12px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)
- **4xl**: 6rem (96px)

## Pages Structure

### Public Pages
1. **Landing Page** (`/`)
   - Hero section
   - Features (3 cards)
   - How it works (4 steps)
   - Testimonials (3 cards)
   - Footer

### Authentication
2. **Login** (`/login`)
   - Phone number input
   - Send OTP button

3. **OTP Verification** (`/otp`)
   - 6-digit OTP input
   - Resend code option
   - Countdown timer

4. **Registration** (`/register`)
   - Personal information form
   - Age, weight, height, gender
   - Training experience
   - Goal

### Package & Payment
5. **Choose Package** (`/packages`)
   - 3 package cards
   - Price, features, duration
   - Select button

6. **Payment** (`/payment`)
   - Order summary
   - Amount
   - Proceed to Zarinpal

7. **Payment Success** (`/payment/success`)
   - Success icon
   - Go to dashboard button

8. **Final Payment** (`/payment/final`)
   - Final payment amount
   - Proceed to payment

### Student Dashboard
9. **Overview** (`/student/overview`)
   - Initial payment status
   - Final payment status
   - Package info
   - Program status

10. **Programs** (`/student/programs`)
    - List of uploaded programs
    - Preview cards
    - View fullscreen
    - Download option

11. **Payments** (`/student/payments`)
    - Payment history table
    - Status badges
    - Transaction IDs

12. **Chat** (`/student/chat`)
    - Message thread with coach
    - Input box
    - Send button

13. **Settings** (`/student/settings`)
    - Personal info edit
    - Save changes

### Coach Dashboard
14. **Overview** (`/coach/overview`)
    - Active students count
    - New signups
    - Pending payments
    - Unread messages

15. **Students** (`/coach/students`)
    - Students table
    - Payment statuses
    - Program statuses
    - View profile button

16. **Student Profile** (`/coach/students/:id`)
    - Personal information
    - Package & payment info
    - Upload program (JPG)
    - Chat thread

17. **Messages** (`/coach/messages`)
    - Conversation list (left)
    - Chat thread (right)
    - Search functionality

18. **Settings** (`/coach/settings`)
    - Personal info edit

## Responsive Design

### Mobile (< 768px)
- Sidebar hidden, accessible via menu button
- Stacked layouts
- Full-width cards
- Touch-friendly buttons (min 44px height)

### Tablet (768px - 1024px)
- 2-column grids
- Sidebar visible on large tablets

### Desktop (> 1024px)
- Full sidebar visible
- Multi-column layouts
- Maximum content width: 1280px

## RTL Support

The application is designed for Persian/Iranian users with RTL (Right-to-Left) layout:
- Sidebar on the right
- Text alignment: right
- Icons positioned accordingly
- Number formatting: Persian numerals

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus states visible
- Color contrast ratios meet WCAG AA

## Usage Examples

### Button
```tsx
<Button variant="default" size="lg">
  شروع کنید
</Button>
```

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>عنوان</CardTitle>
  </CardHeader>
  <CardContent>
    محتوا
  </CardContent>
</Card>
```

### Status Badge
```tsx
<StatusBadge status="paid" />
```

## Notes

- All prices displayed in Persian numerals (Toman)
- Dates formatted in Persian calendar
- Phone numbers: Iranian format (+98)
- Payment gateway: Zarinpal integration ready

