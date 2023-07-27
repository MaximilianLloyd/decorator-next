import { Header } from "./header";
import { Footer } from "./footer";

import { html } from 'common-tags';


export const Index = () => html`
<html lang="{{ language }}">
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;1,400&display=swap"
    rel="stylesheet"
  />
  {{& scriptsAndLinks }}
</head>
<body>
  ${Header()}
  <div>
    <main>
      <div>main</div>
      <select id="language-select">
        <option value="nb">nb</option>
        <option value="en">en</option>
        <option value="se">se</option>
      </select>
      <form id="breadcrumbs-form">
        <textarea class="border" cols="80" rows="15" name="breadcrumbs">
[
  {
    "url": "https://www.nav.no/person/dittnav",
    "title": "Ditt NAV"
  },
  {
    "url": "https://www.nav.no/person/kontakt-oss",
    "title": "Kontakt oss"
  }
]
</textarea
        >
        <button class="bg-blue-200 p-4 hover:bg-blue-300 active:bg-blue-400">
          set breadcrumbs
        </button>
      </form>
    </main>
  </div>
  <div id="decorator-footer">
  ${Footer()}
  </div>
</body>
</html>
`;
    // {{> footer}}
