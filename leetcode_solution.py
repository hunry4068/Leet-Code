class Solution:

    # 772. Basic Calculator III
    def calculator(self, strParam: str) -> int:
        idx, stack = 0, []
        # handle parentheses
        while ')' in strParam and idx < len(strParam):
            elem = strParam[idx]
            if elem == '(':
                stack.append(idx)
            if elem == ')':
                left = stack.pop()
                right = idx
                sub_val = self.sub_calc(strParam[left+1:right])
                # update strParam and idx
                strParam = strParam[:left] + str(sub_val) + strParam[right+1:]
                idx = left
            idx += 1
        # finally calculate result without parentheses
        return self.sub_calc(strParam)

    def sub_calc(self, sub_str: str) -> int:
        op_str, num_arr, op_arr = '*/+-', [], []
        # scan through sub_str to split number and operator
        for idx in range(len(sub_str)):
            elem = sub_str[idx]
            if elem in op_str:
                op_arr.append(elem)
                continue
            num = int(elem)
            if len(num_arr) == 0 or sub_str[idx-1] in op_str:
                num_arr.append(num)
            else:
                num_arr[-1] = 10 * num_arr[-1] + num

        # function to execute calculator
        def calc_helper(op: str, num_arr: list[int], op_arr: list[str]) -> list[list[int], list[str]]:
            handler = {
                '*': lambda x, y: x * y,
                '/': lambda x, y: x / y,
                '+': lambda x, y: x + y,
                '-': lambda x, y: x - y,
            }
            idx = op_arr.index(op)
            val = int(handler[op_arr.pop(idx)](num_arr[idx], num_arr[idx+1]))
            num_arr = num_arr[:idx] + [val] + num_arr[idx+2:]
            # op_arr = op_arr[:idx] + op_arr[idx+1:]
            return [num_arr, op_arr]

        # go through */+-
        for op in op_str:
            while op in op_arr:
                num_arr, op_arr = calc_helper(op, num_arr, op_arr)
        return num_arr[0]

    # 1220. Count Vowels Permutation
    def countVowelPermutation(self, n: int) -> int:
        dic = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1}
        for len in range(1, n):
            a, e, i, o, u = dic.values()
            dic['a'] = e + i + u
            dic['e'] = a + i
            dic['i'] = e + o
            dic['o'] = i
            dic['u'] = i + o
        return sum(dic.values()) % (pow(10, 9) + 7)