# Embedly Connect

**Embedly Connect** is a lightweight, embeddable feedback widget that allows users to submit feedback tied to a specific `clientId`. Perfect for SaaS platforms, multi-tenant apps, or any product that collects user feedback.

---

## 🚀 Demo

Live demo: https://embedly-connect-widget.vercel.app/

![Screenshot]: tbd....

---

## 📦 Installation

### Option 1: NPM (Modern Projects)
```bash
npm install embedly-connect
```

Then import it in your frontend app:
```js
import 'embedly-connect';
```

Place the widget anywhere:
```html
<feedback-widget client-id="demo123"></feedback-widget>
```

---

### Option 2: CDN (HTML or CMS Sites)
```html
<script src="https://embedly-connect-widget.vercel.app/widget.js"></script>
<feedback-widget client-id="demo123"></feedback-widget>
```

> This version automatically registers the widget globally.

---

## 🧠 Features
- Web Component / Custom Element
- Submit feedback with name, message, and client ID
- Light/Dark mode toggle support via `theme="dark"`
- Works via CDN or NPM
- Easily embeddable anywhere

---

## ⚙️ Props
| Attribute   | Description               | Example          |
|-------------|---------------------------|------------------|
| `client-id` | Required. ID for context. | `demo123`        |
| `theme`     | Optional. `light/dark`.   | `theme="dark"`  |

---

## 📥 Submitting Feedback

All feedback is submitted to your backend via:
```http
POST https://embedly-connect.onrender.com/api/feedback
Content-Type: application/json
```

Example body:
```json
{
  "clientId": "demo123",
  "name": "John",
  "message": "Loving this widget!",
  "timestamp": "2025-04-15T18:20:00.000Z"
}
```

---

## 🛠️ Developer Notes
If importing from NPM, the package will:
- Automatically register `<feedback-widget>` if not already defined
- Export the raw `FeedbackWidget` class for custom use

```js
import { FeedbackWidget } from 'embedly-connect';
customElements.define('feedback-widget', FeedbackWidget);
```

---

## 👨‍💻 Author
**Shivang Mehta**  
Project built as part of a SDK + Web Component showcase.

---

## 📃 License
MIT

---

## 💡 Want to contribute?
Feel free to fork, suggest features, or submit pull requests!

