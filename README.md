# Next.js 15 API Routes: `setTimeout` and Client-Side Fetching Race Condition

This repository demonstrates a potential race condition when using `setTimeout` within a Next.js 15 API route in conjunction with client-side fetching using `fetch`.

## Problem Description

The API route simulates an asynchronous operation using `setTimeout`.  If the client-side fetch completes before the server-side operation finishes, the client may render with stale data or encounter errors. This is particularly noticeable when combined with `async/await` and `useEffect` hooks, potentially leading to unexpected component behavior.

## Solution

The solution demonstrates better handling of asynchronous operations and improved error management within the API route and client-side component.  It uses a more robust way to handle asynchronous actions and error states. For more complex scenarios, consider adding a loading indicator while waiting for data.

## How to reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Observe the component's behavior. Initially, you may see "Loading...", followed by the data or an error message.