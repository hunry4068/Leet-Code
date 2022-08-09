
from parameterized import parameterized, param
import unittest
import leetcode_solution


class LeetCodeTestCase(unittest.TestCase):

    # 772. Basic Calculator III
    @parameterized.expand([
        param('5+2*3-1', 10),
        param('4*(30-5)/2', 50),
        param('((22+3)*10/(10-5)+50)*10', 1000),
    ])
    def test_calculator(self, strParam, expected):
        test_result = leetcode_solution.Solution().calculator(strParam=strParam)
        self.assertEqual(test_result, expected)

    # 1220. Count Vowels Permutation

    # # execute before test
    # def setUp(self) -> None:
    #     self.case_list = [
    #         {'data': {'n': 1}, 'expected': 5},
    #         {'data': {'n': 2}, 'expected': 10},
    #         {'data': {'n': 5}, 'expected': 68}
    #     ]

    # # execute after test
    # def tearDown(self) -> None:
    #     self.args = None
    # def test_countVowelPermutation(self):
    #     for case in self.case_list:
    #         expected = case['expected']
    #         data = case['data']
    #         test_result = leetcode_solution.Solution().countVowelPermutation(data['n'])
    #         self.assertEqual(test_result, expected)

    @parameterized.expand([
        param(1, 5),
        param(2, 10),
        param(5, 68),
    ])
    def test_countVowelPermutation(self, n, expected):
        test_result = leetcode_solution.Solution().countVowelPermutation(n)
        self.assertEqual(test_result, expected)

if __name__ == '__main__':
    unittest.main()