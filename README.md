# Sequoia Creative Lab
Welcome to the website of the Sequoia Creative Lab!

## Dev environment setup
You can skip this setup if you already have Xcode, Homebrew, rbenv (or a separate Ruby), and Node installed on your machine.

### Install Xcode Command Line Tools
The [Xcode Command Line Tools](http://railsapps.github.io/xcode-command-line-tools.html) allow you to work with the terminal.

```$ xcode-select --install```

### Install Homebrew
[Homebrew](http://brew.sh/) is a package manager for macOS that easily installs our [Ruby](https://www.ruby-lang.org/en/) version management tool and [Node](nodejs.org).

```$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```

### Install rbenv
Use Homebrew to install [rbenv](rbenv.org), a Ruby version management tool that will allow us to install a new Ruby and avoid conflicts with the system Ruby. You can skip this step if you're already using a separate Ruby.

```$ brew install rbenv```

### Install latest stable version of Ruby
Right now, that's `2.3.0`.

```$ rbenv install 2.3.0```

### Update bash profile
You'll need to update your bash profile to save changes that you make with rbenv.

```$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile```

```$ echo eval '"$(rbenv init -)"' >> ~/.bash_profile```

### Set latest version of Ruby globally
This will tell your machine to use the Ruby we just installed in every directory.

```$ rbenv global 2.3.0```

### Check that Ruby changed
```$ which ruby```

You should see `/Users/YOURNAME/.rbenv/shims/ruby`. If you get `/usr/bin/ruby`, try troubleshooting with [these instructions](http://stackoverflow.com/a/12150580).

### Install node
Install node using Homebrew. Installing node will let you use npm, a package manager for JavaScript.

```$ brew install node```

## Website setup
We created a simple site for the lab to showcase who we are and what we do. It was built with [Jekyll](https://jekyllrb.com/) for static site generation, [Gulp](https://gulpjs.com/) for managing our build tasks, [Tachyons](http://tachyons.io/) for organizing our CSS and [AOS](https://github.com/michalsnik/aos) for animation. It lives on [Github Pages](https://pages.github.com/) and is powered by [Cloudflare](https://www.cloudflare.com/).

If you need to make changes to the site, follow the steps below to get set up.

### Clone github repo
Clone the Github repo to your machine locally. If you get an SSH error, try following [these instructions](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).

```$ git clone git@github.com:julesforrest/scl.git```

### Navigate to the SCL repo
```$ cd scl```

### Install Jekyll and Bundler
[Jekyll](https://jekyllrb.com/) is the static site generator that the SCL site runs on. [Bundler](http://bundler.io/) is a gem manager for Ruby that helps us make sure everyone's copy of the site is using the same tools.

```$ gem install jekyll bundler```

### Install Gulp

[Gulp](https://gulpjs.com/) is a JavaScript task runner that automates tasks in the SCL development workflow. The SCL site uses gulp to do things like bundle and minify libraries and stylesheets, refresh the browser after changes using [BrowserSync](https://browsersync.io/) and optimize images.

```$ npm install gulp-cli -g```

```$ npm install gulp -D```

### Install dev dependencies
Install all of the packages that the SCL site specified for its gulp tasks.

```$ npm install```

### Run Jekyll
Run Jekyll, starting the local server.

```$ bundle exec jekyll serve```

### Run gulp
While Jekyll is running, open a new tab in your terminal and run gulp.

```$ gulp```

This should open a new browser window running at `localhost:3000`.

## Working with the site

### Basic file structure

> Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server.

- [Jekyll Documentation](https://jekyllrb.com/docs/home/)

All the content for the site lives in the [front-matter](https://jekyllrb.com/docs/frontmatter/) of the `index.md` file.

The html structure for site lives in the `homepage.html` file in the layouts folder.

The site includes three Jekyll collections: alumni, jobs, and logos. Collections make it easy to add or remove content through Siteleaf. To manually modify any of those collections, add/remove/modify the appropriate files in the `_{collection}` folder.

To view the CSS, open the `sass` folder in the `_static` folder of the site. The styles are organized into folders that contain partials: `base`, `components`, `utilities` and `variables`. Each partial is then imported into the `styles.scss` file, which gets converted to CSS by gulp when the site is compiled.

The head tags, footer scripts, and icons can all be found in the `_includes` folder.

Icons are served as sprites from a single svg file that gets included at the top of the document.


### HTML

Jekyll uses a templating engine called [Liquid](https://help.shopify.com/themes/liquid). To make the homepage HTML cleaner and easier to read, Liquid's [for loops](https://help.shopify.com/themes/liquid/objects/for-loops) are used wherever possible. For loops can be used for sets of key/value pairs in the index.md file or for collections.

### Collections

>  Collections allow you to define a new type of document that behave like Pages or Posts do normally, but also have their own unique properties and namespace.

- [Jekyll Collections Documentation](https://jekyllrb.com/docs/collections/)

This site uses collections for alumni, jobs and logos. Collections are useful for sorting or quickly adding/removing items. For example, SCL uses sorting logic to display alumni alphabetically by last name. It uses jobs and logos collections so that jobs and logos can easily be swapped out using the Siteleaf interface.

### CSS

The CSS for the site is written in Sass, saved as .scss files and converted to CSS during the build process by Gulp.

This site uses a functional CSS framework called [Tachyons](https://tachyons.io). Most of the site is styled with Tachyon's utility classes and can be easily updated by modifying the HTML and not by writing a lot of new CSS.

Custom CSS for the site lives in the components folder of the site's sass folder. To add a new component, create a new file with an underscore at the start of the file name, add your CSS and then import it to the styles.scss file.

### JS

Most of the site does not require JavaScript, but if you need to add or modify the JS, it can be found in the .js folder of _static folder. It's minified during the build process by Gulp.

### Build/Gulp

> gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.

- [Gulp](http://gulpjs.com/)

This site automates build tasks in its gulpfile.js folder.

Gulp handles:

* Optimizing images
* Building the Jekyll site
* Watching for changes and reloading the site using Browser-Sync
* Converting the Sass to CSS
* Adding prefixes to the CSS
* Minifying the CSS and JS

To learn more about Gulp and it's role in the build process, check out the [documentation](https://github.com/gulpjs/gulp/blob/master/docs/API.md).

### Animation

This site uses an animation library called [AOS](http://michalsnik.github.io/aos/) to add animation on scroll. Animations are added in the HTML with the `data-aos` attributes.
