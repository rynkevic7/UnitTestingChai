const {expect} = require('chai');

/*
Создайте переменную с названием марки автомобиля, и присвойте ей значение модели автомобиля.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const bmw = m3\

```
 */

//Solution

const ferrari = 'Enzo';

//Tests

it('Переменная `ferrary` существует и ей присвоено значение', () =>  {
  expect(ferrari).not.undefined;
});

it('Переменная `ferrary` отвечает типу `string`', () =>  {
  expect(ferrari).a('string');
});

it('Переменной `ferrary` присвоено значение `Enzo` ', () =>  {
  expect(ferrari).eq('Enzo');
});