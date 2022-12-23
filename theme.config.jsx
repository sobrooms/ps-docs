import Image from "next/image";
export default {
  editLink: {
    text: "Edit this page on GitHub →"
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - The PS Documentation'
    }
  },
  project: {
    link: 'https://github.com/mangorifo/ps-docs/tree/main'
  },
  docsRepositoryBase: 'https://github.com/mangorifo/ps-docs/tree/main',
  titleSuffix: ': The PS Documentation',
  logo: (
    <>
      <Image
        src="/ic.png"
        alt="Logo/Icon"
        width={25}
        height={25}
      />
      <span style={{ marginLeft: '.4em', fontWeight: 200 }}>
        Private Server Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta property="og:description" content="anime game company ps stuff and other stuff 🥺🥺🥺🥺" />
      <meta name="theme-color" data-react-helmet="true" content="#c7a09d" />
      <link rel="shortcut icon" href="/ic.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </>
  ),
  darkMode: true,
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    text: <>built with Nextra | made by rrryfoo#8618</>
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'tl', text: 'Filipino/Tagalog' }
  ],
  primaryHue: {
    dark: 41,
    light: 41
  }
}
