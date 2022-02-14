import { rollup } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";

const config = {
    output: { format: "cjs" },
    plugins: [
        resolve({
            preferBuiltins: true,
            exportConditions: ["node"], // uuid
        }),
        typescript({ module: "ESNext" }),
        commonjs({ include: /node_modules/ }),
        json(),
    ],
};

const { cache } = await rollup({
    ...config,
    input: "src/foo.ts",
});

await rollup({
    ...config,
    input: "src/bar.ts",
    cache,
});
