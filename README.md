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
Right now, that's `2.4.0`.

```$ rbenv install 2.4.0```

### Update bash profile
You'll need to update your bash profile to save changes that you make with rbenv.

```$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile```

```$ echo eval '"$(rbenv init -)"' >> ~/.bash_profile```

### Set latest version of Ruby globally
This will tell your machine to use the Ruby we just installed in every directory.

```$ rbenv global 2.4.0```

### Check that Ruby changed
```$ which ruby```

You should see `/Users/YOURNAME/.rbenv/shims/ruby`. If you get `/usr/bin/ruby`, try troubleshooting with [these instructions](http://stackoverflow.com/a/12150580).

### Install bundler
Install bundler, a gem manager for Ruby. Installing bundler will let you use Jekyll, the static site generator that the SCL site runs on. 

```$ gem install bundler```

### Install node
Install node using Homebrew. Installing node will let you use npm, a package manager for JavaScript. 

```$ brew install node```

## Website setup
Tk tk tk tk

### Clone github repo
Clone the Github repo to your machine locally. If you get an SSH error, try following [these instructions](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).

```$ git clone git@github.com:julesforrest/scl.git```

### Navigate to the SCL repo
```$ cd scl```

### Install Jekyll
[Jekyll](https://jekyllrb.com/) is the static site generator that the SCL site runs on. 

```$ gem install jekyll bundler```

### Install gulp

[Gulp](https://gulpjs.com/) is a JavaScript task runner that automates tasks in the SCL development workflow. The SCL site uses gulp to do things like bundle and minify libraries and stylesheets, refresh the browser after changes using [BrowserSync](https://browsersync.io/) and optimize images.

```$ npm install gulp-cli -g```

```$ npm install gulp -D```

### Install dev dependencies
Install all of the packages that the SCL site specified for its gulp tasks.

```$ npm install```

### Run Jekyll
Run the Jekyll, starting the local server. 

```$ bundle exec jekyll serve```

### Run gulp
While Jekyll is running, open a new tab in your terminal and run gulp.

```$ gulp```

This should open a new browser window running at `localhost:3000`.
