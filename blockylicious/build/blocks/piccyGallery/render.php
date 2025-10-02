<?
    $block_wrapper_attributes = get_block_wrapper_attributes();
?>

<div <?php echo $block_wrapper_attributes; ?>>
    <div class="image-preview">
        <img class="image-preview-img" />
    </div>
    <div class="gallery-thumbnails">
        <? echo $content; ?>
    </div>
</div>