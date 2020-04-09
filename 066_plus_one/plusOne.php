<?php

class Solution
{

    /**
     * @param Integer[] $digits
     * @return Integer[]
     */
    function plusOne($digits)
    {
        $len = count($digits);

        for ($i = $len - 1; $i >= 0; $i--) {
            if ($digits[$i] == 9) {
                $digits[$i] = 0;
            } else {
                $digits[$i] += 1;
                return $digits;
            }
        }

        if ($digits[$i] == 0) {
            array_unshift($digits, 1);
        }

        return $digits;
    }
}

var_export((new Solution)->plusOne([1, 9, 9, 9, 9]));
