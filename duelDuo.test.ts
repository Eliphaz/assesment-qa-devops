
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
    driver.sleep(1000)
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    driver.sleep(5000)
    expect(displayed).toBe(true)
    
})

test('clicking draw button displays bot choices', async ()=>{
    driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    driver.sleep(5000)
    expect(await choices.isDisplayed()).toBe(true)
    
})

test('clicking bot displays bot duo', async ()=>{
    driver.findElement(By.id('draw')).click()
    driver.sleep(1000)
    driver.findElement(By.className('bot-btn'[1])).click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    driver.sleep(5000)
    expect(await playerDuo.isDisplayed()).toBe(true)
    
})