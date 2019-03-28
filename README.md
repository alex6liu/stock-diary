# stock dairy

> An electron-vue sqlite3 project

#### Build Setup

``` bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 本地打包（安装程序）
npm run build

# 本地打包（直接目录）
npm run build:dir

```

---

#### 项目

在[easy-invoices](https://github.com/CaanDoll/easy-invoices)的基础上进行修改
[参考](https://miss-me.github.io/2018/12/04/react-electron-ant-design-sqlite3%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E6%A1%8C%E9%9D%A2%E5%BA%94%E7%94%A8/)
#### 目的

记录下每一笔交易， 并计算出年化收益， 看看能不能跑赢理财和货币基金。

#### 公式
年收益率=[（投资内收益 / 本金）/ 投资天数] * 365 ×100%

或

年收益率=[（（总值 - 本金） / 本金）/ 投资天数] * 365 ×100%

#### api
- 基金api https://blog.csdn.net/weizhixiang/article/details/51445054

- 解决跨域 https://segmentfault.com/a/1190000012030202

- 数据解析 axios不支持jsonp， 所以改用jquery