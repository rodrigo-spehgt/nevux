import express from 'express';

const app = express();

// Ruta de health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Ruta para el callback de Tiendanube OAuth
app.get('/api/auth/tn/callback', (req, res) => {
  const code = req.query.code;
  res.json({ 
    message: 'OAuth callback recibido', 
    code: code,
    status: 'success'
  });
});

// Ruta para webhooks de Tiendanube
app.post('/api/webhooks/tn/store-redact', (req, res) => {
  res.json({ received: true });
});

app.post('/api/webhooks/tn/customers-redact', (req, res) => {
  res.json({ received: true });
});

app.post('/api/webhooks/tn/customers-data-request', (req, res) => {
  res.json({ received: true });
});

export default app;
