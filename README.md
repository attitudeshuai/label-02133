# 广州知运信息技术有限公司官网

## 1. How to Run

### 方式一：Docker Compose（推荐）

```bash
# 构建并启动
docker-compose up --build -d

# 访问地址
http://localhost:8081
```

### 方式二：本地开发

```bash
# 进入前端目录
cd frontend-user

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 2. 工程化配置

### 2.1 单元测试与覆盖率统计（Vitest + Vue Test Utils）

#### 依赖安装
```bash
npm install -D vitest@1.6.0 @vue/test-utils @vitest/coverage-v8@1.6.0 happy-dom@14.12.3
```

#### 配置文件
- `vitest.config.js` - Vitest 配置文件
  - 使用 `happy-dom` 作为测试环境
  - 配置 `@` 路径别名
  - 启用覆盖率统计（v8 提供器）
  - 覆盖率报告格式：text、json、html

#### 测试命令
```bash
# 启动 watch 模式进行测试开发
npm run test

# 执行单次测试运行
npm run test:run

# 执行测试并生成覆盖率报告
npm run test:coverage
```

#### 测试目录结构
```
tests/
└── components/
    ├── SectionTitle.test.js    # 区块标题组件测试
    └── FeatureCard.test.js     # 特性卡片组件测试
```

### 2.2 代码规范与格式化（ESLint + Prettier）

#### 依赖安装
```bash
npm install -D eslint@8.57.0 eslint-plugin-vue@9.24.0 prettier eslint-config-prettier eslint-plugin-prettier
```

#### 配置文件
- `.eslintrc.cjs` - ESLint 配置文件
  - 继承 `eslint:recommended` 和 `plugin:vue/vue3-recommended`
  - 集成 Prettier 规则
  - 自定义规则配置
- `.prettierrc` - Prettier 格式化规则
- `.prettierignore` - 格式化忽略文件

#### 代码规范命令
```bash
# 执行代码规范检查
npm run lint

# 自动修复可修复的规范问题
npm run lint:fix

# 自动格式化所有 src 目录下的文件
npm run format
```

## 3. NPM Scripts 汇总

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览构建结果 |
| `npm run test` | 启动 Vitest (watch 模式) |
| `npm run test:run` | 执行单次单元测试 |
| `npm run test:coverage` | 执行测试并生成覆盖率报告 |
| `npm run lint` | ESLint 代码检查 |
| `npm run lint:fix` | ESLint 自动修复 |
| `npm run format` | Prettier 代码格式化 |

## 4. Services

| 服务 | 端口 | 说明 |
|------|------|------|
| 官网前端 | 8081 | Vue 3 静态页面 |

## 5. 测试账号

本项目为纯静态官网，无需登录账号。

## 6. 题目内容

> 在此空文件夹帮我创建一个Vue项目，它是我公司的官网，静态页面来的，公司名称是广州知运信息技术有限公司，首页的内容先帮我随意填充，公司目前经营的内容是智慧物流的系统

## 7. 项目结构

```
├── docs/                          # 项目文档
│   └── project_design.md          # 设计文档
├── frontend-user/                 # 前端项目
│   ├── public/                    # 静态资源
│   ├── src/
│   │   ├── assets/               # 资源文件
│   │   │   └── styles/           # 样式文件
│   │   ├── components/           # 公共组件
│   │   │   ├── NavHeader.vue     # 导航栏
│   │   │   ├── FooterSection.vue # 页脚
│   │   │   ├── HeroBanner.vue    # 首页横幅
│   │   │   ├── FeatureCard.vue   # 特性卡片
│   │   │   ├── ProductCard.vue   # 产品卡片
│   │   │   ├── CaseCard.vue      # 案例卡片
│   │   │   └── SectionTitle.vue  # 区块标题
│   │   ├── router/               # 路由配置
│   │   │   └── index.js
│   │   ├── views/                # 页面视图
│   │   │   ├── HomeView.vue      # 首页
│   │   │   ├── AboutView.vue     # 关于我们
│   │   │   ├── ProductView.vue   # 产品服务
│   │   │   ├── CaseView.vue      # 案例展示
│   │   │   └── ContactView.vue   # 联系我们
│   │   ├── App.vue               # 根组件
│   │   └── main.js               # 入口文件
│   ├── tests/                    # 测试目录
│   │   └── components/           # 组件测试
│   │       ├── SectionTitle.test.js
│   │       └── FeatureCard.test.js
│   ├── Dockerfile                # Docker构建文件
│   ├── nginx.conf                # Nginx配置
│   ├── package.json              # 依赖配置
│   ├── vite.config.js            # Vite配置
│   ├── vitest.config.js          # Vitest测试配置
│   ├── .eslintrc.cjs             # ESLint配置
│   ├── .prettierrc               # Prettier配置
│   ├── .prettierignore           # Prettier忽略文件
│   └── .gitignore                # Git忽略配置
├── docker-compose.yml            # Docker编排
├── .gitignore                    # Git忽略配置
└── README.md                     # 项目说明
```

## 8. 功能清单

### 页面功能

| 页面 | 功能点 |
|------|--------|
| 首页 | Hero横幅、公司简介、核心优势、产品亮点、合作伙伴 |
| 关于我们 | 公司介绍、发展历程、企业文化、团队风采 |
| 产品服务 | 智慧物流系统介绍、功能模块、技术优势 |
| 案例展示 | 成功案例列表、案例详情 |
| 联系我们 | 联系方式、公司地址、在线留言表单 |

### 技术特性

- ✅ Vue 3 Composition API
- ✅ Vue Router 路由管理
- ✅ Element Plus UI组件库
- ✅ SCSS 样式预处理
- ✅ 响应式布局适配
- ✅ Docker 容器化部署
- ✅ Vitest 单元测试与覆盖率统计
- ✅ ESLint + Prettier 代码规范检查与格式化
