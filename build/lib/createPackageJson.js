"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPackageJson(kataName, isTypeScript) {
    if (isTypeScript === void 0) { isTypeScript = false; }
    return isTypeScript ?
        ({
            name: kataName,
            version: "1.0.0",
            description: "Kata bootstrapped with kataclism",
            main: "build/src/index.js",
            scripts: {
                "start": "npm run build:live",
                "build": "tsc -p .",
                "build:live": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts",
                "test": "jest",
                "watch": "jest --watchAll"
            },
            jest: {
                "roots": ["src/", "test"],
                "testMatch": [
                    "/__tests__/.*\\.(ts|tsx|js)",
                    "**/?(*.)(spec|test).ts?(x)"
                ],
                "transform": {
                    "^.+\\.tsx?$": "ts-jest"
                }
            },
            devDependencies: {
                "typescript": "^3.3.3",
                "@types/jest": "^24.0.3",
                "@types/typescript": "^2.0.0",
                "@types/jest-diff": "^20.0.1",
                "jest": "^24.1.0",
                "ts-jest": "^23.10.5",
                "jest-diff": "^24.0.0",
                "nodemon": "^1.18.10",
                "ts-node": "^8.0.2"
            }
        })
        :
            ({
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
                devDependencies: {}
            });
}
exports.createPackageJson = createPackageJson;
