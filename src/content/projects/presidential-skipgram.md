---
title: Presidential Word Vectors
kind: built
order: 2
links:
  - label: Code
    href: https://github.com/hellomaxlee/presidential-skipgram
---
Three Word2Vec models, one each for Reagan, Obama, and Trump, trained on their State of the Union, inaugural, and farewell speeches. Word2Vec learns which words appear near each other, so it can tell which words a speaker uses in similar contexts. Given a word such as "economy", the app ranks each president's vocabulary by cosine similarity, a measure of how closely two word vectors point the same way, and shows the top five with their scores. Each list then goes to a language model through OpenAI's API, which returns a short interpretation. It was a final project for Math 356, Statistical Methods in Machine Learning, at Hamilton College.
