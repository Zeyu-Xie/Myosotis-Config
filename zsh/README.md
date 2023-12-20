# ZSH 配置方法

1. 安装 Homebrew
2. 安装 oh-my-zsh：```sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"```
3. 安装 zsh-autosuggestions：
   1. 执行命令 ```git clone https://github.com/zsh-users/zsh-autosuggestions.git```
   2. 将克隆下来的 zsh-autosuggestions 文件夹移动到 ~/.oh-my-zsh/plugins 文件夹中
4. 安装 zsh-syntax-highlighting：
   1. 执行命令 ```git clone https://github.com/zsh-users/zsh-syntax-highlighting.git```
   2. 将克隆下来的 zsh-syntax-highlighting 文件夹移动到 ~/.oh-my-zsh/plugins 文件夹中
5. 将 ~/.zshrc 替换为新的 .zshrc 文件
6. 去除 zsh-syntax-highlighting 软件包警告：
   1. 重启终端
   2. 执行命令 ```compaudit | xargs chmod g-w```
7. 重启终端，配置完成