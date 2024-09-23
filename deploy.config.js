/**
 * create by hanzhendong on 2024/09/23.
 */
module.exports = () =>
  Object.freeze({
    PRIVATE_KEY: "C:/Users/hzd/.ssh/id_rsa", // 密钥地址
    SERVER: [
      {
        NAME: "hzd-101",
        SERVER_PATH: "192.168.1.101",
        SSH_USER: "root", // 服务器用户名
        SSH_KEY: ``, // 服务器密码
        PORT: 22, // 端口 默认为22
        DIST: "./dist", // 需要部署的打包过后的文件夹 根据项目不同值不同 一般为 build static 或者dist
        SCRIPT: "npm run build", // 打包命令 可能项目由不同的构建命令 如打包指定环境的代码
        PATH: "/home/workspace/front-end", // 服务器存放静态文件目录
      },
      {
        NAME: "hzd-102",
        SERVER_PATH: "192.168.1.102",
        SSH_USER: "root", // 服务器用户名
        SSH_KEY: ``, // 服务器密码
        PORT: 22, // 端口 默认为22
        DIST: "./dist", // 需要部署的打包过后的文件夹 根据项目不同值不同 一般为 build static 或者dist
        SCRIPT: "npm run build", // 打包命令 可能项目由不同的构建命令 如打包指定环境的代码
        PATH: "/home/workspace/front-end", // 服务器存放静态文件目录
      },
    ],
    // 钉钉机器人配置
    DingDing: {
      /**
       * 钉钉名称
       */
      name: projectName,
      /**
       * 机器人推送地址
       */
      hook: "",
      /**
       * 秘钥
       */
      secret: "",
    },
  });
