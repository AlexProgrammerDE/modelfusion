# ai-utils.js: a toolkit for building AI apps, chatbots and agents

<a href="https://twitter.com/lgrammel" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@lgrammel-4BBAAB.svg" alt="Created by Lars Grammel"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/lgrammel/ai-utils.js" alt="License"></a>

[Quick Install](#quick-install) | [Introduction](#introduction) | [Features](#features) | [Integrations](#integrations) | [Examples](#examples) | [API Wrappers](#api-wrappers)

## Quick Install

```bash
npm install --save ai-utils.js
```

## Introduction

AI-Utils is a JavaScript/TypeScript AI-focused toolset, built around the principles of functional programming and automatic type inference. AI-utils is designed to be convenient and at the same time transparent and extensible.

It provides utilities that make it easier to use AI-functionality such as text generation and voice transcription, and contains [examples](#examples) to show how to build apps with AI. The utilities include convenience methods to call AI APIs (e.g. OpenAI), helpers to make AI-apps production-grade (e.g. token counting, cost calculation, abort & error handling, progress reporting), and more advanced chains (e.g. split/map/filter/reduce for text processing).

## Features

- Text processing chains
  - recursive text mapping (e.g. for summarization or extraction)
  - split-map-filter-reduce for text processing
- Text splitters
  - Recursive character and token splitters
- Tokenization
- Prompt utilities
  - Fit recent messages chat prompt into context window
- Run abstraction for progress reporting and abort signals
- Retry management
- Error handling

## Integrations

- OpenAI
  - chat completions (regular, streaming) - GPT-4, GPT-3.5
  - text completions (regular) - Davinci, Curie, Babbage, Ada
  - tokenization (TikToken) and token counting (incl. message and prompt overhead tokens in chat)
  - transcription - Whisper

## Examples

### [PDF to Twitter Thread](https://github.com/lgrammel/ai-utils.js/tree/main/examples/pdf-to-twitter-thread)

> _terminal app_, _PDF parsing_, _split-map-filter-reduce_, _OpenAI GPT-4_

Takes a PDF and a topic and creates a Twitter thread with all content from the PDF that is relevant to the topic.

### [AI Chat (Next.JS)](https://github.com/lgrammel/ai-utils.js/tree/main/examples/ai-chat-next-js)

> _Next.js app_, _OpenAI GPT-3.5-turbo_, _streaming_, _stream forwarding (keep API key on server)_

A basic web chat with an AI assistant, implemented as a Next.js app.

### [BabyAGI Classic](https://github.com/lgrammel/ai-utils.js/tree/main/examples/baby-agi)

> _terminal app_, _agent_, _BabyAGI_, _OpenAI text-davinci-003_

TypeScript implementation of the classic [BabyAGI](https://github.com/yoheinakajima/babyagi/blob/main/classic/babyagi.py) by [@yoheinakajima](https://twitter.com/yoheinakajima) without embeddings.

### [Voice recording and transcription (Next.js)](https://github.com/lgrammel/ai-utils.js/tree/main/examples/voice-recording-summarizer-next-js)

> _Next.js app_, _OpenAI Whisper_

Record audio with push-to-talk and transcribe it using Whisper, implemented as a Next.js app. The app shows a list of the transcriptions.

## API-Wrappers

AI-Utils provides API wrapper functions for all its integrations. The wrapper functions add types, output parsing and error validation to the APIs to make it more convenient to use them.

### OpenAI

```ts
import { ... } from "ai-utils.js/provider/openai";
```

- generateOpenAITranscription
- generateOpenAIChatCompletion
- streamOpenAIChatCompletion
- generateOpenAITextCompletion
- getTiktokenTokenizerForModel/Encoding

## Models and Functions

AI-Utils provides a layer of models and functions. It adds runs, call logging, composite and advanced functionality. However, some of the functionality that is available in the API wrappers might not be available on this level.

## Helpers

```ts
import { ... } from "ai-utils.js/util";
```

- AsyncQueue
- convertReadableStreamToAsyncIterator
- retryWithExponentialBackoff
