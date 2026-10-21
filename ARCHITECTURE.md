# Architecture Documentation

## Table of Contents
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Technology Stack](#technology-stack)
4. [Frontend Architecture](#frontend-architecture)
5. [Backend Architecture](#backend-architecture)
6. [Shared Code](#shared-code)
7. [Naming Conventions](#naming-conventions)
8. [Code Organization](#code-organization)
9. [Security Guidelines](#security-guidelines)
10. [Testing Strategy](#testing-strategy)
11. [Deployment & Infrastructure](#deployment--infrastructure)
12. [Development Workflow](#development-workflow)
13. [Future Roadmap](#future-roadmap)

---

## Overview

This is a production-grade Fitness Trainer Website application built with a modern, scalable architecture. The application follows strict separation of concerns between frontend, backend, and shared code to ensure maintainability, testability, and scalability.

### Core Principles
- **Separation of Concerns**: Clear boundaries between UI, business logic, and data layers
- **Type Safety**: Full TypeScript coverage across all layers
- **Component Reusability**: Modular, composable components
- **API-First Design**: Backend APIs designed for frontend consumption
- **Security by Default**: Authentication, authorization, and data protection built-in
- **Test-Driven Development**: Comprehensive test coverage for all modules

---

## Project Structure

```
fintesweb/
├── frontend/                 # React/TypeScript frontend application
│   ├── src/
│   │   ├── api/             # API client services
│   │   ├── components/      # React components
│   │   │   ├── ui/          # Reusable UI components (shadcn/ui)
│   │   │   └── features/    # Feature-specific components
│   │   ├── pages/           # Page components (routes)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # Business logic services
│   │   ├── store/           # State management (Zustand/Redux)
│   │   ├── types/           # TypeScript type definitions
│   │   ├── utils/           # Utility functions
│   │   ├── constants/       # Application constants
│   │   ├── styles/          # Global styles and themes
│   │   └── assets/          # Static assets (images, fonts)
│   ├── public/              # Public static files
│   ├── tests/               # Frontend tests
│   │   ├── unit/            # Unit tests
│   │   ├── integration/     # Integration tests
│   │   └── e2e/             # End-to-end tests
│   ├── vite.config.ts       # Vite configuration
│   └── package.json
│
├── backend/                  # Node.js/Express backend API
│   ├── src/
│   │   ├── api/             # API route handlers (controllers)
│   │   │   ├── v1/          # API version 1 routes
│   │   │   └── middleware/  # Express middleware
│   │   ├── services/        # Business logic layer
│   │   ├── models/          # Data models (Mongoose/Sequelize)
│   │   ├── repositories/    # Data access layer
│   │   ├── utils/           # Utility functions
│   │   ├── types/           # TypeScript type definitions
│   │   ├── config/          # Configuration files
│   │   ├── middleware/      # Custom middleware
│   │   ├── validators/      # Input validation schemas
│   │   └── server.ts        # Express server entry point
│   ├── tests/               # Backend tests
│   │   ├── unit/            # Unit tests
│   │   ├── integration/     # Integration tests
│   │   └── api/             # API endpoint tests
│   ├── .env.example         # Environment variables template
│   └── package.json
│
├── common/                   # Shared code between frontend and backend
│   ├── types/               # Shared TypeScript types
│   ├── constants/           # Shared constants
│   ├── utils/               # Shared utility functions
│   └── validators/          # Shared validation schemas
│
├── scripts/                  # Build and deployment scripts
│   ├── build.sh             # Build script
│   ├── deploy.sh            # Deployment script
│   └── setup.sh             # Development setup script
│
├── .github/                  # GitHub workflows and templates
│   ├── workflows/           # CI/CD pipelines
│   │   ├── ci.yml           # Continuous Integration
│   │   └── deploy.yml       # Deployment pipeline
│   └── ISSUE_TEMPLATE/      # Issue templates
│
├── docker/                   # Docker configuration
│   ├── Dockerfile.frontend  # Frontend Dockerfile
│   ├── Dockerfile.backend   # Backend Dockerfile
│   └── docker-compose.yml   # Local development setup
│
├── docs/                     # Additional documentation
│   ├── API.md               # API documentation
│   └── DEPLOYMENT.md        # Deployment guide
│
├── ARCHITECTURE.md           # This file
├── README.md                 # Project README
└── .gitignore
```

---

## Technology Stack

### Frontend
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite 6+
- **Routing**: React Router DOM 7+
- **UI Library**: Radix UI (headless components)
- **Styling**: Tailwind CSS 3+
- **State Management**: Zustand (or Redux Toolkit if needed)
- **Form Handling**: React Hook Form 7+
- **HTTP Client**: Axios or Fetch API
- **Testing**: Vitest, React Testing Library, Playwright
- **Code Quality**: ESLint, Prettier, TypeScript strict mode

### Backend
- **Runtime**: Node.js 20+ (LTS)
- **Framework**: Express.js 4+
- **Language**: TypeScript 5+
- **Database**: MongoDB (Mongoose) or PostgreSQL (Prisma/Sequelize)
- **Authentication**: JWT (jsonwebtoken), bcrypt
- **Validation**: Zod or Joi
- **Testing**: Jest, Supertest
- **Code Quality**: ESLint, Prettier, TypeScript strict mode
- **API Documentation**: Swagger/OpenAPI

### Infrastructure
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Hosting**: Vercel (frontend), Railway/Render/AWS (backend)
- **Monitoring**: Sentry, LogRocket (optional)

---

## Frontend Architecture

### Directory Structure Details

#### `/frontend/src/api/`
API client services that communicate with the backend. Each service corresponds to a backend resource.

**Example**: `frontend/src/api/authService.ts`
```typescript
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import type { LoginRequest, LoginResponse, User } from '../types';

const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await axios.post(`${API_BASE_URL}/api/v1/auth/login`, credentials);
    return response.data;
  },
  
  async getCurrentUser(): Promise<User> {
    const response = await axios.get(`${API_BASE_URL}/api/v1/auth/me`);
    return response.data;
  },
};

export default authService;
```

**Naming Convention**: `{resource}Service.ts` (e.g., `userService.ts`, `coachingService.ts`)

#### `/frontend/src/components/`
React components organized by purpose:
- **`ui/`**: Reusable, generic UI components (buttons, inputs, modals, etc.) - typically from shadcn/ui
- **`features/`**: Feature-specific components (e.g., `CoachesSection.tsx`, `ContactForm.tsx`)

**Naming Convention**: 
- Components: PascalCase (e.g., `UserProfile.tsx`)
- Files match component name exactly

#### `/frontend/src/pages/`
Page-level components that represent routes. These are typically thin wrappers that compose feature components.

**Example**: `frontend/src/pages/HomePage.tsx`
```typescript
import { Layout } from '../components/Layout';
import { HeroSection } from '../components/features/HeroSection';
import { ServicesSection } from '../components/features/ServicesSection';

export function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
    </Layout>
  );
}
```

#### `/frontend/src/hooks/`
Custom React hooks for reusable logic.

**Example**: `frontend/src/hooks/useAuth.ts`
```typescript
import { useState, useEffect } from 'react';
import authService from '../api/authService';
import type { User } from '../types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService.getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
}
```

**Naming Convention**: `use{Feature}.ts` (e.g., `useAuth.ts`, `useCoaching.ts`)

#### `/frontend/src/services/`
Business logic services that don't directly interact with APIs but contain domain logic.

**Example**: `frontend/src/services/coachingService.ts`
```typescript
import type { CoachingPackage } from '../types';

export function calculatePackagePrice(package: CoachingPackage): number {
  // Business logic for price calculation
  return package.basePrice * (1 + package.taxRate);
}
```

#### `/frontend/src/store/`
State management using Zustand (or Redux Toolkit).

**Example**: `frontend/src/store/authStore.ts`
```typescript
import { create } from 'zustand';
import type { User } from '../types';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
```

#### `/frontend/src/types/`
TypeScript type definitions specific to the frontend.

**Example**: `frontend/src/types/index.ts`
```typescript
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface CoachingPackage {
  id: string;
  name: string;
  price: number;
  duration: number;
}
```

**Note**: Shared types should be in `/common/types/` instead.

#### `/frontend/src/utils/`
Pure utility functions with no side effects.

**Example**: `frontend/src/utils/format.ts`
```typescript
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}
```

#### `/frontend/src/constants/`
Application-wide constants.

**Example**: `frontend/src/constants/index.ts`
```typescript
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
export const APP_NAME = 'Fitness Trainer';
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;
```

---

## Backend Architecture

### Directory Structure Details

#### `/backend/src/api/`
API route handlers (controllers). Organized by API version.

**Example**: `backend/src/api/v1/auth.routes.ts`
```typescript
import { Router } from 'express';
import { login, register, getCurrentUser } from './auth.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validateLogin, validateRegister } from '../validators/auth.validator';

const router = Router();

router.post('/login', validateLogin, login);
router.post('/register', validateRegister, register);
router.get('/me', authenticate, getCurrentUser);

export default router;
```

**Naming Convention**: `{resource}.routes.ts` and `{resource}.controller.ts`

#### `/backend/src/services/`
Business logic layer. Services contain the core application logic and coordinate between repositories and external services.

**Example**: `backend/src/services/auth.service.ts`
```typescript
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/user.repository';
import type { LoginRequest, User } from '../types';

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(credentials: LoginRequest): Promise<{ user: User; token: string }> {
    const user = await this.userRepository.findByEmail(credentials.email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValid = await bcrypt.compare(credentials.password, user.passwordHash);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: '7d',
    });

    return { user: this.sanitizeUser(user), token };
  }

  private sanitizeUser(user: User): Omit<User, 'passwordHash'> {
    const { passwordHash, ...sanitized } = user;
    return sanitized;
  }
}
```

**Naming Convention**: `{resource}.service.ts` with class-based structure

#### `/backend/src/models/`
Data models (database schemas). Use Mongoose for MongoDB or Prisma/Sequelize for SQL.

**Example**: `backend/src/models/User.model.ts` (Mongoose)
```typescript
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  passwordHash: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>('User', UserSchema);
```

#### `/backend/src/repositories/`
Data access layer. Abstracts database operations.

**Example**: `backend/src/repositories/user.repository.ts`
```typescript
import { User, IUser } from '../models/User.model';

export class UserRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email }).exec();
  }

  async findById(id: string): Promise<IUser | null> {
    return User.findById(id).exec();
  }

  async create(userData: Partial<IUser>): Promise<IUser> {
    const user = new User(userData);
    return user.save();
  }
}
```

**Naming Convention**: `{resource}.repository.ts`

#### `/backend/src/middleware/`
Express middleware for cross-cutting concerns.

**Example**: `backend/src/middleware/auth.middleware.ts`
```typescript
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  userId?: string;
}

export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
```

#### `/backend/src/validators/`
Input validation schemas using Zod or Joi.

**Example**: `backend/src/validators/auth.validator.ts`
```typescript
import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function validateLogin(req: Request, res: Response, next: NextFunction) {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: 'Validation failed', details: error });
  }
}
```

#### `/backend/src/config/`
Configuration files for database, environment variables, etc.

**Example**: `backend/src/config/database.ts`
```typescript
import mongoose from 'mongoose';

export async function connectDatabase(): Promise<void> {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/fintesweb';
  
  try {
    await mongoose.connect(mongoUri);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
}
```

#### `/backend/src/server.ts`
Express server entry point.

**Example**: `backend/src/server.ts`
```typescript
import express from 'express';
import cors from 'cors';
import { connectDatabase } from './config/database';
import authRoutes from './api/v1/auth.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoutes);

// Error handling
app.use(errorHandler);

// Start server
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
```

---

## Shared Code

The `/common/` directory contains code shared between frontend and backend to ensure type consistency and avoid duplication.

### `/common/types/`
Shared TypeScript interfaces and types.

**Example**: `common/types/user.ts`
```typescript
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}
```

### `/common/constants/`
Shared constants.

**Example**: `common/constants/index.ts`
```typescript
export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
} as const;

export const API_VERSIONS = {
  V1: 'v1',
} as const;
```

### `/common/validators/`
Shared validation schemas (using Zod).

**Example**: `common/validators/user.validator.ts`
```typescript
import { z } from 'zod';

export const emailSchema = z.string().email();
export const passwordSchema = z.string().min(8).max(100);
```

---

## Naming Conventions

### Files and Directories
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Services/Utilities**: camelCase (e.g., `authService.ts`, `formatDate.ts`)
- **Types/Interfaces**: PascalCase (e.g., `User.ts`, `ApiResponse.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Directories**: kebab-case (e.g., `user-profile/`, `api-services/`)

### Code
- **Variables/Functions**: camelCase (e.g., `getUserData`, `isAuthenticated`)
- **Classes**: PascalCase (e.g., `AuthService`, `UserRepository`)
- **Interfaces/Types**: PascalCase (e.g., `User`, `LoginRequest`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_ATTEMPTS`)
- **Private members**: Prefix with underscore (e.g., `_privateMethod`)

### API Endpoints
- **RESTful**: Use nouns, plural for collections
  - `GET /api/v1/users` - List users
  - `GET /api/v1/users/:id` - Get user
  - `POST /api/v1/users` - Create user
  - `PUT /api/v1/users/:id` - Update user
  - `DELETE /api/v1/users/:id` - Delete user

---

## Code Organization

### Import Order
1. External dependencies (React, libraries)
2. Internal absolute imports (from `@/` or `../`)
3. Relative imports (`./`)
4. Types (at the end, with `type` keyword)

**Example**:
```typescript
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { formatCurrency } from '@/utils/format';

import type { User, CoachingPackage } from '@/types';
```

### Component Structure
```typescript
// 1. Imports
import ...

// 2. Types/Interfaces
interface ComponentProps {
  ...
}

// 3. Component
export function Component({ prop }: ComponentProps) {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Effects
  useEffect(() => {
    ...
  }, []);
  
  // 6. Handlers
  const handleClick = () => {
    ...
  };
  
  // 7. Render
  return (
    ...
  );
}
```

### Service Structure
```typescript
// 1. Imports
import ...

// 2. Types
interface ServiceConfig {
  ...
}

// 3. Service class or object
export class Service {
  constructor(private config: ServiceConfig) {}
  
  // Public methods
  public async method(): Promise<Result> {
    ...
  }
  
  // Private methods
  private helperMethod(): void {
    ...
  }
}
```

---

## Security Guidelines

### Authentication & Authorization
- **JWT Tokens**: Use HTTP-only cookies or secure token storage
- **Password Hashing**: Always use bcrypt with salt rounds >= 10
- **Token Expiration**: Set reasonable expiration times (7 days for refresh, 15min for access)
- **Role-Based Access Control (RBAC)**: Implement middleware for route protection

### Data Protection
- **Input Validation**: Validate all user inputs on both client and server
- **SQL Injection Prevention**: Use parameterized queries (Prisma/Sequelize handle this)
- **XSS Prevention**: Sanitize user inputs, use React's built-in escaping
- **CORS**: Configure CORS properly for production
- **HTTPS**: Always use TLS in production
- **Environment Variables**: Never commit secrets; use `.env` files

### Best Practices
```typescript
// ✅ Good: Validate input
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// ✅ Good: Hash passwords
const passwordHash = await bcrypt.hash(password, 10);

// ✅ Good: Sanitize user data
const sanitized = { ...user, passwordHash: undefined };

// ❌ Bad: Expose sensitive data
return { ...user, passwordHash: user.passwordHash };
```

---

## Testing Strategy

### Frontend Testing
- **Unit Tests**: Test individual components and utilities (`/frontend/tests/unit/`)
- **Integration Tests**: Test component interactions (`/frontend/tests/integration/`)
- **E2E Tests**: Test user flows with Playwright (`/frontend/tests/e2e/`)

**Example**: `frontend/tests/unit/components/Button.test.tsx`
```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### Backend Testing
- **Unit Tests**: Test services and utilities (`/backend/tests/unit/`)
- **Integration Tests**: Test database operations (`/backend/tests/integration/`)
- **API Tests**: Test endpoints with Supertest (`/backend/tests/api/`)

**Example**: `backend/tests/api/auth.test.ts`
```typescript
import request from 'supertest';
import app from '../../src/server';

describe('POST /api/v1/auth/login', () => {
  it('should return token on valid credentials', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'test@example.com', password: 'password123' });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});
```

### Test Coverage Requirements
- **Minimum Coverage**: 80% for all modules
- **Critical Paths**: 100% coverage (auth, payments, data mutations)
- **Run Tests**: Before every commit (pre-commit hook)

---

## Deployment & Infrastructure

### Docker Configuration
- **Multi-stage builds** for optimized image sizes
- **Separate Dockerfiles** for frontend and backend
- **docker-compose.yml** for local development

### CI/CD Pipeline
- **GitHub Actions** for automated testing and deployment
- **Stages**:
  1. Lint and type check
  2. Run tests
  3. Build application
  4. Deploy to staging/production

### Environment Management
- **Development**: Local with Docker Compose
- **Staging**: Preview deployments on every PR
- **Production**: Manual approval required

### Monitoring
- **Error Tracking**: Sentry integration
- **Logging**: Structured logging (Winston/Pino)
- **Performance**: APM tools (optional)

---

## Development Workflow

### Git Workflow
- **Branch Naming**: `feature/`, `bugfix/`, `hotfix/`, `chore/`
- **Commit Messages**: Conventional Commits format
  - `feat: add user authentication`
  - `fix: resolve login redirect issue`
  - `docs: update API documentation`

### Code Review Process
1. Create feature branch
2. Implement changes with tests
3. Ensure all tests pass
4. Create pull request
5. Address review feedback
6. Merge after approval

### Pre-commit Hooks
- Run ESLint
- Run Prettier
- Run type checking
- Run tests (staged files only)

---

## Future Roadmap

### Phase 1: Current State (Frontend Only)
- ✅ React + Vite setup
- ✅ Component library (Radix UI)
- ✅ Routing (React Router)
- ⏳ Backend API integration (planned)

### Phase 2: Backend Implementation
- [ ] Express.js API server
- [ ] Database setup (MongoDB/PostgreSQL)
- [ ] Authentication system (JWT)
- [ ] API endpoints for core features

### Phase 3: Enhanced Features
- [ ] User dashboard
- [ ] Booking system
- [ ] Payment integration
- [ ] Email notifications

### Phase 4: Production Readiness
- [ ] Comprehensive testing
- [ ] Performance optimization
- [ ] Security audit
- [ ] Documentation completion

### Technical Debt
- [ ] Migrate to monorepo structure (if needed)
- [ ] Add Storybook for component documentation
- [ ] Implement internationalization (i18n)
- [ ] Add analytics and monitoring

---

## Additional Notes

### Code Quality Tools
- **ESLint**: Code linting with strict rules
- **Prettier**: Code formatting
- **TypeScript**: Strict mode enabled
- **Husky**: Git hooks
- **lint-staged**: Run linters on staged files

### Documentation Standards
- **JSDoc comments** for all public functions
- **README files** in each major directory
- **API documentation** using OpenAPI/Swagger
- **Component documentation** using Storybook (future)

### Performance Guidelines
- **Code splitting**: Lazy load routes and heavy components
- **Image optimization**: Use WebP, lazy loading
- **Bundle size**: Monitor and optimize
- **Database queries**: Use indexes, avoid N+1 queries

---

**Last Updated**: 2024-01-XX
**Maintained By**: Development Team
**Version**: 1.0.0

