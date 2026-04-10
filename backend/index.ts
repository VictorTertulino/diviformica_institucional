import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Main Lead Generation Endpoint
app.post('/api/leads', (req: Request, res: Response) => {
  const { name, email, phone, productInterest, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required.' });
  }

  // Simulate CRM integration or Email sending
  console.log(`[Lead Received]`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Interest: ${productInterest || 'General'}`);
  console.log(`Message: ${message || 'N/A'}`);
  console.log('---------------------------');

  return res.status(200).json({ 
    success: true, 
    message: 'Mensagem recebida com sucesso. Nossa equipe entrará em contato em breve.' 
  });
});

// Serve frontend static files
const frontendPath = path.join(__dirname, '../frontend/dist/frontend/browser');
app.use(express.static(frontendPath));

// Fallback to Angular index.html for all other routes
app.use((req: Request, res: Response) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌟 Divifórmica Application is running on http://localhost:${PORT}`);
  console.log(`API Endpoints available at http://localhost:${PORT}/api`);
});
