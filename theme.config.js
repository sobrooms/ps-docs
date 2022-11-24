export default {
  github: 'https://github.com/mangorifo/ps-docs',
  docsRepositoryBase: 'https://github.com/mangorifo/ps-docs/',
  titleSuffix: ' – Docs on how to connect to PS',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline"> | </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentation on how to connect to PS
      </span>
    </>
  ),
  head: (
    <>
      <meta name="description" content="Documentation on how to connect to *anime game* private servers." />
      <meta name="theme-color" content="#c7a09d" />
      <link rel="shortcut icon" href="./public/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </>
  ),
  search: true,
  footer: true,
  footerEditLink: false,
  darkMode: true,
  nextLinks: true,
  prevLinks: true,
  footerText: <>{new Date().getFullYear()} © | built with Nextra | made by rrryfoo#8618</>
}

