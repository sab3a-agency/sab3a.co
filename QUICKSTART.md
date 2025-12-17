# 🚀 Quick Start Guide - Automated Deployment

## خطوات سريعة لإعداد الـ Deployment التلقائي

### 1️⃣ إعداد السيرفر (مرة واحدة فقط)

#### على السيرفر:
```bash
# تسجيل الدخول للسيرفر
ssh username@your-server-ip

# تحميل وتشغيل سكريبت الإعداد
curl -o setup-server.sh https://raw.githubusercontent.com/sab3a-agency/sab3a.co/main/scripts/setup-server.sh
chmod +x setup-server.sh
./setup-server.sh
```

هذا السكريبت سيقوم بـ:
- ✅ تثبيت Node.js 20
- ✅ تثبيت Yarn
- ✅ تثبيت PM2
- ✅ استنساخ المشروع
- ✅ بناء وتشغيل التطبيق

---

### 2️⃣ إعداد Nginx و SSL (اختياري لكن موصى به)

```bash
# على السيرفر
curl -o setup-nginx-ssl.sh https://raw.githubusercontent.com/sab3a-agency/sab3a.co/main/scripts/setup-nginx-ssl.sh
chmod +x setup-nginx-ssl.sh
./setup-nginx-ssl.sh
```

سيطلب منك:
- اسم الدومين (مثل: sab3a.co)
- البريد الإلكتروني للـ SSL

---

### 3️⃣ إعداد GitHub Secrets

#### الحصول على SSH Key:
```bash
# على جهازك المحلي
cat ~/.ssh/id_rsa
```

#### إضافة Secrets في GitHub:
1. اذهب إلى: https://github.com/sab3a-agency/sab3a.co/settings/secrets/actions
2. اضغط `New repository secret`
3. أضف الـ Secrets التالية:

| Secret Name | Value | مثال |
|------------|-------|------|
| `SERVER_HOST` | عنوان IP السيرفر | `123.456.789.0` |
| `SERVER_USERNAME` | اسم المستخدم | `ubuntu` |
| `SSH_PRIVATE_KEY` | محتوى `~/.ssh/id_rsa` | `-----BEGIN RSA PRIVATE KEY-----...` |
| `SERVER_PORT` | منفذ SSH (اختياري) | `22` |

---

### 4️⃣ عمل Release جديد

#### من GitHub UI:
1. اذهب إلى: https://github.com/sab3a-agency/sab3a.co/releases
2. اضغط `Create a new release`
3. اختر tag جديد: `v1.0.0`
4. أضف عنوان ووصف
5. اضغط `Publish release`
6. 🎉 سيبدأ الـ deployment تلقائياً!

#### من Command Line:
```bash
# إنشاء tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# رفع الـ tag
git push origin v1.0.0

# ثم اذهب لـ GitHub وأنشئ release من الـ tag
```

---

### 5️⃣ مراقبة الـ Deployment

#### في GitHub:
- اذهب إلى: https://github.com/sab3a-agency/sab3a.co/actions
- شاهد الـ workflow يعمل live

#### على السيرفر:
```bash
# حالة التطبيق
pm2 status

# عرض الـ logs
pm2 logs sab3a-frontend

# إعادة تشغيل
pm2 restart sab3a-frontend
```

---

## 🔄 Workflow التلقائي

عند كل release جديد، سيحدث التالي تلقائياً:

1. ✅ GitHub Actions يبدأ العمل
2. ✅ بناء المشروع (build)
3. ✅ الاتصال بالسيرفر عبر SSH
4. ✅ سحب آخر التحديثات (git pull)
5. ✅ تثبيت التبعيات (yarn install)
6. ✅ بناء المشروع على السيرفر (yarn build)
7. ✅ إعادة تشغيل PM2 (pm2 restart)
8. ✅ حفظ إعدادات PM2 (pm2 save)
9. 🎉 الموقع محدث!

---

## 📝 ملاحظات مهمة

### الأمان:
- ✅ لا تشارك الـ SSH private key مع أحد
- ✅ استخدم SSH keys بدلاً من passwords
- ✅ فعّل الـ firewall على السيرفر
- ✅ استخدم SSL/HTTPS دائماً

### الأداء:
- ✅ PM2 يدير العملية تلقائياً
- ✅ إعادة التشغيل التلقائي عند الأخطاء
- ✅ Zero-downtime deployment
- ✅ Logs منظمة في `/var/log/pm2/`

### الصيانة:
```bash
# تحديث النظام
sudo apt-get update && sudo apt-get upgrade -y

# تحديث Node.js packages
cd /var/www/front-sab3a.co
yarn upgrade

# تنظيف PM2 logs
pm2 flush

# إعادة تشغيل السيرفر
sudo reboot
```

---

## 🆘 المساعدة

إذا واجهت أي مشكلة:

1. **راجع الـ logs:**
   - GitHub Actions logs
   - PM2 logs: `pm2 logs`
   - Nginx logs: `sudo tail -f /var/log/nginx/error.log`

2. **راجع التوثيق:**
   - `DEPLOYMENT.md` - دليل شامل
   - `.github/workflows/README.md` - شرح الـ workflows

3. **أوامر مفيدة:**
   ```bash
   # اختبار SSH connection
   ssh username@server_ip
   
   # اختبار Nginx config
   sudo nginx -t
   
   # إعادة تشغيل كل شيء
   pm2 restart all
   sudo systemctl restart nginx
   ```

---

## ✅ Checklist

قبل عمل أول deployment:

- [ ] السيرفر جاهز (Node.js, Yarn, PM2)
- [ ] المشروع مستنسخ على السيرفر
- [ ] PM2 يعمل بنجاح
- [ ] GitHub Secrets مضافة
- [ ] SSH connection يعمل
- [ ] Nginx و SSL معدين (اختياري)
- [ ] Firewall معد بشكل صحيح

---

🎉 **مبروك! الآن عندك Continuous Deployment كامل!**

