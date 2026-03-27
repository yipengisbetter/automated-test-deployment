import { test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import Counter from './Counter.vue'

test('点击按钮后，计数应该从 0 变成 1', async () => {
  // 1. 渲染组件
  render(Counter)

  // 2. 获取初始值（0）
  const countText = screen.getByText('计数：0')

  // 3. 获取按钮
  const button = screen.getByText('+1')

  // 4. 模拟点击
  await fireEvent.click(button)

  // 5. 断言：数值变成 1
  expect(screen.getByText('计数：1')).toBeInTheDocument()
})
