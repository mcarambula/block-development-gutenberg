<?php
//Adding more attributes to the block wrapper
    $block_attributes = get_block_wrapper_attributes([
        'class' => 'alignfull',
    ]);
?>

<div <?php echo $block_attributes; ?>>
    <?php echo $content; ?>
</div>