import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const generateQuestions = async (subject: string, amount: number, difficulty: string): Promise<any[]> => {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: SchemaType.ARRAY,
        items: {
          type: SchemaType.OBJECT,
          properties: {
            text: { type: SchemaType.STRING },
            options: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
            },
            correctIndex: { type: SchemaType.INTEGER },
            explanation: { type: SchemaType.STRING }
          },
          required: ["text", "options", "correctIndex", "explanation"]
        }
      }
    }
  });

  const prompt = `Gere exatamente ${amount} questões inéditas de concurso nível ${difficulty} sobre: ${subject}. 
    As questões devem ser EM PORTUGUÊS. Estilo: FGV/CESPE. 
    Retorne APENAS o JSON rigoroso.`;

  const result = await model.generateContent(prompt);
  const response = result.response;
  return JSON.parse(response.text());
};

export const breakDownGoal = async (title: string, description: string): Promise<any> => {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: SchemaType.OBJECT,
        properties: {
          steps: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
          motivation: { type: SchemaType.STRING }
        },
        required: ["steps", "motivation"]
      }
    }
  });

  const prompt = `Plano de ação para: ${title}. Contexto: ${description}. Retorne JSON com 'steps' (passos práticos) e 'motivation' (frase curta).`;

  const result = await model.generateContent(prompt);
  const response = result.response;
  return JSON.parse(response.text());
};
