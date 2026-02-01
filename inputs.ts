import { ExampleInput } from "./exampleInput";

// Helper to generate the 5 compiled tasks for a given input
function createCompiledTasks(text: string, context?: string): ExampleInput["compiledTasks"] {
  // Context is inserted inline: "... following text. Context: X. Does this text..."
  // When no context: "... following text. Does this text..."
  const contextPart = context ? `Context: ${context}. ` : "";

  return [
    // Task 0: Logical Appeal (Logos)
    {
      type: "vector.completion" as const,
      messages: [
        {
          role: "user" as const,
          content: `Evaluate the LOGICAL APPEAL (Logos) of the following text. ${contextPart}Does this text use sound reasoning, evidence, and logical arguments?\n\nText: "${text}"`,
        },
      ],
      responses: [
        "Very Strong - The text presents compelling logical arguments with solid evidence and clear reasoning",
        "Strong - The text has good logical structure with reasonable evidence",
        "Moderate - The text has some logical elements but could be stronger",
        "Weak - The text lacks clear logical structure or evidence",
        "Very Weak - The text has no logical appeal or contains logical fallacies",
      ],
    },
    // Task 1: Emotional Appeal (Pathos)
    {
      type: "vector.completion" as const,
      messages: [
        {
          role: "user" as const,
          content: `Evaluate the EMOTIONAL APPEAL (Pathos) of the following text. ${contextPart}Does this text effectively engage emotions and create an emotional connection?\n\nText: "${text}"`,
        },
      ],
      responses: [
        "Very Strong - The text powerfully evokes emotions and creates deep emotional engagement",
        "Strong - The text effectively appeals to emotions",
        "Moderate - The text has some emotional elements but could resonate more",
        "Weak - The text has minimal emotional appeal",
        "Very Weak - The text is emotionally flat or off-putting",
      ],
    },
    // Task 2: Credibility (Ethos)
    {
      type: "vector.completion" as const,
      messages: [
        {
          role: "user" as const,
          content: `Evaluate the CREDIBILITY (Ethos) of the following text. ${contextPart}Does this text establish trust, authority, and credibility?\n\nText: "${text}"`,
        },
      ],
      responses: [
        "Very Strong - The text establishes excellent credibility and authority",
        "Strong - The text builds good trust and demonstrates expertise",
        "Moderate - The text has some credibility but could be more authoritative",
        "Weak - The text lacks credibility markers",
        "Very Weak - The text undermines its own credibility",
      ],
    },
    // Task 3: Clarity
    {
      type: "vector.completion" as const,
      messages: [
        {
          role: "user" as const,
          content: `Evaluate the CLARITY of the following text. ${contextPart}Is the message clear, well-organized, and easy to understand?\n\nText: "${text}"`,
        },
      ],
      responses: [
        "Very Clear - The message is crystal clear, well-structured, and immediately understandable",
        "Clear - The message is easy to follow and well-organized",
        "Moderately Clear - The message is understandable but could be clearer",
        "Unclear - The message is confusing or poorly organized",
        "Very Unclear - The message is incomprehensible or muddled",
      ],
    },
    // Task 4: Call to Action
    {
      type: "vector.completion" as const,
      messages: [
        {
          role: "user" as const,
          content: `Evaluate the CALL-TO-ACTION strength of the following text. ${contextPart}Does this text motivate the reader to act, believe, or change their mind?\n\nText: "${text}"`,
        },
      ],
      responses: [
        "Very Strong - The text compels immediate action or belief change",
        "Strong - The text effectively motivates the reader",
        "Moderate - The text suggests action but isn't compelling",
        "Weak - The text has minimal motivating power",
        "Very Weak - The text provides no motivation to act or believe",
      ],
    },
  ];
}

export const Inputs: ExampleInput[] = [
  // 1. Highly persuasive - professional sales pitch with strong rhetoric
  {
    value: {
      text: "Join over 2 million professionals who have transformed their careers with our proven program. Studies show that 94% of our graduates report significant salary increases within 6 months. Don't let another year pass watching others succeed - your future starts today. Enroll now and get our exclusive career toolkit free.",
      context: "Career development program advertisement",
    },
    compiledTasks: createCompiledTasks(
      "Join over 2 million professionals who have transformed their careers with our proven program. Studies show that 94% of our graduates report significant salary increases within 6 months. Don't let another year pass watching others succeed - your future starts today. Enroll now and get our exclusive career toolkit free.",
      "Career development program advertisement"
    ),
    outputLength: null,
  },
  // 2. Very weak persuasion - random rambling
  {
    value: {
      text: "Thing is maybe good or bad. Some people say stuff. Whatever happens happens I guess. You could do it or not.",
    },
    compiledTasks: createCompiledTasks(
      "Thing is maybe good or bad. Some people say stuff. Whatever happens happens I guess. You could do it or not."
    ),
    outputLength: null,
  },
  // 3. Moderate persuasion - decent argument but lacks polish
  {
    value: {
      text: "Regular exercise is good for your health. It helps you feel better and can reduce the risk of diseases. You should try to exercise a few times per week if you can.",
    },
    compiledTasks: createCompiledTasks(
      "Regular exercise is good for your health. It helps you feel better and can reduce the risk of diseases. You should try to exercise a few times per week if you can."
    ),
    outputLength: null,
  },
  // 4. Strong persuasion - emotional appeal with clear CTA
  {
    value: {
      text: "Every 60 seconds, a child loses their parent to preventable disease. Your $5 donation provides life-saving vaccines for an entire family. These children are counting on people like you. Will you be their hero today? Donate now - because every child deserves a chance to grow up with their parents.",
      context: "Charity fundraising appeal",
    },
    compiledTasks: createCompiledTasks(
      "Every 60 seconds, a child loses their parent to preventable disease. Your $5 donation provides life-saving vaccines for an entire family. These children are counting on people like you. Will you be their hero today? Donate now - because every child deserves a chance to grow up with their parents.",
      "Charity fundraising appeal"
    ),
    outputLength: null,
  },
  // 5. Weak persuasion - technical but dry
  {
    value: {
      text: "The product has specifications. It measures 10x15x8 inches. Available in gray. Ships in 5-7 business days. Standard warranty applies.",
    },
    compiledTasks: createCompiledTasks(
      "The product has specifications. It measures 10x15x8 inches. Available in gray. Ships in 5-7 business days. Standard warranty applies."
    ),
    outputLength: null,
  },
  // 6. High persuasion - logical argument with evidence
  {
    value: {
      text: "Climate scientists from 197 countries agree: we must reduce carbon emissions by 50% by 2030 to avoid catastrophic warming. The economic case is equally clear - renewable energy now costs less than fossil fuels in most markets. Companies making this transition are outperforming their peers by 23%. The question isn't whether to act, but how quickly we can mobilize.",
      context: "Environmental policy advocacy",
    },
    compiledTasks: createCompiledTasks(
      "Climate scientists from 197 countries agree: we must reduce carbon emissions by 50% by 2030 to avoid catastrophic warming. The economic case is equally clear - renewable energy now costs less than fossil fuels in most markets. Companies making this transition are outperforming their peers by 23%. The question isn't whether to act, but how quickly we can mobilize.",
      "Environmental policy advocacy"
    ),
    outputLength: null,
  },
  // 7. Very weak - gibberish
  {
    value: {
      text: "Banana flying the mountain because yes no maybe. Purple elephants dancing on clouds of cheese.",
    },
    compiledTasks: createCompiledTasks(
      "Banana flying the mountain because yes no maybe. Purple elephants dancing on clouds of cheese."
    ),
    outputLength: null,
  },
  // 8. Moderate-strong - good structure but less emotional
  {
    value: {
      text: "Learning a second language provides measurable cognitive benefits. Research from Harvard shows bilingual individuals have 4-5 years delayed onset of dementia symptoms. Additionally, bilingual employees earn on average 5-20% more than monolingual peers. Consider starting your language journey today.",
    },
    compiledTasks: createCompiledTasks(
      "Learning a second language provides measurable cognitive benefits. Research from Harvard shows bilingual individuals have 4-5 years delayed onset of dementia symptoms. Additionally, bilingual employees earn on average 5-20% more than monolingual peers. Consider starting your language journey today."
    ),
    outputLength: null,
  },
  // 9. Weak - passive and uncommitted
  {
    value: {
      text: "Some might consider perhaps looking into this option if they have time. It could potentially be somewhat useful in certain circumstances, though results may vary and there are no guarantees of any kind.",
    },
    compiledTasks: createCompiledTasks(
      "Some might consider perhaps looking into this option if they have time. It could potentially be somewhat useful in certain circumstances, though results may vary and there are no guarantees of any kind."
    ),
    outputLength: null,
  },
  // 10. Strong - inspirational with credibility
  {
    value: {
      text: "As a surgeon who has performed over 5,000 heart operations, I've seen firsthand what lifestyle changes can do. My patients who commit to 30 minutes of daily walking reduce their risk of a second cardiac event by 45%. You have more power over your health than you realize. Take that first walk today - your heart is counting on you.",
      context: "Medical advice from a cardiologist",
    },
    compiledTasks: createCompiledTasks(
      "As a surgeon who has performed over 5,000 heart operations, I've seen firsthand what lifestyle changes can do. My patients who commit to 30 minutes of daily walking reduce their risk of a second cardiac event by 45%. You have more power over your health than you realize. Take that first walk today - your heart is counting on you.",
      "Medical advice from a cardiologist"
    ),
    outputLength: null,
  },
  // 11. Minimal text - edge case with very short input
  {
    value: {
      text: "Buy now.",
    },
    compiledTasks: createCompiledTasks("Buy now."),
    outputLength: null,
  },
  // 12. Long text with mixed quality
  {
    value: {
      text: "Our company has been in business for 50 years. We have customers. Some of them like our products. The products are made with materials. We ship to many locations. If you want to buy something, you can. Or not. It's up to you really. We're open during business hours most days except when we're closed. Thank you for your consideration of our merchandise offerings.",
    },
    compiledTasks: createCompiledTasks(
      "Our company has been in business for 50 years. We have customers. Some of them like our products. The products are made with materials. We ship to many locations. If you want to buy something, you can. Or not. It's up to you really. We're open during business hours most days except when we're closed. Thank you for your consideration of our merchandise offerings."
    ),
    outputLength: null,
  },
  // 13. Single word - minimal edge case
  {
    value: {
      text: "Yes",
    },
    compiledTasks: createCompiledTasks("Yes"),
    outputLength: null,
  },
  // 14. Very long text - stress test
  {
    value: {
      text: "In an era where information spreads at unprecedented speeds and public discourse shapes the very foundations of our society, the ability to communicate persuasively has become more critical than ever before. Consider the countless decisions made daily by individuals, corporations, and governments alike - each influenced by the power of well-crafted arguments and compelling narratives. From the boardrooms of Fortune 500 companies to the halls of legislative bodies worldwide, persuasion serves as the invisible force driving change. The most effective communicators understand that persuasion is not manipulation but rather the art of presenting ideas in ways that resonate with the values, beliefs, and aspirations of their audience. They know that trust must be earned through consistency, transparency, and demonstrated expertise. They recognize that emotions and logic must work in harmony, each reinforcing the other to create messages that both feel right and make sense. Today, we invite you to join the ranks of these master communicators by enrolling in our comprehensive persuasion training program.",
      context: "Marketing material for a communication skills course",
    },
    compiledTasks: createCompiledTasks(
      "In an era where information spreads at unprecedented speeds and public discourse shapes the very foundations of our society, the ability to communicate persuasively has become more critical than ever before. Consider the countless decisions made daily by individuals, corporations, and governments alike - each influenced by the power of well-crafted arguments and compelling narratives. From the boardrooms of Fortune 500 companies to the halls of legislative bodies worldwide, persuasion serves as the invisible force driving change. The most effective communicators understand that persuasion is not manipulation but rather the art of presenting ideas in ways that resonate with the values, beliefs, and aspirations of their audience. They know that trust must be earned through consistency, transparency, and demonstrated expertise. They recognize that emotions and logic must work in harmony, each reinforcing the other to create messages that both feel right and make sense. Today, we invite you to join the ranks of these master communicators by enrolling in our comprehensive persuasion training program.",
      "Marketing material for a communication skills course"
    ),
    outputLength: null,
  },
  // 15. Text with special characters, quotes, and unicode
  {
    value: {
      text: "Success is not just a destination - it is a journey! Join 10,000+ entrepreneurs who have discovered the secret to sustainable growth. Our 3-step system costs under $99 and delivers over 300% ROI.",
      context: "Social media ad with special formatting",
    },
    compiledTasks: createCompiledTasks(
      "Success is not just a destination - it is a journey! Join 10,000+ entrepreneurs who have discovered the secret to sustainable growth. Our 3-step system costs under $99 and delivers over 300% ROI.",
      "Social media ad with special formatting"
    ),
    outputLength: null,
  },
  // 16. Empty context field (empty string, not omitted)
  {
    value: {
      text: "This product will change your life. Thousands have already experienced the transformation.",
      context: "",
    },
    compiledTasks: createCompiledTasks(
      "This product will change your life. Thousands have already experienced the transformation.",
      ""
    ),
    outputLength: null,
  },
];
