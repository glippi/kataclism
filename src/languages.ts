const DEFAULT_LANGUAGE = 'javascript'

export type Language = {
  path: string
  alias: string
  installDependencies: string
  commandForTest: string
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
    installDependencies: 'npm install',
    commandForTest: 'npm run test:watch',
  },
  typescript: {
    path: 'typescript',
    alias: 't',
    installDependencies: 'npm install',
    commandForTest: 'npm run test:watch',
  },
  netcore: {
    path: 'netcore',
    alias: 'n',
    installDependencies: 'dotnet build',
    commandForTest: 'dotnet test',
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
