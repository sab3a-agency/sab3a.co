# 🚀 Server Setup Commands

## معلومات الاتصال بالسيرفر:
```
IP: 95.179.244.192
Username: root
Password: $Gz9[s_$DZ%T3c+Y
```

---

## الخطوة 1: الاتصال بالسيرفر

```bash
ssh root@95.179.244.192
# أدخل Password: $Gz9[s_$DZ%T3c+Y
```

---

## الخطوة 2: تنفيذ الأوامر التالية على السيرفر

### 1. تحديث النظام
```bash
apt-get update -y
apt-get upgrade -y
```

### 2. تثبيت Node.js 20
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
node --version
```

### 3. تثبيت Yarn
```bash
npm install -g yarn
yarn --version
```

### 4. تثبيت PM2
```bash
npm install -g pm2
pm2 --version
```

### 5. إعداد PM2 Startup
```bash
pm2 startup systemd -u root --hp /root
```

### 6. تثبيت Git (إذا لم يكن مثبتاً)
```bash
apt-get install -y git
```

### 7. إنشاء مجلد المشروع
```bash
mkdir -p /var/www/front-sab3a.co
cd /var/www/front-sab3a.co
```

### 8. استنساخ المشروع
```bash
git clone https://github.com/sab3a-agency/sab3a.co .
```

### 9. تثبيت التبعيات
```bash
yarn install --frozen-lockfile
```

### 10. بناء المشروع
```bash
yarn build
```

### 11. إنشاء مجلد الـ logs
```bash
mkdir -p /var/log/pm2
```

### 12. تشغيل التطبيق مع PM2
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 status
```

### 13. إعداد SSH Key للـ GitHub Actions

```bash
# إنشاء مجلد SSH إذا لم يكن موجوداً
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# إضافة الـ public key (سنضيفه من جهازك المحلي)
# انتظر التعليمات التالية
```

---

## الخطوة 3: إضافة SSH Key من جهازك المحلي

### على جهازك المحلي (Mac):

```bash
# عرض الـ public key
cat ~/.ssh/sab3a_deploy.pub
```

### نسخ الـ key وإضافته للسيرفر:

```bash
# على السيرفر، نفذ:
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDTgqYDCPy94Y+OZahs8j+b3DV7TpEDp0dFa0db/X5QGIS0Qnm8K6+bVkfmFxvrHHuNUNFm3JSCQexx1GIlrJ2LkJrlJIbZcCjE54OMkjlmG9sT8ONWRancOAAKe4zxoF8qCQ6Ix9LOmxUDrgkfh37ZeTz5LscaktcfAaZuhadIGATAInjZ0khceRO1IfWcLw2Vw/+IkcTpfUQWi3edDKhB8W67xHygoLelDiYz72F1rrKVITVVYwfW865+UJQwLnc3+pIMAry758bBwnBiVl/fpBiNpu9b/SMDrmO+PhEaWttYK/qnpmOCvDXIEqYVK4cwsPe+9Cgqq/XkfOmQNbSxe+WKjAhPUbAAWZE97678jmQwwpXcOdLWlb+81dUDMo0kgaF8Yven8q2HIFJB+zHs2Lowy7fAiLtYCx+7VjSO/WxSHQCxpP5+/NCUklrUCat+0ZsQCOd6wEsSPnI+V1P0RazHvo0JVuIBdn7ys6/tpV6nWzXJ8z2Iy3xzNQ/qyBszzkT5pGPv2gDUosNTvnewQsSkuDT93tYcoRBB0FQRZZgImSvjc7+VGPxzK9KXkBGvaImNRu3l0M9flb595s+haECfvajq82JNPNUC4YhJnaoIx/wmOqQh3zfWXUS04eUeQUv4TQGITzj+nxaLQhDIdGb30MeXhXX3vL3kvAHFrw== sab3a-deployment" >> ~/.ssh/authorized_keys

chmod 600 ~/.ssh/authorized_keys
```

---

## الخطوة 4: اختبار SSH بدون password

### من جهازك المحلي:

```bash
ssh -i ~/.ssh/sab3a_deploy root@95.179.244.192
```

إذا نجح الاتصال بدون طلب password، فالإعداد تم بنجاح! ✅

---

## الخطوة 5: إضافة GitHub Secrets

1. اذهب إلى: https://github.com/sab3a-agency/sab3a.co/settings/secrets/actions
2. اضغط `New repository secret`
3. أضف الـ Secrets التالية:

### SERVER_HOST
```
95.179.244.192
```

### SERVER_USERNAME
```
root
```

### SSH_PRIVATE_KEY
```bash
# على جهازك المحلي، نفذ:
cat ~/.ssh/sab3a_deploy

# انسخ كل المحتوى (من BEGIN إلى END) وضعه في GitHub Secret
```

### SERVER_PORT (اختياري)
```
22
```

---

## الخطوة 6: اختبار الـ Deployment

### إنشاء Release جديد:

1. اذهب إلى: https://github.com/sab3a-agency/sab3a.co/releases
2. اضغط `Create a new release`
3. Tag: `v1.0.0`
4. Title: `Initial Release`
5. اضغط `Publish release`

سيبدأ الـ deployment تلقائياً! 🎉

---

## التحقق من التطبيق

### على السيرفر:
```bash
pm2 status
pm2 logs sab3a-frontend
```

### في المتصفح:
```
http://95.179.244.192:3000
```

---

## إعداد Nginx (اختياري)

إذا أردت استخدام domain مع SSL:

```bash
# على السيرفر
apt-get install -y nginx certbot python3-certbot-nginx

# إنشاء Nginx config
nano /etc/nginx/sites-available/sab3a.co
```

انسخ محتوى ملف `scripts/nginx-config.conf` وعدّل الـ domain.

```bash
# تفعيل الموقع
ln -s /etc/nginx/sites-available/sab3a.co /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# اختبار وإعادة تشغيل
nginx -t
systemctl restart nginx

# الحصول على SSL
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## ✅ Checklist

- [ ] Node.js 20 مثبت
- [ ] Yarn مثبت
- [ ] PM2 مثبت ويعمل
- [ ] المشروع مستنسخ في `/var/www/front-sab3a.co`
- [ ] التطبيق يعمل على PM2
- [ ] SSH Key مضاف للسيرفر
- [ ] GitHub Secrets مضافة
- [ ] اختبار Release يعمل
- [ ] Nginx معد (اختياري)

---

🎉 **بعد إكمال هذه الخطوات، سيكون عندك Continuous Deployment كامل!**

