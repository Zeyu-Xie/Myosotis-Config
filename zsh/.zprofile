eval "$(/opt/homebrew/bin/brew shellenv)"

# alias
alias python=python3
alias PYTHON=python3
alias pip=pip3

# path: Ruby
PATH="$PATH:/opt/homebrew/Cellar/ruby/3.2.2_1/bin"
# path: JetBrains
PATH="$PATH:/Users/xiezeyu/Library/Application Support/JetBrains/Toolbox/scripts"
# path: Python 2.7
PATH="$PATH:/Library/Frameworks/Python.framework/Versions/2.7/bin"
# path: Ruby@3.1 (Cover the default ruby)
PATH="/opt/homebrew/opt/ruby@3.1/bin:$PATH"
# export path
export PATH