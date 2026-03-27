import { test, expect } from '@playwright/test'

test('首页可以正常显示并点击按钮', async ({ page }) => {
  // 1. 打开项目页面
  await page.goto('http://localhost:5173')

  // 2. 检查页面标题
  await expect(page.locator('h1')).toContainText('Vite + Vue')

  // 3. 点击按钮
  await page.click('button')

  // 4. 检查计数变化
  await expect(page.locator('p')).toContainText('计数：1')
})
