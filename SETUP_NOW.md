# ⚡ Setup الآن - خطوات سريعة

## الطريقة الأسرع لإعداد الـ Deployment

### الخطوة 1: نسخ SSH Key للسيرفر (مرة واحدة فقط)

```bash
# على جهازك المحلي
cat ~/.ssh/sab3a_deploy.pub
```

**انسخ الناتج كاملاً**، ثم:

```bash
# اتصل بالسيرفر
ssh root@95.179.244.192
# Password: $Gz9[s_$DZ%T3c+Y

# على السيرفر، نفذ:
mkdir -p ~/.ssh && chmod 700 ~/.ssh
echo "الصق_هنا_الـPublic_Key_اللي_نسخته" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
exit
```

---

### الخطوة 2: تشغيل السكريبت التلقائي

```bash
# على جهازك المحلي
cd ~/Desktop/My\ Space/sab3a/sab3a.co
./scripts/auto-setup-server.sh
```

هذا السكريبت سيقوم بـ:
- ✅ تثبيت Node.js, Yarn, PM2
- ✅ استنساخ المشروع
- ✅ بناء وتشغيل التطبيق
- ✅ إعداد PM2

---

### الخطوة 3: إضافة GitHub Secrets

#### 3.1 احصل على الـ Private Key:
```bash
cat ~/.ssh/sab3a_deploy
```

#### 3.2 أضف الـ Secrets في GitHub:

اذهب إلى: https://github.com/sab3a-agency/sab3a.co/settings/secrets/actions

أضف:

| Secret Name | Value |
|------------|-------|
| `SERVER_HOST` | `95.179.244.192` |
| `SERVER_USERNAME` | `root` |
| `SSH_PRIVATE_KEY` | محتوى `~/.ssh/sab3a_deploy` (كامل من BEGIN إلى END) |

---

### الخطوة 4: اختبار الـ Deployment

1. اذهب إلى: https://github.com/sab3a-agency/sab3a.co/releases
2. اضغط `Create a new release`
3. Tag: `v1.0.0`
4. Title: `Initial Release`
5. اضغط `Publish release`

🎉 سيبدأ الـ deployment تلقائياً!

---

## التحقق من النتيجة

### في GitHub:
- اذهب إلى: https://github.com/sab3a-agency/sab3a.co/actions
- شاهد الـ workflow يعمل

### على السيرفر:
```bash
ssh -i ~/.ssh/sab3a_deploy root@95.179.244.192
pm2 status
pm2 logs sab3a-frontend
```

### في المتصفح:
افتح: http://95.179.244.192:3000

---

## إذا واجهت مشكلة

### مشكلة SSH:
```bash
# اختبر الاتصال
ssh -i ~/.ssh/sab3a_deploy root@95.179.244.192

# إذا فشل، تأكد من أن الـ public key مضاف على السيرفر
```

### مشكلة PM2:
```bash
# على السيرفر
pm2 restart sab3a-frontend
pm2 logs sab3a-frontend --lines 50
```

### مشكلة Build:
```bash
# على السيرفر
cd /var/www/front-sab3a.co
yarn build
```

---

## ملفات مساعدة

- `SERVER_SETUP_COMMANDS.md` - أوامر تفصيلية خطوة بخطوة
- `DEPLOYMENT.md` - دليل شامل للـ deployment
- `QUICKSTART.md` - دليل سريع
- `.github/workflows/README.md` - شرح الـ workflows

---

## الخطوات التالية (اختياري)

### إعداد Nginx و SSL:
```bash
# على السيرفر
apt-get install -y nginx certbot python3-certbot-nginx

# استخدم ملف scripts/nginx-config.conf كمرجع
```

---

## ✅ Checklist سريع

- [ ] SSH Key منسوخ للسيرفر
- [ ] السكريبت التلقائي تم تشغيله بنجاح
- [ ] GitHub Secrets مضافة
- [ ] Release تم إنشاؤه
- [ ] Deployment يعمل تلقائياً
- [ ] التطبيق يعمل على http://95.179.244.192:3000

---

🎉 **مبروك! الآن عندك Continuous Deployment كامل!**

كل مرة تعمل Release جديد، سيرفع تلقائياً على السيرفر! 🚀

