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
      <meta name="theme-color" content="#5284d9" />
      <link rel="shortcut icon" href="./public/favicon.ico" />
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
