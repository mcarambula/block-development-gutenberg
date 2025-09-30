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
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_blockylicious_block_init() {
	add_filter( 'block_categories_all', 'create_custom_block_category' );
	register_block_type( __DIR__ . "/build/blocks/curvy" );
	register_block_type( __DIR__ . "/build/blocks/clickyGroup" );
	register_block_type( __DIR__ . "/build/blocks/clickyButton" );
}
add_action( 'init', 'create_block_blockylicious_block_init' );


function create_custom_block_category( $categories ) {
	array_unshift($categories, [
		'slug'  => 'blockylicious',
		'title' => 'Blockylicious',
	]);

	return $categories;
}