import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default {
    input: 'src/app.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
        sourempa: true,
    },
    plugins: [typescript(), resolve(), json(), commonjs()],
}
