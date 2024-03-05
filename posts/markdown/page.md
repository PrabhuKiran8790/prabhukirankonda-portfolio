---
title: Introducing Markdown
description: Quick Start guide on Markdown and it's potential. Learn How? Why? and When? to use Markdown and more...
date: '2023-06-30'
tags:
  - creator
  - content
  - blog
image: https://www.svgrepo.com/download/373827/markdown.svg
draft: false
---

## What is markdown ?
Markdown is a lightweight markup language that allows you to add formatting elements to plain text documents. It is widely used for creating static websites, writing documentation, taking notes, and formatting content for the web.

### What is a markup language?
A markup language is a system for annotating text to indicate its structure, presentation, or other characteristics. It uses tags to define and describe elements within a document. These tags provide instructions to the software or system that processes the document.

There are several markup languages, each with its own syntax and purpose. Some popular markup languages include:

- HTML (Hypertext Markup Language):<br>
Used for creating web pages and defining the structure and content of a webpage.
- XML (eXtensible Markup Language):<br>
Used for storing and transporting data, and defining custom tags and structures.
- Markdown:<br>
A lightweight markup language used for formatting plain text documents, as discussed earlier.
- LaTex:<br>
A markup language used for typesetting documents, especially in the scientific and academic fields.

## Why markdown ?
- To contribute to my posts 😂:<br>
All my posts here, are written in markdown.
- Simplicity and ease of use:<br>
Markdown uses a simple and intuitive syntax that is easy to learn and use, even for non-coders. It offers a straightforward way to format text without the need for complex HTML tags or menus.

```html:HTML
<h2 id="why-markdown-">Why markdown ?</h2>
<ul>
<li>To contribute to my posts 😂:<br>
All my posts here, are written in markdown.</li>
</ul>
```
```md:Markdown
## Why markdown ?
- To contribute to my posts 😂:
All my posts here, are written in markdown.
```
- Readability and portability:<br>
Markdown files are plain text files that can be opened and read by any application, making them highly portable. This means that your content is not locked into a proprietary format and can be easily transferred and accessed on different devices and platforms.
- Versatility:<br>
Markdown can be used for a wide range of purposes, including creating websites, writing documents, taking notes, and formatting content for various mediums. It is suitable for both personal and professional use, making it a versatile tool.
- Compatibility:<br>
Markdown is supported by many popular applications and platforms, including websites like Reddit and GitHub. It can be used with a variety of text editors, content management systems, and collaboration tools, ensuring compatibility and ease of integration.
- Efficiency and productivity:<br>
Markdown allows you to focus on writing content without distractions. Its lightweight syntax and minimal formatting options enable faster writing and editing, increasing productivity and efficiency.


## where to start ?
[StackEdit](https://stackedit.io/app): A markdown playground, where one can learn while experimenting.

## Can it replace HTML ?
No, it just wasn't meant to be.
For example a `button` can't be created with pure markdown.

### Limitations of markdown
- Not consistent:<br>
Different Markdown parsers may have their own interpretations and extensions to the original Markdown specification. While the core features of Markdown, such as headings, lists, and emphasis, are consistent across parsers, additional features and syntax may vary. For example, some parsers may support HTML, tables, footnotes, or strikethrough text, while others may not. These variations can result in differences in how Markdown is rendered and displayed.
- Structure and semantics:<br>
HTML allows for precise control over the structure and semantics of a webpage. It provides tags and attributes that define the hierarchy, relationships, and meaning of the content. This level of control is essential for accessibility, search engine optimization (SEO), and ensuring proper rendering across different devices and browsers.

## Alternatives to Markdown
There are a number of other lightweight markup languages that some consider better choices.
- [Asciidoc](http://asciidoc.org/), originally designed as a plain text alternative to DocBook, was created with structured writing in mind and is extensible by design. It can generate output in numerous formats (including DocBook, obviously) and is part of Atlas, which O’Reilly uses in producing their manuals.
- [Restructured Text](https://docutils.sourceforge.io/rst.html) (ReST) was initially released in 2002, making it older than Markdown. Extensibility is a core principle in its design, but it is already more fully-featured, including footnotes, tables, citations, and tables of contents right out of the box. With all this, it has a comprehensive specification and a single canonical implementation still in development via the docutils project.
- [Creole](http://www.wikicreole.org/) is a project that tries to find a common syntax, and looks a bit like both Asciidoc and Restructured Text.
