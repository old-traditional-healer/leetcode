<?php

class Solution
{

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function moveZeroes(&$nums)
    {
        $len = count($nums);
        $hits = 0;
        for ($k = 0; $k < $len; $k++) {
            if ($nums[$k] !== 0) {
                $nums[$hits] = $nums[$k];
                $hits++;
            }
        }

        // echo sprintf('after: $k=%s, $nums=%s' . PHP_EOL, $k, implode(',', $nums));

        for ($k = $hits; $k < $len; $k++) {
            $nums[$k] = 0;
        }

        // echo sprintf('after: $k=%s, $nums=%s' . PHP_EOL, $k, implode(',', $nums));
    }
}

$nums = [0, 1, 0, 3, 12];
(new Solution)->moveZeroes($nums);
var_export($nums);

$nums = [0,  0, 1];
(new Solution)->moveZeroes($nums);
var_export($nums);
