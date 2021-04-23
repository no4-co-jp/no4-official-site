<?php

/**
 * 接頭辞文字列判定関数
 *
 * @param string $haystack 検索対象文字列
 * @param string $needle   接頭辞文字列
 * @return bool 判定結果(true:接頭辞文字列で開始されている、false:接頭辞文字列で開始されていない)
 */
function starts_with($haystack, $needle)
{
	$length = strlen($needle);
	return (substr($haystack, 0 , $length) === $needle);
}

/**
 * 空判定関数
 *
 * @param mixed $value 判定値
 * @return bool 判定結果(true:空、false:空以外)
 */
function is_empty($value)
{
	return empty($value) && ($value !== 0) && ($value !== '0');
}

?>
