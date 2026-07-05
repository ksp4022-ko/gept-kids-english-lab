const path = require('path');

global.window = {};
require(path.join(__dirname, '..', 'data', 'questions.js'));

const { BANK } = window.GEPT_QUESTIONS;
const errors = [];

function fail(message) {
  errors.push(message);
}

function assertEqual(actual, expected, label) {
  if (actual !== expected) fail(`${label}: expected ${expected}, got ${actual}`);
}

function hasDuplicates(values) {
  return new Set(values).size !== values.length;
}

function validateChoiceIds(item, mode, index) {
  if (!Array.isArray(item.choices) || item.choices.length < 2) {
    fail(`${mode}[${index}] has too few choices`);
    return;
  }
  const ids = item.choices.map((choice) => choice.id);
  if (ids.some((id) => !id)) fail(`${mode}[${index}] has a choice without id`);
  if (hasDuplicates(ids)) fail(`${mode}[${index}] has duplicate choice ids`);
  if (!ids.includes(item.answer)) fail(`${mode}[${index}] answer is not in choices`);
}

function validateTextChoices(item, mode, index) {
  if (!Array.isArray(item.choices) || item.choices.length < 2) {
    fail(`${mode}[${index}] has too few choices`);
    return;
  }
  if (item.choices.some((choice) => !choice)) fail(`${mode}[${index}] has an empty choice`);
  if (hasDuplicates(item.choices)) fail(`${mode}[${index}] has duplicate choices`);
  if (!item.choices.includes(item.answer)) fail(`${mode}[${index}] answer is not in choices`);
}

assertEqual(BANK.listening.length, 800, 'Listening count');
assertEqual(BANK.reading.length, 800, 'Reading count');
assertEqual(BANK.vocab.length, 800, 'Words count');

BANK.listening.forEach((item, index) => {
  validateChoiceIds(item, 'listening', index);
  if (!item.audio) fail(`listening[${index}] missing audio`);
});

const oldGlobalReadingDetails = [
  'The note is short and easy to read.',
  'The teacher writes the time on the board.',
  'The children talk about it after class.',
  'The family checks the plan together.',
  'The student puts the things in a blue bag.',
  'Everyone says thank you at the end.',
  'The weather is good in the morning.',
  'The place is not far from school.',
  'The activity takes about ten minutes.',
  'The message is for young students.'
];

BANK.reading.forEach((item, index) => {
  validateChoiceIds(item, 'reading', index);
  if (!item.passage) fail(`reading[${index}] missing passage`);
  if (!item.question) fail(`reading[${index}] missing question`);
  oldGlobalReadingDetails.forEach((detail) => {
    if (item.passage.includes(detail)) {
      fail(`reading[${index}] still uses old global detail: ${detail}`);
    }
  });
});

const blockedVocabPhrases = [
  'cook notebook',
  'hot classroom',
  'red garden',
  'new egg',
  'cook pencil',
  'wash notebook',
  'eat classroom',
  'drink book'
];

BANK.vocab.forEach((item, index) => {
  validateTextChoices(item, 'vocab', index);
  if (!item.word) fail(`vocab[${index}] missing word`);
  blockedVocabPhrases.forEach((phrase) => {
    if (item.word.toLowerCase() === phrase) {
      fail(`vocab[${index}] uses blocked phrase: ${phrase}`);
    }
  });
});

if (errors.length) {
  console.error(`Question validation failed with ${errors.length} error(s):`);
  errors.slice(0, 50).forEach((error) => console.error(`- ${error}`));
  if (errors.length > 50) console.error(`...and ${errors.length - 50} more`);
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  counts: {
    listening: BANK.listening.length,
    reading: BANK.reading.length,
    vocab: BANK.vocab.length
  }
}, null, 2));
