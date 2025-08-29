import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import {globalIgnores} from 'eslint/config'
import react from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintReact from '@eslint-react/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import reactNamingConvention from "eslint-plugin-react-naming-convention";

export default tseslint.config(
    globalIgnores(['dist', '.eslintrc.cjs', 'vite.config.ts']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        plugins: {
            react,
            'simple-import-sort': simpleImportSort,
            '@eslint-react': eslintReact,
            prettier,
            "react-naming-convention": reactNamingConvention,
        },
        rules: {
            'semi': ['error'],
            'object-curly-spacing': [ 'error', 'always' ],
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx', '.ts', '.tsx']}],
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            '@typescript-eslint/consistent-type-definitions': 'off',
            'react/require-default-props': 'off',
            'react/jsx-no-useless-fragment': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/prop-types': 'off',
            'no-plusplus': 'off',
            'max-len': ['error', {'code': 120}],
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    },
    {
        files: ['src/**/*.ts'],
        rules: {
            'react-naming-convention/filename': ['warn', 'kebab-case'],
        },
    },
    {
        files: ['src/**/*.tsx', 'src/**/*.styled.ts'],
        rules: {
            'react-naming-convention/filename': ['warn', 'PascalCase'],
        },
    },
    {
        files: ['src/**/use*.ts'],
        rules: {
            'react-naming-convention/filename': ['warn', 'camelCase'],
        },
    },
    {
        files: ['src/app/main.tsx'],
        rules: {
            'react-naming-convention/filename': 'off',
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            'simple-import-sort/imports': [
                'error',
                {
                    'groups': [
                        ['^react', '^@?\\w'],
                        ['^(@|components)(/.*|$)'],
                        ['^\\u0000'],
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                        ['^.+\\.?(css)$'],
                    ],
                },
            ],
        },
    }
)
