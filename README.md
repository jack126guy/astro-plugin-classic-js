# astro-plugin-classic-js

This [Astro](https://astro.build/) plugin enables imports of "classic" (non-module) scripts as static assets, with minification.

**Note**: This plugin is only for Astro 6 and later. For previous versions of Astro, use [vite-plugin-classic-js](https://github.com/jack126guy/vite-plugin-classic-js) (which this plugin is based on).

## Installation

Add the plugin to the configuration:

```
import { defineConfig } from 'astro/config';
import classicJs from '@halfgray/astro-plugin-classic-js';

export default defineConfig({
	// ...
	vite: {
		plugins: [classicJs()],
	},
});
```

Currently, no configuration options for the plugin are provided.

## Usage

Classic scripts are identified with a `.clajs` file extension. Importing a classic script results in a URL which can be used for the `src` attribute of a `<script>` element, similar to other [static assets](https://docs.astro.build/en/guides/imports/).

Example:

```
---
import classicScript from './myscript.clajs';
---

{/* ... */}
<script is:inline src={classicScript}></script>
```

Demos are available on [GitHub](https://github.com/jack126guy/astro-plugin-classic-js/tree/main/demos).

(Note: For backwards compatibility, the older extension `.cljs` is also supported. However, this extension is deprecated.)

## License

This plugin is available under the MIT License. Refer to `LICENSE.txt` for details.