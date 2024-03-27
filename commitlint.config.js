module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
	  // type 类型定义
	  'type-enum': [2, 'always', [
		"feat", // 新功能 feature
		"fix", // 修复 bug
		"docs", // 文档注释
		"style", // 代码格式(不影响代码运行的变动)
		"refactor", // 重构(既不增加新功能，也不是修复bug)
		"perf", // 性能优化
		"test", // 增加测试
		"chore", // 构建过程或辅助工具的变动
		"revert", // 回退
		"build" // 打包
	  ]],
	  // subject 大小写不做校验
	  // 自动部署的BUILD ROBOT的commit信息大写，以作区别
	  'subject-case': [0]
	}
  };
  
  作者：鱼塘首席小龙虾酱
  链接：https://juejin.cn/post/6844903793033756680
  来源：稀土掘金
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。