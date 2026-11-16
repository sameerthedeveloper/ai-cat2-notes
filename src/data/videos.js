/* Neso Academy lessons. IDs, titles and lengths were read from Neso's own playlists:
   - Propositional Logic | Chapter 1 | Discrete Mathematics
   - First Order Logic | Chapter 2 | Discrete Mathematics
   Neso has no AI-course lessons on the other topics, so only the logic topics get videos. */
export const PL_PROP = ['Neso: Propositional Logic playlist', 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRjZU477sHY1rUFlNZO0_Q9x'];
export const PL_FOL = ['Neso: First Order Logic playlist', 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRiX5hfcHZ6NjGBgnnaC1IFP'];

export const V = {
  IZpvlR5J7FQ: ['Motivation and introduction to propositional logic', '8'],
  Ib5njCwNMdk: ['Propositional variables and compound propositions', '6'],
  '6kYngPvoGxU': ['Negation, conjunction and disjunction', '6'],
  tACXuzfXzSI: ['Implication, part 1', '10'],
  ehKd3KmIRSw: ['Biconditional operator', '6'],
  '8octtUkdv4Y': ['Precedence of logical operators', '6'],
  yo7aULLUz_0: ['Tautology, contradiction, contingency and satisfiability', '5'],
  tDH67yRNXzI: ['Logical equivalences', '17'],
  'SBBq-PUvh2c': ['Propositional logic, solved problem 1', '6'],
  ARywou8HLQk: ['Introduction to first order logic', '5'],
  '2GuRhc0ZzGc': ['The limitation of propositional logic', '5'],
  UN6Hd4UlrnM: ['Quantifiers', '5'],
  pPYkNkuo8nU: ['Universal quantifier', '4'],
  OzLorUzIQ1U: ['Existential quantifier', '4'],
  DYsSr7fk_4A: ['Negating quantified expressions, part 1', '4'],
  'd87-HuxQaTY': ['Translating English sentences to logical expressions', '11'],
  '1bpXqRL2dl8': ['First order logic, solved problems part 1', '5'],
  akiBw21opuw: ['Rules of inference for quantified statements, part 1', '5'],
  mywP1lqVkXs: ['Rules of inference for quantified statements, part 2', '3'],
  '5TeDFX7whck': ['Universal modus ponens rule', '3'],
  '4iKahGOKmhY': ['Rules of inference: basic terminology', '6'],
  HcS4lqXxrV4: ['Rules of inference: definition and types', '8'],
  '28lebQ60TCc': ['Building arguments with rules of inference, part 1', '6'],
  z205Y7D40Lk: ['Rules of inference, solved problem 1', '3'],
  SjEQNOV5FMk: ['The resolution principle: preliminaries', '5'],
  TTImfNmhwsQ: ['The resolution principle: proof of the theorem', '4'],
  ikpJqINGPX4: ['The resolution principle: proving an argument valid', '3'],
  Bm05eNcIg1c: ['The resolution principle: solved problems', '7'],
};

export const YT = {
  'm3-4': {
    pl: [PL_PROP],
    v: ['IZpvlR5J7FQ', 'Ib5njCwNMdk', '6kYngPvoGxU', 'tACXuzfXzSI', 'ehKd3KmIRSw', '8octtUkdv4Y', 'yo7aULLUz_0', 'tDH67yRNXzI', 'SBBq-PUvh2c'],
  },
  'm3-5': {
    pl: [PL_FOL],
    v: ['ARywou8HLQk', '2GuRhc0ZzGc', 'UN6Hd4UlrnM', 'pPYkNkuo8nU', 'OzLorUzIQ1U', 'DYsSr7fk_4A', 'd87-HuxQaTY', '1bpXqRL2dl8'],
  },
  'm3-6': {
    pl: [PL_FOL],
    v: ['akiBw21opuw', 'mywP1lqVkXs', '5TeDFX7whck'],
    note: 'Neso has no lesson on unification itself. These three cover the quantified inference rules that lifting builds on. Learn unification from the notes and the solver on this page.',
  },
  'm3-10': {
    pl: [PL_PROP, PL_FOL],
    v: ['4iKahGOKmhY', 'HcS4lqXxrV4', '28lebQ60TCc', 'z205Y7D40Lk', 'akiBw21opuw', 'SjEQNOV5FMk', 'TTImfNmhwsQ', 'ikpJqINGPX4', 'Bm05eNcIg1c'],
    note: 'Neso teaches inference as discrete mathematics. Forward and backward chaining are not in these lessons: use the chaining tool on the rule-based representation page.',
  },
};
