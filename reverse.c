// @link https://leetcode-cn.com/problems/reverse-integer/
// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

#include <stdio.h>

// 思路： 将输入的数值最小位往高位拆
//       新的数据挨个填充即可。其实就是 10 进制相关的表示而已
// 翻转时需要注意溢出的情况
int reverse(int x)
{
    long long int result = 0;

    while (x != 0)
    {
        result = 10 * result + x % 10;
        x /= 10;

        if (result < (signed int)0x80000000 || result > 0x7fffffff)
        {
            return 0;
        }
    }
    return result;
}

int main()
{
    int i = 1234;
    printf("%d\n", reverse(i));

    i = -1234;
    printf("%d\n", reverse(i));

    return 0;
}
