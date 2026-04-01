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

### 2.1 单元测试与覆盖率统计

本项目采用 **Vitest + Vue Test Utils** 作为测试框架，支持单元测试和覆盖率统计。

#### 测试命令

```bash
# 启动监听模式的测试
npm run test

# 运行所有测试
npm run test:run

# 运行测试并生成覆盖率报告
npm run test:coverage
```

#### 覆盖率说明

- 覆盖率报告生成在 `coverage/` 目录下
- 支持 text、json、html 三种格式的报告
- 默认排除路由、样式文件等非业务逻辑代码
- 测试文件遵循 `*.test.js` 或 `*.spec.js` 命名规范

#### 测试配置

测试配置位于 `vite.config.js` 的 `test` 字段：
- 测试环境：jsdom（模拟浏览器环境）
- 全局API：启用 Vitest 全局 API
- 覆盖率提供者：v8

### 2.2 代码规范与格式化

本项目采用 **ESLint + Prettier** 进行代码规范检查和格式化。

#### 代码检查与格式化命令

```bash
# 代码规范检查
npm run lint

# 自动修复可修复的规范问题
npm run lint:fix

# 代码格式化
npm run format
```

#### 配置说明

**ESLint 配置**（.eslintrc.cjs）：
- 继承 ESLint 推荐规则
- 继承 Vue 3 推荐规则
- 集成 Prettier 规则（避免冲突）
- 支持 .vue 单文件组件解析
- 生产环境禁用 console 和 debugger

**Prettier 配置**（.prettierrc）：
- 单引号，不使用尾逗号
- 缩进 2 空格，行宽 100 字符
- 统一换行符为 LF

## 3. Services

| 服务 | 端口 | 说明 |
|------|------|------|
| 官网前端 | 8081 | Vue 3 静态页面 |

## 4. 测试账号

本项目为纯静态官网，无需登录账号。

## 5. 题目内容

> 在此空文件夹帮我创建一个Vue项目，它是我公司的官网，静态页面来的，公司名称是广州知运信息技术有限公司，首页的内容先帮我随意填充，公司目前经营的内容是智慧物流的系统

## 6. 项目结构

```
├── docs/                          # 项目文档
│   └── project_design.md          # 设计文档
├── frontend-user/                 # 前端项目
│   ├── public/                    # 静态资源
│   ├── src/
│   │   ├── assets/               # 资源文件
│   │   │   └── styles/           # 样式文件
│   │   ├── components/           # 公共组件
│   │   │   ├── __tests__/        # 组件单元测试
│   │   │   │   └── SectionTitle.test.js
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
│   ├── .eslintrc.cjs             # ESLint 配置
│   ├── .eslintignore             # ESLint 忽略文件
│   ├── .prettierrc               # Prettier 配置
│   ├── .prettierignore           # Prettier 忽略文件
│   ├── Dockerfile                # Docker构建文件
│   ├── nginx.conf                # Nginx配置
│   ├── package.json              # 依赖配置
│   └── vite.config.js            # Vite配置（含Vitest配置）
├── docker-compose.yml            # Docker编排
├── .gitignore                    # Git忽略配置
└── README.md                     # 项目说明
```

## 7. 功能清单

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
- ✅ Vitest + Vue Test Utils 单元测试
- ✅ 测试覆盖率统计
- ✅ ESLint 代码规范检查
- ✅ Prettier 代码自动化格式化
