---
title: Easiest way to mock axios (Jest + Vue)
published: 5/8/2019
readTime: 4
---

I recently had to mock axios while writing tests for a huge frontend project at work. I'm writing this tutorial because I know that sometime in the future I will be googling this again and I might as well save future me the stress and document what I found right now.

First off, install **jest-mock-axios** with `npm install -D jest-mock-axios` or `yarn add -D jest-mock-axios`.

Next up, create a new folder `__mocks__` in your **Jest root directory**. Your Jest root directory is defined in your project's **package.json**.

```js
"jest": {
    "roots": [
      "spec/client"
    ],
}
```

Next, create a new file and name it `axios.js`. Make sure to place it in your newly created `__mocks__` folder.

Place the code below in axios.js

```js
// __mocks__/axios.js
import mockAxios from 'jest-mock-axios';
export default mockAxios;
```

<content-break />

At this point, set-up is complete. Below is an example usage of the mocked version of axios you just finished setting up using this tutorial.

```js
// Uploader.vue

import Uploader from 'Uploader';
import mockAxios from 'jest-mock-axios';
import { shallowMount } from '@vue-test-utils';

describe('Uploader.vue', () => {
	test('it should delete uploaded file', () => {
		const wrapper = shallowMount(Uploader);
		wrapper.setData({ uploads: [{ name: 'Upload 1', public_id: 'test_id' }] });
		wrapper.find('.uploads>li:first-child').trigger('click');
		mockAxios.mockResponse({ status: 200 });

		expect(wrapper.emitted('filedeleted').length).toEqual(1);
	});
});
```

For more information on the possibilities of **jest-mock-axios**, visit this [link](https://www.npmjs.com/package/jest-mock-axios).
