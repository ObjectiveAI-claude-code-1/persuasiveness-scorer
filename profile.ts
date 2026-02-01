import { Functions } from "objectiveai";

// Shared ensemble configuration for all persuasiveness evaluation tasks
const sharedEnsemble = {
  llms: [
    {
      model: "openai/gpt-4.1-nano",
      output_mode: "json_schema" as const,
    },
    {
      model: "google/gemini-2.5-flash-lite",
      output_mode: "json_schema" as const,
    },
    {
      model: "x-ai/grok-4.1-fast",
      output_mode: "json_schema" as const,
      reasoning: {
        enabled: false,
      },
    },
    {
      model: "openai/gpt-4o-mini",
      output_mode: "json_schema" as const,
      top_logprobs: 20,
    },
    {
      model: "deepseek/deepseek-v3.2",
      output_mode: "instruction" as const,
      top_logprobs: 20,
    },
  ],
};

const sharedProfile = [1.0, 1.0, 1.0, 1.0, 1.0];

export const Profile: Functions.RemoteProfile = {
  description: "Profile for persuasiveness-scorer function with ensemble of LLMs to evaluate logical appeal, emotional appeal, credibility, clarity, and call-to-action strength.",
  changelog: null,
  tasks: [
    // Task 0: Logical Appeal (Logos)
    {
      ensemble: sharedEnsemble,
      profile: sharedProfile,
    },
    // Task 1: Emotional Appeal (Pathos)
    {
      ensemble: sharedEnsemble,
      profile: sharedProfile,
    },
    // Task 2: Credibility (Ethos)
    {
      ensemble: sharedEnsemble,
      profile: sharedProfile,
    },
    // Task 3: Clarity
    {
      ensemble: sharedEnsemble,
      profile: sharedProfile,
    },
    // Task 4: Call to Action
    {
      ensemble: sharedEnsemble,
      profile: sharedProfile,
    },
  ],
};
