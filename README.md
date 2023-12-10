# Plain News PH

Just a plain news website

# Prerequisites

-   [Node.js](https://nodejs.org/en)
    -   to check if it is installed: `npm --version`
-   [Git](https://git-scm.com/)
    -   clone the project to set it up: `git clone https://github.com/p0tatoes/ITElective3-News.git`

# Setup

1. install dependencies

```
npm i
```

2. setup initial database (should generate two news posts)

```
npx prisma migrate dev
```

3. run development environment

```
npm run dev
```

# Libraries Used

## Dependencies

-   @prisma/client
-   next
-   react
-   react-dom

## Dev Dependencies

-   @testing-library/jest-dom
-   @testing-library/react
-   @types/node
-   autoprefixer
-   jest
-   jest-environment-jsdom
-   postcss
-   prisma
-   tailwindcss
-   ts-node
-   typescript
