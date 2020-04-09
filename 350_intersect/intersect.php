<?php

function intersect($nums1, $nums2)
{
    sort($nums1);
    sort($nums2);

    $len1 = count($nums1); // 1,2,3
    $len2 = count($nums2); // 0
    $k1 = 0;
    $k2 = 0;
    $result = [];

    while ($k1 < $len1 && $k2 < $len2) {
        if ($nums1[$k1] < $nums2[$k2]) {
            $k1++;
        } elseif ($nums1[$k1] == $nums2[$k2]) {
            array_push($result, $nums1[$k1]);
            $k1++;
            $k2++;
        } else {
            $k2++;
        }
    }

    return $result;
}

var_export(intersect([3, 2, 2, 1], [2, 2]));
