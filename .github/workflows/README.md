# GitHub Actions Workflows

## 📋 Available Workflows

### 1. CI Workflow (`ci.yml`)
**Trigger:** على كل Pull Request للـ main branch

**الخطوات:**
- ✅ Checkout code
- ✅ Setup Node.js 20 with yarn cache
- ✅ Install dependencies
- ✅ Build Next.js application

**الهدف:** التأكد من أن الكود يعمل بدون أخطاء قبل الـ merge

---

### 2. Deploy Workflow (`deploy.yml`)
**Trigger:** عند إنشاء Release جديد

**الخطوات:**
- ✅ Checkout code
- ✅ Setup Node.js 20 with yarn cache
- ✅ Install dependencies
- ✅ Build Next.js application
- ✅ Deploy to production server via SSH
- ✅ Restart PM2 process

**الهدف:** رفع النسخة الجديدة تلقائياً على السيرفر

---

## 🔐 Required GitHub Secrets

لتفعيل الـ Deploy Workflow، أضف الـ Secrets التالية:

| Secret | Description | Required |
|--------|-------------|----------|
| `SERVER_HOST` | عنوان IP أو domain للسيرفر | ✅ Yes |
| `SERVER_USERNAME` | اسم المستخدم SSH | ✅ Yes |
| `SSH_PRIVATE_KEY` | SSH private key | ✅ Yes |
| `SERVER_PORT` | منفذ SSH (default: 22) | ❌ Optional |

### كيفية إضافة Secrets:
1. اذهب إلى: `Settings` → `Secrets and variables` → `Actions`
2. اضغط `New repository secret`
3. أضف كل secret من القائمة أعلاه

---

## 🚀 كيفية عمل Release

### من GitHub UI:
1. اذهب إلى `Releases` → `Create a new release`
2. اختر tag جديد (مثل: `v1.0.0`)
3. أضف عنوان ووصف للـ release
4. اضغط `Publish release`
5. سيبدأ الـ deployment تلقائياً! 🎉

### من Command Line:
```bash
# إنشاء tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# رفع الـ tag
git push origin v1.0.0

# ثم اذهب لـ GitHub وأنشئ release من الـ tag
```

---

## 📊 مراقبة الـ Deployment

### في GitHub:
- اذهب إلى `Actions` tab
- شاهد الـ workflow يعمل live
- تحقق من الـ logs إذا حدث خطأ

### على السيرفر:
```bash
# حالة PM2
pm2 status

# عرض الـ logs
pm2 logs sab3a-frontend

# إعادة تشغيل
pm2 restart sab3a-frontend
```

---

## 🔧 Troubleshooting

### إذا فشل الـ deployment:

1. **تحقق من الـ Secrets:**
   - تأكد من أن جميع الـ secrets مضافة بشكل صحيح
   - تحقق من أن الـ SSH key صحيح

2. **تحقق من الـ SSH connection:**
   ```bash
   ssh username@server_ip
   ```

3. **تحقق من الـ logs:**
   - في GitHub Actions
   - على السيرفر: `pm2 logs`

4. **تحقق من الـ permissions:**
   ```bash
   # على السيرفر
   ls -la /var/www/front-sab3a.co
   ```

---

## 📝 ملاحظات

- الـ deployment يحدث فقط عند إنشاء Release (ليس على كل push)
- إذا أردت deployment على كل push للـ main، قم بإلغاء التعليق في `deploy.yml`
- تأكد من أن السيرفر يحتوي على Node.js و yarn و PM2
- راجع `DEPLOYMENT.md` للمزيد من التفاصيل

