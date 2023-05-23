import { ChainablePromiseElement } from 'webdriverio';

export async function sendKeys(
  element: ChainablePromiseElement<WebdriverIO.Element>,
  text: string,
): Promise<void> {
  await element.waitForDisplayed();
  await element.clearValue();
  await element.addValue(text);
}
export async function waitPageToLoad() {
  await browser.waitUntil(
    () => {
      return browser.execute(() => {
        return document.readyState === 'complete';
      });
    },
    {
      timeout: 10000,
      timeoutMsg: 'Page did not load within the timeout period',
    },
  );
}
