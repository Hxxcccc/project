import Mock from 'mockjs'
import data from './data.json'
import surprise from './surprise.json'
import dogFoods from './dogFoods.json'
import classify from './classify.json'

Mock.mock('/api/dog', {code: 0, data: data})
Mock.mock('/api/surprise', {code: 0, data: surprise})
Mock.mock('/api/dogFoods', {code: 0, data: dogFoods})
Mock.mock('/api/classify', {code: 0, data: classify})


