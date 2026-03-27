import { expect, test } from 'vitest'
import { sum } from './sum'

// 测试用例1：正数相加
test('sum(1, 2) 应该等于 3', () => {
  expect(sum(1, 2)).toBe(3)
})

// 测试用例2：负数相加
test('sum(-1, -1) 应该等于 -2', () => {
  expect(sum(-1, -1)).toBe(-2)
})
