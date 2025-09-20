# Bridge to BITS — Development Notes

## Contact form email forwarding (EmailJS)

The contact form (`/contact`) is wired to send emails using EmailJS and forwards submissions to `bridgetobits@gmail.com`.

### One‑time setup
1. Create an EmailJS account: https://www.emailjs.com/
2. Add a service (Gmail or your provider) → copy the Service ID.
3. Create an email template → copy the Template ID. Include these variables in the template:
	- `to_email`
	- `from_name`
	- `from_email`
	- `phone`
	- `message`
4. Go to Account → API keys → copy your Public Key.
5. Add the keys to `.env.local` (already created):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart the dev server.

### Template mapping example
Subject: `New Contact — {{from_name}} ({{from_email}})`

Body:
```
To: {{to_email}}
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message:
{{message}}
```

The app sends `to_email = bridgetobits@gmail.com` by default. Change it in `app/contact/page.tsx` if needed.

