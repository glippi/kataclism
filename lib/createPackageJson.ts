export function createPackageJson(kataName: string) {
    return {
      name: kataName,
      private: true,
      version: "0.1.0",
      license: "MIT",
      description: "Kata bootstrapped with kataclism",
      scripts: {
        test: "jest",
        watch: "jest --watchAll"
      },
      babel: {
        presets: ["@babel/preset-env"],
        plugins: ["@babel/plugin-proposal-class-properties"]
      },
      devDependencies: {
        "@babel/core": "^7.1.6",
        "@babel/plugin-proposal-class-properties": "^7.1.0",
        "@babel/preset-env": "^7.1.6",
        "babel-core": "^7.0.0-bridge.0",
        "babel-jest": "^23.6.0",
        jest: "^23.6.0",
        prettier: "^1.15.2"
      }
    };
  }

