This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Adding Problems

1. In order to contribute you need very less html and [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) 
2. You have four things `question, qnimg, concept, answer, remarks` in array in `components/qnadata`, you can add there texts as JavaScript permits.
3. `<Imgfluid src="yoururl.com/img.png">` can be used everywhere for image scaling , it fits well in the container.
4. For latex code, 
  suppose your code is `\(ax^2 + bx + c = 0\)` or `$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$`
  You ought to put double back slash everywhere instead of single
  i.e. `\\(ax^2 + bx + c = 0\\)` or `$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$`
5. Latex code must be written inside `<p>{"Your latex code here"}</p>`, use <br/> for line changes. 
6. Use `<Concept/> `& `<Remarks/>` in array within `<> </>`. It acts like heading.
7. You can use Bootstrap classes to change the layout of your question, yt tutorials might be helpful.
8. A little knowledge of JavaSript, Html & Bootstrap may be very helpful.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
