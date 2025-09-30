<?

$hover_color      = $attributes['hoverColor'] ?? '#514BB1';
$background_color = $attributes['backgroundColor'] ?? '#503AA8';
$text_color       = $attributes['textColor'] ?? '#fff';
$hover_text_color = $attributes['hoverTextColor'] ?? '#fff';

$pad   = $attributes['style']['spacing']['padding'] ?? null;

$style_inline = sprintf(
    '--btn-bg:%s;--btn-text:%s;--hover-bg:%s;--hover-text:%s;%s',
    esc_attr($background_color),
    esc_attr($text_color),
    esc_attr($hover_color),
    esc_attr($hover_text_color),
    $pad ? sprintf(
    'padding:%s %s %s %s;',
    esc_attr($pad['top'] ?? '10px'),
    esc_attr($pad['right'] ?? '15px'),
    esc_attr($pad['bottom'] ?? '10px'),
    esc_attr($pad['left'] ?? '15px')
    ) : ''
);

$attrs = get_block_wrapper_attributes( [
    'class' => 'wp-block-blockylicious-clicky-button',
    'style' => $style_inline,
] );

$href = ! empty( $attributes['linkedPost'] ) ? get_permalink( $attributes['linkedPost'] ) : '#';
?>
<a href="<?php echo esc_url( $href ); ?>" <?php echo $attrs; ?>>
    <?php echo esc_html( $attributes['labelText'] ); ?>
</a>