/**
 * @link https://leetcode-cn.com/problems/reverse-string/ 
 * 
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * 
 */

#include <stdio.h>

// 以中线为标准，前后交换位置
void reverseString(char *s, int sSize)
{
    if (sSize < 2)
    {
        return;
    }

    int left = 0, right = sSize - 1;
    char tmp;

    while (left < right)
    {
        tmp = s[left];
        s[left] = s[right];
        s[right] = tmp;

        left++;
        right--;
    }
}

void printArr(const char *s, int sSize)
{
    int i = 0;
    while (i < sSize)
    {
        printf("%c ", s[i++]);
    }

    puts("\n");
}

int main()
{
    char t1[] = {'h', 'e', 'l', 'l', 'o'};
    int len = 5;

    printArr(t1, 5);
    reverseString(t1, len);
    printArr(t1, 5);
}
