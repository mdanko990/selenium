import {test1, test2, test3, test4, test5, test6} from 'tests/all_tests.js';

describe('selenium testing', () => {
    it('check clicking on Language button', () => {
      test1();
    }),
    it('check clicking on Contact button', () => {
      test2();
    }),
    it('check changing language', () => {
      test3();
    }),
    it('check returning to main page', () => {
      test4();
    }),
    it('check opening details about location of office', () => {
      test5();
    }),
    it('check clicking on Search button', () => {
      test6();
    })
});