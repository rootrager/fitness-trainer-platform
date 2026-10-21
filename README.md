# 🏋️‍♀️ Fitness Trainer & Online Coaching Web Platform

A modern, full-featured digital fitness coaching and sports management web application. Built from precision Figma specifications featuring complete student and coach portals, interactive workout scheduling, and package checkout flows.

---

## 🌟 Key Features & Architecture

### 1. Dual-Sided Dashboards
- **Coach Portal**:
  - Student roster management (`CoachStudentsPage`) with detailed physical assessments.
  - Interactive direct messaging with trainees (`CoachMessagesPage`).
  - Progress charts and performance tracking with [Recharts](https://recharts.org/).
- **Student / Athlete Portal**:
  - Daily workout and diet plan inspection (`StudentProgramsPage`).
  - Integrated chat assistant and communication (`StudentChatPage`).
  - Invoice history and payment tracking (`StudentPaymentsPage`).

### 2. High-Conversion Public Website
- Responsive hero sections, trainer highlights, service catalogs, and pricing tiers.
- Multi-step onboarding, phone/OTP verification components, and payment processing mockups.

### 3. Design System & UI Components
- Built on top of **Radix UI** primitives and **shadcn/ui** patterns.
- High-precision typography, responsive layouts, and full dark/light theme support via `next-themes`.
- Detailed architectural specs documented in `ARCHITECTURE.md` and `DESIGN_SYSTEM.md`.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS, Class Variance Authority (`cva`), `tailwind-merge`
- **UI Components**: Radix UI Primitives, Lucide Icons, Vaul Drawer, Sonner Toaster
- **Forms & Validation**: React Hook Form, Input OTP
- **Data Visualization**: Recharts

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/rootrager/fitness-trainer-platform.git
cd fitness-trainer-platform
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build

```bash
npm run build
```
The compiled assets will be placed in the `dist` directory ready for deployment.

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
