# 📸 راهنمای تعویض عکس‌ها

این فایل راهنمای کامل برای تعویض تمام عکس‌های وب‌سایت است.

---

## 🎯 فایل‌هایی که باید ویرایش کنید:

### 1️⃣ فایل: `/components/HeroSection.tsx`
**خط 29** - عکس اصلی صفحه اول

```tsx
<ImageWithFallback
  src="آدرس-عکس-خودتان-را-اینجا-قرار-دهید"
  alt="Fitness trainer in action"
  className="w-full h-auto max-w-lg mx-auto"
/>
```

**مثال:**
- اگر عکس در پوشه public باشد: `src="/images/hero-image.jpg"`
- اگر آدرس خارجی باشد: `src="https://yourwebsite.com/images/hero.jpg"`
- اگر در پوشه assets باشد: `src="../assets/hero.jpg"` (باید import کنید)

---

### 2️⃣ فایل: `/components/CoachesSection.tsx`
**خط 38** - عکس مربی در بخش About Me

```tsx
<ImageWithFallback
  src="آدرس-عکس-مربی-را-اینجا-قرار-دهید"
  alt="Mark Torres - Fitness Coach"
  className="w-full h-[600px] lg:h-full object-cover"
/>
```

---

## 💡 روش‌های مختلف استفاده از عکس:

### روش 1: استفاده از پوشه public (پیشنهادی ✅)
1. عکس‌ها را در پوشه `public/images/` قرار دهید
2. در کد از آدرس نسبی استفاده کنید:
```tsx
src="/images/hero.jpg"
src="/images/coach.jpg"
```

### روش 2: Import کردن عکس
```tsx
import heroImage from "./assets/hero.jpg";

<ImageWithFallback src={heroImage} ... />
```

### روش 3: استفاده از URL خارجی
```tsx
src="https://yourwebsite.com/images/photo.jpg"
```

---

## 📋 لیست کامل عکس‌های مورد نیاز:

| نام عکس | محل استفاده | سایز پیشنهادی | فایل |
|---------|-------------|---------------|------|
| عکس اصلی Hero | صفحه اول | 1080x1080 | HeroSection.tsx |
| عکس مربی | About Me | 800x1200 (عمودی) | CoachesSection.tsx |

---

## ⚙️ نکات مهم:

1. **فرمت عکس**: بهترین فرمت‌ها JPG یا WebP هستند
2. **سایز عکس**: عکس‌ها را قبل از استفاده کوچک کنید (حداکثر 500KB)
3. **نام فایل**: از نام‌های انگلیسی و بدون فاصله استفاده کنید
4. **Alt text**: متن alt رو حتما تغییر بدید که توضیح دهنده عکس باشد

---

## 🔍 جستجو در کد:

می‌توانید در تمام فایل‌های پروژه دنبال این کلمات کلیدی بگردید:
- `🖼️` - تمام جاهایی که عکس باید عوض بشه با این ایموجی مشخص شده
- `ImageWithFallback` - کامپوننت عکس
- `https://images.unsplash.com` - عکس‌های موقت

---

## ✅ چک لیست نهایی:

- [ ] عکس اصلی صفحه اول عوض شد
- [ ] عکس مربی در About Me عوض شد
- [ ] تمام عکس‌ها به درستی لود می‌شوند
- [ ] سایز عکس‌ها مناسب است
- [ ] متن alt برای تمام عکس‌ها به روز شده

---

**موفق باشید! 🚀**
