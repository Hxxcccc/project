import Mock from 'mockjs'
import data from './data.json'
import surprise from './surprise.json'

Mock.mock('/api/dog', {code: 0, data: data})
Mock.mock('/api/surprise', {code: 0, data: surprise})

// 当前模块只需要被执行一次, 接口就可以访问了
console.log('执行mockServer...')
