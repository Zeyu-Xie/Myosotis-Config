# NeoVim 配置方法

1. 安装 NeoVim：```brew install neovim```
2. 创建配置文件夹 ~/.config/nvim/autoload
3. 下载 vim-plug 插件管理器（只有一个 plug.vim）
4. 将 plug.vim 移动到 ~/.config/nvim/autoload 文件夹下
5. 将本仓库 NeoVim 文件夹下的所有文件拷贝到 ~/.config/nvim 文件夹下
6. 重启终端，进入 NeoVim：```nvim```
7. 读取配置文件：```:source ~/.config/nvim/init.lua```（这一步也有可能是要放在下一步之后）
8. 安装插件：```:PlugInstall```
9. 重启终端，进入 NeoVim，配置完成