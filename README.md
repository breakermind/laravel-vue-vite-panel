# laravel-vue-vite
Laravel 9 and Vue 3 with Vite configuration (router, pinia store, axios, tailwind css, google map, i18n locales, scss).

## Install

### Nodejs, npm
```sh
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Update npm@8.11.0
npm install -g npm@latest
```

### Update and build
```sh
# Update php
cd laravel-vue-vite
composer update

# Databases
php artisan migrate --force
php artisan --env=testing migrate --force

# Vue install, build
cd vue-project
npm install
npm run build

# Laravel run local server
cd ..
php artisan serve
```

### Secure env config (git)
Add in .gitignore
```sh
.env
.env.backup
```

# Docs

## Lavarel

### Change in .env (optional)
```sh
# Upload main dir
FILESYSTEM_DISK=public
```

### Change in .env.testing (optional)
```sh
# Environment
APP_ENV=testing
# Cache
CACHE_DRIVER=file
```

## Vue variables

### Create .env config in vue-project
```env
VITE_API_KEY=hash12345
```

### Get .env variable in Vue component
```vue
<script>
export default {
  name: "Title",
  data() {
    return {
      title: 'Welcome',
      base_url: import.meta.env.BASE_URL,
      api_key: import.meta.env.VITE_API_KEY, // Get .env variable
    }
  },
  mounted() {
    console.log(`The api_key .env variable is ${this.api_key} type string.`)
  }
}
</script>

<template>
  <h2>{{ title }}</h2>
</template>
```

## Events

### Scroll event
```vue
<script>
export default {
  name: "Title",
  data() {
    return {
      title: 'Scroll event',
      scrollTop: 0,
      scrollY: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      this.scrollTop = document.body.scrollTop
      this.scrollY = window.scrollY

      console.log("Scroll event", this.scrollTop, this.scrollY);
    },
  },
}
</script>
```

### Scroll event element
```vue
<script>
export default {
  name: "Title",
  data() {
    return {
      title: 'Fixed menu',
      scrollTop: 0,
      box: null
    }
  },
  mounted () {
    // Focus input
    this.$refs.input.focus()

    // Get DOM element
    this.box = this.$refs.menu

    // Listen for scroll events for this DOM element
    this.box.addEventListener('scroll', () => {
      this.scrollTop = this.$refs.menu.scrollTop
      console.log("Menu scrollTop", this.scrollTop)
    }, false)
  }
}
</script>

<template>
  <nav class="menu" ref="menu">
    <a href="/"> Home </a>
    <a href="/about"> About </a>
  </nav>

  <input type="text" ref="input">
</template>
```

### Resize event
```vue
<script>
export default {
  name: "Title",
  data() {
    return {
      title: 'Resize event',
      width: 0,
      height: 0
    }
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions)
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions)
  },
  methods: {
    getDimensions() {
      this.width = window.innerWidth
      this.height = window.innerheight

      console.log("Resize event", this.width, this.height)
    }
  }
}
</script>
```

## Watch

### Watch variables
```vue
<script>
export default {
  name: "Title",
  data() {
    return {
      error: null,
      title: process.env.VUE_APP_TITLE ?? ''
    }
  },
  computed: {
    userId() {
      return this.$route.params.id
    },
    username() {
      return this.$route.params.username
    },
    locale() {
      return this.$route.query.locale
    }
  },
  created() {
    this.$watch(() => this.$route.params, (toParams, prevParams) => {
      console.log("Watcher route", toParams, prevParams)
    }),
    this.$watch(() => this.$route.query.locale, (toLocale, prevLocale) => {
      console.log("Watcher query", toLocale, prevLocale)
    })
  },
  watch: {
    error(newE, oldE) {
      console.log("Watcher error", newE, oldE)
    },
    $route (to, from){
        this.error = false;
    }
  },
  filters: {
    currencyDecimal (value) {
      return parseFloat(value.replace(',','')).toFixed(2)
    }
  }
}
</script>
```

## Vue javascript

### Add javascript file
```js
// vue-project/public/scripts/sample.js after build will be in dist/scripts/sample.js
let some_data = 'App Name 123'

window.onload = function() {
  console.log(`Variable ${some_data}`)
}
```

### Load scripts
```vue
<script>
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  mounted() {
    // Load external script
    let rs = document.createElement('script')
    rs.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
    document.head.appendChild(rs)

    // Load local script
    let o = document.createElement('script')
    o.setAttribute('src', '/scripts/sample.js')
    document.head.appendChild(o)
  }
}
</script>
```

### Load scripts async
```js
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let s;
        s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });
}

loadScript(cdnSource).then(successCallback)

loadScript(cdnSource)
  .catch(loadScript.bind(null, localSource))
  .then(successCallback, failureCallback);
```

## Axios

### Axios requests
```vue
<script>
import axios from 'axios'

export default {
  name: "Title",
  data() {
    return {
      btc: null,
      title: process.env.VUE_APP_TITLE ?? '',
      item: null,
      items: [],
    }
  },
  mounted() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => {
      this.btc = response.data.bpi
      console.log("Axios", this.btc)
    }).catch(function (error) {
      console.log(error);
    });
  },
  methods: {
    getUserAccount() {
      axios.get('/item/12345').then(res => {
        this.item = res.data
      }).catch(function (error) {
        console.log(error);
      });
    },
    async addItem(name) {
      const res = await axios.post('/items', {name: name});
      this.items = [...this.items, res.data];
    }
  },
  async created() {
    try {
      const res = await axios.get('/items');
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
  },
}
</script>
```

## Configs

### Laravel blade
```php
@php
  echo file_get_contents(base_path() . '/public/index.html');
@endphp
```

### Laravel Vue Vite config
```sh
import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: resolve(__dirname, '../public'),
    rollupOptions: {
      output: {
        dir: '../public',

        // One dir
        // chunkFileNames: "js/[name].js",
        // entryFileNames: 'js/[name].js',
        // assetFileNames: 'js/[name].[ext]',

        // Multi dir
        assetFileNames: 'vue/[ext]/[name][extname]',
        chunkFileNames: 'vue/chunks/[name].[hash].js',
        entryFileNames: 'vue/js/[name].js',

        // Settings
        manualChunks: undefined,
      }
    }
  }
})
```

### Nginx virtualhost
```sh
sudo apt install nginx mysql-server php8.1 php8.1-fpm

# Local domain /etc/hosts
127.0.0.10 vue.xx www.vue.xx

# Laravel virtualhost
server {
  listen 80;
  listen [::]:80;
  server_name vue.xx www.vue.xx;
  root /www/vue.xx/public;
  index index.php;
  location / {
    # try_files $uri $uri/ =404;
    try_files $uri $uri/ /index.php$is_args$args;
  }
  location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass unix:/run/php/php8.0-fpm.sock;
    # fastcgi_pass 127.0.0.1:9000;
  }
  location ~* \.(js|css|png|jpg|jpeg|gif|webp|svg|ico)$ {
    expires -1;
    access_log off;
  }
  disable_symlinks off;
  client_max_body_size 100M;
  charset utf-8;
  source_charset utf-8;
}
```