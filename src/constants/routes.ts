/**
 * Application Routes
 * Centralized route definitions
 */

export const ROUTES = {
  // Public routes
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  
  // Auth routes
  LOGIN: '/login',
  OTP: '/otp',
  REGISTER: '/register',
  
  // Package & Payment
  PACKAGES: '/packages',
  PAYMENT: '/payment',
  PAYMENT_SUCCESS: '/payment/success',
  PAYMENT_FINAL: '/payment/final',
  
  // Student dashboard
  STUDENT_DASHBOARD: '/student',
  STUDENT_OVERVIEW: '/student/overview',
  STUDENT_PROGRAMS: '/student/programs',
  STUDENT_PAYMENTS: '/student/payments',
  STUDENT_CHAT: '/student/chat',
  STUDENT_SETTINGS: '/student/settings',
  
  // Coach dashboard
  COACH_DASHBOARD: '/coach',
  COACH_OVERVIEW: '/coach/overview',
  COACH_STUDENTS: '/coach/students',
  COACH_STUDENT_PROFILE: '/coach/students/:id',
  COACH_MESSAGES: '/coach/messages',
  COACH_SETTINGS: '/coach/settings',
} as const;

