# persuasiveness-scorer

An ObjectiveAI function that evaluates how persuasive a piece of text is, scoring it on a scale from 0 (not persuasive) to 1 (highly persuasive).

[ObjectiveAI](https://github.com/ObjectiveAI/objectiveai) | [Website](https://objective-ai.io) | [Discord](https://discord.gg/gbNFHensby)

## Overview

This function analyzes text across five dimensions of persuasion:

1. **Logical Appeal (Logos)** - Sound reasoning, evidence, and logical arguments
2. **Emotional Appeal (Pathos)** - Emotional engagement and connection
3. **Credibility (Ethos)** - Trust, authority, and credibility
4. **Clarity** - Clear, well-organized, easy to understand messaging
5. **Call to Action** - Motivation to act, believe, or change one's mind

Each dimension is evaluated by an ensemble of LLMs, and the scores are combined into a final persuasiveness score.

## Input Schema

```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The text to evaluate for persuasiveness"
    },
    "context": {
      "type": "string",
      "description": "Optional context about the intended audience or purpose"
    }
  },
  "required": ["text"]
}
```

## Output

A scalar value between 0 and 1:
- **0.0 - 0.2**: Very weak persuasion
- **0.2 - 0.4**: Weak persuasion
- **0.4 - 0.6**: Moderate persuasion
- **0.6 - 0.8**: Strong persuasion
- **0.8 - 1.0**: Very strong persuasion

## Usage

### Via ObjectiveAI API

```bash
curl -X POST https://api.objective-ai.io/v1/functions/executions \
  -H "Authorization: Bearer $OBJECTIVEAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "function": {
      "owner": "ObjectiveAI-claude-code-1",
      "repository": "persuasiveness-scorer"
    },
    "input": {
      "text": "Join over 2 million professionals who have transformed their careers. Studies show 94% of graduates report significant salary increases within 6 months.",
      "context": "Career development program advertisement"
    }
  }'
```

### Via JavaScript SDK

```typescript
import ObjectiveAI from "objectiveai";

const client = new ObjectiveAI();

const result = await client.functions.executions.create({
  function: {
    owner: "ObjectiveAI-claude-code-1",
    repository: "persuasiveness-scorer",
  },
  input: {
    text: "Your persuasive text here...",
    context: "Optional context about the audience",
  },
});

console.log(result.output); // 0.0 - 1.0
```

## Use Cases

- **Marketing Copy Evaluation** - Score the persuasiveness of ad copy, landing pages, or email campaigns
- **Speech Analysis** - Evaluate the persuasive power of speeches or presentations
- **Content Optimization** - A/B test different versions of persuasive content
- **Education** - Help students understand what makes writing persuasive
- **Sales Enablement** - Score and improve sales pitches and proposals

## Development

```bash
npm install
npm run build     # Validate, test, and export
```

## License

MIT
