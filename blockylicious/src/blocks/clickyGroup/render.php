<?php
use BlockyliciousModop\Blockylicious;

$blockGap       = Blockylicious::convertCustomProperties($attributes['style']['spacing']['blockGap'] ?? '10px');
$justifyContent = $attributes['justifyContent'] ?? 'center';

// Handle margin spacing
$margin = $attributes['style']['spacing']['margin'] ?? null;
$marginStyle = '';
if ($margin) {
    $marginStyle = sprintf(
        'margin-top: %s; margin-right: %s; margin-bottom: %s; margin-left: %s;',
        esc_attr($margin['top'] ?? '0'),
        esc_attr($margin['right'] ?? '0'),
        esc_attr($margin['bottom'] ?? '0'),
        esc_attr($margin['left'] ?? '0')
    );
}

// Get the block attributes
$block_attributes = get_block_wrapper_attributes([
    'style' => sprintf(
        'gap: %s; justify-content: %s; %s',
        esc_attr($blockGap),
        esc_attr($justifyContent),
        $marginStyle
    ),
]);

?>
<div <?php echo $block_attributes; ?>>
    <?php echo $content; ?>
</div>