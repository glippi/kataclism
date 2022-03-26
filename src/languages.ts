const DEFAULT_LANGUAGE = 'javascript'

export type Language = {
  path: string
  alias: string
  gitCommand: string
}

export interface Languages {
  javascript: Language
  typescript: Language
  netcore: Language
}

export const supportedLanguages: Languages = {
  javascript: {
    path: 'javascript',
    alias: 'j',
    gitCommand: 'echo node_modules/ > .gitignore',
  },
  typescript: {
    path: 'typescript',
    alias: 't',
    gitCommand: 'echo node_modules/ > .gitignore && echo dist/ >> .gitignore',
  },
  netcore: {
    path: 'netcore',
    alias: 'n',
    gitCommand: '',
  },
}

export const getLanguageByParameter = (option: any) => {
  const args = Object.keys(option)

  if (args.length > 2) {
    const selectedLanguage = args[2] as keyof Languages

    return supportedLanguages[selectedLanguage]
  }

  return supportedLanguages[DEFAULT_LANGUAGE]
}
