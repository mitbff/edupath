let scenarioConfigs = {
  math: {
    id: "math",
    title: "高一数学 · 导数单元",
    shortTitle: "数学导数",
    unit: "导数单元",
    subject: "数学",
    studentName: "林一然",
    avatar: "林",
    description: "用函数、极限、导数定义、单调性和极值应用构成知识链，适合展示知识追踪和导数应用诊断。",
    nodes: [
      { id: "function", name: "函数基础", mastery: 84, note: "前置概念稳定，是后续导数学习的基础。" },
      { id: "limit", name: "极限思想", mastery: 72, note: "能理解逼近思想，但符号表达不够熟练。" },
      { id: "definition", name: "导数定义", mastery: 58, note: "定义式与几何意义之间连接偏弱。" },
      { id: "monotonic", name: "单调性", mastery: 63, note: "会使用判定规则，但步骤稳定性一般。" },
      { id: "extreme", name: "极值应用", mastery: 48, note: "容易混淆驻点、极值点和最值点。" },
      { id: "application", name: "导数应用", mastery: 42, note: "综合题建模和方法选择困难。" },
    ],
    links: [
      ["function", "limit"],
      ["limit", "definition"],
      ["definition", "monotonic"],
      ["monotonic", "extreme"],
      ["extreme", "application"],
      ["definition", "application"],
    ],
    questions: [
      {
        id: "q1",
        knowledge: "function",
        difficulty: 0.35,
        answer: "C",
        errorTag: "概念不清",
        stem: "已知函数 y = 2x + 1，下列说法正确的是？",
        options: [
          { key: "A", text: "函数图像经过原点", reason: "忽略了一次函数截距。" },
          { key: "B", text: "函数随 x 增大而减小", reason: "没有根据斜率判断单调性。" },
          { key: "C", text: "函数随 x 增大而增大", reason: "" },
          { key: "D", text: "函数没有斜率", reason: "混淆了曲线和直线的斜率概念。" },
        ],
      },
      {
        id: "q2",
        knowledge: "limit",
        difficulty: 0.52,
        answer: "B",
        errorTag: "审题偏差",
        stem: "当 x 趋近于 0 时，sin x / x 的极限是？",
        options: [
          { key: "A", text: "0", reason: "只看到了分子趋近于 0，忽略了整体极限。" },
          { key: "B", text: "1", reason: "" },
          { key: "C", text: "不存在", reason: "把函数值不存在和极限不存在混在一起。" },
          { key: "D", text: "无穷大", reason: "对分母趋近于 0 的情形判断过度。" },
        ],
      },
      {
        id: "q3",
        knowledge: "definition",
        difficulty: 0.66,
        answer: "A",
        errorTag: "公式误用",
        stem: "函数 f(x) 在 x0 处导数的定义，最关键的是哪个式子？",
        options: [
          { key: "A", text: "增量比值在 h 趋近于 0 时的极限", reason: "" },
          { key: "B", text: "函数值 f(x0) 本身", reason: "把函数值和变化率混淆了。" },
          { key: "C", text: "任意两点的平均变化率", reason: "没有体现局部极限过程。" },
          { key: "D", text: "二阶导数的符号", reason: "把导数定义和凹凸性判断混在一起。" },
        ],
      },
      {
        id: "q4",
        knowledge: "definition",
        difficulty: 0.7,
        answer: "D",
        errorTag: "概念不清",
        stem: "导数的几何意义通常表示为？",
        options: [
          { key: "A", text: "函数图像与 x 轴的交点", reason: "把零点和导数意义混淆。" },
          { key: "B", text: "函数图像围成的面积", reason: "把导数和积分意义混淆。" },
          { key: "C", text: "函数最大值", reason: "把导数工具和目标结论混淆。" },
          { key: "D", text: "曲线在某点切线的斜率", reason: "" },
        ],
      },
      {
        id: "q5",
        knowledge: "monotonic",
        difficulty: 0.62,
        answer: "B",
        errorTag: "公式误用",
        stem: "若在某区间内 f'(x) 始终大于 0，则 f(x) 在该区间内通常是？",
        options: [
          { key: "A", text: "递减", reason: "导数符号和单调性关系记反。" },
          { key: "B", text: "递增", reason: "" },
          { key: "C", text: "先增后减", reason: "把局部变化和整体符号条件混淆。" },
          { key: "D", text: "无法判断", reason: "忽略了区间内导数始终为正的条件。" },
        ],
      },
      {
        id: "q6",
        knowledge: "extreme",
        difficulty: 0.76,
        answer: "C",
        errorTag: "方法选择不当",
        stem: "求函数极值的一般步骤，最合理的是？",
        options: [
          { key: "A", text: "直接代入端点即可", reason: "把闭区间最值和极值问题混淆。" },
          { key: "B", text: "只看函数图像是否好看", reason: "缺少可验证的数学步骤。" },
          { key: "C", text: "求导、找驻点、判断导数符号变化", reason: "" },
          { key: "D", text: "只要求出二阶导数即可", reason: "方法过度简化，忽略一阶导数变化。" },
        ],
      },
      {
        id: "q7",
        knowledge: "application",
        difficulty: 0.86,
        answer: "A",
        errorTag: "审题偏差",
        stem: "用导数解决实际最优化问题时，第一步通常应该是？",
        options: [
          { key: "A", text: "根据题意建立目标函数和约束关系", reason: "" },
          { key: "B", text: "直接令导数等于 0", reason: "跳过了建模步骤，容易列错函数。" },
          { key: "C", text: "先猜一个答案", reason: "缺少可解释推理过程。" },
          { key: "D", text: "只计算端点值", reason: "没有分析内部可能的最优点。" },
        ],
      },
      {
        id: "q8",
        knowledge: "application",
        difficulty: 0.9,
        answer: "D",
        errorTag: "计算失误",
        stem: "某题中已经得到收益函数 R(x)，接下来为了寻找最大收益，最合适的操作是？",
        options: [
          { key: "A", text: "删除约束条件", reason: "实际问题必须保留定义域和约束。" },
          { key: "B", text: "只比较两个随机数值", reason: "样本点不能替代完整分析。" },
          { key: "C", text: "把函数值全部看作相等", reason: "忽略了函数变化。" },
          { key: "D", text: "求导并结合定义域比较候选点", reason: "" },
        ],
      },
    ],
    resourceBank: {
      function: ["一次函数斜率微课", "函数图像读图例题", "基础概念快测", "错题复盘：斜率与截距"],
      limit: ["极限思想 8 分钟微课", "sin x / x 经典例题", "极限基础 5 题", "错题复盘：函数值与极限"],
      definition: ["导数定义微课", "定义式求导基础题", "切线斜率例题", "错题复盘：平均变化率到瞬时变化率"],
      monotonic: ["导数与单调性微课", "导数符号判定练习", "单调区间例题", "错题复盘：符号表"],
      extreme: ["极值判定微课", "驻点与极值点辨析", "极值基础练习", "错题复盘：端点与驻点"],
      application: ["导数应用建模微课", "利润最大化例题", "综合应用分层题", "错题复盘：目标函数与约束"],
    },
    practiceBank: {
      function: ["判断 y = -3x + 2 的单调性并说明理由。", "根据一次函数图像写出斜率和截距含义。", "比较 y = 2x + 1 与 y = -x + 4 的变化趋势。"],
      limit: ["区分函数值不存在和极限不存在，并举例说明。", "用图像语言解释 sin x / x 的极限。", "完成 3 道基础极限判断题。"],
      definition: ["用导数定义写出 f(x)=x² 在 x=1 处的导数过程。", "解释平均变化率如何过渡到瞬时变化率。", "用割线到切线说明 h 趋近于 0 的意义。"],
      monotonic: ["根据 f'(x) 符号表写出单调区间。", "判断 f'(x)>0 与 f'(x)<0 对应的变化趋势。", "完成导数符号与单调性匹配题。"],
      extreme: ["求一个三次函数的驻点并判断极值类型。", "比较驻点、极值点、最值点的区别。", "根据导数符号变化完成极值判断表。"],
      application: ["把文字条件转化为目标函数和定义域。", "完成一道利润最大化问题全过程。", "重做一道导数应用错题并标注每一步依据。"],
    },
    classStudents: [
      { name: "周明澈", score: 76, weak: "导数应用", layer: "提升组", risk: "中关注" },
      { name: "许安宁", score: 89, weak: "综合建模", layer: "冲刺组", risk: "低关注" },
      { name: "陈星野", score: 54, weak: "导数定义、单调性", layer: "基础组", risk: "高关注" },
      { name: "李若川", score: 70, weak: "极值应用", layer: "提升组", risk: "中关注" },
    ],
  },
  english: {
    id: "english",
    title: "高中英语 · 阅读理解",
    shortTitle: "英语阅读",
    unit: "阅读理解",
    subject: "英语",
    studentName: "陈知语",
    avatar: "陈",
    description: "将词汇识别、语境推断、长难句分析、信息定位和主旨概括串成阅读能力图谱。",
    nodes: [
      { id: "vocab", name: "词汇识别", mastery: 76, note: "核心词汇基本掌握，但派生词识别不稳定。" },
      { id: "context", name: "语境推断", mastery: 55, note: "能看懂局部句意，但不会利用上下文线索。" },
      { id: "syntax", name: "长难句分析", mastery: 50, note: "从句、插入语和指代关系处理偏慢。" },
      { id: "locating", name: "信息定位", mastery: 68, note: "能找到原文位置，但容易忽略限定词。" },
      { id: "mainidea", name: "主旨概括", mastery: 46, note: "容易被细节选项干扰，概括能力不足。" },
    ],
    links: [
      ["vocab", "context"],
      ["context", "syntax"],
      ["syntax", "locating"],
      ["locating", "mainidea"],
      ["context", "mainidea"],
    ],
    questions: [
      {
        id: "q1",
        knowledge: "vocab",
        difficulty: 0.45,
        answer: "B",
        errorTag: "概念不清",
        stem: "The word 'significant' in a passage is closest in meaning to:",
        options: [
          { key: "A", text: "tiny", reason: "把反义词当成近义词。" },
          { key: "B", text: "important", reason: "" },
          { key: "C", text: "usual", reason: "只根据熟悉程度猜测，没有看词义。" },
          { key: "D", text: "silent", reason: "混淆形近词。" },
        ],
      },
      {
        id: "q2",
        knowledge: "context",
        difficulty: 0.62,
        answer: "C",
        errorTag: "审题偏差",
        stem: "When the author says 'this result was unexpected', what should you check first?",
        options: [
          { key: "A", text: "The title only", reason: "只看标题，忽略上下文证据。" },
          { key: "B", text: "The last paragraph only", reason: "范围过窄。" },
          { key: "C", text: "The previous cause and comparison", reason: "" },
          { key: "D", text: "A random sentence", reason: "缺少定位策略。" },
        ],
      },
      {
        id: "q3",
        knowledge: "syntax",
        difficulty: 0.72,
        answer: "A",
        errorTag: "方法选择不当",
        stem: "分析长难句时，最有效的第一步通常是？",
        options: [
          { key: "A", text: "找主干谓语和核心主语", reason: "" },
          { key: "B", text: "逐词翻译所有修饰语", reason: "先抓细节会丢失句子主干。" },
          { key: "C", text: "直接猜选项", reason: "缺少语法依据。" },
          { key: "D", text: "只看标点", reason: "标点不能替代句法分析。" },
        ],
      },
      {
        id: "q4",
        knowledge: "locating",
        difficulty: 0.58,
        answer: "D",
        errorTag: "审题偏差",
        stem: "细节题中出现 'except' 时，最需要注意什么？",
        options: [
          { key: "A", text: "只找第一个相似词", reason: "关键词相同不等于信息匹配。" },
          { key: "B", text: "忽略否定词", reason: "except 本身就是反向条件。" },
          { key: "C", text: "不回原文", reason: "细节题需要证据定位。" },
          { key: "D", text: "题目要求选择不符合原文的一项", reason: "" },
        ],
      },
      {
        id: "q5",
        knowledge: "mainidea",
        difficulty: 0.82,
        answer: "C",
        errorTag: "方法选择不当",
        stem: "选择文章主旨时，最应该避免的是？",
        options: [
          { key: "A", text: "关注反复出现的主题", reason: "这是合理策略。" },
          { key: "B", text: "结合首尾段判断", reason: "这是合理策略。" },
          { key: "C", text: "把某个细节当成全文主题", reason: "" },
          { key: "D", text: "排除范围过窄的选项", reason: "这是合理策略。" },
        ],
      },
      {
        id: "q6",
        knowledge: "mainidea",
        difficulty: 0.88,
        answer: "A",
        errorTag: "公式误用",
        stem: "最佳标题题中，正确选项通常应该具有什么特点？",
        options: [
          { key: "A", text: "覆盖全文核心观点，范围适中", reason: "" },
          { key: "B", text: "只复述一个例子", reason: "范围过窄。" },
          { key: "C", text: "包含文章没有提到的信息", reason: "过度推断。" },
          { key: "D", text: "越长越好", reason: "标题长度不是判断标准。" },
        ],
      },
    ],
    resourceBank: {
      vocab: ["高频词义辨析微课", "派生词识别例题", "词汇巩固卡片", "错题复盘：形近词与反义词"],
      context: ["上下文线索微课", "语境推断例题", "代词指代训练", "错题复盘：前后句关系"],
      syntax: ["长难句主干分析微课", "从句识别例题", "句法拆解练习", "错题复盘：修饰语干扰"],
      locating: ["细节定位策略微课", "关键词替换例题", "限定词圈画训练", "错题复盘：except 题"],
      mainidea: ["主旨概括微课", "标题题例题", "段落大意训练", "错题复盘：细节与主题"],
    },
    practiceBank: {
      vocab: ["完成 10 个派生词词义匹配。", "整理 5 组形近词并造句。", "用上下文判断 3 个生词含义。"],
      context: ["标出段落中的转折、因果和指代线索。", "为 3 道推断题写出原文依据。", "练习代词 this/it/they 指代判断。"],
      syntax: ["拆解一个含定语从句的长句。", "圈出句子主谓宾和修饰成分。", "将长难句改写为两个短句。"],
      locating: ["做 4 道细节定位题并标注关键词替换。", "练习 except/not true 反向题。", "比较题干词和原文同义表达。"],
      mainidea: ["为一篇短文写 15 字中文主旨。", "排除 3 个范围过窄的标题选项。", "用首尾段判断文章中心。"],
    },
    classStudents: [
      { name: "沈予安", score: 73, weak: "长难句分析", layer: "提升组", risk: "中关注" },
      { name: "赵清禾", score: 88, weak: "语境推断", layer: "冲刺组", risk: "低关注" },
      { name: "陆星澜", score: 59, weak: "主旨概括、词汇识别", layer: "基础组", risk: "高关注" },
      { name: "孟以宁", score: 80, weak: "信息定位", layer: "提升组", risk: "低关注" },
    ],
  },
  python: {
    id: "python",
    title: "Python 编程 · 入门项目",
    shortTitle: "Python 编程",
    unit: "入门项目",
    subject: "编程",
    studentName: "周序言",
    avatar: "周",
    description: "面向信息技术课，把变量、条件、循环、函数和调试能力组织成可追踪的编程能力图谱。",
    nodes: [
      { id: "variable", name: "变量与类型", mastery: 78, note: "能声明变量，但类型转换容易疏忽。" },
      { id: "branch", name: "条件分支", mastery: 65, note: "知道 if 语句，但边界条件考虑不足。" },
      { id: "loop", name: "循环结构", mastery: 52, note: "循环变量和终止条件不够稳定。" },
      { id: "function", name: "函数封装", mastery: 44, note: "函数参数、返回值理解偏弱。" },
      { id: "debug", name: "调试思维", mastery: 48, note: "遇到报错时缺少定位步骤。" },
      { id: "project", name: "项目应用", mastery: 40, note: "综合任务中难以拆分模块。" },
    ],
    links: [
      ["variable", "branch"],
      ["branch", "loop"],
      ["loop", "function"],
      ["function", "project"],
      ["debug", "project"],
      ["variable", "debug"],
    ],
    questions: [
      {
        id: "q1",
        knowledge: "variable",
        difficulty: 0.4,
        answer: "B",
        errorTag: "概念不清",
        stem: "Python 中 input() 默认返回的数据类型是？",
        options: [
          { key: "A", text: "int", reason: "没有区分输入文本和数值转换。" },
          { key: "B", text: "str", reason: "" },
          { key: "C", text: "float", reason: "把小数类型和输入函数混淆。" },
          { key: "D", text: "bool", reason: "类型判断错误。" },
        ],
      },
      {
        id: "q2",
        knowledge: "branch",
        difficulty: 0.55,
        answer: "A",
        errorTag: "审题偏差",
        stem: "判断成绩是否及格，最直接的条件表达式是？",
        options: [
          { key: "A", text: "score >= 60", reason: "" },
          { key: "B", text: "score = 60", reason: "把赋值和比较混淆。" },
          { key: "C", text: "score < 0", reason: "判断目标偏离题意。" },
          { key: "D", text: "score + 60", reason: "表达式不是布尔判断。" },
        ],
      },
      {
        id: "q3",
        knowledge: "loop",
        difficulty: 0.7,
        answer: "D",
        errorTag: "公式误用",
        stem: "for i in range(3) 会让 i 依次取哪些值？",
        options: [
          { key: "A", text: "1, 2, 3", reason: "误以为 range 从 1 开始。" },
          { key: "B", text: "0, 1, 2, 3", reason: "忽略了右边界不包含。" },
          { key: "C", text: "3", reason: "把 range 参数当成唯一值。" },
          { key: "D", text: "0, 1, 2", reason: "" },
        ],
      },
      {
        id: "q4",
        knowledge: "function",
        difficulty: 0.78,
        answer: "C",
        errorTag: "概念不清",
        stem: "函数中 return 的主要作用是？",
        options: [
          { key: "A", text: "只是在屏幕上打印内容", reason: "混淆了 print 和 return。" },
          { key: "B", text: "删除函数", reason: "语义理解错误。" },
          { key: "C", text: "把结果返回给函数调用处", reason: "" },
          { key: "D", text: "自动创建循环", reason: "把函数和循环混淆。" },
        ],
      },
      {
        id: "q5",
        knowledge: "debug",
        difficulty: 0.68,
        answer: "A",
        errorTag: "方法选择不当",
        stem: "程序报错 TypeError 时，最应该优先检查什么？",
        options: [
          { key: "A", text: "参与运算的变量类型是否匹配", reason: "" },
          { key: "B", text: "电脑是否没电", reason: "不是代码层面的定位。" },
          { key: "C", text: "把所有代码删除", reason: "没有形成调试策略。" },
          { key: "D", text: "只改变量名颜色", reason: "不影响类型错误。" },
        ],
      },
      {
        id: "q6",
        knowledge: "project",
        difficulty: 0.88,
        answer: "B",
        errorTag: "方法选择不当",
        stem: "完成“成绩统计器”项目时，最合理的拆解方式是？",
        options: [
          { key: "A", text: "先写所有代码再猜哪里错", reason: "缺少模块化思路。" },
          { key: "B", text: "输入数据、计算平均分、判断等级、输出结果", reason: "" },
          { key: "C", text: "只写 print('完成')", reason: "没有实现核心功能。" },
          { key: "D", text: "只关注界面颜色", reason: "偏离程序逻辑。" },
        ],
      },
    ],
    resourceBank: {
      variable: ["变量与类型微课", "input 类型转换例题", "类型判断巩固题", "错题复盘：str 与 int"],
      branch: ["if 条件分支微课", "边界条件例题", "条件表达式训练", "错题复盘：赋值与比较"],
      loop: ["range 与循环微课", "循环边界例题", "循环变量练习", "错题复盘：左闭右开"],
      function: ["函数参数与返回值微课", "函数封装例题", "return 练习", "错题复盘：print 与 return"],
      debug: ["调试流程微课", "常见报错例题", "断点与打印训练", "错题复盘：TypeError"],
      project: ["项目拆解微课", "成绩统计器例题", "综合项目分层题", "错题复盘：模块化步骤"],
    },
    practiceBank: {
      variable: ["写一段代码读取年龄并转换为整数。", "解释 str、int、float 的区别。", "修复一个字符串和整数相加的错误。"],
      branch: ["写出判断奇偶数的 if 结构。", "列举成绩等级判断中的边界值。", "修复一个把 = 当成 == 的错误。"],
      loop: ["用 for 循环输出 0 到 4。", "解释 range(1, 5) 的取值范围。", "用循环计算 1 到 100 的和。"],
      function: ["封装一个计算平均分的函数。", "说明 print 和 return 的区别。", "给函数增加参数并返回计算结果。"],
      debug: ["根据 TypeError 报错定位变量类型问题。", "用 print 输出中间变量检查逻辑。", "写出一份三步调试清单。"],
      project: ["把成绩统计器拆成 4 个子任务。", "完成一个输入列表并输出平均分的小程序。", "为项目写一段测试数据。"],
    },
    classStudents: [
      { name: "何远舟", score: 71, weak: "循环结构", layer: "提升组", risk: "中关注" },
      { name: "姜北辰", score: 86, weak: "调试思维", layer: "冲刺组", risk: "低关注" },
      { name: "林澈", score: 58, weak: "函数封装、项目应用", layer: "基础组", risk: "高关注" },
      { name: "宋云起", score: 77, weak: "条件分支", layer: "提升组", risk: "中关注" },
    ],
  },
};

let activeScenarioId = "math";
let dataSource = "前端内置场景数据";
const API_BASE = window.location.protocol === "file:" ? "http://127.0.0.1:8000" : window.location.origin;
let aiEnabled = false;
let aiCapability = {
  configured: false,
  enabled: false,
  provider: "Local rule template",
  model: "rule-template",
  mode: "rule-only",
  detail: "未连接后端，当前使用前端规则模板。",
};

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function getScenario() {
  return scenarioConfigs[activeScenarioId];
}

function createState(scenario) {
  return {
    knowledgeNodes: cloneData(scenario.nodes),
    answers: {},
    result: null,
    quizStartedAt: Date.now(),
    elapsedSeconds: 0,
    practiceVersion: 0,
    backendStatus: "未连接后端，当前使用前端规则引擎。",
  };
}

let state = createState(getScenario());
const chartMap = {};
const navItems = document.querySelectorAll("[data-view]");
const views = document.querySelectorAll(".view-panel");

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getQuestions() {
  return getScenario().questions;
}

function getKnowledge(id) {
  return state.knowledgeNodes.find((node) => node.id === id);
}

function getWeakestNodes(count = 2) {
  return [...state.knowledgeNodes].sort((a, b) => a.mastery - b.mastery).slice(0, count);
}

function getStatusByMastery(mastery) {
  if (mastery < 55) return { name: "薄弱", color: "#c9503f" };
  if (mastery < 75) return { name: "待巩固", color: "#d99a36" };
  return { name: "已掌握", color: "#2d6a57" };
}

function getAiModeLabel() {
  const report = state.result?.aiReport;
  if (report?.mode === "llm") return "大模型增强";
  if (report?.mode === "fallback") return "规则降级";
  return aiEnabled ? "AI 待生成" : "规则模板";
}

function getAiStatusText() {
  const report = state.result?.aiReport;
  if (report?.status) return report.status;
  if (!aiEnabled) return "AI 增强关闭，诊断建议由本地规则模板生成。";
  if (aiCapability.configured) {
    return `AI 增强已开启，后端将调用 ${aiCapability.provider} / ${aiCapability.model}。`;
  }
  return "AI 增强已开启，但后端未配置 API Key；提交后会自动降级为规则模板。";
}

function renderAiToggle() {
  const toggle = document.querySelector("#aiToggle");
  if (toggle) toggle.checked = aiEnabled;
  const mode = document.querySelector("#aiReportMode");
  if (mode) mode.textContent = getAiModeLabel();
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const rest = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function getChart(id) {
  const element = document.getElementById(id);
  if (!window.echarts) {
    if (element) {
      element.innerHTML = '<div class="empty-state">图表库未加载。联网后刷新页面即可显示 ECharts 可视化。</div>';
    }
    return { setOption() {}, resize() {}, clear() {} };
  }
  if (!chartMap[id]) {
    chartMap[id] = echarts.init(element);
  }
  return chartMap[id];
}

function switchView(viewId) {
  views.forEach((view) => view.classList.toggle("active", view.id === viewId));
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewId);
  });
  requestAnimationFrame(() => {
    Object.values(chartMap).forEach((chart) => chart.resize());
  });
}

function renderScenarioControls() {
  const scenarioSelect = document.querySelector("#scenarioSelect");
  scenarioSelect.innerHTML = Object.values(scenarioConfigs)
    .map(
      (scenario) => `
        <option value="${scenario.id}" ${scenario.id === activeScenarioId ? "selected" : ""}>
          ${scenario.shortTitle}
        </option>
      `,
    )
    .join("");

  document.querySelector("#scenarioCards").innerHTML = Object.values(scenarioConfigs)
    .map(
      (scenario) => `
        <button class="scenario-card ${scenario.id === activeScenarioId ? "active" : ""}" data-scenario="${scenario.id}" type="button">
          <span>${scenario.subject} · ${scenario.unit}</span>
          <strong>${scenario.shortTitle}</strong>
          <p>${scenario.description}</p>
        </button>
      `,
    )
    .join("");

  document.querySelectorAll("[data-scenario]").forEach((card) => {
    card.addEventListener("click", () => switchScenario(card.dataset.scenario));
  });
}

function renderScenarioText() {
  const scenario = getScenario();
  document.querySelector("#scenarioName").textContent = scenario.title;
  document.querySelector("#scenarioSubtitle").textContent = `${scenario.title}：完成诊断测验后，系统实时生成错因诊断、知识追踪、个性化练习与教师干预建议。`;
  document.querySelector("#quizTitle").textContent = `${scenario.unit}自适应诊断测验`;
  document.querySelector("#studentName").textContent = scenario.studentName;
  document.querySelector(".avatar").textContent = scenario.avatar;
}

function switchScenario(scenarioId) {
  if (!scenarioConfigs[scenarioId] || scenarioId === activeScenarioId) return;
  activeScenarioId = scenarioId;
  state = createState(getScenario());
  if (dataSource.includes("FastAPI")) {
    state.backendStatus = "已连接 FastAPI 后端，提交诊断会写入 SQLite。";
  }
  document.querySelector("#quizTimer").textContent = "00:00";
  renderScenarioControls();
  renderScenarioText();
  renderAiToggle();
  renderQuiz();
  updateAll();
  switchView("overview");
}

function renderQuiz() {
  const questions = getQuestions();
  const questionList = document.querySelector("#questionList");
  questionList.innerHTML = questions
    .map((question, index) => {
      const knowledge = getKnowledge(question.knowledge);
      return `
        <article class="question-card" data-question="${question.id}">
          <div class="question-top">
            <div>
              <span class="question-index">Q${index + 1}</span>
              <h3>${question.stem}</h3>
            </div>
            <span class="difficulty-pill">难度 ${(question.difficulty * 100).toFixed(0)}</span>
          </div>
          <div class="option-grid">
            ${question.options
              .map(
                (option) => `
                  <label class="option-item">
                    <input type="radio" name="${question.id}" value="${option.key}" />
                    <span>${option.key}. ${option.text}</span>
                  </label>
                `,
              )
              .join("")}
          </div>
          <div class="question-meta">
            <span>知识点：${knowledge.name}</span>
            <span>典型错因：${question.errorTag}</span>
          </div>
        </article>
      `;
    })
    .join("");

  questionList.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", (event) => {
      state.answers[event.target.name] = event.target.value;
      renderProgress();
    });
  });

  renderProgress();
  renderMetadata();
}

function renderProgress() {
  document.querySelector("#quizProgress").innerHTML = getQuestions()
    .map((question) => `<div class="progress-step ${state.answers[question.id] ? "answered" : ""}"></div>`)
    .join("");
}

function renderMetadata() {
  document.querySelector("#metadataList").innerHTML = getQuestions()
    .map((question, index) => {
      const knowledge = getKnowledge(question.knowledge);
      return `
        <article class="metadata-item">
          <strong>Q${index + 1} · ${knowledge.name}</strong>
          <p>难度 ${(question.difficulty * 100).toFixed(0)} · 正确答案 ${question.answer} · 错因标签 ${question.errorTag}</p>
        </article>
      `;
    })
    .join("");
}

function fillDemoAnswers() {
  const demoPattern = ["right", "wrong", "wrong", "right", "wrong", "right", "wrong", "right"];
  state.answers = {};
  getQuestions().forEach((question, index) => {
    const shouldRight = demoPattern[index % demoPattern.length] === "right";
    const answer = shouldRight
      ? question.answer
      : question.options.find((option) => option.key !== question.answer)?.key || question.answer;
    state.answers[question.id] = answer;
    const input = document.querySelector(`input[name="${question.id}"][value="${answer}"]`);
    if (input) input.checked = true;
  });
  renderProgress();
}

function diagnoseAnswers() {
  const questions = getQuestions();
  state.elapsedSeconds = Math.max(45, Math.round((Date.now() - state.quizStartedAt) / 1000));
  const expectedAverageTime =
    questions.reduce((sum, question) => sum + 32 + question.difficulty * 42, 0) / questions.length;
  const averageTime = state.elapsedSeconds / questions.length;
  const stability = clamp(100 - Math.abs(averageTime - expectedAverageTime) * 2, 45, 100);

  const details = questions.map((question) => {
    const selected = state.answers[question.id] || "";
    const correct = selected === question.answer;
    const selectedOption = question.options.find((option) => option.key === selected);
    return {
      question,
      selected: selected || "未作答",
      correct,
      reason: correct ? "作答正确，说明该知识点当前表现稳定。" : selectedOption?.reason || "未作答，需要回到题干条件重新分析。",
      errorTag: correct ? "作答正确" : selected ? question.errorTag : "未作答",
    };
  });

  const byKnowledge = state.knowledgeNodes.map((node) => {
    const related = details.filter((item) => item.question.knowledge === node.id);
    if (!related.length) {
      return { ...node, count: 0, correct: 0, performance: node.mastery, oldMastery: node.mastery };
    }
    const correctCount = related.filter((item) => item.correct).length;
    const accuracy = correctCount / related.length;
    const difficultyScore =
      (related.reduce((sum, item) => sum + item.question.difficulty, 0) / related.length) * 100 * accuracy;
    const performance = accuracy * 50 + difficultyScore * 0.2 + stability * 0.3;
    const updatedMastery = Math.round(node.mastery * 0.7 + performance * 0.3);
    return {
      ...node,
      count: related.length,
      correct: correctCount,
      accuracy,
      performance: Math.round(performance),
      oldMastery: node.mastery,
      mastery: clamp(updatedMastery, 20, 96),
    };
  });

  state.knowledgeNodes = byKnowledge.map((item) => ({
    id: item.id,
    name: item.name,
    mastery: item.mastery,
    note: item.note,
  }));

  const totalCorrect = details.filter((item) => item.correct).length;
  const mistakes = details.filter((item) => !item.correct);
  const errorCounts = mistakes.reduce((acc, item) => {
    acc[item.errorTag] = (acc[item.errorTag] || 0) + 1;
    return acc;
  }, {});
  const weakestNodes = getWeakestNodes(3);
  const accuracy = Math.round((totalCorrect / questions.length) * 100);
  const avgMastery = Math.round(
    state.knowledgeNodes.reduce((sum, node) => sum + node.mastery, 0) / state.knowledgeNodes.length,
  );

  state.result = {
    totalCorrect,
    accuracy,
    stability: Math.round(stability),
    averageTime: Math.round(averageTime),
    elapsedSeconds: state.elapsedSeconds,
    details,
    errorCounts,
    weakestNodes,
    avgMastery,
  };
}

function submitQuiz() {
  diagnoseAnswers();
  updateAll();
  syncBackendDiagnosis();
  switchView("student");
}

async function syncBackendDiagnosis() {
  state.backendStatus = "正在同步 FastAPI 后端...";
  renderTechContent();
  try {
    const response = await fetch(`${API_BASE}/api/diagnosis`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        scenario_id: activeScenarioId,
        student_id: "demo-student",
        elapsed_seconds: state.elapsedSeconds,
        ai_enabled: aiEnabled,
        answers: Object.entries(state.answers).map(([question_id, selected_answer]) => ({
          question_id,
          selected_answer,
        })),
      }),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (state.result && data.ai_report) {
      state.result.aiReport = data.ai_report;
    }
    state.backendStatus = `已同步后端：诊断记录 ${data.diagnosis_id}，正确率 ${data.accuracy}%，AI：${getAiModeLabel()}`;
  } catch (error) {
    state.backendStatus = "后端未启动或网络不可达，已自动降级为前端本地诊断。";
    if (state.result) {
      state.result.aiReport = buildLocalAiReport(
        aiEnabled ? "AI 增强请求失败，已使用前端规则模板兜底。" : "AI 增强关闭，当前使用前端规则模板。",
      );
    }
  }
  updateAll();
  renderTechContent();
}

function getTopError() {
  const counts = state.result?.errorCounts || {};
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return sorted[0]?.[0] || "暂无明显错因";
}

function buildRuleAdvice() {
  const scenario = getScenario();
  if (!state.result) {
    return `完成 ${scenario.unit} 测验后，系统会根据错因标签和薄弱知识点生成个性化学习建议。`;
  }
  const weakest = state.result.weakestNodes[0];
  const topError = getTopError();
  const accuracyText = `${state.result.totalCorrect}/${getQuestions().length}`;
  return `本次 ${scenario.subject} 诊断答对 ${accuracyText} 题，最薄弱知识点是“${weakest.name}”。主要问题集中在“${topError}”：不是简单分数低，而是相关前置知识和任务步骤没有稳定连接。建议先复习“${weakest.name}”对应资源，再完成系统生成的基础练习，最后进入一题综合迁移任务。`;
}

function buildLocalAiReport(status) {
  const scenario = getScenario();
  const weakest = state.result ? state.result.weakestNodes[0] : getWeakestNodes(1)[0];
  const topError = getTopError();
  return {
    enabled: aiEnabled,
    configured: false,
    mode: aiEnabled ? "fallback" : "rule",
    provider: "frontend-rule-template",
    model: "rule-template",
    status,
    advice: buildRuleAdvice(),
    teacher_suggestion: `建议教师围绕“${weakest.name}”做短讲与即时练习，重点处理“${topError}”这一类错误。`,
    practice_prompt: `围绕“${scenario.unit} · ${weakest.name}”生成基础、提升、综合三层练习，并要求学生写出解题依据。`,
  };
}

function generateAdvice() {
  return state.result?.aiReport?.advice || buildRuleAdvice();
}

function buildRecommendations() {
  const scenario = getScenario();
  const weakNodes = state.result ? state.result.weakestNodes : getWeakestNodes(2);
  const items = [];
  weakNodes.forEach((node) => {
    const bank = scenario.resourceBank[node.id] || [];
    items.push({ title: bank[0], type: "微课", target: node.name });
    items.push({ title: bank[1], type: "例题", target: node.name });
    items.push({ title: bank[2], type: "巩固题", target: node.name });
    items.push({ title: bank[3], type: "错题复盘", target: node.name });
  });
  return items.filter((item) => item.title).slice(0, 6);
}

function buildTimeline() {
  const scenario = getScenario();
  const weak = state.result ? state.result.weakestNodes[0] : getWeakestNodes(1)[0];
  const prereq = scenario.links.find((link) => link[1] === weak.id)?.[0];
  const prereqName = prereq ? getKnowledge(prereq)?.name : "前置基础";
  return [
    { step: "DAY 1", title: `复查${prereqName}`, detail: "先补前置节点，避免直接刷综合题造成重复错误。" },
    { step: "DAY 2", title: `重建${weak.name}`, detail: "观看微课并完成 3 道基础题，写出关键规则和适用条件。" },
    { step: "DAY 3", title: "错题复盘", detail: `围绕“${getTopError()}”整理错题，把错误原因写成一句话。` },
    { step: "DAY 4", title: "综合迁移", detail: "完成一题综合应用任务，提交过程解释和自我反思。" },
  ];
}

function buildPractice() {
  const scenario = getScenario();
  const weakNodes = state.result ? state.result.weakestNodes : getWeakestNodes(2);
  const selected = [];
  weakNodes.forEach((node) => {
    const bank = scenario.practiceBank[node.id] || [];
    if (!bank.length) return;
    const offset = state.practiceVersion % bank.length;
    selected.push({ level: "基础", target: node.name, text: bank[offset] });
    selected.push({ level: "提升", target: node.name, text: bank[(offset + 1) % bank.length] });
  });
  selected.push({
    level: "综合",
    target: weakNodes.map((node) => node.name).join(" + "),
    text: `完成一个${scenario.unit}综合任务，写出“识别条件、选择方法、执行步骤、验证结果”四步过程。`,
  });
  return selected.slice(0, 5);
}

function renderStudentContent() {
  const scenario = getScenario();
  const summary = document.querySelector("#studentSummary");
  const advice = document.querySelector("#studentAdvice");
  if (state.result) {
    summary.textContent = `本次测验答对 ${state.result.totalCorrect}/${getQuestions().length} 题，正确率 ${state.result.accuracy}%，总用时 ${formatTime(state.result.elapsedSeconds)}，平均每题 ${state.result.averageTime} 秒。`;
  } else {
    summary.textContent = `尚未提交 ${scenario.unit} 测验。可先进入“智能答题”页面完成诊断。`;
  }
  advice.textContent = generateAdvice();
  advice.title = getAiStatusText();
  renderAiToggle();

  document.querySelector("#recommendList").innerHTML = buildRecommendations()
    .map(
      (item) => `
        <article class="recommend-item">
          <div>
            <strong>${item.title}</strong>
            <span>目标知识点：${item.target}</span>
          </div>
          <b class="tag">${item.type}</b>
        </article>
      `,
    )
    .join("");

  const mistakeList = document.querySelector("#mistakeList");
  if (!state.result) {
    mistakeList.innerHTML = '<div class="empty-state">提交测验后，这里会逐题显示答案、错因和讲解。</div>';
  } else {
    mistakeList.innerHTML = state.result.details
      .map((item, index) => {
        const knowledge = getKnowledge(item.question.knowledge);
        return `
          <article class="mistake-item ${item.correct ? "is-correct" : ""}">
            <strong>Q${index + 1} · ${knowledge.name} · ${item.correct ? "正确" : item.errorTag}</strong>
            <p>你的答案：${item.selected}；正确答案：${item.question.answer}。${item.reason}</p>
          </article>
        `;
      })
      .join("");
  }

  document.querySelector("#studyTimeline").innerHTML = buildTimeline()
    .map(
      (item) => `
        <article>
          <b>${item.step}</b>
          <strong>${item.title}</strong>
          <p>${item.detail}</p>
        </article>
      `,
    )
    .join("");

  renderPractice();
  renderAdvancedDiagnostics();
}

function renderPractice() {
  document.querySelector("#practiceGrid").innerHTML = buildPractice()
    .map(
      (item) => `
        <article class="practice-card">
          <div>
            <span class="tag">${item.level}</span>
            <strong>${item.text}</strong>
          </div>
          <p>针对：${item.target}</p>
        </article>
      `,
    )
    .join("");
}

function buildEvidenceChain() {
  if (!state.result) return null;
  const weakest = state.result.weakestNodes[0];
  const related = state.result.details.filter((item) => item.question.knowledge === weakest.id);
  const wrongRelated = related.filter((item) => !item.correct);
  const prereq = getScenario().links.find((link) => link[1] === weakest.id)?.[0];
  const prereqName = prereq ? getKnowledge(prereq)?.name : "前置节点";
  const confidence = clamp(
    Math.round(52 + wrongRelated.length * 14 + (100 - weakest.mastery) * 0.35 + Object.keys(state.result.errorCounts).length * 4),
    58,
    95,
  );
  return {
    weakest,
    confidence,
    evidence: [
      `该知识点当前掌握度为 ${weakest.mastery}%，低于系统预警线 60%。`,
      `相关题目中错误 ${wrongRelated.length}/${Math.max(related.length, 1)} 道，主要错因是“${getTopError()}”。`,
      `知识图谱显示它依赖“${prereqName}”，因此学习路径会先安排前置复查。`,
    ],
  };
}

function buildAdaptiveNext() {
  const weakest = state.result ? state.result.weakestNodes[0] : getWeakestNodes(1)[0];
  const mastery = weakest.mastery;
  const band =
    mastery < 55
      ? { label: "基础补偿", range: "0.35 - 0.55", target: "先提高正确体验，修复关键概念。" }
      : mastery < 75
        ? { label: "变式巩固", range: "0.55 - 0.75", target: "保持适度挑战，训练迁移能力。" }
        : { label: "综合提升", range: "0.75 - 0.90", target: "进入跨知识点综合任务。" };
  const candidate = (getScenario().practiceBank[weakest.id] || [])[state.practiceVersion % 3] || "完成一题综合迁移任务。";
  return { weakest, band, candidate };
}

function buildResourceRationale() {
  const weakest = state.result ? state.result.weakestNodes[0] : getWeakestNodes(1)[0];
  const topError = getTopError();
  const recommendations = buildRecommendations().filter((item) => item.target === weakest.name).slice(0, 3);
  return {
    weakest,
    topError,
    recommendations,
  };
}

function renderAdvancedDiagnostics() {
  const evidenceBox = document.querySelector("#evidenceChain");
  const adaptiveBox = document.querySelector("#adaptiveNext");
  const rationaleBox = document.querySelector("#resourceRationale");
  if (!evidenceBox || !adaptiveBox || !rationaleBox) return;

  const chain = buildEvidenceChain();
  if (!chain) {
    evidenceBox.innerHTML = `
      <h4>诊断证据链</h4>
      <p>提交测验后，系统会把“错题 → 错因 → 知识节点 → 前置知识”串成可解释链路。</p>
      <div class="empty-state">当前还没有作答数据。</div>
    `;
  } else {
    evidenceBox.innerHTML = `
      <h4>诊断证据链</h4>
      <p>系统判定“${chain.weakest.name}”为优先干预节点。</p>
      <div class="confidence-bar"><i style="width:${chain.confidence}%"></i></div>
      <p>诊断置信度：${chain.confidence}%</p>
      <div class="evidence-list">
        ${chain.evidence.map((item) => `<span>${item}</span>`).join("")}
      </div>
    `;
  }

  const next = buildAdaptiveNext();
  adaptiveBox.innerHTML = `
    <h4>自适应下一题策略</h4>
    <p>目标节点：${next.weakest.name}</p>
    <p>推荐难度带：${next.band.range} · ${next.band.label}</p>
    <div class="evidence-list">
      <span>${next.band.target}</span>
      <span>下一题候选：${next.candidate}</span>
      <span>策略解释：优先选择预期正确率约 60%-75% 的题目，避免过易或过难。</span>
    </div>
  `;

  const rationale = buildResourceRationale();
  rationaleBox.innerHTML = `
    <h4>资源匹配理由</h4>
    <p>匹配依据：薄弱节点“${rationale.weakest.name}” + 高频错因“${rationale.topError}”。</p>
    <div class="evidence-list">
      ${rationale.recommendations
        .map((item) => `<span>${item.type}：${item.title}，用于修复“${item.target}”相关问题。</span>`)
        .join("")}
    </div>
  `;
}

function buildTeacherActions() {
  const weakest = state.result ? state.result.weakestNodes[0] : getWeakestNodes(1)[0];
  const topError = getTopError();
  return [
    {
      title: `重讲“${weakest.name}”的核心步骤`,
      detail: "系统检测到该知识点掌握度最低，建议用一道例题拆成“条件识别、方法选择、步骤执行、结果验证”四段。",
    },
    {
      title: `围绕“${topError}”做 8 分钟即时反馈`,
      detail: "让学生先独立判断错因，再与同伴交换解释，教师最后补充标准解题路径。",
    },
    {
      title: "分层布置作业",
      detail: "基础组补前置知识，提升组做变式训练，冲刺组完成综合任务并写反思。",
    },
  ];
}

function buildAssignments() {
  const weakNodes = state.result ? state.result.weakestNodes : getWeakestNodes(3);
  return [
    {
      layer: "基础组",
      task: `复习“${weakNodes[0].name}”微课，完成 5 道基础题并标注错因。`,
    },
    {
      layer: "提升组",
      task: `围绕“${weakNodes[0].name}”完成 3 道变式题，要求写出每一步依据。`,
    },
    {
      layer: "冲刺组",
      task: `完成“${weakNodes.map((node) => node.name).join(" + ")}”综合任务，提交一段过程反思。`,
    },
  ];
}

function getCurrentStudentRow() {
  const scenario = getScenario();
  const score = state.result?.accuracy ?? Math.round(
    state.knowledgeNodes.reduce((sum, node) => sum + node.mastery, 0) / state.knowledgeNodes.length,
  );
  const weak = getWeakestNodes(2).map((node) => node.name).join("、");
  const layer = score < 65 ? "基础组" : score < 85 ? "提升组" : "冲刺组";
  const risk = score < 65 ? "高关注" : score < 85 ? "中关注" : "低关注";
  return { name: scenario.studentName, score, weak, layer, risk };
}

function renderTeacherContent() {
  const scenario = getScenario();
  document.querySelector("#teacherActions").innerHTML = buildTeacherActions()
    .map(
      (item) => `
        <article>
          <strong>${item.title}</strong>
          <span>${item.detail}</span>
        </article>
      `,
    )
    .join("");

  document.querySelector("#assignmentList").innerHTML = buildAssignments()
    .map(
      (item) => `
        <article class="assignment-item">
          <strong>${item.layer}</strong>
          <p>${item.task}</p>
        </article>
      `,
    )
    .join("");

  const rows = [getCurrentStudentRow(), ...scenario.classStudents];
  document.querySelector("#studentTable").innerHTML = `
    <div class="table-row header">
      <span>学生</span><span>分数</span><span>薄弱知识点</span><span>分层</span><span>风险</span>
    </div>
    ${rows
      .map((student) => {
        const riskClass = student.risk.includes("高")
          ? "risk-high"
          : student.risk.includes("中")
            ? "risk-mid"
            : "risk-low";
        return `
          <div class="table-row">
            <strong>${student.name}</strong>
            <span>${student.score}%</span>
            <span>${student.weak}</span>
            <span>${student.layer}</span>
            <span class="${riskClass}">${student.risk}</span>
          </div>
        `;
      })
      .join("")}
  `;
  renderRiskPredictions(rows);
}

function renderRiskPredictions(rows) {
  const container = document.querySelector("#riskPredictionGrid");
  if (!container) return;
  const enriched = rows
    .map((student) => {
      const weakCount = student.weak.split("、").length;
      const riskScore = clamp(Math.round(100 - student.score + weakCount * 8 + (student.risk.includes("高") ? 12 : 0)), 8, 96);
      const level = riskScore >= 58 ? "high" : riskScore >= 36 ? "medium" : "low";
      const label = level === "high" ? "优先干预" : level === "medium" ? "持续观察" : "自主提升";
      return { ...student, riskScore, level, label };
    })
    .sort((a, b) => b.riskScore - a.riskScore)
    .slice(0, 3);

  container.innerHTML = enriched
    .map(
      (student) => `
        <article class="risk-card ${student.level}">
          <h4>${student.name} · ${student.label}</h4>
          <p>风险指数：${student.riskScore}/100</p>
          <div class="confidence-bar"><i style="width:${student.riskScore}%"></i></div>
          <div class="evidence-list">
            <span>薄弱点：${student.weak}</span>
            <span>当前分层：${student.layer}</span>
            <span>建议动作：${student.level === "high" ? "安排教师一对一讲解与基础补偿任务。" : student.level === "medium" ? "布置变式练习并观察下一次测验变化。" : "提供拓展任务，保持挑战度。"}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderTechContent() {
  const scenario = getScenario();
  const questions = getQuestions();
  const resourceCount = Object.values(scenario.resourceBank).reduce((sum, items) => sum + items.length, 0);
  const practiceCount = Object.values(scenario.practiceBank).reduce((sum, items) => sum + items.length, 0);
  const errorTypes = new Set(questions.map((question) => question.errorTag));
  const answeredCount = Object.keys(state.answers).length;

  document.querySelector("#techScenarioTitle").textContent = `${scenario.title} · 引擎配置`;

  document.querySelector("#techPipeline").innerHTML = [
    {
      title: "1. 读取场景配置",
      detail: `加载 ${scenario.nodes.length} 个知识节点、${scenario.links.length} 条依赖边和 ${questions.length} 道诊断题。`,
    },
    {
      title: "2. 记录作答日志",
      detail: `当前已记录 ${answeredCount}/${questions.length} 道题的作答状态，同时追踪总用时和平均用时。`,
    },
    {
      title: "3. 题目级错因诊断",
      detail: "根据学生选项匹配正确答案、知识点、难度和典型错因标签，生成逐题解释。",
    },
    {
      title: "4. 更新知识掌握度",
      detail: "按正确率、难度系数和答题稳定性计算表现分，再更新知识点掌握度。",
    },
    {
      title: "5. 生成推荐与教师干预",
      detail: "提取最薄弱知识点，生成学习路径、练习任务、错因排行和分层作业；AI 开启时再由大模型润色建议。",
    },
  ]
    .map(
      (item) => `
        <article>
          <strong>${item.title}</strong>
          <p>${item.detail}</p>
        </article>
      `,
    )
    .join("");

  document.querySelector("#techConfigGrid").innerHTML = [
    { label: "知识节点", value: scenario.nodes.length, detail: scenario.nodes.map((node) => node.name).join(" / ") },
    { label: "图谱依赖", value: scenario.links.length, detail: "用于判断前置知识和学习路径顺序" },
    { label: "诊断题目", value: questions.length, detail: "每题包含答案、难度、知识点和错因标签" },
    { label: "错因类型", value: errorTypes.size, detail: [...errorTypes].join(" / ") },
    { label: "推荐资源", value: resourceCount, detail: "微课、例题、巩固题、错题复盘" },
    { label: "练习模板", value: practiceCount, detail: "按薄弱知识点动态抽取生成" },
    { label: "数据来源", value: dataSource.includes("FastAPI") ? "API" : "LOCAL", detail: dataSource },
    { label: "后端同步", value: state.backendStatus.includes("已同步") ? "ON" : "OFF", detail: state.backendStatus },
    { label: "AI 生成层", value: aiEnabled ? "ON" : "OFF", detail: getAiStatusText() },
  ]
    .map(
      (item) => `
        <article>
          <span>${item.label}</span>
          <strong>${item.value}</strong>
          <p>${item.detail}</p>
        </article>
      `,
    )
    .join("");

  document.querySelector("#interfaceList").innerHTML = [
    ["renderAiToggle()", "GET /api/ai/status", "读取大模型配置状态并控制增强开关"],
    ["renderQuiz()", "GET /api/questions", "按场景渲染诊断题"],
    ["diagnoseAnswers()", "POST /api/diagnosis", "生成错因、掌握度更新与可选 AI 报告"],
    ["renderKnowledgeGraph()", "GET /api/knowledge-graph", "输出节点颜色和依赖边"],
    ["buildRecommendations()", "GET /api/recommendations", "按薄弱知识点推荐资源"],
    ["buildPractice()", "POST /api/practice/generate", "生成下一组分层练习"],
    ["renderTeacherContent()", "GET /api/classes/{id}/dashboard", "生成教师看板和分层作业"],
  ]
    .map(
      ([fn, api, detail]) => `
        <article>
          <strong>${fn}</strong>
          <code>${api}</code>
          <span>${detail}</span>
        </article>
      `,
    )
    .join("");
}

function renderMetrics() {
  const avgMastery = Math.round(
    state.knowledgeNodes.reduce((sum, node) => sum + node.mastery, 0) / state.knowledgeNodes.length,
  );
  const weakest = getWeakestNodes(1)[0];
  document.querySelector("#avgMastery").textContent = `${avgMastery}%`;
  document.querySelector("#weakNode").textContent = weakest.name;
  document.querySelector("#accuracyMetric").textContent = state.result ? `${state.result.accuracy}%` : "--";
  document.querySelector("#diagnosisState").textContent = state.result ? "已生成诊断" : "待答题";
}

function renderMasteryChart() {
  const chart = getChart("masteryChart");
  chart.clear();
  chart.setOption({
    color: ["#2d6a57", "#d99a36"],
    grid: { left: 38, right: 18, top: 30, bottom: 34 },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: state.knowledgeNodes.map((node) => node.name),
      axisLabel: { color: "#66706e" },
      axisLine: { lineStyle: { color: "#d9d0bf" } },
    },
    yAxis: {
      type: "value",
      max: 100,
      axisLabel: { color: "#66706e", formatter: "{value}%" },
      splitLine: { lineStyle: { color: "#eadfce" } },
    },
    series: [
      {
        name: "当前掌握度",
        type: "bar",
        barWidth: 26,
        data: state.knowledgeNodes.map((node) => ({
          value: node.mastery,
          itemStyle: { color: getStatusByMastery(node.mastery).color },
        })),
      },
      {
        name: "预警线",
        type: "line",
        data: state.knowledgeNodes.map(() => 60),
        symbol: "none",
        lineStyle: { type: "dashed", color: "#c9503f" },
      },
    ],
  });
}

function buildGraphPositions() {
  const gap = 130;
  return Object.fromEntries(
    state.knowledgeNodes.map((node, index) => [
      node.id,
      [80 + index * gap, index % 2 === 0 ? 170 : 90 + (index % 3) * 35],
    ]),
  );
}

function renderKnowledgeGraph() {
  const scenario = getScenario();
  const chart = getChart("knowledgeGraph");
  const positions = buildGraphPositions();
  chart.clear();
  chart.setOption({
    tooltip: {
      formatter: (params) => {
        if (!params.data || params.data.source) return "";
        return `${params.data.name}<br/>掌握度 ${params.data.value}%<br/>${params.data.note}`;
      },
    },
    series: [
      {
        type: "graph",
        layout: "none",
        roam: false,
        symbolSize: 78,
        label: { show: true, color: "#17201f", fontWeight: 700 },
        edgeSymbol: ["none", "arrow"],
        edgeSymbolSize: [0, 10],
        lineStyle: { color: "#8aa79b", width: 2, curveness: 0.08 },
        data: state.knowledgeNodes.map((node) => {
          const [x, y] = positions[node.id];
          const status = getStatusByMastery(node.mastery);
          return {
            id: node.id,
            name: node.name,
            value: node.mastery,
            note: node.note,
            x,
            y,
            itemStyle: { color: status.color, borderColor: "#19362f", borderWidth: 2 },
          };
        }),
        links: scenario.links.map(([source, target]) => ({ source, target })),
      },
    ],
  });
}

function renderRadarChart() {
  const chart = getChart("radarChart");
  const classAverage = state.knowledgeNodes.map((node, index) => clamp(node.mastery + (index % 2 === 0 ? 8 : 3), 45, 92));
  chart.clear();
  chart.setOption({
    color: ["#2d6a57", "#315f8f"],
    tooltip: {},
    radar: {
      radius: "68%",
      indicator: state.knowledgeNodes.map((node) => ({ name: node.name, max: 100 })),
      axisName: { color: "#48524f" },
      splitLine: { lineStyle: { color: "#d9d0bf" } },
      splitArea: { areaStyle: { color: ["rgba(45,106,87,0.04)", "rgba(217,154,54,0.06)"] } },
      axisLine: { lineStyle: { color: "#d9d0bf" } },
    },
    series: [
      {
        type: "radar",
        data: [
          {
            name: getScenario().studentName,
            value: state.knowledgeNodes.map((node) => node.mastery),
            areaStyle: { opacity: 0.18 },
          },
          {
            name: "班级均值",
            value: classAverage,
            areaStyle: { opacity: 0.1 },
          },
        ],
      },
    ],
  });
}

function renderHeatChart() {
  const chart = getChart("heatChart");
  const groups = ["基础组", "提升组", "冲刺组"];
  const nodes = state.knowledgeNodes.map((node) => node.name);
  const currentWeakBoost = state.result ? -8 : 0;
  const heatData = state.knowledgeNodes.flatMap((node, xIndex) => [
    [xIndex, 0, clamp(node.mastery - 12 + currentWeakBoost, 25, 95)],
    [xIndex, 1, clamp(node.mastery + 3, 25, 95)],
    [xIndex, 2, clamp(node.mastery + 16, 25, 95)],
  ]);

  chart.clear();
  chart.setOption({
    tooltip: {
      position: "top",
      formatter: (params) => `${groups[params.value[1]]} · ${nodes[params.value[0]]}<br/>掌握度 ${params.value[2]}%`,
    },
    grid: { left: 70, right: 18, top: 20, bottom: 42 },
    xAxis: {
      type: "category",
      data: nodes,
      axisLabel: { color: "#66706e" },
      axisLine: { lineStyle: { color: "#d9d0bf" } },
    },
    yAxis: {
      type: "category",
      data: groups,
      axisLabel: { color: "#66706e" },
      axisLine: { lineStyle: { color: "#d9d0bf" } },
    },
    visualMap: {
      min: 25,
      max: 95,
      calculable: false,
      orient: "horizontal",
      left: "center",
      bottom: 0,
      inRange: { color: ["#c9503f", "#d99a36", "#2d6a57"] },
      textStyle: { color: "#66706e" },
    },
    series: [{ type: "heatmap", data: heatData, label: { show: true, formatter: ({ value }) => `${value[2]}%` } }],
  });
}

function renderErrorChart() {
  const chart = getChart("errorChart");
  const baseCounts = {
    概念不清: 7,
    公式误用: 8,
    审题偏差: 6,
    计算失误: 5,
    方法选择不当: 6,
  };
  if (state.result) {
    Object.entries(state.result.errorCounts).forEach(([tag, count]) => {
      if (tag !== "未作答") baseCounts[tag] = (baseCounts[tag] || 0) + count;
    });
  }
  const data = Object.entries(baseCounts).sort((a, b) => b[1] - a[1]);
  chart.clear();
  chart.setOption({
    color: ["#c9503f"],
    grid: { left: 92, right: 16, top: 20, bottom: 26 },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "value",
      axisLabel: { color: "#66706e" },
      splitLine: { lineStyle: { color: "#eadfce" } },
    },
    yAxis: {
      type: "category",
      data: data.map(([name]) => name),
      axisLabel: { color: "#66706e" },
      axisLine: { lineStyle: { color: "#d9d0bf" } },
    },
    series: [{ type: "bar", data: data.map(([, value]) => value), barWidth: 22 }],
  });
}

function updateCharts() {
  renderMasteryChart();
  renderKnowledgeGraph();
  renderRadarChart();
  renderHeatChart();
  renderErrorChart();
}

function updateAll() {
  renderMetrics();
  renderStudentContent();
  renderTeacherContent();
  renderTechContent();
  updateCharts();
}

function resetDemo() {
  state = createState(getScenario());
  if (dataSource.includes("FastAPI")) {
    state.backendStatus = "已连接 FastAPI 后端，提交诊断会写入 SQLite。";
  }
  document.querySelectorAll(".question-list input").forEach((input) => {
    input.checked = false;
  });
  document.querySelector("#quizTimer").textContent = "00:00";
  renderAiToggle();
  renderProgress();
  updateAll();
  switchView("overview");
}

function bindEvents() {
  navItems.forEach((item) => {
    item.addEventListener("click", () => switchView(item.dataset.view));
  });
  document.querySelector("#scenarioSelect").addEventListener("change", (event) => switchScenario(event.target.value));
  document.querySelector("#aiToggle").addEventListener("change", (event) => {
    aiEnabled = event.target.checked;
    if (state.result) {
      state.result.aiReport = buildLocalAiReport(
        aiEnabled ? "AI 增强已开启，将在下一次提交诊断时请求后端生成。" : "AI 增强关闭，当前显示本地规则模板。",
      );
    }
    renderAiToggle();
    renderStudentContent();
    renderTechContent();
  });
  document.querySelector("#fillDemoBtn").addEventListener("click", fillDemoAnswers);
  document.querySelector("#submitQuizBtn").addEventListener("click", submitQuiz);
  document.querySelector("#generatePracticeBtn").addEventListener("click", () => {
    state.practiceVersion += 1;
    renderPractice();
  });
  document.querySelector("#resetBtn").addEventListener("click", resetDemo);
  window.addEventListener("resize", () => {
    Object.values(chartMap).forEach((chart) => chart.resize());
  });
}

function startTimer() {
  window.setInterval(() => {
    if (!state.result) {
      const seconds = Math.round((Date.now() - state.quizStartedAt) / 1000);
      document.querySelector("#quizTimer").textContent = formatTime(seconds);
    }
  }, 1000);
}

async function loadBackendBootstrap() {
  try {
    const response = await fetch(`${API_BASE}/api/bootstrap`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!data.scenarios || !data.scenarios.math) throw new Error("Invalid bootstrap payload");
    scenarioConfigs = data.scenarios;
    aiCapability = data.ai || aiCapability;
    dataSource = "FastAPI + SQLite 后端场景数据";
    activeScenarioId = scenarioConfigs[activeScenarioId] ? activeScenarioId : Object.keys(scenarioConfigs)[0];
    state = createState(getScenario());
    state.backendStatus = "已连接 FastAPI 后端，提交诊断会写入 SQLite。";
  } catch (error) {
    aiCapability = {
      configured: false,
      enabled: false,
      provider: "Local rule template",
      model: "rule-template",
      mode: "rule-only",
      detail: "未连接后端，当前使用前端规则模板。",
    };
    dataSource = "前端内置场景数据";
    state.backendStatus = "未连接后端，当前使用前端规则引擎。";
  }
}

async function boot() {
  await loadBackendBootstrap();
  renderScenarioControls();
  renderScenarioText();
  renderAiToggle();
  renderQuiz();
  renderStudentContent();
  renderTeacherContent();
  renderTechContent();
  renderMetrics();
  bindEvents();
  updateCharts();
  startTimer();
}

boot();
