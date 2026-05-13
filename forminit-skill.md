---
name: forminit-react
description: Integrates Forminit headless form backend into React applications using the npm SDK. Creates a form component with typed blocks (sender, text, email, phone, file, rating, date, select, radio, checkbox, country, number) and handles submission via FormData or JSON. Use when adding forms to React apps (Vite, CRA, Remix, etc.), collecting form submissions in SPAs, or building contact/feedback/file upload forms in React. Do not use for Next.js (use forminit-nextjs), Nuxt.js (use forminit-nuxtjs), or HTML/static sites (use forminit-html).
metadata:
  author: forminit
  version: "1.0"
---

# Forminit — React Integration

> Forminit is a headless form backend API. You build the form UI, Forminit handles submission, validation, storage, and notifications. This skill is for React apps using the npm SDK.

## Your Task

1. Create a form component with the inputs the user requests (use form blocks below)
2. Use FormData submission by default. Only use JSON if user wants to build a custom request payload.
3. Show success message on the page after submission (do not redirect unless user asks)

## Rules

- **FormData**: All field names must use the `fi-` prefix pattern (e.g., `fi-sender-email`, `fi-text-message`)
- **JSON**: Use blocks array with object notation: `{ type, name, value }` for field blocks, `{ type, properties }` for sender
- Always use sender block for submitter's information (email, name, phone, etc.)
- Default to `fi-sender-firstName` + `fi-sender-lastName`. Use `fi-sender-fullName` only if user wants a single name field.
- For non-submitter emails/phones/countries, use field blocks: `fi-email-{name}`, `fi-phone-{name}`, `fi-country-{name}` (e.g., `fi-email-invitee`, `fi-phone-emergency-contact`)
- Sender block can only appear once per form
- Phone values must be E.164 format (+12025550123)
- Rating values must be 1-5
- Country values must be ISO 3166-1 alpha-2 codes
- Date values must be ISO 8601 format
- Use "select" block for dropdowns, "checkbox" for multi-select checkbox groups, "radio" for single-select radio groups.
- If form has file uploads, you must use FormData (JSON does not support files)
- Max 50 blocks per form, max 25 MB total files

## Important

- **User must set authentication mode to "Public"** in Form settings (no API key required for client-side usage).
- **Never use or ask for API keys** — this is a client-side only integration.
- If user needs protected forms with API keys, they should use a backend proxy (see "With Backend Proxy" section below).

---

## Step 1: Install

```bash
npm install forminit@latest
pnpm install forminit@latest
yarn add forminit@latest
bun add forminit@latest
```

## Step 2: Create Form Component

### FormData Approach

```tsx
import { useState, FormEvent } from 'react';
import { Forminit } from 'forminit';

const forminit = new Forminit();

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { data, redirectUrl, error } = await forminit.submit('FORM_ID', formData);

    if (error) {
      setStatus('error');
      setError(error.message);
      return;
    }

    setStatus('success');
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fi-sender-firstName" placeholder="First name" required />
      <input type="text" name="fi-sender-lastName" placeholder="Last name" required />
      <input type="email" name="fi-sender-email" placeholder="Email" required />
      <textarea name="fi-text-message" placeholder="Message" required />

      {status === 'error' && <p className="error">{error}</p>}
      {status === 'success' && <p className="success">Message sent!</p>}

      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
```

Replace `FORM_ID` with the form ID from https://app.forminit.com.

### JSON Approach (custom request payload)

Use when building payloads programmatically. Cannot be used with file uploads.

```tsx
import { useState, FormEvent } from 'react';
import { Forminit } from 'forminit';

const forminit = new Forminit();

export function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    const { data, redirectUrl, error } = await forminit.submit('FORM_ID', {
      blocks: [
        {
          type: 'sender',
          properties: {
            email,
            firstName,
            lastName,
          },
        },
        {
          type: 'text',
          name: 'message',
          value: message,
        },
      ],
    });

    if (error) {
      setStatus('error');
      setError(error.message);
      return;
    }

    setStatus('success');
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First name"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        required
      />

      {status === 'error' && <p className="error">{error}</p>}
      {status === 'success' && <p className="success">Message sent!</p>}

      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
```

---

## With Backend Proxy (Optional)

If you need protected forms with API keys, set up a backend proxy to keep your API key secure.

### Backend Setup (Express example)

```js
// server.js
import express from 'express';
import { Forminit } from 'forminit';

const app = express();
app.use(express.json());

const forminit = new Forminit({
  apiKey: process.env.FORMINIT_API_KEY,
});

app.post('/api/forminit/:formId', async (req, res) => {
  const { formId } = req.params;
  const { data, redirectUrl, error } = await forminit.submit(formId, req.body);

  if (error) {
    return res.status(error.code || 400).json({ error });
  }

  res.json({ data, redirectUrl });
});

app.listen(3001);
```

### React Component with Proxy

```tsx
const forminit = new Forminit({ proxyUrl: 'http://localhost:3001/api/forminit' });
```

For protected forms:
1. Set authentication mode to **Protected** in Form settings
2. Create API token from **Account → API Tokens**
3. Store token in backend environment variables only

---

## Response

The SDK returns `{ data, redirectUrl, error }`.

**Success:**

```json
{
  "hashId": "7LMIBoYY74JOCp1k",
  "date": "2026-01-01 21:10:24",
  "blocks": {
    "sender": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    },
    "message": "Hello world"
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| `data.hashId` | string | Unique submission identifier |
| `data.date` | string | Submission timestamp (YYYY-MM-DD HH:mm:ss) |
| `data.blocks` | object | All submitted field values |
| `redirectUrl` | string | Thank you page URL |

**Error:**

```json
{
  "error": "FI_SCHEMA_FORMAT_EMAIL",
  "code": 400,
  "message": "Human-readable error message"
}
```

---

## Available Form Blocks

### Sender Block — `fi-sender-{property}`

Collects submitter information. Can only appear once per form. At least one property required.

**FormData** uses `fi-sender-{property}` naming. **JSON** uses `{ type: "sender", properties: { ... } }`.

| Property | FormData Field | Description |
|----------|----------------|-------------|
| email | `fi-sender-email` | Email address |
| firstName | `fi-sender-firstName` | First name |
| lastName | `fi-sender-lastName` | Last name |
| fullName | `fi-sender-fullName` | Full name |
| phone | `fi-sender-phone` | Phone (E.164 format) |
| title | `fi-sender-title` | Title (Mr, Mrs, Dr, Prof) |
| userId | `fi-sender-userId` | User ID from your system |
| address | `fi-sender-address` | Street address |
| city | `fi-sender-city` | City |
| country | `fi-sender-country` | Country (ISO alpha-2) |
| company | `fi-sender-company` | Company name |
| position | `fi-sender-position` | Job title |

### Field Blocks — `fi-{type}-{name}`

Each requires a unique `name` identifier. Up to 50 total blocks.

**FormData** uses `fi-{type}-{name}` naming. **JSON** uses `{ type, name, value }`.

| Block | FormData Pattern | Example | Notes |
|-------|------------------|---------|-------|
| Text | `fi-text-{name}` | `fi-text-message` | Free-form text |
| Number | `fi-number-{name}` | `fi-number-quantity` | Numeric value |
| Email | `fi-email-{name}` | `fi-email-invitee` | Email address |
| Phone | `fi-phone-{name}` | `fi-phone-emergency` | E.164 format (+12025550123) |
| URL | `fi-url-{name}` | `fi-url-website` | Valid URL |
| Date | `fi-date-{name}` | `fi-date-appointment` | ISO 8601 format |
| Rating | `fi-rating-{name}` | `fi-rating-satisfaction` | Integer 1-5 |
| Select | `fi-select-{name}` | `fi-select-plan` | Dropdown select (string or string[]) |
| Radio | `fi-radio-{name}` | `fi-radio-priority` | Single-select radio group (string) |
| Checkbox | `fi-checkbox-{name}` | `fi-checkbox-services` | Checkbox group (string or string[]) |
| File | `fi-file-{name}` | `fi-file-resume` | File upload (use `[]` suffix for multiple) |
| Country | `fi-country-{name}` | `fi-country-shipping` | ISO alpha-2 code |

**Multiple values:** For select/checkbox with multiple values, use `[]` suffix in FormData (e.g., `fi-checkbox-services[]`) or send as array in JSON.

For ISO 3166-1 alpha-2 country codes: https://gist.github.com/ssskip/5a94bfcd2835bf1dea52

---

## File Upload Example

```tsx
<form onSubmit={handleSubmit}>
  <input type="text" name="fi-sender-fullName" placeholder="Full name" required />
  <input type="email" name="fi-sender-email" placeholder="Email" required />
  <input type="file" name="fi-file-resume" accept=".pdf,.doc,.docx" required />
  <input type="file" name="fi-file-portfolio" accept="image/*" multiple />

  <button type="submit" disabled={status === 'loading'}>
    {status === 'loading' ? 'Uploading...' : 'Submit'}
  </button>
</form>
```

File uploads require FormData. JSON submissions do not support file uploads.

---

## Custom Hook (Optional)

```tsx
import { useState, useCallback } from 'react';
import { Forminit } from 'forminit';

const forminit = new Forminit();

export function useForminit(formId: string) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const submit = useCallback(async (payload: FormData | { blocks: any[] }) => {
    setStatus('loading');
    setError(null);

    const result = await forminit.submit(formId, payload);

    if (result.error) {
      setStatus('error');
      setError(result.error.message);
      return result;
    }

    setStatus('success');
    setData(result.data);
    return result;
  }, [formId]);

  const reset = useCallback(() => {
    setStatus('idle');
    setError(null);
    setData(null);
  }, []);

  return { submit, reset, status, error, data };
}
```

Usage:

```tsx
const { submit, status, error } = useForminit('FORM_ID');

async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const result = await submit(formData);
  if (!result.error) {
    e.currentTarget.reset();
  }
}
```

---

## Common Mistakes

- Using `name="email"` instead of `name="fi-sender-email"` — all fields must use the `fi-` prefix or the submission will be empty.
- Using `name="fi-sender-name"` — there is no `name` property on sender. Use `fi-sender-firstName` + `fi-sender-lastName` or `fi-sender-fullName`.
- Adding an API key to client-side React code — for public forms no key is needed; for protected forms use a backend proxy server.
- Sending phone without E.164 format — `5551234567` will be rejected, must be `+15551234567`.
- Using JSON with file uploads — files only work with FormData.
- Using `fi-file-resume` for multiple files — append `[]` to the name: `fi-file-photos[]`.
- Forgetting `e.preventDefault()` — without it the browser reloads the page instead of using the SDK.

## Spam Protection (only if user requests)

- reCAPTCHA: https://forminit.com/docs/recaptcha/
- hCaptcha: https://forminit.com/docs/hcaptcha/
