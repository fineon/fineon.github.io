---
slug: cool things in docsaurus
title: Cool Things I Learned While Using Docsaurus
author: Ian Nguyen
author_title: Just a human bean
author_url: https://github.com/fineon
author_image_url: https://github.com/fineon.png
date: 2021-07-08 
tags: [ docusaurus]
---

## Cool Things I Learned While Using Docsaurus

### Fancy Markdown Markup

like this

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

```diff title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
-     items: [...],
+     items: ['hello'],
    },
  ],
};
```

Or add a title to a code snipet 

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```
#### JSX Syntax Highlighting 

We definitely need this in the era of components and React. 

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```
```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

```bash
npm run build
```

