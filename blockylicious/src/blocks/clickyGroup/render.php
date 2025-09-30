<?php

$blockGap = convert_custom_properties($attributes['style']['spacing']['blockGap'] ?? '10px');

// Get the block attributes
$block_attributes = get_block_wrapper_attributes([
    'style' => 'gap: ' . $blockGap . ';',
]);

?>
<div <?php echo $block_attributes; ?>>
    <?php echo $content; ?>
</div>