<h2 align="center">Grain Analyzer Hybrid(Android + IOS + Web) Application</h2>

<p align="center">Application, built using [React Native Expo](https://docs.expo.dev/).
<br>
</p>

## 📝 Table of Contents

- [Context](#context)
- [Requirements](#requirements)
- [Quick Start](#quick_start)
- [Docz](#docz)
- [Deployment](#deployment)
- [Coding style](#coding_style)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🏁 Context <a name = "context"></a>
Standard react Repository setup:
1. This app is created using [create expo](https://docs.expo.dev/more/create-expo/#--template). 
    ```
    bun create expo@latest grn-analyser-mobile --template blank-typescript
    ```

2. Github actions workflow file with [Eslint setup](https://eslint.org/docs/latest/use/getting-started).


3. To maintain code format used Prettier [Eslint Plugin Prettier](https://github.com/prettier/eslint-plugin-prettier).


4. Modified tscofig.json & added babel.config.js to use Custom Path Alias with TypeScript [Custom Path Alias](https://reactnative.dev/docs/typescript#using-custom-path-aliases-with-typescript)


5. Pre-commit installation and setup using [Lefthook](https://github.com/evilmartians/lefthook?tab=readme-ov-file#your-own-tasks)


6. Dockerfile to speed up the development and deployment processes.


7. For creating documentation [Docz](https://www.docz.site/).

8. Created Prebuild using [bun prebuild]

## 🏁 Requirements <a name = "requirements"></a>
You’ll need to have [Node >= 22.11](https://nodejs.org/en/) and [bun >= 1.2](https://bun.sh/) on your machine.

## 🏁 Quick Start <a name = "quick_start"></a>
1. Clone the repository
```
    git clone https://github.com/WadhwaniAI/
```
2. In the project directory, run following commands
``` 
    bun install

    bun start
        or
    bun start -c
```

## 🏁 Component Documentation using Docz <a name = "docz"></a>
```
    bun run docz:dev    
```

## 🏁 Deployment <a name = "deployment"></a>
```
```

## 🏁 Additional Deployment(multiple environments) <a name = "additional_deployment"></a>
```
```

## 🏁 Code Styling <a name = "coding_style"></a>

1. ESlint
2. Prettier 
3. Pre-commit Lefthook
4. Github action setup

 
## ✍️ Authors <a name = "authors"></a>
- [@jay-wai](https://github.com/jay-wai)


### Contributors
- [@jay-wai](https://github.com/jay-wai)
- [@mukul-paul-wadhwaniai](https://github.com/mukul-paul-wadhwaniai)











```





````
### Ignore From Here 🙈
```

- created project with

    bun create expo@latest grn-analyser-mobile --template blank-typescript

    bun add -D @types/jest


 Modified tsconfig.json file
    {
        "extends": "expo/tsconfig.base",
        "compilerOptions": {
            "strict": true,
            "allowJs": true,
            "allowSyntheticDefaultImports": true,
            "esModuleInterop": true,
            "jsx": "react-native",
            "lib": ["es2023"],
            "types": ["react-native", "jest"],
            "moduleResolution": "node",
            "noEmit": true,
            "target": "ESNext",
            "baseUrl": ".",
            "paths": {
            "@components/*": ["src/components/*"],
            "@utils/*": ["src/utils/*"]
            }
        },
        "exclude": [
            "node_modules",
            ".vscode/*",
            "bun.lock",
            ".gitignore",
        ]
    }


- Start the server
    bun start
        or
    bun start -c (clearing cache)

- Config custom path alias to import file using alias @component/page1 rather than ./src/component/page1
    bun add --save-dev babel-plugin-module-resolver

    bable.config.js
        module.exports = function (api) {
            api.cache(true);
            return {
                presets: ['babel-preset-expo'],
                plugins: [
                    [
                        'module-resolver',
                        {
                            alias: {
                                '@components': './src/components',
                                '@screens': './src/screens',
                                '@utils': './src/utils',
                            },
                        },
                    ],
                ],
            };
        };
  


- Configure & set up ESLint, Prettier and all the plugins
    bun create @eslint/config@latest
    bun add --save-dev eslint-plugin-prettier eslint-config-prettier
    bun --save-dev --save-exact prettier

    airbnb
        not found compatibility with newest version of eslint
        https://stackoverflow.com/questions/74925642/how-to-use-eslint-config-airbnb-with-the-new-eslint-config-spec


    eslint.config.mjs
    import globals from 'globals';
    import pluginJs from '@eslint/js';
    import tseslint from 'typescript-eslint';
    import pluginReact from 'eslint-plugin-react';
    import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

    /** @type {import('eslint').Linter.Config[]} */
    export default [
        { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
        {
            languageOptions: {
                globals: globals.browser,
                ecmaVersion: 'latest',
            },
        },
        pluginJs.configs.recommended,
        ...tseslint.configs.recommended,
        pluginReact.configs.flat.recommended,
        eslintPluginPrettierRecommended,
        {
            rules: {
                'no-undef': 'off',
                'react/react-in-jsx-scope': 'off',
                'no-shadow': ['error'],
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },
                ignores: [''],
        },
    ];



    .prettierrc.js
        module.exports = {
            arrowParens: 'avoid',
            bracketSameLine: true,
            bracketSpacing: true,
            singleQuote: true,
            trailingComma: 'all',
        };



- Pre-commit hook 
    bun add lefthook --save-dev

    lefhook.yml
    pre-commit:
        commands:
            eslint:
                run: bun eslint {staged_files}
                glob: '*.{js,ts,jsx,tsx}'
                # exclude:
                #     - config/application.rb
            prettier:
                run: bun prettier --write {staged_files}
                glob: '*.{js,ts,jsx,tsx}'



- How to set Fonts
    install expo-fonts
    download required font file .otf
    list all the fonts path in app.json plugins
    use usefonts hook 
    use fonts
```


- To use localhost api 
    follow this 5th point https://stackoverflow.com/questions/33704130/react-native-android-fetch-failing-on-connection-to-local-api

    install https://ngrok.com/downloads/mac-os

    run -> ngrok http http://localhost:8082
    use the forwarding as api
    
