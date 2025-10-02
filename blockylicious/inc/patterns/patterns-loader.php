<?php
/**
 * Block Patterns Loader
 *
 * @package Blockylicious
 */

namespace BlockyliciousModop\Patterns;

if ( ! defined( 'ABSPATH' ) ) 
{
    exit; // Exit if accessed directly.
}

/**
 * Initialize all block patterns.
 *
 * @return void
 */
function init_patterns() 
{
    // Load pattern files
    require_once __DIR__ . '/call-to-action.php';
    
    // Register patterns
    add_action( 'init', __NAMESPACE__ . '\register_call_to_action_pattern' );
}
