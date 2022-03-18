
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    
})

test('clicking draw button displays bot choices', async ()=>{
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    expect(await choices.isDisplayed()).toBe(true)
    
})

test('clicking bot displays bot duo', async ()=>{
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(5000)
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(5000)
    const playerDuo = await driver.findElement(By.id('player-duo'))
    expect(await playerDuo.isDisplayed()).toBe(true)
    
})