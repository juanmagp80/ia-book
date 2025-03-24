// services/aiService.js
export async function generateStory(prompt) {
    const response = await fetch('/api/ai/generate', {
      method: 'POST',
      body: JSON.stringify({ prompt })
    });
    return await response.json();
  }