export default async function handler(req, res) {
  const { contents, system_instruction } = req.body;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction,
        contents,
        generationConfig: { maxOutputTokens: 65536, temperature: 0.9, topP: 0.95 },
      }),
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
