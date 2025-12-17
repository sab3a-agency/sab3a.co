# 🚀 Deployment Guide

## إعداد GitHub Secrets

لتفعيل الـ Continuous Deployment، تحتاج إلى إضافة الـ Secrets التالية في GitHub:

### الخطوات:
1. اذهب إلى: `Settings` → `Secrets and variables` → `Actions`
2. اضغط على `New repository secret`
3. أضف الـ Secrets التالية:

### Required Secrets:

| Secret Name | Description | Example |
|------------|-------------|---------|
| `SERVER_HOST` | عنوان IP أو domain للسيرفر | `123.456.789.0` أو `server.sab3a.co` |
| `SERVER_USERNAME` | اسم المستخدم للـ SSH | `root` أو `ubuntu` |
| `SSH_PRIVATE_KEY` | الـ SSH private key للوصول للسيرفر | محتوى ملف `~/.ssh/id_rsa` |
| `SERVER_PORT` | منفذ SSH (اختياري، الافتراضي 22) | `22` |

---

## 📝 كيفية الحصول على SSH Private Key

### على جهازك المحلي:

```bash
# إنشاء SSH key جديد (إذا لم يكن موجود)
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# عرض الـ private key
cat ~/.ssh/id_rsa

# نسخ الـ public key للسيرفر
ssh-copy-id username@server_ip
```

### على السيرفر:

تأكد من أن الـ public key موجود في:
```bash
~/.ssh/authorized_keys
```

---

## 🔄 كيفية عمل Deployment

### 1. Deployment عند إنشاء Release:

```bash
# إنشاء tag جديد
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# أو من GitHub:
# اذهب إلى Releases → Create a new release
```

### 2. Deployment يدوي (اختياري):

إذا أردت تفعيل الـ deployment على كل push للـ main:

افتح ملف `.github/workflows/deploy.yml` وقم بإلغاء التعليق على:
```yaml
push:
  branches: [ main ]
```

---

## 🖥️ إعداد السيرفر

تأكد من أن السيرفر يحتوي على:

### 1. تثبيت Node.js و Yarn:
```bash
# تثبيت Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# تثبيت Yarn
npm install -g yarn
```

### 2. تثبيت PM2:
```bash
npm install -g pm2

# تفعيل PM2 عند بدء التشغيل
pm2 startup
pm2 save
```

### 3. إعداد المشروع على السيرفر:
```bash
# إنشاء المجلد
sudo mkdir -p /var/www/front-sab3a.co
sudo chown -R $USER:$USER /var/www/front-sab3a.co

# استنساخ المشروع
cd /var/www
git clone https://github.com/sab3a-agency/sab3a.co front-sab3a.co
cd front-sab3a.co

# تثبيت التبعيات
yarn install --frozen-lockfile

# بناء المشروع
yarn build

# تشغيل PM2
pm2 start ecosystem.config.js
pm2 save
```

### 4. إنشاء مجلدات الـ logs:
```bash
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2
```

---

## ✅ التحقق من الـ Deployment

بعد كل deployment، يمكنك التحقق من:

### 1. حالة PM2:
```bash
pm2 status
pm2 logs sab3a-frontend
```

### 2. الموقع:
افتح المتصفح على: `http://your-server-ip:3000`

---

## 🔧 استكشاف الأخطاء

### إذا فشل الـ deployment:

1. **تحقق من الـ logs في GitHub Actions**
2. **تحقق من الـ SSH connection:**
   ```bash
   ssh username@server_ip
   ```
3. **تحقق من PM2 logs:**
   ```bash
   pm2 logs sab3a-frontend --lines 100
   ```
4. **إعادة تشغيل PM2:**
   ```bash
   pm2 restart sab3a-frontend
   ```

---

## 📊 Workflows المتاحة

### 1. CI Workflow (`.github/workflows/ci.yml`)
- يعمل على كل Pull Request
- يقوم بـ build و test

### 2. Deploy Workflow (`.github/workflows/deploy.yml`)
- يعمل عند إنشاء Release جديد
- يقوم بـ deploy على السيرفر تلقائياً

