import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

// https://nextjs.org/docs#custom-document
// https://spectrum.chat/next-js/general/setting-body-classname~081fd577-3797-43ff-99ab-eda5b66cdbbb
export default class AppDocument extends Document {
  render() {
    return (
      <Html className="lh-copy sans-serif" lang="en-US">
        <Head />
        <body className="center ma0 mw8 ph3">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
