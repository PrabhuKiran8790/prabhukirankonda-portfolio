import { PromptTemplate } from '@langchain/core/prompts';
import { StreamingTextResponse } from 'ai';
import { BytesOutputParser } from '@langchain/core/output_parsers';
import { ChatGroq } from '@langchain/groq';
import { GROQ_API_KEY } from '$env/static/private';

// export const config = {
// 	runtime: 'edge'
// };

const TEMPLATE = `
<instructions>
You are Prabhu Kiran Konda's personal assistant named Jarvis. Your role is to provide information only about your Master, Prabhu Kiran Konda. All responses should be factual and structured, without any personal opinions or thoughts. If asked about any other topic or for unclear questions, politely refuse by saying "I'm sorry, I can't provide that information." Responses should be clear and concise, often using bullet points or numbered lists. Do not trim information and provide complete, relevant answers. If not asked about Prabhu Kiran Konda, do not provide any information. Respond to greetings with a greeting and wait for a question. Links should be in the format [Link Text](URL). Return responses in Markdown format. Do not provide any code in any language. You are not a code assistant.
</instructions>

<context>
Here is your context:
this is the information about Prabhu Kiran Konda
{context}
</context>

<conversation>
Previous Conversation:
You are allowed to take the previous conversation into account.
{conversation}
</conversation>

<question>
Question: {question}
You have to reply to this question.
</question>

Sample Conversation:
Question: Hi,
Response: Hello, I'm Jarvis, Prabhu Kiran Konda's personal assistant. Please feel free to ask any questions about Prabhu Kiran Konda.

Question: Who are you?
Response: I'm Jarvis, Prabhu Kiran Konda's personal assistant. I'm here to provide information about Prabhu Kiran Konda. How can I help you today?
`;

const CONTEXT = `
---About Prabhu Kiran Konda---
Name: Prabhu Kiran Konda

Hello 👋
I'm Prabhu Kiran Konda, a software developer from India. I specialize in Python, Machine Learning, and full stack development. In my free time, I enjoy writing technical blogs and sharing my journey with others. If you'd like to get in touch, feel free to reach out.

---Tech Stack I'm familiar with:---
Python, TypeScript, JavaScript, Java, React, NextJS, SvelteKit, Tensorflow, PyTorch, Streamlit, PostgresSQL, MySQL, MongoDB, Firebase, FastAPI, Docker, Git, Drizzle, TailwindCSS

---Education---
Bachelors in Electrical and Electronics Engineering
duration: 2020 to 2023
status: Graduated

@ SR University, Warangal, India

CGPA: 8.57 / 10

Coursework includes:
- Object-Oriented Programming using Java
- Artificial Intelligence
- Neural Networks and Deep Learning
- Natural Language Processing (NLP)

While studying at SR University, I was extensively involved in the AI Minor program and completed various projects related to Machine Learning and Deep Learning. Additionally, I authored several research papers exploring the applications of Machine Learning and Deep Learning in the field of Electrical Engineering.


---Certifications---

Name: Deep Learning Specialization (Coursera)
Link: https://www.coursera.org/account/accomplishments/specialization/certificate/DYAT64RBNY2R


Name: Machine Learning A-ZTM: AI, Python & R in Data Science (Udemy)
Link: https://www.udemy.com/certificate/UC-1da0a923-8fb4-41a7-9166-c13adb00d2ad/


Name: AI-900: Azure AI Fundamentals (Microsoft)
Link: https://www.credly.com/badges/46b6842f-597c-4079-a876-fcd6ec7dd653?source=linked_in_profile


---Publications---
Paper 1:
Paper Title: A Platform Independent Web-Application for Short-Term Electric Power Load Forecasting on a 33/11 kV Substation Using Regression Model
Journal: Advances in Electrical & Electronics Engineering
Link: http://advances.utc.sk/index.php/AEEE/article/view/4561

Paper 2:
Paper Title: Weather Forecasting Using Radial Basis Function Neural Network in Warangal, India.
Journal: MDPI Urban Science
Link: https://www.mdpi.com/2413-8851/7/3/68

Paper 3:
Paper Title: Active Power Load Data Dimensionality Reduction Using Autoencoder
Journal: Springer
Link: https://link.springer.com/chapter/10.1007/978-981-99-2066-2_22


---Contact Information---
GitHub: https://github.com/prabhukiran8790
LinkedIn: https://linkedin.com/in/PrabhuKiranKonda
Twitter: https://x.com/prabhukirantwt
Mail: mailto:prabhukiran426@gmail.com
Resume: https://prabhukirankonda.vercel.app/Prabhu%20Kiran%20Konda%20Resume.pdf


---Professional Work Experience---
Company: Capgemini
Role: Generative AI Engineer
Location: Hyderabad, India
Joined on: February 2024
current job: True


---Projects---

Project 1
Title: Personal Portfolio with Markdown Blog

Description:
This website, prabhukirankonda.vercel.app is my personal website with a markdown blog written in SvelteKit and deployed using Vercel. Styled using Taiwind CSS and Shadcn-UI and completely written in TypeScript.

Tech Stack:
SvelteKit, Tailwind, TypeScript

Link: https://prabhukirankonda.vercel.app
Source: https://github.com/PrabhuKiran8790/prabhukirankonda.vercel.app

Project 2
Title: Corgi-AI: Create anything with AI

Description:
Corgi AI is a collection of AI tools for different use cases. It includes a chatGPT clone with streaming responses, Image Generation, Audio Generation, Image Restoration and PDF Chat(beta). It is a full-fledged SaaS application with stripe payments. It is Deployed using Docker with a VPS hosting on fly.io.

Tech Stack:
SvelteKit, TypeScript, PostgreSQL, Docker, Drizzle

Link: https://corgi-ai.fly.dev
Source: https://github.com/PrabhuKiran8790/corgi-docker


Project 3
Title: Dall-E Clone: AI Image Generation

Description:
Created a Dall-E Clone using SvelteKit, OpenAI API, TailwindCSS, TypeScript, Drizzle ORM and MySQL Database. Converted it into fully working SaaS which includes Stripe Payment Integration, User Authentication (Github & Google), and User Friendly Interface. The app is deployed with Vercel for easy setup and scalability.

Tech Stack:
SvelteKit, TypeScript, MySQL, Drizzle

Link: https://dall-e-sveltekit.vercel.app/
Source: https://github.com/PrabhuKiran8790/dall-e-clone


Project 4
Title: GFPGAN Streamlit App: Face Restoration

Description:
Created a Streamlit app for the GFPGAN model to restore faces in images. It has a user-friendly interface, and easy Docker deployment.

Tech Stack:
Python, Streamlit, Docker

Link: https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-GFPGAN
Source: https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-GFPGAN/tree/main


Project 5
Title: AI-SaaS App: MultiGPT

Description:
Created an AI-SaaS app using NextJS, React. It features a subscription-based payment system using Stripe, user authentication, and a user-friendly interface. The app is deployed with Vercel for easy setup and scalability. It has several features like Chatbot, Code Generation, Image Generation, Audio Generation, and Video Generation.

Tech Stack:
NextJS, React, JavaScript

Link: https://multigpt-pk.vercel.app/
Source: https://github.com/PrabhuKiran8790/ai-saas


Project 6
Title: Full Stack Todo App

Description:
Created a Todo application using SvelteKit, FastAPI, and PostgreSQL. It features JWT-based authentication for security and includes task categorization into sections like current todos, upcoming, overdue, and completed. Users can easily update, delete, and mark tasks as complete.

Tech Stack:
SvelteKit, JavaScript, Python, FastAPI, PostgreSQL

Link: https://sveltekit-todo-prabhu.vercel.app/


Project 7
Title: PDF Assistant: AI Powered Q&A for PDFs

Description:
Built a PDF Assistant tool using OpenAI's LLM to answer questions from uploaded PDF files. It has a user-friendly web interface with StreamLit, Firebase authentication for security, real-time updates via Firebase, a guest mode for no authentication, and easy Docker deployment.

Tech Stack:
Python, StreamLit, Docker

Link: https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-PDF-Assistant-Docker
Source: https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-PDF-Assistant-Docker/tree/main


Project 8
Title: REST API: FastAPI with MongoDB

Description:
Developed a high-performance API using FastAPI and MongoDB Cloud Database for CRUD Operation. The API is deployed with Docker for easy setup and scalability.

Tech Stack:
Python, FastAPI, MongoDB, Docker

Link: https://huggingface.co/spaces/PrabhuKiranKonda/fastapi_mongoDB
Source: https://huggingface.co/spaces/PrabhuKiranKonda/fastapi_mongoDB/tree/main


---Blogs---

title: "Linear Regression: A Mathematical and Practical Guide with NumPy"
description: Learn about the mathematical concepts behind linear regression and how to implement them using NumPy in Python.
date: '2024-01-15'


title: 'Gradient Descent: A Step-by-Step Guide to Optimization'
description: Explore the fundamental algorithm powering machine learning and deep learning
date: '2024-01-12'


title: Getting Started
description: A guide on how to use this sveltekit + markdown blog.
date: '2023-11-20'


title: Dimensionality Reduction using Auto-Encoders
description: Let's look at how we can perform the dimensionality reduction using the Auto-Encoders using Tensorflow.
date: '2023-11-10'


title: Integrating Auth.js (NextAuth) and Prisma with SvelteKit
description: let's see how to integrate Github and Google OAuth authentication using Auth.js (NextAuth) and Prisma with SvelteKit and protected routes and redirects
date: '2023-11-15'
`;

export const POST = async (event) => {
	const { messages } = await event.request.json();

	const prompt = PromptTemplate.fromTemplate(TEMPLATE);

	const model = new ChatGroq({
		temperature: 0,
		modelName: 'mixtral-8x7b-32768',
		apiKey: GROQ_API_KEY
	});

	const outputParser = new BytesOutputParser();
	const chain = prompt.pipe(model).pipe(outputParser);

	const stream = await chain.stream({
		context: CONTEXT,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		conversation: messages.map((message: any) => ({
			content: message.content,
			role: message.role
		})),
		question: messages[messages.length - 1].content
	});

	return new StreamingTextResponse(stream);
};
