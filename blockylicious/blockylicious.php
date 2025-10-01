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

/* Prevents Function Name Conflicts */
namespace BlockyliciousModop;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


final class Blockylicious {
	static function init() {
		add_action( 'init', function(){
			add_filter( 'block_categories_all', [self::class, 'create_custom_block_category'] );

			register_block_type( __DIR__ . "/build/blocks/curvy" );
			register_block_type( __DIR__ . "/build/blocks/clickyGroup" );
			register_block_type( __DIR__ . "/build/blocks/clickyButton" );
			register_block_type( __DIR__ . "/build/blocks/piccyGallery" );
			register_block_type( __DIR__ . "/build/blocks/piccyImage" );
		} );
	}

	/** This function is to create a custom block category, it's used 
	 * to group the blocks. And puts it at the top of the list.
	 * Without this function, the custom blocks would appear in the * default "Widgets" category, which is les organized and harder for users to find.
	*/
	static function create_custom_block_category($categories) {
		array_unshift($categories, [
			'slug'  => 'blockylicious',
			'title' => 'Blockylicious',
		]);
		return $categories;
	}
	
	/** Function to get the custom properties from the block (style) */
	static function convert_custom_properties($value) {
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