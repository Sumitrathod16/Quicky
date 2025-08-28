import React, { useState } from "react";

function CodeOutputContainer({ title, code, children }) {
  return (
    <div className="code-output-wrapper">
      <h2>{title}</h2>
      <div className="code-output-container">
        <div className="code-box">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
        <div className="output-box">{children}</div>
      </div>

      <style>{`
        .code-output-wrapper {
          margin: 40px auto;
          max-width: 1000px;
          padding: 20px;
          background: #1e1e1e;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          color: #fff;
        }

        .code-output-wrapper h2 {
          text-align: center;
          margin-bottom: 16px;
        }

        .code-output-container {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 20px;
        }

        .code-box,
        .output-box {
          flex: 1;
          min-width: 300px;
          background: #2b2b2b;
          padding: 16px;
          border-radius: 10px;
        }

        .code-box {
          overflow-x: auto;
          max-height: 400px;
          font-family: 'Fira Code', monospace;
          color: #dcdcdc;
          font-size: 0.9em;
        }

        pre {
          white-space: pre-wrap;
        }

        .output-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #111;
          color: white;
        }

        .output-box h2 {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .output-box button, .output-box input {
          margin: 6px;
          padding: 8px 16px;
          font-size: 16px;
          border: none;
          border-radius: 6px;
        }

        .output-box button {
          background-color: #00bfff;
          color: white;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .output-box button:hover {
          background-color: #ff9800;
        }

        .output-box input[type="color"] {
          width: 60px;
          height: 40px;
          cursor: pointer;
        }

        .todo-item {
          cursor: pointer;
        }

        .quote-box {
          font-style: italic;
          text-align: center;
          margin: 10px 0;
          max-width: 80%;
        }
          /* Add this at the bottom of your styles */
@media (max-width: 768px) {
  .code-output-wrapper {
    padding: 12px;
    margin: 20px auto;
  }

  .code-output-wrapper h2 {
    font-size: 1.2rem;
  }

  .code-output-container {
    flex-direction: column;  /* stack code & output vertically */
    gap: 16px;
  }

  .code-box,
  .output-box {
    min-width: 100%;  /* full width on mobile */
    font-size: 0.85rem;
    padding: 12px;
  }

  .output-box h2 {
    font-size: 1.5rem;
  }

  .output-box button,
  .output-box input {
    width: 100%;  /* make buttons/inputs full width */
    font-size: 14px;
    padding: 10px;
  }

  .quote-box {
    max-width: 100%;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem !important; /* smaller title */
  }

  .output-box button,
  .output-box input {
    font-size: 12px;
    padding: 8px;
  }
}

      `}</style>
    </div>
  );
}

function ExploreWithCodeOutput() {
  // Project 1: Counter
  const [count, setCount] = useState(0);
  const counterCode = `
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`;

  // Project 2: To-Do List
  const [tasks, setTasks] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const todoCode = `
import React, { useState } from 'react';
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => {
        setTasks([...tasks, { text: input, done: false }]);
        setInput('');
      }}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} onClick={() => {
            setTasks(tasks.map((task, idx) => idx === i ? { ...task, done: !task.done } : task));
          }} style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
}`;

  // Project 3: Color Picker
  const [color, setColor] = useState("#00bfff");
  const colorCode = `
import React, { useState } from 'react';
function ColorPicker() {
  const [color, setColor] = useState('#00bfff');
  return (
    <div>
      <input type="color" value={color} onChange={e => setColor(e.target.value)} />
      <div style={{ width: 60, height: 60, background: color, borderRadius: 8 }} />
    </div>
  );
}`;

  // Project 4: Random Quote
  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "It’s not whether you get knocked down, it’s whether you get up."
  ];
  const [quote, setQuote] = useState(quotes[0]);
  const quoteCode = `
import React, { useState } from 'react';
const quotes = ['quote1', 'quote2', 'quote3'];
function RandomQuote() {
  const [quote, setQuote] = useState(quotes[0]);
  return (
    <div>
      <p>{quote}</p>
      <button onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}>
        New Quote
      </button>
    </div>
  );
}`;

  // Project 5: Theme Toggle
  const [dark, setDark] = useState(false);
  const themeCode = `
import React, { useState } from 'react';
function ThemeToggle() {
  const [dark, setDark] = useState(false);
  return (
    <div style={{
      background: dark ? '#222' : '#fff',
      color: dark ? '#fff' : '#222'
    }}>
      <button onClick={() => setDark(d => !d)}>
        {dark ? 'Switch to Light' : 'Switch to Dark'}
      </button>
      <p>This is {dark ? 'Dark' : 'Light'} Theme</p>
    </div>
  );
}`;

  return (
    <div style={{ padding: "60px 20px", background: "#121212", minHeight: "100vh" }}>
      <h1 style={{ color: "#fff", textAlign: "center", fontSize: "3rem" }}>Explore Projects</h1>

      {/* Counter */}
      <CodeOutputContainer title="Mini Project: Counter" code={counterCode}>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </CodeOutputContainer>

      {/* To-Do List */}
      <CodeOutputContainer title="Mini Project: To-Do List" code={todoCode}>
        <input
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="New task"
        />
        <button
          onClick={() => {
            if (!todoInput.trim()) return;
            setTasks([...tasks, { text: todoInput, done: false }]);
            setTodoInput("");
          }}
        >
          Add
        </button>
        <ul>
          {tasks.map((t, i) => (
            <li
              key={i}
              className="todo-item"
              style={{ textDecoration: t.done ? "line-through" : "none" }}
              onClick={() =>
                setTasks(
                  tasks.map((task, idx) =>
                    idx === i ? { ...task, done: !task.done } : task
                  )
                )
              }
            >
              {t.text}
            </li>
          ))}
        </ul>
      </CodeOutputContainer>

      {/* Color Picker */}
      <CodeOutputContainer title="Mini Project: Color Picker" code={colorCode}>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <div style={{ width: 60, height: 60, background: color, borderRadius: 8 }} />
      </CodeOutputContainer>

      {/* Random Quote */}
      <CodeOutputContainer title="Mini Project: Random Quote" code={quoteCode}>
        <div className="quote-box">"{quote}"</div>
        <button onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}>
          New Quote
        </button>
      </CodeOutputContainer>

      {/* Theme Toggle */}
      <CodeOutputContainer title="Mini Project: Theme Toggle" code={themeCode}>
        <button onClick={() => setDark((d) => !d)}>
          {dark ? "Switch to Light" : "Switch to Dark"}
        </button>
        <p>This is {dark ? "Dark" : "Light"} Theme</p>
      </CodeOutputContainer>
    </div>
  );
}

export default ExploreWithCodeOutput;
