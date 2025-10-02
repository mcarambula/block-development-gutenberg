<?php
/**
 * Plugin Name:       Blockylicious
 * Description:       A plugin of funky blocks.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Marion Carambula
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blockylicious
 * Category:          Widgets
 * Author URI:        https://example.com
 * Network:           false
 *
 * @package CreateBlock
 */

/* Prevents Function Name Conflicts */
namespace BlockyliciousModop;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Main plugin class.
 */
final class Blockylicious
{
    /**
     * Initialize the plugin.
     *
     * @return void
     */
    public static function init()
    {
        add_action('enqueue_block_assets', function () {
            $style_url = plugins_url('build/style-index.css', __FILE__);
            wp_enqueue_style( 'blockylicious-style', $style_url, array());
        });
        
        add_action('init', function () {
            add_filter('block_categories_all', [self::class, 'createCustomBlockCategory']);

            register_block_type(__DIR__ . "/build/blocks/curvy");
            register_block_type(__DIR__ . "/build/blocks/clickyGroup");
            register_block_type(__DIR__ . "/build/blocks/clickyButton");
            register_block_type(__DIR__ . "/build/blocks/piccyGallery");
            register_block_type(__DIR__ . "/build/blocks/piccyImage");

            register_block_pattern_category('blockylicious', [
                'label' => __('Blockylicious', 'blockylicious')
            ]);
        });

        // Initialize patterns
        require_once __DIR__ . '/inc/patterns/patterns-loader.php';
        \BlockyliciousModop\Patterns\init_patterns();

        $script_url = plugins_url('build/index.js', __FILE__);
        wp_enqueue_script( 'blockylicious-index', $script_url, ['wp-blocks', 'wp-element', 'wp-editor']);
        $style_url = plugins_url('build/style-index.css', __FILE__);
        wp_enqueue_style( 'blockylicious-style', $style_url, array());
    }

    /**
     * Create a custom block category to group the blocks.
     * This puts it at the top of the list.
     * Without this function, the custom blocks would appear in the
     * default "Widgets" category, which is less organized and harder for users to find.
     *
     * @param array $categories Existing block categories.
     * @return array Modified block categories.
     */
    public static function createCustomBlockCategory($categories)
    {
        array_unshift($categories, [
            'slug'  => 'blockylicious',
            'title' => 'Blockylicious',
        ]);
        return $categories;
    }

    /**
     * Function to get the custom properties from the block (style).
     *
     * @param string $value The value to convert.
     * @return string The converted value.
     */
    public static function convertCustomProperties($value)
    {
        $prefix     = 'var:';
        $prefix_len = strlen($prefix);
        $token_in   = '|';
        $token_out  = '--';
        if (str_starts_with($value, $prefix)) {
            $unwrapped_name = str_replace(
                $token_in,
                $token_out,
                substr($value, $prefix_len)
            );
            $value          = "var(--wp--$unwrapped_name)";
        }

        return $value;
    }

	
}

Blockylicious::init();