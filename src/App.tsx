import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { OnlineCoachingPage } from "./pages/OnlineCoachingPage";
import { ContactPage } from "./pages/ContactPage";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { OTPPage } from "./pages/auth/OTPPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { PackagesPage } from "./pages/PackagesPage";
import { PaymentPage } from "./pages/PaymentPage";
import { PaymentSuccessPage } from "./pages/PaymentSuccessPage";
import { PaymentFinalPage } from "./pages/PaymentFinalPage";
import { StudentOverviewPage } from "./pages/student/StudentOverviewPage";
import { StudentProgramsPage } from "./pages/student/StudentProgramsPage";
import { StudentPaymentsPage } from "./pages/student/StudentPaymentsPage";
import { StudentChatPage } from "./pages/student/StudentChatPage";
import { StudentSettingsPage } from "./pages/student/StudentSettingsPage";
import { CoachOverviewPage } from "./pages/coach/CoachOverviewPage";
import { CoachStudentsPage } from "./pages/coach/CoachStudentsPage";
import { CoachStudentProfilePage } from "./pages/coach/CoachStudentProfilePage";
import { CoachMessagesPage } from "./pages/coach/CoachMessagesPage";
import { CoachSettingsPage } from "./pages/coach/CoachSettingsPage";
import { ROUTES } from "./constants/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/old-home" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/online-coaching" element={<Layout><OnlineCoachingPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        
        {/* Auth Routes */}
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.OTP} element={<OTPPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        
        {/* Package & Payment Routes */}
        <Route path={ROUTES.PACKAGES} element={<PackagesPage />} />
        <Route path={ROUTES.PAYMENT} element={<PaymentPage />} />
        <Route path={ROUTES.PAYMENT_SUCCESS} element={<PaymentSuccessPage />} />
        <Route path={ROUTES.PAYMENT_FINAL} element={<PaymentFinalPage />} />
        
        {/* Student Dashboard Routes */}
        <Route path={ROUTES.STUDENT_OVERVIEW} element={<StudentOverviewPage />} />
        <Route path={ROUTES.STUDENT_PROGRAMS} element={<StudentProgramsPage />} />
        <Route path={ROUTES.STUDENT_PAYMENTS} element={<StudentPaymentsPage />} />
        <Route path={ROUTES.STUDENT_CHAT} element={<StudentChatPage />} />
        <Route path={ROUTES.STUDENT_SETTINGS} element={<StudentSettingsPage />} />
        
        {/* Coach Dashboard Routes */}
        <Route path={ROUTES.COACH_OVERVIEW} element={<CoachOverviewPage />} />
        <Route path={ROUTES.COACH_STUDENTS} element={<CoachStudentsPage />} />
        <Route path={ROUTES.COACH_STUDENT_PROFILE} element={<CoachStudentProfilePage />} />
        <Route path={ROUTES.COACH_MESSAGES} element={<CoachMessagesPage />} />
        <Route path={ROUTES.COACH_SETTINGS} element={<CoachSettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
