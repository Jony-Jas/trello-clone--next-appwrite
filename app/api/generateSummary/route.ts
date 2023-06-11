import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      n: 1,
      stream: false,
      messages: [
        {
          role: "system",
          content:
            "When responding, welcome the user always as Jony and welcome them to the app. Limit the response to 200 character.",
        },
        {
          role: "user",
          content: `Hi there, provide a summary of the following todos: ${JSON.stringify(
            todos
          )}`,
        },
      ],
    });

    const { data } = response;

    console.log("Data", data);
    console.log(data.choices[0].message);

    return NextResponse.json(data.choices[0].message);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed because of ${error}` },
      { status: 500 }
    );
  }
}
