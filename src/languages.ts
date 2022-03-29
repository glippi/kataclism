const DEFAULT_LANGUAGE = 'javascript'

export type Language = {
  path: string
  alias: string
  installDependencies: string
  commandForTest: string
}

export interface SupportedLanguages {
  javascript: Language
  typescript: Language
  netcore: Language
}

const supportedLanguages: SupportedLanguages = {
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

export class Languages {
  public static get languages() {
    return supportedLanguages
  }

  public static get choices() {
    return Object.keys(supportedLanguages)
  }

  public static get commands() {
    return Object.entries(supportedLanguages).map(
      ([supportedLanguage, currentLanguage]) => {
        return {
          name: this.toPascalCase(supportedLanguage),
          alias: currentLanguage.alias,
          fullAlias: supportedLanguage,
        }
      }
    )
  }

  public static getByCommand = (command: any) => {
    const args = Object.keys(command)

    if (args.length > 2) {
      const selectedLanguage = args[2] as keyof SupportedLanguages

      return supportedLanguages[selectedLanguage]
    }

    return supportedLanguages[DEFAULT_LANGUAGE]
  }

  private static toPascalCase(language: string) {
    ;`${language[0].toUpperCase()}${language.substring(1, language.length)}`
  }
}
