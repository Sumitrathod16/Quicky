import React from "react";

function LogicPractice() {
  return (
    <>
      <style>{`
        .container {
          max-width: 900px;
          margin: 40px auto;
          padding: 30px 25px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f0f4f8;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          color: #222;
        }
        h1 {
          text-align: center;
          font-size: 3rem;
          color: #1a237e;
          margin-bottom: 1rem;
        }
        p.intro {
          font-size: 1.15rem;
          color: #555;
          text-align: center;
          margin-bottom: 2.5rem;
          font-style: italic;
        }
        section.practice-section {
          background: white;
          border-radius: 10px;
          padding: 20px 25px;
          margin-bottom: 2.5rem;
          box-shadow: 0 3px 15px rgba(0,0,0,0.05);
          transition: box-shadow 0.3s ease;
        }
        section.practice-section:hover {
          box-shadow: 0 6px 30px rgba(0,0,0,0.1);
        }
        h2 {
          color: #3f51b5;
          margin-bottom: 15px;
          border-bottom: 2px solid #3f51b5;
          padding-bottom: 6px;
        }
        .practice-section ul {
          list-style: none;
          padding-left: 0;
          color: #444;
        }
        .practice-section ul li {
          margin-bottom: 14px;
          font-size: 1.1rem;
          position: relative;
          padding-left: 28px;
          cursor: default;
        }
       .practice-section ul li::before {
          content: "💡";
          position: absolute;
          left: 0;
          top: 0;
          font-size: 1.3rem;
        }
        .footer-note {
          text-align: center;
          font-size: 1rem;
          color: #666;
          margin-top: 40px;
          font-style: italic;
        }
        a.practice-link {
          color: #303f9f;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        a.practice-link:hover {
          text-decoration: underline;
          color: #1a237e;
        }
      `}</style>

      <div className="container">
        <h1>Logic Building Practice for Developers</h1>
        <p className="intro">
          Sharpen your problem-solving skills with carefully selected challenges for frontend, backend, and cross-platform development.
        </p>

        <section className="practice-section">
          <h2>Frontend Logic Challenges</h2>
          <ul>
            <li>
              Build a <a className="practice-link" href="https://leetcode.com/problems/two-sum/" target="_blank" rel="noreferrer">Two Sum</a> solver using JavaScript.
            </li>
            <li>
              Create a dynamic <a className="practice-link" href="https://www.codewars.com/kata/54ff3102c1bad923760001f3" target="_blank" rel="noreferrer">palindrome checker</a> in React.
            </li>
            <li>
              Implement a debounce function to optimize search input in React apps.
            </li>
            <li>
              Write a function to flatten nested arrays using recursion.
            </li>
            <li>
              Design a theme switcher with localStorage to toggle light/dark modes.
            </li>
          </ul>
        </section>

        <section className="practice-section">
          <h2>Backend Logic Challenges</h2>
          <ul>
            <li>
              Create an API endpoint that validates and stores user input with error handling.
            </li>
            <li>
              Write a program to find the <a className="practice-link" href="https://leetcode.com/problems/valid-parentheses/" target="_blank" rel="noreferrer">valid parentheses</a> using stacks.
            </li>
            <li>
              Build a pagination algorithm for a large dataset query.
            </li>
            <li>
              Implement a simple rate limiter for API requests.
            </li>
            <li>
              Write a function to serialize and deserialize JSON objects securely.
            </li>
          </ul>
        </section>

        <section className="practice-section">
          <h2>Cross-Platform Logic Challenges</h2>
          <ul>
            <li>
              Design a caching mechanism to optimize data retrieval in any environment.
            </li>
            <li>
              Implement the classic <a className="practice-link" href="https://www.hackerrank.com/challenges/fibonacci-modified/problem" target="_blank" rel="noreferrer">Fibonacci sequence</a> with memoization.
            </li>
            <li>
              Create a logger function that works across browser console and backend logs.
            </li>
            <li>
              Write a sorting algorithm from scratch (e.g., merge sort, quick sort).
            </li>
            <li>
              Build a CLI tool to validate and parse JSON config files.
            </li>
          </ul>
        </section>

        <p className="footer-note">
          Practice consistently! Solve, refactor, and build projects to turn these challenges into mastery.
        </p>
      </div>
    </>
  );
}

export default LogicPractice;
