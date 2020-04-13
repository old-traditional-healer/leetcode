#include <stdio.h>

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
