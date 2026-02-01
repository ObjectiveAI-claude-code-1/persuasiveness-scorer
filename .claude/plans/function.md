# Function Plan: persuasiveness-scorer

## Repository Name
`persuasiveness-scorer`

## Description
A scalar function that evaluates how persuasive a piece of text is. Given any argumentative or persuasive text (e.g., a sales pitch, opinion piece, debate argument, or marketing copy), this function scores its persuasive power on a scale from 0 to 1.

## Function Type
**Scalar** - outputs a single score in [0, 1]

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

## Task Structure
The function will use multiple vector completion tasks to evaluate different dimensions of persuasiveness:

1. **Logical Appeal (Logos)** - Does the text use sound reasoning and evidence?
2. **Emotional Appeal (Pathos)** - Does the text effectively engage emotions?
3. **Credibility (Ethos)** - Does the text establish trust and authority?
4. **Clarity** - Is the message clear and easy to understand?
5. **Call to Action** - Does it motivate the reader to act or change their mind?

Each task will be a vector completion with 5 response options (Very Strong, Strong, Moderate, Weak, Very Weak) and the scores will be combined into a final persuasiveness score.

## Output Expression
The output will aggregate the scores from all five dimensions, weighting the positive responses to produce a final score in [0, 1].