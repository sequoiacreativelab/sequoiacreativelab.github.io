# Sequoia Creative Lab
Welcome to the website of the Sequoia Creative Lab

## Dev environment setup
You can skip this setup if you already have Xcode, Homebrew, rbenv, and Node installed on your machine.

### Install Xcode
```$ xcode-select --install```

### Install Homebrew
We'll use Homebrew to help us install some packages

```$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```

### Install rbenv
Use Homebrew to install a separate Ruby to avoid conflicts with the system ruby. You can skip this step if you are already using a separate ruby.

```$ brew install rbenv```

### Install latest version of ruby
```$ rbenv install 2.4.0```

### Update bash profile
You'll need to update your bash profile to save changes that you make with rbenv.

```$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile```

```$ echo eval '"$(rbenv init -)"' >> ~/.bash_profile```

### Set latest version of Ruby globally
```$ rbenv global 2.4.0```

### Check that Ruby changed
```$ which ruby```

You should see `/Users/YOURNAME/.rbenv/shims/ruby`

### Install bundler
```$ gem install bundler```

### Install node
```$ brew install node```

## Website setup
Tk tk tk tk

### Clone github repo
```$ git clone git@github.com:julesforrest/scl.git```

### Navigate to the SCL repo
```$ cd scl```

### Install Jekyll
```$ gem install jekyll bundler```

### Install gulp
```$ npm install gulp-cli -g```

```$ npm install gulp -D```

### Install dev dependencies
```$ npm install```

### Run Jekyll
```$ bundle exec jekyll serve```

### Run gulp
While Jekyll is running, open a new tab in your terminal and run the following command:

```$ gulp```

This should open a new browser window running at `localhost:3000`. Making changes to the site should be reflected automatically in this window thanks to BrowserSync.
