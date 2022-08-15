
from parameterized import parameterized, param
import unittest
import leetcode_solution

from typing import List, Optional

sol = leetcode_solution.Solution()

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class LeetCodeTestCase(unittest.TestCase):

    ### 772. Basic Calculator III

    # @parameterized.expand([
    #     param('5+2*3-1', 10),
    #     param('4*(30-5)/2', 50),
    #     param('((22+3)*10/(10-5)+50)*10', 1000),
    # ])
    # def test_calculator(self, strParam: str, expected: int):
    #     test_result = sol.calculator(strParam=strParam)
    #     self.assertEqual(test_result, expected)

    ### 1220. Count Vowels Permutation

    # execute before test
    # def setUp(self) -> None:
    #     self.case_list = [
    #         {'data': {'n': 1}, 'expected': 5},
    #         {'data': {'n': 2}, 'expected': 10},
    #         {'data': {'n': 5}, 'expected': 68}
    #     ]

    # execute after test
    # def tearDown(self) -> None:
    #     self.args = None
    # def test_countVowelPermutation(self):
    #     for case in self.case_list:
    #         expected = case['expected']
    #         data = case['data']
    #         test_result = sol.countVowelPermutation(data['n'])
    #         self.assertEqual(test_result, expected)

    # @parameterized.expand([
    #     param(1, 5),
    #     param(2, 10),
    #     param(5, 68),
    # ])
    # def test_countVowelPermutation(self, n: int, expected: int):
    #     test_result = sol.countVowelPermutation(n)
    #     self.assertEqual(test_result, expected)

    ### 108. Convert Sorted Array to Binary Search Tree

    # @parameterized.expand([
    #     param([-10,-3,0,5,9], [0,-3,9,-10,None,5]),
    #     param([1,3], [3,1])
    # ])
    # def test_sortedArrayToBST(self, nums: list[int], expected: list[int]):
    #     test_result = sol.sortedArrayToBST(nums=nums)
    #     self.assertEqual(test_result, expected)

    ### 30. Substring with Concatenation of All Words
    
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        pass


if __name__ == '__main__':
    unittest.main()